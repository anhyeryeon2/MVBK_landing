"use client";

import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import "./globals.css";
import { useState } from "react";

export default function ReactFullpageDemo() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full bg-gray-black text-white">
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {/* 1 ~ 6 섹션 */}
        <FullpageSection name="first">
          <div className="w-full max-w-[430px] h-screen mx-auto bg-[#E6E6FA] flex items-center justify-center text-black">
            First
          </div>
        </FullpageSection>
        <FullpageSection name="second">
          <div className="w-full max-w-[430px] h-screen mx-auto bg-[#FFFACD] flex items-center justify-center text-black">
            Second
          </div>
        </FullpageSection>
        <FullpageSection name="third">
          <div className="w-full max-w-[430px] h-screen mx-auto bg-[#FFDAB9] flex items-center justify-center text-black">
            Third
          </div>
        </FullpageSection>
        <FullpageSection name="fourth">
          <div className="w-full max-w-[430px] h-screen mx-auto bg-[#B0E0E6] flex items-center justify-center text-black">
            Fourth
          </div>
        </FullpageSection>
        <FullpageSection name="fifth">
          <div className="w-full max-w-[430px] h-screen mx-auto bg-[#D8BFD8] flex items-center justify-center text-black">
            Fifth
          </div>
        </FullpageSection>
        <FullpageSection name="sixth">
          <div className="w-full max-w-[430px] h-screen mx-auto bg-[#F0E68C] flex items-center justify-center text-black">
            Sixth
          </div>
        </FullpageSection>

        {/* ✅ 7번째 섹션 + Footer 포함 */}
        <FullpageSection name="seventh">
          <div className="w-full max-w-[430px] mx-auto bg-[#89CFF0] text-black">
            <div className="h-[85vh] flex items-center justify-center">
              Seventh (Last Page)
            </div>
            <div className="h-[15vh] bg-[#4682B4] flex items-center justify-center">
              👣 Footer Section
            </div>
          </div>
        </FullpageSection>
      </FullpageContainer>
    </div>
  );
}
