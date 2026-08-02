export default function Background() {
  return (
    <section id="background" className="entry" data-reveal>
      <div className="dateline">
        <span className="slash">/</span>
        <h2>background</h2>
        <span className="rule"></span>
      </div>

      <div className="about-grid">
        <p className="about-lede">
          <strong>[University Name]</strong> — Bachelor of Science in Computer
          Science, Expected [Month Year].
        </p>

        <div className="marginalia">
          <div className="row">
            <span className="k">[Certification Name]</span>
            <span className="v">[Issuer], [Year]</span>
          </div>
          <div className="row">
            <span className="k">[Certification Name]</span>
            <span className="v">[Issuer], [Year]</span>
          </div>
          <div className="row">
            <span className="k">[Certification Name]</span>
            <span className="v">[Issuer], [Year]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
