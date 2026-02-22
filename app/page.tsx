"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { steps } from "@/lib/steps";
import { StepSection } from "@/components/StepSection";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSteps = () => {
    const firstStep = document.getElementById("step-1");
    if (firstStep) {
      firstStep.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: prefersReducedMotion ? 1 : opacity }}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)`,
            }}
          />
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(255, 191, 0, 0.03) 0%, transparent 70%)`,
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <span className="inline-block text-[var(--gold)] text-sm md:text-base tracking-[0.5em] uppercase mb-6 font-display">
              A Journey of Recovery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="font-display text-[20vw] md:text-[12vw] lg:text-[10vw] leading-none mb-6"
          >
            <span className="text-gradient-gold">
              XII
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="font-body text-xl md:text-2xl lg:text-3xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            The Twelve Steps of
            <span className="text-[var(--text-primary)]"> Alcoholics Anonymous</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 1.2 }}
            className="text-[var(--text-muted)] text-sm md:text-base max-w-lg mx-auto mb-12"
          >
            An immersive exploration of spiritual principles that have guided millions toward recovery
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 1.4 }}
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
            onClick={scrollToSteps}
            className="group relative px-8 py-4 font-display text-sm tracking-[0.2em] uppercase text-[var(--gold)] border border-[var(--gold)]/40 rounded-full overflow-hidden transition-all hover:border-[var(--gold)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10">Begin the Journey</span>
            <div className="absolute inset-0 bg-[var(--gold)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[var(--text-muted)] text-xs tracking-[0.2em] uppercase font-display">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[var(--gold)] to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* Steps Sections */}
      <div className="relative">
        {steps.map((step) => (
          <StepSection key={step.id} step={step} />
        ))}
      </div>

      {/* Footer */}
      <footer className="relative py-20 px-4 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-4xl md:text-5xl text-[var(--gold)]/20 mb-4">
            XII
          </p>
          <p className="text-[var(--text-muted)] text-sm mb-2">
            &ldquo;Rarely have we seen a person fail who has thoroughly followed our path.&rdquo;
          </p>
          <p className="text-[var(--text-muted)]/60 text-xs">
            — Alcoholics Anonymous, p. 58
          </p>
          <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
            <p className="text-[var(--text-muted)]/40 text-xs">
              This is an unofficial educational resource. <br />
              AA® is a registered trademark of Alcoholics Anonymous World Services, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
