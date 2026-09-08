import { NextResponse } from "next/server";
import { Resend } from "resend";

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
                    message: "Email service is currently unavailable.",
                },
                {
                    status: 503,
                }
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Create Resend client only when the API is actually called
        |--------------------------------------------------------------------------
        */

        const resend = new Resend(resendApiKey);

        /*
        |--------------------------------------------------------------------------
        | Read contact form
        |--------------------------------------------------------------------------
        */

        const body = await request.json();

        const {
            name,
            email,
            subject,
            message,
        } = body;

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

        /*
        |--------------------------------------------------------------------------
        | Send Email
        |--------------------------------------------------------------------------
        */

        const { data, error } = await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>",

            // Replace this with your receiving email.
            to: ["your-email@example.com"],

            replyTo: email,

            subject: subject
                ? `Website Contact: ${subject}`
                : `Website Contact from ${name}`,

            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Website Contact Message</h2>

                    <p>
                        <strong>Name:</strong><br>
                        ${escapeHtml(name)}
                    </p>

                    <p>
                        <strong>Email:</strong><br>
                        ${escapeHtml(email)}
                    </p>

                    <p>
                        <strong>Subject:</strong><br>
                        ${escapeHtml(subject || "No subject")}
                    </p>

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
                    message: "Unable to send your message.",
                },
                {
                    status: 500,
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
                message: "An unexpected error occurred.",
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