export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 text-center text-xs text-zinc-500 md:px-6">
        © {year} Jisun Han. All rights reserved.
      </div>
    </footer>
  );
}
