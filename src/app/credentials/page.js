import CurtainLink from "@/components/CurtainLink";
import CredentialsList from "@/components/CredentialsList";
import { credentials } from "@/data/credentials";

export const metadata = { title: "Credentials" };

export default function CredentialsPage() {
  return (
    <div className="project-detail">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="project-detail-bar case-links">
        <CurtainLink href="/#credentials">← Back</CurtainLink>
      </div>

      <main id="main-content" tabIndex={-1}>
        <div className="project-detail-header">
          <h1>Credentials</h1>
          <p className="project-detail-desc">Certifications, training, and recognition I&apos;ve earned.</p>
        </div>

        <div className="credentials-page-list">
          <CredentialsList items={credentials} variant="explorer" />
        </div>
      </main>
    </div>
  );
}
