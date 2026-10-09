// Hand-drawn arrow for the margin notes (decorative; the link text carries the meaning).
function Arrow({ flip = false }) {
  return (
    <svg
      className={flip ? "masthead-note-arrow masthead-note-arrow--down" : "masthead-note-arrow"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19.2C8.6 15.4 12.1 11.6 17.6 6.4" />
      <path d="M9.6 5.6c2.6-.5 5.5-.6 8.4-.2.2 2.9 0 5.7-.6 8.3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="entry masthead" data-reveal>
      <a href="#contact" className="masthead-note masthead-note--float">
        say hi
        <Arrow flip />
      </a>

      <div className="masthead-grid">
        <div className="masthead-top">
          <p className="masthead-role">
            Software engineer and computer science student building at the intersection of software, AI, and data.
          </p>

          <a href="#projects" className="masthead-note">
            <Arrow />
            hey! see my work
          </a>
        </div>

        <div className="masthead-name">
          <h1>Jose Aquino</h1>
        </div>
      </div>
    </section>
  );
}
