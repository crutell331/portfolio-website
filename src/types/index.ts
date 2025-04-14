export interface Project {
  id: string;
  title: string;
  description: string;
  githubLink?: string;
  demoVideoLink?: string;
  technologies: string[];
  imageUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
  }[];
}