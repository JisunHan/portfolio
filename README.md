# Portfolio

개인 포트폴리오 웹사이트

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: styled-components
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── about/             # About 페이지
│   │   ├── projects/          # Projects 페이지
│   │   ├── career/            # Career 페이지
│   │   ├── contact/           # Contact 페이지
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── page.tsx           # Home 페이지
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── layout/           # Header, Footer 등 레이아웃 컴포넌트
│   │   └── common/           # 공통 컴포넌트
│   ├── styles/               # 스타일 관련 파일
│   │   ├── theme.ts          # 테마 설정
│   │   └── GlobalStyle.ts    # 글로벌 스타일
│   ├── types/                # TypeScript 타입 정의
│   ├── lib/                  # 라이브러리 설정
│   └── utils/                # 유틸리티 함수
├── public/                   # 정적 파일
└── package.json
```

## 시작하기

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
pnpm build
```

### 프로덕션 서버 실행

```bash
pnpm start
```

## 메뉴 구성

- **Home**: 메인 페이지
- **About**: 자기소개
- **Projects**: 프로젝트 포트폴리오
- **Career**: 경력 사항
- **Contact**: 연락처 정보

## 코딩 컨벤션

### 파일 및 폴더 네이밍

#### React 컴포넌트

- **컨벤션**: `PascalCase`
- **예시**: `Header.tsx`, `ProjectCard.tsx`, `ContactForm.tsx`

#### 일반 파일 (utils, hooks, types)

- **컨벤션**: `camelCase`
- **예시**: `constants.ts`, `useScrollPosition.ts`, `apiClient.ts`

#### 폴더명

- **컨벤션**: `lowercase` 또는 `kebab-case`
- **예시**: `components/`, `app/`, `shared-hooks/`

#### 이미지 및 정적 파일

- **컨벤션**: `kebab-case`
- **예시**: `header-logo.svg`, `profile-image.jpg`, `project-thumbnail-01.png`
- **이유**: URL 친화적, SEO 최적화, 웹 표준

### 코드 네이밍

#### 변수 및 함수

- **컨벤션**: `camelCase`

```typescript
const userName = 'John';
const getUserData = () => {};
```

#### 상수

- **컨벤션**: `UPPER_SNAKE_CASE`

```typescript
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;
```

#### 타입 및 인터페이스

- **컨벤션**: `PascalCase`

```typescript
interface UserProfile {}
type ProjectData = {};
```

#### styled-components

- **컨벤션**: `PascalCase`

```typescript
const HeaderContainer = styled.header``;
const NavList = styled.ul``;
```

### Git 커밋 메시지

- **형식**: `type: subject`
- **타입**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **예시**:
  - `feat: Add project card component`
  - `fix: Resolve header navigation issue`
  - `docs: Update README with conventions`

## Vercel 배포

이 프로젝트는 Vercel에 최적화되어 있습니다.

1. GitHub에 코드를 푸시
2. [Vercel](https://vercel.com)에 가입
3. GitHub 저장소를 연결하여 배포

## 라이선스

MIT
