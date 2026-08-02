import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="entry masthead" data-reveal>
      <div className="masthead-grid">
        <div>
          <h1>
            Hey, I&apos;m <em>jose</em> —<br />
            a computer&nbsp;science<br />
            student.
          </h1>
          <p className="masthead-role">
            Dedicated to transforming businesses through strategic, results-driven lead
            generation and innovative digital solutions.
          </p>
          <div className="masthead-cta-row">
            <a href="#about" className="masthead-cta">
              Read the notes ↓
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="masthead-cta"
            >
              Download résumé ↓
            </a>
          </div>
        </div>

        <div className="plate w-[10.5rem] sm:w-[13.5rem] aspect-[3/4]">
          <Image
            src="/assets/port_jose.jpg"
            alt="Jose"
            fill
            priority
            sizes="(max-width: 640px) 168px, 216px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
