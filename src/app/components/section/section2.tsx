"use client";
import { motion } from "framer-motion";
import ArrowRight from "../../icons/arrow_right.svg";
import { EXTERNAL_LINKS } from "@/constants/links";

export default function Section2() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6 relative">
      <div
        className="absolute inset-0 bg-landing-bg bg-no-repeat bg-bottom opacity-50"
        style={{ zIndex: 0 }}
      />
      {/* 맨 위 fade-in 레이어 (노치 색상과 자연스럽게 연결) */}
      <div className="absolute top-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-b from-gray-black to-transparent" />

      <motion.div
        className="flex-1 flex flex-col justify-center items-center px-6 text-center text-white relative"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 14,
          duration: 1,
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p
          className="mt-4 body-1-semibold text-white/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          지금, 단 한 번의 클릭으로
          <br />
          당신만의 영화관을 만들 수 있어요.
        </motion.p>

        <motion.p
          className="mt-4 body-1-semibold text-white/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          이제껏 경험 못 했던
          <br /> 쉬운 영화관 대관 플랫폼
        </motion.p>

        <motion.p
          className="mt-4 body-1-semibold text-white/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          무비부키와 함께라면
          <br /> 당신의 일상이 특별해질거예요.
        </motion.p>

        <motion.div
          className="mt-[100px] px-6"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.open(EXTERNAL_LINKS.BETA_FORM, "_blank")}
            className="flex items-center justify-center gap-1 bg-red-main body-3-semibold w-[189px] h-[52px] rounded-xl pl-2 py-3 text-white active:bg-red-700 hover:bg-red-600 transition-all duration-200 hover:scale-105"
          >
            Beta 신청하러 가기
            <ArrowRight className="w-5 h-5 pt-[3px]" />
          </button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none bg-gradient-to-b from-transparent to-black/100" />
    </div>
  );
}
