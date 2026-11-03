
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import ProjectMotion from "@/components/sections/project-motion";
import { getProjectBySlug, projects } from "@/lib/projects";

// This project route awaits dynamic URL params before rendering.
// Opt out of instant-navigation validation for this route.
export const instant = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Ashan Mir" };
  }

  return {
    title: `${project.name} | Ashan Mir`,
    description: project.description,
  };
}

const sectionIcons = {
  challenge: Target,
  solution: Lightbulb,
  implementation: Wrench,
  learning: CheckCircle2,
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const Icon = project.icon;
  const ChallengeIcon = sectionIcons.challenge;
  const SolutionIcon = sectionIcons.solution;
  const ImplementationIcon = sectionIcons.implementation;
  const LearningIcon = sectionIcons.learning;

  return (
   <main
  data-project-page
  className="relative isolate min-h-screen overflow-hidden bg-[#f3f0e9] text-[#20201e]"
>
  <ProjectMotion />
      {/* TOP NAVIGATION */}
      <header className="mx-auto flex max-w-[1500px] items-center justify-between px-[var(--page-gutter)] py-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.12em] text-[#625e57] transition-colors hover:text-[#244bff]"
        >
          <ArrowLeft className="size-4" />
          BACK TO SELECTED WORK
        </Link>

        <span className="text-[10px] tracking-[0.18em] text-[#77736b]">
          ASHAN MIR / PROJECT {project.number}
        </span>
      </header>

      <div className="mx-auto max-w-[1500px] px-[var(--page-gutter)] pb-24">
        {/* PROJECT INTRO */}
        <section data-reveal className="border-t border-[#172236]/15 pb-10 pt-12 md:pb-16 md:pt-20">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="text-[9px] tracking-[0.17em] text-[#244bff]">
              {project.category.toUpperCase()}
            </span>
            <span className="size-1 rounded-full bg-[#aaa39a]" />
            <span className="text-[9px] tracking-[0.14em] text-[#77736b]">
              {project.group.toUpperCase()}
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">
            <h1 className="break-words font-serif text-[clamp(3.4rem,9vw,8rem)] leading-[0.88] tracking-[-0.075em]">
              {project.name}
              <span className="text-[#244bff]">.</span>
            </h1>

            <p className="max-w-[430px] text-sm leading-7 text-[#77736b] md:justify-self-end">
              {project.description}
            </p>
          </div>
        </section>

        {/* COVER IMAGE */}
        <section data-reveal className="relative overflow-hidden rounded-[16px] border border-[#172236]/10 bg-white shadow-[0_20px_60px_rgba(23,34,54,0.08)]">
          {project.image ? (
            <div className="relative aspect-[16/9] w-full bg-[#eae4f8]">
              <Image
                src={project.image}
                alt={`${project.name} project showcase`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="relative flex aspect-[16/9] min-h-[280px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#18263b] via-[#30465a] to-[#7a7b89] p-7 text-white sm:p-12 md:p-16">
              <div className="absolute -right-20 -top-20 size-96 rounded-full bg-white/15 blur-[100px]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.18em] text-white/70">
                  ASHAN MIR / SELECTED WORK
                </span>
                <Icon className="size-7 text-white/80" />
              </div>

              <div className="relative z-10">
                <p className="mb-4 text-[9px] tracking-[0.18em] text-white/65">
                  {project.category.toUpperCase()}
                </p>
                <h2 className="max-w-[900px] break-words font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.85] tracking-[-0.08em]">
                  {project.coverTitle}
                </h2>
                <p className="mt-5 text-sm text-white/75">
                  {project.coverSubtitle}
                </p>
              </div>

              <span className="relative z-10 text-[9px] tracking-[0.18em] text-white/60">
                PROJECT {project.number}
              </span>
            </div>
          )}
        </section>

        {/* PROJECT LINKS */}
        <section data-reveal className="flex flex-col justify-between gap-5 border-b border-[#172236]/15 py-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-[9px] tracking-[0.16em] text-[#999187]">
              EXPLORE THE PROJECT
            </p>
            <p className="mt-1 text-xs text-[#77736b]">
              Visit the live experience or explore the source code.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
              href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-xs font-medium text-[var(--navy)] shadow-[0_2px_8px_rgba(23,34,54,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--electric-blue)] hover:bg-[var(--electric-blue)]/[0.06] hover:text-[var(--electric-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--electric-blue)] focus-visible:ring-offset-2"              >
                Visit Live Website
                <ExternalLink className="size-3.5" />
              </a>
            ) : (
              <span className="rounded-full border border-[#172236]/15 px-4 py-3 text-[9px] text-[#999187]">
                LIVE LINK TO BE ADDED
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#172236]/20 px-5 py-3 text-[10px] text-[#172236] transition-colors hover:border-[#244bff] hover:text-[#244bff]"
              >
                Source Code
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : (
              <span className="rounded-full border border-[#172236]/15 px-4 py-3 text-[9px] text-[#999187]">
                SOURCE LINK TO BE ADDED
              </span>
            )}
          </div>
        </section>

        {/* OVERVIEW */}
        <section data-reveal className="grid gap-10 border-b border-[#172236]/15 py-14 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <div>
            <span className="text-[9px] tracking-[0.17em] text-[#244bff]">
              01 / OVERVIEW
            </span>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.055em]">
              The idea
              <br />
              behind it.
            </h2>
          </div>

          <div className="max-w-[750px]">
            <p className="text-lg leading-8 text-[#383630]">
              {project.purpose}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#172236]/10 pt-5">
              <div>
                <p className="text-[9px] tracking-[0.15em] text-[#999187]">
                  PROJECT TYPE
                </p>
                <p className="mt-2 text-xs text-[#383630]">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-[9px] tracking-[0.15em] text-[#999187]">
                  DISCIPLINE
                </p>
                <p className="mt-2 text-xs text-[#383630]">
                  {project.group}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE AND SOLUTION */}
        <section data-reveal className="grid gap-5 py-14 md:grid-cols-2 md:py-20">
          <article className="rounded-[14px] border border-[#172236]/10 bg-[#faf8f2] p-6 sm:p-9">
            <ChallengeIcon className="size-6 text-[#244bff]" />
            <p className="mt-7 text-[9px] tracking-[0.16em] text-[#999187]">
              02 / THE CHALLENGE
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.05em]">
              What needed solving.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#77736b]">
              {project.challenge}
            </p>
          </article>

          <article className="rounded-[14px] border border-[#172236]/10 bg-[#e9e6dd] p-6 sm:p-9">
            <SolutionIcon className="size-6 text-[#244bff]" />
            <p className="mt-7 text-[9px] tracking-[0.16em] text-[#999187]">
              03 / THE APPROACH
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.05em]">
              Turning ideas into solutions.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#77736b]">
              {project.solution}
            </p>
          </article>
        </section>

        {/* IMPLEMENTATION */}
        <section data-reveal className="grid gap-10 border-t border-[#172236]/15 py-14 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <div>
            <ImplementationIcon className="size-6 text-[#244bff]" />
            <p className="mt-5 text-[9px] tracking-[0.17em] text-[#244bff]">
              04 / IMPLEMENTATION
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.055em]">
              What went
              <br />
              into the build.
            </h2>
          </div>

          <div className="space-y-0">
            {project.implementation.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-[#172236]/10 py-5"
              >
                <span className="text-[10px] tracking-[0.14em] text-[#244bff]">
                  0{index + 1}
                </span>
                <p className="text-sm text-[#555149]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section data-reveal className="border-t border-[#172236]/15 py-14 md:py-20">
          <div className="mb-8 flex items-center gap-3">
            <Code2 className="size-5 text-[#244bff]" />
            <div>
              <p className="text-[9px] tracking-[0.17em] text-[#244bff]">
                05 / TECHNOLOGY
              </p>
              <h2 className="mt-1 font-serif text-3xl tracking-[-0.05em]">
                Tools behind the work.
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.technologies.map((technology, index) => (
              <div
                key={technology}
                className="flex items-center gap-4 rounded-[10px] border border-[#172236]/10 bg-[#faf8f2] p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e9edff] text-[10px] text-[#244bff]">
                  0{index + 1}
                </span>
                <span className="text-xs text-[#383630]">
                  {technology}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section data-reveal className="grid gap-10 border-t border-[#172236]/15 py-14 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <div>
            <p className="text-[9px] tracking-[0.17em] text-[#244bff]">
              06 / THE JOURNEY
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.055em]">
              Experience
              <br />
              along the way.
            </h2>
          </div>

          <div className="max-w-[750px]">
            <p className="text-sm leading-8 text-[#77736b]">
              {project.journey}
            </p>

            <div className="mt-8 rounded-[12px] bg-[#172236] p-6 text-white sm:p-8">
              <p className="text-[9px] tracking-[0.16em] text-white/55">
                KEY LEARNING
              </p>
              <div className="mt-4 flex gap-4">
                <LearningIcon className="size-5 shrink-0 text-[#91aaff]" />
                <p className="text-sm leading-7 text-white/85">
                  {project.learning}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section data-reveal className="border-t border-[#172236]/15 pt-10">
          <Link
            href="/#projects"
            className="group flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-[9px] tracking-[0.16em] text-[#999187]">
                CONTINUE EXPLORING
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-[-0.05em] transition-colors group-hover:text-[#244bff] sm:text-4xl">
                Discover more projects.
              </h2>
            </div>

            <span className="flex size-12 items-center justify-center rounded-full bg-[#172236] text-white transition-all group-hover:rotate-45 group-hover:bg-[#244bff]">
              <ArrowUpRight className="size-5" />
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}
