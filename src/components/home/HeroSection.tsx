"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Globe2, ShieldCheck, Cpu, ArrowUpRight, PlayCircle } from "lucide-react";

interface HeroSectionProps {
  onReplayLoading: () => void;
}

export default function HeroSection({ onReplayLoading }: HeroSectionProps) {
  const divisions = [
    {
      title: "Advanced Technologies",
      desc: "Next-generation software ecosystems, cloud infrastructure & sovereign AI models.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      tag: "Deep Tech",
    },
    {
      title: "Global Enterprise",
      desc: "Cross-border conglomerate operations, supply chain resilience, and digital transformation.",
      icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
      tag: "International",
    },
    {
      title: "Sustainable Innovation",
      desc: "Pioneering renewable energy transitions and next-gen material engineering.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      tag: "Ecosystems",
    },
  ];

  return (
    <div className="relative min-h-[100dvh] bg-black text-white flex flex-col justify-between selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[450px] bg-cyan-600/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[280px] sm:w-[450px] h-[300px] bg-indigo-600/10 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />

      {/* Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-28 sm:w-36 md:w-40 h-10 sm:h-12 md:h-14">
            <Image
              src="/logo_transparent.png"
              alt="AVINYATES INDIA"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 112px, 160px"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#divisions" className="hover:text-cyan-400 transition-colors">Divisions</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#ventures" className="hover:text-cyan-400 transition-colors">Ventures</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Global Offices</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onReplayLoading}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-[11px] sm:text-xs text-slate-300 flex items-center gap-1.5 transition-all shadow-sm hover:border-cyan-400/40 active:scale-95 touch-manipulation"
          >
            <PlayCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xs:inline">Replay</span> Intro
          </button>
          <button className="px-3 sm:px-4 py-1.5 rounded-lg bg-white text-black text-[11px] sm:text-xs font-semibold hover:bg-slate-200 transition-all active:scale-95 touch-manipulation">
            Contact
          </button>
        </div>
      </header>

      {/* Hero Body */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-neutral-900/90 border border-cyan-500/30 text-[11px] sm:text-xs font-medium text-cyan-300 shadow-md mb-6 sm:mb-8">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 animate-pulse" />
          <span>Multinational Diversified Conglomerate</span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl uppercase text-white leading-tight"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          Inspiring Innovation Across Boundaries
        </h1>

        {/* Subhead */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-neutral-400 max-w-3xl leading-relaxed px-2">
          AVINYATES INDIA unites breakthrough technology, industrial leadership, and sustainable infrastructure to power global growth across continents.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#divisions"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-sm font-semibold text-black transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 active:scale-95 touch-manipulation"
          >
            <span>Explore Enterprises</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={onReplayLoading}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-sm font-medium text-neutral-200 transition-all flex items-center justify-center gap-2 active:scale-95 touch-manipulation"
          >
            <PlayCircle className="w-4 h-4 text-cyan-400" />
            <span>Replay Loading Intro</span>
          </button>
        </div>

        {/* Divisions Cards Grid */}
        <div id="divisions" className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full text-left">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1 shadow-xl shadow-black/40"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  {div.icon}
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500 group-hover:text-cyan-400 transition-colors">
                  {div.tag}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                {div.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {div.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-500 gap-3 text-center sm:text-left">
        <div>
          © 2026 AVINYATES INDIA. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-neutral-400">Global Headquarters: India</span>
          <span>•</span>
          <span className="text-neutral-400">Multinational Ventures</span>
        </div>
      </footer>
    </div>
  );
}
