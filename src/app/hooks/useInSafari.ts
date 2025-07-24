"use client";

import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isiOS = /iphone|ipad|ipod/i.test(ua);
    const isSafariEngine = /safari/.test(ua) && !/crios|fxios|chrome/.test(ua);
    const isStandalone =
      "standalone" in navigator && (navigator as any).standalone; // eslint-disable-line @typescript-eslint/no-explicit-any

    const isNotInApp = window.top === window.self || isStandalone;

    const trulySafari = isiOS && isSafariEngine && isNotInApp;

    setIsSafari(trulySafari);
  }, []);

  return isSafari;
}
