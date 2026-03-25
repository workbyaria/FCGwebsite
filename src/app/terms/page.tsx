import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-2xl font-semibold text-brand-primary">Terms of Use</h1>
      <p className="mt-3 leading-relaxed text-brand-primary/60">
        These Terms of Use govern your use of this website. By accessing or using
        the site, you agree to these terms.
      </p>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          1. Acceptance of Terms
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          If you do not agree, please do not use the site.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          2. Use of the Site
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          You agree to use the site in a lawful and respectful manner. You must
          not attempt to interfere with the website, its security, or any
          services connected to it.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          3. Intellectual Property
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          The content, logos, and designs on this site are owned by Friendly Cat
          Group or used under license. You may not copy, modify, distribute, or
          reuse them without permission, except where permitted by law.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          4. Disclaimers
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          This site is provided &quot;as is&quot; and &quot;as available.&quot; We do not make
          warranties of any kind, whether express or implied, regarding the site
          or any information shown on it.
        </p>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          Any tools, features, or information are for general purposes. They are
          not professional advice.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          5. Limitation of Liability
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          To the maximum extent permitted by law, Friendly Cat Group will not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits, data, or revenue, resulting from your
          use of the site.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          6. Third-Party Links
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          The site may contain links to third-party websites. We are not
          responsible for those sites or their content.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          7. Changes to These Terms
        </h2>
        <p className="mt-3 leading-relaxed text-brand-primary/70">
          We may update these Terms of Use from time to time. The updated version
          will be posted on this page with the date of change (if applicable).
          Your continued use means you accept the updates.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary/45">
          8. Contact
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
      </section>
    </main>
  );
}
