"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";
import gsap from "gsap";
import { PortfolioProject } from "@/lib/projects";

const themes: Record<string, string> = {
  study: "from-[#dce8f8] to-[#b9c9e6]",
  kaam: "from-[#e7ddff] to-[#c8b9f2]",
  wessmaa: "from-[#d8e9e2] to-[#a8c8ba]",
  mir: "from-[#e5e0d5] to-[#c8bba5]",
  ikko: "from-[#e7e0f5] to-[#c6b9e5]",
  tavrixa: "from-[#d8e7df] to-[#a8c7b8]",
  security: "from-[#dce4ec] to-[#aebdce]",
  ai: "from-[#e7def4] to-[#c5b5e6]",
  gaming: "from-[#d9e1f1] to-[#aab9dc]",
};

export function ProjectArtwork({ project, className = "" }: { project: PortfolioProject; className?: string }) {
  const Icon = project.icon;
  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-br ${themes[project.theme] ?? "from-[#e5e1d8] to-[#c9c1b4]"} ${className}`}>
      {project.image ? (
        <Image src={project.image} alt={`${project.name} project`} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-contain object-center" />
      ) : (
        <>
          <div className="absolute -right-16 -top-20 size-64 rounded-full bg-white/25 blur-[75px]" />
          <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-white/20 blur-[75px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="select-none font-serif text-[clamp(3rem,8vw,7rem)] tracking-[-.09em] text-white/30">{project.coverTitle}</span>
          </div>
          <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-4 text-[#172236] sm:inset-x-7 sm:bottom-7">
            <div>
              <p className="mb-2 text-[8px] tracking-[.2em] text-[#172236]/60">ASHAN MIR / {project.number}</p>
              <h3 className="font-serif text-3xl tracking-[-.06em] sm:text-5xl">{project.coverTitle}</h3>
              <p className="mt-2 text-[10px] text-[#172236]/70">{project.coverSubtitle}</p>
            </div>
            <Icon className="size-6 shrink-0 text-[#172236]/65 sm:size-8" />
          </div>
        </>
      )}
    </div>
  );
}

export function PerspectiveView({ items }: { items: PortfolioProject[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-perspective-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out",
        scrollTrigger: undefined,
      });
    }, track);
    return () => ctx.revert();
  }, [items]);

  return (
    <div className="space-y-5">
      <div ref={trackRef} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} data-perspective-card
            className={`group relative overflow-hidden rounded-2xl border border-[#172236]/10 bg-[#f8f6f0] ${index % 3 === 1 ? "sm:translate-y-7" : ""}`}>
            <ProjectArtwork project={project} className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="flex items-center justify-between border-t border-[#172236]/10 p-5">
              <div>
                <p className="text-[9px] tracking-[.15em] text-[#244bff]">PROJECT / {project.number}</p>
                <h3 className="mt-2 font-serif text-2xl tracking-[-.04em]">{project.name}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#77736b]">{project.description}</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#172236] text-white transition-all group-hover:rotate-45 group-hover:bg-[#244bff]"><ArrowUpRight size={16} /></span>
            </div>
          </Link>
        ))}
      </div>
      <p className="flex items-center justify-center gap-2 text-[9px] tracking-[.15em] text-[#999187]"><MoveHorizontal size={13} className="text-[#244bff]" />EXPLORE THE PROJECT COLLECTION</p>
    </div>
  );
}

export function ChaptersView({ items }: { items: PortfolioProject[] }) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  useEffect(() => setActiveSlug(items[0]?.slug ?? ""), [items]);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((project, index) => {
        const active = activeSlug === project.slug;
        return (
          <Link key={project.slug} href={`/projects/${project.slug}`} onMouseEnter={() => setActiveSlug(project.slug)} onFocus={() => setActiveSlug(project.slug)}
            className={`group relative min-h-[300px] overflow-hidden rounded-2xl border border-[#172236]/10 transition-all duration-500 ${active ? "md:-translate-y-1 md:shadow-xl" : ""}`}>
            <ProjectArtwork project={project} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.035]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172236]/85 via-[#172236]/15 to-transparent transition-opacity duration-500 group-hover:from-[#172236]/90" />
            <div className="absolute left-5 top-5 text-[10px] tracking-[.16em] text-white/80">{project.number} / CHAPTER</div>
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
              <div>
                <p className="mb-2 text-[9px] tracking-[.15em] text-white/70">{project.group.toUpperCase()}</p>
                <h3 className="font-serif text-3xl tracking-[-.05em] sm:text-4xl">{project.name}</h3>
                <p className="mt-2 max-w-md text-xs leading-5 text-white/75">{project.description}</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f3f0e9] text-[#172236] transition-all group-hover:rotate-45 group-hover:bg-[#244bff] group-hover:text-white"><ArrowUpRight size={16} /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
