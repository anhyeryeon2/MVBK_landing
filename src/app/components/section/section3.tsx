"use client";
import Lottie from "lottie-react";
import landing1 from "../../../../public/lottie/randing_1.json";
import FadeUp from "../FadeUp";

export default function Section3() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <FadeUp
          delay={0.2}
          className="title-1-bold text-[24px] leading-relaxed text-white"
        >
          누구나 쉽게, 아주 빠르게
          <br />
          이벤트 만들고 모집하기
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="mt-4 body-3-regular text-gray-300 pb-[56px]"
        >
          <span className="whitespace-nowrap">
            시간, 날짜, 장소만 정하고 게시글을 올리면 준비 끝!
          </span>{" "}
          <br />
          복잡한 절차 없이 함께할 사람을 모집할 수 있어요.
        </FadeUp>

        <FadeUp delay={0.6} y={50} className="mt-8 w-[375px] h-[278px]">
          <Lottie animationData={landing1} />
        </FadeUp>
      </div>
    </div>
  );
}
