import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)] py-8 px-[var(--gutter)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-base font-medium tracking-wide flex items-center gap-2 font-sans">
          <span className="text-[var(--rust)] font-bold">Jose</span>
          <span className="opacity-60">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <SocialLinks />
      </div>
      <div className="mono mt-8 text-center text-xs opacity-60">
        Set in Helixa
      </div>
    </footer>
  );
}
