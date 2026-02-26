"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // Handle hash-based scroll after route change
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
            el.classList.add("visible");
          });
          if (target.matches(REVEAL_SELECTOR)) {
            target.classList.add("visible");
          }
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
