import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contact } from "@/data/site";

/*
|--------------------------------------------------------------------------
| Optional fields sent by the developer and photography forms
|--------------------------------------------------------------------------
*/

const detailFields = [
    ["projectType", "Enquiry type"],
    ["budget", "Budget / scope"],
    ["shootType", "Shoot type"],
    ["date", "Preferred date"],
    ["location", "Location"],
] as const;

export async function POST(request: Request) {
    try {
        /*
        |--------------------------------------------------------------------------
        | Validate Resend configuration at runtime
        |--------------------------------------------------------------------------
        |
        | Do NOT instantiate Resend at module level.
        | Next.js imports route modules during the build process.
        |
        */

        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error(
                "Contact form email failed: RESEND_API_KEY is not configured."
            );

            return NextResponse.json(
                {
                    success: false,
                    message: "The contact form is temporarily unavailable.",
                },
                {
                    status: 503,
                }
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Read contact form
        |--------------------------------------------------------------------------
        */

        const body = await request.json();

        const { name, email, message, source, website } = body;

        /*
        |--------------------------------------------------------------------------
        | Honeypot
        |--------------------------------------------------------------------------
        |
        | Bots fill the hidden "website" field. Pretend it worked.
        |
        */

        if (website) {
            return NextResponse.json({ success: true, message: "Message sent." });
        }

        /*
        |--------------------------------------------------------------------------
        | Basic validation
        |--------------------------------------------------------------------------
        */

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email, and message are required.",
                },
                {
                    status: 422,
                }
            );
        }

        const details = detailFields.flatMap(([key, label]) =>
            body[key] ? [{ label, value: body[key] }] : []
        );

        const sourceLabel =
            source === "photography" ? "Photography" : "Developer";

        const subject = body.projectType || body.shootType;

        /*
        |--------------------------------------------------------------------------
        | Send Email
        |--------------------------------------------------------------------------
        */

        const resend = new Resend(resendApiKey);

        const { data, error } = await resend.emails.send({
            // Resend's shared test sender only delivers to the Resend account
            // owner's address. Use a verified domain to send anywhere else.
            from: "Website Contact <onboarding@resend.dev>",

            to: [contact.email],

            replyTo: email,

            subject: subject
                ? `[${sourceLabel}] ${subject} from ${name}`
                : `[${sourceLabel}] Website contact from ${name}`,

            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New ${escapeHtml(sourceLabel)} Contact Message</h2>

                    <p>
                        <strong>Name:</strong><br>
                        ${escapeHtml(name)}
                    </p>

                    <p>
                        <strong>Email:</strong><br>
                        ${escapeHtml(email)}
                    </p>

                    ${details
                        .map(
                            ({ label, value }) => `
                    <p>
                        <strong>${escapeHtml(label)}:</strong><br>
                        ${escapeHtml(value)}
                    </p>`
                        )
                        .join("")}

                    <p>
                        <strong>Message:</strong><br>
                        ${escapeHtml(message).replace(/\n/g, "<br>")}
                    </p>
                </div>
            `,
        });

        /*
        |--------------------------------------------------------------------------
        | Resend Error
        |--------------------------------------------------------------------------
        */

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                {
                    success: false,
                    message: "Your message couldn't be sent.",
                },
                {
                    status: 502,
                }
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Success
        |--------------------------------------------------------------------------
        */

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully.",
                id: data?.id,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Your message couldn't be sent.",
            },
            {
                status: 500,
            }
        );
    }
}

/*
|--------------------------------------------------------------------------
| Escape HTML
|--------------------------------------------------------------------------
|
| Prevent contact form values from injecting HTML into the email.
|
*/

function escapeHtml(value: unknown): string {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
