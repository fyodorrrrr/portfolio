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

  return (
    <dialog
      ref={dialogRef}
      className={credential.image ? "credential-dialog" : "credential-dialog credential-dialog--compact"}
      aria-labelledby="credential-modal-title"
      onClose={onClose}
      onClick={handleClick}
    >
      {/* Outside the scrolling panel, so it stays put while long content scrolls on phones. */}
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
      <div className={credential.image ? "credential-modal" : "credential-modal credential-modal--compact"}>

        {credential.image && (
          <div className="credential-modal-media">
            <a
              href={credential.image}
              target="_blank"
              rel="noreferrer"
              className="credential-modal-plate"
              aria-label={`Open ${credential.imageAlt ?? `${credential.title} certificate`} at full size (opens in a new tab)`}
            >
              <img src={credential.image} alt={credential.imageAlt ?? `${credential.title} certificate`} decoding="async" />
            </a>
          </div>
        )}

        <div className="credential-modal-body">
          <h3 id="credential-modal-title">{credential.title}</h3>
          {credential.description && <p className="credential-modal-desc">{credential.description}</p>}

          {/* Skills and actions, grouped below the description. */}
          <div className="credential-modal-foot">
          {credential.skills?.length > 0 && (
            <>
              <p className="credential-modal-label" id="credential-modal-skills">Skills</p>
              <ul className="credential-modal-skills" aria-labelledby="credential-modal-skills">
                {credential.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </>
          )}

          {(hasVerify || credential.related) && (
            <div className="credential-modal-actions">
              {hasVerify && (
                <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className="credential-modal-verify">
                  Verify <span aria-hidden="true">↗</span>
                  <span className="sr-only"> {credential.title} (opens in a new tab)</span>
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
      </div>
    </dialog>
  );
}
