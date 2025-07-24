"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowRight from "../../icons/arrow_right.svg";
import { EXTERNAL_LINKS } from "@/constants/links";

export default function Section1() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6 relative">
      <div
        className="absolute inset-0 bg-landing-bg bg-no-repeat bg-bottom opacity-70"
        style={{ zIndex: 0 }}
      />
      <div className="absolute top-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-b from-gray-black to-transparent" />

      <motion.img
        src="/moviebookie.png"
        alt="mvbk logo"
        width={200}
        height={90}
        className="w-[200px] h-auto relative z-10"
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={
          startAnimation
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -30, scale: 0.8 }
        }
        transition={{
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      />

      <motion.p
        className="z-10 mt-4 body-3-medium text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        지금 바로 영화관에서
        <br />
        당신만의 추억을 예약해보세요.
      </motion.p>

      <motion.div
        className="z-10 mt-[100px] px-6"
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={
          startAnimation
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 25, scale: 0.95 }
        }
        transition={{
          delay: 0.6,
          duration: 0.7,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <a
          href={EXTERNAL_LINKS.BETA_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10"
        >
          <button className="flex items-center justify-center gap-1 bg-red-main body-3-semibold w-[189px] h-[52px] rounded-xl pl-2 py-3 text-white active:bg-red-700 hover:bg-red-600 transition-all duration-200 hover:scale-105">
            Beta 신청하러 가기
            <ArrowRight className="w-5 h-5 pt-[3px]" />
          </button>
        </a>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-b from-transparent to-black/100" />
    </div>
  );
}
