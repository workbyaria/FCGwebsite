import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
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
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary/60 transition-colors hover:text-brand-primary/90"
          >
            <span aria-hidden>←</span>
            Home
          </Link>
        </Reveal>

        <div className="mt-12 md:mt-14">
          <Reveal className="max-w-4xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-brand-primary/40">
              About Us
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-brand-primary md:text-6xl">
              Friendly Cat Group
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-primary/60 md:text-lg">
              We build calm, practical technology that turns complexity into friendly daily
              actions.
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

                <p className="text-pretty text-base leading-relaxed text-brand-primary/68">
                  Friendly Cat Group started when I was a junior in college. At that time, I was
                  reading lots of textbooks and writing papers every week. But deep down, I knew
                  what I truly loved was sitting in front of my computer and making things.
                </p>
                <p className="mt-4 text-pretty text-base leading-relaxed text-brand-primary/68">
                  I have always enjoyed turning random ideas in my head into real visions.
                  Sometimes they become paintings or physical products. Sometimes they turn into
                  small tools that help people solve everyday problems.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="h-full rounded-3xl border border-black/[0.07] bg-brand-canvas/70 p-5 shadow-[0_12px_36px_rgba(150,126,111,0.06)] md:p-6">
                <div className="mb-5 rounded-2xl bg-gradient-to-br from-brand-secondary/55 via-white to-brand-tertiary/60 p-4 ring-1 ring-black/[0.05]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-primary/40">
                    Core Belief
                  </p>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-brand-primary/70">
                    I enjoy studying complex things, but I don&apos;t like when life feels
                    complicated. So I build tools that make things simple, friendly, and easy to
                    understand.
                  </p>
                </div>

                <p className="text-pretty text-base leading-relaxed text-brand-primary/68">
                  That moment when someone says, &quot;Oh... this makes sense now,&quot; gives me a
                  ton of happiness and a real sense of accomplishment.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-secondary/45 bg-brand-secondary/20 px-3 py-1.5 text-xs font-medium tracking-wide text-brand-primary/75">
                  Turning complexity into user-friendly tools
                </div>
              </article>
            </Reveal>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-3 md:gap-7">
            <Reveal>
              <article className="h-full rounded-3xl border border-black/[0.07] bg-white/85 p-5 shadow-[0_10px_32px_rgba(150,126,111,0.06)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-primary/40">
                  The Cat
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-brand-primary/68">
                  The name Friendly Cat Group comes from our Siamese cat. He&apos;s smart and
                  independent—sometimes fierce, but always cute and affectionate in his own way.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="h-full rounded-3xl border border-black/[0.07] bg-white/85 p-5 shadow-[0_10px_32px_rgba(150,126,111,0.06)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-primary/40">
                  Why This Name
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-brand-primary/68">
                  At first, it was a joke. Later, I realized it reflects what I believe in: a
                  company that stays kind to people, animals, and the world—even when things get
                  competitive and complicated.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="h-full rounded-3xl border border-black/[0.07] bg-white/85 p-5 shadow-[0_10px_32px_rgba(150,126,111,0.06)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-primary/40">
                  Values
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-brand-primary/68">
                  Execution, creativity, persistence, and consistency support every step of our
                  growth. Business is ultimately about people: understanding people, helping
                  people, and becoming better people.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <div className="rounded-3xl border border-black/[0.07] bg-gradient-to-r from-brand-secondary/30 via-white to-brand-tertiary/45 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-brand-primary/45">
                Friendly Cat Group
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-brand-primary md:text-2xl">
                That is how Friendly Cat Group was born.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
