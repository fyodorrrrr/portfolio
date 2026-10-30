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
            I enjoy building software that makes complex information easier to understand and use. My work spans{" "}
            <span className="about-highlight">backend development</span>,{" "}
            <span className="about-highlight">data-driven applications</span>, and{" "}
            <span className="about-highlight">AI-powered systems</span>.
          </p>
          <p className="about-body">
            Currently, I&apos;m exploring AI agents through academic research, with a focus on making intelligent systems practical and reliable.
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
