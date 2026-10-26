"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { ArrowRight } from "lucide-react";

export default function FMCGPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none">
      {/* Global Fixed Navbar */}
      <Navbar currentPath="/businesses/fmcg" />

      {/* Hero Section: Food Revolution */}
      <section className="relative min-h-[90vh] pt-32 sm:pt-40 md:pt-48 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto w-full z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              FMCG / FOOD REVOLUTION
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Food{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Revolution
            </span>
          </h1>

          {/* Mission Subtitle */}
          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Re-engineering the global nutritional paradigm through uncompromised purity, advanced clean-label preservation, and whole-body vitality.
          </p>

          {/* The 3 Core Pillars - Clean, Open Editorial Layout (Zero Boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-16 pt-12 border-t border-white/10">
            {/* Zero Preservatives */}
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                01 / PURITY
              </span>
              <h2
                className="text-2xl sm:text-3xl text-white font-light tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Zero Preservatives
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed">
                Clean aseptic technology and sterile freshness preservation without chemical stabilizers, nitrates, or artificial shelf-life extenders.
              </p>
            </div>

            {/* Zero Chemicals */}
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                02 / NATURE
              </span>
              <h2
                className="text-2xl sm:text-3xl text-white font-light tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Zero Chemicals
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed">
                100% natural, farm-origin ingredients strictly devoid of synthetic additives, toxic pesticides, artificial dyes, or petroleum fillers.
              </p>
            </div>

            {/* Zero Added Sugar */}
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                03 / HEALTH
              </span>
              <h2
                className="text-2xl sm:text-3xl text-white font-light tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Zero Added Sugar
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed">
                Naturally delicious nourishment relying solely on raw botanical sweetness and whole fruit nectar—never sucrose, syrups, or artificial substitutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: OUR BRANDS - Boxless Editorial Presentation */}
      <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="max-w-2xl mb-20 sm:mb-24">
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold block mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PORTFOLIO EXCELLENCE
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Brands
            </h2>
            <p className="text-base text-neutral-400 font-light mt-4 leading-relaxed">
              Pioneering consumer brands built on uncompromising biological integrity and taste perfection.
            </p>
          </div>

          {/* Brands Showcase - Open, Frameless, Luxury Magazine Layout */}
          <div className="flex flex-col gap-28 sm:gap-36">
            {/* BRAND 1: GULPIT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Product Visual */}
              <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/brands/gulpit.jpg"
                  alt="Gulpit Healthy Cold-Pressed Beverage"
                  fill
                  priority
                  className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Product Narrative - Pure Typography (No Box) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono tracking-[0.28em] text-[#38bdf8] uppercase">
                    COLD-PRESSED JUICES &amp; HYDRATION
                  </span>
                </div>

                <h3
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Gulpit
                </h3>

                <p className="text-base sm:text-lg text-cyan-400/90 font-light tracking-wider mt-2 mb-6">
                  Pure Refreshment. Zero Compromise.
                </p>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                  Cold-pressed natural hydration extracted from vibrant real fruits, living electrolytes, and restorative organic botanicals. Retaining complete enzymatic vitality through unheated processing—never diluted, never preserved artificially.
                </p>

                {/* Minimalist Feature Tags without boxes */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400 font-light pb-8 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Cold-Pressed Extraction
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Zero Preservatives
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Zero Added Sugar
                  </span>
                </div>
              </div>
            </div>

            {/* BRAND 2: SNACKY'S */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Product Visual */}
              <div className="lg:col-span-6 lg:order-2 relative aspect-square sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/brands/snackys.jpg"
                  alt="Snacky's Wholesome Clean Roasted Snacks"
                  fill
                  priority
                  className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Product Narrative - Pure Typography (No Box) */}
              <div className="lg:col-span-6 lg:order-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono tracking-[0.28em] text-[#38bdf8] uppercase">
                    ARTISANAL ROASTED SUPERFOOD SNACKS
                  </span>
                </div>

                <h3
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Snacky&apos;s
                </h3>

                <p className="text-base sm:text-lg text-cyan-400/90 font-light tracking-wider mt-2 mb-6">
                  Crave Clean. Snack Pure.
                </p>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                  Artisanal slow-roasted almonds, ancient grains, and superfood blends crafted with gentle dry heat and zero chemical seasonings. Delivering dense macronutrient fuel, satisfying natural crunch, and untainted biological purity for guilt-free all-day nourishment.
                </p>

                {/* Minimalist Feature Tags without boxes */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400 font-light pb-8 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Slow Dry Roasted
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Zero Chemicals
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Zero Added Sugar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© {new Date().getFullYear()} AVINYATES INDIA. FMCG Division.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-neutral-600">•</span>
          <Link href="/team" className="text-neutral-400 hover:text-white transition-colors">
            Our Team
          </Link>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400">Food Revolution</span>
        </div>
      </footer>
    </div>
  );
}
