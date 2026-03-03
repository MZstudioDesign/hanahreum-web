import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — The Story Behind Hanahreum",
  description:
    "Meet the team behind Hanahreum. From Korean military origins to a global textile brand — discover our philosophy, timeline, and worldwide network.",
  alternates: { canonical: "https://rug.hanahreum.asia/about/" },
  openGraph: {
    title: "About Us — The Story Behind Hanahreum",
    description:
      "Meet the team behind Hanahreum. From Korean military origins to a global textile brand.",
    url: "https://rug.hanahreum.asia/about/",
    images: [
      {
        url: "https://rug.hanahreum.asia/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanahreum brand story and team",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
