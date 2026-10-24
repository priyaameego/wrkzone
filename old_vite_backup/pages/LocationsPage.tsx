import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, Search, ChevronRight, Briefcase } from 'lucide-react';
import { mockLocations } from '../data/mockData';

export const LocationsPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = mockLocations.filter(l => 
    !search || 
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Job Locations &amp; Global Hubs
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Find vacancies by regional hubs, national capitals, or worldwide remote opportunities.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1e1e28] p-3 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by city or country..."
            className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(loc => (
          <Link
            key={loc.id}
            to={`/location/${loc.slug}` as any}
            className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-1">
              <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-slate-800 text-[#ff6600] flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors leading-tight">
                {loc.name}
              </h2>
              <div className="text-xs text-slate-500 font-medium">{loc.country}</div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[#ff6600] font-bold">{loc.jobCount} open jobs</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
