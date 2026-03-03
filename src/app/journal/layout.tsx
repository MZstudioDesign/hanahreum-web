import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Insights & Research",
  description:
    "Read industry insights, material research, and brand stories from Hanahreum. Expert perspectives on textile craftsmanship and interior design.",
  alternates: { canonical: "https://rug.hanahreum.asia/journal/" },
  openGraph: {
    title: "Journal — Insights & Research | Hanahreum",
    description:
      "Industry insights, material research, and brand stories from Hanahreum.",
    url: "https://rug.hanahreum.asia/journal/",
    images: [
      {
        url: "https://rug.hanahreum.asia/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanahreum journal and industry insights",
      },
    ],
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
