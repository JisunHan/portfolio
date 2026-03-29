type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 ${className}`}
    >
      {children}
    </span>
  );
}
