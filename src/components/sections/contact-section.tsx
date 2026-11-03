import { ArrowDownRight, ArrowUpRight, Mail, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate mx-auto w-full max-w-[1600px] overflow-hidden border-t border-[var(--border)] px-[var(--page-gutter)] py-20 md:py-28 lg:py-36"
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 top-10 size-[420px] rounded-full border border-[var(--electric-blue)]/[0.08] md:-right-20 md:size-[600px]">
          <div className="absolute inset-12 rounded-full border border-[var(--electric-blue)]/[0.08]" />
          <div className="absolute inset-24 rounded-full border border-[var(--electric-blue)]/[0.08]" />
          <div className="absolute inset-36 rounded-full border border-[var(--electric-blue)]/[0.08]" />
        </div>

        <div className="absolute right-[15%] top-[30%] size-2 rounded-full bg-[var(--electric-blue)] opacity-50" />
        <div className="absolute right-[28%] top-[18%] size-1 rounded-full bg-[var(--electric-blue)] opacity-40" />
      </div>

      {/* Section label */}
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--electric-blue)]" />

        <p className="text-xs font-medium tracking-[0.18em] text-[var(--muted)]">
          05 / LET&apos;S BUILD SOMETHING
        </p>
      </div>

      {/* Main headline */}
      <div className="relative mt-10 md:mt-14">
        <h2 className="max-w-[1100px] text-[clamp(3.2rem,9vw,9rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-[var(--navy)]">
          Good ideas
          <br />
          deserve to
          <br />
          <span className="relative inline-block text-[var(--electric-blue)]">
            go further.
            <span
              aria-hidden="true"
              className="absolute -bottom-2 left-1 h-[3px] w-[72%] origin-left scale-x-0 bg-[var(--electric-blue)] transition-transform duration-700 ease-out group-hover:scale-x-100"
            />
          </span>
        </h2>

        <div className="absolute right-0 top-0 hidden md:block">
          <div className="grid size-20 place-items-center rounded-full border border-[var(--border)] text-[var(--electric-blue)] transition-transform duration-500 hover:rotate-45 lg:size-28">
            <ArrowDownRight size={32} strokeWidth={1.25} />
          </div>
        </div>
      </div>

      {/* Supporting content and CTA */}
      <div className="mt-12 grid gap-10 border-b border-[var(--border)] pb-14 md:mt-16 md:grid-cols-[1fr_auto] md:items-end md:pb-20">
        <div className="max-w-[600px]">
          <p className="text-lg leading-[1.8] text-[var(--muted)] md:text-xl">
            Have a bold idea, a product to build, or a challenge worth solving?
            Let&apos;s turn it into something thoughtful, useful, and real.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="size-2 rounded-full bg-[var(--electric-blue)]" />

            <p className="text-xs font-medium tracking-wide text-[var(--muted)]">
              Available for meaningful collaborations
            </p>
          </div>
        </div>

      <a
  href="mailto:ashanmirofficial@gmail.com"
  className="group inline-flex min-h-16 w-fit items-center gap-6 rounded-full border border-[var(--border)] bg-[var(--background)] py-2 pl-7 pr-2 text-sm font-medium text-[var(--navy)] shadow-[0_8px_28px_rgba(23,34,54,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--electric-blue)]/30 hover:shadow-[0_14px_36px_rgba(23,34,54,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--electric-blue)] focus-visible:ring-offset-4"
>
  <span className="flex items-center gap-3">
    <Mail
      size={17}
      strokeWidth={1.8}
      className="text-[var(--electric-blue)]"
    />
    Start a Conversation
  </span>

  <span className="grid size-12 place-items-center rounded-full bg-[var(--electric-blue)] text-white shadow-[0_4px_12px_rgba(0,82,255,0.2)] transition-all duration-300 group-hover:rotate-45 group-hover:shadow-[0_6px_18px_rgba(0,82,255,0.3)]">
    <ArrowUpRight size={22} strokeWidth={1.8} />
  </span>
</a>
      </div>

      {/* Bottom signature */}
      <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Sparkles
            size={15}
            className="shrink-0 text-[var(--electric-blue)]"
          />

          <p className="text-xs leading-6 tracking-wide text-[var(--muted)]">
            Thoughtful engineering. Creative solutions. Continuous growth.
          </p>
        </div>

        <a
          href="mailto:ashanmirofficial@gmail.com"
          className="group w-fit text-xs font-medium text-[var(--navy)] transition-colors hover:text-[var(--electric-blue)]"
        >
          <span className="border-b border-[var(--border)] pb-1 transition-colors group-hover:border-[var(--electric-blue)]">
            ashanmirofficial@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
}