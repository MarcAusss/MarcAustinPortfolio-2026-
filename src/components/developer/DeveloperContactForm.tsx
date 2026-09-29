"use client";

import {
  FormEvent,
  useState,
} from "react";

import { contact } from "@/data/site";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function DeveloperContactForm() {
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
      source: "developer",

      name:
        formData.get("name"),

      email:
        formData.get("email"),

      projectType:
        formData.get(
          "projectType",
        ),

      budget:
        formData.get("budget"),

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
          result.message ??
            "Your message couldn't be sent.",
        );
      }

      form.reset();

      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Your message couldn't be sent.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      {/* =============================================
          Honeypot
      ============================================= */}

      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="developer-website">
          Website
        </label>

        <input
          id="developer-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* =============================================
          Name
      ============================================= */}

      <div>
        <label
          htmlFor="developer-name"
          className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-dev-muted"
        >
          Your name
        </label>

        <input
          id="developer-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          disabled={
            status === "sending"
          }
          className="w-full border-0 border-b border-dev-border bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-dev-subtle focus:border-dev-foreground focus:ring-0 sm:text-lg"
        />
      </div>

      {/* =============================================
          Email
      ============================================= */}

      <div>
        <label
          htmlFor="developer-email"
          className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-dev-muted"
        >
          Email address
        </label>

        <input
          id="developer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          disabled={
            status === "sending"
          }
          className="w-full border-0 border-b border-dev-border bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-dev-subtle focus:border-dev-foreground focus:ring-0 sm:text-lg"
        />
      </div>

      {/* =============================================
          Project Type
      ============================================= */}

      <div>
        <label
          htmlFor="developer-project-type"
          className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-dev-muted"
        >
          What can I help with?
        </label>

        <select
          id="developer-project-type"
          name="projectType"
          defaultValue=""
          disabled={
            status === "sending"
          }
          className="w-full border-0 border-b border-dev-border bg-dev-background px-0 py-4 text-base outline-none focus:border-dev-foreground focus:ring-0 sm:text-lg"
        >
          <option
            value=""
            disabled
          >
            Select project type
          </option>

          <option value="Job opportunity (full-time / contract)">
            Job opportunity (full-time / contract)
          </option>

          <option value="Web Development">
            Web Development
          </option>

          <option value="System Development">
            System Development
          </option>

          <option value="UI/UX Design">
            UI/UX Design
          </option>

          <option value="Frontend Development">
            Frontend Development
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      {/* =============================================
          Budget
      ============================================= */}

      <div>
        <label
          htmlFor="developer-budget"
          className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-dev-muted"
        >
          Budget / Scope
        </label>

        <input
          id="developer-budget"
          name="budget"
          type="text"
          placeholder="Optional"
          disabled={
            status === "sending"
          }
          className="w-full border-0 border-b border-dev-border bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-dev-subtle focus:border-dev-foreground focus:ring-0 sm:text-lg"
        />
      </div>

      {/* =============================================
          Message
      ============================================= */}

      <div>
        <label
          htmlFor="developer-message"
          className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-dev-muted"
        >
          Tell me about it
        </label>

        <textarea
          id="developer-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Project, idea, opportunity or collaboration..."
          disabled={
            status === "sending"
          }
          className="w-full resize-none border-0 border-b border-dev-border bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-dev-subtle focus:border-dev-foreground focus:ring-0 sm:text-lg"
        />
      </div>

      {/* =============================================
          Status
      ============================================= */}

      <div
        aria-live="polite"
        className="min-h-8"
      >
        {status ===
          "success" && (
          <p
            role="status"
            className="border-l-2 border-green-700 pl-4 text-sm leading-7"
          >
            Thanks, your message was sent.
            I&apos;ll reply to the email
            address you entered.
          </p>
        )}

        {status ===
          "error" && (
          <p
            role="alert"
            className="border-l-2 border-red-700 pl-4 text-sm leading-7 text-red-800"
          >
            {errorMessage} Please email
            me directly at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="underline underline-offset-4"
            >
              {contact.email}
            </a>
            .
          </p>
        )}
      </div>

      {/* =============================================
          Submit
      ============================================= */}

      <div className="flex justify-end pt-3">
        <button
          type="submit"
          disabled={
            status === "sending"
          }
          className="group flex h-28 w-28 items-center justify-center rounded-full bg-dev-dark text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-white transition-all duration-500 hover:-translate-y-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-32 sm:w-32"
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
                message
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