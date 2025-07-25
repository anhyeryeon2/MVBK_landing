"use client";
import Lottie from "lottie-react";
import landing4 from "../../../../public/lottie/randing_4.json";
import FadeUp from "../FadeUp";
import SectionWrapper from "../SectionWrapper";

export default function Section6() {
  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black relative">
      <div className="h-screen flex flex-col items-center justify-center gap-[18px] px-4">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] leading-relaxed text-white/90 text-center"
        >
          모호한 대관 과정, 이제 그만!
          <br />
          알림으로 투명한 진행상황 공유
        </FadeUp>

        <FadeUp delay={0.4} className="body-3-regular text-gray-300 pb-[56px]">
          신청 완료, 모집 마감, 대관 확정까지 <br />
          모든 과정을 실시간으로 전달 받아요.
        </FadeUp>

        <FadeUp
          delay={0.6}
          y={50}
          className="mt-8 w-full max-w-[375px] h-[278px]"
        >
          <Lottie
            animationData={landing4}
            className="w-full h-full object-contain"
          />
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
