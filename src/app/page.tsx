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
    <div className="relative bg-gray-black text-white w-full h-screen overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[430px]">
        <div className="absolute inset-0 z-0 bg-landing-bg bg-no-repeat bg-cover bg-bottom opacity-60" />

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
            <div className="bg-gray-black">
              <Section3 />
            </div>
          </FullpageSection>
          <FullpageSection name="fourth">
            <div className="bg-gray-black">
              <Section4 />
            </div>
          </FullpageSection>
          <FullpageSection name="fifth">
            <div className="bg-gray-black">
              <Section5 />
            </div>
          </FullpageSection>
          <FullpageSection name="sixth">
            <div className="bg-gray-black">
              <Section6 />
            </div>
          </FullpageSection>
          <FullpageSection name="seventh">
            <div className="bg-gray-black">
              <Section7 />
            </div>
          </FullpageSection>
        </FullpageContainer>
      </div>
    </div>
  );
}
