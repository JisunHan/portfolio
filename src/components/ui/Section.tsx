type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mb-16 scroll-mt-24 md:mb-20 ${className}`}>
      {(title || description) && (
        <header className="mb-8">
          {title && (
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">{title}</h2>
          )}
          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
