import { business } from "./business";

export interface NavLink {
  name: string;
  href: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface HeroContent {
  status: string;
  greeting: string;
  display: string;
  shimmerWord: string;
  body: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  marquee: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  badge: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  items: ServiceItem[];
}

export interface CaseStudy {
  number: string;
  client: string;
  project: string;
  year: string;
  blurb: string;
  metric: { label: string; value: string };
  image: ImageRef;
}

export interface WorkContent {
  eyebrow: string;
  heading: string;
  items: CaseStudy[];
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
  artifact: string;
}

export interface ProcessContent {
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
}

export interface PeopleMember {
  name: string;
  role: string;
  pronoun: string;
  image: ImageRef;
  quote: string;
}

export interface PeopleContent {
  eyebrow: string;
  heading: string;
  body: string;
  members: PeopleMember[];
}

export interface CtaContent {
  eyebrow: string;
  heading: string;
  body: string;
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
}

export interface SeoMetadata {
  title: string;
  description: string;
  ogImage: string;
}

export interface SiteContent {
  nav: { links: NavLink[]; cta: NavLink };
  hero: HeroContent;
  services: ServicesContent;
  work: WorkContent;
  process: ProcessContent;
  people: PeopleContent;
  cta: CtaContent;
  footer: { copyright: string; links: NavLink[] };
  metadata: SeoMetadata;
}

export const content: SiteContent = {
  nav: {
    links: [
      { name: "Capabilities", href: "#capabilities" },
      { name: "Work", href: "#work" },
      { name: "Process", href: "#process" },
      { name: "People", href: "#people" },
    ],
    cta: { name: "Start a project", href: "#contact" },
  },

  hero: {
    status: "● 02 SLOTS — SUMMER ’26",
    greeting: "Hi. We are CHROME BLOOM —",
    display: "Software with a",
    shimmerWord: "soft chrome finish.",
    body: "We design and build AI-native products for teams who would rather ship one polished thing than ten unfinished ones. Working with founders, research groups, and the occasional museum.",
    ctaPrimary: { text: "Start a project →", href: "#contact" },
    ctaSecondary: { text: "↘ See recent work", href: "#work" },
    marquee: [
      "AI INTERFACES",
      "DESIGN SYSTEMS",
      "RAPID PROTOTYPING",
      "BRAND IDENTITY",
      "MOTION DIRECTION",
      "RESEARCH TOOLING",
      "INTERNAL TOOLS",
      "OBSERVABILITY DASHBOARDS",
    ],
  },

  services: {
    eyebrow: "01 / WHAT WE DO",
    heading: "A small surface of capabilities, sanded smooth.",
    items: [
      {
        number: "01",
        title: "Product design for AI surfaces",
        description: "We design the parts of your product the model touches. Streaming chat, tool palettes, completions, evals — the moments where probability becomes UI.",
        deliverables: ["Information architecture", "Component library", "Prompt-UX patterns", "Accessibility audit"],
        badge: "MOST REQUESTED",
      },
      {
        number: "02",
        title: "Prototyping & hi-fi engineering",
        description: "Production-quality React, Next.js and Swift prototypes that look and feel like the real thing — because they are the real thing, just at week-two scale.",
        deliverables: ["Next.js + AI SDK", "Tauri / SwiftUI shells", "Realtime + streaming", "MCP integrations"],
        badge: "SHIP IN 14 DAYS",
      },
      {
        number: "03",
        title: "Brand & identity for AI companies",
        description: "Wordmarks, glyphs, OG cards, micro-sites, and the seventeen tiny details investors notice. Restrained but never beige.",
        deliverables: ["Wordmark + glyph set", "Type system", "Web identity", "Pitch + memo design"],
        badge: "OFTEN BUNDLED",
      },
    ],
  },

  work: {
    eyebrow: "02 / RECENT WORK",
    heading: "A few things we polished.",
    items: [
      {
        number: "012",
        client: "Pearl Labs",
        project: "Research dashboard for a clinical-trial LLM",
        year: "2026",
        blurb: "We rebuilt Pearl's internal review tool from scratch. Two designers, one engineer, eleven shipped weeks.",
        metric: { label: "Review time", value: "−68%" },
        image: { src: "/images/work-01.jpg", alt: "A dashboard interface rendered on a softly-lit screen." },
      },
      {
        number: "011",
        client: "Folio AI",
        project: "Consumer launch — chat, memory, and reading rooms",
        year: "2025",
        blurb: "End-to-end product surface and identity system for an AI reader. Shipped on the App Store in 19 weeks.",
        metric: { label: "Beta retention D30", value: "61%" },
        image: { src: "/images/work-02.jpg", alt: "Soft pastel UI mockup floating in a chrome environment." },
      },
      {
        number: "010",
        client: "Atlas Holographic",
        project: "Brand system for a generative-3D startup",
        year: "2025",
        blurb: "Wordmark, glyph set, type pairing, and a hundred-page brand book. They use it daily.",
        metric: { label: "Seed → Series A in", value: "9 months" },
        image: { src: "/images/work-03.jpg", alt: "Iridescent gradient sphere on a pale lavender background." },
      },
      {
        number: "009",
        client: "Whitman Museum",
        project: "Interactive AI tour guide for the new wing",
        year: "2024",
        blurb: "A multilingual museum guide that runs on iPad in the new wing. No internet required.",
        metric: { label: "Visitor sessions", value: "+1.7M" },
        image: { src: "/images/work-04.jpg", alt: "Museum visitor holding an iPad with a soft pastel interface." },
      },
    ],
  },

  process: {
    eyebrow: "03 / HOW WE WORK",
    heading: "Six conversations and three Figma files.",
    steps: [
      {
        number: "01",
        title: "A long call.",
        body: "Ninety minutes, one of our partners on the line, no slide deck. We learn what you actually want to ship.",
        artifact: "→ Memo, 1–2 pages",
      },
      {
        number: "02",
        title: "A scope letter.",
        body: "Fixed price, fixed timeline, two named designers. We tell you everything that is and isn't in the box.",
        artifact: "→ Letter + fee",
      },
      {
        number: "03",
        title: "Three Figma files.",
        body: "Direction, refinement, and final. We share progress weekly. You can change your mind twice for free.",
        artifact: "→ Figma + Loom",
      },
      {
        number: "04",
        title: "A working prototype.",
        body: "We hand off a real Next.js or Swift prototype your team can extend — or we extend it for you.",
        artifact: "→ GitHub repo",
      },
    ],
  },

  people: {
    eyebrow: "04 / WHO WE ARE",
    heading: "Two designers, one engineer, and a research dog.",
    body: "We've been doing this since 2021. We are deliberately small. We work American hours from a sunny studio off Linden Street.",
    members: [
      {
        name: "Mira Ito",
        role: "Founder, Design",
        pronoun: "she/her",
        image: { src: "/images/person-01.jpg", alt: "Portrait of Mira, a designer with short dark hair." },
        quote: "Software gets one chance to feel like an object.",
      },
      {
        name: "Aiden Park",
        role: "Engineering, Director",
        pronoun: "he/him",
        image: { src: "/images/person-02.jpg", alt: "Portrait of Aiden, an engineer in soft lavender light." },
        quote: "Animation budget, like calories, should be spent on what nourishes.",
      },
      {
        name: "Ren Akimoto",
        role: "Design, Senior",
        pronoun: "they/them",
        image: { src: "/images/person-03.jpg", alt: "Portrait of Ren, a designer wearing chrome earrings." },
        quote: "If a button feels good, half the brand is done.",
      },
    ],
  },

  cta: {
    eyebrow: "05 / NEXT",
    heading: "Want to ship one polished thing this year?",
    body: "Two project slots open in summer 2026. Send a short note about your team, your model, and what you're trying to make. We'll reply within two working days.",
    primary: { text: "Write to the studio →", href: `mailto:${business.email}` },
    secondary: { text: "Read our writing", href: "#journal" },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} ${business.name} — A studio of three, polished by hand.`,
    links: [
      { name: "Colophon", href: "#colophon" },
      { name: "Hiring", href: "#hiring" },
      { name: "Press", href: "#press" },
    ],
  },

  metadata: {
    title: `${business.name} — ${business.tagline}`,
    description:
      "Chrome Bloom is a three-person design and engineering studio shipping AI-native software for founders, research groups, and the occasional museum.",
    ogImage: "/opengraph-image",
  },
};
