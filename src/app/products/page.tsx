"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { IphoneAppFolderShowcase } from "@/components/products/IphoneAppFolderShowcase";

type Tool = {
  id: string;
  name: string;
  category: "Consumer Tools" | "Professional Tools";
  blurb: string;
  details: string;
  accent: string;
  badge: string;
  logoSrc?: string;
  /** Optional container bg when using logo image (default matches NailCalc) */
  logoBgClass?: string;
  /** Use "contain" for circular / non-square marks */
  logoFit?: "cover" | "contain";
};

const TOOLS: Tool[] = [
  {
    id: "spinmeal",
    name: "SpinMeal",
    category: "Consumer Tools",
    blurb: "Instant meal ideas, built for daily decision fatigue.",
    details:
      "SpinMeal helps users decide what to eat in seconds. It combines preference presets, quick randomization, and practical suggestions so dinner planning feels lighter.",
    accent: "from-[#B9EAFF] to-[#E8DDD1]",
    badge: "SM",
    logoSrc: "/logos/spinmeal-logo.png",
    logoBgClass: "bg-[#FDFBF8]",
    logoFit: "contain",
  },
  {
    id: "buycalc",
    name: "BuyCalc",
    category: "Consumer Tools",
    blurb: "A friendly spending calculator for smarter personal choices.",
    details:
      "BuyCalc turns price, usage cycle, and utility into a simple value score. It is designed to reduce impulse buying and make comparison easier for everyday shoppers.",
    accent: "from-[#E8DDD1] to-[#B9EAFF]",
    badge: "BC",
    logoSrc: "/logos/buycalc-logo.png",
    logoBgClass: "bg-white",
    logoFit: "contain",
  },
  {
    id: "nailcalc",
    name: "NailCalc",
    category: "Professional Tools",
    blurb: "Pricing and workload clarity for nail service professionals.",
    details:
      "NailCalc helps nail artists estimate service pricing from time, materials, and complexity. It supports consistent quotations and healthier scheduling.",
    accent: "from-[#CFEFFE] to-[#F5F2ED]",
    badge: "NC",
    logoSrc: "/logos/nailcalc-logo.png",
  },
  {
    id: "lashcalc",
    name: "LashCalc",
    category: "Professional Tools",
    blurb: "Service planning and quote support for lash technicians.",
    details:
      "LashCalc provides structured pricing guidance for lash extensions and maintenance sessions. It helps teams standardize communication and improve booking confidence.",
    accent: "from-[#F5F2ED] to-[#DDEFFC]",
    badge: "LC",
  },
];

function AppLogo({
  badge,
  accent,
  logoSrc,
  name,
  logoBgClass,
  logoFit = "cover",
}: {
  badge: string;
  accent: string;
  logoSrc?: string;
  name: string;
  logoBgClass?: string;
  logoFit?: "cover" | "contain";
}) {
  if (logoSrc) {
    return (
      <div
        className={`grid h-12 w-12 place-items-center overflow-hidden rounded-2xl ring-1 ring-black/5 ${logoBgClass ?? "bg-[#967E6F]"}`}
      >
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={48}
          height={48}
          className={
            logoFit === "contain"
              ? "h-full w-full object-contain p-0.5"
              : "h-full w-full object-cover"
          }
        />
      </div>
    );
  }

  return (
    <div
      className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-xs font-semibold tracking-wide text-brand-primary ring-1 ring-black/5`}
      aria-hidden
    >
      {badge}
    </div>
  );
}

function ToolCard({
  tool,
  expanded,
  onToggle,
}: {
  tool: Tool;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      className="rounded-2xl border border-black/[0.08] bg-white/95 p-4 shadow-[0_6px_30px_rgba(150,126,111,0.08)] backdrop-blur"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-expanded={expanded}
      >
        <div className="flex items-start gap-3">
          <AppLogo
            badge={tool.badge}
            accent={tool.accent}
            logoSrc={tool.logoSrc}
            name={tool.name}
            logoBgClass={tool.logoBgClass}
            logoFit={tool.logoFit}
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-brand-primary">
                {tool.name}
              </h3>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-brand-primary/35">
                {expanded ? "Hide" : "Open"}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-brand-primary/60">
              {tool.blurb}
            </p>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 border-t border-black/[0.06] pt-4 text-sm leading-relaxed text-brand-primary/70">
              {tool.details}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function CategorySection({
  title,
  items,
  expandedId,
  onToggle,
}: {
  title: Tool["category"];
  items: Tool[];
  expandedId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <section className="rounded-[1.5rem] border border-black/[0.07] bg-brand-canvas/65 p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/55">
          {title}
        </h2>
        <span className="text-xs text-brand-primary/35">{items.length} apps</span>
      </div>
      <div className="space-y-3">
        {items.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            expanded={expandedId === tool.id}
            onToggle={() => onToggle(tool.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const [expandedId, setExpandedId] = useState<string | null>("spinmeal");

  const consumer = useMemo(
    () => TOOLS.filter((t) => t.category === "Consumer Tools"),
    []
  );
  const professional = useMemo(
    () => TOOLS.filter((t) => t.category === "Professional Tools"),
    []
  );

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-12">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-primary/40">
            Products
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-brand-primary md:text-6xl">
            Simple, smart tools for consumers and professionals.
          </h1>
        </div>

        <IphoneAppFolderShowcase tools={TOOLS} />

        <div className="grid gap-5 md:grid-cols-2">
          <CategorySection
            title="Consumer Tools"
            items={consumer}
            expandedId={expandedId}
            onToggle={toggle}
          />
          <CategorySection
            title="Professional Tools"
            items={professional}
            expandedId={expandedId}
            onToggle={toggle}
          />
        </div>
      </div>
    </main>
  );
}
