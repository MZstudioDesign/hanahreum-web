"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assetPath } from "@/lib/paths";

const selections = [
  {
    name: "Signature Wool",
    description: "Heritage fibers. Timeless density.",
    image: assetPath("/images/home/premium-signature-wool.webp"),
  },
  {
    name: "Artisan Wash",
    description: "Stone-processed. Living surfaces.",
    image: assetPath("/images/home/premium-artisan-wash.webp"),
  },
  {
    name: "Raw Cotton",
    description: "Undyed purity. Organic calm.",
    image: assetPath("/images/home/premium-raw-cotton.webp"),
  },
  {
    name: "Deep Monochrome",
    description: "Single-hue mastery. Absolute depth.",
    image: assetPath("/images/home/premium-deep-monochrome.webp"),
  },
];

export default function PremiumSelections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section className="py-32 md:py-48 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="reveal mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4">
            Premium Selections
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--color-text-primary)]">
            Four Pillars of Craft
          </h2>
        </div>
      </div>

      {/* Horizontal scroll gallery with parallax */}
      <motion.div ref={containerRef} style={{ x }} className="px-6 md:px-12">
        <div className="flex gap-6 md:gap-8">
          {selections.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[28vw]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-bg-elevated)]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                {/* Spotlight hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-accent-light)] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Collection
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
