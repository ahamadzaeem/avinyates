"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { Zap, Sun, BatteryCharging, Wind } from "lucide-react";

export default function EnergyPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none">
      <Navbar currentPath="/businesses/energy" />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] pt-32 sm:pt-40 md:pt-48 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BUSINESS DIVISIONS
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Sustainable{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Energy
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Powering the future through breakthrough renewable generation, high-density solid-state storage, and intelligent decentralized grid networks.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-lg text-white font-medium mb-1">Photovoltaic Innovation</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Next-generation perovskite solar architecture delivering quantum-level conversion efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-lg text-white font-medium mb-1">Solid-State Storage</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Industrial-scale grid battery reserves built on non-toxic, ultra-durable solid electrolyte chemistry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg text-white font-medium mb-1">Smart Grid Systems</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                AI-driven decentralized power distribution optimizing real-time demand balance with zero waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© {new Date().getFullYear()} AVINYATES INDIA. Energy Division.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/team" className="text-neutral-400 hover:text-white transition-colors">Our Team</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/fmcg" className="text-neutral-400 hover:text-white transition-colors">FMCG</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/aerospace-defence" className="text-neutral-400 hover:text-white transition-colors">Aerospace &amp; Defence</Link>
        </div>
      </footer>
    </div>
  );
}
