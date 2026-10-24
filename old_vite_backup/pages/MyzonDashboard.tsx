import React, { useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import { 
  FileText, Bookmark, Send, Bell, User, Edit3, 
  Download, Eye, Trash2, CheckCircle2, Shield, Sparkles, Building2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockJobs } from '../data/mockData';

export const MyzonDashboard: React.FC = () => {
  const searchParams = useSearch({ strict: false }) as { tab?: string };
  const initialTab = searchParams?.tab === 'saved' ? 'saved' : searchParams?.tab === 'applications' ? 'applications' : 'cv';

  const { user, userCV, savedJobIds, toggleSaveJob, appliedJobIds, applyToJob, showToast } = useAuth();
  const [activeTab, setActiveTab] = useState<'cv' | 'saved' | 'applications' | 'alerts'>(initialTab as any);
  const [isPublic, setIsPublic] = useState(true);
  const [availability, setAvailability] = useState('Immediately');

  const savedJobs = mockJobs.filter(j => savedJobIds.includes(j.id));
  const appliedJobs = mockJobs.filter(j => appliedJobIds.includes(j.id));

  const handleToggleVisibility = () => {
    setIsPublic(prev => {
      const next = !prev;
      showToast(`Public profile visibility is now ${next ? 'PUBLIC' : 'PRIVATE'}.`, 'info');
      return next;
    });
  };

  return (
    <div className="max-w-[1040px] mx-auto px-4 py-8 space-y-8">
      
      {/* Header Profile Bar */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#ff6600] text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
            {userCV.fullName.charAt(0)}
          </div>
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {userCV.fullName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {userCV.title} &middot; {userCV.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/cvmaker"
            className="px-4 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Open CV Maker</span>
          </Link>
          <Link
            to={"/cv/abebaw-alanche-1" as any}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Public View</span>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex rounded-2xl bg-white dark:bg-[#1a1a24] p-1.5 border border-slate-200 dark:border-slate-800 overflow-x-auto text-xs font-bold">
        <button
          onClick={() => setActiveTab('cv')}
          className={`flex-1 py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
            activeTab === 'cv' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>My CV &amp; Profile</span>
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          className={`flex-1 py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
            activeTab === 'saved' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Saved Jobs ({savedJobs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('applications')}
          className={`flex-1 py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
            activeTab === 'applications' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Send className="w-4 h-4" />
          <span>Applications ({appliedJobs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('alerts')}
          className={`flex-1 py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
            activeTab === 'alerts' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Job Alerts</span>
        </button>
      </div>

      {/* Tab 1: My CV & Profile */}
      {activeTab === 'cv' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Profile Visibility &amp; Status</h2>
                <p className="text-xs text-slate-500">Manage whether verified employers can discover your resume.</p>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold ${isPublic ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {isPublic ? 'Publicly Visible' : 'Private'}
                </span>
                <button
                  type="button"
                  onClick={handleToggleVisibility}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    isPublic ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label="Toggle Public Visibility"
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isPublic ? 'translate-x-6' : ''}`} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Interview Availability</label>
                <select
                  value={availability}
                  onChange={e => {
                    setAvailability(e.target.value);
                    showToast(`Availability updated to ${e.target.value}`, 'success');
                  }}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white font-semibold"
                >
                  <option value="Immediately">Available Immediately</option>
                  <option value="2 Weeks Notice">2 Weeks Notice</option>
                  <option value="1 Month">1 Month</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Active CV Template</label>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 font-bold text-[#ff6600]">
                  {userCV.template || 'AwesomeCV'} (LaTeX Standard)
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Active LaTeX PDF</div>
                <div className="text-[11px] text-slate-500">Last synchronized with your CV Maker entries</div>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-[#ff6600] text-white text-xs font-bold shadow-sm"
              >
                Print / Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Saved Jobs */}
      {activeTab === 'saved' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {savedJobs.length === 0 ? (
            <div className="bg-white dark:bg-[#1a1a24] p-12 text-center rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 space-y-2">
              <Bookmark className="w-8 h-8 mx-auto text-slate-400" />
              <p className="text-sm">You haven't saved any job opportunities yet.</p>
              <Link to="/jobs" className="text-xs font-bold text-[#ff6600] hover:underline">
                Explore open jobs &rarr;
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {savedJobs.map(job => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-[#1a1a24] p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <Link to={`/job/${job.slug}` as any} className="text-sm font-bold text-slate-900 dark:text-white hover:text-[#ff6600]">
                      {job.title}
                    </Link>
                    <div className="text-xs text-slate-500">
                      {job.company} &middot; {job.location} &middot; {job.salary || job.type}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => applyToJob(job.id)}
                      disabled={appliedJobIds.includes(job.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold ${
                        appliedJobIds.includes(job.id)
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#ff6600] hover:bg-[#e65c00] text-white'
                      }`}
                    >
                      {appliedJobIds.includes(job.id) ? 'Applied' : 'Apply'}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleSaveJob(job.id)}
                      className="p-2 text-slate-400 hover:text-red-500"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Applications */}
      {activeTab === 'applications' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {appliedJobs.length === 0 ? (
            <div className="bg-white dark:bg-[#1a1a24] p-12 text-center rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 space-y-2">
              <Send className="w-8 h-8 mx-auto text-slate-400" />
              <p className="text-sm">You haven't submitted any job applications yet.</p>
              <Link to="/jobs" className="text-xs font-bold text-[#ff6600] hover:underline">
                Find roles with Easy Apply &rarr;
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {appliedJobs.map(job => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-[#1a1a24] p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <Link to={`/job/${job.slug}` as any} className="text-sm font-bold text-slate-900 dark:text-white hover:text-[#ff6600]">
                      {job.title}
                    </Link>
                    <div className="text-xs text-slate-500">
                      {job.company} &middot; Easy Apply Submitted
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                      Under Review
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Job Alerts */}
      {activeTab === 'alerts' && (
        <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-150">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Instant Alert Channels</h2>
          
          <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#262626]">
              <div>
                <div className="font-bold">Telegram Match Bot Alerts</div>
                <div className="text-slate-500">Receive instant push notifications on high compatibility jobs</div>
              </div>
              <a
                href="https://t.me/wrkzon_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-bold"
              >
                Connect Bot
              </a>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#262626]">
              <div>
                <div className="font-bold">Weekly Curated Digest</div>
                <div className="text-slate-500">Email summary of new roles in your industry</div>
              </div>
              <span className="text-emerald-600 font-bold">Active</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
