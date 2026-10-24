import React, { useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { 
  Building2, MapPin, Briefcase, Clock, Calendar, 
  Bookmark, Send, Share2, CheckCircle2, ChevronRight, 
  ArrowLeft, ExternalLink, ShieldCheck, DollarSign
} from 'lucide-react';
import { mockJobs, mockCompanies } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const { savedJobIds, toggleSaveJob, applyToJob, appliedJobIds, showToast } = useAuth();
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [coverNote, setCoverNote] = useState('');

  const job = mockJobs.find(j => j.slug === slug) || mockJobs[0];
  const company = mockCompanies.find(c => c.slug === job.companySlug) || mockCompanies[0];
  const isApplied = appliedJobIds.includes(job.id);
  const isSaved = savedJobIds.includes(job.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Job link copied to clipboard!', 'info');
    }
  };

  const handleApplyConfirm = () => {
    applyToJob(job.id);
    setApplyModalOpen(false);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-[#ff6600]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/jobs" className="hover:text-[#ff6600]">Jobs</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 dark:text-slate-200 truncate">{job.title}</span>
      </nav>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Job Details */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Header Card */}
          <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {job.type}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    {job.experienceLevel} Level
                  </span>
                  {job.isEasyApply && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400">
                      Easy Apply
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {job.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400 pt-1">
                  <Link to={`/company/${job.companySlug}` as any} className="hover:text-[#ff6600] flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{job.company}</span>
                  </Link>

                  <Link to={`/location/${job.locationSlug}` as any} className="hover:text-[#ff6600] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{job.location}</span>
                  </Link>

                  {job.salary && (
                    <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Match Score Ring (if present) */}
              {job.matchScore && (
                <div className="sm:self-start bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 p-3 rounded-2xl flex flex-col items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 leading-none">
                    {job.matchScore}%
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mt-1">
                    Profile Match
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setApplyModalOpen(true)}
                disabled={isApplied}
                className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all ${
                  isApplied
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-[#ff6600] hover:bg-[#e65c00] text-white active:scale-[0.98]'
                }`}
              >
                {isApplied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Applied with Wrkzon Profile</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Apply for this Position</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => toggleSaveJob(job.id)}
                className={`px-4 py-3 rounded-xl border text-sm font-semibold flex items-center gap-2 transition-colors ${
                  isSaved
                    ? 'bg-orange-50 border-orange-300 text-[#ff6600]'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{isSaved ? 'Saved' : 'Save Job'}</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold flex items-center gap-2 transition-colors"
                title="Share Job"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Job Description & Content */}
          <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                About the Role
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6600] mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Qualifications &amp; Requirements
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Compensation &amp; Benefits
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {job.benefits.map((ben, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Company Info & Related Jobs */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Company Card */}
          <div className="bg-white dark:bg-[#1a1a24] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              About the Employer
            </h3>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-lg text-[#ff6600]">
                {company.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <Link to={`/company/${company.slug}` as any} className="font-bold text-slate-900 dark:text-white hover:text-[#ff6600] truncate block">
                  {company.name}
                </Link>
                <div className="text-xs text-slate-500 truncate">{company.industry}</div>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {company.description}
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Headquarters:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{company.headquarters}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Company Size:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{company.size}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Open Positions:</span>
                <span className="font-semibold text-[#ff6600]">{company.openJobsCount} active</span>
              </div>
            </div>

            <Link
              to={`/company/${company.slug}` as any}
              className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#ff6600] text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#ff6600] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Employer Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Vacancies */}
          <div className="bg-white dark:bg-[#1a1a24] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Related Opportunities
            </h3>

            <div className="space-y-3">
              {mockJobs.filter(j => j.id !== job.id).slice(0, 3).map(rel => (
                <Link
                  key={rel.id}
                  to={`/job/${rel.slug}` as any}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#20202c] hover:border-orange-300 border border-transparent transition-all block group"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] truncate">
                    {rel.title}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {rel.company} &middot; {rel.location}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                    {rel.salary || rel.type}
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Easy Apply Modal */}
      {applyModalOpen && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#1e1e28] rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Easy Apply: {job.title}
              </h3>
              <button
                onClick={() => setApplyModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Your verified Wrkzon CV profile will be submitted directly to {job.company}.
            </p>

            <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/50 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Active Profile Attached:</strong> LaTeX-ready PDF resume will be bundled automatically.
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Short note to hiring committee (Optional):
              </label>
              <textarea
                value={coverNote}
                onChange={e => setCoverNote(e.target.value)}
                placeholder="Briefly state why your experience makes you an ideal fit for this role..."
                rows={4}
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setApplyModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyConfirm}
                className="px-5 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold shadow-sm"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
