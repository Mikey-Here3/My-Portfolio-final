import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";

const footerProjects = [
  {
    number: "01",
    name: "Web Experiences",
    category: "Frontend",
    image: "/images/project-01.jpg",
    alt: "Web development project preview",
  },
  {
    number: "02",
    name: "Digital Products",
    category: "Full Stack",
    image: "/images/project-02.jpg",
    alt: "Digital product project preview",
  },
  {
    number: "03",
    name: "Creative Interfaces",
    category: "UI / UX",
    image: "/images/project-03.jpg",
    alt: "Creative interface project preview",
  },
  {
    number: "04",
    name: "Interactive Builds",
    category: "Experiments",
    image: "/images/project-04.jpg",
    alt: "Interactive project preview",
  },
  {
    number: "05",
    name: "Modern Applications",
    category: "Development",
    image: "/images/project-05.jpg",
    alt: "Application project preview",
  },
  {
    number: "06",
    name: "Ideas in Progress",
    category: "Exploration",
    image: "/images/project-06.jpg",
    alt: "Creative development experiment preview",
  },
];

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    symbol: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_USERNAME",
    symbol: "in",
  },
];

export default function FooterSection() {
  return (
    <footer className="mx-auto w-full max-w-[1600px] overflow-hidden border-t border-[var(--border)] px-[var(--page-gutter)] pt-12 md:pt-16">
      {/* Work preview */}
      <div>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--electric-blue)]" />
              <p className="text-xs font-medium tracking-[0.16em] text-[var(--muted)]">
                A GLIMPSE OF MY WORK
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[var(--navy)] md:text-3xl">
              Built with curiosity.
            </h2>
          </div>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 pb-1 text-xs font-medium text-[var(--navy)] transition-colors hover:text-[var(--electric-blue)]"
          >
            Explore projects
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {footerProjects.map((project) => (
            <a
              key={project.number}
              href="#projects"
              className="group relative aspect-[1.15/1] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--navy)]/[0.03] sm:aspect-[1.05/1]"
            >
              {/* Project thumbnail */}
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute left-3 top-3 z-10 rounded-full border border-white/25 bg-[var(--navy)]/30 px-2 py-1 text-[10px] font-medium tracking-wider text-white backdrop-blur-sm">
                {project.number}
              </span>

              {/* Project info */}
              <div className="absolute inset-x-3 bottom-3 z-10">
                <p className="text-xs font-semibold leading-4 text-white sm:text-sm">
                  {project.name}
                </p>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-[10px] text-white/70">
                    {project.category}
                  </p>

                  <span className="grid size-6 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[var(--navy)]">
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-center">
          <Sparkles
            size={13}
            className="text-[var(--electric-blue)]"
          />

          <p className="text-xs leading-6 text-[var(--muted)]">
            A collection of ideas, experiments, and digital experiences.
          </p>
        </div>
      </div>

      {/* Main footer panel */}
      <div className="relative mt-16 overflow-hidden rounded-t-[2rem] bg-[var(--navy)] px-6 pb-7 pt-8 text-white md:mt-20 md:px-10 md:pt-10 lg:px-14">
        {/* Decorative background rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-24 size-[360px] rounded-full border border-white/[0.05] md:size-[500px]"
        >
          <div className="absolute inset-10 rounded-full border border-white/[0.05]" />
          <div className="absolute inset-20 rounded-full border border-white/[0.05]" />
          <div className="absolute inset-32 rounded-full border border-white/[0.05]" />
        </div>

        {/* Footer signature — fully inside panel */}
        <div className="relative z-10 mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-sm font-semibold tracking-tight text-white">
              AM
            </span>

            <div>
              <p className="text-sm font-semibold">Ashan Mir</p>
              <p className="mt-0.5 text-[10px] tracking-[0.12em] text-white/45">
                SOFTWARE ENGINEER
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 sm:flex">
            <span className="size-1.5 rounded-full bg-[var(--electric-blue)]" />
            <span className="text-[10px] tracking-wide text-white/60">
              Always building
            </span>
          </div>
        </div>

        {/* Footer columns */}
        <div className="relative z-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Identity and quote */}
          <div>
            <p className="max-w-[300px] text-xl font-medium leading-snug tracking-[-0.04em] text-white md:text-2xl">
              “Great software begins with curiosity.”
            </p>

            <p className="mt-4 max-w-[300px] text-sm leading-7 text-white/55">
              I build digital experiences through thoughtful engineering,
              creative problem-solving, and a commitment to continuous growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-white/70 transition-all duration-300 hover:border-[var(--electric-blue)] hover:text-white"
                >
                  <span className="text-[10px] font-semibold text-[var(--electric-blue)]">
                    {social.symbol}
                  </span>

                  {social.label}

                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-xs font-medium tracking-[0.15em] text-white/40">
              EXPLORE
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>

            <div className="mt-8 flex items-center gap-2 text-[10px] tracking-[0.12em] text-white/35">
              <Code2 size={13} />
              <span>CODE · CREATE · LEARN</span>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-xs font-medium tracking-[0.15em] text-white/40">
              HAVE SOMETHING IN MIND?
            </p>

            <h3 className="mt-5 max-w-[280px] text-2xl font-semibold leading-tight tracking-[-0.05em]">
              Let&apos;s make your next idea real.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/55">
              Have a project, an idea, or an opportunity? Let&apos;s talk.
            </p>

            <a
              href="mailto:ashanmirofficial@gmail.com"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[var(--electric-blue)]"
            >
              <Mail size={16} />
              Send me an email
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#top"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/70 transition-all duration-300 hover:border-[var(--electric-blue)] hover:text-white"
            >
              Back to top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-5 text-white/40">
            © {new Date().getFullYear()} Ashan Mir. All rights reserved.
          </p>

          <p className="text-[10px] leading-5 text-white/40">
            Designed with curiosity. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}