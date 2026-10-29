"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-20 pt-6 sm:pt-7 md:pt-9 lg:pt-10 flex items-center justify-between pointer-events-auto bg-transparent transition-all">
      {/* Brand Logo Lockup: Chrome Emblem + Scaled Montserrat Typography */}
      <Link
        href="/"
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
      </Link>

      {/* Desktop Nav: Our Team & Businesses (with Dropdown) */}
      <nav
        className="hidden md:flex items-center gap-8 lg:gap-14 xl:gap-16 text-sm md:text-[16px] lg:text-[18px] xl:text-[19px] font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Our Team Link */}
        <Link
          href="/team"
          className="text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap py-2"
        >
          Our Team
        </Link>

        {/* Businesses Dropdown Menu */}
        <div
          ref={dropdownRef}
          className="relative py-2"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap focus:outline-none"
            aria-expanded={dropdownOpen}
          >
            <span>Businesses</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                dropdownOpen ? "rotate-180 text-cyan-400" : "text-neutral-400"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 min-w-[200px] z-50 animate-in fade-in slide-in-from-top-1 duration-200 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-black/80 backdrop-blur-2xl">
              {/* Cyan top accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent" />

              <div className="flex flex-col px-2 py-3 gap-1">
                {/* FMCG */}
                <Link
                  href="/businesses/fmcg"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-neutral-300 group-hover:text-white text-sm font-light tracking-widest uppercase transition-all">
                    FMCG
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                {/* Aerospace and Defence */}
                <Link
                  href="/businesses/aerospace-defence"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-neutral-300 group-hover:text-white text-sm font-light tracking-widest uppercase transition-all">
                    AEROSPACE &amp; DEFENCE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                {/* Energy */}
                <Link
                  href="/businesses/energy"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-neutral-300 group-hover:text-white text-sm font-light tracking-widest uppercase transition-all">
                    ENERGY
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Action Button: Get in Touch */}
        <Link
          href="/team"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BFFF]/60 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs text-white font-normal tracking-wide transition-all duration-300 group"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span>Get in Touch</span>
          <span className="text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-neutral-300 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Frameless Slide-Down Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 px-8 py-8 bg-black/95 backdrop-blur-3xl flex flex-col gap-6 text-neutral-200 z-50 md:hidden animate-in fade-in duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-light hover:text-white transition-colors"
          >
            Our Team
          </Link>

          <div className="flex flex-col gap-4">
            <span className="text-xs text-neutral-500 tracking-[0.25em] uppercase font-semibold">
              Businesses
            </span>
            <div className="flex flex-col gap-3 pl-3">
              <Link
                href="/businesses/fmcg"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-300 hover:text-white font-light transition-colors"
              >
                FMCG
              </Link>
              <Link
                href="/businesses/aerospace-defence"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-300 hover:text-white font-light transition-colors"
              >
                AEROSPACE &amp; DEFENCE
              </Link>
              <Link
                href="/businesses/energy"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-300 hover:text-white font-light transition-colors"
              >
                ENERGY
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
