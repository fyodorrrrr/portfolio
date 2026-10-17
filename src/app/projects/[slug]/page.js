import { notFound } from "next/navigation";
import CurtainLink from "@/components/CurtainLink";
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
  const slides = project.gallery?.length ? project.gallery : [{}];

  return (
    <div className="project-detail">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="project-detail-bar case-links">
        <CurtainLink href="/#projects">← Back</CurtainLink>
        {hasDemo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Visit site ↗
          </a>
        )}
      </div>

      <main id="main-content" tabIndex={-1}>
      <div className="project-detail-header">
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

      <div className="project-detail-plate">
        <ScreensCarousel title={project.title} slides={slides} />
      </div>

      {project.problem ? (
        <>
          <div className="project-detail-section">
            <h2 className="eyebrow">The problem</h2>
            <p>{project.problem}</p>
          </div>
          <div className="project-detail-section">
            <h2 className="eyebrow">What I built</h2>
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
            <h2 className="eyebrow">Outcome</h2>
            <p>{project.outcome}</p>
          </div>
        </>
      ) : (
        <div className="project-detail-section">
          <h2 className="eyebrow">What I did</h2>
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
      </main>
    </div>
  );
}
