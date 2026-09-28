"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import CredentialModal from "./CredentialModal";
import { credentials } from "@/data/credentials";

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

function CredentialRow({ credential, onOpenModal }) {
  const triggerRef = useRef(null);
  const hasView = Boolean(credential.slug || credential.image || credential.verifyUrl);

  const inner = (
    <>
      {credential.logo && (
        <img src={credential.logo} alt="" aria-hidden="true" className="credential-watermark" />
      )}

      <span className="credential-year">{credential.date}</span>

      <div className="credential-info">
        <span className="credential-issuer eyebrow">{credential.issuer}</span>
        <h3 className="credential-title">{credential.title}</h3>
      </div>

      {hasView && <span className="credential-view">view →</span>}
    </>
  );

  if (credential.slug) {
    return (
      <Link href={`/credentials/${credential.slug}`} className="credential-row">
        {inner}
      </Link>
    );
  }

  if (credential.image) {
    return (
      <button
        ref={triggerRef}
        type="button"
        onClick={() => onOpenModal(credential, triggerRef)}
        className="credential-row"
      >
        {inner}
      </button>
    );
  }

  if (credential.verifyUrl) {
    return (
      <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className="credential-row">
        {inner}
      </a>
    );
  }

  return <div className="credential-row credential-row--static">{inner}</div>;
}

export default function Credentials() {
  const groups = groupByCategory(credentials);
  const [openCredential, setOpenCredential] = useState(null);
  const activeTriggerRef = useRef(null);

  const handleOpenModal = (credential, triggerRef) => {
    activeTriggerRef.current = triggerRef.current;
    setOpenCredential(credential);
  };
  const handleCloseModal = () => setOpenCredential(null);

  return (
    <section id="credentials" className="entry" data-reveal>
      <SectionHeading description="Certifications, training, and recognition I've earned.">credentials</SectionHeading>

      <div className="credentials-list">
        {groups.map((group) => (
          <div className="credentials-group" key={group.category}>
            <div className="credentials-group-heading">
              <span className="eyebrow">{group.category}</span>
              <span className="rule" aria-hidden="true" />
            </div>
            {group.items.map((credential) => (
              <CredentialRow credential={credential} key={credential.title} onOpenModal={handleOpenModal} />
            ))}
          </div>
        ))}
      </div>

      {openCredential && (
        <CredentialModal credential={openCredential} onClose={handleCloseModal} triggerRef={activeTriggerRef} />
      )}
    </section>
  );
}
