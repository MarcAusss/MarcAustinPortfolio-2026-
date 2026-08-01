import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

type ContactSource =
  | "developer"
  | "photography";

type ContactRequest = {
  source?: ContactSource;

  name?: string;
  email?: string;
  message?: string;

  projectType?: string;
  budget?: string;

  shootType?: string;
  date?: string;
  location?: string;

  /*
   * Honeypot.
   * Real visitors never fill this.
   */
  website?: string;
};

function clean(
  value: unknown,
  maxLength = 5000,
) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .slice(0, maxLength);
}

function validEmail(
  email: string,
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email,
  );
}

export async function POST(
  request: Request,
) {
  try {
    /*
    |--------------------------------------------------------------------------
    | Configuration
    |--------------------------------------------------------------------------
    */

    if (
      !process.env.RESEND_API_KEY
    ) {
      console.error(
        "RESEND_API_KEY is missing.",
      );

      return NextResponse.json(
        {
          error:
            "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const recipient =
      process.env
        .CONTACT_TO_EMAIL;

    const sender =
      process.env
        .CONTACT_FROM_EMAIL ??
      "Marc Austin Portfolio <onboarding@resend.dev>";

    if (!recipient) {
      console.error(
        "CONTACT_TO_EMAIL is missing.",
      );

      return NextResponse.json(
        {
          error:
            "Contact recipient is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Parse
    |--------------------------------------------------------------------------
    */

    const body =
      (await request.json()) as ContactRequest;

    /*
    |--------------------------------------------------------------------------
    | Honeypot spam protection
    |--------------------------------------------------------------------------
    */

    if (clean(body.website)) {
      /*
       * Pretend it succeeded so bots
       * don't learn about the honeypot.
       */

      return NextResponse.json({
        success: true,
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Required values
    |--------------------------------------------------------------------------
    */

    const source =
      body.source ===
      "photography"
        ? "photography"
        : "developer";

    const name = clean(
      body.name,
      120,
    );

    const email = clean(
      body.email,
      254,
    );

    const message = clean(
      body.message,
      5000,
    );

    if (
      !name ||
      !email ||
      !message
    ) {
      return NextResponse.json(
        {
          error:
            "Name, email and message are required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!validEmail(email)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Additional information
    |--------------------------------------------------------------------------
    */

    const projectType = clean(
      body.projectType,
      150,
    );

    const budget = clean(
      body.budget,
      100,
    );

    const shootType = clean(
      body.shootType,
      150,
    );

    const date = clean(
      body.date,
      100,
    );

    const location = clean(
      body.location,
      250,
    );

    /*
    |--------------------------------------------------------------------------
    | Build subject
    |--------------------------------------------------------------------------
    */

    const subject =
      source ===
      "photography"
        ? `Photography Inquiry — ${name}`
        : `Developer Inquiry — ${name}`;

    /*
    |--------------------------------------------------------------------------
    | Build plain-text email
    |--------------------------------------------------------------------------
    |
    | Plain text avoids allowing visitors
    | to inject HTML into the email.
    |
    */

    const lines: string[] = [
      "NEW PORTFOLIO INQUIRY",
      "",
      `Portfolio: ${
        source ===
        "photography"
          ? "Photography"
          : "Developer"
      }`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
    ];

    if (
      source === "developer"
    ) {
      if (projectType) {
        lines.push(
          `Project Type: ${projectType}`,
        );
      }

      if (budget) {
        lines.push(
          `Budget: ${budget}`,
        );
      }
    }

    if (
      source ===
      "photography"
    ) {
      if (shootType) {
        lines.push(
          `Shoot Type: ${shootType}`,
        );
      }

      if (date) {
        lines.push(
          `Preferred Date: ${date}`,
        );
      }

      if (location) {
        lines.push(
          `Location: ${location}`,
        );
      }
    }

    lines.push(
      "",
      "MESSAGE",
      "--------------------------------",
      message,
      "",
      "--------------------------------",
      `Sent from the ${source} portfolio contact form.`,
    );

    /*
    |--------------------------------------------------------------------------
    | Send
    |--------------------------------------------------------------------------
    */

    const {
      data,
      error,
    } =
      await resend.emails.send({
        from: sender,

        to: [recipient],

        /*
         * Clicking Reply in your
         * inbox replies directly to
         * the visitor.
         */
        replyTo: email,

        subject,

        text: lines.join("\n"),
      });

    if (error) {
        console.error(
            "Resend error:",
            error,
        );

        return NextResponse.json(
            {
            error:
                process.env.NODE_ENV === "development"
                ? error.message
                : "Unable to send your message right now.",
            },
            {
            status: 500,
            },
        );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your message.",
      },
      {
        status: 500,
      },
    );
  }
}