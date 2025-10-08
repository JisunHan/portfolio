# Assets 폴더 구조

이 폴더는 프로젝트에서 사용하는 정적 리소스를 관리합니다.

## 📁 폴더 구조

```
src/assets/
├── images/
│   ├── logo/          # 로고 이미지 (header-logo.svg, footer-logo.svg 등)
│   ├── icons/         # 아이콘 (social-icons, ui-icons 등)
│   └── projects/      # 프로젝트 썸네일 및 관련 이미지
└── ...
```

## 🎯 사용 방법

### import로 사용 (최적화됨)

```typescript
import logo from '@/assets/images/logo/header-logo.svg';

// 컴포넌트에서
<Image src={logo} alt="Logo" />;
```

### Next.js Image 컴포넌트와 함께

```typescript
import Image from 'next/image';
import logo from '@/assets/images/logo/header-logo.svg';

<Image src={logo} alt="Logo" width={120} height={40} />;
```

## 📌 네이밍 규칙

이미지 파일명은 **kebab-case**를 따릅니다:

- ✅ `header-logo.svg`
- ✅ `icon-github.svg`
- ✅ `project-thumbnail-01.png`
- ❌ `headerLogo.svg`
- ❌ `Header_Logo.svg`

## 💡 public vs src/assets

### `public/images/` - URL로 직접 접근

- 동적으로 경로가 변하는 이미지
- SEO 메타 이미지 (og:image)
- robots.txt, sitemap.xml과 함께 제공되는 리소스
- 예시: `/images/logo/site-logo.png`

### `src/assets/images/` - import해서 사용

- 컴포넌트에서 직접 import하는 이미지
- Webpack/Turbopack에 의해 최적화
- 타입 안정성 보장
- 미사용 시 자동으로 번들에서 제외
