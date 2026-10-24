import React, { useState, useMemo } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import { 
  Search, MapPin, Building2, Briefcase, Filter, 
  Grid, List, Bookmark, CheckCircle2, ChevronRight, X, Clock
} from 'lucide-react';
import { mockJobs } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Job } from '../types';

export const JobsPage: React.FC = () => {
  const rawSearch = useSearch({ strict: false }) as { q?: string; location?: string; type?: string };
  const initialQuery = rawSearch?.q || '';
  const initialLocation = rawSearch?.location || '';

  const { savedJobIds, toggleSaveJob, applyToJob, appliedJobIds } = useAuth();

  const [keyword, setKeyword] = useState(initialQuery);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'match' | 'salary'>('newest');
  const [viewMode, setViewMode] = useState<'list' | 'card'>('list');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchKeyword = !keyword || 
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase());

      const matchLocation = !selectedLocation || 
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchType = selectedType === 'All' || job.type === selectedType;

      const matchLevel = selectedLevel === 'All' || job.experienceLevel === selectedLevel;

      return matchKeyword && matchLocation && matchType && matchLevel;
    }).sort((a, b) => {
      if (sortBy === 'match') {
        return (b.matchScore || 0) - (a.matchScore || 0);
      }
      return 0; // default order is newest
    });
  }, [keyword, selectedLocation, selectedType, selectedLevel, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage) || 1;
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const clearFilters = () => {
    setKeyword('');
    setSelectedLocation('');
    setSelectedType('All');
    setSelectedLevel('All');
    setCurrentPage(1);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Find Your Next Career Opportunity
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Browse verified job listings from leading employers and international humanitarian missions.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-[#1e1e28] p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Keyword Search */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={keyword}
              onChange={e => {
                setKeyword(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Job title, keywords, or company..."
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>

          {/* Location Filter */}
          <div className="md:col-span-4 relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={selectedLocation}
              onChange={e => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="City, country, or remote..."
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>

          {/* Job Type Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={e => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            >
              <option value="All">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        {/* Secondary Filters & View Switchers */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filters:</span>
            </span>

            {/* Experience level chips */}
            {['All', 'Mid-Level', 'Senior', 'Lead', 'Executive'].map(lvl => (
              <button
                key={lvl}
                type="button"
                onClick={() => {
                  setSelectedLevel(lvl);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 rounded-full font-semibold transition-colors ${
                  selectedLevel === lvl
                    ? 'bg-[#ff6600] text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {lvl === 'All' ? 'All Levels' : lvl}
              </button>
            ))}

            {(keyword || selectedLocation || selectedType !== 'All' || selectedLevel !== 'All') && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-red-500 hover:text-red-600 font-bold ml-2 inline-flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right: Sort and View Mode */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-600 dark:text-slate-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="match">Highest Match %</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 text-[#ff6600] shadow-sm' : 'text-slate-500'}`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('card')}
                className={`p-1.5 rounded ${viewMode === 'card' ? 'bg-white dark:bg-slate-700 text-[#ff6600] shadow-sm' : 'text-slate-500'}`}
                title="Card View"
                aria-label="Card View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span>Showing {paginatedJobs.length} of {filteredJobs.length} available jobs</span>
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="bg-white dark:bg-[#1e1e28] rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6600] flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">No jobs matched your criteria</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try adjusting your search terms or resetting your filters to explore all open vacancies.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="px-5 py-2.5 rounded-xl bg-[#ff6600] text-white font-bold text-sm"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Job Listings: List View */}
      {filteredJobs.length > 0 && viewMode === 'list' && (
        <div className="space-y-3">
          {paginatedJobs.map(job => (
            <div
              key={job.id}
              className="bg-white dark:bg-[#1a1a24] p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={`/job/${job.slug}` as any}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors"
                  >
                    {job.title}
                  </Link>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {job.type}
                  </span>
                  {job.isEasyApply && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-100 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400">
                      Easy Apply
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                  <Link to={`/company/${job.companySlug}` as any} className="hover:underline flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.company}</span>
                  </Link>
                  <span>&middot;</span>
                  <Link to={`/location/${job.locationSlug}` as any} className="hover:underline flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </Link>
                  {job.salary && (
                    <>
                      <span>&middot;</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{job.salary}</span>
                    </>
                  )}
                  <span>&middot;</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{job.postedAt}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                <button
                  type="button"
                  onClick={() => toggleSaveJob(job.id)}
                  className={`p-2.5 rounded-xl border transition-colors ${
                    savedJobIds.includes(job.id)
                      ? 'bg-orange-50 border-orange-300 text-[#ff6600]'
                      : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                  }`}
                  title="Save Job"
                  aria-label="Save Job"
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <Link
                  to={`/job/${job.slug}` as any}
                  className="px-4 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 text-[#ff6600] font-bold text-xs transition-colors"
                >
                  Details
                </Link>

                <button
                  type="button"
                  onClick={() => applyToJob(job.id)}
                  disabled={appliedJobIds.includes(job.id)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-colors ${
                    appliedJobIds.includes(job.id)
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-[#ff6600] hover:bg-[#e65c00] text-white shadow-sm'
                  }`}
                >
                  {appliedJobIds.includes(job.id) ? 'Applied' : 'Apply'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Job Listings: Card View */}
      {filteredJobs.length > 0 && viewMode === 'card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedJobs.map(job => (
            <div
              key={job.id}
              className="bg-white dark:bg-[#1a1a24] p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {job.type}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleSaveJob(job.id)}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      savedJobIds.includes(job.id)
                        ? 'bg-orange-50 border-orange-300 text-[#ff6600]'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <Link
                    to={`/job/${job.slug}` as any}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors block"
                  >
                    {job.title}
                  </Link>
                  <Link
                    to={`/company/${job.companySlug}` as any}
                    className="text-xs text-slate-500 hover:underline flex items-center gap-1 mt-1 font-medium"
                  >
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.company}</span>
                  </Link>
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{job.location}</span>
                </div>

                {job.salary && (
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {job.salary}
                  </div>
                )}

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Link
                  to={`/job/${job.slug}` as any}
                  className="flex-1 text-center py-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#ff6600] font-bold text-xs"
                >
                  View Details
                </Link>
                <button
                  type="button"
                  onClick={() => applyToJob(job.id)}
                  disabled={appliedJobIds.includes(job.id)}
                  className={`flex-1 py-2 rounded-xl font-bold text-xs ${
                    appliedJobIds.includes(job.id)
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-[#ff6600] hover:bg-[#e65c00] text-white'
                  }`}
                >
                  {appliedJobIds.includes(job.id) ? 'Applied' : 'Apply'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            type="button"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-9 h-9 rounded-xl font-bold text-xs transition-colors ${
                currentPage === idx + 1
                  ? 'bg-[#ff6600] text-white shadow-sm'
                  : 'border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Next
          </button>
        </div>
      )}

    </div>
  );
};
