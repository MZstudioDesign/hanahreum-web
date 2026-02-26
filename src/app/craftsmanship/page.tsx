"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullBleedSection from "@/components/ui/FullBleedSection";
import MaterialExpandCards from "@/components/sections/MaterialExpandCards";

const processes = [
  {
    step: "01",
    title: "Fiber Selection",
    description:
      "Every masterpiece begins at the source. We source exclusively from heritage flocks in New Zealand, Patagonia, and the highlands of Scotland. Fiber diameter, crimp frequency, and lanolin content are measured to the micron.",
    image: "https://images.unsplash.com/photo-1716808154267-98c9b7f939e4?w=1200&q=80",
    align: "left" as const,
    hasShape: false,
  },
  {
    step: "02",
    title: "Natural Dyeing",
    description:
      "Achieving the perfect midnight black requires twelve immersion cycles over fourteen days. Our master dyers work with natural indigo and iron oxide compounds, layering pigment until the fiber itself becomes a vessel of depth.",
    image: "https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?w=1200&q=80",
    align: "right" as const,
    hasShape: true,
  },
  {
    step: "03",
    title: "Hand Weaving",
    description:
      "Each knot is a decision. Our artisans average 8,000 knots per day on a single rug, working in natural light to ensure color consistency. A 6×9 Signature Wool piece requires 45 days of continuous handwork.",
    image: "https://images.unsplash.com/photo-1578314874366-1975eac6e32a?w=1200&q=80",
    align: "left" as const,
    hasShape: false,
  },
  {
    step: "04",
    title: "Artisan Washing",
    description:
      "Post-weave, rugs undergo our proprietary stone-wash process. River stones and mineral-rich water soften the fibers while creating the distinctive patina that makes each piece unique.",
    image: "https://images.unsplash.com/photo-1609593891818-75522e1b8bb7?w=1200&q=80",
    align: "right" as const,
    hasShape: true,
  },
  {
    step: "05",
    title: "Quality Assurance",
    description:
      "Every rug passes through a 47-point inspection. Density, colorfastness, dimensional accuracy, and tactile quality—each metric must meet our uncompromising standard before receiving the Hanahreum mark.",
    image: "https://images.unsplash.com/photo-1560258632-fb994fd2bd44?w=1200&q=80",
    align: "left" as const,
    hasShape: false,
  },
];

function ProcessBlock({
  step,
  title,
  description,
  image,
  align,
  index,
  hasShape,
}: (typeof processes)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const isLeft = align === "left";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32 md:mb-48 ${
        !isLeft ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image with optional accent shape behind */}
      <div
        className={`${
          isLeft ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6"
        } overflow-hidden relative`}
      >
        {hasShape && (
          <div
            className={`absolute ${
              isLeft ? "-right-6 -bottom-6" : "-left-6 -bottom-6"
            } w-2/3 h-2/3 bg-[var(--color-accent-dark)]/30 -z-10`}
          />
        )}
        <motion.div style={{ scale: imgScale }} className="aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className={`${
          isLeft
            ? "lg:col-span-5 lg:col-start-8"
            : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
        }`}
      >
        <span className="font-display text-7xl md:text-9xl text-[var(--color-border)] leading-none block mb-4">
          {step}
        </span>
        <h3 className="font-display text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default function CraftsmanshipPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <>
      {/* Hero — ConcreteCouture style: texture background + layered typography */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        {/* Texture background with parallax zoom */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
            alt="Textile texture closeup"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />

        {/* Layered typography — ConcreteCouture inspired */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* Giant ghost text in background */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ delay: 0.3, duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] md:text-[18vw] leading-none tracking-tighter text-white whitespace-nowrap select-none pointer-events-none"
          >
            craft
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xs tracking-[0.5em] uppercase text-[var(--color-accent-light)] mb-6"
          >
            The Process
          </motion.p>

          {/* Main title — large, bold, left-aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-[var(--color-text-primary)] mb-6"
          >
            Craft.
          </motion.h1>

          {/* Subtitle lines offset */}
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-sm md:text-base text-[var(--color-text-muted)] max-w-xs"
            >
              We don&apos;t pour texture — we pour soul.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1 }}
              className="font-display text-3xl md:text-5xl text-white/40 italic"
            >
              Only texture.
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="font-display text-4xl md:text-6xl text-white mt-4 md:ml-[20%]"
          >
            Only soul.
          </motion.p>
        </div>
      </section>

      {/* Editorial bold statement */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl lg:text-[120px] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            From Fiber
            <br />
            <span className="italic text-[var(--color-accent-light)]">
              to Floor.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mt-8"
          >
            Five Stages of Mastery
          </motion.p>
        </div>
      </section>

      {/* Process blocks */}
      <section className="pb-32 md:pb-48 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {processes.map((process, i) => (
            <ProcessBlock key={process.step} {...process} index={i} />
          ))}
        </div>
      </section>

      {/* Materials divider */}
      <FullBleedSection
        bgImage="/images/brand/cozy-warm.png"
        overlay="heavy"
        minHeight="60vh"
      >
        <div className="flex items-center justify-center h-[60vh] px-6 text-center">
          <div className="reveal">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] leading-tight max-w-4xl">
              &ldquo;We don&apos;t make rugs.
              <br />
              <span className="italic text-[var(--color-accent-light)]">
                We compose spaces.
              </span>
              &rdquo;
            </p>
          </div>
        </div>
      </FullBleedSection>

      {/* Materials — Expand Cards */}
      <MaterialExpandCards />
    </>
  );
}
