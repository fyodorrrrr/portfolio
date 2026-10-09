"use client";

import { useRef, useState } from "react";
import CredentialModal from "./CredentialModal";

function groupByCategory(items) {
  const groups = [];
  for (const item of items) {
    let group = groups.find((g) => g.category === item.category);
    if (!group) {
      group = { category: item.category, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
}

function hasView(credential) {
  return Boolean(credential.image || credential.modal || credential.verifyUrl);
}

function CredentialTrigger({ credential, onOpenModal, className, children }) {
  const triggerRef = useRef(null);

  if (credential.image || credential.modal) {
    return (
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => onOpenModal(credential, triggerRef)}
        className={className}
      >
        {children}
      </button>
    );
  }

  if (credential.verifyUrl) {
    return (
      <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className={className}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return <div className={`${className} ${className}--static`}>{children}</div>;
}

function CredentialRow({ credential, onOpenModal }) {
  return (
    <CredentialTrigger credential={credential} onOpenModal={onOpenModal} className="credential-row">
      {credential.logo && (
        <img src={credential.logo} alt="" aria-hidden="true" className="credential-watermark" />
      )}

      <span className="credential-year">{credential.date}</span>

      <div className="credential-info">
        <span className="credential-issuer eyebrow">{credential.issuer}</span>
        <h4 className="credential-title">{credential.title}</h4>
      </div>

      {hasView(credential) && (
        <span className="credential-view">
          view <span className="credential-view-arrow" aria-hidden="true">→</span>
        </span>
      )}
    </CredentialTrigger>
  );
}

function CredentialCard({ credential, onOpenModal }) {
  return (
    <CredentialTrigger credential={credential} onOpenModal={onOpenModal} className="credential-card">
      <div className="credential-card-top">
        {credential.logo ? (
          <img src={credential.logo} alt="" aria-hidden="true" className="credential-card-logo" />
        ) : (
          <span />
        )}
        <span className="credential-card-year">{credential.date}</span>
      </div>

      <span className="credential-issuer eyebrow">{credential.issuer}</span>
      <h2 className="credential-card-title">{credential.title}</h2>

      {hasView(credential) && (
        <span className="credential-card-view">
          view <span className="credential-card-arrow" aria-hidden="true">→</span>
        </span>
      )}
    </CredentialTrigger>
  );
}

export default function CredentialsList({ items, limitPerCategory, variant = "rows", children }) {
  const groups = groupByCategory(items);
  const [openCredential, setOpenCredential] = useState(null);
  const [filter, setFilter] = useState("all");
  const activeTriggerRef = useRef(null);

  const handleOpenModal = (credential, triggerRef) => {
    activeTriggerRef.current = triggerRef.current;
    setOpenCredential(credential);
  };
  const handleCloseModal = () => setOpenCredential(null);

  const modal = openCredential && (
    <CredentialModal credential={openCredential} onClose={handleCloseModal} triggerRef={activeTriggerRef} />
  );

  if (variant === "grid") {
    const visible = filter === "all" ? items : items.filter((c) => c.category === filter);
    const chips = [{ value: "all", label: "All", count: items.length }].concat(
      groups.map((g) => ({ value: g.category, label: g.category, count: g.items.length }))
    );

    return (
      <>
        <div className="credentials-filter" role="group" aria-label="Filter credentials by category">
          {chips.map((chip) => (
            <button
              key={chip.value}
              type="button"
              className="credentials-chip"
              aria-pressed={filter === chip.value}
              onClick={() => setFilter(chip.value)}
            >
              {chip.label} <span className="credentials-chip-count">{chip.count}</span>
            </button>
          ))}
        </div>

        <div className="credentials-grid">
          {visible.map((credential, i) => (
            <CredentialCard credential={credential} key={`${credential.title}-${i}`} onOpenModal={handleOpenModal} />
          ))}
        </div>

        {modal}
      </>
    );
  }

  return (
    <>
      <div className="credentials-main">
        <div className="credentials-list">
          {groups.map((group) => (
            <div className="credentials-group" key={group.category}>
              <div className="credentials-group-heading">
                <h3 className="credentials-group-title">{group.category}</h3>
                <span className="rule" aria-hidden="true" />
              </div>
              {(limitPerCategory ? group.items.slice(0, limitPerCategory) : group.items).map((credential, i) => (
                <CredentialRow credential={credential} key={`${credential.title}-${i}`} onOpenModal={handleOpenModal} />
              ))}
            </div>
          ))}
        </div>

        {children}
      </div>

      {modal}
    </>
  );
}
