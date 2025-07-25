"use client";

import Lottie from "lottie-react";
import landing3 from "../../../../public/lottie/randing_3.json";
import FadeUp from "../FadeUp";
import SectionWrapper from "../SectionWrapper";

export default function Section5() {
  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black relative">
      <div className="h-screen flex flex-col items-center justify-center gap-[18px] px-4">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] text-center leading-relaxed text-white/90"
        >
          탐색, 더이상 번거롭지 않게
          <br />
          진행중인 이벤트들이 한 눈에!
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="body-3-regular text-center text-gray-300 pb-[56px]"
        >
          지금 진행되고 있는 다양한 대관 이벤트들을 <br />
          무비부키 에서 모두 살펴볼 수 있어요.
        </FadeUp>

        <FadeUp
          delay={0.6}
          y={50}
          className="mt-8 w-full max-w-[375px] h-[278px]"
        >
          <Lottie
            animationData={landing3}
            className="w-full h-full object-contain"
          />
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
