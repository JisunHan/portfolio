type ProjectDetailSectionProps = {
  id: string;
  index: number;
  title: string;
  /** Short line for scanners (e.g. “Challenge”, “Your contribution”) */
  eyebrow?: string;
  children: React.ReactNode;
};

export default function ProjectDetailSection({
  id,
  index,
  title,
  eyebrow,
  children,
}: ProjectDetailSectionProps) {
  const n = String(index).padStart(2, '0');

  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-zinc-100 pt-14 first:border-t-0 first:pt-0"
      aria-labelledby={`${id}-heading`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
        <div className="shrink-0 sm:w-14">
          <span className="text-2xl font-semibold tabular-nums text-zinc-200" aria-hidden>
            {n}
          </span>
        </div>
        <div className="min-w-0 flex-1 pb-6">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className={`text-xl font-semibold tracking-tight text-zinc-900 ${eyebrow ? 'mt-1' : ''}`}
          >
            {title}
          </h2>
          <div className="mt-6 max-w-[65ch]">{children}</div>
        </div>
      </div>
    </section>
  );
}
