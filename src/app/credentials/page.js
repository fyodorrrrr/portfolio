import Link from "next/link";
import CredentialsList from "@/components/CredentialsList";
import { credentials } from "@/data/credentials";

export const metadata = {
  title: "Credentials — Jose Aquino",
  description: "Certifications, training, and recognition.",
};

export default function CredentialsPage() {
  return (
    <div className="project-detail">
      <div className="project-detail-bar case-links">
        <Link href="/#credentials">← Back</Link>
      </div>

      <div className="project-detail-header">
        <span className="eyebrow">All credentials</span>
        <h1>Credentials</h1>
        <p className="project-detail-desc">Certifications, training, and recognition I&apos;ve earned.</p>
      </div>

      <div className="credentials-page-list">
        <CredentialsList items={credentials} variant="grid" />
      </div>
    </div>
  );
}
