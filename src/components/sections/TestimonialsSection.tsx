"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

const testimonialColumns: Testimonial[][] = [
  [
    {
      quote:
        "The texture of Hanahreum rugs is unlike anything else. Every guest asks where we found them.",
      name: "Emily Park",
      role: "Interior Architect, Seoul",
      avatarSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "We specified Hanahreum for our Melbourne hotel project. The acoustic properties exceeded our expectations.",
      name: "James Liu",
      role: "Principal, Resonance Lab",
      avatarSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Their commitment to quality is genuine. Five years in and the rugs look even better with age.",
      name: "Minjung Yoo",
      role: "Homeowner, Gangnam",
      avatarSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
    },
  ],
  [
    {
      quote:
        "Working with Odd Crack has been transformative for our retail space. The rugs anchor the entire aesthetic.",
      name: "David Choi",
      role: "Creative Director, Trophy Shelf",
      avatarSrc:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "The stone-wash process creates something truly unique. No two pieces are alike — that's the beauty.",
      name: "Soyeon Kim",
      role: "Textile Curator, MMCA",
      avatarSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "As a distributor, their wholesale terms are fair and their product quality is consistently premium.",
      name: "Michael Tan",
      role: "CEO, Pacific Textiles SG",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    },
  ],
  [
    {
      quote:
        "From ordering to delivery, Hanahreum operates with a professionalism that matches their craftsmanship.",
      name: "Jiwon Lee",
      role: "Buyer, Hyundai Dept. Store",
      avatarSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "The Deep Monochrome collection changed how I think about minimal interiors. It's art for the floor.",
      name: "Yuto Nakamura",
      role: "Architect, Tokyo",
      avatarSrc:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Hanahreum understands that a rug isn't just decor — it's the foundation of a room's character.",
      name: "Sarah Bennett",
      role: "Editor, Architectural Digest AU",
      avatarSrc:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60",
    },
  ],
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 border border-[var(--color-border)] bg-[var(--color-bg-elevated)] mb-4">
      <p className="text-sm text-[var(--color-text-secondary)] mb-5 leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatarSrc}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover grayscale"
        />
        <div>
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            {testimonial.name}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-32 md:py-48 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--color-text-primary)]">
            Voices of Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialColumns.map((column, colIndex) => (
            <div key={colIndex} className="relative h-[500px] overflow-hidden">
              <motion.div
                className="flex flex-col"
                animate={{ y: [0, -(column.length * 180)] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20 + colIndex * 5,
                    ease: "linear",
                  },
                }}
              >
                {[...column, ...column].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </motion.div>
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-bg-secondary)] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-bg-secondary)] to-transparent z-10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
