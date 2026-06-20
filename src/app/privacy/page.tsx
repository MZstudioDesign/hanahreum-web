import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hanahreum collects, uses, shares, and protects personal information on rug.hanahreum.asia, including rights for visitors in Korea, the United States, Australia, Canada, and the UAE.",
  alternates: { canonical: "https://rug.hanahreum.asia/privacy/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Hanahreum",
    description:
      "How Hanahreum collects, uses, shares, and protects personal information on rug.hanahreum.asia.",
    url: "https://rug.hanahreum.asia/privacy/",
  },
};

const LAST_UPDATED = "June 20, 2026";
const CONTACT_EMAIL = "nicknicksmart@gmail.com";

/* ── small presentational helpers (server component, plain functions) ── */

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-display text-2xl md:text-3xl text-[var(--color-text-primary)] mb-5 mt-16 first:mt-0"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm tracking-[0.18em] uppercase text-[var(--color-accent-light)] mb-3 mt-8">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-4">
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-4 marker:text-[var(--color-accent-dark)]">
      {children}
    </ul>
  );
}

function S({ children }: { children: React.ReactNode }) {
  return <strong className="text-[var(--color-text-primary)] font-medium">{children}</strong>;
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
    >
      {children}
    </a>
  );
}

const TOC: { id: string; label: string }[] = [
  { id: "who-we-are", label: "1. Who we are" },
  { id: "scope", label: "2. Scope of this policy" },
  { id: "what-we-collect", label: "3. Information we collect" },
  { id: "how-we-use", label: "4. How we use information" },
  { id: "legal-bases", label: "5. Legal bases" },
  { id: "cookies", label: "6. Cookies, analytics & advertising" },
  { id: "sharing", label: "7. How we share information" },
  { id: "transfers", label: "8. International data transfers" },
  { id: "retention", label: "9. Data retention" },
  { id: "security", label: "10. Security" },
  { id: "your-rights", label: "11. Your privacy rights" },
  { id: "do-not-sell-share", label: "12. Do Not Sell or Share (US)" },
  { id: "children", label: "13. Children's privacy" },
  { id: "regional", label: "14. Region-specific notices" },
  { id: "changes", label: "15. Changes to this policy" },
  { id: "contact", label: "16. How to contact us" },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 pb-16 md:pt-48 md:pb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-6">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[var(--color-text-primary)] mb-6">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-[var(--color-text-muted)] tracking-wide">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-4">
            <Link
              href="/privacy/ko/"
              className="text-sm text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              한국어로 보기 →
            </Link>
          </p>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="lg:col-span-4 xl:col-span-3"
          >
            <div className="lg:sticky lg:top-28">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">
                Contents
              </p>
              <ul className="space-y-3">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Body */}
          <article className="lg:col-span-8 xl:col-span-9 max-w-3xl">
            <P>
              This Privacy Policy explains how <S>Hanahreum</S> — a brand operated
              by <S>LOMF</S>, an individual business registered in Seoul,
              Republic of Korea (business registration no. 774-14-01878)
              (&ldquo;Hanahreum,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) — collects,
              uses, shares, and protects personal information through the website{" "}
              <S>rug.hanahreum.asia</S> (the &ldquo;Site&rdquo;). We have written
              it to reflect the requirements of the privacy laws of the
              jurisdictions our visitors come from, including the Republic of
              Korea, the United States, Australia, Canada, and the United Arab
              Emirates.
            </P>

            <H2 id="who-we-are">1. Who we are</H2>
            <P>
              The controller responsible for your personal information is:
            </P>
            <UL>
              <li>
                <S>Business:</S> LOMF — an individual business (sole
                proprietorship) registered in the Republic of Korea
              </li>
              <li>
                <S>Business registration no.:</S> 774-14-01878
              </li>
              <li>
                <S>Brand:</S> Hanahreum
              </li>
              <li>
                <S>Address:</S> 599, Achasan-ro, Gwangjin-gu, Seoul 04968,
                Republic of Korea
              </li>
              <li>
                <S>Privacy contact / Personal Information Protection Officer:</S>{" "}
                Nick Yie —{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                · +82 10-7683-9905
              </li>
            </UL>

            <H2 id="scope">2. Scope of this policy</H2>
            <P>
              This policy applies only to the Site (rug.hanahreum.asia), which is
              a brand and business-partnership website. <S>It does not apply to
              purchases of our products made through third-party marketplaces
              such as Amazon.</S> When you buy a Hanahreum product on Amazon or
              any other marketplace, that platform&apos;s own privacy policy
              governs the personal information you provide to it (such as payment,
              shipping, and order details). We never receive your payment card
              details through this Site.
            </P>

            <H2 id="what-we-collect">3. Information we collect</H2>
            <H3>Information you provide to us</H3>
            <P>
              When you submit our partnership / contact form, we collect the{" "}
              <S>full name</S>, <S>company name</S> (optional), <S>email
              address</S>, area of <S>interest</S>, and the <S>message</S> you
              choose to send. The form is processed using <S>Google Forms</S> (a
              service of Google LLC), so the information you enter is transmitted
              to and stored by Google on our behalf.
            </P>
            <H3>Information collected automatically</H3>
            <P>When you visit the Site, certain information is collected automatically:</P>
            <UL>
              <li>
                <S>Usage and device data via Google Analytics 4</S> — including
                your IP address (typically truncated/anonymized by Google),
                device and browser type, pages viewed, referring pages, approximate
                location, and interactions, collected through cookies and similar
                technologies.
              </li>
              <li>
                <S>Advertising and remarketing data via Google&apos;s
                advertising services</S> (Google Ads / Google Signals) — used to
                measure campaigns and to show you Hanahreum advertising on other
                websites and apps (cross-context behavioral advertising).
              </li>
              <li>
                <S>Server and security logs</S> — the Site is hosted on GitHub
                Pages (GitHub, Inc.), which may record standard technical
                information such as IP address and request details for delivery
                and security.
              </li>
            </UL>
            <P>
              We use a <S>Naver Search site-verification</S> meta tag to verify
              ownership of the Site with the Naver search engine. It does not
              collect personal information about you.
            </P>
            <P>
              We do not intentionally collect special categories of sensitive
              personal information (such as health, religion, precise geolocation,
              or government identifiers) through this Site, and we ask that you do
              not include such information in the free-text message field.
            </P>

            <H2 id="how-we-use">4. How we use information</H2>
            <P>We use personal information for the following purposes:</P>
            <UL>
              <li>
                To <S>respond to your inquiry</S> and to evaluate, establish, and
                manage a potential business or partnership relationship with you.
              </li>
              <li>
                To <S>measure and improve</S> the performance, content, and user
                experience of the Site (analytics).
              </li>
              <li>
                To <S>market our brand</S>, including advertising and remarketing
                on third-party platforms.
              </li>
              <li>
                To <S>operate and secure</S> the Site, prevent abuse, and maintain
                technical reliability.
              </li>
              <li>
                To <S>comply with applicable laws</S> and respond to lawful
                requests or to establish, exercise, or defend legal claims.
              </li>
            </UL>

            <H2 id="legal-bases">5. Legal bases for processing</H2>
            <P>
              Where the law requires us to identify a legal basis, we rely on:
            </P>
            <UL>
              <li>
                <S>Your consent</S> — for non-essential cookies, analytics, and
                advertising / remarketing. You can withdraw consent at any time
                (see <a href="#cookies" className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)]">Section 6</a>).
              </li>
              <li>
                <S>Performance of, or steps toward, a contract</S> — to respond to
                your partnership inquiry at your request.
              </li>
              <li>
                <S>Legitimate interests</S> — to keep the Site secure and
                functioning, and to understand how it is used, balanced against
                your rights.
              </li>
              <li>
                <S>Legal obligation</S> — where we must process information to meet
                a legal requirement.
              </li>
            </UL>

            <H2 id="cookies">6. Cookies, analytics &amp; advertising</H2>
            <P>
              The Site uses cookies and similar technologies through{" "}
              <S>Google Analytics 4</S> and <S>Google&apos;s advertising
              services</S> (Google Ads / Google Signals). These technologies can
              identify your browser or device, analyze your activity, and build an
              interest profile used for targeted (cross-context behavioral)
              advertising.
            </P>
            <H3>How to control or deactivate these technologies</H3>
            <P>
              You can refuse or disable these technologies at any time using the
              following tools — they take effect on your browser or Google account
              without needing to contact us:
            </P>
            <UL>
              <li>
                <S>Browser settings</S> — block or delete cookies in your
                browser&apos;s privacy settings.
              </li>
              <li>
                <S>Google Analytics Opt-out Browser Add-on</S> —{" "}
                <Ext href="https://tools.google.com/dlpage/gaoptout">
                  tools.google.com/dlpage/gaoptout
                </Ext>
                .
              </li>
              <li>
                <S>Google Ad settings (My Ad Center)</S> — turn off personalized
                advertising at{" "}
                <Ext href="https://myadcenter.google.com/">
                  myadcenter.google.com
                </Ext>{" "}
                and{" "}
                <Ext href="https://adssettings.google.com/">
                  adssettings.google.com
                </Ext>
                .
              </li>
              <li>
                <S>Global Privacy Control (GPC)</S> — you may use a browser or
                extension that sends a{" "}
                <Ext href="https://globalprivacycontrol.org/">GPC</Ext> signal;
                where required by law we treat it as a request to opt out of the
                &ldquo;sharing&rdquo; of your personal information for advertising.
              </li>
              <li>
                <S>Contact us</S> — email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                and we will act on your request to stop analytics or advertising
                processing associated with you.
              </li>
            </UL>
            <P>
              For more on how Google processes data, see{" "}
              <Ext href="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites that use its services
              </Ext>{" "}
              and the{" "}
              <Ext href="https://policies.google.com/privacy">
                Google Privacy Policy
              </Ext>
              .
            </P>

            <H2 id="sharing">7. How we share information</H2>
            <P>
              We do <S>not sell your personal information for money.</S> We share
              personal information only with the service providers that operate
              the Site on our behalf, and only as needed:
            </P>
            <UL>
              <li>
                <S>Google LLC</S> (United States) — Google Forms (contact-form
                submissions), Google Analytics 4 (usage data), and Google
                advertising services (advertising / remarketing).
              </li>
              <li>
                <S>GitHub, Inc.</S> (United States) — website hosting (GitHub
                Pages) and associated server logs.
              </li>
            </UL>
            <P>
              Because the Site shares online identifiers with Google for
              cross-context behavioral advertising, this activity may be
              considered a &ldquo;<S>sale</S>&rdquo; or &ldquo;<S>share</S>&rdquo;
              under certain U.S. state laws even though no money is exchanged. See{" "}
              <a href="#do-not-sell-share" className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)]">Section 12</a>{" "}
              for how to opt out. We may also disclose information where required
              by law or to protect our legal rights.
            </P>

            <H2 id="transfers">8. International data transfers</H2>
            <P>
              We are based in the Republic of Korea, and our service providers
              (Google and GitHub) are based in the <S>United States</S> and may
              process your information in the United States and other countries
              where they operate. As a result, your personal information may be
              transferred outside your country of residence — including outside
              Korea, the EEA/UK, Australia, Canada, and the UAE — to countries
              whose data-protection laws may differ from your own, and where
              government authorities may, under local law, be able to access it.
            </P>
            <P>
              Where such transfers occur, we rely on the safeguards and
              contractual data-protection terms offered by Google and GitHub, and,
              where required, on your consent or on the necessity of the transfer
              to provide the service you requested.
            </P>

            <H2 id="retention">9. Data retention</H2>
            <UL>
              <li>
                <S>Contact-form submissions</S> are kept for as long as necessary
                to handle your inquiry and any resulting relationship, and are
                then deleted, unless a longer period is required by law.
              </li>
              <li>
                <S>Analytics and advertising data</S> are retained according to
                the retention controls configured in Google Analytics (by default
                between 2 and 14 months) and in line with Google&apos;s policies.
              </li>
              <li>
                <S>Server logs</S> are retained for a limited period for security
                and operational purposes.
              </li>
            </UL>

            <H2 id="security">10. Security</H2>
            <P>
              We take reasonable technical and organizational measures designed to
              protect personal information against unauthorized access, loss,
              alteration, or disclosure, and we rely on the security measures of
              the established providers (Google, GitHub) we use. No method of
              transmission or storage is completely secure, so we cannot guarantee
              absolute security.
            </P>

            <H2 id="your-rights">11. Your privacy rights</H2>
            <P>
              Depending on where you live, you may have some or all of the
              following rights regarding your personal information:
            </P>
            <UL>
              <li><S>Access</S> the personal information we hold about you</li>
              <li><S>Correct / rectify</S> inaccurate or incomplete information</li>
              <li><S>Delete / erase</S> your personal information</li>
              <li><S>Restrict or object to</S>, or request that we <S>stop</S>, certain processing</li>
              <li><S>Withdraw consent</S> at any time, without affecting prior processing</li>
              <li><S>Data portability</S> — receive your data in a portable format</li>
              <li><S>Opt out</S> of the sale or sharing of personal information and of targeted advertising</li>
              <li><S>Not be discriminated against</S> for exercising your rights</li>
              <li><S>Lodge a complaint</S> with your data-protection authority</li>
            </UL>
            <P>
              To exercise any of these rights, email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
              . We will respond within the time required by applicable law. We may
              need to verify your identity before acting on a request. You may also
              use an authorized agent where the law permits.
            </P>

            <H2 id="do-not-sell-share">12. Do Not Sell or Share My Personal Information (United States)</H2>
            <P>
              We do not sell your personal information for money. However, our use
              of Google advertising / remarketing may be treated as
              &ldquo;sharing&rdquo; (or a &ldquo;sale&rdquo;) for cross-context
              behavioral advertising under U.S. state privacy laws such as the
              California Consumer Privacy Act (as amended by the CPRA). You can opt
              out of this activity by:
            </P>
            <UL>
              <li>
                Turning off personalized advertising in{" "}
                <Ext href="https://myadcenter.google.com/">Google My Ad Center</Ext>{" "}
                and using the{" "}
                <Ext href="https://tools.google.com/dlpage/gaoptout">
                  Google Analytics Opt-out Add-on
                </Ext>
                ;
              </li>
              <li>
                Enabling a{" "}
                <Ext href="https://globalprivacycontrol.org/">
                  Global Privacy Control (GPC)
                </Ext>{" "}
                signal in your browser, which we honor as an opt-out where required
                by law; or
              </li>
              <li>
                Emailing{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                with the subject &ldquo;Do Not Sell or Share My Personal
                Information.&rdquo;
              </li>
            </UL>
            <P>
              As a business that operates exclusively online, we accept these
              requests by email and do not maintain a toll-free number. We will not
              discriminate against you for exercising this right.
            </P>

            <H2 id="children">13. Children&apos;s privacy</H2>
            <P>
              The Site is intended for businesses and adults and is not directed to
              children. We do not knowingly collect personal information from
              children under 13 (or under 14 where Korean law applies). If you
              believe a child has provided us personal information, contact us and
              we will delete it.
            </P>

            <H2 id="regional">14. Region-specific notices</H2>

            <H3>Republic of Korea (PIPA)</H3>
            <P>
              We process personal information in accordance with the Personal
              Information Protection Act (PIPA). Our <S>Personal Information
              Protection Officer</S> is Nick Yie (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
              ). Your personal information is transferred overseas to Google LLC
              and GitHub, Inc. (United States) for the purposes, items, and
              retention periods described above; by using the contact form and the
              Site you are informed of this overseas transfer. You may access,
              correct, delete, or suspend the processing of your personal
              information, and withdraw consent, at any time. You may report
              concerns to the Korea Internet &amp; Security Agency Privacy
              Infringement Report Center (call 118 /{" "}
              <Ext href="https://privacy.kisa.or.kr">privacy.kisa.or.kr</Ext>), the
              Personal Information Dispute Mediation Committee (
              <Ext href="https://www.kopico.go.kr">kopico.go.kr</Ext>), or the
              Personal Information Protection Commission (
              <Ext href="https://www.pipc.go.kr">pipc.go.kr</Ext>).
            </P>

            <H3>United States — California &amp; other states</H3>
            <P>
              California residents have rights under the CCPA/CPRA to know, access,
              delete, and correct their personal information, and to opt out of its
              sale or sharing (see <a href="#do-not-sell-share" className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)]">Section 12</a>). The categories of personal
              information we collect are identifiers (name, email), commercial /
              professional information (company), and internet/network activity
              (usage and device data); the sources, purposes, and recipients are
              described in Sections 3, 4, and 7. We do not use sensitive personal
              information to infer characteristics. Residents of other U.S. states
              with comprehensive privacy laws have comparable rights, which you may
              exercise using the contact details above. You may complain to the
              California Privacy Protection Agency (
              <Ext href="https://cppa.ca.gov">cppa.ca.gov</Ext>), the California
              Attorney General (
              <Ext href="https://oag.ca.gov/privacy/ccpa">oag.ca.gov</Ext>), or
              your state attorney general.
            </P>

            <H3>Australia (Privacy Act &amp; APPs)</H3>
            <P>
              We handle personal information consistent with the Australian Privacy
              Principles. The kinds of personal information we collect, and how we
              collect, hold, use, and disclose it, are described above. We are
              likely to disclose personal information to overseas recipients
              located in the <S>United States</S> (Google LLC and GitHub, Inc.).
              You may request access to or correction of your personal information,
              and opt out of direct marketing, by contacting us. If you have a
              complaint, please contact us first; if you are not satisfied, you may
              contact the Office of the Australian Information Commissioner (
              <Ext href="https://www.oaic.gov.au/privacy/privacy-complaints">
                oaic.gov.au
              </Ext>{" "}
              · 1300 363 992).
            </P>

            <H3>Canada (PIPEDA) &amp; Quebec (Law 25)</H3>
            <P>
              We handle personal information in the course of commercial activity
              in accordance with PIPEDA and, for individuals located in Quebec, the
              Act respecting the protection of personal information in the private
              sector (Law 25). The person accountable for our personal-information
              practices, and to whom access requests and complaints may be sent, is
              Nick Yie (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
              ). Your personal information is processed and stored outside Canada,
              in the <S>United States</S> (Google LLC, GitHub, Inc.), where it may
              be accessible to foreign authorities under local law. As noted in{" "}
              <a href="#cookies" className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)]">Section 6</a>, we use technologies (Google Analytics, Google
              advertising / Signals) that can identify, locate, or profile you for
              analytics and advertising; you can deactivate them using the tools
              listed there. Quebec residents also have rights of access,
              rectification, erasure / de-indexing, data portability, and
              withdrawal of consent. You may complain to the Office of the Privacy
              Commissioner of Canada (
              <Ext href="https://www.priv.gc.ca">priv.gc.ca</Ext>) or, for Quebec,
              the Commission d&apos;accès à l&apos;information du Québec (
              <Ext href="https://www.cai.gouv.qc.ca">cai.gouv.qc.ca</Ext>).
            </P>

            <H3>United Arab Emirates (PDPL)</H3>
            <P>
              To the extent UAE Federal Decree-Law No. 45 of 2021 on the Protection
              of Personal Data (and its forthcoming Executive Regulations) applies
              to our processing of UAE residents&apos; personal data, we honor the
              rights it grants — including access, rectification, erasure,
              restriction, data portability, objection to automated
              processing/profiling, and withdrawal of consent. Transfers of your
              data to Google LLC and GitHub, Inc. (United States) are made on the
              basis of your consent and the contractual safeguards of those
              providers. UAE residents may raise concerns with the UAE Data Office
              (see the UAE government data-protection portal at{" "}
              <Ext href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws">
                u.ae
              </Ext>
              ; the Telecommunications and Digital Government Regulatory Authority,{" "}
              <Ext href="https://tdra.gov.ae">tdra.gov.ae</Ext>, currently acts as a
              point of contact).
            </P>

            <H2 id="changes">15. Changes to this policy</H2>
            <P>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date at the top of this
              page, and material changes will be reflected here. Your continued use
              of the Site after an update means you accept the revised policy.
            </P>

            <H2 id="contact">16. How to contact us</H2>
            <P>
              For any question or request regarding this Privacy Policy or your
              personal information, contact our Privacy Officer:
            </P>
            <UL>
              <li>
                <S>Email:</S>{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li><S>Phone:</S> +82 10-7683-9905</li>
              <li>
                <S>Post:</S> Hanahreum (LOMF), 599, Achasan-ro, Gwangjin-gu,
                Seoul 04968, Republic of Korea
              </li>
            </UL>

            <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
              <Link
                href="/"
                className="text-sm tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                ← Back to home
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
