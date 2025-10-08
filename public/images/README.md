# Public Images

이 폴더는 URL로 직접 접근 가능한 정적 이미지를 저장합니다.

## 📁 폴더 구조

```
public/images/
├── logo/          # 로고 파일 (사이트 아이콘, OG 이미지)
├── icons/         # 공용 아이콘
└── projects/      # 프로젝트 이미지
```

## 🌐 접근 방법

이 폴더의 파일은 루트 경로에서 직접 접근 가능합니다:

```html
<!-- HTML에서 -->
<img src="/images/logo/site-logo.png" alt="Logo" />

<!-- Next.js에서 -->
<image src="/images/logo/site-logo.png" alt="Logo" width="{200}" height="{80}" />
```

## 📝 사용 예시

### 메타 태그에서 사용

```typescript
// app/layout.tsx
export const metadata = {
  openGraph: {
    images: ['/images/logo/og-image.png'],
  },
};
```

### 동적 경로

```typescript
const imagePath = `/images/projects/${projectId}.png`;
<Image src={imagePath} alt="Project" width={300} height={200} />;
```

