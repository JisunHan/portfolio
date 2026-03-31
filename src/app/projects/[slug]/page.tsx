import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/ui/FadeIn';
import BodyText from '@/components/projects/BodyText';
import ProjectDetailSection from '@/components/projects/ProjectDetailSection';
import ProjectDetailToc from '@/components/projects/ProjectDetailToc';
import ProjectQuickFacts from '@/components/projects/ProjectQuickFacts';
import ProjectScreens from '@/components/projects/ProjectScreens';
import { getProjectBySlug, getProjects } from '@/lib/data';
import {
  PROJECT_DETAIL_SECTIONS,
  type ProjectDetailSectionId,
} from '@/lib/project-detail-sections';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project' };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const content: Record<ProjectDetailSectionId, ReactNode> = {
    overview: <BodyText>{project.overview}</BodyText>,
    problem: <BodyText>{project.problem}</BodyText>,
    role: <BodyText>{project.myRole}</BodyText>,
    solution: <BodyText>{project.solution}</BodyText>,
    result: <BodyText>{project.result}</BodyText>,
    technical: (
      <ul className="list-outside list-disc space-y-3 pl-5 text-[15px] leading-[1.75] text-zinc-600 marker:text-zinc-300 md:text-base md:leading-[1.8]">
        {project.technicalDecisions.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    ),
    retro: <BodyText>{project.retrospective}</BodyText>,
  };

  return (
    <FadeIn>
      <Link
        href="/projects"
        className="inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        ← All projects
      </Link>

      <header className="mt-8 border-b border-zinc-200 pb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          Case study
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
          {project.shortDescription}
        </p>
      </header>

      <div className="mt-8 space-y-8">
        <ProjectQuickFacts
          duration={project.duration}
          role={project.role}
          techStack={project.techStack}
        />
        <ProjectDetailToc />
      </div>

      <article className="mt-14 pb-8">
        {PROJECT_DETAIL_SECTIONS.map((meta, i) => (
          <ProjectDetailSection
            key={meta.id}
            id={meta.id}
            index={i + 1}
            title={meta.title}
            eyebrow={meta.eyebrow}
          >
            {content[meta.id]}
          </ProjectDetailSection>
        ))}
      </article>

      {project.images && project.images.length > 0 && (
        <ProjectScreens images={project.images} />
      )}
    </FadeIn>
  );
}
