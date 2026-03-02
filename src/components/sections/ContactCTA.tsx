"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";
import { assetPath } from "@/lib/paths";

const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdtkWbdm89Ud9tyH77hS7-TPwfAfpMbdaGmMymrEY-qhja72w/formResponse";

export default function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", interest: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const body = new FormData();
    body.append("entry.375446896", formData.name);
    body.append("entry.362828834", formData.company);
    body.append("entry.1980723390", formData.email);
    body.append("entry.1100608063", formData.interest);
    body.append("entry.1906939141", formData.message);
    try {
      await fetch(FORM_ACTION, { method: "POST", body, mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assetPath("/images/home/contact-cta.webp")})` }}
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
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start gap-6 py-12"
              >
                <CheckCircle size={40} className="text-[var(--color-accent)]" strokeWidth={1.2} />
                <h3 className="font-display text-3xl text-[var(--color-text-primary)]">Message Sent</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Thank you for reaching out. We&apos;ll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-primary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                    Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-secondary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none"
                  >
                    <option value="">Select your interest</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="Distribution Partnership">Distribution Partnership</option>
                    <option value="Brand Collaboration">Brand Collaboration</option>
                    <option value="Retail Partnership">Retail Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and partnership goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-border-light)] text-[var(--color-text-primary)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-[var(--color-text-muted)]/50"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full md:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[var(--color-accent-light)] transition-colors duration-500 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Get In Touch"}
                  {status !== "loading" && (
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
