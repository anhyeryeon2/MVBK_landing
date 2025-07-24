"use client";

import { EXTERNAL_LINKS } from "@/constants/links";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-[20px] py-[15px] bg-transparent">
      <Image
        src="/mvbk-logo.png"
        alt="mvbk logo"
        width={110}
        height={24}
        className="h-[24px] w-auto"
        priority
      />
      <button
        onClick={() => window.open(EXTERNAL_LINKS.BETA_FORM, "_blank")}
        className="px-[9px] py-[5px] rounded-[6px] bg-gray-850 text-white text-[14px] font-medium leading-[140%] active:bg-gray-900"
      >
        Beta 신청
      </button>
    </header>
  );
}
