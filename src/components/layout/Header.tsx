"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-sm w-full max-w-full overflow-x-clip">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Logo with prominent white card box and warm orange glow */}
          <Link className="flex items-center group" href="/">
            <div className="bg-white px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl border border-orange-200/80 shadow-[0_4px_18px_rgba(251,133,0,0.28)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                alt="Work Zone"
                src="/logo.png"
                width={190}
                height={52}
                priority
                className="h-9 sm:h-12 md:h-13 w-auto object-contain max-w-[160px] sm:max-w-none"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              className="rounded-full px-5 py-2 text-sm font-semibold text-neutral-700 hover:text-fb8500 hover:bg-orange-50/80 transition-all duration-200"
              href="/ads"
            >
              Browse Ads
            </Link>
            <Link
              className="rounded-full px-5 py-2 text-sm font-semibold text-neutral-700 hover:text-fb8500 hover:bg-orange-50/80 transition-all duration-200"
              href="/#categories"
            >
              Categories
            </Link>
            <Link
              className="rounded-full px-5 py-2 text-sm font-semibold text-neutral-700 hover:text-fb8500 hover:bg-orange-50/80 transition-all duration-200"
              href="/about"
            >
              How it works
            </Link>
          </div>

          {/* Action Buttons: Both Vibrant Orange Rounded Pills matching reference */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              className="rounded-full bg-[#fb8500] hover:bg-[#e67300] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 hover:shadow-lg hover:scale-105 transition-all duration-200"
              href="/post"
            >
              + Post Ad
            </Link>
            <Link
              className="rounded-full bg-[#fb8500] hover:bg-[#e67300] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 hover:shadow-lg hover:scale-105 transition-all duration-200"
              href="/login"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg primary-gradient text-white font-bold text-lg"
            aria-label="Menu"
          >
            <span>{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 py-4 px-2 space-y-2 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <Link
              href="/ads"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-orange-50 hover:text-fb8500"
            >
              Browse Ads
            </Link>
            <Link
              href="/#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-orange-50 hover:text-fb8500"
            >
              Categories
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-orange-50 hover:text-fb8500"
            >
              How it works
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/post"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full primary-gradient py-2.5 text-sm font-bold text-white shadow-md"
              >
                + Post Ad
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full primary-gradient py-2.5 text-sm font-bold text-white shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
