
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Sparkles, Plus, Minus, MoveUpRight, Asterisk } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/lib/projects";

type Category = "All" | "Development" | "Business" | "Research & Creative";

const categories: Category[] = [
  "All",
  "Development",
  "Business",
  "Research & Creative",
];

const MOBILE_INITIAL_COUNT = 2;

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [category, setCategory] = useState<Category>("All");
  const [activeShelfSlug, setActiveShelfSlug] = useState("");
  const [showAllMobileProjects, setShowAllMobileProjects] = useState(false);

  const filteredProjects = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.group === category),
    [category],
  );

  const featuredProject = filteredProjects[0];
  const archiveProjects = filteredProjects.slice(1);

  const mobileProjects = showAllMobileProjects
    ? archiveProjects
    : archiveProjects.slice(0, MOBILE_INITIAL_COUNT);

  const hasMoreMobileProjects =
    archiveProjects.length > MOBILE_INITIAL_COUNT;

  useEffect(() => {
    setActiveShelfSlug(archiveProjects[0]?.slug ?? "");
    setShowAllMobileProjects(false);
  }, [category, filteredProjects.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = sectionRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const animatedElements = root.querySelectorAll(
        "[data-project-intro], [data-featured-copy], [data-featured-visual], [data-project-shelf]",
      );

      gsap.fromTo(
        animatedElements,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, [category]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative isolate overflow-hidden border-t border-[#172236]/10 bg-[#f3f0e9] text-[#172236]"
    >
      {/* Subtle decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[18%] -z-10 size-[28rem] rounded-full border border-[#244bff]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-[23%] -z-10 size-[20rem] rounded-full border border-[#244bff]/10"
      />

      <div className="mx-auto max-w-[1600px] px-[var(--page-gutter)] py-20 md:py-28 lg:py-36">
        {/* INTRO */}
        <header data-project-intro className="mb-14 md:mb-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <p className="text-[10px] font-medium tracking-[0.2em] text-[#244bff]">
              02 / SELECTED WORK
            </p>

            <p className="hidden text-[9px] tracking-[0.16em] text-[#77736b] sm:block">
              IDEAS / ENGINEERING / EXECUTION
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h2 className="font-serif text-[clamp(3.5rem,9.5vw,8.8rem)] leading-[0.82] tracking-[-0.075em]">
              Ideas brought
              <br />
              <span className="italic text-[#244bff]">to life.</span>
            </h2>

            <div className="max-w-[470px] lg:justify-self-end">
              <div className="mb-5 flex items-center gap-3 text-[#244bff]">
                <span className="h-px w-10 bg-[#244bff]/45" />
                <span className="-rotate-2 font-serif text-sm italic tracking-wide md:text-base">
                  A little curiosity goes a long way.
                </span>
                <Asterisk size={15} className="shrink-0 animate-[spin_18s_linear_infinite]" />
              </div>
              <p className="text-sm leading-7 text-[#77736b] md:text-base">
                Selected digital products, business initiatives, research and
                creative work — each with its own purpose, process and story.
              </p>

              <p className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.16em] text-[#77736b]">
                <Sparkles size={14} className="text-[#244bff]" />
                {String(filteredProjects.length).padStart(2, "0")} PROJECTS IN
                THIS COLLECTION
              </p>
            </div>
          </div>
        </header>

        {/* CATEGORY FILTER */}
        <div className="mb-12 flex flex-col gap-4 border-y border-[#172236]/12 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[9px] tracking-[0.18em] text-[#999187]">
            FILTER THE ARCHIVE
          </p>

          <div className="flex flex-wrap gap-2" aria-label="Filter projects">
            {categories.map((item) => {
              const count =
                item === "All"
                  ? projects.length
                  : projects.filter((project) => project.group === item)
                      .length;

              const selected = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={selected}
                  className={`min-h-10 rounded-full border px-4 py-2 text-[10px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244bff] ${
                    selected
                      ? "border-[#172236] bg-[#172236] text-[#f3f0e9]"
                      : "border-[#172236]/15 text-[#625e57] hover:border-[#244bff] hover:text-[#244bff]"
                  }`}
                >
                  {item}
                  <span className="ml-2 opacity-60">
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* EDITORIAL QUOTE */}
        <div data-project-intro className="relative mb-12 flex items-center justify-center py-5 md:mb-16 md:py-8">
          <span aria-hidden="true" className="absolute left-0 top-1/2 h-px w-[18%] bg-[#172236]/10" />
          <span aria-hidden="true" className="absolute right-0 top-1/2 h-px w-[18%] bg-[#172236]/10" />
          <p className="max-w-[620px] px-8 text-center font-serif text-[clamp(1.25rem,2.5vw,2rem)] leading-tight tracking-[-0.035em] text-[#625e57]">
            “Good work doesn’t ask for attention. <span className="italic text-[#244bff]">It earns it.</span>”
            <span className="mt-3 block font-sans text-[9px] tracking-[0.2em] text-[#999187]">A NOTE TO SELF</span>
          </p>
        </div>

        {/* FEATURED PROJECT */}
        {featuredProject && (
          <section
            className="mb-16 md:mb-24"
            aria-label="Featured project"
          >
            <article className="grid items-center gap-8 md:gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Featured visual */}
              <Link
                href={`/projects/${featuredProject.slug}`}
                data-featured-visual
                aria-label={`Explore ${featuredProject.name} case study`}
                className="group relative block aspect-[1.08/1] overflow-hidden rounded-[1.35rem] bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244bff] sm:aspect-[1.45/1] lg:col-span-7 lg:aspect-[1.12/1]"
              >
                {featuredProject.image ? (
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.name} showcase`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.035]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[clamp(3.5rem,10vw,9rem)] tracking-[-0.09em] text-[#172236]/15">
                      {featuredProject.coverTitle}
                    </span>
                  </div>
                )}

                {/* Small editorial label — no extra blue CTA button */}
                <span className="absolute left-4 top-4 rounded-full border border-[#172236]/10 bg-[#f3f0e9]/90 px-3 py-1.5 text-[9px] tracking-[0.15em] backdrop-blur">
                  {featuredProject.number} / FEATURED
                </span>

                <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#244bff]/[0.035] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </Link>

              {/* Featured copy */}
              <div data-featured-copy className="lg:col-span-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.18em] text-[#244bff]">
                    PROJECT / {featuredProject.number}
                  </span>

                  <span className="h-px flex-1 bg-[#172236]/12" />

                  <span className="text-[9px] tracking-[0.12em] text-[#999187]">
                    {featuredProject.category}
                  </span>
                </div>

                <div className="relative">
                <span className="absolute -right-1 -top-5 hidden -rotate-12 font-serif text-sm italic text-[#244bff]/75 xl:block">
                  made with intent ↙
                </span>
                <h3 className="max-w-[600px] font-serif text-[clamp(3.2rem,6.5vw,6.2rem)] leading-[0.92] tracking-[-0.065em]">
                  {featuredProject.slug === "studyhouse"
                    ? "StudyHouse"
                    : featuredProject.name}
                  <span className="text-[#244bff]">.</span>
                </h3>
                </div>

                <p className="mt-6 max-w-[560px] text-base leading-8 text-[#77736b] md:text-lg md:leading-9">
                  {featuredProject.description}
                </p>

                {featuredProject.purpose && (
                  <p className="mt-5 max-w-[540px] border-l border-[#244bff]/40 pl-4 text-sm leading-7 text-[#625e57] md:text-base md:leading-8">
                    {featuredProject.purpose}
                  </p>
                )}

                {featuredProject.technologies?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                    {featuredProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] tracking-[0.08em] text-[#77736b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* The existing case-study action stays here */}
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="group mt-8 inline-flex items-center gap-4 border-b border-[#172236]/20 pb-3 text-[10px] tracking-[0.15em] transition-colors duration-300 hover:border-[#244bff] hover:text-[#244bff]"
                >
                  EXPLORE CASE STUDY
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#172236] text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#244bff]">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* MORE PROJECTS / SHELF */}
        {archiveProjects.length > 0 && (
          <section
            aria-label="More selected projects"
            className="relative"
          >
            <div className="mb-6 flex items-end justify-between gap-4 border-t border-[#172236]/12 pt-6">
              <div>
                <p className="text-[9px] tracking-[0.18em] text-[#244bff]">
                  THE PROJECT SHELF
                </p>

                <h3 className="mt-2 flex items-start gap-3 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.06em]">
                  More work. More stories.
                  <Asterisk size={22} className="mt-1 shrink-0 text-[#244bff] transition-transform duration-700 group-hover:rotate-45" />
                </h3>
              </div>

              <p className="hidden text-[9px] tracking-[0.14em] text-[#999187] sm:block">
                HOVER OR SELECT TO EXPAND
              </p>
            </div>

            {/* DESKTOP: full-width expandable shelf */}
            <div data-project-shelf className="hidden h-[390px] w-full items-stretch gap-2 md:flex">
              {archiveProjects.map((project, index) => {
                const expanded =
                  activeShelfSlug === project.slug ||
                  (!activeShelfSlug && index === 0);

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    onMouseEnter={() => setActiveShelfSlug(project.slug)}
                    onFocus={() => setActiveShelfSlug(project.slug)}
                    onClick={() => setActiveShelfSlug(project.slug)}
                    aria-label={`Open ${project.name} project`}
                    aria-current={expanded ? "true" : undefined}
                    className={`group relative h-full min-w-0 shrink-0 overflow-hidden rounded-2xl border border-[#172236]/10 bg-[#e6e2d9] shadow-[0_8px_30px_rgba(23,34,54,0.025)] transition-[flex-grow,flex-basis,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:shadow-[0_18px_45px_rgba(23,34,54,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244bff] ${
                      expanded ? "basis-0" : "basis-[66px]"
                    }`}
                    style={{
                      flexGrow: expanded ? 1 : 0,
                    }}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} project artwork`}
                        fill
                        sizes="(max-width: 768px) 80vw, 40vw"
                        className={`object-contain object-center transition-all duration-700 ${
                          expanded
                            ? "scale-100 opacity-100"
                            : "scale-[0.92] opacity-35"
                        }`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e8e3da] to-[#c9c1b4]">
                        <span className="font-serif text-6xl text-[#172236]/20">
                          {project.coverTitle}
                        </span>
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 transition-colors duration-500 ${
                        expanded
                          ? "bg-gradient-to-t from-[#172236]/90 via-[#172236]/15 to-transparent"
                          : "bg-[#172236]/30"
                      }`}
                    />

                    <span className="absolute left-3 top-4 z-10 text-[10px] tracking-[0.16em] text-white">
                      {project.number}
                    </span>

                    {/* Expanded information */}
                    <div
                      className={`absolute inset-x-5 bottom-5 z-10 transition-all duration-500 ${
                        expanded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}
                    >
                      <p className="mb-2 text-[9px] tracking-[0.16em] text-white/70">
                        {project.group.toUpperCase()}
                      </p>

                      <h4 className="font-serif text-3xl leading-none tracking-[-0.05em] text-white lg:text-4xl">
                        {project.name}
                      </h4>

                      <p className="mt-3 line-clamp-3 max-w-md text-xs leading-5 text-white/80">
                        {project.description}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-[9px] tracking-[0.14em] text-white">
                        VIEW PROJECT
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                    {/* Collapsed vertical title */}
                    <span
                      className={`absolute bottom-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.12em] text-white transition-opacity duration-300 [writing-mode:vertical-rl] ${
                        expanded ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {project.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* MOBILE: readable project cards + show more */}
            <div className="space-y-4 md:hidden">
              {mobileProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-[#172236]/10 bg-[#e9e5dc] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-[#244bff]/30 hover:shadow-[0_18px_40px_rgba(23,34,54,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244bff]"
                >
                  <div className="relative aspect-[1.25/1] w-full overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} project artwork`}
                        fill
                        sizes="90vw"
                        className="object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e8e3da] to-[#c9c1b4]">
                        <span className="font-serif text-6xl text-[#172236]/20">
                          {project.coverTitle}
                        </span>
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full border border-[#172236]/10 bg-[#f3f0e9]/90 px-3 py-1.5 text-[9px] tracking-[0.15em]">
                      {project.number} / {project.group.toUpperCase()}
                    </span>

                    <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full bg-[#172236] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#244bff]">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-serif text-2xl tracking-[-0.05em]">
                        {project.name}
                      </h4>

                      <span className="text-[9px] tracking-[0.12em] text-[#999187]">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(archiveProjects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#77736b]">
                      {project.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-[#172236]/10 pt-4">
                      <span className="text-[9px] tracking-[0.14em] text-[#77736b]">
                        READ PROJECT STORY
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-[#244bff] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              ))}

              {hasMoreMobileProjects && (
                <button
                  type="button"
                  onClick={() =>
                    setShowAllMobileProjects((current) => !current)
                  }
                  aria-expanded={showAllMobileProjects}
                  className="flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[#172236]/15 bg-white/40 px-5 text-[10px] tracking-[0.14em] transition-all duration-300 hover:border-[#244bff] hover:bg-[#244bff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244bff]"
                >
                  {showAllMobileProjects
                    ? "SHOW LESS"
                    : `SHOW ${archiveProjects.length - MOBILE_INITIAL_COUNT} MORE PROJECTS`}

                  {showAllMobileProjects ? (
                    <Minus size={15} />
                  ) : (
                    <Plus size={15} />
                  )}
                </button>
              )}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <div className="mb-8 flex items-center justify-center gap-3 text-[#999187]">
          <span className="h-px w-8 bg-[#172236]/15" />
          <span className="-rotate-1 font-serif text-xs italic">The details make the difference.</span>
          <MoveUpRight size={12} className="text-[#244bff]" />
          <span className="h-px w-8 bg-[#172236]/15" />
        </div>
        <footer className="mt-20 flex flex-col justify-between gap-4 border-t border-[#172236]/15 pt-6 sm:flex-row sm:items-center">
          <span className="text-[9px] tracking-[0.16em] text-[#77736b]">
            ASHAN MIR / SELECTED PROJECT ARCHIVE
          </span>

          <span className="text-[9px] tracking-[0.14em] text-[#244bff]">
            SCROLL TO EXPLORE · BUILT WITH CURIOSITY
          </span>
        </footer>
      </div>
    </section>
  );
}
