"use client";

import { useEffect, useRef, useState } from "react";
import CredentialModal from "./CredentialModal";

// Recognitions lead the unfiltered /credentials view; other items keep their data order.
const LEADING_CATEGORY = "Hackathons & Competitions";

function leadWithRecognitions(items) {
  return [
    ...items.filter((c) => c.category === LEADING_CATEGORY),
    ...items.filter((c) => c.category !== LEADING_CATEGORY),
  ];
}

// One-line trophy sketch tucked behind recognition rows on /credentials (decorative).
function TrophySketch() {
  return (
    <svg className="credential-trophy" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M2 110C16 104 28 116 44 112C60 109 78 115 92 111C98 110 102 104 98 102C94 100 92 106 86 108C84 108.5 82 108 80 108L43 108C42 105 42 101 44 98L55 98C56 92 53 86 55 81C57 78 57 75 56 71C46 66 37 52 36 31C38 22 82 22 84 30C82 37 38 37 36 31C27 23 13 26 14 38C15 50 26 58 40 60C43 60 44 56 41 55C38 54 37 58 40 60C45 64 50 66 57 71C60 72 62 72 64 71C74 66 83 54 84 32C93 23 107 26 106 38C105 50 94 58 80 60C77 60 76 56 79 55C82 54 83 58 80 60C75 64 70 66 64 72C63 76 63 78 65 81C67 86 64 92 65 98L79 98C81 101 81 105 80 108C88 110 100 105 108 106C112 107 115 104 118 102" />
    </svg>
  );
}

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
      className={credential.recognition ? "credential-row credential-row--recognition" : "credential-row"}
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

function CredentialDetailPreview({ credential, ref }) {
  const [imageFailed, setImageFailed] = useState(false);
  const certificate = credential.image?.startsWith("/assets/certificates/");
  const image = certificate ? credential.image : credential.logo;

  return (
    <aside ref={ref} className="credential-detail-preview" aria-label="Credential preview">
      {image && !imageFailed && (
        <div className={`credential-detail-image${certificate ? "" : " credential-detail-image--icon"}`}>
          <img src={image} alt={certificate ? (credential.imageAlt ?? `${credential.title} certificate`) : `${credential.issuer} icon`} decoding="async" onError={() => setImageFailed(true)} />
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

  // The sticky preview can be taller than a short filtered list, so its height sets the page height.
  // If hovering a row shrank the page while scrolled to the bottom, the browser would scroll, move a
  // different row under the pointer, and swap the preview back: a shaking loop. Keep the explorer at
  // least as tall as the tallest preview shown for this filter/view so hovering never shrinks the page.
  const explorerRef = useRef(null);
  const previewRef = useRef(null);
  const tallestPreviewRef = useRef(0);

  useEffect(() => {
    const explorer = explorerRef.current;
    const reset = () => {
      tallestPreviewRef.current = previewRef.current?.offsetHeight ?? 0;
      if (explorer) explorer.style.minHeight = tallestPreviewRef.current ? `${tallestPreviewRef.current}px` : "";
    };
    reset();
    window.addEventListener("resize", reset);
    return () => window.removeEventListener("resize", reset);
  }, [filter, view, variant]);

  useEffect(() => {
    const explorer = explorerRef.current;
    const preview = previewRef.current;
    if (!explorer || !preview) return;
    const observer = new ResizeObserver(() => {
      const height = preview.offsetHeight;
      if (height <= tallestPreviewRef.current) return;
      tallestPreviewRef.current = height;
      explorer.style.minHeight = `${height}px`;
    });
    observer.observe(preview);
    return () => observer.disconnect();
  }, [previewCredential, filter, view, variant]);

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
    const visible = filter === "all" ? leadWithRecognitions(items) : items.filter((c) => c.category === filter);
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
            ref={explorerRef}
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
                <li key={`${credential.issuer}-${credential.title}`} className={credential.recognition ? "credential-explorer-item--recognition" : undefined}>
                  {credential.recognition && <TrophySketch />}
                  <CredentialTrigger
                    credential={credential}
                    onOpenModal={handleOpenModal}
                    className={credential.recognition ? "credential-explorer-row credential-explorer-row--recognition" : "credential-explorer-row"}
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
                ref={previewRef}
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
