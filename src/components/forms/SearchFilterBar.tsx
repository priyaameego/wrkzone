"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { POPULAR_METRO_CITIES } from "@/lib/data";

interface SearchFilterBarProps {
  initialQuery?: string;
  initialCity?: string;
  large?: boolean;
}

export function SearchFilterBar({
  initialQuery = "",
  initialCity = "",
  large = false,
}: SearchFilterBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [city, setCity] = useState(initialCity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (city.trim()) params.set("city", city.trim());
    router.push(`/ads?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-2 rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-2.5 shadow-2xl ring-2 ring-neutral-200/80 sm:flex-row items-center ${
        large ? "max-w-4xl mx-auto" : "w-full"
      }`}
    >
      {/* Search Input */}
      <div className="relative flex-1 w-full flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-neutral-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What service do you need? e.g. Pest control, Plumber, AC repair..."
          className="w-full pl-12 pr-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none"
        />
      </div>

      <div className="hidden sm:block h-8 w-[1px] bg-neutral-200" />

      {/* City Select */}
      <div className="relative w-full sm:w-56 flex items-center">
        <MapPin className="absolute left-3 w-4 h-4 text-fb8500 shrink-0" />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full pl-9 pr-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-neutral-800 bg-transparent focus:outline-none appearance-none cursor-pointer"
        >
          <option value="">All Cities</option>
          {POPULAR_METRO_CITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className="absolute right-3 pointer-events-none text-xs text-neutral-400">
          ▼
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base text-white primary-gradient shadow-md shadow-fb8500/30 hover:shadow-lg hover:shadow-fb8500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
      >
        <span>Search</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
