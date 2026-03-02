"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, collections } from "@/data/collections";
import FullBleedSection from "@/components/ui/FullBleedSection";
import { assetPath } from "@/lib/paths";

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.collection === activeFilter);

  return (
    <>
      {/* Hero — Bold editorial typography */}
      <section className="relative min-h-[80vh] bg-[var(--color-bg-primary)] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={assetPath("/images/collections/collections-hero-bg.webp")}
            alt="Hanahreum rug collection"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs tracking-[0.5em] uppercase text-[var(--color-accent-light)] mb-6"
          >
            {products.length} Pieces &mdash; {collections.length} Collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[140px] leading-[0.9] tracking-tight text-[var(--color-text-primary)]"
          >
            The
            <br />
            <span className="italic text-[var(--color-accent-light)]">
              Collection.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Filter + editorial gallery */}
      <section className="py-20 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-16 reveal">
            {["All", ...collections].map((col) => (
              <button
                key={col}
                onClick={() => setActiveFilter(col)}
                className={`px-6 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-500 ${
                  activeFilter === col
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg-primary)]"
                    : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent-dark)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {col}
              </button>
            ))}
          </div>

          {/* Editorial magazine-style grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Bold collection name typography between groups */}
              {activeFilter === "All" && (
                <motion.h2
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="font-display text-5xl md:text-7xl lg:text-[100px] leading-[0.95] tracking-tight text-[var(--color-text-primary)]/20 mb-12"
                >
                  Signature
                  <br />
                  <span className="italic">& Beyond.</span>
                </motion.h2>
              )}

              {/* Asymmetric editorial grid — magazine-style with varying sizes */}
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                {filtered.map((product, i) => {
                  // Create editorial rhythm: large, medium, small, offset
                  const patterns = [
                    "col-span-12 md:col-span-8 aspect-[16/9]",    // Wide hero
                    "col-span-12 md:col-span-4 aspect-[3/4]",     // Tall side
                    "col-span-6 md:col-span-5 aspect-square",     // Square left
                    "col-span-6 md:col-span-4 aspect-[4/5]",     // Portrait mid
                    "col-span-12 md:col-span-3 aspect-[3/5]",    // Narrow tall
                    "col-span-12 md:col-span-7 aspect-[16/10]",  // Wide
                    "col-span-6 md:col-span-5 aspect-[4/3]",     // Landscape
                    "col-span-6 md:col-span-4 aspect-square",    // Square
                    "col-span-12 md:col-span-3 aspect-[3/4]",    // Narrow portrait
                  ];
                  const pattern = patterns[i % patterns.length];

                  // Insert bold typography between certain items
                  const showTypoBefore = i === 4 || i === 10 || i === 16;

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: Math.min((i % 4) * 0.08, 0.3),
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className={`group relative overflow-hidden bg-[var(--color-bg-elevated)] cursor-pointer ${pattern}`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                      />

                      {/* Hover overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 ${
                          hoveredProduct === product.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />

                      {/* Info */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-700 ${
                          hoveredProduct === product.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent-light)] mb-2">
                          {product.collection}
                        </p>
                        <h3 className="font-display text-xl md:text-2xl text-white mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-sm text-[var(--color-text-secondary)]">
                            {product.dimensions} &middot; {product.material}
                          </span>
                          <span className="font-display text-lg text-[var(--color-accent-light)]">
                            {product.price}
                          </span>
                        </div>
                      </div>

                      {/* Collection badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-block px-3 py-1 text-[9px] tracking-[0.2em] uppercase bg-black/50 text-white/80 backdrop-blur-sm transition-opacity duration-500 ${
                            hoveredProduct === product.id
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        >
                          {product.collection}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <FullBleedSection
        bgImage={assetPath("/images/collections/collections-cta-bg.webp")}
        overlay="heavy"
        minHeight="50vh"
      >
        <div className="flex flex-col items-center justify-center h-[50vh] px-6 text-center">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-5xl text-[var(--color-text-primary)] mb-6">
              Interested in Our Collections?
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Reach out to discuss partnership opportunities, pricing, and
              how we can bring our collections to your market.
            </p>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 text-xs tracking-[0.2em] uppercase border border-[var(--color-accent)] text-[var(--color-accent-light)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all duration-500"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </FullBleedSection>
    </>
  );
}
