import { Reveal } from "@/components/motion/Reveal";

type Swatch = { bg: string; ring?: string; check?: boolean };
const palette: Swatch[] = [
  { bg: "bg-[#5c4a42]", ring: "ring-white/30", check: true },
  { bg: "bg-zinc-400" },
  { bg: "bg-amber-400" },
  { bg: "bg-orange-400" },
  { bg: "bg-emerald-500" },
  { bg: "bg-sky-500" },
];

const integrations = [
  { abbr: "S", className: "bg-[#4A154B] text-white" },
  { abbr: "G", className: "bg-white text-blue-600 ring-1 ring-black/10" },
  { abbr: "M", className: "bg-blue-600 text-white" },
  { abbr: "L", className: "bg-violet-600 text-white" },
  { abbr: "N", className: "bg-zinc-900 text-white" },
  { abbr: "T", className: "bg-sky-500 text-white" },
  { abbr: "A", className: "bg-orange-500 text-white" },
  { abbr: "Z", className: "bg-blue-500 text-white" },
  { abbr: "+", className: "bg-black/[0.04] text-brand-primary/35" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 12l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-t border-black/[0.06] bg-brand-canvas px-6 py-16 md:py-20"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-primary/40">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl lg:text-[2.35rem] lg:leading-tight"
          >
            Built for freelancers, powered by simplicity
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-7">
          {/* Left card */}
          <Reveal>
            <article className="flex h-full flex-col rounded-[1.75rem] bg-brand-tertiary/70 p-6 shadow-[0_16px_48px_rgba(150,126,111,0.08)] md:p-8">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-brand-primary md:text-xl">
                Smart, flexible, and built around your business workflow
              </h3>

              <div className="mt-6 space-y-4 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-2">
                  {palette.map((c, i) => (
                    <span
                      key={i}
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full ring-2 ${c.bg} ${c.ring ?? "ring-white"}`}
                    >
                      {c.check ? <CheckIcon className="h-4 w-4 text-white" /> : null}
                    </span>
                  ))}
                  <span className="ml-auto flex gap-1.5 text-black/25">
                    <span className="h-8 w-8 rounded-lg border border-black/[0.08] bg-black/[0.02]" />
                    <span className="h-8 w-8 rounded-lg border border-black/[0.08] bg-black/[0.02]" />
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-2">
                    <span className="relative h-5 w-9 rounded-full bg-emerald-500">
                      <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow" />
                    </span>
                    <span className="text-xs font-medium text-brand-primary/75">
                      Hide FCG branding
                    </span>
                  </div>
                  <div className="inline-flex rounded-xl border border-black/[0.08] bg-white p-1 shadow-sm">
                    <button
                      type="button"
                      className="rounded-lg px-2.5 py-1.5 text-brand-primary/45"
                      aria-label="Dark mode"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-black/[0.04] px-2.5 py-1.5 text-amber-500"
                      aria-label="Light mode"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <circle cx="12" cy="12" r="4" />
                        <path
                          strokeLinecap="round"
                          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/55 md:text-[0.95rem]">
                <strong className="font-semibold text-brand-primary/85">Personalize every detail.</strong> From
                branding and interface layout to colors and menus, so your workspace feels like an extension of
                your brand.
              </p>
            </article>
          </Reveal>

          {/* Right card */}
          <Reveal delay={0.06}>
            <article className="flex h-full flex-col rounded-[1.75rem] bg-brand-tertiary/70 p-6 shadow-[0_16px_48px_rgba(150,126,111,0.08)] md:p-8">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-brand-primary md:text-xl">
                Integrates seamlessly with the tools you already use
              </h3>

              <div className="relative mt-6 overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {integrations.map((app) => (
                    <div
                      key={app.abbr}
                      className={`flex aspect-square items-center justify-center rounded-2xl text-sm font-semibold shadow-sm ${app.className}`}
                    >
                      {app.abbr}
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
              </div>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/55 md:text-[0.95rem]">
                <strong className="font-semibold text-brand-primary/85">Seamless integrations.</strong> Plug into
                the tools you love. Set up automations, sync your data, and make your systems work smarter
                together.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
