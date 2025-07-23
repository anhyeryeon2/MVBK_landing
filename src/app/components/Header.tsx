"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[20px] py-[15px]">
      <Image
        src="/mvbk-logo.png"
        alt="mvbk logo"
        width={100}
        height={24}
        className="h-[20px] w-auto"
        priority
      />
      <button className="px-3 py-[6px] rounded-full bg-[#3d3d3d] text-white text-[14px] font-medium leading-[140%]">
        Beta 신청
      </button>
    </header>
  );
}
