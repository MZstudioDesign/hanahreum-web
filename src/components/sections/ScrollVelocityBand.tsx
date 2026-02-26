"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

function VelocityRow({
  text,
  baseVelocity,
}: {
  text: string;
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const copyRef = useRef<HTMLSpanElement>(null);
  const directionFactor = useRef<number>(1);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    const el = copyRef.current;
    if (!el) return "0px";
    const w = el.offsetWidth;
    if (w === 0) return "0px";
    return `${wrap(-w, 0, v)}px`;
  });

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? copyRef : null}
            className="flex-shrink-0 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] text-[var(--color-text-primary)]/15 mx-8"
          >
            {text}
            <span className="inline-block mx-6 text-[var(--color-accent)]/30">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocityBand() {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-bg-primary)] overflow-hidden border-y border-[var(--color-border)]">
      <VelocityRow text="Timeless Beauty" baseVelocity={80} />
      <VelocityRow text="Searching The Essence" baseVelocity={-80} />
    </section>
  );
}
