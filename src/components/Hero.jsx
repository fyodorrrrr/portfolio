import { Gaegu } from "next/font/google";
import { Suspense } from "react";
import GitHubActivity, { GitHubActivityPlaceholder } from "./GitHubActivity";
import ClaudeMascot from "./ClaudeMascot";

// Handwriting face for the hero's margin notes only. Loaded here (not in layout.js) so the
// other routes don't download it.
const hand = Gaegu({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-hand",
});

// Hand-drawn arrow for the margin notes (decorative; the link text carries the meaning).
function Arrow() {
  return (
    <svg
      className="masthead-note-arrow"
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
      <div className="masthead-grid">
        <h1>Jose Aquino</h1>
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
            and computer science student building{" "}
            <Suspense fallback={<GitHubActivityPlaceholder />}><GitHubActivity /></Suspense>{" "}
            at the intersection of software, <span className="masthead-ai">AI <ClaudeMascot /></span>, and data.
            <span className="masthead-location">Based in Laguna, Philippines</span>
          </p>

        <div className="masthead-actions">
          <a href="#projects" className="masthead-note" style={{ "--delay": "0.75s" }}>
            <Arrow />
            hey! see my work
          </a>
          <a href="#contact" className="masthead-note" style={{ "--delay": "0.6s" }}>
            say hi<span className="sr-only">, contact me</span>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
