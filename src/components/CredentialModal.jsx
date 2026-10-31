"use client";

import { useEffect, useRef } from "react";
import CurtainLink from "./CurtainLink";

// Native <dialog> opened with showModal(): the browser traps focus, makes everything
// outside it inert (the Navbar included), closes on Escape, and returns focus to the
// opener. We add the page scroll lock and click-outside-to-close.
export default function CredentialModal({ credential, onClose, triggerRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousOverflow;
      triggerRef?.current?.focus();
    };
  }, [triggerRef]);

  // Clicks on the backdrop land on the <dialog> itself; clicks inside land on its children.
  const handleClick = (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  };

  const hasVerify = credential.verifyUrl && credential.verifyUrl !== "#";
  const facts = [
    ["Issued", credential.fullDate ?? credential.date],
  ].filter(([, value]) => value);

  return (
    <dialog
      ref={dialogRef}
      className={credential.image ? "credential-dialog" : "credential-dialog credential-dialog--compact"}
      aria-labelledby="credential-modal-title"
      onClose={onClose}
      onClick={handleClick}
    >
      <div className={credential.image ? "credential-modal" : "credential-modal credential-modal--compact"}>
        <button
          type="button"
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className="credential-modal-close"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {credential.image && (
          <div className="credential-modal-media">
            <a
              href={credential.image}
              target="_blank"
              rel="noreferrer"
              className="credential-modal-plate"
              aria-label={`Open ${credential.title} certificate at full size (opens in a new tab)`}
            >
              <img src={credential.image} alt={`${credential.title} certificate`} decoding="async" />
            </a>
          </div>
        )}

        <div className="credential-modal-body">
          {credential.logo && (
            <img src={credential.logo} alt="" aria-hidden="true" className="credential-modal-logo" />
          )}
          <span className="eyebrow">{credential.issuer}</span>
          <h3 id="credential-modal-title">{credential.title}</h3>

          {credential.skills?.length > 0 && (
            <ul className="credential-modal-skills" aria-label="Skills">
              {credential.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          )}

          {facts.length > 0 && (
            <dl className="credential-modal-facts">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {credential.description && <p className="credential-modal-desc">{credential.description}</p>}

          {(hasVerify || credential.related) && (
          <div className="credential-modal-actions">
            {hasVerify && (
              <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className="credential-modal-verify">
                Verify credential ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {credential.related && (
              <CurtainLink
                href={credential.related.href}
                className="credential-modal-related"
                onClick={(event) => {
                  if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                    dialogRef.current?.close();
                  }
                }}
              >
                {credential.related.label} →
              </CurtainLink>
            )}
          </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
