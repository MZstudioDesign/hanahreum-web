"use client";

import { motion } from "framer-motion";
import { assetPath } from "@/lib/paths";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const amazonIcon = assetPath("/images/logos/amazon-icon.png");

const testimonialColumns: Testimonial[][] = [
  [
    {
      quote:
        "This rug really does make such a difference — it just looks elevated and finished. The creasing settled after the first week and looks just fine now. Great for putting down for company.",
      name: "Alli B***",
      role: "Verified Purchase",
    },
    {
      quote:
        "This faux cashmere rug fills my lounge space nicely. It has a modern aesthetic that suits rooms with earthy tones and looks great on floorboards. The rug is soft and comfortable for bare feet, children or pets.",
      name: "P**l",
      role: "Verified Purchase",
    },
    {
      quote:
        "This area rug adds a warm and modern touch to the room, and the neutral beige tone works beautifully with different décor styles. A great balance of comfort, style and practicality.",
      name: "Zakia C****",
      role: "Verified Purchase",
    },
  ],
  [
    {
      quote:
        "Most importantly my young boys like it and are more than happy to fall asleep on it. The rubber backing stops it from slipping on my tiled floors. At approximately $120 this rug represents good value.",
      name: "John H**",
      role: "Verified Purchase",
    },
    {
      quote:
        "I'm delighted with my new rug, and I'm impressed by its softness and smooth texture. The pattern and colours are an exact match to the display image, and it complements my bedroom beautifully.",
      name: "A. Sm****",
      role: "Verified Purchase",
    },
    {
      quote:
        "This rug is so incredibly soft. There was no smell at all when it arrived. The base is non-slip, so it is great for any surface. Very pleased overall.",
      name: "Verified B****",
      role: "Verified Purchase",
    },
  ],
  [
    {
      quote:
        "I really like the visual earthy design of this rug. The size is really good for a lounge room setup — it fits perfectly with two 2–3 seater lounges.",
      name: "Jes****",
      role: "Verified Purchase",
    },
    {
      quote:
        "I love that it's machine washable and has a rubberised underside to prevent slipping. Overall, it's a great product, and I'm very satisfied with my purchase.",
      name: "A. Sm****",
      role: "Verified Purchase",
    },
    {
      quote:
        "The faux cashmere texture feels soft underfoot, yet it's durable and pet-friendly. I really appreciate the non-slip backing, which keeps it securely in place. It's also easy to clean and maintains its shape well.",
      name: "Zakia C****",
      role: "Verified Purchase",
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
          src={amazonIcon}
          alt=""
          className="w-10 h-10 rounded-full object-contain bg-white p-1"
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
