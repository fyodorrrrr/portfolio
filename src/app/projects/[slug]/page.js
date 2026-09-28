import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jose Aquino`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasDemo = project.demo && project.demo !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <div className="project-detail">
      <div className="project-detail-bar case-links">
        <Link href="/#projects">← Back</Link>
        {hasDemo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Visit site ↗
          </a>
        )}
      </div>

      <div className="project-detail-header">
        <span className="eyebrow">{project.meta}</span>
        <h1>{project.title}</h1>
        <p className="project-detail-desc">{project.description}</p>

        <div className="case-tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {hasDemo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="form-submit project-detail-cta">
            Visit live site →
          </a>
        )}
      </div>

      <div className="plate project-detail-plate aspect-[2/1]">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.title}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 900px) 100vw, 72rem"
            className="rounded-lg"
          />
        ) : (
          <div className="plate-placeholder mono">{project.title}</div>
        )}
      </div>

      <div className="project-detail-section">
        <span className="eyebrow">What I did</span>
        <p>{project.whatIDid}</p>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="project-detail-section">
          <span className="eyebrow">More screens</span>
          <div className="project-detail-gallery">
            {project.gallery.map((shot) => (
              <div className="plate aspect-[2/1]" key={shot.src}>
                <Image
                  src={shot.src}
                  alt={`${project.title} screenshot`}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 900px) 100vw, 36rem"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {hasGithub && (
        <div className="project-detail-section case-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            View code →
          </a>
        </div>
      )}
    </div>
  );
}
