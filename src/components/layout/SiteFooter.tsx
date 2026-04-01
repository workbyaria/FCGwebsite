import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, mailtoContact } from "@/lib/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

const pages = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
] as const;

const info = [
  { href: mailtoContact, label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms of use" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/[0.06] bg-white">
      {/* CTA */}
      <div className="bg-brand-secondary/10 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl">
            Get started
          </h2>
          <p className="mt-4 text-base text-brand-primary/55 md:text-lg">
            From ready-to-use SaaS products to fully customized digital systems for your business.
          </p>
          <div className="mt-8">
            <Link
              href={mailtoContact}
              className="inline-flex rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-[transform,opacity] duration-200 ease-apple hover:bg-brand-primary/90 active:scale-[0.99]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer card */}
      <div className="px-6 pb-12 pt-16">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-black/[0.06] bg-brand-canvas/90 p-7 shadow-[0_12px_40px_rgba(150,126,111,0.06)] md:p-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr] md:gap-10 lg:gap-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5">
                <Image
                  src="/fcg-logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg object-contain"
                />
                <span className="text-lg font-semibold tracking-tight text-brand-primary">
                  Friendly Cat Group
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-primary/55">
                Technology for humanity — Turning complexity into user-friendly tools.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.instagram.com/friendlycatgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white transition-opacity hover:opacity-85"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white transition-opacity hover:opacity-85"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white transition-opacity hover:opacity-85"
                  aria-label="X"
                >
                  <XIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary/45">
                Pages
              </h3>
              <ul className="mt-4 space-y-2.5">
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-sm font-medium text-brand-primary/75 transition-colors hover:text-brand-primary"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary/45">
                Information
              </h3>
              <ul className="mt-4 space-y-2.5">
                {info.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="text-sm font-medium text-brand-primary/75 transition-colors hover:text-brand-primary"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-black/[0.08] pt-8">
            <div className="flex flex-col items-center text-xs text-brand-primary/45">
              <p>
                © {year} Friendly Cat Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
