"use client";

import Lottie from "lottie-react";
import landing1 from "../../../../public/lottie/randing_1.json";
import FadeUp from "../FadeUp";
import SectionWrapper from "../SectionWrapper";

export default function Section3() {
  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black relative">
      <div className="h-screen flex flex-col items-center justify-center gap-[18px] px-4">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] leading-relaxed text-white text-center"
        >
          누구나 쉽게, 아주 빠르게
          <br />
          이벤트 만들고 모집하기
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="body-3-regular text-gray-300 text-center pb-[56px]"
        >
          <span className="whitespace-nowrap">
            시간, 날짜, 장소만 정하고 게시글을 올리면 준비 끝!
          </span>{" "}
          <br />
          복잡한 절차 없이 함께할 사람을 모집할 수 있어요.
        </FadeUp>

        <FadeUp
          delay={0.6}
          y={50}
          className="mt-8 w-full max-w-[375px] h-[278px]"
        >
          <Lottie
            animationData={landing1}
            className="w-full h-full object-contain"
          />
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
