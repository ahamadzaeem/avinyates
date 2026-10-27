"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";

export default function FMCGPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none">
      {/* Fixed Diagonal Milky Way Starfield Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Image
          src="/starfield.png"
          alt="Diagonal Milky Way Starfield"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Ambient Dark Overlay to elevate typography over starry backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Global Fixed Navbar */}
      <Navbar currentPath="/businesses/fmcg" />

      {/* Hero Section: Food Revolution */}
      <section className="relative z-10 min-h-[90vh] pt-32 sm:pt-40 md:pt-48 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Food{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Revolution
            </span>
          </h1>

          {/* Mission Subtitle */}
          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Re-engineering the global nutritional paradigm through uncompromised purity, advanced clean-label preservation, and whole-body vitality.
          </p>

          {/* The 3 Core Pillars - Completely Boxless Pure Floating Typography */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 mt-20">
            {/* Zero Preservatives */}
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                01 / PURITY
              </span>
              <h2
                className="text-2xl sm:text-3xl text-white font-light tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Zero Preservatives
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Clean aseptic technology and sterile freshness preservation without chemical stabilizers, nitrates, or artificial shelf-life extenders.
              </p>
            </div>

            {/* Zero Chemicals */}
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                02 / NATURE
              </span>
              <h2
                className="text-2xl sm:text-3xl text-white font-light tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Zero Chemicals
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                100% natural, farm-origin ingredients strictly devoid of synthetic additives, toxic pesticides, artificial dyes, or petroleum fillers.
              </p>
            </div>

            {/* Zero Added Sugar */}
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                03 / HEALTH
              </span>
              <h2
                className="text-2xl sm:text-3xl text-white font-light tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Zero Added Sugar
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Naturally delicious nourishment relying solely on raw botanical sweetness and whole fruit nectar—never sucrose, syrups, or artificial substitutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: OUR BRANDS - Boxless Editorial Presentation */}
      <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="max-w-2xl mb-24 sm:mb-28">
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold block mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PORTFOLIO EXCELLENCE
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Brands
            </h2>
            <p className="text-base text-neutral-400 font-light mt-4 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              Pioneering consumer brands built on uncompromising biological integrity and taste perfection.
            </p>
          </div>

          {/* Brands Showcase - Seamless Floating Products (Zero Boxes, Soft Masked Edges) */}
          <div className="flex flex-col gap-32 sm:gap-40">
            {/* BRAND 1: GULPIT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Product Visual - Soft Vignette Blending Seamlessly into Starfield (No Hard Box) */}
              <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
                <Image
                  src="/brands/gulpit.jpg"
                  alt="Gulpit Healthy Cold-Pressed Beverage"
                  fill
                  priority
                  className="object-cover object-center hover:scale-[1.03] transition-all duration-700"
                />
              </div>

              {/* Product Narrative - Pure Typography (Zero Boxes) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-xs font-mono tracking-[0.28em] text-[#38bdf8] uppercase mb-2">
                  COLD-PRESSED JUICES &amp; HYDRATION
                </span>

                <h3
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Gulpit
                </h3>

                <p className="text-base sm:text-lg text-cyan-400/90 font-light tracking-wider mt-2 mb-6">
                  Pure Refreshment. Zero Compromise.
                </p>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                  Cold-pressed natural hydration extracted from vibrant real fruits, living electrolytes, and restorative organic botanicals. Retaining complete enzymatic vitality through unheated processing—never diluted, never preserved artificially.
                </p>

                {/* Minimalist Feature Accents without boxes */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400 font-light">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Cold-Pressed Extraction
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Zero Preservatives
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Zero Added Sugar
                  </span>
                </div>
              </div>
            </div>

            {/* BRAND 2: SNACKY'S */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Product Visual - Soft Vignette Blending Seamlessly into Starfield (No Hard Box) */}
              <div className="lg:col-span-6 lg:order-2 relative aspect-square sm:aspect-[4/3] w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
                <Image
                  src="/brands/snackys.jpg"
                  alt="Snacky's Wholesome Clean Roasted Snacks"
                  fill
                  priority
                  className="object-cover object-center hover:scale-[1.03] transition-all duration-700"
                />
              </div>

              {/* Product Narrative - Pure Typography (Zero Boxes) */}
              <div className="lg:col-span-6 lg:order-1 flex flex-col justify-center">
                <span className="text-xs font-mono tracking-[0.28em] text-[#38bdf8] uppercase mb-2">
                  ARTISANAL ROASTED SUPERFOOD SNACKS
                </span>

                <h3
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Snacky&apos;s
                </h3>

                <p className="text-base sm:text-lg text-cyan-400/90 font-light tracking-wider mt-2 mb-6">
                  Crave Clean. Snack Pure.
                </p>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                  Artisanal slow-roasted almonds, ancient grains, and superfood blends crafted with gentle dry heat and zero chemical seasonings. Delivering dense macronutrient fuel, satisfying natural crunch, and untainted biological purity for guilt-free all-day nourishment.
                </p>

                {/* Minimalist Feature Accents without boxes */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400 font-light">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Slow Dry Roasted
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Zero Chemicals
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Zero Added Sugar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Boxless */}
      <footer className="relative z-10 w-full py-14 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
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
          <span className="text-cyan-400">Food Revolution</span>
        </div>
      </footer>
    </div>
  );
}
