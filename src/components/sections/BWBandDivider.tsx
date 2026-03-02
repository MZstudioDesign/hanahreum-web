"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/paths";

export default function BWBandDivider() {
  return (
    <section className="relative overflow-hidden">
      {/* Top: B&W image section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={assetPath("/images/home/bw-band-divider.webp")}
          alt="Hanahreum textile detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-7xl text-white text-center px-6 leading-tight"
          >
            We don&apos;t follow trends.
            <br />
            <span className="italic text-white/60">
              We compose permanence.
            </span>
          </motion.p>
        </div>
      </div>

      {/* Accent color band */}
      <div className="bg-[var(--color-accent)] py-8 md:py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl text-[var(--color-bg-primary)] text-center md:text-left"
          >
            We&apos;re raising the bar for
            <span className="italic"> textile design</span> worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Link
              href="/about/"
              className="group inline-flex items-center gap-2 px-8 py-3 text-xs tracking-[0.2em] uppercase bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-500"
            >
              Get to know us
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
