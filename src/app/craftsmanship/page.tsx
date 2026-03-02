"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullBleedSection from "@/components/ui/FullBleedSection";
import MaterialExpandCards from "@/components/sections/MaterialExpandCards";
import { assetPath } from "@/lib/paths";

const materials = [
  {
    step: "01",
    title: "Faux Cashmere",
    description:
      "A synthetic microfiber engineered to replicate the softness of natural cashmere. The ultra-fine filaments (typically under 1.0 denier) create a velvet-like surface that feels luxurious underfoot. Because it's machine-washable and resistant to pilling, faux cashmere is ideal for high-traffic living areas. Its low-pile construction also means it lays flat quickly and works well with underfloor heating systems.",
    image: assetPath("/images/craftsmanship/material-faux-cashmere.webp"),
    align: "left" as const,
    hasShape: false,
  },
  {
    step: "02",
    title: "Premium Wool",
    description:
      "Sourced from heritage flocks in New Zealand and Patagonia, premium wool fibers are measured by micron count — the finer the fiber, the softer the hand feel. Wool naturally regulates temperature, absorbs moisture without feeling damp, and is inherently flame-resistant. Over time, the lanolin in wool develops a unique patina, making each rug age with character rather than wear.",
    image: assetPath("/images/craftsmanship/material-premium-wool.webp"),
    align: "right" as const,
    hasShape: true,
  },
  {
    step: "03",
    title: "Organic Cotton",
    description:
      "Grown without synthetic pesticides or fertilizers, organic cotton produces a fiber that is breathable, hypoallergenic, and gentle on sensitive skin. Cotton rugs are lightweight yet substantial in texture, making them perfect for layering. The natural fiber accepts vegetable-based dyes beautifully, resulting in muted, earthy tones that deepen over time. Cotton is fully biodegradable, aligning with zero-waste design principles.",
    image: assetPath("/images/craftsmanship/material-organic-cotton.webp"),
    align: "left" as const,
    hasShape: false,
  },
  {
    step: "04",
    title: "Cotton-Linen Blend",
    description:
      "Combining the softness of cotton with the structural integrity of linen creates a textile with exceptional drape and durability. Linen fibers are two to three times stronger than cotton, adding tensile strength to the weave without sacrificing comfort. This blend naturally becomes softer with every wash, develops a lived-in character, and resists static buildup — making it particularly suited for dry, heated interiors.",
    image: assetPath("/images/craftsmanship/material-cotton-linen.webp"),
    align: "right" as const,
    hasShape: true,
  },
  {
    step: "05",
    title: "Wool-Silk Blend",
    description:
      "The most luxurious of textile combinations. Silk fibers add a subtle luminous sheen that shifts with ambient light, while wool provides density and warmth. The silk content (typically 20–30%) creates a surface that reflects light differently from every angle, giving the rug a dimensional quality impossible to achieve with wool alone. This blend requires specialized stone-washing to soften without damaging the delicate silk strands.",
    image: assetPath("/images/craftsmanship/material-wool-silk.webp"),
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
}: (typeof materials)[0] & { index: number }) {
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
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

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
      {/* Hero — dark workshop atmosphere */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={assetPath("/images/craftsmanship/hero.webp")}
            alt="Dark textile workshop with warm desk lamp"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/80" />

        {/* Layered typography */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* Giant ghost text */}
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

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-[var(--color-text-primary)] mb-6"
          >
            Craft.
          </motion.h1>

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
              style={{ filter: "blur(1.5px)" }}
            >
              Only texture.
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="font-display text-4xl md:text-6xl text-white mt-4 md:ml-[20%]"
            style={{ filter: "blur(1.5px)" }}
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
            What We
            <br />
            <span className="italic text-[var(--color-accent-light)]">
              Work With.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mt-8"
          >
            Five Materials, Five Characters
          </motion.p>
        </div>
      </section>

      {/* Material blocks */}
      <section className="pb-32 md:pb-48 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {materials.map((material, i) => (
            <ProcessBlock key={material.step} {...material} index={i} />
          ))}
        </div>
      </section>

      {/* Materials divider */}
      <FullBleedSection
        bgImage={assetPath("/images/craftsmanship/quote-section.webp")}
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
