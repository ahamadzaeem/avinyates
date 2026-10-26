"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "../navigation/Navbar";

interface HeroSectionProps {
  onReplayLoading?: () => void;
}

export default function HeroSection({ onReplayLoading }: HeroSectionProps) {
  return (
    <div className="relative w-full bg-black text-white select-none">
      {/* 4K Rotating Earth Background Video - Permanently Fixated in Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          src="/rotating_earth.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Subtle dark overlay to keep video clear while elevating text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
      </div>

      {/* Global Navigation Bar */}
      <Navbar currentPath="/" />

      {/* SECTION 1: Three-Word Hook (Inspire, Innovate, Ignite) */}
      <section className="relative z-20 min-h-[100dvh] w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-8 flex flex-col justify-between">
        <div className="my-auto max-w-2xl lg:max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          {/* Eyebrow with cyan dash accent */}
          <div className="flex items-center gap-2.5 mb-5 sm:mb-7">
            <span className="w-5 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_10px_#38bdf8]" />
            <span
              className="text-[11px] sm:text-xs tracking-[0.3em] text-neutral-300 uppercase font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              AVINYATES GLOBAL
            </span>
          </div>

          {/* Three-Word Headline: Inspire, Innovate, Ignite */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] text-white font-light leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>Inspire.</span>{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.55)]">
              Innovate.
            </span>{" "}
            <span className="font-medium text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
              Ignite.
            </span>
          </h1>

          {/* Refined introductory subtext */}
          <p
            className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-light max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Pioneering breakthrough ventures and next-generation technologies to unlock futuristic opportunities for mankind.
          </p>

          {/* Action Button linking to Mission Section */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#mission"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/40 hover:border-white bg-black/40 hover:bg-black/70 backdrop-blur-md text-xs sm:text-sm text-white font-medium transition-all duration-300 group shadow-xl shadow-black/80 active:scale-95"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Explore Our Mission</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator linking to Section 2 */}
        <a
          href="#mission"
          className="pb-4 flex flex-col items-center justify-center group cursor-pointer transition-opacity hover:opacity-100 opacity-80"
          aria-label="Scroll to Mission Statement"
        >
          <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2 font-medium group-hover:text-cyan-400 transition-colors">
            SCROLL
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-white/40 to-white/80 group-hover:via-cyan-400 group-hover:to-cyan-400 transition-colors" />
          <div className="w-6 h-6 mt-1 rounded-full border border-white/30 group-hover:border-cyan-400/60 flex items-center justify-center text-white/80 group-hover:text-cyan-400 shadow-lg transition-colors">
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </a>
      </section>

      {/* SECTION 2: Our Mission - Exactly Matching Template Image (No Boxes) */}
      <section
        id="mission"
        className="relative z-20 min-h-[100dvh] w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-8 flex flex-col justify-between"
      >
        <div className="my-auto max-w-2xl lg:max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
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

          {/* Mission Headline exactly like template */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-white font-normal leading-[1.18] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            To be the planet&apos;s{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">
              most innovative
            </span>{" "}
            enterprise by creating futuristic opportunities for mankind.
          </h2>

          {/* Pill Outline Button */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#"
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

        {/* Minimalist Bottom-Center Scroll Indicator Matching Reference Image */}
        <div className="pb-4 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-white/40 to-white/80" />
          <div className="w-6 h-6 mt-1 rounded-full border border-white/30 flex items-center justify-center text-white/80 shadow-lg">
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
