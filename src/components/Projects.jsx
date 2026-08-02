import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Haul Thrift Shop",
      description:
        "A mobile thrift shop application built with Flutter and Firebase, featuring buyer and seller flows, wishlist, checkout, and real-time updates.",
      challenge:
        "[Describe the hardest technical problem you solved on this project and how you approached it]",
      impact:
        "[Describe the outcome, what you learned, or measurable impact of this project]",
      tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider"],
      image: "/assets/HAUL.png",
      github: "https://github.com/fyodorrrrr/haul-app",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Tailwind CSS, and Next.js showcasing projects and skills with modern UI.",
      challenge:
        "[Describe the hardest technical problem you solved on this project and how you approached it]",
      impact:
        "[Describe the outcome, what you learned, or measurable impact of this project]",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "/assets/port.png",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="entry" data-reveal>
      <div className="dateline">
        <span className="slash">/</span>
        <h2>projects</h2>
        <span className="rule"></span>
      </div>

      {projects.map((project, index) => (
        <div className="case" key={project.id}>
          <div className="plate case-plate aspect-[4/3]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="case-index">
              <span className="mono">Work {String(index + 1).padStart(2, "0")}</span>
              {project.featured && <span className="status">Featured</span>}
            </div>

            <h3>{project.title}</h3>
            <p className="desc">{project.description}</p>

            <div className="case-note">
              <span className="eyebrow">Challenge</span>
              <p>{project.challenge}</p>
            </div>
            <div className="case-note">
              <span className="eyebrow">Impact</span>
              <p>{project.impact}</p>
            </div>

            <div className="case-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="case-links">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noreferrer">View code →</a>
              )}
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer">Live demo →</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
