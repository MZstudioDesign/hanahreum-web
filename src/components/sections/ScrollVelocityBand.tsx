"use client";

import { useRef, useEffect, useState } from "react";

function MarqueeRow({
  text,
  direction,
}: {
  text: string;
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const [copies, setCopies] = useState(10);

  useEffect(() => {
    const calculate = () => {
      if (!contentRef.current) return;
      const w = contentRef.current.offsetWidth;
      if (w === 0) return;
      const needed = Math.ceil(window.innerWidth / w) + 2;
      setCopies(Math.max(needed * 2, 10));
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [text]);

  return (
    <div className="relative overflow-hidden py-3">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-${direction} 40s linear infinite`,
        }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? contentRef : null}
            className="flex-shrink-0 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] text-[var(--color-text-primary)]/15 mx-8"
          >
            {text}
            <span className="inline-block mx-6 text-[var(--color-accent)]/30">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ScrollVelocityBand() {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <section className="py-12 md:py-16 bg-[var(--color-bg-primary)] overflow-hidden border-y border-[var(--color-border)]">
        <MarqueeRow text="Timeless Beauty" direction="left" />
        <MarqueeRow text="Searching The Essence" direction="right" />
      </section>
    </>
  );
}
