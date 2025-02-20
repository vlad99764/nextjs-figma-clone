"use client";

import React, { useEffect, useRef } from "react";

const ScreenFitText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex h-full w-full items-center overflow-hidden"
      ref={containerRef}
    >
      <span
        className="z-[-1] absolute top-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700 opacity-10 pointer-events-none"
        ref={textRef}
      >
        FIGMAN CREATE & SHARE
      </span>
    </div>
  );
};

export default ScreenFitText;