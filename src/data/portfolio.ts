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

export interface ProjectMetric {
  /** Short, scannable figure — "500+", "40%", "12k". */
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  platform: string;
  duration?: string;
  status: string;
  level: string;
  /** Year shipped, used for ordering and the timeline label. */
  year?: string;
  /** Pins the project to the top of the list and the home page. */
  featured?: boolean;
  /** What you personally owned — the first thing a hiring manager looks for. */
  role?: string;
  /** Outcome-first one-liner for clients: what this did for whom. */
  outcome?: string;
  /** The situation the project existed to fix. */
  problem?: string;
  description: string;
  /** Hard numbers. Only ever populate these with figures you can defend. */
  metrics?: ProjectMetric[];
  /** Shipped capabilities, in plain language. Client-facing. */
  highlights?: string[];
  /** Architecture and tradeoff notes. Engineer-facing. */
  engineering?: string[];
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
    id: "tandem",
    name: "Tandem",
    featured: true,
    year: "2026",
    platform: "Web",
    title: "Tandem — Collaborative Documents That Work Offline",
    status: "Live",
    level: "Advanced",
    role: "Sole engineer — CRDT data model, sync protocol, storage, and client",
    outcome:
      "Documents several people can edit at once, including with the network off. Two people typing in the same paragraph both keep their text, and edits made on a plane merge when the connection returns — no merge dialog, because there is no conflict to resolve.",
    problem:
      "Real-time editing looks like a WebSocket and a broadcast until two edits cross in flight. Last-write-wins then silently destroys one person's typing and never tells them. Sending the whole textarea on every keystroke clobbers concurrent edits and resets everyone's cursor.",
    description:
      "Collaborative editor built on Yjs CRDTs, split into a stateless Next.js app and a stateful WebSocket sync server. Updates are appended to a log and periodically compacted into snapshots, so opening a document never replays its whole history, and each client keeps an IndexedDB copy so it stays editable offline.",
    metrics: [
      { value: "400→0", label: "update rows after compaction" },
      { value: "3.6×", label: "faster document load" },
      { value: "30", label: "tests, green in CI" },
    ],
    highlights: [
      "Concurrent edits converge with neither side losing text",
      "Keeps working offline and reconciles on reconnect, with no merge prompt",
      "Live presence showing who else has the document open",
      "Per-document sharing with read-only access enforced on the server",
    ],
    engineering: [
      "Editing applies an operation, not a value: a textarea hands over the whole string, so a diff recovers the real insert/delete and maps the caret across remote edits — writing the string back would destroy concurrent edits. The prefix and suffix scans are bounded so 'aa' → 'aaa' cannot double-count the middle character",
      "Compaction writes the snapshot before deleting the updates it covers, bounded by the exact sequence recorded. A crash between the two replays updates the snapshot already holds, which is harmless because Yjs updates are idempotent — the reverse order would lose data permanently",
      "Found and fixed a real race: authentication needs a database round trip, so the client's opening sync step arrived before any message listener existed and was silently dropped, leaving the document blank for the client that just connected. Measured 0 chars on 3/3 runs before the fix, 513 on 3/3 after",
      "Rooms batch updates for 800ms and persist the merged result, since every keystroke is its own update; Y.mergeUpdates collapses overwritten operations, so a burst of typing costs one small row rather than a hundred",
      "Read-only is enforced on the server — a viewer's socket may request state but never supply it — and a document you cannot see returns the same response as one that does not exist, so ids cannot be enumerated",
      "Two scripts prove the headline claims end to end rather than asserting them: verify-sync.ts converges two real WebSocket clients and reads the result back from Postgres, verify-compaction.ts collapses a 400-update log and checks the document is byte-identical. CI runs both",
    ],
    image: [
      "/projects/tandem-editor.png",
      "/projects/tandem-home.png",
      "/projects/tandem-docs.png",
    ],
    github: "https://github.com/vik-negi/tandem",
    skillsUsed: [
      "Next.js",
      "TypeScript",
      "Yjs / CRDT",
      "WebSockets",
      "PostgreSQL",
      "Drizzle ORM",
      "IndexedDB",
      "Vitest",
    ],
  },
  {
    id: "beacon",
    name: "Beacon",
    featured: true,
    year: "2026",
    platform: "Web",
    title: "Beacon — Uptime Monitoring and Status Pages",
    status: "Live",
    level: "Advanced",
    role: "Sole engineer — schema, worker tier, aggregation, alerting, and security",
    outcome:
      "A multi-tenant monitoring service: teams add the URLs they care about, Beacon probes them on a schedule, alerts them when something breaks, and gives their customers a public status page to check during an outage.",
    problem:
      "Most monitoring side-projects stop at fetching a URL on a timer — that part takes an afternoon. The real problems start after: several workers sharing one queue without double-probing, an alert that has to survive the process that sent it dying, a status page that is busiest exactly when its cache is cold, and a probe pool that becomes an SSRF engine the moment users supply the URLs.",
    description:
      "Multi-tenant uptime monitoring built on Next.js, Postgres, and Redis, split into a web tier and an independently scalable worker pool. Workers claim due monitors with SELECT … FOR UPDATE SKIP LOCKED, alerts are written through a transactional outbox, and status-page reads are served from pre-aggregated hourly rollups rather than the raw check table.",
    metrics: [
      { value: "33×", label: "faster status page reads" },
      { value: "129,600→2,161", label: "rows read per query" },
      { value: "89", label: "tests, green in CI" },
    ],
    highlights: [
      "Public status page with 90-day history, p95 latency, and live incident banners",
      "Alerts over webhook, Slack, and email, with retries and a delivery log",
      "Dashboard for monitor CRUD, incident history, and alert channels",
      "Incidents open only after repeated failures, so a single blip never pages anyone",
      "Published engineering write-up explaining every load-bearing decision",
    ],
    engineering: [
      "Workers claim work with SELECT … FOR UPDATE SKIP LOCKED and stamp the claim in the same statement, so concurrent workers get disjoint sets and a monitor stops being due the moment it is handed out — a repo script proves 3 workers claim 60 monitors with zero overlap",
      "Alerts use a transactional outbox: delivery rows commit in the same transaction as the incident transition that caused them, so an alert can never describe an incident that was rolled back, and a slow Slack call never holds a database transaction open",
      "Hourly pre-aggregation cuts a status-page query from 129,600 rows to 2,161 (45.5ms to 1.4ms). Counts sum because addition is associative; percentiles do not, so each bucket stores a fixed-boundary latency histogram and the UI prints the error bound (p95 727ms ±60ms) rather than implying exactness",
      "SSRF is contained in two layers: URLs are screened for private, loopback, link-local and CGNAT ranges on write, and redirects are followed manually and re-screened at every hop — a public host is otherwise free to 302 the probe at the cloud metadata endpoint",
      "The worker writes a Redis heartbeat with a TTL, so the key expiring is itself the alert condition — a dead worker otherwise looks identical to a healthy one whose monitors all happen to be up",
      "Every organization-scoped route re-resolves access from the URL slug through one requireOrgAccess() gate rather than trusting a form field, so a guessed id from another tenant returns 404 rather than a row",
    ],
    image: [
      "/projects/beacon-status.png",
      "/projects/beacon-home.png",
      "/projects/beacon-architecture.png",
    ],
    github: "https://github.com/vik-negi/beacon",
    skillsUsed: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Drizzle ORM",
      "Stripe",
      "Docker",
      "Vitest",
    ],
  },
  {
    id: "employee-forums",
    name: "Employee Forums",
    personalProject: false,
    featured: true,
    year: "2023",
    platform: "Android, iOS, Web",
    title: "Employee Forums — Internal Social Platform",
    link: "https://employee-forums.web.app",
    status: "Shipped to production",
    level: "Advanced",
    role: "Founding engineer — architecture, backend integration, and full app build",
    outcome:
      "Took an organisation's internal communication tool from an empty repository to a live Play Store release, as the engineer who owned the roadmap end to end.",
    problem:
      "The client needed employees spread across locations to talk to each other in one place — feed, direct messages, and group discussion — without paying per-seat for a third-party workspace tool.",
    description:
      "Internal social platform for organizations, built with Flutter on a Bloc-based architecture. Supports a real-time news feed, direct messaging, and group chat over Socket.IO — architected and shipped end to end.",
    highlights: [
      "Real-time news feed, one-to-one messaging, and group chat in a single app",
      "Published to the Play Store and running for the client's full employee base",
      "Feature roadmap owned end to end — requirements, build, defect resolution, and third-party integrations",
    ],
    engineering: [
      "Bloc state management to keep the real-time feed and chat streams predictable as screens compose and dispose",
      "Socket.IO event layer for live message delivery, separated from the REST layer used for durable reads",
      "Third-party service integrations sit behind an internal interface, so a vendor swap does not reach UI code",
    ],
    image: [],
    skillsUsed: ["Flutter", "Bloc", "Socket.IO", "REST APIs", "Node.js"],
  },
  {
    id: "evika",
    name: "Evika",
    featured: true,
    year: "2024",
    platform: "Android, iOS, Web",
    title: "Evika — Event Discovery with ML Recommendations",
    link: "https://evika.vercel.app/",
    duration: "1 month",
    status: "Live",
    level: "Advanced",
    role: "Sole engineer — Flutter client, Node.js API, and Python recommendation service",
    outcome:
      "A cross-platform event platform where the recommendation layer, not a search box, is what surfaces the right event to each user.",
    problem:
      "Event apps bury relevant local events under generic listings. Evika ranks events against a user's stated preferences and location instead of making them dig.",
    description:
      "Cross-platform event management app built in Flutter for Android, iOS, and web, backed by a Node.js/Express and MongoDB API, with a separately deployed Python service that generates preference- and location-aware event suggestions.",
    metrics: [
      { value: "3", label: "platforms from one codebase" },
      { value: "1 mo", label: "spec to live deployment" },
    ],
    highlights: [
      "Plan, manage, and discover events from Android, iOS, or the web",
      "Personalised suggestions driven by stated preferences and location",
      "Live and publicly reachable, with a written project document",
    ],
    engineering: [
      "Three-tier split: Flutter client, Node/Express + MongoDB API, and an independently deployed Python ML service, so the model can be retrained and redeployed without shipping an app update",
      "MongoDB document schemas shaped around the app's actual read patterns rather than normalised tables",
      "Recommendation service kept behind an HTTP boundary, which keeps the Node API free of Python runtime concerns",
    ],
    image: [],
    github: "https://github.com/vik-negi/mini-project",
    skillsUsed: ["Flutter", "Node.js", "Express", "MongoDB", "Python", "Machine Learning"],
    projectDoc:
      "https://drive.google.com/file/d/1kSverE2HoLlEnNMDKrKLfKmhHRDtHDzK/view?usp=sharing",
  },
  {
    id: "incandescents",
    name: "Incandescents",
    featured: true,
    year: "2023",
    status: "Live",
    platform: "Web, Android, iOS",
    level: "Advanced",
    title: "Incandescents — Flutter Bootcamp Platform",
    link: "https://incandescents.vercel.app/",
    role: "Sole engineer — platform architecture, real-time layer, and delivery",
    outcome:
      "A teaching platform that carries a cohort through registration, assignment submission, and a portfolio they can show at the end.",
    problem:
      "Bootcamp cohorts were being run across scattered chat threads and spreadsheets, with no single place for submissions, shared resources, or student work.",
    description:
      "Bootcamp platform for Flutter students to register, submit assignments, share resources, and build a portfolio — built end to end with Flutter, Node.js, and Socket.IO for the real-time features.",
    highlights: [
      "Cohort registration, assignment submission, and resource sharing in one place",
      "Each student accumulates a portfolio as they progress through the programme",
      "Live real-time updates rather than manual refresh",
    ],
    engineering: [
      "Socket.IO drives live submission and resource updates; REST handles the durable record",
      "Express API over MongoDB, deployed on Vercel alongside the web client",
      "Shared Flutter codebase targets web and mobile from one source of truth",
    ],
    image: [],
    skillsUsed: ["Flutter", "Node.js", "Express", "Socket.IO", "MongoDB", "Vercel"],
  },
  {
    id: "crowdfundings",
    name: "Crowdfundings",
    year: "2023",
    status: "Live",
    platform: "Web",
    level: "Advanced",
    title: "Blockchain Crowdfunding — Verifiable Donations",
    link: "https://crowdfundings.vercel.app",
    role: "Sole engineer — smart contract integration and front end",
    outcome:
      "A crowdfunding site where donors can verify on-chain that their money reached the campaign, instead of trusting a dashboard number.",
    problem:
      "Conventional crowdfunding asks donors to trust a platform's own reporting. Recording contributions on-chain makes the ledger independently checkable.",
    description:
      "Blockchain crowdfunding platform built with React, Vite, and Tailwind, integrated with Ethereum via MetaMask. Donations are recorded on-chain for transparency, with campaigns auto-closing and progress tracked in real time.",
    highlights: [
      "Donations written on-chain and independently verifiable by anyone",
      "Campaigns close automatically when their deadline or goal is reached",
      "Wallet-native flow — connect MetaMask and contribute, no account signup",
    ],
    engineering: [
      "MetaMask provider bridges the React client to Ethereum; on-chain state is the source of truth, not a server database",
      "Campaign progress is read back from chain state so the UI cannot drift from the ledger",
      "Vite build kept lean so first paint is not blocked on the web3 bundle",
    ],
    image: ["/projects/crowdfundings.png"],
    skillsUsed: ["React", "Vite", "Tailwind", "Blockchain", "Ethereum", "MetaMask"],
  },
  {
    id: "bookmark",
    name: "BookMark",
    year: "2023",
    status: "Completed",
    platform: "Android, iOS",
    level: "Advanced",
    title: "BookMark — Book Sharing Marketplace",
    role: "Sole engineer — Flutter client, backend, and recommendation model",
    outcome:
      "A marketplace that keeps books in circulation — shared, rented, or donated — rather than sitting unused on a shelf.",
    problem:
      "Textbooks and read-once books go dead after a single owner. BookMark matches an idle book to a reader who actually wants it.",
    description:
      "Marketplace app for sharing, renting, and donating books, built with Flutter on a Django and Node.js backend, with a Python model that matches books to interested readers.",
    highlights: [
      "Three ways to move a book: share, rent, or donate",
      "Readers matched to available books rather than browsing a flat catalogue",
    ],
    engineering: [
      "Python matching model trained in notebooks, then served behind the application backend",
      "Mixed Django and Node.js backend, with SQLite for relational catalogue data and MongoDB for document-shaped records",
    ],
    image: [],
    skillsUsed: [
      "Flutter",
      "Python",
      "Machine Learning",
      "Django",
      "Node.js",
      "MongoDB",
      "SQLite",
    ],
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
