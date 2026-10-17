import CurtainLink from "./CurtainLink";

function ExternalArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 12 12 4M4 4h8v8" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-identity">
            <a href="#home" className="footer-name">Jose Aquino</a>
          </div>
          <nav className="footer-nav" aria-labelledby="footer-explore">
            <h2 id="footer-explore">Explore</h2>
            <ul>
              <li><a href="#projects">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><CurtainLink href="/credentials">Credentials</CurtainLink></li>
            </ul>
          </nav>
          <nav className="footer-nav" aria-labelledby="footer-contact">
            <h2 id="footer-contact">Get in touch</h2>
            <ul>
              <li><a href="mailto:aquinojxse@gmail.com">Email</a></li>
              <li>
                <a href="https://www.linkedin.com/in/jose-aquino-a16884382/" target="_blank" rel="noreferrer">
                  LinkedIn <ExternalArrow /><span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/fyodorrrrr" target="_blank" rel="noreferrer">
                  GitHub <ExternalArrow /><span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
