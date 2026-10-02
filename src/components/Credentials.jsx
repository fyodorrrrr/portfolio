import Link from "next/link";
import SectionHeading from "./SectionHeading";
import CredentialsList from "./CredentialsList";
import { credentials } from "@/data/credentials";

const LIMIT_PER_CATEGORY = 2;
const HIDDEN_ON_HOME = ["Paticipations & Events"];

export default function Credentials() {
  const homeItems = credentials.filter((c) => !HIDDEN_ON_HOME.includes(c.category));

  const counts = {};
  for (const { category } of homeItems) counts[category] = (counts[category] ?? 0) + 1;
  const hasMore =
    homeItems.length < credentials.length || Object.values(counts).some((n) => n > LIMIT_PER_CATEGORY);

  return (
    <section id="credentials" className="entry" data-reveal>
      <SectionHeading description="Certifications, training, and recognition I've earned.">credentials</SectionHeading>

      <CredentialsList items={homeItems} limitPerCategory={LIMIT_PER_CATEGORY} />

      {hasMore && (
        <div className="credentials-more-wrap">
          <Link href="/credentials" className="credentials-more">
            View all credentials <span className="credentials-more-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
