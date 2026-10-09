"use client";

import Image from "next/image";
import CurtainLink from "./CurtainLink";
import SectionIntro from "./SectionIntro";
import { useScrollSpy, scrollToTarget } from "./useScrollSpy";
import { projects } from "@/data/projects";

const cardId = (slug) => `project-${slug}`;

function ProjectCard({ project }) {
  return (
    <CurtainLink
      href={`/projects/${project.slug}`}
      id={cardId(project.slug)}
      data-spy={project.slug}
      className="project-card"
    >
      <div className="project-stage">
        <div className="project-stage-tags">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-shot">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail.src}
              alt={project.title}
              width={project.thumbnail.width}
              height={project.thumbnail.height}
              sizes="(max-width: 900px) 92vw, 62vw"
              quality={95}
            />
          ) : (
            <div className="plate-placeholder mono">{project.title}</div>
          )}
        </div>
      </div>

      <div className="project-caption">
        <h3>{project.title}</h3>
        <p>{project.caption}</p>
      </div>
    </CurtainLink>
  );
}

export default function Projects() {
  const [activeSlug, setActiveSlug] = useScrollSpy(".project-card", projects[0].slug);

  return (
    <section id="projects" className="entry projects-entry" data-reveal>
      <SectionIntro
        note="A few things I've built across software, AI, and data."
        accent="software, AI & data"
      >
        selected work,
      </SectionIntro>

      <div className="split">
        <div className="pin-col">
          <nav aria-label="Selected work" className="pin-index">
            <ol>
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    href={`#${cardId(project.slug)}`}
                    onClick={(event) => scrollToTarget(event, cardId(project.slug), setActiveSlug, project.slug)}
                    aria-current={activeSlug === project.slug ? "true" : undefined}
                    className={activeSlug === project.slug ? "active" : undefined}
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="projects-cards">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
