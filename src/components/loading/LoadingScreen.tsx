"use client";

import React, { useRef, useEffect, useState } from "react";
import AppleLanguageChanger from "./AppleLanguageChanger";
import { ArrowRight } from "lucide-react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Force mobile autoplay
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback handled silently
      });
    }

    // Automatically trigger shutter open after 6 seconds
    const autoTimer = setTimeout(() => {
      handleOpenShutter();
    }, 6000);

    return () => clearTimeout(autoTimer);
  }, []);

  const handleOpenShutter = () => {
    if (isExiting) return;
    setIsExiting(true);

    // Wait for the shutter split animation to complete before unmounting
    setTimeout(() => {
      onComplete?.();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto select-none overflow-hidden h-[100dvh] w-screen bg-black">
      {/* TOP SHUTTER PANEL (51% height prevents mobile 1px gap leak) */}
      <div
        className={`absolute top-0 left-0 right-0 h-[51%] bg-black z-10 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] will-change-transform ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* BOTTOM SHUTTER PANEL */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[51%] bg-black z-10 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] will-change-transform ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* CENTRAL CONTENT STAGE */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-4 transition-all duration-500 ease-out ${
          isExiting ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md md:max-w-xl -mt-4 sm:-mt-8">
          {/* Zoomed 3D Chrome Infinity Video with Mobile Safe Aspect Ratio */}
          <div className="relative w-full h-[140px] xs:h-[160px] sm:h-[190px] md:h-[230px] overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              src="/loading_animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              controls={false}
              disablePictureInPicture
              className="w-full h-full object-cover scale-[1.25] xs:scale-[1.3] sm:scale-[1.4] md:scale-[1.5] pointer-events-none mix-blend-screen"
            />
          </div>

          {/* Multilingual Words - Positioned closely below the logo */}
          <AppleLanguageChanger />
        </div>
      </div>

      {/* Mobile-Friendly Safe Area Skip Button */}
      {onComplete && !isExiting && (
        <button
          onClick={handleOpenShutter}
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 text-xs text-neutral-300 hover:text-white transition-all backdrop-blur-md flex items-center gap-1.5 active:scale-95 shadow-lg touch-manipulation"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
