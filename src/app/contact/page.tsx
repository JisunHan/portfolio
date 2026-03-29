import type { Metadata } from 'next';
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import EmailCopy from '@/components/contact/EmailCopy';
import FadeIn from '@/components/ui/FadeIn';
import { getProfile } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: '이메일, GitHub, LinkedIn, 이력서.',
};

export default function ContactPage() {
  const profile = getProfile();
  const { contact } = profile;

  return (
    <FadeIn>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">Contact</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
        협업·채용 관련 문의는 아래 채널로 연락 주세요.
      </p>

      <ul className="space-y-3">
        <li>
          <EmailCopy email={contact.email} />
        </li>
        <li>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            <FaGithub className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">GitHub</p>
              <p className="mt-1 text-sm text-accent">{contact.github.replace(/^https?:\/\//, '')}</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            <FaLinkedin className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">LinkedIn</p>
              <p className="mt-1 text-sm text-accent">{contact.linkedin.replace(/^https?:\/\//, '')}</p>
            </div>
          </a>
        </li>
        {contact.blog && (
          <li>
            <a
              href={contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              <SiVelog className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Blog</p>
                <p className="mt-1 text-sm text-accent">{contact.blog.replace(/^https?:\/\//, '')}</p>
              </div>
            </a>
          </li>
        )}
        <li>
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            <FaRegFilePdf className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Resume</p>
              <p className="mt-1 text-sm text-accent">Open PDF</p>
            </div>
          </a>
        </li>
      </ul>
    </FadeIn>
  );
}
