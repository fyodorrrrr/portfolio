import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#cfcfcf] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name & Copyright */}
        <div className="text-base font-medium tracking-wide flex items-center gap-2 font-sans">
          <span className="text-[#cc5a1f] font-bold">Jose</span>
          <span className="opacity-60">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <SocialLinks />
      </div>
      <div className="mt-8 text-center text-xs text-[#8f8f8f] opacity-70 font-sans">
        Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
