import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { MapPin, ChevronRight, Briefcase, Building2 } from 'lucide-react';
import { mockLocations, mockJobs } from '../data/mockData';

export const LocationDetailPage: React.FC = () => {
  const { name } = useParams({ strict: false }) as { name: string };
  const decodedName = decodeURIComponent(name || '');

  const location = mockLocations.find(l => 
    l.slug.toLowerCase() === decodedName.toLowerCase() || 
    l.name.toLowerCase() === decodedName.toLowerCase()
  ) || mockLocations[0];

  const jobsInLocation = mockJobs.filter(j => 
    j.locationSlug === location.slug || 
    j.location.toLowerCase().includes(location.country.toLowerCase()) ||
    j.location.toLowerCase().includes(location.name.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Link to="/" className="hover:text-[#ff6600]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/locations" className="hover:text-[#ff6600]">Locations</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 dark:text-slate-200 truncate">{location.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-[#ff6600] font-bold text-xs uppercase tracking-wider">
          <MapPin className="w-4 h-4" />
          <span>Regional Job Hub</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
          Jobs in {location.name}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Showing verified career openings located in {location.name} ({location.country}).
        </p>
      </div>

      {/* Jobs list */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Active Opportunities ({jobsInLocation.length})
        </h2>

        {jobsInLocation.length === 0 ? (
          <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-2xl text-center border border-slate-200 dark:border-slate-800 text-sm text-slate-500">
            No active jobs found specifically for this location right now. Check back soon!
          </div>
        ) : (
          <div className="space-y-3">
            {jobsInLocation.map(job => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#1a1a24] p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="space-y-1">
                  <Link
                    to={`/job/${job.slug}` as any}
                    className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors block"
                  >
                    {job.title}
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{job.company}</span>
                    <span>&middot;</span>
                    <span>{job.type}</span>
                    {job.salary && (
                      <>
                        <span>&middot;</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{job.salary}</span>
                      </>
                    )}
                  </div>
                </div>

                <Link
                  to={`/job/${job.slug}` as any}
                  className="px-4 py-2 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold transition-colors shrink-0 text-center"
                >
                  View Details &rarr;
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
