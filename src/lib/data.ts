import type { EducationItem, ExperienceItem, Profile, Project, SkillCategory } from '@/types/portfolio';
import projectsData from '@/data/projects.json';
import experienceData from '@/data/experience.json';
import educationData from '@/data/education.json';
import skillsData from '@/data/skills.json';
import profileData from '@/data/profile.json';

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getExperience(): ExperienceItem[] {
  return experienceData as ExperienceItem[];
}

export function getEducation(): EducationItem[] {
  return educationData as EducationItem[];
}

export function getSkills(): SkillCategory[] {
  return skillsData as SkillCategory[];
}

export function getProfile(): Profile {
  return profileData as Profile;
}
