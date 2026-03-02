"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/paths";

const materials = [
  {
    material: "Premium Wool",
    origin: "New Zealand & Patagonia",
    detail:
      "Heritage flock fibers with 19-micron diameter. Superior crimp for unmatched resilience.",
    image: assetPath("/images/craftsmanship/expand-premium-wool.webp"),
  },
  {
    material: "Faux Cashmere",
    origin: "Cruelty-Free Synthetic",
    detail:
      "Ultra-soft 5mm pile replicating cashmere touch. Washable, pet-friendly, eternally soft.",
    image: assetPath("/images/craftsmanship/expand-faux-cashmere.webp"),
  },
  {
    material: "Organic Cotton",
    origin: "Egypt & India",
    detail:
      "Zero-dye philosophy. GOTS certified organic cotton from cooperative farms.",
    image: assetPath("/images/craftsmanship/expand-organic-cotton.webp"),
  },
  {
    material: "Wool-Silk Blend",
    origin: "Premium Fusion",
    detail:
      "Lustrous sheen meets resilient structure. Silk-infused fibers shift with ambient light.",
    image: assetPath("/images/craftsmanship/expand-wool-silk.webp"),
  },
];

export default function MaterialExpandCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16 reveal">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4">
            Materials
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--color-text-primary)]">
            What We Work With
          </h2>
        </div>

        <div className="flex h-[400px] md:h-[500px] gap-2 w-full">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.material}
              className="relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                flex:
                  expandedIndex === i
                    ? 4
                    : expandedIndex !== null
                    ? 0.5
                    : 1,
              }}
              onMouseEnter={() => setExpandedIndex(i)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <img
                src={mat.image}
                alt={mat.material}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500"
                style={{
                  opacity: expandedIndex === i || expandedIndex === null ? 1 : 0,
                }}
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent-light)] mb-2">
                  {mat.origin}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                  {mat.material}
                </h3>
                <p
                  className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm transition-all duration-500"
                  style={{
                    opacity: expandedIndex === i ? 1 : 0,
                    maxHeight: expandedIndex === i ? "200px" : "0px",
                  }}
                >
                  {mat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
