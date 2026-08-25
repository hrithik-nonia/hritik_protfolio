import {
  Mail,
  Code2,
  FileCode2,
  Cpu,
  Atom,
  Palette,
  Terminal,
  Zap,
  Boxes,
  Database,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NavItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const ContactMethods = [
  {
    type: "EMAIL",
    value: "hello@hrithik.dev",
    href: "mailto:hello@hrithik.dev",
    icon: Mail,
  },
  {
    type: "LINKEDIN",
    value: "in/hrithik-dev",
    href: "https://www.linkedin.com/in/hrithik-nonia-07719a2bb/",
    icon: FaLinkedin,
  },
  {
    type: "GITHUB",
    value: "github.com/hrithik",
    href: "https://github.com/hrithik-nonia",
    icon: FaGithub,
  },
];

export const EducationData = [
  {
    degree: "Secondary & Higher Secondary Education",
    college: "Sirpur Hat High School",
    duration: "2008 – 2021",
  },
  {
    degree: "Diploma",
    college: "Durgapur Institute of Polytechnic",
    duration: "2022 – 2025",
  },
];

export const LanguagesData = [
  {
    code: "IN",
    language: "Hindi",
    level: "Native",
    isActive: true,
  },
  {
    code: "GB",
    language: "English",
    level: "Intermediate",
    isActive: false,
  },
  {
    code: "BD",
    language: "Bengali",
    level: "Native",
    isActive: false,
  },
];

export const ProjectData = [
  {
    id: 1,
    title: "Electronics Store",
    description:
      "A full-stack e-commerce platform for electronics. Features include user authentication, product search, cart management, and payment integration.",
    technologies: ["REACT", "FASTAPI", "MONGODB"],
    githubUrl: "https://github.com/hrithik-nonia",
    liveUrl: "#live",
    gradient: "from-blue-500 to-purple-500",
    techStyle: "bg-blue-950/80 text-blue-400 border-blue-900/60",
  },
  {
    id: 2,
    title: "Snip.ly",
    description:
      "A URL shortener service with detailed analytics. Built for high performance and quick redirects using modern backend technologies.",
    technologies: ["FASTAPI", "PYTHON", "REDIS"],
    githubUrl: "https://github.com/hrithik-nonia",
    liveUrl: "https://snip-ly-frontend.vercel.app",
    gradient: "from-purple-500 to-cyan-500",
    techStyle: "bg-purple-950/80 text-purple-300 border-purple-900/60",
  },
];

export const SkillsData = [
  {
    category: "FRONTEND",
    skills: [
      { name: "HTML", icon: Code2, color: "text-orange-500" },
      { name: "CSS", icon: FileCode2, color: "text-blue-500" },
      { name: "JS", icon: Cpu, color: "text-yellow-400" },
      { name: "React", icon: Atom, color: "text-cyan-400" },
      { name: "Tailwind", icon: Palette, color: "text-teal-400" },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Python", icon: Terminal, color: "text-blue-400" },
      { name: "FastAPI", icon: Zap, color: "text-emerald-400" },
      { name: "Express", icon: Boxes, color: "text-slate-300" },
    ],
  },
  {
    category: "DATABASE",
    skills: [{ name: "MongoDB", icon: Database, color: "text-emerald-500" }],
  },
];
