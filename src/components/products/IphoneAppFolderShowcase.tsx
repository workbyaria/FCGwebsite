"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";

export type FolderShowcaseTool = {
  id: string;
  name: string;
  badge: string;
  accent: string;
  logoSrc?: string;
  logoBgClass?: string;
  logoFit?: "cover" | "contain";
};

const PLACEHOLDER_LABELS = ["Soon", "Soon", "Soon", "Soon", "Soon"] as const;

function SquircleIcon({
  tool,
  size,
}: {
  tool: FolderShowcaseTool;
  size: "micro" | "grid";
}) {
  const px = size === "micro" ? 22 : 52;
  const rounded = size === "micro" ? "rounded-[7px]" : "rounded-2xl";
  const textSize = size === "micro" ? "text-[7px]" : "text-[11px]";

  if (tool.logoSrc) {
    const fit = tool.logoFit ?? "cover";
    const bg = tool.logoBgClass ?? "bg-[#967E6F]";
    return (
      <div
        className={`grid shrink-0 place-items-center overflow-hidden ring-1 ring-black/[0.06] ${rounded} ${bg}`}
        style={{ width: px, height: px }}
      >
        <Image
          src={tool.logoSrc}
          alt=""
          width={px}
          height={px}
          className={
            fit === "contain"
              ? "h-full w-full object-contain p-px"
              : "h-full w-full object-cover"
          }
        />
      </div>
    );
  }

  return (
    <div
      className={`grid shrink-0 place-items-center bg-gradient-to-br ${tool.accent} font-semibold tracking-wide text-brand-primary ring-1 ring-black/[0.06] ${rounded} ${textSize}`}
      style={{ width: px, height: px }}
      aria-hidden
    >
      {tool.badge}
    </div>
  );
}

function PlaceholderIcon({ size }: { size: "micro" | "grid" }) {
  const px = size === "micro" ? 22 : 52;
  const rounded = size === "micro" ? "rounded-[7px]" : "rounded-2xl";
  const textSize = size === "micro" ? "text-[6px]" : "text-[9px]";

  return (
    <div
      className={`grid shrink-0 place-items-center bg-white/45 text-brand-primary/38 ring-1 ring-black/[0.05] backdrop-blur-sm ${rounded} ${textSize} font-medium`}
      style={{ width: px, height: px }}
      aria-hidden
    >
      Soon
    </div>
  );
}

export function IphoneAppFolderShowcase({ tools }: { tools: FolderShowcaseTool[] }) {
  const reduceMotion = useReducedMotion();
  const labelId = useId();
  const [open, setOpen] = useState(false);

  const previewTools = tools.slice(0, 4);
  const previewPlaceholders = 4 - previewTools.length;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const spring = reduceMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.85 };

  return (
    <section
      className="mb-20 md:mb-24"
      aria-labelledby={labelId}
    >
      <p
        id={labelId}
        className="mb-5 text-center text-sm text-brand-primary/50"
      >
        Tap the folder, like on your iPhone.
      </p>

      <div className="mx-auto flex max-w-[min(100%,320px)] justify-center">
        <div className="w-full rounded-[2.65rem] bg-[#1b1b1d] p-[10px] shadow-[0_28px_80px_rgba(30,28,26,0.28)] ring-1 ring-white/[0.06]">
          <div
            className="relative aspect-[9/19.2] w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-[#dbe7f3] via-[#e8f1fb] to-[#f3ebe4]"
            role="presentation"
          >
            <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center">
              <div className="h-7 w-[92px] rounded-full bg-black/88 shadow-sm ring-1 ring-black/20" />
            </div>

            <div className="pointer-events-none flex items-center justify-between px-5 pt-10 text-[11px] font-semibold tracking-wide text-brand-primary/75">
              <span>9:41</span>
              <div className="flex items-center gap-1 opacity-80">
                <span className="inline-block h-2 w-3 rounded-sm bg-brand-primary/35" />
                <span className="inline-block h-2 w-3 rounded-sm bg-brand-primary/35" />
                <span className="inline-block h-2 w-4 rounded-sm bg-brand-primary/45" />
              </div>
            </div>

            <div className="relative z-0 flex h-[calc(100%-5.5rem)] flex-col px-4 pb-6 pt-6">
              <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-brand-primary/40">
                Home
              </p>

              <div className="mt-8 flex flex-1 flex-col items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-expanded={open}
                  aria-haspopup="dialog"
                  className="group relative w-[76px] rounded-[22px] border border-white/55 bg-white/35 p-2 shadow-[0_12px_40px_rgba(80,90,110,0.12)] outline-none backdrop-blur-xl transition-[transform,box-shadow] duration-300 ease-apple hover:bg-white/45 hover:shadow-[0_16px_48px_rgba(80,90,110,0.16)] focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.97]"
                >
                  <div className="grid grid-cols-2 gap-1 place-items-center">
                    {previewTools.map((t) => (
                      <SquircleIcon key={t.id} tool={t} size="micro" />
                    ))}
                    {Array.from({ length: previewPlaceholders }).map((_, i) => (
                      <PlaceholderIcon key={`p-${i}`} size="micro" />
                    ))}
                  </div>
                  <span className="mt-2 block truncate text-center text-[9px] font-semibold text-brand-primary/55">
                    FCG Apps
                  </span>
                </button>
              </div>

              <div className="pointer-events-none mt-auto flex justify-center pb-1">
                <div className="h-1 w-28 rounded-full bg-brand-primary/22" />
              </div>
            </div>

            <AnimatePresence>
              {open ? (
                <motion.div
                  key="overlay"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Apps in folder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
                  className="absolute inset-0 z-20 flex flex-col bg-black/38 backdrop-blur-[14px]"
                >
                  <button
                    type="button"
                    aria-label="Close folder"
                    onClick={close}
                    className="absolute inset-0 z-0 cursor-default"
                  />

                  <motion.div
                    initial={reduceMotion ? false : { scale: 0.88, opacity: 0, y: 24 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { scale: 0.92, opacity: 0, y: 16 }}
                    transition={spring}
                    className="relative z-10 m-auto flex w-[min(92%,260px)] max-h-[78%] flex-col rounded-[1.85rem] border border-white/55 bg-white/78 p-4 shadow-[0_24px_70px_rgba(30,28,26,0.22)] backdrop-blur-2xl"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold tracking-tight text-brand-primary">
                        Friendly Cat Group
                      </p>
                      <button
                        type="button"
                        onClick={close}
                        className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary/80 transition-colors hover:bg-brand-primary/15"
                      >
                        Done
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-x-3 gap-y-4 overflow-y-auto pb-1 pt-1 [scrollbar-width:thin]">
                      {tools.map((t, i) => (
                        <motion.div
                          key={t.id}
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: reduceMotion ? 0 : 0.04 + i * 0.035,
                            duration: reduceMotion ? 0.01 : 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="flex flex-col items-center gap-1.5 text-center"
                        >
                          <SquircleIcon tool={t} size="grid" />
                          <span className="max-w-[4.75rem] truncate text-[10px] font-medium leading-tight text-brand-primary/70">
                            {t.name}
                          </span>
                        </motion.div>
                      ))}
                      {PLACEHOLDER_LABELS.map((_, i) => (
                        <motion.div
                          key={`g-${i}`}
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: reduceMotion ? 0 : 0.12 + (tools.length + i) * 0.03,
                            duration: reduceMotion ? 0.01 : 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="flex flex-col items-center gap-1.5 text-center"
                        >
                          <PlaceholderIcon size="grid" />
                          <span className="max-w-[4.75rem] truncate text-[10px] font-medium leading-tight text-brand-primary/38">
                            Coming soon
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
