"use client";

import React from "react";

interface BackgroundImageOverlayProps {
  src: string;
  opacity?: number; // 0 ~ 1
  className?: string;
}

export default function BackgroundImageOverlay({
  src,
  opacity = 0.3,
  className = "",
}: BackgroundImageOverlayProps) {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-no-repeat bg-bottom ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        backgroundBlendMode: "overlay",
      }}
    />
  );
}
