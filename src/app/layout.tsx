import type { Metadata } from "next";
import { Playfair_Display, Inter, Black_Han_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

const GA_ID = "G-MC3D4YPDVC";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

const SITE_URL = "https://rug.hanahreum.asia";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hanahreum — Premium Handcrafted Rugs for Architectural Spaces",
    template: "%s | Hanahreum",
  },
  description:
    "Premium handcrafted rugs by Hanahreum. Darken Us to Make Value Shine. Discover timeless textile craftsmanship for architectural spaces worldwide.",
  keywords: [
    "Hanahreum",
    "premium rugs",
    "handcrafted textiles",
    "luxury carpet",
    "B2B wholesale",
    "Korean design",
    "architectural rugs",
    "interior textiles",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hanahreum",
    title: "Hanahreum — Premium Handcrafted Rugs for Architectural Spaces",
    description:
      "Discover timeless textile craftsmanship. Premium rugs designed for architectural spaces worldwide.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Hanahreum premium handcrafted rugs brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanahreum — Premium Handcrafted Rugs",
    description:
      "Discover timeless textile craftsmanship. Premium rugs designed for architectural spaces worldwide.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  other: {
    "naver-site-verification": "126926ad12fc8d6ff48808a1fbaf1870209a98e8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hanahreum",
    alternateName: "Odd Crack",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logos/hanahreum-logo.png`,
    image: `${SITE_URL}/images/og-image.jpg`,
    description:
      "Premium handcrafted rugs crafted for architectural spaces worldwide. Darken Us to Make Value Shine.",
    email: "nicknicksmart@gmail.com",
    telephone: "+82-10-7683-9905",
    address: {
      "@type": "PostalAddress",
      streetAddress: "599, Achasan-ro",
      addressLocality: "Gwangjin-gu",
      addressRegion: "Seoul",
      postalCode: "04968",
      addressCountry: "KR",
    },
    founder: {
      "@type": "Person",
      name: "Yecheon Yie",
    },
    foundingDate: "2019",
    areaServed: ["US", "AU", "CA", "AE", "KR"],
    sameAs: [],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hanahreum",
    url: SITE_URL,
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${blackHanSans.variable}`}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />
      </head>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <SmoothScroll>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:text-sm"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" role="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
