"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { steps, getRandomStep } from "@/lib/steps";

export function Navigation() {
  const [activeStep, setActiveStep] = useState(0);
  const [showDailyReflection, setShowDailyReflection] = useState(false);
  const [dailyStep, setDailyStep] = useState(getRandomStep());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      // Determine active step
      const stepSections = steps.map((step) => {
        const element = document.getElementById(`step-${step.id}`);
        if (!element) return { id: step.id, top: 0 };
        const rect = element.getBoundingClientRect();
        return { id: step.id, top: rect.top };
      });

      const closest = stepSections.reduce((prev, curr) => {
        return Math.abs(curr.top - 100) < Math.abs(prev.top - 100) ? curr : prev;
      });

      setActiveStep(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (stepId: number) => {
    const element = document.getElementById(`step-${stepId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDailyReflection = () => {
    setDailyStep(getRandomStep());
    setShowDailyReflection(true);
  };

  return (
    <>
      {/* Fixed Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--void)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-display text-lg text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
              >
                XII
              </button>

              {/* Progress Dots */}
              <div className="hidden md:flex items-center gap-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(step.id)}
                    className={`progress-dot ${activeStep === step.id ? "active" : ""}`}
                    aria-label={`Go to Step ${step.id}`}
                  />
                ))}
              </div>

              {/* Daily Reflection Button */}
              <button
                onClick={handleDailyReflection}
                className="px-4 py-2 text-sm font-display text-[var(--gold)] border border-[var(--gold)]/30 rounded hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all"
              >
                Daily Reflection
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Daily Reflection Modal */}
      <AnimatePresence>
        {showDailyReflection && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDailyReflection(false)}
              className="fixed inset-0 z-[60] bg-[var(--void)]/90 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl max-h-[85vh] bg-[var(--void-light)] rounded-lg illuminated-border overflow-auto pointer-events-auto"
              >
              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase font-display">
                    Daily Reflection
                  </span>
                  <button
                    onClick={() => setShowDailyReflection(false)}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="text-center mb-8">
                  <span className="font-display text-6xl md:text-8xl text-[var(--gold)]/20">
                    {dailyStep.roman}
                  </span>
                </div>

                <h3 className="font-body text-xl md:text-2xl text-[var(--text-primary)] mb-6 leading-relaxed">
                  {dailyStep.title}
                </h3>

                <div className="p-4 md:p-6 bg-[var(--void)]/50 rounded-lg mb-6">
                  <p className="text-[var(--text-secondary)] italic mb-3">
                    &ldquo;{dailyStep.quote.text}&rdquo;
                  </p>
                  <p className="text-[var(--text-muted)] text-sm">
                    — {dailyStep.quote.source}
                  </p>
                </div>

                <div className="p-4 md:p-6 border border-[var(--gold)]/20 rounded-lg">
                  <p className="text-[var(--gold)] text-sm tracking-[0.2em] uppercase mb-2 font-display">
                    Today&apos;s Question
                  </p>
                  <p className="text-[var(--text-secondary)] italic">
                    {dailyStep.reflection}
                  </p>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => {
                      setShowDailyReflection(false);
                      scrollToStep(dailyStep.id);
                    }}
                    className="flex-1 px-4 py-3 bg-[var(--gold)] text-[var(--void)] font-display text-sm tracking-wide rounded hover:bg-[var(--gold-light)] transition-colors"
                  >
                    Read Full Step
                  </button>
                  <button
                    onClick={handleDailyReflection}
                    className="flex-1 px-4 py-3 border border-[var(--gold)]/30 text-[var(--gold)] font-display text-sm tracking-wide rounded hover:bg-[var(--gold)]/10 transition-colors"
                  >
                    Another Reflection
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
