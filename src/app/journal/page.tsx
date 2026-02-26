"use client";

import { motion } from "framer-motion";
import { journalArticles } from "@/data/collections";
import { ArrowUpRight } from "lucide-react";
import FullBleedSection from "@/components/ui/FullBleedSection";
import { assetPath } from "@/lib/paths";

export default function JournalPage() {
  const featured = journalArticles[0];
  const remaining = journalArticles.slice(1);

  return (
    <>
      {/* Hero */}
      <FullBleedSection
        bgImage={assetPath("/images/brand/modern.png")}
        overlay="heavy"
        minHeight="60vh"
      >
        <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs tracking-[0.5em] uppercase text-[var(--color-accent-light)] mb-6"
          >
            Insights & Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-text-primary)]"
          >
            Journal
          </motion.h1>
        </div>
      </FullBleedSection>

      {/* Featured article - full width editorial */}
      <section className="py-20 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
              {/* Large image */}
              <div className="lg:col-span-8 overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-[70vh]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              {/* Text overlay on right */}
              <div className="lg:col-span-4 bg-[var(--color-bg-secondary)] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)]">
                      {featured.category}
                    </span>
                    <span className="text-[10px] tracking-wider text-[var(--color-text-muted)]">
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-[var(--color-text-primary)] leading-tight mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-sm italic text-[var(--color-accent-light)] mb-6">
                    {featured.subtitle}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-accent-light)] group-hover:gap-4 transition-all duration-500">
                  Read Article
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial asymmetric grid for remaining articles */}
      <section className="pb-32 md:pb-48 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {remaining.map((article, i) => {
              const isWide = i === 0 || i === 3;
              const isTall = i === 1;

              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className={`group cursor-pointer ${
                    isWide
                      ? "md:col-span-7"
                      : isTall
                      ? "md:col-span-5 md:row-span-2"
                      : "md:col-span-5"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-[var(--color-bg-elevated)] ${
                      isTall ? "aspect-[3/5]" : "aspect-[16/10]"
                    }`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)]">
                          {article.category}
                        </span>
                        <span className="text-[10px] tracking-wider text-[var(--color-text-muted)]">
                          {article.readTime} read
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-2">
                        {article.title}
                      </h3>
                      <p className="text-xs italic text-[var(--color-text-secondary)]">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Excerpt below image */}
                  <div className="p-6 md:p-8 bg-[var(--color-bg-secondary)]">
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <span className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-accent-light)] group-hover:gap-3 transition-all duration-500">
                      Continue Reading
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
