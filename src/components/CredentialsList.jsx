"use client";

import { useEffect, useRef, useState } from "react";
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

function CredentialTrigger({ credential, onOpenModal, className, children, ...props }) {
  const triggerRef = useRef(null);

  if (credential.image || credential.modal) {
    return (
      <button
        {...props}
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
      <a {...props} href={credential.verifyUrl} target="_blank" rel="noreferrer" className={className}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return <div {...props} className={`${className} ${className.split(" ")[0]}--static`}>{children}</div>;
}

function CertificatePreview({ image }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <span className="credential-preview" aria-hidden="true">
      <img src={image} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} />
    </span>
  );
}

function CredentialRow({ credential, onOpenModal, previewsDismissed, onPreviewEnter, onHighlight }) {
  const positionPreview = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const row = event.currentTarget;
    const preview = row.querySelector(".credential-preview");
    if (!preview || !preview.offsetWidth) return;

    const bounds = row.getBoundingClientRect();
    const width = preview.offsetWidth;
    const height = preview.offsetHeight;
    const gap = 24;
    const x = event.clientX + gap + width > window.innerWidth - 16
      ? event.clientX - gap - width
      : event.clientX + gap;
    const y = Math.max(16, Math.min(event.clientY - height / 2, window.innerHeight - height - 16));

    row.style.setProperty("--preview-x", `${Math.max(16, x) - bounds.left}px`);
    row.style.setProperty("--preview-y", `${y - bounds.top}px`);
    row.dataset.previewPositioned = "true";
  };

  return (
    <CredentialTrigger
      credential={credential}
      onOpenModal={onOpenModal}
      className="credential-row"
      data-preview-dismissed={previewsDismissed || undefined}
      onMouseEnter={(event) => {
        onHighlight(event);
        onPreviewEnter();
        positionPreview(event);
      }}
      onMouseMove={positionPreview}
      onFocus={(event) => {
        onHighlight(event);
        delete event.currentTarget.dataset.previewPositioned;
        onPreviewEnter();
      }}
    >
      {credential.logo && (
        <span className="credential-watermark-clip" aria-hidden="true">
          <img src={credential.logo} alt="" className="credential-watermark" />
        </span>
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
      {credential.image?.startsWith("/assets/certificates/") && (
        <CertificatePreview image={credential.image} />
      )}
    </CredentialTrigger>
  );
}

function CredentialRowGroup({ items, onOpenModal, previewsDismissed, onPreviewEnter }) {
  const listRef = useRef(null);
  const rowRef = useRef(null);
  const [highlight, setHighlight] = useState(null);
  const measure = () => {
    if (!rowRef.current || !listRef.current) return;
    const bounds = rowRef.current.getBoundingClientRect();
    setHighlight({ top: bounds.top - listRef.current.getBoundingClientRect().top, height: bounds.height });
  };
  useEffect(() => {
    const observer = new ResizeObserver(measure);
    observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);
  const clear = () => { rowRef.current = null; setHighlight(null); };
  return (
    <div
      ref={listRef}
      className="credential-group-rows"
      style={{ "--highlight-y": `${highlight?.top || 0}px`, "--highlight-height": `${highlight?.height || 0}px`, "--highlight-opacity": highlight ? 1 : 0 }}
      onMouseLeave={clear}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) clear(); }}
    >
      {items.map((credential) => (
        <CredentialRow
          key={`${credential.issuer}-${credential.title}`}
          credential={credential}
          onOpenModal={onOpenModal}
          previewsDismissed={previewsDismissed}
          onPreviewEnter={onPreviewEnter}
          onHighlight={(event) => { rowRef.current = event.currentTarget; measure(); }}
        />
      ))}
    </div>
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

function CredentialDetailPreview({ credential }) {
  const [imageFailed, setImageFailed] = useState(false);
  const certificate = credential.image?.startsWith("/assets/certificates/");
  const image = certificate ? credential.image : credential.logo;

  return (
    <aside className="credential-detail-preview" aria-label="Credential preview">
      {image && !imageFailed && (
        <div className={`credential-detail-image${certificate ? "" : " credential-detail-image--icon"}`}>
          <img src={image} alt={certificate ? `${credential.title} certificate` : `${credential.issuer} icon`} decoding="async" onError={() => setImageFailed(true)} />
        </div>
      )}
      <h2>{credential.title}</h2>
      {credential.description && <p className="credential-detail-description">{credential.description}</p>}
      {credential.verifyUrl && (
        <a className="credential-detail-verify" href={credential.verifyUrl} target="_blank" rel="noreferrer">
          Verify credential <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </aside>
  );
}

export default function CredentialsList({ items, limitPerCategory, variant = "rows", children }) {
  const groups = groupByCategory(items);
  const [openCredential, setOpenCredential] = useState(null);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("list");
  const [previewCredential, setPreviewCredential] = useState(null);
  const [highlight, setHighlight] = useState(null);
  const explorerListRef = useRef(null);
  const highlightedRowRef = useRef(null);
  const [previewsDismissed, setPreviewsDismissed] = useState(false);
  const activeTriggerRef = useRef(null);

  const measureHighlight = () => {
    const list = explorerListRef.current;
    const row = highlightedRowRef.current;
    if (!list || !row || !list.contains(row)) return;
    const bounds = row.getBoundingClientRect();
    setHighlight({ top: bounds.top - list.getBoundingClientRect().top, height: bounds.height });
  };

  const previewRow = (credential, event) => {
    setPreviewCredential(credential);
    highlightedRowRef.current = event.currentTarget;
    measureHighlight();
  };

  useEffect(() => {
    const list = explorerListRef.current;
    if (!list) return;
    const observer = new ResizeObserver(measureHighlight);
    observer.observe(list);
    return () => observer.disconnect();
  }, [view, variant]);

  useEffect(() => {
    if (variant !== "rows") return;
    const dismissPreviews = (event) => {
      if (event.key === "Escape") setPreviewsDismissed(true);
    };
    document.addEventListener("keydown", dismissPreviews);
    return () => document.removeEventListener("keydown", dismissPreviews);
  }, [variant]);

  const handleOpenModal = (credential, triggerRef) => {
    activeTriggerRef.current = triggerRef.current;
    setOpenCredential(credential);
  };
  const handleCloseModal = () => setOpenCredential(null);

  const modal = openCredential && (
    <CredentialModal credential={openCredential} onClose={handleCloseModal} triggerRef={activeTriggerRef} />
  );

  if (variant === "grid" || variant === "explorer") {
    const visible = filter === "all" ? items : items.filter((c) => c.category === filter);
    const selected = visible.includes(previewCredential) ? previewCredential : visible[0];
    const chips = [{ value: "all", label: "All", count: items.length }].concat(
      groups.map((g) => ({ value: g.category, label: g.category, count: g.items.length }))
    );

    return (
      <>
        <div className="credentials-toolbar">
        <div className="credentials-filter" role="group" aria-label="Filter credentials by category">
          {chips.map((chip) => (
            <button
              key={chip.value}
              type="button"
              className="credentials-chip"
              aria-pressed={filter === chip.value}
              onClick={() => { setFilter(chip.value); setHighlight(null); highlightedRowRef.current = null; }}
            >
              {chip.label} <span className="credentials-chip-count">{chip.count}</span>
            </button>
          ))}
        </div>
        {variant === "explorer" && (
          <div className="credentials-view-toggle" role="group" aria-label="Credential display">
            {[{ value: "list", label: "List" }, { value: "cards", label: "Cards" }].map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={view === option.value}
                onClick={() => { setView(option.value); setHighlight(null); highlightedRowRef.current = null; }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        </div>

        {variant === "explorer" && view === "list" ? (
          <div
            className="credentials-explorer"
            onMouseLeave={() => { setHighlight(null); highlightedRowRef.current = null; }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setHighlight(null);
                highlightedRowRef.current = null;
              }
            }}
          >
            <ul
              ref={explorerListRef}
              className="credentials-explorer-list"
              aria-label="Credentials"
              style={{ "--highlight-y": `${highlight?.top || 0}px`, "--highlight-height": `${highlight?.height || 0}px`, "--highlight-opacity": highlight ? 1 : 0 }}
            >
              {visible.map((credential) => (
                <li key={`${credential.issuer}-${credential.title}`}>
                  <CredentialTrigger
                    credential={credential}
                    onOpenModal={handleOpenModal}
                    className="credential-explorer-row"
                    onMouseEnter={(event) => previewRow(credential, event)}
                    onFocus={(event) => previewRow(credential, event)}
                    {...(!hasView(credential) ? { tabIndex: 0 } : {})}
                  >
                    <span className="credential-explorer-copy">
                      <span className="credential-explorer-title">{credential.title}</span>
                      <span className="credential-explorer-issuer">{credential.issuer}</span>
                    </span>
                    <span className="credential-explorer-date">{credential.date}</span>
                  </CredentialTrigger>
                </li>
              ))}
            </ul>
            {selected && (
              <CredentialDetailPreview
                key={`${selected.issuer}-${selected.title}`}
                credential={selected}
              />
            )}
          </div>
        ) : (
        <div className="credentials-grid">
          {visible.map((credential, i) => (
            <CredentialCard credential={credential} key={`${credential.title}-${i}`} onOpenModal={handleOpenModal} />
          ))}
        </div>
        )}

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
                <CredentialRowGroup
                  items={limitPerCategory ? group.items.slice(0, limitPerCategory) : group.items}
                  onOpenModal={handleOpenModal}
                  previewsDismissed={previewsDismissed}
                  onPreviewEnter={() => setPreviewsDismissed(false)}
                />
            </div>
          ))}
        </div>

        {children}
      </div>

      {modal}
    </>
  );
}
