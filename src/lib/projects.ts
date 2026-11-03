
import {
  BookOpen,
  Smartphone,
  Globe2,
  CarFront,
  BriefcaseBusiness,
  Palette,
  ShieldCheck,
  Video,
  Gamepad2,
} from "lucide-react";

export const projects = [
  {
    number: "01",
    slug: "studyhouse",
    name: "StudyHouse.online",
    category: "EdTech / Full-Stack Web",
    group: "Development",
    description:
      "A centralized educational platform designed to help NUML students access past papers, notes, assignments and exam preparation resources.",
    purpose:
      "Organizing academic resources into a structured and searchable learning experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
    ],
    icon: BookOpen,
    theme: "study",
    coverTitle: "LEARN.",
    coverSubtitle: "Your academic resource space.",
    image: "/images/projects/studyhouse/study-house.png",
liveUrl: "https://studyhouse.online",    githubUrl: "https://github.com/Mikey-Here3/StudyHouse-01",
    challenge:
      "The platform is intended to make scattered academic resources easier to discover, organize and access. Add the specific technical challenges encountered during development here.",
    solution:
      "A structured academic resource experience with organized categories, search and moderation workflows. Add the exact solutions and technical decisions made during implementation here.",
    implementation: [
      "Paper upload and approval workflows",
      "Search filters and resource discovery",
      "Bookmarks, ratings and download tracking",
      "Admin dashboard and content moderation",
    ],
    journey:
      "This project provided experience with database architecture, role-based access, content moderation, file management and SEO optimization.",
    learning:
      "Database design, access control, resource organization and building maintainable full-stack applications.",
  },
  {
    number: "02",
    slug: "kaamker",
    name: "KaamKer",
    category: "Mobile Application / FYP",
    group: "Development",
    description:
      "A digital service marketplace connecting customers with service providers for discovering and booking everyday local services.",
    purpose:
      "Exploring customer and worker experiences through mobile interfaces and service workflows.",
    technologies: ["Flutter", "Dart"],
    icon: Smartphone,
    theme: "kaam",
    coverTitle: "KaamKer",
    coverSubtitle: "Your everyday help.",
    image: "/images/projects/kaamker/kaamker-showcase.png",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Designing clear customer and worker journeys for a service marketplace. Add the specific interface, navigation or workflow problems encountered during development here.",
    solution:
      "A mobile-first interface with separate customer and worker experiences. Add the exact design and implementation decisions made to address the challenges here.",
    implementation: [
      "Customer and worker interfaces",
      "Booking and job management flows",
      "Chat and notification interfaces",
      "Ratings and service interaction screens",
    ],
    journey:
      "The project explored mobile UI architecture, reusable widgets, navigation flows and user-centered interface design.",
    learning:
      "Flutter development, reusable components, navigation architecture and mobile experience design.",
  },
  {
    number: "03",
    slug: "wessmaa",
    name: "Wessmaa",
    category: "Corporate Website / Web Development",
    group: "Development",
    description:
      "A modern digital solutions website designed to present business services through an engaging and responsive online experience.",
    purpose:
      "Combining interactive web design, visual storytelling and scroll-based motion.",
    technologies: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    icon: Globe2,
    theme: "wessmaa",
    coverTitle: "WESSMAA",
    coverSubtitle: "Digital experiences with purpose.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Presenting multiple business services through a coherent and engaging digital experience. Add the specific design and development challenges here.",
    solution:
      "A responsive website structure with animated sections and interactive transitions. Add the exact solutions implemented during development here.",
    implementation: [
      "Responsive website layouts",
      "Animated content sections",
      "Scroll-based transitions",
      "Interactive visual elements",
    ],
    journey:
      "The project explores frontend architecture, visual storytelling and motion-driven web experiences.",
    learning:
      "GSAP animation, responsive development and interactive web design.",
  },
  {
    number: "04",
    slug: "mir-balaj",
    name: "Mir Balaj",
    category: "Transportation / Business Platform",
    group: "Development",
    description:
      "A rent-a-car and pick-and-drop business platform connecting customers with transportation providers.",
    purpose:
      "Planning booking workflows, customer and driver roles, commissions and provider operations.",
    technologies: ["Technology stack to be finalized"],
    icon: CarFront,
    theme: "mir",
    coverTitle: "MIR BALAJ",
    coverSubtitle: "Move with confidence.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Structuring transportation bookings and provider operations across different service types. Add the specific product and technical challenges here.",
    solution:
      "A planned platform model with customer and driver roles, booking management and operational rules. Add the exact implementation details as the product develops.",
    implementation: [
      "Customer and driver role planning",
      "Booking management workflows",
      "Commission and advance payment rules",
      "Provider settlement planning",
    ],
    journey:
      "The project focuses on marketplace business logic, booking workflows and operational planning.",
    learning:
      "Marketplace architecture, business rules, booking processes and service operations.",
  },
  {
    number: "05",
    slug: "ikko-hr-desk",
    name: "IKKO HR Desk",
    category: "HRTech / Mobile Application",
    group: "Development",
    description:
      "An employee management application focused on attendance tracking and essential human resource operations.",
    purpose:
      "Exploring attendance verification, authentication and employee self-service workflows.",
    technologies: ["React Native", "Expo", "Supabase (planned)"],
    icon: BriefcaseBusiness,
    theme: "ikko",
    coverTitle: "IKKO",
    coverSubtitle: "A smarter employee workspace.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Designing an employee experience around attendance, identity verification and essential HR information. Add the specific technical challenges encountered here.",
    solution:
      "A mobile application concept with attendance, OTP authentication and employee information workflows. Add the exact implemented solutions here.",
    implementation: [
      "Face-recognition attendance interface",
      "OTP authentication flow",
      "Payslip history and deductions",
      "Offline support planning",
    ],
    journey:
      "The project explores mobile application development, biometric workflows, authentication and secure employee data handling.",
    learning:
      "React Native, Expo, authentication flows and mobile product architecture.",
  },
  {
    number: "06",
    slug: "tavrixa",
    name: "TAVRIXA",
    category: "Digital Agency / Business Branding",
    group: "Business",
    description:
      "A 360-degree digital business solutions brand offering technology, creative and digital growth services.",
    purpose:
      "Building a coherent brand identity, service architecture and digital business positioning.",
    technologies: [
      "Web Technologies",
      "UI/UX Design",
      "Digital Marketing Tools",
    ],
    icon: Palette,
    theme: "tavrixa",
    coverTitle: "TAVRIXA",
    coverSubtitle: "Ideas into digital impact.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Positioning a multi-service digital solutions brand with a clear identity and understandable service structure.",
    solution:
      "A unified brand direction and service architecture. Add the final identity and website implementation decisions here.",
    implementation: [
      "Brand identity planning",
      "Service architecture",
      "Digital business positioning",
      "Website planning",
    ],
    journey:
      "The project explores business strategy, brand positioning and digital product planning.",
    learning:
      "Brand development, business strategy and service presentation.",
  },
  {
    number: "07",
    slug: "smart-contract-security",
    name: "Smart Contract Security Research",
    category: "Cybersecurity / Academic Research",
    group: "Research & Creative",
    description:
      "An academic research project exploring security vulnerabilities in smart contracts through vulnerability datasets and research literature.",
    purpose:
      "Investigating dataset preparation, vulnerability analysis and data-driven detection approaches.",
    technologies: [
      "Dataset Analysis",
      "Python (planned)",
      "Machine Learning (research direction)",
    ],
    icon: ShieldCheck,
    theme: "security",
    coverTitle: "SECURITY",
    coverSubtitle: "Exploring smart contract vulnerabilities.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Understanding smart contract vulnerability patterns and identifying relevant research datasets. Add the specific research questions and obstacles here.",
    solution:
      "A research workflow based on dataset exploration, literature review and descriptive analysis. Add the verified research methodology and findings here.",
    implementation: [
      "Vulnerability dataset exploration",
      "Research paper analysis",
      "Metadata examination",
      "Descriptive statistics planning",
    ],
    journey:
      "The project explores academic research methodology, dataset preparation and security analysis.",
    learning:
      "Literature review, dataset analysis and cybersecurity research practices.",
  },
  {
    number: "08",
    slug: "ai-content-creation",
    name: "AI-Powered Content Creation",
    category: "Generative Media / AI",
    group: "Research & Creative",
    description:
      "A creative media initiative producing short-form videos, visual stories and concepts using generative AI tools.",
    purpose:
      "Exploring prompt engineering, AI-assisted visual production and creative storytelling.",
    technologies: [
      "Gemini Veo",
      "Nano Banana Pro",
      "AI Image Generation",
      "AI Video Generation",
    ],
    icon: Video,
    theme: "ai",
    coverTitle: "IMAGINE.",
    coverSubtitle: "Creative ideas, generated with AI.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Translating creative concepts into consistent visual stories and short-form content. Add specific production challenges here.",
    solution:
      "Using prompt engineering and generative media workflows to explore visual concepts. Add the exact workflow and tools used for each creation here.",
    implementation: [
      "Short-form video concepts",
      "AI-generated visual concepts",
      "Storytelling and prompt workflows",
      "Vertical video formats",
    ],
    journey:
      "The project explores AI-assisted visual production, creative experimentation and content optimization.",
    learning:
      "Prompt engineering, visual storytelling and generative media workflows.",
  },
  {
    number: "09",
    slug: "free-fire-creator",
    name: "Free Fire Creator Initiative",
    category: "Gaming / Social Media",
    group: "Research & Creative",
    description:
      "A gaming content initiative focused on short-form videos, community engagement and building a presence across social platforms.",
    purpose:
      "Developing content strategy, audience engagement and digital creator branding.",
    technologies: [
      "YouTube",
      "Facebook",
      "TikTok",
      "Video Editing Tools",
    ],
    icon: Gamepad2,
    theme: "gaming",
    coverTitle: "PLAY.",
    coverSubtitle: "Create. Share. Connect.",
    image: "",
    liveUrl: "",
    githubUrl: "",
    challenge:
      "Building a recognizable gaming content identity across multiple platforms. Add specific content and audience-growth challenges here.",
    solution:
      "A content approach based on gaming videos, short-form formats and community engagement. Add the exact strategies and results here.",
    implementation: [
      "Gaming video production",
      "Short-form content",
      "Social media publishing",
      "Audience engagement",
    ],
    journey:
      "The project explores content strategy, social media management and digital creator branding.",
    learning:
      "Content planning, audience development and digital branding.",
  },
];

export type PortfolioProject = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
