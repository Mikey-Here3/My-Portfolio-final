"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SkillCategory = "Development" | "Database" | "UI/UX" | "Git & Deploy";
type Skill = { name: string; type: string; category: SkillCategory; logo: string };

const skills: Skill[] = [
  { name: "JavaScript", type: "LANGUAGE", category: "Development", logo: "javascript" },
  { name: "TypeScript", type: "LANGUAGE", category: "Development", logo: "typescript" },
  { name: "React", type: "FRONTEND", category: "Development", logo: "react" },
  { name: "Next.js", type: "FRAMEWORK", category: "Development", logo: "nextjs" },
  { name: "Tailwind CSS", type: "STYLING", category: "Development", logo: "tailwindcss" },
  { name: "Node.js", type: "BACKEND", category: "Development", logo: "nodejs" },
  { name: "Three.js", type: "3D / WEBGL", category: "Development", logo: "threejs" },
  { name: "GSAP", type: "ANIMATION", category: "Development", logo: "greensock" },
  { name: "PostgreSQL", type: "DATABASE", category: "Database", logo: "postgresql" },
  { name: "Prisma", type: "ORM", category: "Database", logo: "prisma" },
  { name: "Lenis", type: "SMOOTH SCROLL", category: "Development", logo: "lenis" },
  { name: "GitHub", type: "VERSION CONTROL", category: "Git & Deploy", logo: "github" },
  { name: "Figma", type: "DESIGN", category: "UI/UX", logo: "figma" },
  { name: "Vercel", type: "DEPLOYMENT", category: "Git & Deploy", logo: "vercel" },
  { name: "REST APIs", type: "INTEGRATION", category: "Development", logo: "postman" },
];
const categories: Array<"All" | SkillCategory> = ["All", "Development", "Database", "UI/UX", "Git & Deploy"];
const logoUrl = (logo: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}-original.svg`;

const marqueeSkills = [...skills, ...skills];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const filteredSkills = useMemo(
    () => activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        "[data-skills-intro]",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-skill-card]",
        { y: 34, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.75,
          stagger: { each: 0.055, from: "start" },
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-skills-note]",
        { x: 24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-skills-note]",
            start: "top 90%",
            once: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative isolate w-full overflow-hidden border-t border-[var(--border)] bg-[var(--background)] text-[var(--navy)]"
    >
      {/* Quiet editorial details — using the portfolio's existing palette */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-20 -z-10 size-[26rem] rounded-full border border-[var(--electric-blue)]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-3rem] top-36 -z-10 size-[18rem] rounded-full border border-[var(--electric-blue)]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-7rem] top-[48%] -z-10 size-[15rem] rounded-full border border-[var(--border)]/70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 opacity-30 [background-image:linear-gradient(to_bottom,var(--border),transparent)]" />
      <div className="mx-auto max-w-[1600px] px-[var(--page-gutter)] py-20 md:py-28 lg:py-36">
        <div
          ref={headingRef}
          data-skills-intro
          className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="text-[10px] font-medium tracking-[0.2em] text-[var(--electric-blue)]">
                03 / TOOLKIT
              </span>
              <span className="h-px w-14 bg-[var(--border)]" />
              <span className="rotate-[-5deg] font-serif text-sm italic text-[var(--muted)]">
                the craft behind it
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(2.8rem,7.5vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[var(--navy)]">
              Tools behind
              <br />
              <span className="font-serif font-normal italic text-[var(--electric-blue)]">
                the work.
              </span>
              <span className="ml-2 inline-block align-top font-serif text-[clamp(1.5rem,3vw,3rem)] font-normal italic text-[var(--muted)]">
                ↗
              </span>
            </h2>
          </div>

          <div className="max-w-[430px] lg:justify-self-end">
            <p className="text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
              A considered toolkit for turning curious ideas into thoughtful,
              functional digital experiences—from the first sketch to the final
              interaction.
            </p>
            <p className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.16em] text-[var(--muted)]">
              <Sparkles size={14} className="text-[var(--electric-blue)]" />
              15 TOOLS · ONE CONTINUOUS CURIOSITY
            </p>
          </div>
        </div>

        {/* Animated skill ticker */}
        <div className="relative mt-14 overflow-hidden border-y border-[var(--border)] py-4 md:mt-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--background)] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--background)] to-transparent md:w-24" />
          <div className="skills-marquee flex w-max items-center gap-7 whitespace-nowrap">
            {marqueeSkills.map((skill, index) => (
              <span
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 text-[10px] tracking-[0.16em] text-[var(--muted)] md:text-xs"
              >
                <span className="size-1.5 rounded-full bg-[var(--electric-blue)]" />
                {skill.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Technology orbit — palette stays aligned with the portfolio */}
        <div className="relative mx-auto my-14 hidden aspect-square w-full max-w-[720px] items-center justify-center md:flex">
          <div aria-hidden="true" className="absolute inset-[7%] rounded-full border border-dashed border-[var(--electric-blue)]/25" />
          <div aria-hidden="true" className="absolute inset-[19%] rounded-full border border-[var(--border)]/80" />
          <div aria-hidden="true" className="absolute inset-[31%] rounded-full border border-dashed border-[var(--electric-blue)]/20" />
          <div aria-hidden="true" className="absolute inset-[43%] rounded-full border border-[var(--border)]/70" />
          <div className="relative z-10 flex size-[190px] flex-col items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/90 text-center shadow-[0_15px_55px_rgba(23,34,54,0.10)] backdrop-blur-xl">
            <span className="text-[10px] tracking-[0.22em] text-[var(--electric-blue)]">MY TOOLKIT</span>
            <span className="mt-2 font-serif text-3xl italic text-[var(--navy)]">Build</span>
            <span className="text-sm text-[var(--muted)]">with purpose.</span>
          </div>
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 44;
            const y = 50 + Math.sin(angle) * 44;
            return (
              <div key={skill.name} className="absolute z-20 flex size-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[0_8px_24px_rgba(23,34,54,0.08)] transition duration-300 hover:scale-110 hover:border-[var(--electric-blue)]/45"
                style={{ left: `${x}%`, top: `${y}%` }}>
                <img src={logoUrl(skill.logo)} alt={`${skill.name} logo`} loading="lazy" className="size-8 object-contain" />
                <span className="mt-1 max-w-full px-1 text-center text-[9px] font-medium text-[var(--navy)]">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Filter skills by category">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2.5 text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "border-[var(--electric-blue)] bg-[var(--electric-blue)] text-white shadow-[0_6px_20px_rgba(23,34,54,0.12)]"
                  : "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:-translate-y-0.5 hover:border-[var(--electric-blue)]/50 hover:text-[var(--navy)]"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Skill tiles */}
        <div
          ref={cardsRef}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5"
        >
          {filteredSkills.map((skill, index) => {


            return (
              <article
                key={skill.name}
                data-skill-card
                className="group relative min-h-[156px] overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--background)] p-4 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:border-[var(--electric-blue)]/45 hover:shadow-[0_18px_45px_rgba(23,34,54,0.08)] sm:min-h-[174px] sm:p-5"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="absolute right-4 top-4 text-[9px] tracking-[0.12em] text-[var(--muted)]/65">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex size-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--navy)] transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-[var(--electric-blue)]/35">
                  <img src={logoUrl(skill.logo)} alt={`${skill.name} logo`} loading="lazy" className="size-6 object-contain" />
                </div>

                <div className="mt-6 flex items-end justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-medium tracking-[-0.02em] text-[var(--navy)] sm:text-base">
                      {skill.name}
                    </h3>
                    <p className="mt-1.5 text-[8px] tracking-[0.15em] text-[var(--muted)] sm:text-[9px]">
                      {skill.type}
                    </p>
                  </div>
                  <ArrowDownRight
                    size={15}
                    className="shrink-0 translate-y-1 text-[var(--electric-blue)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-8 size-24 rounded-full border border-[var(--electric-blue)]/0 transition-all duration-700 group-hover:-bottom-6 group-hover:-right-4 group-hover:border-[var(--electric-blue)]/15"
                />
              </article>
            );
          })}
        </div>

        <div
          data-skills-note
          className="mt-12 flex flex-col gap-5 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-16"
        >
          <p className="max-w-2xl font-serif text-lg italic leading-7 text-[var(--muted)] md:text-xl">
            “The best tool is the one that helps an idea become real.”
          </p>
          <span className="flex items-center gap-2 text-[9px] tracking-[0.16em] text-[var(--electric-blue)]">
            ALWAYS LEARNING <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        .skills-marquee {
          animation: skills-marquee 42s linear infinite;
          will-change: transform;
        }

        .skills-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes skills-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}