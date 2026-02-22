"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

interface StepNumberProps {
  roman: string;
  isActive?: boolean;
}

export function StepNumber({ roman, isActive = false }: StepNumberProps) {
  const [isFilled, setIsFilled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsFilled(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsFilled(false);
    }
  }, [isActive]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96] 
      }}
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
      {roman}
    </motion.span>
  );
}
