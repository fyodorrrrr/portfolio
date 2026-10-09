import { Gaegu } from "next/font/google";

// Handwriting face for the hero's margin notes only. Loaded here (not in layout.js) so the
// other routes don't download it.
const hand = Gaegu({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-hand",
});

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

// pathLength="1" lets the CSS draw-on animation work for any path length (see .draw).
export default function Hero() {
  return (
    <section id="home" className={`entry masthead ${hand.variable}`}>
      <p className="masthead-note masthead-note--status" style={{ "--delay": "0.9s" }}>
        <span className="masthead-note-dot" aria-hidden="true" />
        open to roles
      </p>

      <div className="masthead-float">
        <a href="#contact" className="masthead-note masthead-note--float" style={{ "--delay": "0.6s" }}>
          say hi<span className="sr-only">, contact me</span>
          <Arrow flip />
        </a>
        <svg
          className="masthead-doodle"
          viewBox="0 0 120 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ "--delay": "1.1s" }}
        >
          <path
            className="draw"
            pathLength="1"
            d="M34 6C92 18 108 68 64 86C20 104 16 60 52 68C92 78 74 138 58 176"
          />
          <path className="draw draw--head" pathLength="1" d="M40 156L58 180L78 160" />
        </svg>
      </div>

      <div className="masthead-grid">
        <div className="masthead-top">
          <p className="masthead-role">
            <span className="masthead-mark">
              Software engineer
              <svg
                className="masthead-mark-stroke"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
                style={{ "--delay": "0.4s" }}
              >
                <path className="draw" pathLength="1" d="M2 9C30 3 62 12 100 6S164 10 198 4" />
              </svg>
            </span>{" "}
            and computer science student building at the intersection of software, AI, and data. Based in Laguna, Philippines
          </p>

          <a href="#projects" className="masthead-note" style={{ "--delay": "0.75s" }}>
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
