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

  return createPortal(
    <div className="credential-modal-backdrop">
      <div
        className="credential-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-modal-title"
      >
        <button ref={closeRef} type="button" onClick={onClose} className="credential-modal-close" aria-label="Close">
          ✕
        </button>

        <div className="plate credential-modal-plate">
          <img src={credential.image} alt={credential.title} className="rounded-lg" />
        </div>

        <div className="credential-modal-body">
          <span className="eyebrow">{credential.issuer} · {credential.date}</span>
          <h3 id="credential-modal-title">{credential.title}</h3>
          {credential.description && <p>{credential.description}</p>}
          {hasVerify && (
            <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className="credential-modal-verify">
              Verify ↗
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
