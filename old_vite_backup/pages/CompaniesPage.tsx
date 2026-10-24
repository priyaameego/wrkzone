import React, { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { Building2, Search, MapPin, Briefcase, ChevronRight, ExternalLink } from 'lucide-react';
import { mockCompanies } from '../data/mockData';

export const CompaniesPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter(c => 
      !search || 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase()) ||
      c.headquarters.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Hiring Companies &amp; Organizations
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Explore global institutions, humanitarian agencies, and tech employers hiring on Wrkzon.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white dark:bg-[#1e1e28] p-3 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search company by name, industry, or location..."
            className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map(c => (
          <div
            key={c.id}
            className="bg-white dark:bg-[#1a1a24] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-slate-800 border border-orange-200 dark:border-slate-700 flex items-center justify-center font-bold text-lg text-[#ff6600] shrink-0">
                  {c.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <Link
                    to={`/company/${c.slug}` as any}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors truncate block"
                  >
                    {c.name}
                  </Link>
                  <div className="text-xs text-slate-500 truncate">{c.industry}</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {c.description}
              </p>

              <div className="space-y-1 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{c.headquarters}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span>{c.size}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-[#ff6600]">
                {c.openJobsCount} open jobs
              </span>
              <Link
                to={`/company/${c.slug}` as any}
                className="px-3.5 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 text-[#ff6600] text-xs font-bold transition-colors"
              >
                View Jobs &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
