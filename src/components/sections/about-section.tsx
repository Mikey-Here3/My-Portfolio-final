
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const interests = [
  "DIGITAL DESIGN",
  "CREATIVE CODING",
  "INTERACTIVE WEB",
  "3D EXPERIENCES",
];

const exploring = [
  "EXPERIMENTING WITH INTERACTION",
  "EXPLORING CREATIVE TECHNOLOGIES",
  "BUILDING MEANINGFUL PRODUCTS",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-about-intro]",
          start: "top 82%",
          once: true,
        },
      });

      intro
        .from("[data-about-label]", {
          opacity: 0,
          y: 15,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
        })
        .from(
          "[data-about-title]",
          {
            opacity: 0,
            y: 65,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.35"
        );

      gsap.fromTo(
        "[data-about-photo]",
        {
          opacity: 0,
          y: 65,
          rotate: -8,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          rotate: -3,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-layout]",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-about-copy]",
        {
          opacity: 0,
          x: 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-copy-wrap]",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-about-bottom]",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-bottom-wrap]",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Subtle portrait parallax on larger screens
      if (window.matchMedia("(min-width: 1024px)").matches) {
        gsap.to("[data-about-photo]", {
          y: -22,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-[#172236]/10 bg-[#f3f0e9] text-[#20201e]"
    >
      <div className="mx-auto max-w-[1600px] px-[var(--page-gutter)] pb-24 pt-20 md:pb-32 md:pt-28 lg:pb-40 lg:pt-32">

        {/* EDITORIAL TOP LABELS */}
        <div
          data-about-intro
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          <p
            data-about-label
            className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#55534f] md:text-[10px]"
          >
            Creative developer
          </p>

          <p
            data-about-label
            className="hidden text-center text-[9px] font-medium uppercase tracking-[0.16em] text-[#55534f] md:block md:text-[10px]"
          >
            Stories through technology
          </p>

          <p
            data-about-label
            className="text-right text-[9px] font-medium uppercase tracking-[0.16em] text-[#55534f] md:text-[10px]"
          >
            Code. Design. Imagination.
          </p>
        </div>

        {/* OVERSIZED EDITORIAL HEADING */}
        <div className="relative mt-10 md:mt-12">
          <h2
            data-about-title
            className="relative z-10 font-serif text-[clamp(5.5rem,17vw,15rem)] font-normal uppercase leading-[0.72] tracking-[-0.085em] text-[#242321]"
          >
            About
          </h2>

          <div className="relative z-20 flex justify-end">
            <span className="-mt-1 font-serif text-[clamp(5rem,15vw,13rem)] font-normal uppercase leading-[0.78] tracking-[-0.075em] text-[#242321] md:-mt-3">
              Me
            </span>
          </div>
        </div>

        {/* PHOTO + PERSONAL STORY */}
        <div
          data-about-layout
          className="relative mt-8 grid grid-cols-1 items-start gap-12 md:mt-12 lg:grid-cols-[1.08fr_0.72fr] lg:gap-20"
        >
          {/* EDITORIAL PORTRAIT */}
          <div className="relative mx-auto w-full max-w-[690px] lg:mx-0">
            <div
              data-about-photo
              className="relative z-10 rotate-[-3deg] border-[9px] border-white bg-white p-1 shadow-[0_18px_45px_rgba(25,25,25,0.14)] transition-shadow duration-500 hover:shadow-[0_28px_65px_rgba(25,25,25,0.19)] sm:border-[12px] sm:p-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d7d1c8]">
                <Image
                  src="/images/portrait.png"
                  alt="Ashan Mir - Creative Full-Stack Developer"
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 48vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172236]/20 via-transparent to-white/5" />
              </div>
            </div>

            {/* DECORATIVE PAPER CLIP */}
            <div className="absolute -left-2 top-[-25px] z-20 h-20 w-7 rotate-[-8deg] rounded-full border-2 border-[#8b8982] opacity-70 md:-left-3">
              <div className="absolute inset-[5px] rounded-full border border-[#8b8982]" />
            </div>

            {/* IMAGE CAPTION */}
            <p className="mt-8 pl-2 text-[9px] uppercase tracking-[0.18em] text-[#77736b]">
              Fig. 01 — The person behind the pixels
            </p>
          </div>

          {/* PERSONAL INTRODUCTION */}
          <div
            data-about-copy-wrap
            className="relative z-20 flex flex-col pt-2 lg:pt-28"
          >
            <div data-about-copy>
              <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-[#77736b]">
                The developer
              </p>

              <h3 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal uppercase leading-[0.92] tracking-[-0.055em]">
                Ashan
                <br />
                Mir
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#244bff]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#55534f]">
                  Creative Full-Stack Developer
                </span>
              </div>
            </div>

            <div
              data-about-copy
              className="mt-9 max-w-[410px] text-[14px] leading-[1.9] text-[#5e5b55] md:text-[15px]"
            >
              <p>
                I create digital experiences that bring together
                thoughtful design, modern technology and purposeful
                engineering.
              </p>

              <p className="mt-5">
                With a background in Software Engineering, I enjoy
                exploring the intersection of frontend development,
                full-stack applications and interactive digital
                experiences.
              </p>

              <p className="mt-5">
                For me, development is more than writing code. It is
                about understanding an idea, shaping its experience
                and turning it into something people can use and enjoy.
              </p>
            </div>

            {/* PERSONAL STATEMENT */}
            <div data-about-copy className="mt-9 max-w-[390px]">
              <p className="font-serif text-[clamp(1.55rem,3vw,2.3rem)] italic leading-[1.2] text-[#292722]">
                &ldquo;I&apos;m always exploring the space between
                imagination and implementation.&rdquo;
              </p>

              <div className="mt-4 h-px w-24 rotate-[-5deg] bg-[#244bff]/70" />
            </div>

            {/* IDENTITY TAGS */}
            <div data-about-copy className="mt-8 flex flex-wrap gap-2">
              {["DESIGN MINDED", "TECH CURIOUS", "ALWAYS LEARNING"].map(
                (tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="h-auto rounded-full border-[#242321]/20 bg-transparent px-3 py-1.5 text-[9px] font-normal tracking-[0.1em] text-[#55534f]"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM EDITORIAL NOTES */}
        <div
          data-about-bottom-wrap
          className="mt-24 grid grid-cols-1 gap-12 border-t border-[#242321]/15 pt-8 sm:grid-cols-2 lg:mt-32 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div data-about-bottom className="max-w-[260px]">
            <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#77736b]">
              Inspired by
            </p>

            <div className="mb-4 h-px w-8 bg-[#242321]" />

            <ul className="space-y-2 text-[11px] uppercase tracking-[0.08em] text-[#55534f]">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>

          <Card
            data-about-bottom
            className="relative overflow-hidden rounded-none border-0 bg-[#e9e5dc] p-7 shadow-none sm:p-10"
          >
            <div className="pointer-events-none absolute -right-8 -top-12 size-48 rounded-full border border-[#242321]/10" />
            <div className="pointer-events-none absolute -right-2 -top-6 size-36 rounded-full border border-[#242321]/10" />

            <p className="mb-7 font-serif text-3xl italic text-[#292722]">
              Currently
            </p>

            <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row">
              <ul className="space-y-3 text-[10px] uppercase tracking-[0.1em] text-[#55534f]">
                {exploring.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex items-end justify-between sm:flex-col sm:items-end sm:justify-between">
                <Sparkles className="size-7 text-[#244bff]" />
                <ArrowUpRight className="size-5 text-[#77736b]" />
              </div>
            </div>

            <div className="mt-8 h-px w-10 bg-[#242321]" />
          </Card>
        </div>

        {/* QUIET CLOSING LINE */}
        <div className="mt-16 flex items-center justify-between border-t border-[#242321]/10 pt-5">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#77736b]">
            <Code2 className="size-3.5" />
            <span>Made with curiosity</span>
          </div>

          <a
            href="#projects"
            className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#55534f] transition-colors hover:text-[#244bff]"
          >
            Explore selected work
            <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
