import { Reveal } from "@/components/motion/Reveal";

const VALUES = [
  {
    title: "Execution",
    body: "Execution is the foundation of everything we believe in. Ideas only matter when they become real, useful tools for daily life and work.",
  },
  {
    title: "Creativity",
    body: "Creativity begins with observation. We turn everyday moments and small frustrations into simpler, better ways to solve real problems.",
  },
  {
    title: "Resilience",
    body: "Resilience means continuing to build, adapt, and improve through uncertainty. We design with flexibility so our tools stay useful in both stable and difficult times.",
  },
  {
    title: "Consistency",
    body: "Consistency means staying true to our original intention. Long-term trust is built through steady effort, reflection, and refinement over time.",
  },
] as const;

export default function VisionPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-secondary/18 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 left-[-7rem] h-64 w-64 rounded-full bg-brand-tertiary/35 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* 1) Opening statement */}
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-primary/40">
            Vision
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-brand-primary md:text-6xl">
            Better technology for people and the world.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-primary/60 md:text-lg">
            Our vision is to make life simpler, kinder, and more human through technology.
          </p>
        </Reveal>

        {/* 2) Core values */}
        <div className="mt-12 md:mt-14">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-primary/40">
              Core Values
            </p>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-5">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.04}>
                <article className="h-full rounded-3xl border border-black/[0.07] bg-white/85 p-5 shadow-[0_10px_30px_rgba(150,126,111,0.07)] backdrop-blur-sm md:p-6">
                  <h2 className="text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-brand-primary/65">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3) Impact & future */}
        <div className="mt-10 md:mt-12">
          <Reveal>
            <article className="rounded-3xl border border-black/[0.07] bg-gradient-to-br from-brand-secondary/35 via-white to-brand-tertiary/50 p-5 shadow-[0_12px_36px_rgba(150,126,111,0.08)] md:p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/40">
                Impact & Future
              </p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-brand-primary/68">
                Looking ahead, we hope to contribute beyond software. We care deeply about
                kindness, sustainability, and animal welfare.
              </p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-brand-primary/68">
                As we grow, we plan to support rescue initiatives, ethical communities, and
                projects that create long-term positive impact.
              </p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-brand-primary/68">
                We believe innovation and compassion can coexist.
              </p>
            </article>
          </Reveal>
        </div>

        {/* 4) Closing line */}
        <Reveal className="mt-10 md:mt-12">
          <div className="rounded-3xl border border-black/[0.07] bg-white p-6 text-center shadow-[0_10px_32px_rgba(150,126,111,0.07)] md:p-8">
            <p className="text-balance text-2xl font-semibold tracking-tight text-brand-primary md:text-3xl">
              Friendly technology. Thoughtful execution. Human-centered future.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
