import Tag from '@/components/ui/Tag';

type Props = {
  duration: string;
  role: string;
  techStack: string[];
};

export default function ProjectQuickFacts({ duration, role, techStack }: Props) {
  return (
    <dl className="grid gap-6 rounded-lg border border-zinc-200 bg-white px-4 py-5 sm:grid-cols-3 sm:gap-8 md:px-6">
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Duration</dt>
        <dd className="mt-1.5 text-sm font-medium text-zinc-900">{duration}</dd>
      </div>
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Role</dt>
        <dd className="mt-1.5 text-sm font-medium text-zinc-900">{role}</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Stack</dt>
        <dd className="mt-2 flex flex-wrap gap-1.5">
          {techStack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </dd>
      </div>
    </dl>
  );
}
