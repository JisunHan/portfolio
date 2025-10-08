// 공통 타입 정의

export interface NavItem {
  name: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Career {
  id: string;
  company: string;
  position: string;
  period: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}
