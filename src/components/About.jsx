export default function AboutMe() {
  return (
    <section id="about" className="entry" data-reveal>
      <div className="dateline">
        <span className="slash">/</span>
        <h2>about me</h2>
        <span className="rule"></span>
      </div>

      <div className="about-grid">
        <p className="about-lede">
          A computer science student passionate about creating{" "}
          <strong>elegant, efficient, and user-friendly</strong> digital solutions. I enjoy
          exploring web development, AI &amp; machine learning, and turning ideas into
          functional projects that make an impact.
        </p>

        <div className="marginalia">
          <div className="row"><span className="k">Focus</span><span className="v">Clean, maintainable code</span></div>
          <div className="row"><span className="k">Driven by</span><span className="v">Learning new technologies</span></div>
          <div className="row"><span className="k">Strength</span><span className="v">Problem-solving</span></div>
          <div className="row"><span className="k">Approach</span><span className="v">User-centered design</span></div>
        </div>
      </div>
    </section>
  );
}
