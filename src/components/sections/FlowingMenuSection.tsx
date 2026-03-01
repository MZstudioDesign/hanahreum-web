"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { assetPath } from "@/lib/paths";

interface FlowingMenuItem {
  link: string;
  text: string;
  image: string;
}

const menuItems: FlowingMenuItem[] = [
  {
    link: "/collections/",
    text: "Collections",
    image: assetPath("/images/brand/the-home.png"),
  },
  {
    link: "/craftsmanship/",
    text: "Craftsmanship",
    image: assetPath("/images/brand/organic.png"),
  },
  {
    link: "/about/",
    text: "About Us",
    image: assetPath("/images/brand/modern.png"),
  },
  {
    link: "/journal/",
    text: "Journal",
    image: assetPath("/images/brand/soft-calm.png"),
  },
  {
    link: "/#contact",
    text: "Partner With Us",
    image: assetPath("/images/brand/cozy-warm.png"),
  },
];

function MenuItem({
  link,
  text,
  image,
}: FlowingMenuItem) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(6);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".flowing-marquee__part"
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(6, needed));
    };
    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".flowing-marquee__part"
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: 15,
        ease: "none",
        repeat: -1,
      });
    };
    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) animationRef.current.kill();
    };
  }, [text, image, repetitions]);

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <div
      className="flowing-menu__item flex-1 relative overflow-hidden text-center border-t border-[var(--color-border)]"
      ref={itemRef}
    >
      <Link
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline whitespace-nowrap font-semibold text-[4vh] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </Link>
      <div
        className="absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none translate-y-[101%]"
        ref={marqueeRef}
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <div className="h-full w-full overflow-hidden">
          <div
            className="flex items-center relative h-full w-fit will-change-transform"
            ref={marqueeInnerRef}
            aria-hidden="true"
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                className="flowing-marquee__part flex items-center flex-shrink-0"
                key={idx}
                style={{ color: "var(--color-bg-primary)" }}
              >
                <span className="whitespace-nowrap uppercase font-normal text-[4vh] leading-none px-[1vw]">
                  {text}
                </span>
                <div
                  className="w-[200px] h-[7vh] my-[2em] mx-[2vw] py-[1em] rounded-[50px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FlowingMenuSection() {
  return (
    <section className="relative bg-[var(--color-bg-primary)]">
      <div className="py-16 md:py-20 max-w-[1440px] mx-auto px-6 md:px-12">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4 reveal">
          Explore
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-[var(--color-text-primary)] mb-12 reveal">
          Discover More
        </h2>
      </div>
      <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden flex flex-col border-b border-[var(--color-border)]">
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
      {/* Spacing below Partner With Us */}
      <div className="h-24 md:h-32 bg-[var(--color-bg-primary)]" />
    </section>
  );
}
