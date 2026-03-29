import Link from 'next/link';
import type { Project } from '@/types/portfolio';
import Tag from '@/components/ui/Tag';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
      >
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-accent">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          {project.duration} · {project.role}
        </p>
      </Link>
    </article>
  );
}
