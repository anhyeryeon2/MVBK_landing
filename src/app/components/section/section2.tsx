"use client";

import Header from "../Header";

export default function Section2() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center text-white">
        <p className="mt-4 text-sm leading-relaxed text-white/90">
          지금, 단 한 번의 클릭으로
          <br />
          당신만의 영화관을 만들 수 있어요.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/90">
          이제껏 경험 못 했던
          <br /> 쉬운 영화관 대관 플랫폼
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/90">
          무비부키와 함께라면
          <br /> 당신의 일상이 특별해질거예요.
        </p>
        <div className="mt-[100px] px-6">
          <button className="bg-red-main body-3-semibold w-full rounded-xl px-6 py-3 text-white active:bg-red-700">
            Beta 신청하러 가기
          </button>
        </div>
      </div>
    </div>
  );
}
