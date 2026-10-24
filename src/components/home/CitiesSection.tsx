import React from "react";
import Link from "next/link";
import { TOP_CITIES } from "@/lib/data";

export function CitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-2 font-serif">
            Top Metro Cities
          </h2>
          <p className="text-neutral-500 text-lg">
            Hyper-local listings near you
          </p>
        </div>
        <Link
          className="text-blue-600 hover:text-blue-700 font-semibold hidden sm:block transition-colors"
          href="/ads"
        >
          All Cities →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {TOP_CITIES.map((city) => (
          <Link
            key={city.name}
            href={`/ads?city=${encodeURIComponent(city.name)}`}
            className="group bg-white rounded-2xl p-6 text-center ring-1 ring-neutral-200 hover:ring-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
              {city.icon}
            </div>
            <h3 className="font-bold text-neutral-900 text-lg leading-tight">
              {city.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              {city.state}
            </p>
            <p className="text-xs text-blue-500 mt-2 font-semibold">
              📍 {city.areasCount} areas
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
