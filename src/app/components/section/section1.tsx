"use client";

import Header from "../Header";

export default function FirstSection() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black pb-10 flex flex-col justify-between">
      <Header />

      <div className="flex flex-col text-center text-white px-6">
        <h1 className="text-[42px] font-extrabold leading-[48px]">
          movie <br />
          bookie
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/90">
          지금 바로 영화관에서
          <br />
          당신만의 추억을 예약해보세요.
        </p>
      </div>
      <div className="bg-red-500 text-red-500 p-4">Tailwind 적용 확인</div>
      <div className="px-6">
        <button
          // onClick={() => router.push(".")}
          className="bg-red-main body-3-semibold mt-5 rounded-xl px-6 py-3 text-white focus:bg-red-700"
        >
          나만의 이벤트 만들러 가기
        </button>
      </div>
    </div>
  );
}
