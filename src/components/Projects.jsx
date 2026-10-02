"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

function ProjectPanel({ project, isClone }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-panel"
      aria-hidden={isClone ? "true" : undefined}
      tabIndex={isClone ? -1 : undefined}
    >
      <div className="plate project-plate aspect-[2/1]">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.title}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 900px) 88vw, 60rem"
            className="rounded-lg"
          />
        ) : (
          <div className="plate-placeholder mono">{project.title}</div>
        )}
      </div>

      <div className="project-caption">
        <h3>{project.title}</h3>
        <p>{project.caption}</p>
      </div>
    </Link>
  );
}

function findCenteredIndex(track, panels) {
  const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
  let closestIndex = 0;
  let closestDistance = Infinity;
  panels.forEach((panel, i) => {
    const rect = panel.getBoundingClientRect();
    const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = i;
    }
  });
  return closestIndex;
}

export default function Projects() {
  const trackRef = useRef(null);
  const n = projects.length;

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Center the first real panel on load (index 1: index 0 is the cloned last panel).
    const initialPanels = Array.from(track.querySelectorAll(".project-panel"));
    initialPanels[1]?.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" });

    let settleTimeout;
    const handleScroll = () => {
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(() => {
        const panels = Array.from(track.querySelectorAll(".project-panel"));
        const centeredIndex = findCenteredIndex(track, panels);
        if (centeredIndex === 0) {
          // Landed on the cloned last panel — silently re-center the real last panel.
          panels[panels.length - 2]?.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" });
        } else if (centeredIndex === panels.length - 1) {
          // Landed on the cloned first panel — silently re-center the real first panel.
          panels[1]?.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" });
        }
      }, 120);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(settleTimeout);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollByPanel = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const panels = Array.from(track.querySelectorAll(".project-panel"));
    if (panels.length === 0) return;

    const currentIndex = findCenteredIndex(track, panels);
    const targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex >= panels.length) return;
    panels[targetIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="projects" className="entry projects-entry" data-reveal>
      <SectionHeading description="A few things I've built across software, AI, and data.">selected work</SectionHeading>

      <div className="project-carousel">
        <div className="project-track" ref={trackRef}>
          <ProjectPanel project={projects[n - 1]} isClone />
          {projects.map((project) => (
            <ProjectPanel project={project} key={project.slug} />
          ))}
          <ProjectPanel project={projects[0]} isClone />
        </div>
      </div>

      <div className="project-nav">
        <button onClick={() => scrollByPanel(-1)} aria-label="Previous project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button onClick={() => scrollByPanel(1)} aria-label="Next project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}
