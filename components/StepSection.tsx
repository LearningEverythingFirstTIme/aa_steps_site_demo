"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { Step } from "@/lib/steps";
import { QuoteBlock } from "./QuoteBlock";

interface StepSectionProps {
  step: Step;
}

export function StepSection({ step }: StepSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsFilled(true), 800);
      return () => clearTimeout(timer);
    } else {
      setIsFilled(false);
    }
  }, [isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  };

  const romanVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1.2,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      id={`step-${step.id}`}
      className="step-section relative overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Roman Numeral */}
        <motion.div
          variants={romanVariants}
          className="relative mb-8 md:mb-12"
        >
          <span
            className={`
              font-display text-[20vw] md:text-[15vw] lg:text-[12vw] 
              leading-none font-bold select-none
              transition-all duration-1000 ease-out
              ${isFilled ? 'roman-filled' : 'roman-outline'}
            `}
            style={{
              WebkitTextStroke: isFilled ? '0px' : '2px #d4af37',
              color: isFilled ? '#d4af37' : 'transparent',
              textShadow: isFilled 
                ? '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.2)' 
                : 'none',
            }}
          >
            {step.roman}
          </span>
          
          {/* Step number label */}
          <motion.div
            variants={itemVariants}
            className="absolute top-0 right-0 md:right-12"
          >
            <span className="text-[var(--text-muted)] text-sm tracking-[0.3em] uppercase font-display">
              Step {step.id}
            </span>
          </motion.div>
        </motion.div>

        {/* Step Title */}
        <motion.h2
          variants={itemVariants}
          className="font-body text-2xl md:text-3xl lg:text-4xl leading-relaxed text-[var(--text-primary)] mb-8 md:mb-12 max-w-3xl"
        >
          {step.title}
        </motion.h2>

        {/* Quote Block */}
        <motion.div variants={itemVariants}>
          <QuoteBlock quote={step.quote.text} source={step.quote.source} />
        </motion.div>

        {/* Reflection Prompt */}
        <motion.div
          variants={itemVariants}
          className="mt-10 md:mt-14 p-6 md:p-8 rounded-lg illuminated-border bg-[var(--void-light)]/50"
        >
          <p className="text-[var(--gold)] text-sm tracking-[0.2em] uppercase mb-3 font-display">
            Reflection
          </p>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed font-body italic">
            {step.reflection}
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] as const }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40"
      />
    </section>
  );
}
