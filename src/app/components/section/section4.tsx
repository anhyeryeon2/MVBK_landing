"use client";

import Lottie from "lottie-react";
import landing2 from "../../../../public/lottie/randing_2.json";
import FadeUp from "../FadeUp";

export default function Section4() {
  return (
    <div className="w-[430px] h-screen  bg-gray-black flex flex-col ">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] leading-relaxed text-white/90"
        >
          복잡한 대관 절차는
          <br />
          무비부키가 대신 처리해요!
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="mt-4 body-3-regular text-gray-300 pb-[56px]"
        >
          번거롭게 직접 영화관에 연락하지 않아도 돼요. <br />
          무비부키가 대관 신청을 대신 진행해드려요.
        </FadeUp>

        <FadeUp delay={0.6} y={50} className="mt-8 w-[375px] h-[278px]">
          <Lottie animationData={landing2} />
        </FadeUp>
      </div>
    </div>
  );
}
