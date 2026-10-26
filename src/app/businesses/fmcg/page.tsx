"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { ShieldCheck, Leaf, Sparkles, ArrowRight, HeartHandshake } from "lucide-react";

export default function FMCGPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none">
      {/* Global Fixed Navbar */}
      <Navbar currentPath="/businesses/fmcg" />

      {/* Hero Section: Food Revolution */}
      <section className="relative min-h-[90vh] pt-32 sm:pt-40 md:pt-48 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

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

          {/* The 3 Core Pillars (Hero Banner) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-8 border-t border-white/10">
            {/* Zero Preservatives */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl text-white font-semibold tracking-tight">
                Zero Preservatives
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                Clean aseptic technology and sterile freshness preservation without chemical stabilizers or shelf-life extenders.
              </p>
            </div>

            {/* Zero Chemicals */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl text-white font-semibold tracking-tight">
                Zero Chemicals
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                100% natural, farm-origin ingredients strictly devoid of synthetic additives, dyes, petroleum derivatives, or fillers.
              </p>
            </div>

            {/* Zero Added Sugar */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl text-white font-semibold tracking-tight">
                Zero Added Sugar
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                Naturally delicious nourishment relying solely on real fruit and botanical sweetness—never sucrose or artificial sweeteners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: OUR BRANDS */}
      <section className="relative z-10 py-20 sm:py-28 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 bg-gradient-to-b from-black via-[#060a12] to-black border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold block mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PORTFOLIO EXCELLENCE
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Brands
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-4">
              Pioneering consumer brands built on uncompromising biological integrity and taste perfection.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* BRAND 1: GULPIT */}
            <div className="group rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl">
              {/* Product Visual Showcase */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] overflow-hidden bg-neutral-950 flex items-center justify-center">
                <Image
                  src="/brands/gulpit.jpg"
                  alt="Gulpit Healthy Drink"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                  BEVERAGES
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Gulpit
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">100% PURE JUICE</span>
                  </div>
                  <p className="text-sm font-medium text-cyan-400/90 tracking-wider mb-4">
                    Pure Refreshment. Zero Compromise.
                  </p>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    Cold-pressed natural hydration infused with vibrant real fruits, living electrolytes, and restorative botanicals. Never diluted, never sweetened artificially.
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                      Cold-Pressed
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                      Zero Preservatives
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                      Zero Sugar
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-neutral-400 uppercase">
                    Next-Gen Hydration
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-cyan-500/20 flex items-center justify-center text-white group-hover:text-cyan-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* BRAND 2: SNACKY'S */}
            <div className="group rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl">
              {/* Product Visual Showcase */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] overflow-hidden bg-neutral-950 flex items-center justify-center">
                <Image
                  src="/brands/snackys.jpg"
                  alt="Snacky's Healthy Roasted Snacks"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                  SNACKS
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Snacky&apos;s
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">ROASTED &amp; PURE</span>
                  </div>
                  <p className="text-sm font-medium text-cyan-400/90 tracking-wider mb-4">
                    Crave Clean. Snack Pure.
                  </p>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    Artisanal roasted almonds, ancient grains, and superfood blends crafted with slow heat and zero chemicals. Providing wholesome all-day energy with guilt-free crunch.
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                      Slow-Roasted
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                      Zero Chemicals
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                      Zero Added Sugar
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-neutral-400 uppercase">
                    Wholesome Nutrition
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-cyan-500/20 flex items-center justify-center text-white group-hover:text-cyan-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
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
