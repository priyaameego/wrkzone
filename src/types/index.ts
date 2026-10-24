export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Hybrid' | 'On-site';

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  companySlug: string;
  location: string;
  locationSlug: string;
  type: JobType;
  salary?: string;
  category: string;
  postedAt: string;
  deadline?: string;
  experienceLevel: 'Entry' | 'Mid-Level' | 'Senior' | 'Lead' | 'Executive';
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  isEasyApply: boolean;
  externalUrl?: string;
  matchScore?: number;
}

export interface Candidate {
  id: string;
  slug: string;
  name: string;
  headline: string;
  location: string;
  locationSlug: string;
  avatarUrl?: string;
  initials: string;
  summary: string;
  experienceYears: number;
  availability: 'Immediately' | '2 Weeks Notice' | '1 Month' | 'Not Available';
  preferredRole: string;
  cvTemplate: 'AwsomeCV' | 'Classic' | 'Modern' | 'Europass' | 'Francais' | 'Amharic';
  skills: string[];
  languages: string[];
  isPublic: boolean;
  workHistory: {
    title: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    honors?: string;
  }[];
  projects?: {
    name: string;
    description: string;
    link?: string;
    tools?: string[];
  }[];
  certifications?: string[];
}

export interface Company {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
  industry: string;
  headquarters: string;
  website: string;
  size: string;
  openJobsCount: number;
  description: string;
  founded?: string;
  specialties?: string[];
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  country: string;
  jobCount: number;
  featured?: boolean;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  studentsCount: number;
  description: string;
  syllabus: { title: string; duration: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface HelpArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  updatedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'CV Maker' | 'Jobs & Applications' | 'Job Agent' | 'Employers';
}

export interface CVProfileData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  template: 'AwsomeCV' | 'Classic' | 'Modern' | 'Europass' | 'Francais' | 'Amharic';
  workHistory: {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    id: string;
    degree: string;
    school: string;
    period: string;
  }[];
  skills: string[];
  languages: string[];
  certifications: string[];
}
