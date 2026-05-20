/* ================================================= */
/* PREMIUM ANIMATION VARIANTS - Framer Motion       */
/* Centralized, reusable animation presets           */
/* ================================================= */

import type { Variants, Transition } from "framer-motion";

/* ─── EASING PRESETS ─── */
export const ease = {
  /** premium ease-out - smooth deceleration */
  premiumOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /** premium ease-in-out - symmetric smoothness */
  premiumInOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
  /** quick snap ease-out */
  quickOut: [0.33, 1, 0.68, 1] as [number, number, number, number],
  /** gentle deceleration */
  gentle: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

/* ─── SPRING PRESETS ─── */
export const spring = {
  /** smooth, no-bounce - good for continuous reveals */
  smooth: { type: "spring" as const, stiffness: 120, damping: 22, mass: 0.8 },
  /** responsive, tiny bounce - good for cards */
  snappy: { type: "spring" as const, stiffness: 180, damping: 24, mass: 0.7 },
  /** soft, gentle - good for scale */
  soft: { type: "spring" as const, stiffness: 80, damping: 18, mass: 1 },
  /** quick bounce - good for micro-interactions */
  bounce: { type: "spring" as const, stiffness: 200, damping: 16, mass: 0.5 },
};

/* ─── DEFAULT TRANSITION ─── */
export const defaultTransition: Transition = {
  duration: 0.65,
  ease: ease.premiumOut,
};

/* ─── FADE-UP REVEAL ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.premiumOut },
  },
};

/* ─── FADE-UP WITH BLUR ─── */
export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: ease.premiumOut },
  },
};

/* ─── FADE IN (no movement) ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: ease.premiumOut },
  },
};

/* ─── SCALE IN ─── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: ease.premiumOut },
  },
};

/* ─── SCALE IN WITH BLUR ─── */
export const scaleInBlur: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.premiumOut },
  },
};

/* ─── SLIDE FROM RIGHT ─── */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.premiumOut },
  },
};

/* ─── SLIDE FROM LEFT ─── */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.premiumOut },
  },
};

/* ─── STAGGER CONTAINER ─── */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

/* ─── STAGGER CHILD (generic fade-up) ─── */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.premiumOut },
  },
};

/* ─── CARD HOVER ─── */
export const cardHover = {
  y: -6,
  scale: 1.015,
  transition: spring.soft,
};

/* ─── BUTTON HOVER ─── */
export const buttonHover = {
  scale: 1.03,
  transition: spring.snappy,
};

/* ─── BUTTON TAP ─── */
export const buttonTap = {
  scale: 0.97,
  transition: spring.snappy,
};

/* ─── PAGE LOADER CLIP-PATH EXIT ─── */
export const pageExitVariants: Variants = {
  initial: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  exit: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.9,
      ease: ease.premiumInOut,
    },
  },
};

/* ─── LINE EXPAND ─── */
export const lineExpand: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: ease.premiumOut },
  },
};