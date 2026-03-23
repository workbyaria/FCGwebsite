import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary/60 transition-colors hover:text-brand-primary/90"
          >
            <span aria-hidden>←</span>
            Home
          </Link>
        </Reveal>

        <div className="mt-14 md:mt-16">
          <Reveal className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-brand-primary/40">
              About Us
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-brand-primary md:text-6xl">
              Friendly Cat Group
            </h1>
          </Reveal>

          <div className="mt-12 max-w-2xl space-y-9 text-lg leading-[1.85] text-brand-primary/70">
            <Reveal>
              <p className="text-pretty">
                Friendly Cat Group started when I was a junior in college. At that time, I
                was reading lots of textbooks and writing papers every week. But deep down, I
                knew what I truly loved was sitting in front of my computer and making things.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-pretty">
                I have always enjoyed turning random ideas in my head into real visions.
                Sometimes they become paintings or physical products. Sometimes they turn into
                small tools that help people solve everyday problems.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-pretty">
                I enjoy studying complex things, but I don&apos;t like when life feels
                complicated. So I try to make things simple, friendly, and easy to
                understand. That moment when someone says, &quot;Oh... this makes sense now,&quot;
                gives me a ton of happiness and a real sense of accomplishment.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-pretty">
                The name Friendly Cat Group comes from our Siamese cat. He has a very strong
                personality. He&apos;s smart and independent—sometimes fierce, but always cute
                and affectionate in his own way.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-pretty">
                At first, we chose this name as a joke because we always said our cat was
                &quot;friendly.&quot; But later, I realized the name also reflects what I truly
                believe in. I want to build a company that is kind to the world, kind to
                people, and kind to animals. Even when the world feels competitive and
                complicated, I still want to see the goodness in people, appreciate the
                beauty of the world, and respect every form of life.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-pretty">That is how Friendly Cat Group was born.</p>
            </Reveal>

            <Reveal>
              <p className="text-pretty">
                Execution, creativity, persistence, and consistency have always been the values
                that guide me as I grow. I believe business is ultimately about people:
                understanding people, helping people, and becoming better people.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
