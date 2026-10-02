"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function CredentialModal({ credential, onClose, triggerRef }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mainEl = document.querySelector("main");
    mainEl?.setAttribute("inert", "");
    closeRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      mainEl?.removeAttribute("inert");
      triggerRef?.current?.focus();
    };
  }, [onClose, triggerRef]);

  if (!mounted) return null;

  const hasVerify = credential.verifyUrl && credential.verifyUrl !== "#";
  const canOpenFull = credential.image && !credential.image.endsWith(".svg");
  const facts = [
    ["Issued", credential.fullDate ?? credential.date],
    ["Result", credential.result],
    ["Credential ID", credential.credentialId],
  ].filter(([, value]) => value);

  return createPortal(
    <div className="credential-modal-backdrop">
      <div
        className={credential.image ? "credential-modal" : "credential-modal credential-modal--compact"}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-modal-title"
      >
        <button ref={closeRef} type="button" onClick={onClose} className="credential-modal-close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {credential.image && (
          <div className="credential-modal-media">
            <div className="credential-modal-plate">
              <img src={credential.image} alt={`${credential.title} certificate`} />
            </div>
            {canOpenFull && (
              <a href={credential.image} target="_blank" rel="noreferrer" className="credential-modal-full">
                Open full size ↗
              </a>
            )}
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

          <div className="credential-modal-actions">
            {hasVerify ? (
              <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className="credential-modal-verify">
                Verify credential ↗
              </a>
            ) : credential.image ? (
              <span className="credential-modal-note">Certificate on file</span>
            ) : null}
            {credential.related && (
              <a href={credential.related.href} className="credential-modal-related">
                {credential.related.label} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
