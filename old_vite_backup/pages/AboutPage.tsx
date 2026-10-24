import React from 'react';
import { Link } from '@tanstack/react-router';
import { ShieldCheck, Target, HeartHandshake, Sparkles, Users, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#ff6600] bg-orange-100 dark:bg-orange-950/60 px-3.5 py-1 rounded-full">
          About Wrkzon
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
          Building Better Careers for Everyone
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Wrkzon was founded with a singular purpose: remove the artificial barriers between motivated talent and world-class organizations.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6600] flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Our Mission</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Provide free, accessible, and high-performance career tools — from LaTeX-quality CV creation to automated AI agent matching — empowering professionals in every region.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Our Values</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Transparency, zero paywalls for basic resume creation, authentic applicant privacy, and verifiable employer connections that treat job seekers with dignity.
          </p>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
          What Sets Wrkzon Apart
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">Recruiter-Grade Typography:</strong> Our CV Maker uses mathematical LaTeX formatting rules rather than brittle canvas layouts, ensuring 100% ATS readability.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#ff6600] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">Autonomous Job Agent:</strong> Rather than forcing candidates to spend hours scrolling through stale boards, our autonomous loop highlights verified matching roles in real time.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">Global &amp; Local Ecosystems:</strong> Bridging opportunities across developing markets, humanitarian relief organizations (IRC, UNOPS), and international remote companies.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          to="/cvmaker"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-md transition-all"
        >
          <span>Start Building Your Free CV</span>
          <span>&rarr;</span>
        </Link>
      </div>

    </div>
  );
};
