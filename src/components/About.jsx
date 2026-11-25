// Pixel icons echo the hero's contribution graph. They are decorative (aria-hidden); the words carry the meaning.
function PixelIcon({ name, viewBox, width, height, children }) {
  return (
    <span className={`about-icon about-icon--${name}`} aria-hidden="true">
      <svg viewBox={viewBox} width={width} height={height} shapeRendering="crispEdges" focusable="false">
        {children}
      </svg>
    </span>
  );
}

const ServerIcon = () => (
  <PixelIcon name="server" viewBox="0 0 9 9" width="0.9em" height="0.9em">
    <rect className="px-a" x="0" y="0" width="9" height="2" />
    <rect className="px-b" x="0" y="3" width="9" height="2" />
    <rect className="px-a" x="0" y="6" width="9" height="2" />
    <rect className="px-led" x="7" y="0" width="1" height="1" style={{ "--d": "0s" }} />
    <rect className="px-led" x="7" y="3" width="1" height="1" style={{ "--d": "0.12s" }} />
    <rect className="px-led" x="7" y="6" width="1" height="1" style={{ "--d": "0.24s" }} />
  </PixelIcon>
);

const ChartIcon = () => (
  <PixelIcon name="chart" viewBox="0 0 8 9" width="0.8em" height="0.9em">
    <rect className="px-c px-bar" x="0" y="5" width="2" height="4" style={{ "--d": "0s" }} />
    <rect className="px-a px-bar" x="3" y="1" width="2" height="8" style={{ "--d": "0.1s" }} />
    <rect className="px-b px-bar" x="6" y="3" width="2" height="6" style={{ "--d": "0.2s" }} />
  </PixelIcon>
);

const SparkIcon = () => (
  <PixelIcon name="spark" viewBox="0 0 9 9" width="0.9em" height="0.9em">
    <rect className="px-b" x="4" y="0" width="1" height="9" />
    <rect className="px-b" x="0" y="4" width="9" height="1" />
    <rect className="px-a" x="3" y="3" width="3" height="3" />
    <rect className="px-d" x="4" y="1" width="1" height="1" />
    <rect className="px-d" x="7" y="4" width="1" height="1" />
  </PixelIcon>
);

const AgentsIcon = () => (
  <PixelIcon name="agents" viewBox="0 0 11 9" width="1.1em" height="0.9em">
    <rect className="px-b" x="3" y="1" width="1" height="1" />
    <rect className="px-b" x="5" y="1" width="1" height="1" />
    <rect className="px-b" x="7" y="2" width="1" height="1" />
    <rect className="px-b" x="2" y="3" width="1" height="1" />
    <rect className="px-b" x="3" y="4" width="1" height="1" />
    <rect className="px-b" x="8" y="4" width="1" height="1" />
    <rect className="px-b" x="7" y="5" width="1" height="1" />
    <rect className="px-a px-node" x="0" y="0" width="3" height="3" style={{ "--d": "0s" }} />
    <rect className="px-b px-node" x="8" y="1" width="3" height="3" style={{ "--d": "0.18s" }} />
    <rect className="px-c px-node" x="4" y="6" width="3" height="3" style={{ "--d": "0.32s" }} />
  </PixelIcon>
);

const CloudIcon = () => (
  <PixelIcon name="cloud" viewBox="0 0 12 8" width="1.2em" height="0.8em">
    <rect className="px-c" x="4" y="1" width="4" height="1" />
    <rect className="px-b" x="3" y="2" width="6" height="1" />
    <rect className="px-b" x="1" y="3" width="10" height="1" />
    <rect className="px-b" x="0" y="4" width="12" height="2" />
    <rect className="px-a" x="1" y="6" width="10" height="1" />
  </PixelIcon>
);

// A highlighted phrase whose last word stays glued to its icon (and trailing punctuation),
// so the icon never wraps alone. The phrase may break only between words, never at a word's
// own hyphen (e.g. "AI-powered").
function Marked({ children, icon: Icon, after = "" }) {
  const words = children.split(" ");
  const last = words.pop();
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
      <span className="about-keep">
        <span className={words.length > 0 ? "about-highlight about-highlight--end" : "about-highlight"}>{last}</span>
        <Icon />
        {after}
      </span>
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
            <Marked icon={ServerIcon} after=",">backend development</Marked>{" "}
            <Marked icon={ChartIcon} after=",">data-driven applications</Marked> and{" "}
            <Marked icon={SparkIcon} after=".">AI-powered systems</Marked>
          </p>
          <p className="about-intro about-intro--now">
            Now researching <Marked icon={AgentsIcon}>AI agents</Marked> and learning{" "}
            <Marked icon={CloudIcon} after=".">AWS</Marked>
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
