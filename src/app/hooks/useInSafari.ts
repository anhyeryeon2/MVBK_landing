"use client";

import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isSafari =
      /safari/.test(ua) &&
      !/crios|chrome|fxios|instagram|kakaotalk|naver|daum|line|discord|electron|wv|version\/[\d.]+.*chrome/.test(
        ua
      );

    const isNotInApp = window.top === window.self;

    setIsSafari(isSafari && isNotInApp);
  }, []);

  return isSafari;
}
