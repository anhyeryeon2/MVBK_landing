"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <motion.div
      className={clsx(
        "w-full max-w-[430px] mx-auto px-4 sm:px-6", // ✅ 기본 가운데 정렬 + 반응형 패딩
        className
      )}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
