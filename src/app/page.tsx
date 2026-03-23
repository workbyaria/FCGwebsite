import Link from "next/link";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductSpotlight } from "@/components/home/ProductSpotlight";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <main className="bg-white">
      {/* The Breath */}
      <section
        className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
        aria-label="The Breath"
      >
        <Reveal className="max-w-[20ch] text-center">
          <h1 className="text-display font-semibold text-brand-primary">
            Friendly Cat Group
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-xl text-center">
          <p className="text-hero font-light text-brand-primary/45">
            Technology for Humanity.
          </p>
        </Reveal>
      </section>

      <ProductSpotlight />

      <FeaturesSection />

      {/* The Verticals */}
      <section
        id="verticals"
        className="scroll-mt-28 flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 md:scroll-mt-32"
        aria-label="The Verticals"
      >
        <RevealStagger className="flex w-full max-w-4xl flex-col items-center gap-3 md:gap-5">
          <RevealItem className="w-full text-center">
            <Link
              href="/software"
              className="block py-2 text-5xl font-semibold tracking-tight text-brand-primary transition-opacity duration-300 ease-apple hover:opacity-65 md:text-7xl"
            >
              Software
            </Link>
          </RevealItem>
          <RevealItem className="w-full text-center">
            <Link
              href="/wellness"
              className="block py-2 text-5xl font-semibold tracking-tight text-brand-primary transition-opacity duration-300 ease-apple hover:opacity-65 md:text-7xl"
            >
              Wellness
            </Link>
          </RevealItem>
          <RevealItem className="w-full text-center">
            <Link
              href="/impact"
              className="block py-2 text-5xl font-semibold tracking-tight text-brand-primary transition-opacity duration-300 ease-apple hover:opacity-65 md:text-7xl"
            >
              Impact
            </Link>
          </RevealItem>
        </RevealStagger>
      </section>

      {/* The Essence */}
      <section className="flex min-h-[38dvh] flex-col items-center justify-end px-6 pb-20 pt-12">
        <Reveal className="max-w-5xl text-center" y={16}>
          <p className="text-balance text-2xl font-extralight leading-snug tracking-tight text-brand-primary/22 md:text-4xl md:tracking-tighter">
            Creativity. Resilience. Consistency. Execution.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
