import type { Metadata } from "next";
import { Playfair_Display, Inter, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

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

export const metadata: Metadata = {
  title: "Hanahreum — Timeless Beauty, Crafted for Spaces",
  description:
    "Premium handcrafted rugs by Hanahreum. Darken Us to Make Value Shine. Searching The Essence of textile craftsmanship for architectural spaces worldwide.",
  keywords: [
    "Hanahreum",
    "premium rugs",
    "handcrafted textiles",
    "luxury carpet",
    "B2B wholesale",
    "Korean design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${blackHanSans.variable}`}
    >
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
