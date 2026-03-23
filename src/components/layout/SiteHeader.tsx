import Image from "next/image";
import Link from "next/link";
import { mailtoContact } from "@/lib/site";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
] as const;

export function SiteHeader() {
  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5"
      role="banner"
    >
      <div
        className="pointer-events-auto grid w-full max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full border border-white/55 bg-gradient-to-b from-white/55 to-brand-secondary/[0.14] px-2 py-2 shadow-[0_8px_40px_rgba(185,234,255,0.22),0_1px_0_rgba(255,255,255,0.65)_inset] backdrop-blur-xl backdrop-saturate-150 ring-1 ring-brand-secondary/35 sm:gap-2 md:grid-cols-[1fr_auto_1fr] md:gap-3 md:px-4 md:py-2.5 lg:px-5"
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-full outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white md:justify-self-start md:gap-3"
        >
          <Image
            src="/fcg-logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-[11px] object-contain"
          />
          <span className="truncate text-sm font-semibold tracking-tight text-brand-primary md:text-[0.95rem]">
            <span className="md:hidden">FCG</span>
            <span className="hidden md:inline">Friendly Cat Group</span>
          </span>
        </Link>

        <nav
          className="flex min-w-0 items-center justify-center gap-0 sm:gap-0.5 md:justify-self-center md:gap-1"
          aria-label="主要導覽"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-1 py-1.5 text-center text-[0.58rem] font-medium text-brand-primary/70 transition-colors duration-200 ease-apple hover:bg-brand-secondary/25 hover:text-brand-primary sm:px-2 sm:text-[0.72rem] md:px-2.5 md:text-[0.78rem] lg:px-3 lg:text-[0.8125rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center md:justify-self-end">
          <Link
            href={mailtoContact}
            className="rounded-full bg-brand-secondary px-3.5 py-1.5 text-xs font-semibold text-brand-primary shadow-[0_1px_0_rgba(255,255,255,0.55)_inset] transition-[transform,box-shadow] duration-200 ease-apple hover:brightness-[1.03] active:scale-[0.98] md:px-4 md:text-[0.8125rem]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
