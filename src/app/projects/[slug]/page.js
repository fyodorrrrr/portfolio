import { notFound } from "next/navigation";
import Link from "next/link";
import ScreensCarousel from "@/components/ScreensCarousel";
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
  const slides = [project.image ?? {}, ...(project.gallery ?? [])];

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

        {project.role && <p className="project-detail-role">{project.role}</p>}

        {hasDemo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="form-submit project-detail-cta">
            Visit live site →
          </a>
        )}
      </div>

      <div className="project-detail-plate">
        <ScreensCarousel title={project.title} slides={slides} />
      </div>

      {project.problem ? (
        <>
          <div className="project-detail-section">
            <span className="eyebrow">The problem</span>
            <p>{project.problem}</p>
          </div>
          <div className="project-detail-section">
            <span className="eyebrow">What I built</span>
            <ol className="project-built-list">
              {project.built.map((item, i) => (
                <li key={i}>
                  <span className="project-built-index">{String(i + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="project-detail-section">
            <span className="eyebrow">Outcome</span>
            <p>{project.outcome}</p>
          </div>
        </>
      ) : (
        <div className="project-detail-section">
          <span className="eyebrow">What I did</span>
          <p>{project.whatIDid}</p>
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
