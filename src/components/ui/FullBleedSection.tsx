"use client";

import { ReactNode } from "react";

interface FullBleedSectionProps {
  bgImage?: string;
  bgVideo?: string;
  overlay?: "dark" | "heavy" | "accent" | "gradient";
  className?: string;
  children: ReactNode;
  minHeight?: string;
  id?: string;
}

export default function FullBleedSection({
  bgImage,
  bgVideo,
  overlay = "dark",
  className = "",
  children,
  minHeight = "100vh",
  id,
}: FullBleedSectionProps) {
  const overlayClasses = {
    dark: "bg-black/65",
    heavy: "bg-black/80",
    accent: "bg-[var(--color-accent-dark)]/70",
    gradient: "overlay-dark",
  };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {bgVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={bgImage}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      )}
      {!bgVideo && bgImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      <div className="relative z-10 w-full h-full">{children}</div>
    </section>
  );
}
