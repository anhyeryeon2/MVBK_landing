import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import InstagramIcon from "../../icons/instagram.svg";
import ArrowRight from "../../icons/arrow_right.svg";
export default function Section7() {
  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black relative">
      <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center gap-[18px] px-6">
        <button className="flex items-center justify-center gap-1 bg-red-main body-3-semibold w-[250px] h-[52px] rounded-xl pl-6 py-3 text-white active:bg-red-700">
          Beta 신청하러 가기
          <ArrowRight className="w-5 h-5 pt-[3px]" />
        </button>
        <button className="flex items-center justify-center gap-1 bg-gray-900 body-3-semibold w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-gray-950">
          <InstagramIcon className="w-6 h-6" />
          인스타그램 바로가기
        </button>
        <button className="bg-gray-900 body-3-semibold w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-gray-950">
          링크 공유하기
        </button>
      </div>

      <footer className="absolute bottom-0 left-0 w-full bg-gray-950 text-white px-6 pt-8 pb-[calc(env(safe-area-inset-bottom)+64px)] space-y-4">
        <Image
          src="/mvbk-logo.png"
          alt="mvbk logo"
          width={80}
          height={24}
          className="h-auto w-[75px]"
          priority
        />
        <div className="text-[10px] text-gray-300 space-y-[2px]">
          <p>문의 : moviebookie08@gmail.com</p>
          <p>인스타그램 : @moviebookie_</p>
        </div>
        <p className="text-[10px] text-gray-300">
          © 2025 MOVIEBOOKIE. ALL RIGHTS RESERVED
        </p>
      </footer>
    </SectionWrapper>
  );
}
