import React from "react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 relative">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background Gradient & Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-fb8500 opacity-95 rounded-3xl" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 px-8 sm:px-12 py-16 sm:py-24 text-center">
          {/* Pill */}
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6 ring-1 ring-white/30 backdrop-blur-sm">
            <span className="text-white">🚀 Ready to Start?</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-serif">
            Ready to Grow Your <span className="text-yellow-300">Business</span>?
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals getting hired every day on WrkZone. Posting your first service takes less than 2 minutes—completely free and no hidden fees.
          </p>

          {/* 3 Stats Boxes */}
          <div className="grid grid-cols-3 gap-6 mb-14 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/20">
              <div className="text-2xl font-bold text-yellow-300">5K+</div>
              <div className="text-xs text-white/80 mt-1">Verified Pros</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/20">
              <div className="text-2xl font-bold text-yellow-300">100K+</div>
              <div className="text-xs text-white/80 mt-1">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/20">
              <div className="text-2xl font-bold text-yellow-300">4.8★</div>
              <div className="text-xs text-white/80 mt-1">Rating</div>
            </div>
          </div>

          {/* Main CTA Button */}
          <Link
            className="inline-block px-12 py-5 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-200 text-blue-900 font-extrabold text-lg shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 hover:from-white hover:to-yellow-100"
            href="/post"
          >
            Post Your Free Ad Today →
          </Link>

          {/* Secondary Link */}
          <p className="text-white/80 mt-8 text-sm">
            Need help?{" "}
            <Link
              className="text-yellow-300 font-bold hover:text-white transition-colors underline"
              href="/about"
            >
              See how it works
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
