'use client';

import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

type Props = { email: string };

export default function EmailCopy({ email }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-left transition-colors hover:border-zinc-300 hover:bg-zinc-50"
    >
      <HiOutlineMail className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Email</p>
        <p className="mt-1 text-sm text-zinc-900">{email}</p>
        {copied && <p className="mt-1 text-xs text-accent">Copied to clipboard.</p>}
      </div>
    </button>
  );
}
