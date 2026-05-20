"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

import { useReducedMotion } from "@/lib/useReducedMotion"
import { ease } from "@/lib/animations"

type RevealDirection = "up" | "down" | "left" | "right" | "none"
type MarginValue = `${number}px` | `${number}%` | `${number}px ${number}px ${number}px ${number}px`

interface RevealProps {
  children: ReactNode
  /** Direction of reveal. Default: "up" */
  direction?: RevealDirection
  /** Distance in px. Default: 36 */
  distance?: number
  /** Add blur to initial state */
  blur?: boolean
  /** Delay in seconds */
  delay?: number
  /** Duration in seconds */
  duration?: number
  /** Stagger children (wraps children in a stagger container) */
  stagger?: boolean
  /** Stagger delay between children */
  staggerDelay?: number
  /** Custom className */
  className?: string
  /** Viewport margin */
  margin?: MarginValue
}

function getInitial(direction: RevealDirection, distance: number, blur: boolean) {
  const base: Record<string, number | string> = { opacity: 0 }

  switch (direction) {
    case "up":
      base.y = distance
      break
    case "down":
      base.y = -distance
      break
    case "left":
      base.x = -distance
      break
    case "right":
      base.x = distance
      break
    case "none":
      break
  }

  if (blur) base.filter = "blur(10px)"

  return base
}

export default function Reveal({
  children,
  direction = "up",
  distance = 36,
  blur = false,
  delay = 0,
  duration = 0.7,
  stagger = false,
  staggerDelay = 0.08,
  className = "",
  margin = "-80px",
}: RevealProps) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin })

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>
  }

  const animateTarget: Record<string, number | string> = {
    opacity: 1,
    x: 0,
    y: 0,
  }
  if (blur) animateTarget.filter = "blur(0px)"

  const transition = {
    duration,
    delay,
    ease: ease.premiumOut,
  }

  // Optional stagger container
  const wrapperVariants = stagger
    ? {
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }
    : undefined

  return (
    <motion.div
      ref={ref}
      variants={wrapperVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      <motion.div
        variants={
          stagger
            ? {
                hidden: getInitial(direction, distance, blur),
                show: {
                  ...animateTarget,
                  transition: {
                    duration,
                    ease: ease.premiumOut,
                  },
                },
              }
            : undefined
        }
        initial={!stagger ? getInitial(direction, distance, blur) : undefined}
        animate={!stagger && isInView ? animateTarget : undefined}
        transition={!stagger ? transition : undefined}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
