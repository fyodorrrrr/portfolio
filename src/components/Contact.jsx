export default function Contact() {
  return (
    <section id="contact" className="entry alt" data-reveal>
      <div className="dateline">
        <span className="slash">/</span>
        <h2>contact me</h2>
        <span className="rule"></span>
      </div>

      <div className="contact-grid">
        <div>
          <p className="contact-lede">
            Have a project in mind, or just want to talk shop? I reply within a day.
          </p>

          <div className="contact-channels">
            <a href="mailto:aquinojxse@gmail.com">
              <span>aquinojxse@gmail.com</span>
              <span className="arrow">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/jose-aquino-a16884382/" target="_blank" rel="noreferrer">
              <span>LinkedIn — jose-aquino</span>
              <span className="arrow">↗</span>
            </a>
            <a href="https://github.com/fyodorrrrr" target="_blank" rel="noreferrer">
              <span>GitHub — fyodorrrrr</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <form>
          <div className="form-field">
            <input type="text" placeholder=" " required />
            <label>Your name</label>
          </div>
          <div className="form-field">
            <input type="email" placeholder=" " required />
            <label>Your email</label>
          </div>
          <div className="form-field">
            <textarea rows="4" placeholder=" " required></textarea>
            <label>What are you building?</label>
          </div>
          <button type="submit" className="form-submit">Send note →</button>
        </form>
      </div>
    </section>
  );
}
