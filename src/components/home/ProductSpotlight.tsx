import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16M7 12h10M10 18h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconList({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDoc({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function IconSheet({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 4h12v16a2 2 0 0 1-2 2H8V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 9h5M11 13h5M11 17h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const rows = [
  { name: "Product roadmap sync", priority: "High" as const, clients: 2, people: 3 },
  { name: "Client onboarding flow", priority: "Medium" as const, clients: 3, people: 2 },
  { name: "Research synthesis", priority: "Low" as const, clients: 1, people: 4 },
  { name: "Quarterly review deck", priority: "High" as const, clients: 2, people: 2 },
];

function PriorityPill({ level }: { level: "High" | "Medium" | "Low" }) {
  const styles = {
    High: "bg-emerald-50 text-emerald-800 ring-emerald-200/80",
    Medium: "bg-amber-50 text-amber-900 ring-amber-200/70",
    Low: "bg-rose-50 text-rose-800 ring-rose-200/70",
  };
  const dot = {
    High: "bg-emerald-500",
    Medium: "bg-amber-500",
    Low: "bg-rose-500",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${styles[level]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[level]}`} />
      {level}
    </span>
  );
}

function AvatarStack({ n, seed }: { n: number; seed: string }) {
  const hues = [210, 25, 145, 35, 280];
  return (
    <div className="flex -space-x-1.5">
      {Array.from({ length: Math.min(n, 4) }).map((_, i) => (
        <span
          key={`${seed}-${i}`}
          className="inline-block h-6 w-6 rounded-full border-2 border-white ring-1 ring-black/5"
          style={{
            background: `hsl(${(hues[i % hues.length] + i * 17) % 360} 45% 78%)`,
          }}
        />
      ))}
    </div>
  );
}

export function ProductSpotlight() {
  return (
    <section
      id="product"
      className="border-t border-black/[0.06] bg-white px-6 py-20 md:py-28"
      aria-labelledby="product-spotlight-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: UI mock */}
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-[1.75rem] bg-gradient-to-b from-brand-secondary/55 via-brand-secondary/25 to-brand-tertiary/50 p-5 shadow-[0_24px_80px_rgba(150,126,111,0.12)] md:p-7">
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm">
              <div className="border-b border-black/[0.06] p-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-brand-primary">Projects</h3>
                  <div className="flex flex-1 flex-wrap items-center justify-end gap-2 min-w-[12rem]">
                    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.02] px-3 py-1.5 text-xs text-black/40">
                      <SearchIcon className="h-4 w-4 shrink-0" />
                      <span className="truncate">Find a project…</span>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-3 py-1.5 text-xs font-medium text-brand-primary/80"
                    >
                      <FilterIcon className="h-3.5 w-3.5" />
                      Filter
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 md:p-4">
                <div className="mb-2 rounded-lg bg-brand-secondary/35 px-3 py-2 text-xs font-semibold text-brand-primary/85">
                  Ongoing · 5
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[320px] text-left text-[11px] md:text-xs">
                    <thead>
                      <tr className="text-brand-primary/45">
                        <th className="pb-2 pr-2 font-medium">Project</th>
                        <th className="pb-2 pr-2 font-medium">Priority</th>
                        <th className="pb-2 pr-2 font-medium">Clients</th>
                        <th className="pb-2 font-medium">Assigned</th>
                      </tr>
                    </thead>
                    <tbody className="text-brand-primary/85">
                      {rows.map((row) => (
                        <tr key={row.name} className="border-t border-black/[0.05]">
                          <td className="py-2.5 pr-2 font-medium">{row.name}</td>
                          <td className="py-2.5 pr-2">
                            <PriorityPill level={row.priority} />
                          </td>
                          <td className="py-2.5 pr-2">
                            <AvatarStack n={row.clients} seed={`c-${row.name}`} />
                          </td>
                          <td className="py-2.5">
                            <AvatarStack n={row.people} seed={`p-${row.name}`} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-2 space-y-1.5">
                  <div className="rounded-lg bg-brand-tertiary/80 px-3 py-2 text-xs font-medium text-[#1f1c1a]/65">
                    In review · 8
                  </div>
                  <div className="rounded-lg bg-emerald-50/90 px-3 py-2 text-xs font-medium text-emerald-900/70">
                    Completed · 12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: copy */}
        <Reveal className="order-1 lg:order-2" delay={0.06}>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-primary/38">
            Project management
          </p>
          <h2
            id="product-spotlight-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Keep every project moving forward
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-brand-primary/55 md:text-[1.05rem]">
            Plan, assign, and deliver your work — all in one place. With smart task tracking,
            deadlines, and real-time progress, you stay organized and clients stay confident.
          </p>
          <div className="mt-8">
            <Link
              href="/software"
              className="inline-flex rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] duration-200 ease-apple hover:bg-brand-primary/90 active:scale-[0.99]"
            >
              Explore Software
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md">
            {[
              { label: "Tasks", Icon: IconList },
              { label: "Time tracking", Icon: IconClock },
              { label: "Timesheets", Icon: IconSheet },
              { label: "Reports", Icon: IconDoc },
            ].map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full border border-black/[0.1] bg-black/[0.02] px-3 py-2.5 text-xs font-medium text-brand-primary/75"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-primary/45" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
