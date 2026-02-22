"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Step } from "@/lib/steps";
import { QuoteBlock } from "./QuoteBlock";

interface ShareCardProps {
  step: Step;
}

export function ShareCard({ step }: ShareCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="bg-[var(--void-light)] rounded-lg overflow-hidden illuminated-border"
    >
      {/* Header with Roman Numeral */}
      <div className="relative p-8 md:p-12 text-center border-b border-[var(--border-subtle)]">
        <span className="font-display text-[15vw] md:text-[8vw] text-[var(--gold)]/10 leading-none">
          {step.roman}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl text-[var(--gold)]">
            Step {step.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="font-body text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-6">
          {step.text}
        </p>

        <QuoteBlock quote={step.quote.text} source={step.quote.source} />

        <div className="mt-6 p-4 bg-[var(--void)]/50 rounded border-l-2 border-[var(--gold)]">
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-2 font-display">
            Reflection
          </p>
          <p className="text-[var(--text-secondary)] text-sm italic">
            {step.reflection}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
