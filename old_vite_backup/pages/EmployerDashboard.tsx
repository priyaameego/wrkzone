import React, { useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import { 
  Building2, Briefcase, Plus, Users, CheckCircle2, 
  Eye, Trash2, Edit3, Send, Clock, DollarSign
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockJobs } from '../data/mockData';
import { Job } from '../types';

export const EmployerDashboard: React.FC = () => {
  const searchParams = useSearch({ strict: false }) as { action?: string };
  const initialShowForm = searchParams?.action === 'post';

  const { user, showToast } = useAuth();
  const [jobsList, setJobsList] = useState<Job[]>(mockJobs.slice(0, 3));
  const [isPosting, setIsPosting] = useState(initialShowForm);

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Software Engineering');
  const [location, setLocation] = useState('Remote');
  const [type, setType] = useState<Job['type']>('Full-time');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      showToast('Please provide a job title and description.', 'error');
      return;
    }

    const newJob: Job = {
      id: 'job-' + Date.now(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title,
      company: user?.companyName || 'My Organization',
      companySlug: 'my-organization',
      location,
      locationSlug: location.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      type,
      salary: salary || undefined,
      category,
      postedAt: 'Just now',
      experienceLevel: 'Mid-Level',
      matchScore: 95,
      isEasyApply: true,
      description,
      responsibilities: ['Execute key project deliverables', 'Collaborate with cross-functional teams'],
      requirements: ['Proven experience in the domain', 'Strong communication skills'],
      benefits: ['Competitive compensation', 'Health insurance', 'Flexible hours']
    };

    setJobsList(prev => [newJob, ...prev]);
    setIsPosting(false);
    setTitle('');
    setSalary('');
    setDescription('');
    showToast('Job listing published successfully! Now visible on public marketplace.', 'success');
  };

  const handleRemoveJob = (id: string) => {
    setJobsList(prev => prev.filter(j => j.id !== id));
    showToast('Job listing closed.', 'info');
  };

  return (
    <div className="max-w-[1040px] mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#ff6600] flex items-center justify-center font-black text-xl">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {user?.companyName || 'Employer Recruiting Hub'}
            </h1>
            <p className="text-xs text-slate-500">
              Manage your job listings, review applicant pools, and scout verified candidate resumes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPosting(prev => !prev)}
            className="px-5 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>{isPosting ? 'Close Form' : 'Post a New Job'}</span>
          </button>

          <Link
            to="/candidates"
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Users className="w-4 h-4 text-[#ff6600]" />
            <span>Search Talent</span>
          </Link>
        </div>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Listings</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{jobsList.length}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Applicants Received</div>
          <div className="text-2xl font-black text-[#ff6600] mt-1">28</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Shortlisted by Job Agent</div>
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">6 candidates</div>
        </div>
      </div>

      {/* Post a Job Form (Collapsible / Active) */}
      {isPosting && (
        <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl border-2 border-orange-200 dark:border-orange-900/60 shadow-lg space-y-5 animate-in slide-in-from-top-2 duration-200">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Publish an Open Position
          </h2>

          <form onSubmit={handlePostJob} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Job Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Senior Frontend Engineer"
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Category</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                >
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Finance & Accounting">Finance &amp; Accounting</option>
                  <option value="Humanitarian & Operations">Humanitarian &amp; Operations</option>
                  <option value="Legal & Compliance">Legal &amp; Compliance</option>
                  <option value="Marketing & Growth">Marketing &amp; Growth</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Location</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="e.g. Remote / Addis Ababa / São Paulo"
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Employment Type</label>
                <select
                  value={type}
                  onChange={e => setType(e.target.value as any)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Salary Range (Optional)</label>
                <input
                  type="text"
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                  placeholder="e.g. $60,000 - $80,000 / yr"
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Role Description &amp; Requirements</label>
              <textarea
                required
                rows={5}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Detail the mission, day-to-day deliverables, and required qualifications..."
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsPosting(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold shadow-md"
              >
                Publish Job Listing
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Active Listings Table */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Your Active Listings ({jobsList.length})
        </h2>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {jobsList.map(job => (
            <div key={job.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <Link to={`/job/${job.slug}` as any} className="text-sm font-bold text-slate-900 dark:text-white hover:text-[#ff6600]">
                  {job.title}
                </Link>
                <div className="text-xs text-slate-500">
                  {job.location} &middot; {job.type} &middot; {job.salary || 'Salary undisclosed'} &middot; Posted {job.postedAt}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/job/${job.slug}` as any}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 text-slate-700 dark:text-slate-300"
                >
                  Preview
                </Link>
                <button
                  type="button"
                  onClick={() => handleRemoveJob(job.id)}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  title="Close listing"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
