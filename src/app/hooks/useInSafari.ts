"use client";

import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    // iOS 기기 체크
    const isiOS = /iphone|ipad|ipod/.test(ua);

    // Safari 엔진 체크 (Safari만, Chrome이나 다른 브라우저 제외)
    const isSafariEngine =
      /safari/.test(ua) && !/crios|fxios|chrome|edgios/.test(ua);

    // 인앱 브라우저들 체크 (Discord, KakaoTalk, Instagram, Facebook 등)
    const isInAppBrowser =
      ua.includes("discord") ||
      ua.includes("kakaotalk") ||
      ua.includes("instagram") ||
      ua.includes("fbav") ||
      ua.includes("fban") ||
      ua.includes("line") ||
      ua.includes("naver") ||
      ua.includes("whale") ||
      // iframe 내에서 실행되는 경우도 체크
      window.top !== window.self;

    // 실제 Safari 브라우저인지 체크
    const isRealSafari =
      isiOS &&
      isSafariEngine &&
      !isInAppBrowser &&
      // Safari의 독특한 특성들 추가 체크
      "safari" in window &&
      window.top === window.self;

    setIsSafari(isRealSafari);
  }, []);

  return isSafari;
}
