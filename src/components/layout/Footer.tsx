"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/" },
    { label: "Craftsmanship", href: "/craftsmanship/" },
    { label: "Collections", href: "/collections/" },
    { label: "Journal", href: "/journal/" },
  ],
  collections: [
    { label: "Signature Wool", href: "/collections/" },
    { label: "Artisan Wash", href: "/collections/" },
    { label: "Raw Cotton", href: "/collections/" },
    { label: "Deep Monochrome", href: "/collections/" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      {/* Animated divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent origin-left"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-10">
        {/* Top section: Large brand statement */}
        <div className="mb-20">
          <h2 className="font-logo text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-[var(--color-text-primary)] mb-4">
            Hanahreum
          </h2>
          <p className="font-display text-xl md:text-2xl italic text-[var(--color-text-secondary)] max-w-xl">
            Darken Us to Make Value Shine.
          </p>
        </div>

        {/* Grid: links + contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Explore */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">
              Collections
            </h3>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <Mail size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span>nicknicksmart@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <Phone size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span>+82 10-7683-9905</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span>
                  599, Achasan-ro, Gwangjin-gu<br />
                  Seoul, 04968<br />
                  Republic of Korea
                </span>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">
              Business
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li>
                <span className="text-[var(--color-text-muted)]">Registration:</span>{" "}
                774-14-01878
              </li>
              <li>
                <span className="text-[var(--color-text-muted)]">CEO:</span>{" "}
                Yecheon Yie
              </li>
              <li>
                <span className="text-[var(--color-text-muted)]">Markets:</span>{" "}
                USA, Australia, Canada, UAE, Korea
              </li>
              <li>
                <span className="text-[var(--color-text-muted)]">Hours:</span>{" "}
                Mon-Fri 09:00-18:00 KST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-muted)] tracking-wider">
            &copy; {new Date().getFullYear()} Hanahreum &middot; Odd Crack. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-xs text-[var(--color-text-muted)] tracking-wider">
              Searching The Essence.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
