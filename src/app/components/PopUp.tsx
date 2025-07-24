"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PopUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scaleFrom?: number;
  className?: string;
}

export default function PopUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  scaleFrom = 0.95,
  className = "",
}: PopUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: scaleFrom }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        duration,
        type: "spring",
        bounce: 0.4,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
