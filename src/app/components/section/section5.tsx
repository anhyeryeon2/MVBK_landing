"use client";

import Lottie from "lottie-react";
import landing3 from "../../../../public/lottie/randing_3.json";
import FadeUp from "../FadeUp";

export default function Section5() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] leading-relaxed text-white/90"
        >
          탐색, 더이상 번거롭지 않게
          <br />
          진행중인 이벤트들이 한 눈에!
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="mt-4 body-3-regular text-gray-300 pb-[56px]"
        >
          지금 진행되고 있는 다양한 대관 이벤트들을 <br />
          무비부키 에서 모두 살펴볼 수 있어요.
        </FadeUp>

        <FadeUp delay={0.6} y={50} className="mt-8 w-[280px] h-[280px]">
          <Lottie animationData={landing3} />
        </FadeUp>
      </div>
    </div>
  );
}
