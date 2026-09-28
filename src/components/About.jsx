import SectionHeading from "./SectionHeading";

export default function AboutMe() {
  return (
    <section id="about" className="entry" data-reveal>
      <SectionHeading description="A quick introduction before the specifics.">about me</SectionHeading>

      <div className="about-grid">
        <div>
          <p className="about-lede">
            I'm a computer science student and <strong>DOST scholar</strong> at Laguna State Polytechnic University, building systems that combine <strong>practical engineering</strong> with applied AI and data.
            <br />
            <br />
            Recent work spans a GIS-based agricultural decision-support platform, a multi-agent evaluation pipeline for small language models, and REST APIs and data models for a church management system built in Django and PostgreSQL.
          </p>

          <div className="about-stack">
            <span className="eyebrow">Working with</span>
            <div className="about-stack-tags">
              {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Firebase", "Git"].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="marginalia">
          <div className="row"><span className="k">Currently</span><span className="v">Thesis on multi-agent LLM evaluation</span></div>
          <div className="row"><span className="k">Location</span><span className="v">Laguna, Philippines</span></div>
          <div className="row"><span className="k">Looking for</span><span className="v">Software engineering roles</span></div>
        </div>
      </div>
    </section>
  );
}
