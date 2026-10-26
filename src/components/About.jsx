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
            Currently, I&apos;m exploring AI agents as part of my academic research, with a particular interest in building intelligent systems that are reliable, practical, and useful.
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
