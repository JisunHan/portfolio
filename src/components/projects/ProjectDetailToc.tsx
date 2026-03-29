import { PROJECT_DETAIL_SECTIONS } from '@/lib/project-detail-sections';

export default function ProjectDetailToc() {
  return (
    <nav className="rounded-lg border border-zinc-200 bg-zinc-50/80 px-4 py-4 md:px-5" aria-label="On this page">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">On this page</p>
      <ol className="mt-3 grid gap-2 gap-x-6 text-sm sm:grid-cols-2">
        {PROJECT_DETAIL_SECTIONS.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="inline-flex items-baseline gap-2 text-zinc-600 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <span className="w-5 shrink-0 text-xs tabular-nums text-zinc-400">{i + 1}.</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
