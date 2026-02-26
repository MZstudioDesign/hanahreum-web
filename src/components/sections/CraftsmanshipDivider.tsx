"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assetPath } from "@/lib/paths";

export default function CraftsmanshipDivider() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textX2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] md:h-screen overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-20%] bg-cover bg-center"
      >
        <img
          src={assetPath("/images/brand/soft-calm.png")}
          alt="Textile macro detail"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Heavy overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Flowing text lines */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <motion.p
          style={{ x: textX, opacity: textOpacity }}
          className="font-display text-5xl md:text-8xl lg:text-[10rem] italic text-white/10 whitespace-nowrap select-none"
        >
          Woven with History
        </motion.p>
        <motion.h2
          style={{ opacity: textOpacity }}
          className="font-display text-3xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] text-center px-6"
        >
          Woven with History.
        </motion.h2>
        <motion.p
          style={{ x: textX2, opacity: textOpacity }}
          className="font-display text-5xl md:text-8xl lg:text-[10rem] italic text-white/10 whitespace-nowrap select-none"
        >
          Crafted with Soul
        </motion.p>
      </div>
    </section>
  );
}
