export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  duration: string;
  role: string;
  featured?: boolean;
  overview: string;
  problem: string;
  myRole: string;
  solution: string;
  result: string;
  technicalDecisions: string[];
  retrospective: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  contributions: string[];
  majorProjects?: string[];
};

export type EducationItem = {
  id: string;
  institution: string;
  detail: string;
  period: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export type Profile = {
  name: string;
  title: string;
  heroIntro: string;
  aboutIntro: string[];
  strengths: string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    blog?: string;
  };
};
