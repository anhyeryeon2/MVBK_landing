"use client";

import { motion } from "framer-motion";
import ArrowRight from "../../icons/arrow_right.svg";
import { EXTERNAL_LINKS } from "@/constants/links";

export default function Section1() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6 relative">
      {/* 배경 이미지 (즉시 표시) */}
      <div
        className="absolute inset-0 bg-landing-bg bg-no-repeat bg-bottom opacity-70"
        style={{ zIndex: 0 }}
      />

      {/* 로고 */}
      <motion.img
        src="/moviebookie.png"
        alt="mvbk logo"
        width={200}
        height={90}
        className="w-[200px] h-auto relative z-10"
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      />

      {/* 텍스트 */}
      <motion.p
        className=" z-10 mt-4 text-sm leading-relaxed text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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

      {/* 버튼 */}
      <motion.div
        className="z-10 mt-[100px] px-6"
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <button
          onClick={() => window.open(EXTERNAL_LINKS.BETA_FORM, "_blank")}
          className="z-10 flex items-center justify-center gap-1 bg-red-main body-3-semibold w-[189px] h-[52px] rounded-xl pl-2 py-3 text-white active:bg-red-700 hover:bg-red-600 transition-all duration-200 hover:scale-105"
        >
          Beta 신청하러 가기
          <ArrowRight className="w-5 h-5 pt-[3px]" />
        </button>
      </motion.div>
    </div>
  );
}
