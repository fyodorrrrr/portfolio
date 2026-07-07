export default function SocialLinks({ className = "flex gap-5", iconClassName = "w-6 h-6" }) {
  return (
    <div className={className}>
      <a
        href="https://github.com/fyodorrrrr"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#cc5a1f] transition-colors duration-200"
        aria-label="GitHub"
      >
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.135 20.175 22 16.426 22 12.012 22 6.484 17.523 2 12 2z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/jose-aquino-a16884382/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#cc5a1f] transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
        </svg>
      </a>
      <a
        href="mailto:aquinojxse@gmail.com"
        className="hover:text-[#cc5a1f] transition-colors duration-200"
        aria-label="Email"
      >
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z" />
        </svg>
      </a>
    </div>
  );
}
