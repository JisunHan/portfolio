type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  body: React.ReactNode;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-zinc-200 pl-6">
      {items.map((item) => (
        <li key={item.id} className="mb-10 last:mb-0">
          <span
            className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-white bg-accent"
            aria-hidden
          />
          <p className="text-xs font-medium uppercase tracking-wide text-accent">{item.period}</p>
          <h3 className="mt-1 text-base font-semibold text-zinc-900">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-zinc-600">{item.subtitle}</p>}
          <div className="mt-3 text-sm leading-relaxed text-zinc-600">{item.body}</div>
        </li>
      ))}
    </ol>
  );
}
