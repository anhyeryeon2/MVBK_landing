"use client";

import Lottie from "lottie-react";

export default function Section6() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <p className="title-1-bold text-[24px] leading-relaxed text-white/90">
          모호한 대관 과정, 이제 그만!
          <br />
          알림으로 투명한 진행상황 공유
        </p>
        <p className="mt-4 body-3-regular text-gray-300 pb-[56px]">
          신청 완료, 모집 마감, 대관 확정까지 <br />
          모든 과정을 실시간으로 전달 받아요.
        </p>
        <div className="mt-8 w-[280px] h-[280px] animate-float-up animation-delay-1000">
          <Lottie
            animationData={require("../../../../public/lottie/randing_4.json")}
          />
        </div>
      </div>
    </div>
  );
}
