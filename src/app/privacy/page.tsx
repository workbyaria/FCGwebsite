import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-2xl font-semibold text-brand-primary">Privacy</h1>
      <p className="mt-3 leading-relaxed text-brand-primary/60">
        This Privacy Policy explains how Friendly Cat Group handles personal
        information when you use this website.
      </p>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          1. What Information We Collect
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We only collect personal information you choose to provide to us.
          For example, if you contact us by email, we may receive your email
          address and the message you send.
        </p>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          This site does not require an account to browse pages.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          2. How We Use Information
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We use the information we receive to respond to your questions,
          improve the website, and maintain the services we provide.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          3. Cookies
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We may use cookies or similar technologies for basic functionality.
          If cookies are used, they help the site work as intended.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          4. Sharing and Disclosure
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We do not sell your personal information. We may share information
          when required by law, to protect rights, or to comply with valid
          legal requests.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          5. Data Security
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We take reasonable technical and organizational measures to help
          protect information from unauthorized access or misuse.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          6. Changes to This Privacy Policy
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We may update this Privacy Policy from time to time. The updated
          version will be posted on this page.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          7. Contact
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          If you have questions, contact us at{" "}
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-brand-primary/80 underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </Link>
          .
        </p>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          This Privacy Policy is a general summary and does not constitute
          legal advice.
        </p>
      </section>
    </main>
  );
}
