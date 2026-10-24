import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { HelpCircle, Search, ChevronRight, FileText, User, Bot, Briefcase, ShieldCheck } from 'lucide-react';
import { mockHelpArticles } from '../data/mockData';

export const HelpPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = mockHelpArticles.filter(a => 
    !search || 
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-10 space-y-10">
      
      {/* Hero Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
          Wrkzon Help Center
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Guides, walkthroughs, and answers to help you navigate our career and hiring tools.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search help articles (e.g. sign in, export CV, Job Agent)..."
              className="w-full bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600] shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Categories quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6600] flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">CV Maker &amp; LaTeX</h2>
          <p className="text-xs text-slate-500">Creating, templating, and exporting resumes</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">Job Agent &amp; Matching</h2>
          <p className="text-xs text-slate-500">Automated job matching loop &amp; early access</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">Account &amp; Security</h2>
          <p className="text-xs text-slate-500">Profiles, sign-in, and privacy toggles</p>
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Popular Help Articles ({filtered.length})
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {filtered.map(art => (
            <Link
              key={art.id}
              to={`/help/${art.slug}` as any}
              className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex items-center justify-between gap-4 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#ff6600] uppercase tracking-wider">
                  {art.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {art.summary}
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
