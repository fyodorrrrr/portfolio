"use client";

import Image from "next/image";
import CurtainLink from "./CurtainLink";
import SectionIntro from "./SectionIntro";
import { useScrollSpy } from "./useScrollSpy";
import { projects } from "@/data/projects";

const cardId = (slug) => `project-${slug}`;

function ProjectCard({ project }) {
  return (
    <CurtainLink
      href={`/projects/${project.slug}`}
      id={cardId(project.slug)}
      data-spy={project.slug}
      className="project-card"
      aria-label={`View ${project.title} project details`}
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
        <div className="project-caption-top">
          <h3>{project.title}</h3>
          <span className="project-view" aria-hidden="true">
            View project
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M8 3l5 5-5 5" />
            </svg>
          </span>
        </div>
        <p>{project.caption}</p>
      </div>
    </CurtainLink>
  );
}

export default function Projects() {
  const [activeSlug] = useScrollSpy(".project-card", projects[0].slug);

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
                  <CurtainLink
                    href={`/projects/${project.slug}`}
                    aria-current={activeSlug === project.slug ? "true" : undefined}
                    className={activeSlug === project.slug ? "active" : undefined}
                  >
                    {project.title}
                  </CurtainLink>
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
