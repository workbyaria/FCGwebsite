"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
  const ease = [0.25, 0.1, 0.25, 1] as const;
  const [activeBrand, setActiveBrand] = useState<"bomb" | "alune" | null>(null);

  function SoftParagraph({
    children,
    className,
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) {
    return (
      <motion.p
        className={className}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
        transition={{ duration: 0.5, delay, ease }}
      >
        {children}
      </motion.p>
    );
  }

  return (
    <main className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-secondary/18 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-8rem] h-72 w-72 rounded-full bg-brand-secondary/25 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mt-12 md:mt-14">
          <Reveal className="max-w-4xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-brand-primary/40">
              About Us
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-brand-primary md:text-6xl">
              Friendly Cat Group
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-primary/60 md:text-lg">
              From server to physical stores. We build across digital and physical worlds.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
            <Reveal>
              <article className="h-full rounded-3xl border border-black/[0.07] bg-white/80 p-5 shadow-[0_12px_36px_rgba(150,126,111,0.08)] backdrop-blur-sm md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <Image
                    src="/fcg-logo.png"
                    alt="Friendly Cat Group logo"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-2xl object-cover ring-1 ring-black/5"
                  />
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-brand-primary">
                      Friendly Cat Group
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-primary/38">
                      Origin Story
                    </p>
                  </div>
                </div>

                <SoftParagraph className="text-pretty text-base leading-relaxed text-brand-primary/68" delay={0.03}>
                  Friendly Cat Group started when our founder and CEO was a junior in college.
                </SoftParagraph>
                <SoftParagraph className="mt-4 text-pretty text-base leading-relaxed text-brand-primary/68" delay={0.13}>
                  She has always loved turning random ideas in her head into real visions.
                </SoftParagraph>
                <SoftParagraph className="mt-4 text-pretty text-base leading-relaxed text-brand-primary/68" delay={0.18}>
                  Sometimes they are paintings or physical products.
                </SoftParagraph>
                <SoftParagraph className="mt-4 text-pretty text-base leading-relaxed text-brand-primary/68" delay={0.23}>
                  Sometimes they are small tools that help people solve problems.
                </SoftParagraph>
              </article>
            </Reveal>

            <Reveal>
              <article className="h-full rounded-3xl border border-brand-secondary/40 bg-gradient-to-br from-brand-secondary/65 via-white to-[#dff2ff] p-5 shadow-[0_12px_36px_rgba(98,162,196,0.15)] md:p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-primary/45">
                  Core Belief
                </p>
                <SoftParagraph className="mt-3 text-pretty text-base leading-relaxed text-brand-primary/72" delay={0.06}>
                  &quot;I like studying complicated things, but I don&apos;t like when life feels
                  complicated.
                </SoftParagraph>
                <SoftParagraph className="mt-3 text-pretty text-base leading-relaxed text-brand-primary/72" delay={0.1}>
                  So I try to make things simple, friendly, and easy to understand.&quot;
                </SoftParagraph>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-secondary/55 bg-white/50 px-3 py-1.5 text-xs font-medium tracking-wide text-brand-primary/75 backdrop-blur-sm">
                  Turning complexity into user-friendly tools
                </div>
              </article>
            </Reveal>
          </div>

          {/* Same typographic treatment as home “The Essence” tagline; left-aligned */}
          <section className="mt-20 md:mt-28" aria-label="FCG story">
            <Reveal className="max-w-5xl text-left" y={16}>
              <p className="text-balance text-2xl font-extralight leading-snug tracking-tight text-brand-primary/22 md:text-4xl md:tracking-tighter">
                We build across digital and physical worlds.
              </p>
              <p className="mt-5 text-balance text-2xl font-extralight leading-snug tracking-tight text-brand-primary/22 md:text-4xl md:tracking-tighter">
                From servers to restaurants and retail brands, we turn ideas into
                real products that make everyday life smarter and better.
              </p>
            </Reveal>
          </section>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="rounded-3xl border border-black/[0.07] bg-white/80 p-5 shadow-[0_12px_36px_rgba(150,126,111,0.08)] backdrop-blur-sm md:p-6">
                <button
                  type="button"
                  onClick={() =>
                    setActiveBrand((prev) => (prev === "bomb" ? null : "bomb"))
                  }
                  className="w-full text-left"
                  aria-expanded={activeBrand === "bomb"}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white ring-1 ring-black/5">
                      <Image
                        src="/logos/bomb-hot-dog-logo.png"
                        alt="Bomb Hot Dog logo"
                        width={84}
                        height={84}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold tracking-tight text-brand-primary">
                        Bomb Hot Dog
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-primary/40">
                        @bombhotdog
                      </p>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeBrand === "bomb" ? (
                    <motion.div
                      key="bomb-instagram"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease }}
                      className="mt-4 rounded-2xl border border-brand-secondary/55 bg-white/50 p-3 backdrop-blur-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/bombhotdog/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex w-full items-center justify-between gap-3 rounded-xl bg-brand-primary/10 px-3 py-2 text-sm font-semibold text-brand-primary/90 ring-1 ring-black/5 transition-colors hover:bg-brand-primary/15"
                      >
                        <span>@bombhotdog</span>
                        <span aria-hidden className="text-brand-primary/60">{'->'}</span>
                      </a>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            </Reveal>

            <Reveal>
              <article className="rounded-3xl border border-black/[0.07] bg-white/80 p-5 shadow-[0_12px_36px_rgba(150,126,111,0.08)] backdrop-blur-sm md:p-6">
                <button
                  type="button"
                  onClick={() =>
                    setActiveBrand((prev) => (prev === "alune" ? null : "alune"))
                  }
                  className="w-full text-left"
                  aria-expanded={activeBrand === "alune"}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white ring-1 ring-black/5">
                      <Image
                        src="/logos/alune-active-logo.png"
                        alt="Alune Active logo"
                        width={84}
                        height={84}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold tracking-tight text-brand-primary">
                        Alune Active
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-primary/40">
                        @alune_active
                      </p>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeBrand === "alune" ? (
                    <motion.div
                      key="alune-instagram"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease }}
                      className="mt-4 rounded-2xl border border-brand-secondary/55 bg-white/50 p-3 backdrop-blur-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/alune_active/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex w-full items-center justify-between gap-3 rounded-xl bg-brand-primary/10 px-3 py-2 text-sm font-semibold text-brand-primary/90 ring-1 ring-black/5 transition-colors hover:bg-brand-primary/15"
                      >
                        <span>@alune_active</span>
                        <span aria-hidden className="text-brand-primary/60">{'->'}</span>
                      </a>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <div className="rounded-3xl border border-black/[0.07] bg-gradient-to-r from-brand-secondary/30 via-white to-brand-tertiary/45 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-brand-primary/45">
                Friendly Cat Group
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-brand-primary md:text-2xl">
                Founded in March 2026.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
