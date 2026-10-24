import React, { useState } from 'react';
import { ChevronDown, MessageSquareQuote, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { mockFAQs } from '../data/mockData';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'CV Maker', 'Jobs & Applications', 'Job Agent', 'Employers'];

  const filteredFAQs = mockFAQs.filter(f => 
    activeCategory === 'All' || f.category === activeCategory
  );

  return (
    <div className="max-w-[820px] mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#ff6600] bg-orange-100 dark:bg-orange-950/60 px-3.5 py-1 rounded-full">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
          Everything You Need to Know
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Clear answers about CV Maker, LaTeX downloads, Job Agent early access, and employer workflows.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-[#ff6600] text-white shadow-sm'
                : 'bg-white dark:bg-[#1a1a24] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFAQs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#1a1a24] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-[#ff6600] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#ff6600]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need more help banner */}
      <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Have a question not listed here?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Our customer support and developer team is ready to help.</p>
        </div>
        <Link
          to="/contact"
          className="px-5 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold shrink-0 transition-colors"
        >
          Contact Support &rarr;
        </Link>
      </div>
    </div>
  );
};
