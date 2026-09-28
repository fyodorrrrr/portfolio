import { notFound } from "next/navigation";
import Link from "next/link";
import { credentials } from "@/data/credentials";

export function generateStaticParams() {
  return credentials.filter((c) => c.slug).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const credential = credentials.find((c) => c.slug === slug);
  if (!credential) return {};
  return {
    title: `${credential.title} — Jose Aquino`,
    description: credential.description,
  };
}

export default async function CredentialDetail({ params }) {
  const { slug } = await params;
  const credential = credentials.find((c) => c.slug === slug);
  if (!credential) notFound();

  const hasVerify = credential.verifyUrl && credential.verifyUrl !== "#";

  return (
    <div className="project-detail">
      <div className="project-detail-bar case-links">
        <Link href="/#credentials">← Back</Link>
        {hasVerify && (
          <a href={credential.verifyUrl} target="_blank" rel="noreferrer">
            Verify ↗
          </a>
        )}
      </div>

      <div className="project-detail-header">
        <span className="eyebrow">{credential.issuer} · {credential.date}</span>
        <h1>{credential.title}</h1>
        <p className="project-detail-desc">{credential.description}</p>

        {hasVerify && (
          <a href={credential.verifyUrl} target="_blank" rel="noreferrer" className="form-submit project-detail-cta">
            Verify credential →
          </a>
        )}
      </div>
    </div>
  );
}
