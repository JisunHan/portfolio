import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '한지선 | Frontend Developer',
    template: '%s | 한지선',
  },
  description:
    'UI/UX에 집중하는 프론트엔드 개발자 포트폴리오. React, Next.js, TypeScript 기반의 실무 중심 프로젝트와 경험을 소개합니다.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 md:px-6 md:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
