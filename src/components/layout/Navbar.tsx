"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/craftsmanship/", label: "Craftsmanship" },
  { href: "/collections/", label: "Collections" },
  { href: "/journal/", label: "Journal" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative group py-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 text-sm font-light tracking-[0.15em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-700">
        {label}
      </span>
      {/* Underline slide-in from left */}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-[var(--color-accent)]"
        initial={false}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Subtle glow on hover */}
      <motion.span
        className="absolute inset-0 -z-10 bg-[var(--color-accent)]/5 rounded-sm"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link href="/" className="relative z-50 group">
            <motion.span
              className="font-logo text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-[-0.03em] inline-block"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Hanahreum
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <Link
              href="/#contact"
              className="group ml-4 relative px-6 py-2.5 text-xs tracking-[0.2em] uppercase border border-[var(--color-accent)] overflow-hidden"
            >
              <span className="relative z-10 text-[var(--color-accent-light)] group-hover:text-[var(--color-bg-primary)] transition-colors duration-500">
                Partner With Us
              </span>
              <span className="absolute inset-0 bg-[var(--color-accent)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative z-50 p-2 text-[var(--color-text-primary)]"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-display text-4xl text-[var(--color-text-primary)] hover:text-[var(--color-accent-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-4 px-8 py-3 text-sm tracking-[0.2em] uppercase border border-[var(--color-accent)] text-[var(--color-accent-light)]"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
