export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Name/Logo */}
        <div className="text-lg font-semibold tracking-wide">
          © {new Date().getFullYear()} YourName
        </div>

        {/* Center: Nav Links */}
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Right side: Socials */}
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" 
             className="hover:text-white transition">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" 
             className="hover:text-white transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="mailto:your@email.com" 
             className="hover:text-white transition">
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
