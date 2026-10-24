"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const col1 = FAQS.slice(0, 6);
  const col2 = FAQS.slice(6, 12);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  const renderFaqItem = (faq: (typeof FAQS)[0], globalIdx: number) => {
    const isOpen = openIdx === globalIdx;

    return (
      <div
        key={globalIdx}
        className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isOpen
              ? "from-blue-600/15 to-fb8500/15"
              : "from-blue-600/0 to-fb8500/0"
          } group-hover:from-blue-600/10 group-hover:to-fb8500/10 rounded-2xl transition-all pointer-events-none`}
        />
        <div className="relative bg-white/90 backdrop-blur-sm ring-1 ring-neutral-200/80 group-hover:ring-fb8500/50 shadow-sm group-hover:shadow-md transition-all rounded-2xl">
          <button
            onClick={() => toggleFaq(globalIdx)}
            className="w-full px-6 py-5 flex items-start gap-4 hover:bg-neutral-50/50 transition-all text-left focus:outline-none"
          >
            <span className="text-2xl shrink-0 mt-0.5">{faq.icon}</span>
            <div className="flex-1 flex items-center justify-between gap-3">
              <span className="font-bold text-neutral-900 text-sm sm:text-base leading-snug group-hover:text-fb8500 transition-colors">
                {faq.question}
              </span>
              <span
                className={`text-fb8500 text-xs transition-transform duration-300 shrink-0 font-bold ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
          </button>

          {isOpen && (
            <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100/80">
              {faq.answer}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 opacity-60 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-fb8500/10 rounded-full border border-fb8500/30 mb-4">
          <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            ❓ Got Questions?
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 mb-4">
          Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about WrkZone
        </p>
      </div>

      {/* 2-Column FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {col1.map((faq, i) => renderFaqItem(faq, i))}
        </div>
        <div className="space-y-4">
          {col2.map((faq, i) => renderFaqItem(faq, i + 6))}
        </div>
      </div>
    </section>
  );
}
