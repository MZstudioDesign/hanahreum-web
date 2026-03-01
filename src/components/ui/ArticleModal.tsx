"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    subtitle: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    body: string;
  } | null;
}

export default function ArticleModal({ isOpen, onClose, article }: ArticleModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] mx-4 bg-[var(--color-bg-primary)] border border-[var(--color-border)] overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors bg-[var(--color-bg-primary)]/80 backdrop-blur-sm cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Hero image */}
            <div className="w-full aspect-[16/7] overflow-hidden flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)]">
                  {article.category}
                </span>
                <span className="text-[10px] tracking-wider text-[var(--color-text-muted)]">
                  {article.date}
                </span>
                <span className="text-[10px] tracking-wider text-[var(--color-text-muted)]">
                  {article.readTime} read
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-[var(--color-text-primary)] leading-tight mb-3">
                {article.title}
              </h2>
              <p className="text-sm italic text-[var(--color-accent-light)] mb-8">
                {article.subtitle}
              </p>

              <div className="space-y-4">
                {article.body.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
