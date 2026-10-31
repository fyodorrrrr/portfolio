"use client";

import { useState } from "react";
import SectionIntro from "./SectionIntro";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/aquinojxse@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (status === "sending" || !form.reportValidity()) return;

    // Honeypot: bots fill every field, humans never see this one.
    if (form._honey.value) return;

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: `Portfolio contact from ${form.name.value}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="entry" data-reveal>
      <SectionIntro
        note="Open to opportunities, collaborations, and the occasional good conversation."
        accent="open to opportunities"
      >
        contact me,
      </SectionIntro>

      <div className="contact-grid">
        <div>
          <p className="contact-lede">
            Have a project in mind, or just want to talk shop? I reply within a day.
          </p>

          <div className="contact-channels">
            <a href="mailto:aquinojxse@gmail.com">
              <span>aquinojxse@gmail.com</span>
              <span className="arrow">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/jose-aquino-a16884382/" target="_blank" rel="noreferrer">
              <span>LinkedIn — jose-aquino</span>
              <span className="arrow">↗</span>
            </a>
            <a href="https://github.com/fyodorrrrr" target="_blank" rel="noreferrer">
              <span>GitHub — fyodorrrrr</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" type="text" name="name" autoComplete="name" required disabled={status === "sending"} />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Your email</label>
            <input id="contact-email" type="email" name="email" autoComplete="email" required disabled={status === "sending"} />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">What are you building?</label>
            <textarea id="contact-message" name="message" rows="4" required disabled={status === "sending"}></textarea>
          </div>

          <button type="submit" className="form-submit contact-submit" disabled={status === "sending"}>
            <span>{status === "sending" ? "Sending…" : "Send note"}</span>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 10h14M11 4l6 6-6 6" />
            </svg>
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {status === "sent" && "Thanks — I'll get back to you within a day."}
            {status === "error" && "Something went wrong. Try again, or email me directly."}
          </p>
        </form>
      </div>
    </section>
  );
}
