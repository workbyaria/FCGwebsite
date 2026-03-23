import Link from "next/link";

export default function Demo404Page() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-brand-primary/45">404</p>
      <h1 className="mt-3 text-2xl font-semibold text-brand-primary">Page not found</h1>
      <p className="mt-3 text-brand-primary/55">This is a demo route linked from the footer.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </main>
  );
}
