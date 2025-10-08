// 앱에서 사용하는 상수들

export const SITE_NAME = 'Portfolio';
export const SITE_DESCRIPTION = '개인 포트폴리오 웹사이트';

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  email: 'your.email@example.com',
};

export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
] as const;
