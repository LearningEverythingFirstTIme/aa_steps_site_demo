export const animations = {
  // Stagger delays for text reveals
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
  
  // Easing functions
  easing: {
    smooth: [0.43, 0.13, 0.23, 0.96],
    bounce: [0.68, -0.55, 0.265, 1.55],
    dramatic: [0.87, 0, 0.13, 1],
  },
  
  // Duration presets
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    dramatic: 2,
  },
};

// GSAP ScrollTrigger configurations
export const scrollTriggerConfig = {
  stepSection: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  
  romanNumeral: {
    start: "top 90%",
    end: "top 30%",
    scrub: 1,
  },
  
  quoteReveal: {
    start: "top 85%",
    end: "top 50%",
    scrub: 0.5,
  },
};

// Framer Motion variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    }
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
};

export const romanNumeralVariants = {
  hidden: { 
    opacity: 0,
    strokeDashoffset: 1000,
    fillOpacity: 0,
  },
  visible: { 
    opacity: 1,
    strokeDashoffset: 0,
    fillOpacity: 1,
    transition: {
      strokeDashoffset: { duration: 2, ease: "easeInOut" },
      fillOpacity: { duration: 1, delay: 1 },
    }
  },
};
