"use client";

import { useEffect } from "react";

export default function InAppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const currentUrl = window.location.href;
    const isInApp =
      /kakaotalk|naver|line|instagram|daum|everytime|discord|samsungbrowser\/[^1]/i.test(
        ua
      );

    if (!isInApp) return;

    if (ua.includes("kakaotalk")) {
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(
        currentUrl
      )}`;
      return;
    }

    if (ua.includes("discord")) {
      // Discord 앱에서는 새 탭으로 열기 시도
      const opened = window.open(currentUrl, "_blank");

      // 새 탭이 차단된 경우 사용자에게 안내
      if (!opened || opened.closed || typeof opened.closed === "undefined") {
        // iOS에서는 Safari로 열기 위한 시도
        if (/iphone|ipad|ipod/.test(ua)) {
          window.location.href = `x-web-search://?${encodeURIComponent(
            currentUrl
          )}`;
          // 백업으로 직접 URL 변경
          setTimeout(() => {
            window.location.href = currentUrl;
          }, 1000);
        } else {
          // Android에서는 인텐트 사용
          window.location.href = `intent://${currentUrl.replace(
            /https?:\/\//,
            ""
          )}#Intent;scheme=https;action=android.intent.action.VIEW;end`;
        }
      }
      return;
    }
  }, []);

  return null;
}
