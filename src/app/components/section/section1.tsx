"use client";

import Image from "next/image";
import ArrowRight from "../../icons/arrow_right.svg";
import { EXTERNAL_LINKS } from "@/constants/links";

export default function Section1() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6 relative">
      <div
        className="absolute inset-0 bg-landing-bg bg-no-repeat bg-bottom opacity-70"
        style={{ zIndex: 0 }}
      />

      <Image
        src="/moviebookie.png"
        alt="mvbk logo"
        width={200}
        height={90}
        className="w-[200px] h-auto animate-hero-logo relative z-10"
        priority
      />
      <p className="mt-4 text-sm leading-relaxed text-white/90 animate-hero-text">
        지금 바로 영화관에서
        <br />
        당신만의 추억을 예약해보세요.
      </p>

      <div className="mt-[100px] px-6 animate-hero-button">
        <button
          onClick={() => window.open(EXTERNAL_LINKS.BETA_FORM, "_blank")}
          className="flex items-center justify-center gap-1 bg-red-main body-3-semibold w-[189px] h-[52px] rounded-xl pl-2 py-3 text-white active:bg-red-700 hover:bg-red-600 transition-all duration-200 hover:scale-105"
        >
          Beta 신청하러 가기
          <ArrowRight className="w-5 h-5 pt-[3px]" />
        </button>
      </div>

      <style jsx>{`
        @keyframes hero-logo {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
          }
          60% {
            transform: translateY(5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes hero-text {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-button {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          70% {
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-hero-logo {
          animation: hero-logo 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-hero-text {
          animation: hero-text 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-hero-button {
          animation: hero-button 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s
            forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
