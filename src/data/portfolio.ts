export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "map-pin";
};

export const profile = {
  name: "Parab Mishra",
  role: "Full Stack Developer",
  tagline: "I don't just write code. I build systems.",
  location: "Pune, Maharashtra",
  summary:
    "MERN stack engineer who designs event-driven, multi-tenant backend systems and ships them end-to-end \u2014 from schema to deployment. I care about clean architecture, observability, and software that keeps working at 3 a.m.",
  email: "parabcadet@gmail.com",
  availability: "Open to backend / full-stack & systems roles",
  socials: [
    { label: "Email", href: "mailto:parabcadet@gmail.com", icon: "mail" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parab-mishra/",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: "maison-daurine",
    company: "Maison D' Auraine",
    role: "Full Stack Developer",
    location: "Bengaluru, India",
    start: "Jul 2023",
    end: "Present",
    current: true,
    summary:
      "Owning the full stack of a production e-commerce platform \u2014 architecture, backend services, frontend, database and deployment.",
    highlights: [
      "Crafted a full-stack e-commerce web application from scratch, covering backend, frontend, database design and deployment pipeline.",
      "Leveraged Kafka to build event-driven communication across microservices, decoupling order, payment and inventory flows.",
      "Developed cart and payment functionality that improved conversion with minimal downtime during checkout.",
      "Built a learning management platform handling thousands of concurrent users via HTTP Live Streaming (HLS).",
    ],
    stack: ["Node.js", "Nest.js", "React.js", "Kafka", "MongoDB", "AWS", "Redis"],
  },
  {
    id: "ajjas",
    company: "Ajjas",
    role: "Junior Software Developer",
    location: "Bhopal, India",
    start: "Jan 2022",
    end: "Jul 2023",
    summary:
      "Designed scalable, multi-tenant backend systems for an IoT safety-device platform serving thousands of riders.",
    highlights: [
      "Designed scalable backend services using Node.js, Express, MongoDB, Redis, ScyllaDB and VoltDB.",
      "Built subdomain-based authentication and multi-tenant backend systems for white-labelled deployments.",
      "Designed scalable NoSQL schemas and integrated payment gateways for subscriptions.",
      "Developed CRM solutions and integrated the Google Calendar API via OAuth for internal teams.",
      "Wrote agile RESTful APIs and integrated the SMS Retriever API within the Android app.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Redis", "ScyllaDB", "VoltDB"],
  },
  {
    id: "sirt",
    company: "Sagar Institute of Research & Technology, Bhopal",
    role: "B.Tech, Computer Science Engineering",
    location: "Bhopal, India",
    start: "Jan 2019",
    end: "Jan 2023",
    summary: "Bachelor of Technology in Computer Science Engineering.",
    highlights: [
      "Built a foundation in data structures, algorithms, databases and distributed systems.",
    ],
    stack: ["DSA", "DBMS", "OS", "Computer Networks"],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  href?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  architecture: string[];
  status: "production" | "shipped" | "archived";
};

export const projects: Project[] = [
  {
    id: "medorn",
    name: "Medorn \u2014 MR Reporting Platform",
    description:
      "Multi-tenant field-force reporting SaaS for pharma companies \u2014 one shared backend instead of a deployment per client.",
    longDescription:
      "Medorn is a field-force reporting platform used by pharmaceutical companies to manage their Medical Representatives \u2014 Daily Call Reporting (DCR), tour-program planning, GPS geo-tagging of doctor visits, approval workflows, automated expenses and e-detailing. Every new pharma client had previously meant standing up a separate backend and database. I redesigned the backend to be multi-tenant: one deployment now serves every client, with tenant isolation handled in the data and auth layers instead of in infrastructure, cutting per-client onboarding down to configuration.",
    href: "https://medorn.com/",
    tags: ["Node.js", "Multi-tenant", "MongoDB", "Geo-tagging", "SaaS"],
    metrics: [
      { label: "Active MRs", value: "1000+" },
      { label: "Reports submitted", value: "1,00,000+" },
      { label: "Attendance accuracy", value: "99.9%" },
    ],
    features: [
      "Daily Call Reporting (DCR) & tour-program planning for field reps",
      "GPS geo-tagging that verifies doctor visits and blocks fraudulent reporting",
      "Manager approval hierarchy for calls, leave and expense claims",
      "Automated expense generation from reported visits",
      "e-Detailing, attendance/leave, and sample & gift management",
    ],
    architecture: [
      "Single shared backend + tenant resolver replacing one deployment per pharma client",
      "Tenant-scoped data access layer keyed by tenant ID, isolating each company's reps, doctors and reports on shared infrastructure",
      "New clients onboarded via configuration (branding, hierarchy, feature flags) instead of new infra",
      "Low-latency sync layer keeping desktop and Android clients consistent in near real-time",
    ],
    status: "production",
  },
  {
    id: "maison-dathena",
    name: "Maison D'Athena \u2014 LMS Platform",
    description:
      "Internal learning management platform with admin video pipeline and adaptive HLS streaming.",
    longDescription:
      "A learning management platform built for internal company training. Includes a full admin portal for uploading tutorial videos, an automated transcoding pipeline that converts raw video into HTTP Live Streaming (HLS) format across multiple resolutions, and an adaptive player so learners can stream smoothly regardless of network strength.",
    href: "https://dev-admin.auraine.academy/",
    tags: ["Node.js", "React", "HLS", "AWS", "Video Pipeline"],
    metrics: [
      { label: "Concurrent viewers", value: "1000s" },
      { label: "Resolutions transcoded", value: "Multi-bitrate" },
      { label: "Uptime target", value: "High-availability" },
    ],
    features: [
      "Admin portal for uploading & managing tutorial videos",
      "Automated raw-video \u2192 HLS transcoding pipeline, multiple resolutions",
      "Adaptive bitrate playback based on client network strength",
      "Role-based access for trainers and learners",
    ],
    architecture: [
      "Upload service accepts raw video and queues transcoding jobs",
      "Worker pool transcodes to multi-resolution HLS segments",
      "CDN-backed delivery with adaptive bitrate manifests",
      "Admin API for content lifecycle management",
    ],
    status: "production",
  },
  {
    id: "ajjas-platform",
    name: "Ajjas \u2014 IoT Safety Platform",
    description:
      "Companion backend for a wearable safety device: live tracking, geo-fencing, accident alerts and a seller admin suite.",
    longDescription:
      "Backend and admin systems for a device + app combo offering live tracking, vibration alerts, accident alerts, geo-fencing and 3D ride history. Built the subscription engine for auto-renewable plans, an internal CRM for customer support and banner scheduling, geo-fencing based theft-detection alerts, and a from-scratch seller admin portal with dashboards, inventory management and reporting.",
    href: "https://ajjas.com/",
    tags: ["Node.js", "Multi-tenant", "Payments", "Geo-fencing", "CRM"],
    metrics: [
      { label: "Core features", value: "Live tracking, SOS" },
      { label: "Subscriptions", value: "Auto-renewable" },
      { label: "Admin surfaces", value: "CRM + Seller portal" },
    ],
    features: [
      "Auto-renewable subscription integration for the mobile app",
      "Internal CRM: customer support portal + location-based banner scheduling",
      "Geo-fencing alerts powering theft-detection for riders",
      "Seller admin portal: dashboard, inventory management, reporting",
    ],
    architecture: [
      "Multi-tenant backend with subdomain-based authentication",
      "Event pipeline for device telemetry (location, vibration, accident)",
      "NoSQL schema (MongoDB / ScyllaDB) tuned for high-write telemetry",
      "Payment gateway integration for subscription billing",
    ],
    status: "production",
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    description: "Services, APIs and event-driven systems",
    skills: ["Node.js", "Nest.js", "TypeScript", "Express.js"],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces and client-side state",
    skills: ["React.js", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: "data",
    label: "Data & Infra",
    description: "Storage, messaging and infrastructure",
    skills: [
      "MongoDB",
      "MySQL",
      "Redis",
      "Kafka",
      "Amazon AWS",
      "Linux",
      "WebSocket",
      "Prisma",
      "JWT",
      "Git",
      "CI/CD",
    ],
  },
  {
    id: "practice",
    label: "Ways of Working",
    description: "How I operate on a team",
    skills: [
      "Team Player",
      "Deliver Results",
      "Clear Communication",
      "Bias for Action",
      "Leadership",
      "People Management",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { name: "Microsoft Technology Associate: Security Fundamentals (MTA)", issuer: "Microsoft" },
  { name: "Full Stack Developer", issuer: "GreyCampus Enterprise" },
  { name: "Advent of Cyber 2020", issuer: "TryHackMe" },
];

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export const aiWorkflow: WorkflowStep[] = [
  {
    id: "spec",
    title: "Spec & Constraints",
    description: "Turn ambiguous requirements into a written spec before writing code.",
    detail:
      "I use AI tools to pressure-test requirements \u2014 surfacing edge cases, failure modes and data-model trade-offs \u2014 then lock a spec before implementation starts.",
  },
  {
    id: "design",
    title: "System Design",
    description: "Sketch architecture, data flow and event contracts.",
    detail:
      "AI-assisted diagramming and API-contract drafting speed up early design loops, especially for event-driven services (Kafka topics, schemas, retries).",
  },
  {
    id: "build",
    title: "AI-Paired Build",
    description: "Pair with AI copilots for scaffolding, boilerplate and refactors.",
    detail:
      "I let AI handle repetitive scaffolding (CRUD, DTOs, migrations) while I focus on business logic, concurrency and correctness.",
  },
  {
    id: "verify",
    title: "Verify & Harden",
    description: "Tests, code review and load-path validation.",
    detail:
      "AI-generated test cases plus manual review of concurrency, idempotency and failure paths before anything ships to production.",
  },
  {
    id: "ship",
    title: "Ship & Observe",
    description: "Deploy behind flags, watch metrics, iterate.",
    detail:
      "Rollout behind feature flags with dashboards and alerts wired up first \u2014 systems should tell you when they're unhappy.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];
