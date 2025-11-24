import { ReactNode } from "react";

export enum ProjectType {
  WORK = "Work",
  HOBBY = "Hobby"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  type: ProjectType;
  imageUrl: string;
  demoVideoUrl?: string; // URL to a video file
  liveUrl?: string;
  repoUrl?: string;
  keyFeatures?: string[];
  inDevelopment?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  
}

export interface TechItem {
  name: string;
  icon: ReactNode;
  category: "Frontend" | "Backend" | "Tools" | "Design";
}
