const experienceItems = [
  {
    type: "COMPANY EXPERIENCE",
    title: "Wessmaa",
    description:
      "Contributed to digital solutions and gained practical experience working in a company environment.",
    tags: ["Team Collaboration", "Web Development", "Digital Solutions"],
  },
  {
    type: "COMPANY EXPERIENCE",
    title: "NIC",
    description:
      "Built professional experience through hands-on work, learning, and exposure to real-world development practices.",
    tags: ["Development", "Professional Growth"],
  },
  {
    type: "FREELANCE",
    title: "Freelance Developer",
    description:
      "Worked on projects for clients, managed requirements, communicated ideas, and helped turn concepts into working digital solutions.",
    tags: ["Client Dealing", "Project Delivery", "Communication"],
  },
  {
    type: "PROJECT EXPERIENCE",
    title: "Circle Projects",
    description:
      "Collaborated on projects, explored different development approaches, and gained experience building practical solutions.",
    tags: ["Collaboration", "Problem Solving", "Development"],
  },
];

const experienceHighlights = [
  "Client communication and requirement understanding",
  "Project planning and development",
  "Teaching and explaining development concepts",
  "Continuously learning new languages and technologies",
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-[1600px] border-t border-[var(--border)] px-[var(--page-gutter)] py-20 md:py-28 lg:py-36"
    >
      {/* Section heading */}
      <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.15em] text-[var(--muted)]">
            04 / EXPERIENCE
          </p>

          <h2 className="my-5 max-w-[700px] text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-[var(--navy)]">
            Learning.
            <br />
            Building.
            <br />
            Delivering.
          </h2>
        </div>

        <p className="max-w-[650px] text-base leading-[1.8] text-[var(--muted)] md:text-lg">
          My journey combines company experience, freelance work, project
          development, client communication, and teaching. Every experience
          helps me grow as an engineer and build better digital solutions.
        </p>
      </div>

      {/* Experience timeline */}
      <div className="relative">
        <div className="absolute bottom-8 left-[15px] top-8 w-px bg-[var(--border)] md:left-1/2" />

        <div className="space-y-8 md:space-y-12">
          {experienceItems.map((item, index) => (
            <article
              key={item.title}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-12"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              <span
                className={`absolute left-[9px] top-8 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--background)] bg-[var(--electric-blue)] ring-1 ring-[var(--electric-blue)] md:left-auto ${
                  index % 2 === 0
                    ? "md:right-[-7px]"
                    : "md:left-[-7px]"
                }`}
              />

              <div className="group rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--electric-blue)]/50 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium tracking-[0.12em] text-[var(--electric-blue)]">
                    {item.type}
                  </span>

                  <span className="text-sm text-[var(--muted)]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--navy)]/[0.04] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Skills gained through experience */}
      <div className="mt-20 grid gap-8 rounded-3xl border border-[var(--border)] p-6 md:mt-28 md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <div>
          <p className="text-xs font-medium tracking-[0.15em] text-[var(--electric-blue)]">
            BEYOND THE CODE
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)] md:text-4xl">
            Experience is more than writing code.
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {experienceHighlights.map((highlight, index) => (
            <div
              key={highlight}
              className="flex gap-3 border-b border-[var(--border)] pb-4"
            >
              <span className="mt-0.5 text-sm font-medium text-[var(--electric-blue)]">
                0{index + 1}
              </span>

              <p className="text-sm leading-6 text-[var(--muted)]">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning statement */}
      <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[650px] text-sm leading-7 text-[var(--muted)]">
          I keep exploring new programming languages, tools, and concepts
          because becoming a better engineer is a continuous journey.
        </p>

        <span className="shrink-0 text-xs font-medium tracking-[0.12em] text-[var(--electric-blue)]">
          ALWAYS LEARNING ↗
        </span>
      </div>
    </section>
  );
}