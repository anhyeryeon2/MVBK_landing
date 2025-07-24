"use client";

import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import "./globals.css";
import { useState } from "react";
import Section1 from "./components/section/section1";
import Section2 from "./components/section/section2";
import Section3 from "./components/section/section3";
import Section4 from "./components/section/section4";
import Section5 from "./components/section/section5";
import Section6 from "./components/section/section6";
import Section7 from "./components/section/section7";
import Header from "./components/Header";

export default function ReactFullpageDemo() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full max-w-[430px] mx-auto bg-gray-black text-white relative justify-center">
      <Header />
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <FullpageSection name="first">
          <Section1 />
        </FullpageSection>
        <FullpageSection name="second">
          <Section2 />
        </FullpageSection>
        <FullpageSection name="third">
          <Section3 />
        </FullpageSection>
        <FullpageSection name="fourth">
          <Section4 />
        </FullpageSection>
        <FullpageSection name="fifth">
          <Section5 />
        </FullpageSection>
        <FullpageSection name="sixth">
          <Section6 />
        </FullpageSection>
        <FullpageSection name="seventh">
          <Section7 />
        </FullpageSection>
      </FullpageContainer>
    </div>
  );
}
