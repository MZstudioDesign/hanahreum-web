"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { assetPath } from "@/lib/paths";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Fade volume based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (videoRef.current && !isMuted) {
        const volume = Math.max(0, 1 - v * 2.5);
        videoRef.current.volume = volume;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMuted]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const next = !isMuted;
      videoRef.current.muted = next;
      if (!next) {
        videoRef.current.volume = 1;
      }
      setIsMuted(next);
    }
  }, [isMuted]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video background with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={assetPath("/images/home/hero-poster.webp")}
          className="w-full h-full object-cover"
          onCanPlay={() => setLoaded(true)}
        >
          <source src={assetPath("/video/hero.mp4")} type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      {/* Sound toggle button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 border border-white/20 bg-black/30 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Small overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-[0.5em] uppercase text-[var(--color-accent-light)] mb-8"
        >
          Est. 2019 &mdash; Seoul, Korea
        </motion.p>

        {/* Giant logo text */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-logo text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-[-0.03em] text-[var(--color-text-primary)] mb-6"
        >
          Hanahreum
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl md:text-3xl italic text-[var(--color-text-primary)] max-w-2xl mb-4"
        >
          Timeless Beauty, Crafted for Spaces.
        </motion.p>

        {/* Philosophy line — brighter text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 2.0, duration: 1.5 }}
          className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-secondary)] mt-4"
        >
          The Essence of Textile
        </motion.p>
      </motion.div>
    </section>
  );
}
