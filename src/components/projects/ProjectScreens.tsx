'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type Screen = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  title?: string;
  images: Screen[];
};

export default function ProjectScreens({ title = 'Screens', images }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setOpenIndex(index), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const active = useMemo(() => {
    if (openIndex == null) return null;
    return images[openIndex] ?? null;
  }, [images, openIndex]);

  useEffect(() => {
    if (openIndex == null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i == null ? i : Math.max(0, i - 1)));
      if (e.key === 'ArrowRight')
        setOpenIndex((i) => (i == null ? i : Math.min(images.length - 1, i + 1)));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close, images.length, openIndex]);

  return (
    <section className="mt-14 border-t border-zinc-200 pt-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{title}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {images.map((img, idx) => (
          <figure key={img.src} className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
            <button
              type="button"
              onClick={() => open(idx)}
              className="group relative block w-full"
              aria-label={`이미지 확대: ${img.alt}`}
            >
              <div className="relative aspect-[16/9]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
            </button>
            {img.caption && (
              <figcaption className="px-4 py-3 text-sm leading-relaxed text-zinc-600">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-[375px] overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex max-h-[85vh] flex-col">
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-zinc-200 bg-white px-4 py-3">
                <p className="truncate text-sm font-medium text-zinc-900">{active.alt}</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                    onClick={() => setOpenIndex((i) => (i == null ? i : Math.max(0, i - 1)))}
                    disabled={openIndex === 0}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                    onClick={() =>
                      setOpenIndex((i) => (i == null ? i : Math.min(images.length - 1, i + 1)))
                    }
                    disabled={openIndex === images.length - 1}
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white hover:opacity-90"
                    onClick={close}
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto bg-zinc-50 px-3 py-3">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={375}
                  height={812}
                  className="h-auto w-full"
                />
              </div>

              {active.caption && (
                <div className="sticky bottom-0 border-t border-zinc-200 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-600">
                  {active.caption}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

