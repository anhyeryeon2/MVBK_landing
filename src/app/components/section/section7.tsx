import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

export default function Section7() {
  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black">
      <div className="h-[80vh] flex flex-col items-center justify-center gap-[18px] px-6">
        <button className="body-3-semibold bg-red-main w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-red-700">
          Beta 신청하러 가기
        </button>
        <button className="bg-gray-900 body-3-semibold w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-gray-950">
          인스타그램 바로가기
        </button>
        <button className="bg-gray-900 body-3-semibold w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-gray-950">
          링크 공유하기
        </button>
      </div>

      {/* 푸터 */}
      <div className="bg-gray-950 text-white px-6 pt-8 pb-[calc(env(safe-area-inset-bottom)+32px)] space-y-4">
        <Image
          src="/mvbk-logo.png"
          alt="mvbk logo"
          width={80}
          height={24}
          className="h-[20px] w-auto"
          priority
        />
        <div className="text-[10px] text-gray-300 space-y-[2px]">
          <p>문의 : moviebookie08@gmail.com</p>
          <p>인스타그램 : @moviebookie_</p>
        </div>
        <p className="text-[10px] text-gray-300">
          © 2025 MOVIEBOOKIE. ALL RIGHTS RESERVED
        </p>
      </div>
    </SectionWrapper>
  );
}
