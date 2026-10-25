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
      {/* 4K Rotating Earth Background Video (Normal Speed) */}
      <video
        src="/rotating_earth.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center pointer-events-none z-0"
      />

      {/* Small, subtle dark overlay to keep video clear while elevating text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10 pointer-events-none z-10" />

      {/* Navigation Bar - Exactly Matching Reference Image */}
      <header className="relative z-30 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[72px] pt-6 sm:pt-7 md:pt-9 lg:pt-10 flex items-center justify-between">
        {/* Brand Logo Lockup: Chrome Emblem + Montserrat Typography */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4 select-none group transition-transform duration-300 hover:scale-[1.01]"
          aria-label="AVINYATES INDIA"
        >
          {/* 3D Chrome Infinity Emblem (A + Infinity + i) */}
          <div className="relative w-11 sm:w-13 md:w-16 lg:w-[72px] h-6 sm:h-7 md:h-8 lg:h-[36px] shrink-0">
            <Image
              src="/chrome_emblem.png"
              alt="Avinyates Emblem"
              fill
              priority
              sizes="(max-width: 640px) 44px, (max-width: 1024px) 64px, 72px"
              className="object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col items-center">
            <span
              className="text-white text-xs sm:text-sm md:text-base lg:text-[17.5px] xl:text-[18.5px] font-semibold tracking-[0.14em] uppercase leading-none whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              AVINYATES INDIA
            </span>
            <span
              className="text-neutral-400 text-[7px] sm:text-[8px] md:text-[9.5px] lg:text-[10px] xl:text-[10.5px] font-normal tracking-[0.24em] leading-none mt-1 sm:mt-1.5 text-center whitespace-nowrap drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Inspiring Innovation
            </span>
          </div>
        </a>

        {/* Nav Links: Exactly Our Story, Our Brands, Innovation, Contact */}
        <nav
          className="flex items-center gap-3.5 sm:gap-6 md:gap-9 lg:gap-13 xl:gap-16 text-[11px] sm:text-xs md:text-sm lg:text-[14.5px] font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <a
            href="#story"
            className="text-neutral-300 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Our Story
          </a>
          <a
            href="#brands"
            className="text-neutral-300 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Our Brands
          </a>
          <a
            href="#innovation"
            className="text-neutral-300 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Innovation
          </a>
          <a
            href="#contact"
            className="text-neutral-300 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Hero Content (Left Aligned matching reference image) */}
      <main className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-16 py-10 sm:py-14 md:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          {/* OUR MISSION with cyan dash accent */}
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <span className="w-5 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_10px_#38bdf8]" />
            <span
              className="text-[11px] sm:text-xs tracking-[0.28em] text-neutral-200 uppercase font-medium"
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
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">
              most innovative
            </span>{" "}
            enterprise by creating futuristic opportunities for mankind.
          </h1>

          {/* Pill Outline Button */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#explore"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-white/40 hover:border-white bg-black/30 hover:bg-black/60 backdrop-blur-md text-xs sm:text-sm text-white font-normal transition-all duration-300 group shadow-xl shadow-black/70 active:scale-95"
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
        <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-white/40 to-white/80" />
        <div className="w-6 h-6 mt-1 rounded-full border border-white/30 flex items-center justify-center text-white/80 shadow-lg">
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
