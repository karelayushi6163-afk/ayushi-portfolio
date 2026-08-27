// ─────────────────────────────────────────────────────────────
// All content below is sourced from Ayushi's resume, GitHub
// profile, and information she confirmed directly. Edit freely —
// this is the ONLY file you should need to touch to update text.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ayushi Karel',
  title: 'B.Tech CSE Student | Aspiring Software & AI Developer',
  roles: [
    'CSE Student',
    'Aspiring Software Developer',
    'AI Explorer',
    'Tech Enthusiast',
  ],
  tagline: 'Building projects, exploring technology, and continuously learning.',
  intro:
    "I'm a Computer Science Engineering student passionate about building intelligent applications, exploring AI technologies, and continuously improving my problem-solving and development skills.",
  links: {
    github: 'https://github.com/karelayushi6163-afk',
    linkedin:
      'https://www.linkedin.com/in/ayushi-karel-b64a1137b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'karelayushi163@gmail.com',
    phone: '+91 74950-40026',
    phoneRaw: '+917495040026',
  },
  resume: '/Ayushi_Karel_Resume.pdf',
}

export const about = {
  intro:
    "I'm a Computer Science Engineering student who enjoys turning ideas into working software — from AI agents that reason over data, to small desktop tools that solve everyday problems. I like understanding how things work under the hood, then building something real with that understanding.",
  currentlyLearning:
    'Deepening my skills in Python and AI-agent development, while exploring the fundamentals of cybersecurity.',
  aspiration:
    'Looking to grow into a software developer role where I can keep building, keep learning, and contribute to meaningful projects.',
  interests: [
    'Artificial Intelligence',
    'Cybersecurity',
    'Web Development',
    'Python',
    'Problem Solving',
    'Building Practical Projects',
  ],
  stats: [
    { value: 'Ongoing', label: 'Projects & Experiments' },
    { value: '2nd', label: 'Rank, Promptathon' },
    { value: '2025–2029', label: 'B.Tech CSE' },
  ],
}

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'Global Institute of Technology & Management',
    period: '2025 – 2029',
    detail: 'Currently pursuing',
  },
  {
    degree: 'Class XII (HBSE)',
    institution: 'Saheed Surinder Kumar Govt. Sr. Sec. School, Kurukshetra',
    period: '2023',
    detail: '78.6%',
  },
  {
    degree: 'Class X (HBSE)',
    institution: 'Govt. Girls Sr. Sec. School, Gangwa, Hisar',
    period: '2021 – 2022',
    detail: '86.6%',
  },
]

export const skills = {
  'Programming Languages': ['Python', 'C', 'Java', 'JavaScript'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code'],
  'Exploring / Interests': ['Artificial Intelligence', 'Generative AI', 'AI Agents', 'Cybersecurity'],
}

// Featured projects — verified against github.com/karelayushi6163-afk and resume
export const projects = [
  {
    title: 'Kaggle Agent Sentinel',
    description:
      'A multi-agent risk intelligence engine built for a Kaggle Agents capstone — automates threat evaluation, risk assessment, and business-intelligence reporting.',
    tech: ['Python', 'Multi-Agent Systems', 'LLMs'],
    github: 'https://github.com/karelayushi6163-afk/kaggle_agent_sentinel',
    demo: '',
  },
  {
    title: 'Real-Time Weather Intelligence',
    description:
      'An AI agent built with Groq and LangChain that uses Retrieval-Augmented Generation (RAG) to deliver real-time weather forecasts and climate insights through live API integration.',
    tech: ['Python', 'LangChain', 'Groq', 'RAG'],
    github: 'https://github.com/karelayushi6163-afk/RealTime-Weather-Intelligence',
    demo: '',
  },
  {
    title: 'AI Language Translation Tool',
    description:
      'A desktop translation application with a Tkinter interface, supporting multiple languages with real-time translation powered by the deep-translator library.',
    tech: ['Python', 'Tkinter', 'deep-translator'],
    github: 'https://github.com/karelayushi6163-afk/AI-Language-Translation-Tool',
    demo: '',
  },
  {
    title: 'BigQuery Release Notes Analyzer',
    description:
      'A project analyzing and organizing BigQuery release notes to make tracking platform changes easier.',
    tech: ['CSS', 'Data Processing'],
    github: 'https://github.com/karelayushi6163-afk/bigquery-release-notes',
    demo: '',
  },
  {
    title: 'Promptathon Event Website',
    description:
      'The official website built for the Promptathon event — the same competition where I placed 2nd overall.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/karelayushi6163-afk/prompthon-website-ayushi',
    demo: '',
  },
]

export const moreProjects = [
  {
    title: 'Number Guess Game',
    description: 'My first C project — a classic number-guessing game.',
    tech: ['C'],
    github: 'https://github.com/karelayushi6163-afk/Number-Guess-Game',
  },
]

// Achievements — grouped so the section reads as organized highlights,
// not one long bullet dump. Only verified items from the resume are used.
export const achievementGroups = [
  {
    heading: 'Achievements',
    items: [
      { title: '2nd Rank — Promptathon', issuer: 'Promptathon', icon: 'medal' },
      { title: '1st Prize — Poster Making Competition', issuer: 'School/College Event', icon: 'medal' },
      { title: 'National Level Mathematics E-Quiz', issuer: 'Participant', icon: 'award' },
    ],
  },
  {
    heading: 'Certifications',
    items: [
      { title: 'Agentic AI Saksham Certification', issuer: 'Capabl (ETG Career Labs)', icon: 'award' },
      { title: 'Introduction to Artificial Intelligence', issuer: 'Simplilearn', icon: 'award' },
      { title: 'Microsoft Certification in AI & Copilot', issuer: 'Microsoft', icon: 'award' },
      { title: 'Certification of Completion — Autodesk', issuer: 'Autodesk', icon: 'award' },
      { title: 'Python Workshop Certification', issuer: 'Workshop', icon: 'award' },
      { title: 'C-Programming Completion', issuer: 'Certification', icon: 'award' },
    ],
  },
  {
    heading: 'Workshops & Learning',
    items: [
      { title: 'Building with AI Agents', issuer: 'Techleads', icon: 'workshop' },
      { title: 'Generative AI Mastermind', issuer: 'Workshop', icon: 'workshop' },
      { title: 'Academic Process Mining Fundamentals', issuer: 'Celonis', icon: 'workshop' },
      { title: 'SnapAR Hands-on AR Lens Creation Workshop', issuer: 'Workshop', icon: 'workshop' },
      { title: 'Essential Automation Certificate', issuer: 'Workshop', icon: 'workshop' },
      { title: 'Explore AI Basics', issuer: 'Microsoft', icon: 'workshop' },
    ],
  },
]

// Journey timeline — only verified milestones with real (or reasonably inferred) dates
export const journey = [
  {
    period: '2022',
    title: 'Finished Class X',
    description: 'Govt. Girls Sr. Sec. School, Gangwa, Hisar — 88.6%.',
  },
  {
    period: '2024',
    title: 'Finished Class XII',
    description: 'Saheed Surinder Kumar Govt. Sr. Sec. School, Kurukshetra — 78.6%.',
  },
  {
    period: '2025',
    title: 'Started B.Tech in Computer Science & Engineering',
    description: 'Global Institute of Technology & Management.',
  },
  {
    period: '2025 — 2026',
    title: 'Built first projects',
    description:
      'Number Guess Game, AI Language Translation Tool, and Real-Time Weather Intelligence — moving from fundamentals into applied AI.',
  },
  {
    period: '2026',
    title: 'Promptathon — 2nd Rank',
    description: 'Competed and placed 2nd, and built the event website.',
  },
  {
    period: '2026',
    title: 'Explored multi-agent AI systems',
    description: 'Built Kaggle Agent Sentinel as part of an Agents capstone submission.',
  },
  {
    period: 'Ongoing',
    title: 'Currently learning',
    description: 'Deepening AI-agent development skills and exploring cybersecurity fundamentals.',
  },
]
