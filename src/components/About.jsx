export default function AboutMe() {
  return (
    <section id="about" className="entry about-section" aria-labelledby="about-title">
      <div className="about-layout">
        <h2 id="about-title" className="section-intro-title">
          about me,
          <span>a little context</span>
        </h2>
        <div className="about-content">
          <p className="about-intro">
            I enjoy working on projects that turn complex problems into practical solutions. Recently, I worked with a team on an AI-powered agricultural decision-support platform that placed in the Top 3 at a regional hackathon.
          </p>
          <p className="about-body">
            These days, I&apos;m exploring how multiple AI agents can work together to evaluate educational materials as part of my academic research. I&apos;m especially interested in figuring out how to build intelligent systems that don&apos;t just work, but are reliable and genuinely useful.
          </p>
          <dl className="about-facts">
            <div className="about-fact">
              <dt>Education</dt>
              <dd>
                computer science
                <span>Laguna State Polytechnic University</span>
                <span>DOST scholar</span>
              </dd>
            </div>
            <div className="about-fact">
              <dt>Currently</dt>
              <dd>Working on multi-agent LLM evaluation</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
