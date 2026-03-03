import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections — Premium Rug Gallery",
  description:
    "Browse Hanahreum's complete rug collections. Signature Wool, Artisan Wash, Raw Cotton, and Deep Monochrome — handcrafted for architectural spaces.",
  alternates: { canonical: "https://rug.hanahreum.asia/collections/" },
  openGraph: {
    title: "Collections — Premium Rug Gallery | Hanahreum",
    description:
      "Browse Hanahreum's complete rug collections — handcrafted for architectural spaces.",
    url: "https://rug.hanahreum.asia/collections/",
    images: [
      {
        url: "https://rug.hanahreum.asia/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanahreum premium rug collections",
      },
    ],
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
