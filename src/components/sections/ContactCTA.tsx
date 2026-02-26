"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/brand/cozy-warm.png)" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: headline */}
          <div className="reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-6">
              Global Partnership
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[var(--color-text-primary)] mb-8">
              Become a<br />
              <span className="italic text-[var(--color-accent-light)]">
                Global Partner
              </span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-md mb-8 leading-relaxed">
              We&apos;re a global seller brand connecting beautiful textiles
              with the world. Let&apos;s explore how we can work together
              and bring timeless design to your market.
            </p>
            <div className="flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
              <span className="px-4 py-2 border border-[var(--color-border)]">
                Wholesale
              </span>
              <span className="px-4 py-2 border border-[var(--color-border)]">
                Distribution
              </span>
              <span className="px-4 py-2 border border-[var(--color-border)]">
                Brand Collaboration
              </span>
              <span className="px-4 py-2 border border-[var(--color-border)]">
                Retail
              </span>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="reveal stagger-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-primary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-primary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-primary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]/50"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                  Interest
                </label>
                <select className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-secondary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                  <option value="">Select your interest</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="distribution">Distribution Partnership</option>
                  <option value="collaboration">Brand Collaboration</option>
                  <option value="retail">Retail Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and partnership goals..."
                  className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-primary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-[var(--color-text-muted)]/50"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group w-full md:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[var(--color-accent-light)] transition-colors duration-500 mt-8"
              >
                Get In Touch
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
