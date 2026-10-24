import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Building2, MapPin, Users, Globe, ChevronRight, Briefcase, ExternalLink } from 'lucide-react';
import { mockCompanies, mockJobs } from '../data/mockData';

export const CompanyDetailPage: React.FC = () => {
  const { name } = useParams({ strict: false }) as { name: string };
  const decodedName = decodeURIComponent(name || '');

  const company = mockCompanies.find(c => 
    c.slug.toLowerCase() === decodedName.toLowerCase() || 
    c.name.toLowerCase() === decodedName.toLowerCase()
  ) || mockCompanies[0];

  const companyJobs = mockJobs.filter(j => 
    j.companySlug === company.slug || j.company.toLowerCase() === company.name.toLowerCase()
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Link to="/" className="hover:text-[#ff6600]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/companies" className="hover:text-[#ff6600]">Companies</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 dark:text-slate-200 truncate">{company.name}</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-slate-800 border border-orange-200 dark:border-slate-700 flex items-center justify-center font-black text-2xl text-[#ff6600]">
            {company.name.charAt(0)}
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {company.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span>{company.industry}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{company.headquarters}</span>
              </span>
              <span>&middot;</span>
              <span>{company.size}</span>
            </div>
          </div>
        </div>

        <div>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 text-[#ff6600] text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Overview & Active Jobs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: About */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-[#1a1a24] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              About {company.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {company.description}
            </p>

            {company.specialties && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Specialties</h3>
                <div className="flex flex-wrap gap-1.5">
                  {company.specialties.map(s => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Open Positions */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#ff6600]" />
              <span>Open Positions ({companyJobs.length})</span>
            </h2>
          </div>

          {companyJobs.length === 0 ? (
            <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-2xl text-center border border-slate-200 dark:border-slate-800 text-sm text-slate-500">
              No vacancies currently open for {company.name}. Check back soon!
            </div>
          ) : (
            <div className="space-y-3">
              {companyJobs.map(job => (
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
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{job.location}</span>
                      <span>&middot;</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{job.type}</span>
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
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
