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

      {/* Navigation Bar - Prominent & Sized Exactly Like Reference */}
      <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-20 pt-7 sm:pt-8 md:pt-10 lg:pt-12 flex items-center justify-between">
        {/* Brand Logo Lockup: Chrome Emblem + Scaled Montserrat Typography */}
        <a
          href="#"
          className="flex items-center gap-3 sm:gap-4 md:gap-5 select-none group transition-transform duration-300 hover:scale-[1.02]"
          aria-label="AVINYATES INDIA"
        >
          {/* 3D Chrome Infinity Emblem (A + Infinity + i) */}
          <div className="relative w-14 sm:w-18 md:w-24 lg:w-28 xl:w-32 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 shrink-0">
            <Image
              src="/chrome_emblem.png"
              alt="Avinyates Emblem"
              fill
              priority
              sizes="(max-width: 640px) 72px, (max-width: 1024px) 112px, 128px"
              className="object-contain object-left drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col items-center">
            <span
              className="text-white text-sm sm:text-base md:text-xl lg:text-[23px] xl:text-[26px] font-semibold tracking-[0.16em] uppercase leading-none whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              AVINYATES INDIA
            </span>
            <span
              className="text-neutral-400 text-[8.5px] sm:text-[10px] md:text-xs lg:text-[13px] xl:text-[14.5px] font-normal tracking-[0.26em] leading-none mt-1 sm:mt-1.5 md:mt-2 text-center whitespace-nowrap drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Inspiring Innovation
            </span>
          </div>
        </a>

        {/* Nav Links: Exactly Our Story, Our Brands, Innovation, Contact - Bigger & Prominent */}
        <nav
          className="flex items-center gap-4 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-18 text-xs sm:text-sm md:text-[16px] lg:text-[18px] xl:text-[19px] font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <a
            href="#story"
            className="text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Our Story
          </a>
          <a
            href="#brands"
            className="text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Our Brands
          </a>
          <a
            href="#innovation"
            className="text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Innovation
          </a>
          <a
            href="#contact"
            className="text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Hero Content (Section 1: Three-Word Hook) */}
      <main className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-10 sm:py-14 md:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
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
      </main>

      {/* Clickable Bottom-Center Scroll Indicator */}
      <a
        href="#mission"
        className="relative z-20 pb-7 flex flex-col items-center justify-center group cursor-pointer transition-opacity hover:opacity-100 opacity-80"
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

      {/* SECTION 2: Mission Statement (Second Session on the same page) */}
      <section
        id="mission"
        className="relative z-20 w-full min-h-[92vh] py-24 sm:py-32 md:py-36 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 bg-gradient-to-b from-black via-[#040810] to-black border-t border-white/10 flex flex-col justify-between"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto w-full my-auto">
          {/* OUR MISSION with cyan dash accent */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.3em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              OUR MISSION
            </span>
          </div>

          {/* Refined Smaller Font Headline as requested */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white font-light leading-[1.4] tracking-tight max-w-4xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            To be the planet&apos;s{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]">
              most innovative
            </span>{" "}
            enterprise by creating futuristic opportunities for mankind.
          </h2>

          {/* 3 Strategic Pillars of the Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-18 pt-10 border-t border-white/10">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                01 / INSPIRE
              </div>
              <h3 className="text-lg text-white font-medium mb-2">Visionary Purpose</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Igniting transformative ideas that push the boundaries of human potential and global enterprise.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                02 / INNOVATE
              </div>
              <h3 className="text-lg text-white font-medium mb-2">Breakthrough Horizons</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Engineering advanced technological solutions and ventures tailored for future generations.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                03 / IGNITE
              </div>
              <h3 className="text-lg text-white font-medium mb-2">Enduring Impact</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Executing strategic global initiatives that yield sustainable prosperity and human empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} AVINYATES INDIA. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Back to Top ↑
            </a>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">Inspiring Innovation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
