import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-semibold text-zinc-900">Page not found</h1>
      <p className="mt-2 text-sm text-zinc-600">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium text-accent hover:underline">
        Home으로 돌아가기
      </Link>
    </div>
  );
}
