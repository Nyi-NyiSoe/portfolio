import {
  Atom,
  BetweenHorizonalEnd,
  Box,
  Code2,
  Cpu,
  Database,
  Figma,
  Flame,
  GitBranch,
  Layout,
  Server,
  Terminal,
} from "lucide-react";
import { ExperienceItem, Project, ProjectType, TechItem } from "./types";

export const TECH_STACK: TechItem[] = [
  { name: "React", icon: <Atom className="w-6 h-6" />, category: "Frontend" },
  {
    name: "React Native",
    icon: <Code2 className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "Flutter",
    icon: <BetweenHorizonalEnd className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <Terminal className="w-6 h-6" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <Layout className="w-6 h-6" />,
    category: "Frontend",
  },

  {
    name: "Node.js",
    icon: <Server className="w-6 h-6" />,
    category: "Backend",
  },
  {
    name: "Firebase",
    icon: <Flame className="w-6 h-6" />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-6 h-6" />,
    category: "Backend",
  },
  { name: "Docker", icon: <Box className="w-6 h-6" />, category: "Tools" },
  { name: "Git", icon: <GitBranch className="w-6 h-6" />, category: "Tools" },
  { name: "Figma", icon: <Figma className="w-6 h-6" />, category: "Design" },
  {
    name: "AI Integration",
    icon: <Cpu className="w-6 h-6" />,
    category: "Backend",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Flutter Developer",
    company: "Konectify",
    period: "2024 - Present",
    description: [
      "Improved UI consistency by updating components and fixing user-reported issues.",
      "Debugged and resolved database errors, improving overall app reliability.",
      "Implemented new features and contributed to ongoing product improvements.",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Freelance",
    period: "2025 - present",
    description: [
      "Built core features including media playback, infinite scrolling, authentication, and map-based pages using React, TypeScript, Zustand, and Tailwind.",
      "Developed real-time notifications with WebSockets and implemented responsive UI components across the app.",
      "Collaborated with the team through Git branching, pull requests, and code reviews to deliver production-ready features.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "work-1",
    title: "HLF Blood Transfusion App",
    description:
      "Manages patient and donor info with offline and online support for reliability.",
    technologies: ["Flutter", "Riverpod", "SQLite", "Django"],
    type: ProjectType.WORK,
    imageUrl: "https://picsum.photos/800/600?random=1",
    longDescription:
      "To help people who need blood, keeping track of patient condition info and donor condition. Works both offline and online.",
  },
  {
    id: "work-2",
    title: "JustMayy",
    description: "AI Chatbot in development.",
    technologies: ["Flutter", "Bloc", "TypeScript"],
    type: ProjectType.WORK,
    imageUrl: "https://picsum.photos/800/600?random=2",
    longDescription:
      "HIPAA compliant application handling sensitive patient data with multi-factor authentication.",
  },
  {
    id: "hobby-1",
    title: "Sonique",
    description: "A music player.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    type: ProjectType.HOBBY,
    imageUrl: "https://picsum.photos/800/600?random=3",
    demoVideoUrl:
      "/videos/sonique.mp4",
    //liveUrl: "https://example.com",
    repoUrl: "https://github.com/Nyi-NyiSoe/fe-sonique",
    keyFeatures: [
      "Play, pause, and skip tracks seamlessly.",
      "Create and manage playlists with ease.",
      "Sleek, intuitive, and responsive design.",
    ],
    longDescription:
      "Sonique is a music player with a sleek design, allowing users to play, pause, and manage their music library across multiple audio formats.",
  },
  {
    id: "hobby-2",
    title: "Sonique Mobile",
    description: "Music player app for mobile devices built with Flutter.",
    technologies: ["Flutter", "Dart", "Bloc", "Node.js"],
    type: ProjectType.HOBBY,
    imageUrl: "https://picsum.photos/800/600?random=5",
    demoVideoUrl:
      "/videos/smb.mp4",
    // liveUrl: "https://example.com",
    repoUrl: "https://github.com/Nyi-NyiSoe/sonique-mobile",
    keyFeatures: [
      "Complete app built from scratch, including UI and state management.",
      "Authentication and data handling with backend integration.",
      "Performance-focused, user-friendly features.",
    ],
    longDescription:
      "The mobile version of the Sonique music player application. It offers a user-friendly interface optimized for mobile devices, allowing users to enjoy their music on the go.",
  },
  {
    id: "hobby-3",
    title: "Sentria",
    description:
      "A community-driven platform that helps people in disaster-affected areas by connecting them with shelter, food, WiFi, and other resources using real-time USGS data.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
      "Supabase",
    ],
    type: ProjectType.HOBBY,
    inDevelopment: true,
    imageUrl: "https://picsum.photos/800/600?random=4",
    demoVideoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    //liveUrl: "https://example.com",
    repoUrl: "#",
    keyFeatures: [
      "Share and find resources like shelter, food, and WiFi.",
      "Real-time disaster updates via USGS fact checks.",
      "Community-driven reporting and support.",
    ],
    longDescription:
      "Sentria is a community-driven project to help in areas affected by natural disasters. Using real-time USGS fact checks, people can offer places to stay, WiFi, food, and other resources for those in need. shorthen it and give key features",
  },
];
