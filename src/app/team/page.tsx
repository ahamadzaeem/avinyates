"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { Users, Compass, Award, Lightbulb, Globe, Shield } from "lucide-react";

export default function TeamPage() {
  const leadership = [
    {
      name: "Executive Leadership",
      role: "Strategic Direction & Governance",
      desc: "Guiding Avinyates India's global trajectory across high-growth frontier sectors with bold vision and uncompromising ethical standards.",
      icon: Compass,
      tag: "VISION",
    },
    {
      name: "Frontier Aerospace & Defence",
      role: "Aeronautics & Autonomous Systems",
      desc: "Distinguished propulsion engineers and defense technology veterans pioneering next-generation aerospace capabilities.",
      icon: Shield,
      tag: "DEFENCE",
    },
    {
      name: "Food Revolution & Nutrition",
      role: "Clean Food Science & Formulation",
      desc: "Pioneering bio-chemists and food technologists dedicated to 100% preservative-free, zero-chemical, zero-added-sugar FMCG excellence.",
      icon: Award,
      tag: "FMCG",
    },
    {
      name: "Clean Energy & Grid Systems",
      role: "Sustainable Infrastructure & Storage",
      desc: "Renewable energy pioneers developing high-density solid-state battery reserves and intelligent decentralized distribution.",
      icon: Lightbulb,
      tag: "ENERGY",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none">
      <Navbar currentPath="/team" />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] pt-32 sm:pt-40 md:pt-48 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PEOPLE &amp; PURPOSE
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Team
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The visionaries, engineers, and scientists united by a single purpose: inspiring radical innovation and elevating human potential across India and the globe.
          </p>
        </div>
      </section>

      {/* Leadership & Divisions Showcase - Zero Boxes */}
      <section className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {leadership.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between pt-8 border-t border-white/10 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase">
                        0{index + 1} / {item.tag}
                      </span>
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl text-white font-light tracking-wide mb-2 group-hover:text-cyan-400 transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-cyan-400/90 font-light mb-3">
                      {item.role}
                    </p>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© {new Date().getFullYear()} AVINYATES INDIA. All Rights Reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/fmcg" className="text-neutral-400 hover:text-white transition-colors">FMCG</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/aerospace-defence" className="text-neutral-400 hover:text-white transition-colors">Aerospace &amp; Defence</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/energy" className="text-neutral-400 hover:text-white transition-colors">Energy</Link>
        </div>
      </footer>
    </div>
  );
}
