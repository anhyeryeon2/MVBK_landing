"use client";
import Lottie from "lottie-react";
import landing1 from "../../../../public/lottie/randing_1.json";

export default function Section3() {
  return (
    <div className="w-full max-w-[430px] h-screen mx-auto bg-gray-black flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 text-center text-white pt-[109px]">
        <p className="title-1-bold text-[24px] leading-relaxed text-white animate-slide-up animation-delay-200">
          누구나 쉽게, 아주 빠르게
          <br />
          이벤트 만들고 모집하기
        </p>
        <p className="mt-4 body-3-regular text-gray-300 pb-[56px] animate-slide-up animation-delay-600">
          시간, 날짜, 장소만 정하고 게시글을 올리면 준비 끝! <br />
          복잡한 절차 없이 함께할 사람을 모집할 수 있어요.
        </p>
        <div className="mt-8 w-[280px] h-[280px] animate-float-up animation-delay-1000">
          <Lottie animationData={landing1} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slide-up {
          animation: slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .animate-float-up {
          animation: float-up 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
