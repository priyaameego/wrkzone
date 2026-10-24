import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it works — WrkZone",
  description:
    "WrkZone is a friendly classifieds marketplace that connects skilled handymen — plumbers, AC technicians, pest control, cleaners, electricians and more — directly with the people who need them. No middlemen, no commissions, just honest work.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: "🧑‍🔧",
      title: "For service providers",
      text: "Create a free account, post your service ad with photos and pricing, and start receiving calls and WhatsApp messages from local customers. Build your reputation with ratings and reviews.",
    },
    {
      icon: "🏠",
      title: "For customers",
      text: "Search by service and city, compare providers, read reviews, and contact pros directly. Everything you need to get the job done — fast.",
    },
    {
      icon: "🛡️",
      title: "Safe & trusted",
      text: "Every ad is reviewed by our team before going live. We encourage in-person verification and safe payment practices.",
    },
    {
      icon: "💛",
      title: "Always free to start",
      text: "Posting your first ads is completely free. Optional featured listings help you stand out when you're ready to grow.",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        {/* Top Pill Badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-400/80 bg-white px-4 py-1 text-xs font-semibold text-neutral-800 shadow-xs">
            ☀️ About WrkZone
          </span>

          {/* Main Title */}
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold font-serif text-neutral-900 tracking-tight">
            Local help, made simple.
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            WrkZone is a friendly classifieds marketplace that connects skilled handymen — plumbers, AC technicians, pest control, cleaners, electricians and more — directly with the people who need them. No middlemen, no commissions, just honest work.
          </p>
        </div>

        {/* 2x2 Pillars Grid matching screenshot */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-neutral-800 shadow-sm transition-all hover:shadow-md"
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1 font-serif">
                {pillar.title}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Ready to start Card matching screenshot */}
        <div className="mt-12 rounded-3xl bg-neutral-100/70 p-8 sm:p-12 text-center border border-neutral-200">
          <h2 className="text-2xl font-extrabold sm:text-3xl font-serif text-neutral-900">
            Ready to start?
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base">
            Join the WrkZone community today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="rounded-full bg-white px-7 py-3 text-sm font-extrabold text-neutral-900 shadow-sm border border-neutral-200 hover:shadow hover:scale-[1.02] transition"
            >
              Create account
            </Link>
            <Link
              href="/ads"
              className="rounded-full bg-neutral-200/60 px-7 py-3 text-sm font-extrabold text-neutral-800 border border-neutral-300 hover:bg-neutral-200 transition"
            >
              Browse ads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
