export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name & Copyright */}
        <div className="text-base font-medium tracking-wide flex items-center gap-2">
          <span className="text-emerald-400 font-bold">Jose</span>
          <span className="opacity-60">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        {/* Social Links */}
        <div className="flex gap-5">
          <a href="https://github.com/joseusername" target="_blank" rel="noreferrer"
            className="hover:text-emerald-400 transition-colors duration-200" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.135 20.175 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/joseusername" target="_blank" rel="noreferrer"
            className="hover:text-emerald-400 transition-colors duration-200" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
            </svg>
          </a>
          <a href="mailto:jose@email.com"
            className="hover:text-emerald-400 transition-colors duration-200" aria-label="Email">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/>
            </svg>
          </a>
          <a href="https://twitter.com/joseusername" target="_blank" rel="noreferrer"
            className="hover:text-emerald-400 transition-colors duration-200" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500 opacity-70">
        Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
