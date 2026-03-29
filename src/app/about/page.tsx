import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Timeline from '@/components/ui/Timeline';
import FadeIn from '@/components/ui/FadeIn';
import { getExperience, getProfile } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: '소개, 경력, 핵심 가치.',
};

const values = [
  {
    title: 'UI / UX',
    body: '사용자의 맥락을 먼저 두고, 인터랙션과 정보 구조를 함께 설계합니다.',
  },
  {
    title: '협업',
    body: '기획·디자인·백엔드와 스펙을 맞추고, 리스크를 일찍 드러내는 커뮤니케이션을 지향합니다.',
  },
  {
    title: '성능',
    body: '로딩·렌더링·네트워크 비용을 함께 보고, 측정 가능한 개선으로 이어지게 합니다.',
  },
  {
    title: '접근성',
    body: '키보드·스크린리더·색 대비 등 기본 접근성을 기본값으로 두고 검토합니다.',
  },
];

export default function AboutPage() {
  const profile = getProfile();
  const experience = getExperience();

  const timelineItems = experience.map((e) => ({
    id: e.id,
    period: e.duration,
    title: e.company,
    subtitle: e.role,
    body: (
      <div className="space-y-3">
        <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-600">
          {e.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        {e.majorProjects && e.majorProjects.length > 0 && (
          <p className="text-sm leading-relaxed text-zinc-600">
            <span className="font-medium text-zinc-800">주요 프로젝트 · </span>
            {e.majorProjects.join(' · ')}
          </p>
        )}
      </div>
    ),
  }));

  return (
    <FadeIn>
      <header className="mb-12 border-b border-zinc-100 pb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          {profile.title}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">About</h1>
        <p className="mt-4 max-w-[65ch] text-[15px] leading-relaxed text-zinc-600 md:text-base">
          {profile.heroIntro}
        </p>
      </header>

      <Section title="소개" description="프론트엔드로서의 방향과 배경입니다.">
        <div className="max-w-[65ch] space-y-4 text-[15px] leading-[1.75] text-zinc-600 md:text-base md:leading-relaxed">
          {profile.aboutIntro.map((paragraph, i) => (
            <p key={i} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title="경력" description="주요 경력과 맡았던 역할입니다.">
        <Timeline items={timelineItems} />
      </Section>

      <Section title="핵심 가치" description="일하는 방식에서 중요하게 두는 기준입니다.">
        <ul className="max-w-[65ch] space-y-8">
          {values.map((value) => (
            <li key={value.title} className="border-l-2 border-zinc-200 pl-5">
              <h3 className="text-base font-semibold text-zinc-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[15px]">{value.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </FadeIn>
  );
}
