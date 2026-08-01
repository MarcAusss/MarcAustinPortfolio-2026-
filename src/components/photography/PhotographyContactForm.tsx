"use client";

import {
  FormEvent,
  useState,
} from "react";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function PhotographyContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const payload = {
      source:
        "photography",

      name:
        formData.get("name"),

      email:
        formData.get("email"),

      shootType:
        formData.get(
          "shootType",
        ),

      date:
        formData.get("date"),

      location:
        formData.get(
          "location",
        ),

      message:
        formData.get("message"),

      website:
        formData.get("website"),
    };

    try {
      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              payload,
            ),
          },
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ??
            "Unable to send inquiry.",
        );
      }

      form.reset();

      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send inquiry.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      {/* Honeypot */}

      <div
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="photo-website">
          Website
        </label>

        <input
          id="photo-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}

      <ContactField
        id="photo-name"
        name="name"
        label="Your name"
        placeholder="Your name"
        required
        disabled={
          status === "sending"
        }
      />

      {/* Email */}

      <ContactField
        id="photo-email"
        name="email"
        label="Email address"
        placeholder="you@example.com"
        type="email"
        required
        disabled={
          status === "sending"
        }
      />

      {/* Shoot type */}

      <div>
        <label
          htmlFor="shootType"
          className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
        >
          Type of shoot
        </label>

        <select
          id="shootType"
          name="shootType"
          defaultValue=""
          disabled={
            status === "sending"
          }
          className="w-full border-0 border-b border-white/15 bg-photo-background px-0 py-4 text-base text-white outline-none focus:border-white focus:ring-0 sm:text-lg"
        >
          <option
            value=""
            disabled
          >
            Select photography service
          </option>

          <option value="Portrait Session">
            Portrait Session
          </option>

          <option value="Event Photography">
            Event Photography
          </option>

          <option value="Creative Shoot">
            Creative Shoot
          </option>

          <option value="Brand / Editorial">
            Brand / Editorial
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      {/* Date */}

      <div>
        <label
          htmlFor="photo-date"
          className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
        >
          Preferred date
        </label>

        <input
          id="photo-date"
          name="date"
          type="date"
          disabled={
            status === "sending"
          }
          className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base text-white outline-none focus:border-white focus:ring-0 [color-scheme:dark] sm:text-lg"
        />
      </div>

      {/* Location */}

      <ContactField
        id="photo-location"
        name="location"
        label="Location"
        placeholder="City / Venue / Location"
        disabled={
          status === "sending"
        }
      />

      {/* Message */}

      <div>
        <label
          htmlFor="photo-message"
          className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
        >
          Tell me about the shoot
        </label>

        <textarea
          id="photo-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Describe what you have in mind..."
          disabled={
            status === "sending"
          }
          className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base leading-8 text-white outline-none placeholder:text-white/20 focus:border-white focus:ring-0 sm:text-lg"
        />
      </div>

      {/* Status */}

      <div
        aria-live="polite"
        className="min-h-8"
      >
        {status ===
          "success" && (
          <p className="text-sm text-white/70">
            Inquiry sent successfully.
            I&apos;ll get back to
            you soon.
          </p>
        )}

        {status ===
          "error" && (
          <p className="text-sm text-red-300">
            {errorMessage}
          </p>
        )}
      </div>

      {/* Submit */}

      <div className="flex justify-end pt-5">
        <button
          type="submit"
          disabled={
            status === "sending"
          }
          className="group flex h-28 w-28 items-center justify-center rounded-full bg-white text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-black transition-all duration-500 hover:-translate-y-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-32 sm:w-32 md:h-36 md:w-36"
        >
          <span>
            {status ===
            "sending" ? (
              <>
                Sending
                <br />
                ...
              </>
            ) : (
              <>
                Send
                <br />
                inquiry
                <br />
                ↗
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}

/*
|--------------------------------------------------------------------------
| Standard field
|--------------------------------------------------------------------------
*/

function ContactField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base text-white outline-none placeholder:text-white/20 focus:border-white focus:ring-0 sm:text-lg"
      />
    </div>
  );
}