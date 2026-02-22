"use client";

import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";

interface QuoteBlockProps {
  quote: string;
  source: string;
}

export function QuoteBlock({ quote, source }: QuoteBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  };

  const cornerVariants: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 0.4,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  };

  return (
    <motion.blockquote
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative pl-6 md:pl-10 py-4"
    >
      {/* Decorative corners */}
      <motion.span
        variants={cornerVariants}
        className="quote-corner quote-corner-tl"
      />
      <motion.span
        variants={cornerVariants}
        className="quote-corner quote-corner-bl"
      />

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] as const }}
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gold)] via-[var(--gold)] to-transparent origin-top"
        style={{ opacity: 0.6 }}
      />

      {/* Quote text */}
      <motion.p
        variants={itemVariants}
        className="text-[var(--text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-body italic mb-4"
      >
        &ldquo;{quote}&rdquo;
      </motion.p>

      {/* Source */}
      <motion.footer
        variants={itemVariants}
        className="text-[var(--text-muted)] text-sm tracking-wide font-display"
      >
        — {source}
      </motion.footer>
    </motion.blockquote>
  );
}
