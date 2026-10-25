"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onReplayLoading?: () => void;
}

export default function HeroSection({ onReplayLoading }: HeroSectionProps) {
  return (
    <div className="relative min-h-[100dvh] w-full bg-black text-white flex flex-col justify-between overflow-hidden select-none">
      {/* 4K Rotating Earth Background Video */}
      <video
        src="/rotating_earth.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center pointer-events-none z-0"
      />

      {/* Subtle Dark Gradient on the left side to guarantee high-contrast legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none z-10 md:from-black/75 md:via-black/25" />

      {/* Navigation Bar */}
      <header className="relative z-20 w-full px-6 sm:px-10 md:px-16 py-6 sm:py-8 flex items-center justify-between">
        {/* Brand Logo Lockup: Ai Infinity + AVINYATES INDIA */}
        <div className="relative w-48 sm:w-60 md:w-72 h-12 sm:h-14 md:h-16 flex items-center">
          <Image
            src="/logo_transparent.png"
            alt="AVINYATES INDIA - Inspiring Innovation"
            fill
            priority
            sizes="(max-width: 640px) 192px, 288px"
            className="object-contain object-left drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-sm font-normal text-neutral-300">
          <a
            href="#story"
            className="hover:text-white transition-colors tracking-wide"
          >
            Our Story
          </a>
          <a
            href="#brands"
            className="hover:text-white transition-colors tracking-wide"
          >
            Our Brands
          </a>
          <a
            href="#innovation"
            className="hover:text-white transition-colors tracking-wide"
          >
            Innovation
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors tracking-wide"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu indicator or replay option */}
        {onReplayLoading && (
          <button
            onClick={onReplayLoading}
            className="md:hidden px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-neutral-300 hover:text-white transition-all backdrop-blur-sm"
          >
            Replay
          </button>
        )}
      </header>

      {/* Main Hero Content (Left Aligned matching reference image) */}
      <main className="relative z-20 w-full px-6 sm:px-10 md:px-16 py-12 md:py-24 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* OUR MISSION with cyan dash accent */}
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <span className="w-5 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
            <span
              className="text-[11px] sm:text-xs tracking-[0.28em] text-neutral-300 uppercase font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              OUR MISSION
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-white font-normal leading-[1.18] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            To be the planet&apos;s{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
              most innovative
            </span>{" "}
            enterprise by creating futuristic opportunities for mankind.
          </h1>

          {/* Pill Outline Button */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#explore"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-white/30 hover:border-white/80 bg-black/20 hover:bg-black/50 backdrop-blur-md text-xs sm:text-sm text-white font-normal transition-all duration-300 group shadow-lg shadow-black/40 active:scale-95"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Explore Avinyates</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">
                →
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Minimalist Bottom-Center Scroll Indicator */}
      <div className="relative z-20 pb-6 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-white/30 to-white/70" />
        <div className="w-6 h-6 mt-1 rounded-full border border-white/25 flex items-center justify-center text-white/70">
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
