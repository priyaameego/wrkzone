import React, { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  Search, MapPin, Users, Filter, CheckCircle2, 
  ChevronRight, Award, Briefcase, GraduationCap, X
} from 'lucide-react';
import { mockCandidates } from '../data/mockData';

export const CandidatesPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All');

  const allSkills = useMemo(() => {
    const set = new Set<string>();
    mockCandidates.forEach(c => c.skills.forEach(s => set.add(s)));
    return Array.from(set);
  }, []);

  const filteredCandidates = useMemo(() => {
    return mockCandidates.filter(c => {
      const matchQuery = !query || 
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.headline.toLowerCase().includes(query.toLowerCase()) ||
        c.location.toLowerCase().includes(query.toLowerCase()) ||
        c.skills.some(s => s.toLowerCase().includes(query.toLowerCase()));

      const matchAvail = availabilityFilter === 'All' || c.availability === availabilityFilter;

      const matchSkill = selectedSkill === 'All' || c.skills.includes(selectedSkill);

      return matchQuery && matchAvail && matchSkill;
    });
  }, [query, availabilityFilter, selectedSkill]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Verified Candidates &amp; Public CVs
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Discover pre-screened professionals with LaTeX-standard resumes ready for immediate interviews.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-[#1e1e28] p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by skill, name, role, or location..."
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={availabilityFilter}
              onChange={e => setAvailabilityFilter(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            >
              <option value="All">All Availability</option>
              <option value="Immediately">Available Immediately</option>
              <option value="2 Weeks Notice">2 Weeks Notice</option>
              <option value="1 Month">1 Month</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedSkill}
              onChange={e => setSelectedSkill(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            >
              <option value="All">All Skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>

        {(query || availabilityFilter !== 'All' || selectedSkill !== 'All') && (
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-500">Active filters:</span>
            <button
              onClick={() => {
                setQuery('');
                setAvailabilityFilter('All');
                setSelectedSkill('All');
              }}
              className="text-red-500 font-bold hover:underline inline-flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset all</span>
            </button>
          </div>
        )}
      </div>

      {/* Candidate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCandidates.map(c => (
          <div
            key={c.id}
            className="bg-white dark:bg-[#1a1a24] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">
                    {c.initials}
                  </div>
                  <div>
                    <Link
                      to={`/cv/${c.slug}` as any}
                      className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors block"
                    >
                      {c.name}
                    </Link>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{c.location}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 shrink-0">
                  {c.availability}
                </span>
              </div>

              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {c.headline}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {c.summary}
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {c.skills.map(s => (
                  <span
                    key={s}
                    className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                {c.experienceYears} Years Exp &middot; {c.cvTemplate}
              </span>
              <Link
                to={`/cv/${c.slug}` as any}
                className="px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 text-[#ff6600] text-xs font-bold transition-colors"
              >
                View Full CV &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
