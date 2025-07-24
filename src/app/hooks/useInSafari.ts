"use client";

import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isiOS = /iphone|ipad|ipod/.test(ua);
    const isSafariEngine = /safari/.test(ua) && !/crios|fxios|chrome/.test(ua);

    const isDiscordApp =
      ua.includes("discord") ||
      (isiOS && /safari/.test(ua) && window.top !== window.self);

    const isRealSafari =
      isiOS &&
      isSafariEngine &&
      window.top === window.self &&
      !ua.includes("discord");

    setIsSafari(isRealSafari && !isDiscordApp);
  }, []);

  return isSafari;
}
