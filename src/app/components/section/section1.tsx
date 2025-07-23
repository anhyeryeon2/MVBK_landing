"use client";

import Image from "next/image";

export default function Section1() {
  return (
    <div className="w-full h-screen bg-gray-black flex flex-col items-center justify-center text-center text-white px-6">
      <Image
        src="/moviebookie.png"
        alt="mvbk logo"
        width={200}
        height={90}
        className="w-[200px] h-auto"
        priority
      />
      <p className="mt-4 text-sm leading-relaxed text-white/90">
        지금 바로 영화관에서
        <br />
        당신만의 추억을 예약해보세요.
      </p>

      <div className="mt-[100px] w-full px-6">
        <button className="bg-red-main body-3-semibold w-full rounded-xl px-6 py-3 text-white active:bg-red-700">
          Beta 신청하러 가기
        </button>
      </div>
    </div>
  );
}
