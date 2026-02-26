"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assetPath } from "@/lib/paths";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video background with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onCanPlay={() => setLoaded(true)}
        >
          <source src={assetPath("/video/hero.mp4")} type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Small overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-[0.5em] uppercase text-[var(--color-accent-light)] mb-8"
        >
          Est. 2019 &mdash; Seoul, Korea
        </motion.p>

        {/* Giant logo text */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-logo text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-[-0.03em] text-[var(--color-text-primary)] mb-6"
        >
          Hanahreum
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl md:text-3xl italic text-[var(--color-text-secondary)] max-w-2xl mb-4"
        >
          Timeless Beauty, Crafted for Spaces.
        </motion.p>

        {/* Philosophy line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 2.0, duration: 1.5 }}
          className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-muted)] mt-4"
        >
          The Essence of Textile
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-text-muted)]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
