"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onReplayLoading?: () => void;
}

export default function HeroSection({ onReplayLoading }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
      <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-[72px] pt-7 sm:pt-8 md:pt-10 lg:pt-11 flex items-center justify-between">
        {/* Brand Logo Lockup: Ai Infinity + AVINYATES INDIA + Inspiring Innovation */}
        <a
          href="#"
          className="relative w-48 sm:w-56 md:w-64 lg:w-[276px] h-11 sm:h-12 md:h-14 lg:h-15 flex items-center group transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Avinyates India Home"
        >
          <Image
            src="/logo_transparent.png"
            alt="AVINYATES INDIA - Inspiring Innovation"
            fill
            priority
            sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 280px"
            className="object-contain object-left drop-shadow-[0_2px_15px_rgba(0,0,0,0.85)]"
          />
        </a>

        {/* Desktop Nav Links: Exactly Our Story, Our Brands, Innovation, Contact */}
        <nav
          className="hidden md:flex items-center gap-8 md:gap-11 lg:gap-14 xl:gap-16 text-sm lg:text-[15px] font-normal text-neutral-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
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

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-neutral-300 hover:text-white focus:outline-none transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Slide-Down Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-3 mx-4 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-5 text-center text-base font-normal text-neutral-200 shadow-2xl z-50 md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-2 transition-colors border-b border-white/5"
            >
              Our Story
            </a>
            <a
              href="#brands"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-2 transition-colors border-b border-white/5"
            >
              Our Brands
            </a>
            <a
              href="#innovation"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-2 transition-colors border-b border-white/5"
            >
              Innovation
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-2 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
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
