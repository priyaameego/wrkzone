"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { POPULAR_METRO_CITIES } from "@/lib/data";

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (city.trim()) params.set("city", city.trim());
    router.push(`/ads?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#173fa3] via-[#143285] to-[#0c1630] pt-14 pb-16 sm:py-24">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
        {/* Announcement Pill Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-950/80 bg-[#122452]/90 px-5 py-2 mb-8 backdrop-blur-md shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wider">
            🚀 WRKZONE&apos;S #1 LOCAL SERVICE MARKETPLACE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-white mb-3 leading-tight tracking-tight break-words">
          Find &amp; Post
        </h1>

        {/* Subhead line: Professional (Sky Blue) Services (Dark Navy/Slate) */}
        <div className="mb-6">
          <span className="text-3xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight break-words">
            <span className="text-blue-400">Professional</span>
            <span className="text-slate-900"> Services</span>
          </span>
        </div>

        {/* Subtitle & Value Guarantees */}
        <p className="text-lg sm:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
          Browse verified plumbers, electricians, cleaners &amp; more across all major Indian cities.
        </p>

        {/* Key Highlights: 100% Free (White) • No Registration (Blue) • Live in 60 Seconds (White) */}
        <div className="mt-3 text-base sm:text-lg font-bold mb-10">
          <span className="text-white">100% Free</span>
          <span className="text-white mx-2">•</span>
          <span className="text-blue-400">No Registration</span>
          <span className="text-white mx-2">•</span>
          <span className="text-white">Live in 60 Seconds</span>
        </div>

        {/* Search Bar Form */}
        <div className="max-w-2xl mx-auto">
          <div className="drop-shadow-2xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-neutral-200 sm:flex-row sm:rounded-full"
            >
              {/* Query Input */}
              <div className="flex flex-1 items-center gap-2 px-3">
                <span className="text-lg">🔍</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What service do you need? e.g. Plumber, AC repair"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-600/60 text-neutral-900 font-medium"
                />
              </div>

              {/* City Select */}
              <div className="flex items-center gap-2 border-t border-neutral-100 px-3 sm:border-l sm:border-t-0">
                <span className="text-lg">📍</span>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-transparent py-3 text-sm outline-none text-neutral-800 font-medium sm:w-32 cursor-pointer"
                >
                  <option value="">All Cities</option>
                  {POPULAR_METRO_CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="rounded-xl sm:rounded-full bg-[#fb8500] hover:bg-[#e67300] px-8 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
