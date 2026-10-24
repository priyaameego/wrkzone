"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 opacity-60 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-fb8500/20 rounded-full border border-fb8500/30 mb-4">
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            ⭐ Customer Testimonials
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 font-serif text-neutral-900">
          What Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            Customers Say
          </span>
        </h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          Join thousands of satisfied customers who have found trusted professionals on WrkZone
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Testimonial Card */}
        <div className="relative group">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-5 rounded-3xl blur-2xl group-hover:opacity-10 transition-opacity`}
          />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 sm:p-12 ring-2 ring-white/50 group-hover:ring-fb8500/50 shadow-lg group-hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-4 -left-4 text-6xl opacity-20 font-serif">&quot;</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl animate-pulse">
                  ⭐
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-xl text-neutral-800 mb-10 leading-relaxed font-serif italic">
              &quot;{current.text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-neutral-200 group-hover:border-fb8500/30 transition-colors">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-3xl shadow-lg`}
              >
                {current.avatar}
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{current.name}</h3>
                <p className="text-sm text-neutral-600">
                  📍 {current.city} • <span className="font-semibold text-fb8500">{current.service}</span>
                </p>
              </div>
            </div>

            {/* Arrows and Dots */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-gradient-to-br from-blue-600/10 to-fb8500/10 hover:from-blue-600/20 hover:to-fb8500/20 transition-all group/btn cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <span className="text-2xl group-hover/btn:scale-125 transition-transform inline-block">
                  ←
                </span>
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-3 rounded-full transition-all cursor-pointer ${
                      currentIndex === i
                        ? "bg-gradient-to-r from-blue-600 to-fb8500 w-8"
                        : "bg-neutral-300 w-3 hover:bg-neutral-400"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-gradient-to-br from-blue-600/10 to-fb8500/10 hover:from-blue-600/20 hover:to-fb8500/20 transition-all group/btn cursor-pointer"
                aria-label="Next Testimonial"
              >
                <span className="text-2xl group-hover/btn:scale-125 transition-transform inline-block">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Bottom Author Buttons */}
        <div className="grid grid-cols-4 gap-3 mt-10">
          {TESTIMONIALS.map((t, idx) => {
            const isSelected = currentIndex === idx;
            const firstName = t.name.split(" ")[0];

            return (
              <button
                key={t.name}
                onClick={() => setCurrentIndex(idx)}
                className={`p-4 rounded-xl font-semibold text-center transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg ring-2 ring-white/50"
                    : "bg-white text-neutral-700 ring-2 ring-neutral-200 hover:ring-fb8500/50 hover:shadow-md"
                }`}
              >
                <div className="text-xl mb-1">{t.avatar}</div>
                <div className="text-xs sm:text-sm">{firstName}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-fb8500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
