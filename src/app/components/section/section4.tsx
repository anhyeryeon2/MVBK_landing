"use client";

import Lottie from "lottie-react";
import landing2 from "../../../../public/lottie/randing_2.json";
import FadeUp from "../FadeUp";
import SectionWrapper from "../SectionWrapper";

export default function Section4() {
  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black relative">
      <div className="h-screen flex flex-col items-center justify-center gap-[18px] px-4">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] leading-relaxed text-white/90 text-center"
        >
          복잡한 대관 절차는
          <br />
          무비부키가 대신 처리해요!
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="body-3-regular text-center text-gray-300 pb-[56px]"
        >
          번거롭게 직접 영화관에 연락하지 않아도 돼요. <br />
          무비부키가 대관 신청을 대신 진행해드려요.
        </FadeUp>

        <FadeUp
          delay={0.6}
          y={50}
          className="mt-8 w-full max-w-[375px] h-[278px]"
        >
          <Lottie
            animationData={landing2}
            className="w-full h-full object-contain"
          />
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
