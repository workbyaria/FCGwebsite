import { Reveal } from "@/components/motion/Reveal";

const SOLUTIONS = [
  {
    title: "Simplifying Daily Decisions",
    tags: ["SpinMeal", "BuyCalc"],
    accent: "from-[#B9EAFF]/70 via-white to-[#E8DDD1]/60",
  },
  {
    title: "Empowering Small Businesses",
    tags: ["NailCalc", "LashCalc"],
    accent: "from-[#E8DDD1]/75 via-white to-[#B9EAFF]/45",
  },
  {
    title: "AI-Driven Productivity",
    tags: ["Workflow AI", "Automation Layer"],
    accent: "from-[#DDF3FF]/80 via-white to-[#F2E9E1]/65",
  },
  {
    title: "Wellness Through Technology",
    tags: ["Clarity", "Routine", "Self-awareness"],
    accent: "from-[#F6EFE8]/85 via-white to-[#DCEFFF]/55",
  },
] as const;

export default function SolutionsPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-secondary/18 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-8rem] h-64 w-64 rounded-full bg-brand-secondary/25 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-primary/40">
            Solutions
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-brand-primary md:text-6xl">
            We turn complex problems into user-friendly solutions.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-primary/60 md:text-lg">
            Built for clarity-first teams and modern service businesses.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {SOLUTIONS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.04}>
              <article className="h-full rounded-[1.35rem] border border-black/[0.07] bg-white/80 p-5 shadow-[0_10px_36px_rgba(150,126,111,0.08)] backdrop-blur-sm md:p-6">
                <div
                  className={`mb-5 rounded-xl bg-gradient-to-r ${item.accent} p-4 ring-1 ring-black/[0.04]`}
                >
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-brand-primary md:text-[1.85rem]">
                    {item.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-secondary/45 bg-brand-secondary/20 px-3 py-1 text-xs font-medium tracking-wide text-brand-primary/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
