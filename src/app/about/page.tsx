"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Factory,
  Palette,
  PackageCheck,
  Scale,
  PenTool,
  Handshake,
  Globe,
  BadgeCheck,
} from "lucide-react";
import { timelineEvents } from "@/data/collections";
import FullBleedSection from "@/components/ui/FullBleedSection";
import { Timeline } from "@/components/ui/Timeline";
import { assetPath } from "@/lib/paths";

const partners = [
  { label: "6 Factory Partners", icon: Factory },
  { label: "3 Design Partners", icon: Palette },
  { label: "FBABEE", icon: PackageCheck },
  { label: "Global Legal & Compliance", icon: Scale },
  { label: "MZS Design Studio", icon: PenTool },
  { label: "IJM International", icon: Handshake },
  { label: "Global Markets", sub: "(US, AU, CA, UAE)", icon: Globe },
  { label: "Official Brand (US, KR)", icon: BadgeCheck },
];

const teamMembers = [
  {
    name: "Yecheon Yie",
    role: "Founder & Owner",
    bio: "Founded in 2019 through product development, the brand officially launched its first product in 2020. What began with creating products soon expanded into marketing, business strategy, operational systems, and capital management — each carefully studied, tested, and applied firsthand. Growth was never accidental, but the result of deliberate decisions and continuous refinement.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Yutaek Oh",
    role: "Design & Marketing Lead",
    bio: "Yutaek joined the team in 2024, leading design and marketing while overseeing the technical structure behind the brand. He shapes the visual direction, refines communication strategy, and strengthens the internal systems that support execution. His role bridges creativity and structure — ensuring the brand is not only seen, but built to last.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
  },
];

const timelineData = timelineEvents.map((event) => ({
  title: event.year,
  content: (
    <div>
      <div className="mb-4 overflow-hidden aspect-[16/9] max-w-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      {event.month && (
        <p className="text-xs tracking-wider text-[var(--color-text-muted)] mb-2">
          {event.month}
        </p>
      )}
      <h4 className="font-display text-2xl text-[var(--color-text-primary)] mb-3">
        {event.title}
      </h4>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
        {event.description}
      </p>
    </div>
  ),
}));

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* Hero — Spatial/atmospheric interior with light */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
            alt="Warm interior space with natural light and rug"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs tracking-[0.5em] uppercase text-[var(--color-accent-light)] mb-8"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-text-primary)] mb-6"
          >
            With The Heart,
            <br />
            <span className="italic text-[var(--color-accent-light)]">
              Not The Head.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-xl"
          >
            From the frozen training grounds of the Korean military to a global
            textile brand. This is the story of Odd Crack.
          </motion.p>
        </div>
      </section>

      {/* Brand philosophy */}
      <section className="py-32 md:py-48 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 reveal">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-6">
                Philosophy
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--color-text-primary)] leading-tight mb-8">
                Hanahreum means
                <br />
                <span className="italic">&ldquo;Timeless Beauty&rdquo;</span>
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-6">
                Rather than just fleeting moments, we want to create lasting
                beauty together. We&apos;re a small, passionate team, and
                we&apos;re excited to share this journey with those who join us
                in making beautiful memories.
              </p>
              <div className="space-y-4 mt-12">
                {[
                  "Darken Us to Make Value Shine",
                  "Searching The Essence",
                  "With The Heart, not The Head",
                ].map((phrase, i) => (
                  <motion.p
                    key={phrase}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="font-display text-xl italic text-[var(--color-accent-light)] border-l-2 border-[var(--color-accent-dark)] pl-6"
                  >
                    &ldquo;{phrase}&rdquo;
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="reveal stagger-1 aspect-[3/4] overflow-hidden">
                  <img
                    src={assetPath("/images/brand/the-home.png")}
                    alt="Hanahreum brand editorial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="reveal stagger-2 aspect-[3/4] overflow-hidden mt-16">
                  <img
                    src={assetPath("/images/brand/modern.png")}
                    alt="Modern interior design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section — with Korean portrait photos */}
      <section className="py-32 md:py-48 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-20 reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4">
              The People
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--color-text-primary)]">
              Team Odd Crack
            </h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {teamMembers.map((member, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <div
                  key={member.name}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className={`group ${
                      isReversed
                        ? "lg:col-span-4 lg:col-start-9 lg:row-start-1"
                        : "lg:col-span-5"
                    }`}
                  >
                    <div className="aspect-[3/4] max-h-[500px] overflow-hidden bg-[var(--color-bg-elevated)]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className={`${
                      isReversed
                        ? "lg:col-span-7 lg:col-start-1 lg:row-start-1"
                        : "lg:col-span-7"
                    }`}
                  >
                    <h3 className="font-display text-3xl md:text-4xl text-[var(--color-text-primary)] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">
                      {member.role}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {member.bio}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline — replaced horizontal scroll with Timeline [B] component */}
      <section className="py-32 md:py-48 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-12 reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4">
              Timeline
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--color-text-primary)]">
              The Journey
            </h2>
          </div>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Global Network / Partners */}
      <section className="py-32 md:py-48 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20 reveal">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4">
              Global Network
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--color-text-primary)]">
              Trusted Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">
            {partners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={partner.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[var(--color-bg-secondary)] p-8 md:p-12 flex flex-col items-center justify-center text-center gap-4 group hover:bg-[var(--color-bg-elevated)] transition-colors duration-500"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.2}
                    className="text-[var(--color-accent-dark)] group-hover:text-[var(--color-accent)] transition-colors duration-500"
                  />
                  <span className="text-sm tracking-[0.15em] uppercase text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors duration-500 flex flex-col items-center gap-0.5">
                    <span>{partner.label}</span>
                    {"sub" in partner && partner.sub && (
                      <span>{partner.sub}</span>
                    )}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { label: "Countries", value: "5+" },
              { label: "Partners", value: "16+" },
              { label: "Collections", value: "6" },
              { label: "Years", value: "6+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl text-[var(--color-accent-light)] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
