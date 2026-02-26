"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BrandEssence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Asymmetric editorial grid: 7/5 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Large image - spans 7 cols */}
          <div className="lg:col-span-7 overflow-hidden">
            <motion.div style={{ y: imgY }} className="relative aspect-[4/5]">
              <img
                src="/images/brand/the-home.png"
                alt="The Home — Hanahreum editorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
            </motion.div>
          </div>

          {/* Text + small images - spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="reveal">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-6">
                Brand Essence
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[var(--color-text-primary)] mb-8">
                Searching
                <br />
                <span className="italic text-[var(--color-accent-light)]">
                  The Essence.
                </span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)] mb-4">
                We darken ourselves to make value shine. Each thread is a
                meditation on permanence—crafted not for trends, but for the
                spaces that define how we live.
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                From the frozen training grounds of the Korean military to
                design studios in Gangnam, Hanahreum was born from the
                belief that beauty should endure.
              </p>
            </div>

            {/* Two small offset images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="reveal stagger-1 aspect-[3/4] overflow-hidden translate-y-8">
                <img
                  src="/images/brand/neutrality.png"
                  alt="Neutrality"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="reveal stagger-2 aspect-[3/4] overflow-hidden -translate-y-4">
                <img
                  src="/images/brand/organic.png"
                  alt="Organic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
