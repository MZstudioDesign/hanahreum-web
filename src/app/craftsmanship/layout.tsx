import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Craftsmanship — Materials & Process",
  description:
    "Explore the five signature materials and meticulous production process behind every Hanahreum rug. From faux cashmere to wool-silk blends.",
  alternates: { canonical: "https://rug.hanahreum.asia/craftsmanship/" },
  openGraph: {
    title: "Craftsmanship — Materials & Process | Hanahreum",
    description:
      "Explore the five signature materials and meticulous process behind every Hanahreum rug.",
    url: "https://rug.hanahreum.asia/craftsmanship/",
    images: [
      {
        url: "https://rug.hanahreum.asia/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanahreum craftsmanship and textile materials",
      },
    ],
  },
};

export default function CraftsmanshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
