"use client";

import React, { useState, useEffect } from "react";
import { APPLE_LANGUAGES, AppleLanguageItem } from "@/data/languages";

export default function AppleLanguageChanger() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    // Fast Apple-style pace:
    // Total cycle: 900ms | Transition: 280ms
    const interval = setInterval(() => {
      setCurrentIndex((curr) => {
        setPrevIndex(curr);
        return (curr + 1) % APPLE_LANGUAGES.length;
      });

      const timeout = setTimeout(() => {
        setPrevIndex(null);
      }, 300);

      return () => clearTimeout(timeout);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  const current = APPLE_LANGUAGES[currentIndex];
  const previous = prevIndex !== null ? APPLE_LANGUAGES[prevIndex] : null;

  const renderWord = (item: AppleLanguageItem) => {
    const isEnglish = item.id === "en";

    return (
      <h1
        className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-white whitespace-nowrap leading-none"
        style={{
          fontFamily: isEnglish ? "'Montserrat', sans-serif" : item.fontFamily,
          fontWeight: isEnglish ? 600 : item.fontWeight || 500, // Montserrat SemiBold (600)
          letterSpacing: isEnglish ? "0.14em" : item.letterSpacing || "normal",
        }}
      >
        {item.text}
      </h1>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-center select-none w-full max-w-sm sm:max-w-md md:max-w-xl px-2 sm:px-4 -mt-8 sm:-mt-12 md:-mt-16">
      {/* Dynamic Word Stage with Mobile-Friendly Overlapping Crossfade */}
      <div className="relative w-full h-8 xs:h-9 sm:h-11 md:h-14 flex items-center justify-center overflow-visible">
        {/* Previous Word (fading out smoothly) */}
        {previous && (
          <div
            key={`prev-${previous.id}`}
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-[280ms] ease-out opacity-0 -translate-y-1.5 scale-[0.98] blur-[2px]"
          >
            {renderWord(previous)}
          </div>
        )}

        {/* Current Word (fading in smoothly) */}
        <div
          key={`curr-${current.id}`}
          className="absolute inset-0 flex items-center justify-center transition-all duration-[280ms] ease-out opacity-100 translate-y-0 scale-100 blur-0"
        >
          {renderWord(current)}
        </div>
      </div>

      {/* Montserrat Regular (400) with wider letter spacing for Inspiring Innovation */}
      <div className="mt-1 sm:mt-1.5">
        <span
          className="text-[9px] xs:text-[10px] sm:text-xs text-neutral-300 font-normal whitespace-nowrap block"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            letterSpacing: "0.26em",
          }}
        >
          Inspiring Innovation
        </span>
      </div>
    </div>
  );
}
