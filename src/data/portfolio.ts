export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  whatsapp: string;
  resumeUrl: string;
  bio: string;
  passions: string[];
  social: SocialLinks;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string | null;
  current: boolean;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  title: string;
  platform: string;
  duration?: string;
  status: string;
  level: string;
  description: string;
  image: string[];
  skillsUsed: string[];
  link?: string;
  github?: string;
  projectDoc?: string;
  personalProject?: boolean;
}

export type SkillIcon =
  | "react" | "redux" | "nextjs" | "html5" | "css3" | "javascript"
  | "bootstrap" | "mui" | "flutter" | "nodejs" | "express" | "graphql"
  | "python" | "flask" | "django" | "mysql" | "postgresql" | "mongodb"
  | "firebase" | "aws" | "docker" | "java" | "androidstudio"
  | "tensorflow" | "jupyter" | "googlecolab" | "scikitlearn"
  | "git" | "github" | "netlify" | "vscode" | "postman" | "figma"
  | "kafka" | "socketio" | "caching" | "pubsub" | "sharding"
  | "platformchannels" | "nativemobile" | "animations";

export interface SkillCategory {
  category: string;
  skills: { name: string; icon: SkillIcon }[];
}

export const profile: Profile = {
  name: "Vikram Negi",
  role: "Software Developer",
  tagline: "I take products from spec to production — owning system design, backend architecture, and UI end to end, across Flutter, React, and Node.js.",
  location: "New Delhi, India",
  email: "vikramnegi175@gmail.com",
  whatsapp: "918178945004",
  resumeUrl:
    "https://drive.google.com/file/d/1u_24BpiWK92aiXUO43i5Bv41Spt3nqRQ/view?usp=drive_link",
  bio: "I'm a software engineer with 4 years of experience shipping full-stack web and mobile products end to end — from system architecture and API design to the interfaces people actually use. My core stack is Flutter, React, Node.js, and MongoDB, and I go past the API and UI layer: caching strategies, Kafka-based message queues, pub/sub architectures, and database sharding are all part of how I design backend systems, not an afterthought.\n\nOn the mobile side, I go past the framework surface too — writing native platform-channel code and custom animations when Flutter alone isn't enough. I've also worked across machine learning, integrating Python-based models into production applications. I look for the solution that scales cleanly, not the one that looks impressive in a demo — and I work just as well solo on a client build as embedded in a larger engineering team.",
  passions: ["Coding", "System Design", "ML Enthusiast", "Challenging Barriers"],
  social: {
    github: "https://github.com/vik-negi/",
    linkedin: "https://www.linkedin.com/in/vikramnegi1/",
    twitter: "https://twitter.com/viki_2024",
  },
};

export const experiences: Experience[] = [
  {
    title: "Flutter Developer",
    company: "Koshiqa",
    location: "Remote",
    from: "2024-01-01",
    to: null,
    current: true,
    description:
      "Own feature development and performance work on the Kosiqua Flutter app, partnering directly with product and design to ship reliably. Act as the primary engineer for diagnosing and resolving production issues, keeping the app stable for its full user base.",
    skills: ["Flutter", "REST APIs", "Node.js"],
  },
  {
    title: "Software Developer",
    company: "Employee Forums",
    location: "Mumbai, Maharashtra",
    from: "2023-07-01",
    to: "2024-01-01",
    current: false,
    description:
      "Architected and led development of Employee Forums from the ground up, now live on the Play Store. Owned the feature roadmap end to end — turning business requirements into shipped functionality, resolving defects, and integrating the third-party services the app's core experience depends on.",
    skills: ["Flutter"],
  },
  {
    title: "Software Developer",
    company: "NeonFlake",
    location: "Remote",
    from: "2022-09-01",
    to: "2023-12-01",
    current: false,
    description:
      "Shipped 5+ cross-platform mobile apps and 3 web projects, designing the server-side architecture and REST APIs behind them in Node.js. Built and optimized 500+ API endpoints, cutting response times by 40%, and designed MongoDB schemas tuned for production query patterns.",
    skills: ["Cross-platform development", "Web development", "Node.js"],
  },
  {
    title: "Flutter Developer",
    company: "OEPP Pvt. Limited",
    location: "Remote",
    from: "2022-09-01",
    to: "2023-01-01",
    current: false,
    description:
      "Extended existing Flutter applications with new API and backend integrations, taking ownership of data-layer reliability. Translated UI/UX designs into production-ready interfaces and hardened app functionality through targeted testing.",
    skills: ["Flutter", "API integration"],
  },
];

export const projects: Project[] = [
  {
    id: "evika",
    name: "Evika",
    platform: "Android, Web, iOS",
    title: "Evika — Event and Awareness Application",
    link: "https://evika.vercel.app/",
    duration: "1 month",
    status: "Completed",
    level: "Advanced",
    description:
      "Cross-platform event management app built in Flutter for Android and web, with an ML-assisted layer for surfacing relevant events to users.",
    image: [],
    github: "https://github.com/vik-negi/mini-project",
    skillsUsed: ["Python", "Flutter", "MongoDB", "Node.js", "Express"],
    projectDoc:
      "https://drive.google.com/file/d/1kSverE2HoLlEnNMDKrKLfKmhHRDtHDzK/view?usp=sharing",
  },
  {
    id: "employee-forums",
    name: "Employee Forums",
    personalProject: false,
    platform: "Android, Web, iOS",
    title: "Employee Forums — Social Platform for Employees",
    link: "https://employee-forums.web.app",
    status: "Ongoing",
    level: "Advanced",
    description:
      "Internal social platform for organizations, built with Flutter on a Bloc-based architecture. Supports a real-time news feed, direct messaging, and group chat via Socket IO — architected and shipped end to end.",
    image: [],
    skillsUsed: ["Flutter", "Bloc", "REST APIs", "Socket IO"],
  },
  {
    id: "bookmark",
    name: "BookMark",
    status: "Completed",
    platform: "Android, iOS",
    level: "Advanced",
    title: "BookMark — Let's Make Books Non-Disposable",
    description:
      "Marketplace app for sharing, renting, and donating books, built with Flutter on a Django/Node.js backend, with a Python ML component for matching books to interested readers.",
    image: [],
    skillsUsed: [
      "Python",
      "Flutter",
      "MongoDB",
      "Node.js",
      "Express",
      "Machine Learning",
      "Django",
      "SQLite",
    ],
  },
  {
    id: "incandescents",
    name: "Incandescents",
    status: "Completed",
    platform: "Android, Web, iOS",
    level: "Advanced",
    title: "Incandescents — A Flutter Bootcamp",
    link: "https://incandescents.vercel.app/",
    description:
      "Bootcamp platform for Flutter students to register, submit assignments, share resources, and build a portfolio — built end to end with Flutter, Node.js, and Socket.io for the real-time features.",
    image: [],
    skillsUsed: ["Flutter", "Node.js", "Socket.IO", "Express", "MongoDB", "Vercel"],
  },
  {
    id: "crowdfundings",
    name: "Crowdfundings",
    status: "Completed",
    platform: "Web",
    level: "Advanced",
    title: "Blockchain Crowdfunding — Transparency and Security",
    link: "https://crowdfundings.vercel.app",
    description:
      "Blockchain crowdfunding platform built with React, Vite, and Tailwind, integrated with Ethereum via Metamask. Donations are recorded on-chain for full transparency, with campaigns auto-closing and progress tracked in real time.",
    image: [],
    skillsUsed: ["Blockchain", "Tailwind", "React", "Vite", "Metamask"],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Material UI", icon: "mui" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Flask", icon: "flask" },
      { name: "Django", icon: "django" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "System Design & Architecture",
    skills: [
      { name: "Kafka", icon: "kafka" },
      { name: "Socket.IO", icon: "socketio" },
      { name: "Caching", icon: "caching" },
      { name: "Pub/Sub", icon: "pubsub" },
      { name: "DB Sharding", icon: "sharding" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    category: "App Development",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Platform Channels", icon: "platformchannels" },
      { name: "Native Android/iOS", icon: "nativemobile" },
      { name: "Custom Animations", icon: "animations" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "Google Colab", icon: "googlecolab" },
      { name: "Scikit-learn", icon: "scikitlearn" },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Netlify", icon: "netlify" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ],
  },
];
