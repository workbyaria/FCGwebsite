import { Reveal } from "@/components/motion/Reveal";

type VerticalEntryProps = {
  title: string;
};

export function VerticalEntry({ title }: VerticalEntryProps) {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-white px-6 pb-16 pt-8">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Reveal delay={0.05}>
          <h1 className="text-center text-6xl font-semibold tracking-tight text-brand-primary md:text-8xl">
            {title}
          </h1>
        </Reveal>
      </div>
    </main>
  );
}
