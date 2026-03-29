import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import FadeIn from '@/components/ui/FadeIn';
import { getSkills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Skills',
  description: '기술 스택과 협업 역량.',
};

export default function SkillsPage() {
  const categories = getSkills();

  return (
    <FadeIn>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">Skills</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
        역할에 따라 묶었습니다. 실제 프로젝트에서의 사용 빈도와 깊이는 다를 수 있습니다.
      </p>

      <div className="space-y-12">
        {categories.map((cat) => (
          <Section key={cat.id} title={cat.title}>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Section>
        ))}
      </div>
    </FadeIn>
  );
}
