"use client";
import Lottie from "lottie-react";

export default function Section4() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <p className="title-1-bold text-[24px] leading-relaxed text-white/90">
          복잡한 대관 절차는
          <br />
          무비부키가 대신 처리해요!
        </p>
        <p className="mt-4 body-3-regular text-gray-300 pb-[56px]">
          번거롭게 직접 영화관에 연락하지 않아도 돼요. <br />
          무비부키가 대관 신청을 대신 진행해드려요.
        </p>
        <div className="mt-8 w-[280px] h-[280px]">
          <Lottie
            animationData={require("../../../../public/lottie/randing_2.json")}
          />
        </div>
      </div>
    </div>
  );
}
