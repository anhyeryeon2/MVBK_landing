"use client";

import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import InstagramIcon from "../../icons/instagram.svg";
import ArrowRight from "../../icons/arrow_right.svg";
import { EXTERNAL_LINKS } from "@/constants/links";
import PopUp from "../PopUp";
import { useIsSafari } from "@/app/hooks/useInSafari";

export default function Section7() {
  const isSafari = useIsSafari();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: " https://movie-bookie.shop",
        });
        console.log("공유 완료");
      } catch (error) {
        console.error("공유 실패:", error);
      }
    } else {
      alert("이 브라우저는 공유 기능을 지원하지 않습니다.");
    }
  };

  return (
    <SectionWrapper className="w-full max-w-[430px] mx-auto bg-gray-black text-black relative">
      <div className="h-screen flex flex-col items-center justify-center gap-[18px] px-4">
        <PopUp delay={0.1}>
          <button
            onClick={() => window.open(EXTERNAL_LINKS.BETA_FORM, "_blank")}
            className="flex items-center justify-center gap-1 bg-red-main body-2-semibold w-[250px] h-[52px] rounded-xl pl-6 py-3 text-white active:bg-red-700"
          >
            Beta 신청하러 가기
            <ArrowRight className="w-5 h-5 pt-[3px]" />
          </button>
        </PopUp>

        <PopUp delay={0.3}>
          <button
            onClick={() => window.open(EXTERNAL_LINKS.INSTAGRAM, "_blank")}
            className="flex items-center justify-center gap-1 bg-gray-900 body-2-semibold w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-gray-950"
          >
            <InstagramIcon className="w-6 h-6" />
            인스타그램 바로가기
          </button>
        </PopUp>

        <PopUp delay={0.5}>
          <button
            onClick={handleShare}
            className="bg-gray-900 body-2-semibold w-[250px] h-[52px] rounded-xl px-6 py-3 text-white active:bg-gray-950"
          >
            링크 공유하기
          </button>
        </PopUp>
      </div>

      <footer
        className="absolute bottom-0 left-0 w-full bg-gray-950 text-white px-6 pt-8 space-y-4"
        style={{
          paddingBottom: isSafari
            ? ` calc(env(safe-area-inset-bottom, 26px) + 110px)`
            : "26px",
        }}
      >
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
