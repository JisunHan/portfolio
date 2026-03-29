import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/projects/ProjectCard';
import FadeIn from '@/components/ui/FadeIn';
import { getProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: '프로젝트 목록과 상세 스토리.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <FadeIn>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">Projects</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
        문제 정의부터 결과·회고까지 정리한 사례입니다. 카드를 클릭하면 상세 페이지로 이동합니다.
      </p>

      <Section>
        <div className="space-y-4">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </FadeIn>
  );
}
