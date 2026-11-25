import SpriteTrigger from "./SpriteTrigger";

// Pixel sprite icons from Pixelarticons by Gerrit Halfmann (MIT License; see THIRD_PARTY_NOTICES.md).
// Paths are split into parts so frames can be swapped: `f1`/`f2` alternate and `drift` moves.
const SPRITES = {
  robot: [
    { d: "M5 7h14v2H5zm0 12h14v2H5zM3 9h2v10H3zm16 0h2v10h-2zM1 13h2v2H1zm20 0h2v2h-2z" },
    { d: "M11 5h2v2h-2zM7 3h4v2H7z", part: "f1" },
    { d: "M11 5h2v2h-2zM13 3h4v2h-4z", part: "f2" },
    { d: "M8 12h2v4H8zM14 12h2v4h-2z", part: "f1" },
    { d: "M8 14h2v2H8zM14 14h2v2h-2z", part: "f2" },
  ],
  cloud: [
    {
      d: "M22 10h-4v2h4v-2Zm2 2h-2v6h2v-6Zm-2 6H2v2h20v-2ZM2 12H0v6h2v-6Zm2-2H2v2h2v-2Zm4-2H4v2h4V8Zm8-4h-6v2h6V4Zm-6 2H8v2h2V6Zm0 4H8v2h2v-2Zm8-4h-2v2h2V6ZM20 8h-2v4h2V8Zm-2 4h-2v2h2v-2Z",
      part: "drift",
    },
  ],
};

function SpriteParts({ name }) {
  return SPRITES[name].map(({ d, part }) => <path key={d} d={d} className={part ? `sprite-${part}` : undefined} />);
}

// Two-tone pixel sprite: a light pixel shadow offset by two grid units, with the pine icon on top.
// Decorative (aria-hidden); the words carry the meaning.
function PixelSprite({ name }) {
  return (
    <span className="about-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <g className="about-sprite-shadow" transform="translate(2 2)">
          <SpriteParts name={name} />
        </g>
        <g>
          <SpriteParts name={name} />
        </g>
      </svg>
    </span>
  );
}

// A highlighted phrase. With an icon, its last word stays glued to the sprite (and trailing punctuation),
// so the sprite never wraps alone. The phrase may break only between words, never at a word's
// own hyphen (e.g. "AI-powered").
function Marked({ children, icon = null, after = "" }) {
  const words = children.split(" ");
  const last = words.pop();
  const end = <span className={words.length > 0 ? "about-highlight about-highlight--end" : "about-highlight"}>{last}</span>;
  return (
    <>
      {words.length > 0 && (
        <span className="about-highlight about-highlight--start">
          {/* The space sits outside the no-wrap span so the line can still break after each word. */}
          {words.map((word) => (
            <span key={word}>
              <span className="about-keep">{word}</span>{" "}
            </span>
          ))}
        </span>
      )}
      {icon ? (
        <SpriteTrigger>
          {end}
          <PixelSprite name={icon} />
          {after}
        </SpriteTrigger>
      ) : (
        <span className="about-keep">
          {end}
          {after}
        </span>
      )}
    </>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="entry about-section" aria-labelledby="about-title" data-reveal>
      <div className="about-layout">
        <h2 id="about-title" className="section-intro-title">
          about me,
          <span>a little context</span>
        </h2>
        <div className="about-content">
          <p className="about-intro">
            I build software that makes complex information easier to use:{" "}
            <Marked after=",">backend development</Marked>{" "}
            <Marked after=",">data-driven applications</Marked> and{" "}
            <Marked after=".">AI-powered systems</Marked>
          </p>
          <p className="about-intro about-intro--now">
            Exploring <Marked icon="robot">AI agent architectures</Marked> and{" "}
            <Marked icon="cloud" after=".">AWS cloud technologies</Marked>
          </p>
          <dl className="about-facts">
            <div className="about-fact">
              <dt>Education</dt>
              <dd>
                computer science @ Laguna State Polytechnic University
                <span>DOST scholar</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
