import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowUpRight,
  ArrowDown,
  Globe,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="home" className="hero relative">
      {/* Background typography */}
      <div className="hero-background-type" aria-hidden="true">
        <div className="creative-track">
          <span>CREATIVE</span>
          <span>CREATIVE</span>
        </div>
      </div>

      {/* Orbit label */}
      <div className="hero-orbit-label" aria-hidden="true">
        <span className="orbit-dot" />
        SOFTWARE ENGINEER
      </div>

      {/* Decorative cross */}
      <div className="hero-cross" aria-hidden="true">
        +
      </div>

      {/* Portrait */}
      <div className="hero-portrait">
        <div className="portrait-glow" aria-hidden="true" />

        <Image
          src="/images/portrait.png"
          alt="Ashan Mir"
          fill
          priority
          sizes="(max-width: 760px) 80vw, (max-width: 1100px) 64vw, 58vw"
          className="portrait-image"
        />
      </div>

      {/* Main hero content */}
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span>ASHAN</span>
          <span className="blue-text">MIR</span>
        </p>

        <h1 className="hero-name">
          <span>ASHAN</span>
          <span className="blue-text">MIR</span>
        </h1>

        {/* Signature */}
        <div className="signature-line" aria-hidden="true">
          <svg viewBox="0 0 190 24" fill="none">
            <path
              d="M2 19 C25 4 28 3 19 20 S49 5 61 13 S100 19 121 10 S160 13 188 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h2 className="hero-role">
          Full-Stack Developer &amp;
          <br />
          Creative Problem Solver
        </h2>

<p className="hero-description hidden md:block">
  I build modern, scalable, and user-focused digital experiences.
  Turning ideas into real products through clean code and creative
  design.
</p>
        {/* Main actions */}
        <div className="hero-actions">
          <a href="#work" className="button-primary">
            View My Work

            <span className="button-icon">
              <ArrowUpRight size={21} />
            </span>
          </a>

          <a
            href="mailto:ashanmirofficial@gmail.com?subject=Resume%20Request"
            className="button-secondary"
          >
            Resume coming soon
            <ArrowDownToLine size={18} />
          </a>
        </div>

        {/* Social links */}
        <div className="hero-socials">
          <p>SOCIALS</p>

          <div className="social-links">
            <a
              href="https://github.com/Mikey-Here3"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ashan-mir/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a href="#work" aria-label="Explore my work">
              <Globe />
            </a>
          </div>
        </div>
      </div>

      {/* Creative feature card — top-right */}
      <a
        href="#work"
        className="group absolute right-5 top-24 z-30 flex w-[320px] max-w-[calc(100%-2.5rem)] items-center gap-4 overflow-hidden rounded-[22px] border border-white/70 bg-[var(--background)]/90 px-4 py-3.5 text-[var(--navy)] shadow-[0_12px_35px_rgba(23,34,54,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[var(--electric-blue)]/25 hover:shadow-[0_18px_45px_rgba(23,34,54,0.12)] sm:right-10 sm:top-28 md:right-14 md:top-28 lg:right-16 lg:top-32"
      >
        {/* Decorative glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-10 size-32 rounded-full bg-[var(--electric-blue)]/[0.06] blur-2xl transition-colors duration-500 group-hover:bg-[var(--electric-blue)]/[0.12]"
        />

        {/* Feature text */}
        <span className="relative z-10 min-w-0 flex-1">
          <span className="block text-[9px] font-medium tracking-[0.16em] text-[var(--muted)]">
            IDEAS INTO IMPACT
          </span>

          <span className="mt-2 block text-[15px] font-medium leading-[1.35] tracking-[-0.035em] text-[var(--navy)] sm:text-base">
            From Thought
            <br />
            <span className="text-[var(--electric-blue)]">
              to Thing.
            </span>
          </span>
        </span>

        {/* Abstract product visual */}
        <span
          aria-hidden="true"
          className="relative grid size-[60px] shrink-0 place-items-center overflow-hidden rounded-xl border border-[var(--electric-blue)]/15 bg-gradient-to-br from-[var(--electric-blue)]/20 via-[var(--background)] to-[var(--navy)]/15 shadow-inner transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
        >
          <span className="absolute inset-2 rounded-lg border border-white/60" />

          <span className="relative grid size-8 place-items-center rounded-lg bg-[var(--background)]/70 shadow-sm backdrop-blur-sm">
            <span className="size-3 rounded-sm bg-[var(--electric-blue)] transition-transform duration-500 group-hover:rotate-45" />
          </span>

          <span className="absolute bottom-2 right-2 size-1.5 rounded-full bg-[var(--electric-blue)]" />
        </span>

        {/* Arrow */}
        <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full text-[var(--navy)] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[var(--electric-blue)]/10 group-hover:text-[var(--electric-blue)]">
          <ArrowUpRight size={20} />
        </span>
      </a>

      {/* Experience badge */}
      <div className="hero-experience-card">
        <strong>
          AM<span className="blue-text">.</span>
        </strong>

        <span>
          Creative
          <br />
          Developer
        </span>

        <span className="experience-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}