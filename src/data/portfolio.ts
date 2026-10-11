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
  /** Canonical origin; absolute URLs in metadata, the sitemap and link previews resolve against it. */
  siteUrl: string;
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
  /** One scannable figure for the hero's "currently" line, e.g. user scale. */
  highlight?: string;
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
  /** False when the live site refuses framing (X-Frame-Options), which would leave the Live Preview tab blank. */
  embeddable?: boolean;
  github?: string;
  projectDoc?: string;
  personalProject?: boolean;
}

export type SkillIcon =
  | "react" | "redux" | "nextjs" | "html5" | "css3" | "javascript"
  | "typescript" | "tailwind"
  | "bootstrap" | "mui" | "flutter" | "nodejs" | "express" | "graphql"
  | "python" | "flask" | "django" | "mysql" | "postgresql" | "mongodb"
  | "redis" | "drizzle" | "crdt" | "websockets"
  | "firebase" | "aws" | "docker" | "vercel" | "vitest" | "playwright" | "java" | "androidstudio"
  | "tensorflow" | "jupyter" | "googlecolab" | "scikitlearn"
  | "git" | "github" | "figma"
  | "kafka" | "socketio" | "caching" | "pubsub" | "sharding"
  | "platformchannels" | "nativemobile" | "animations";

export interface SkillCategory {
  category: string;
  skills: { name: string; icon: SkillIcon }[];
}

export const profile: Profile = {
  name: "Vikram Negi",
  role: "Full-Stack Engineer",
  tagline: "I take products from spec to production — owning system design, backend architecture, and UI end to end, across Flutter, React, and Node.js.",
  location: "New Delhi, India",
  email: "vikramnegi175@gmail.com",
  siteUrl: "https://vikramnegi.vercel.app",
  whatsapp: "918178945004",
  /** Served from public/ so it cannot rot the way the old Drive link did. */
  resumeUrl: "/Vikram_Negi_Resume.pdf",
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
    highlight: "300K+ users, 55K+ daily active",
    description:
      "Lead development of the Koshiqa mobile app, which has grown to 300K+ users and 55K+ daily actives. Own feature development and performance work across e-commerce, the community feed and chat, profiles, and leaderboards, partnering directly with product and design to ship reliably. Act as the primary engineer for diagnosing and resolving production issues, keeping the app stable for its full user base.",
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
    title: "Tandem — Collaborative Rich-Text Documents That Work Offline",
    status: "Live",
    level: "Advanced",
    role: "Sole engineer — CRDT data model, sync server, storage, editor, and deployment",
    outcome:
      "A Google Docs–style workspace several people can edit at once, including with the network off. Two people typing in the same paragraph both keep their text, edits made on a plane merge when the connection returns, and the editor only says \"Saved\" once the server has actually committed the change.",
    problem:
      "Real-time editing looks like a WebSocket and a broadcast until two edits cross in flight. Last-write-wins then silently destroys one person's typing and never tells them, and a \"saved\" badge that only means \"sent\" lies the moment the server restarts.",
    description:
      "Collaborative rich-text editor built on Tiptap and Yjs CRDTs, split into a stateless Next.js app on Vercel and a stateful WebSocket sync server on Render, sharing one Postgres. Updates are appended to a log and compacted into snapshots, each client keeps an IndexedDB copy so it stays editable offline, and CI migrates the database and deploys both tiers only after the tests pass.",
    metrics: [
      { value: "400→0", label: "update rows after compaction" },
      { value: "3.5×", label: "faster document load" },
      { value: "84 + 7", label: "unit and browser tests in CI" },
    ],
    highlights: [
      "Rich text: headings, fonts, colours, highlights, links, lists, tables, zoom and print",
      "Concurrent edits converge with neither side losing text, and keep working offline",
      "Named carets and selections, so you can see where everyone else is typing",
      "Comments anchored to text that stay attached as the document changes around them",
      "Named versions with preview and restore — a backup is taken before every restore",
      "Share by email or link as viewer or editor; removing access takes effect on open sessions",
      "Workspace with search, favourites, grid/list views, outline, find & replace and recoverable trash",
    ],
    engineering: [
      "\"Saved\" means durable, not sent: an ordered revision barrier acknowledges each edit only after it commits to Postgres. A Yjs state vector alone cannot acknowledge delete-only edits, so the barrier tracks revisions instead",
      "Storage is append-then-compact. Snapshot insert and deletion of the updates it covers commit in one transaction; appends and compaction serialize per document on a Postgres advisory lock, and loaders read snapshot and tail in one repeatable-read transaction, so compaction can never race a loader",
      "Found and fixed a real race: authentication needs a database round trip, so the client's opening sync step arrived before any message listener existed and was silently dropped, leaving the document blank. Measured 0 chars on 3/3 runs before the fix, 513 on 3/3 after",
      "Rooms batch updates for 800ms and persist the merged result; a failed write keeps its batch and retries with bounded backoff, and a dirty room is never evicted until it has flushed",
      "Permissions are re-checked on every sync message and refreshed on idle sockets, so a downgraded or removed collaborator loses access mid-session. Viewers may request state but never supply it, and an inaccessible document is indistinguishable from a missing one",
      "Plain-text documents from the first version migrate to rich text once, on the server, before any client binds; the original text is kept, and edits from a stale offline tab surface in a recovery panel rather than being merged blindly",
      "The sync tier is hardened for the open internet — capped message sizes, pre-auth buffers, per-connection rate and queue limits — and exposes health, readiness and Prometheus metrics",
      "Scripts prove the headline claims end to end: two real WebSocket clients converge and are read back from Postgres, and a 400-update log compacts to a byte-identical document. Playwright covers formatting, carets, offline reconnect, comments, versions and viewer enforcement",
    ],
    image: [
      "/projects/tandem-editor.png",
      "/projects/tandem-home.png",
      "/projects/tandem-docs.png",
    ],
    link: "https://tandem-ten-fawn.vercel.app",
    embeddable: false,
    github: "https://github.com/vik-negi/tandem",
    skillsUsed: [
      "Next.js",
      "TypeScript",
      "Tiptap / ProseMirror",
      "Yjs / CRDT",
      "WebSockets",
      "PostgreSQL",
      "Drizzle ORM",
      "IndexedDB",
      "Vitest",
      "Playwright",
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
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
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
      { name: "Redis", icon: "redis" },
      { name: "Drizzle ORM", icon: "drizzle" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "System Design & Architecture",
    skills: [
      { name: "CRDTs (Yjs)", icon: "crdt" },
      { name: "WebSockets", icon: "websockets" },
      { name: "Kafka", icon: "kafka" },
      { name: "Socket.IO", icon: "socketio" },
      { name: "Caching", icon: "caching" },
      { name: "Pub/Sub", icon: "pubsub" },
      { name: "DB Sharding", icon: "sharding" },
    ],
  },
  {
    category: "DevOps & Testing",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Vitest", icon: "vitest" },
      { name: "Playwright", icon: "playwright" },
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
      { name: "Figma", icon: "figma" },
    ],
  },
];
