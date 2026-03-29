/**
 * Renders plain text as readable paragraphs. Double newlines in data become separate blocks.
 */
export default function BodyText({ children }: { children: string }) {
  const parts = children
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (parts.length === 0) return null;

  return (
    <div className="space-y-4">
      {parts.map((paragraph, i) => (
        <p key={i} className="text-[15px] leading-[1.75] text-zinc-600 md:text-base md:leading-[1.8]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
