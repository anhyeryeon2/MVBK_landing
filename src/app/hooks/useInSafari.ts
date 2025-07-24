"use client";

import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;

    const isSafariBrowser =
      /safari/i.test(ua) &&
      !/chrome|crios|fxios|instagram|kakaotalk|naver|daum|line|discord/i.test(
        ua
      );

    setIsSafari(isSafariBrowser);
  }, []);

  return isSafari;
}
