"use client";

import Lottie from "lottie-react";

export default function Section5() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <p className="title-1-bold text-[24px] leading-relaxed text-white/90">
          탐색, 더이상 번거롭지 않게
          <br />
          진행중인 이벤트들이 한 눈에!
        </p>
        <p className="mt-4 body-3-regular text-gray-300 pb-[56px]">
          지금 진행되고 있는 다양한 대관 이벤트들을 <br />
          무비부키 에서 모두 살펴볼 수 있어요.
        </p>
        <div className="mt-8 w-[280px] h-[280px] animate-float-up animation-delay-1000">
          <Lottie
            animationData={require("../../../../public/lottie/randing_3.json")}
          />
        </div>
      </div>
    </div>
  );
}
