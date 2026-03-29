import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { getProfile } from '@/lib/data';

export default function HomePage() {
  const profile = getProfile();

  return (
    <div>
      <FadeIn>
        <section className="flex min-h-[78vh] flex-col justify-center py-16 md:min-h-[85vh] md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
              Frontend Developer
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 md:text-6xl">
              사용자 경험을
              <br />
              더 나은 인터페이스로 연결하는
              <br />
              프론트엔드 개발자
              <br />
              <span className="text-accent">{profile.name}</span>입니다.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
              퍼블리싱 기반의 UI 디테일과 React 중심의 개발 경험을 바탕으로, 사용성과 유지보수를
              함께 고려한 프론트엔드를 구현합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                About Me
              </Link>

              <a
                href={profile.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-2 py-2.5 text-sm font-medium text-zinc-500 underline-offset-4 transition hover:text-zinc-900 hover:underline"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-zinc-200 pt-6">
            <div className="flex flex-wrap gap-3">
              {profile.strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
                >
                  {strength}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-6 text-sm text-zinc-500 md:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-zinc-900">5+</p>
                <p className="mt-1">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Legacy → React
                </p>
                <p className="mt-1">Vanilla JS기반 레거시부터 React까지</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-zinc-900">UI / UX</p>
                <p className="mt-1">접근성, 구조, 협업 중심 개발</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
