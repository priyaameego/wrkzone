import React from 'react';
import { Link } from '@tanstack/react-router';
import { FileText, Bot, Building2, Search, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
          Wrkzon Platform Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Comprehensive career tools and recruitment infrastructure designed for seekers and employers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Service 1 */}
        <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#ff6600] flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Professional CV Maker &amp; Exporter
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Free multi-template resume builder with live LaTeX preview, instant JSON Resume import/export, and clean PDF downloads tailored for modern applicant tracking systems.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>6 recruiter-tested templates including Europass and regional styles</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sanitized public link sharing with one-click privacy toggle</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link to="/cvmaker" className="text-xs font-bold text-[#ff6600] hover:underline flex items-center gap-1">
              <span>Open CV Maker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Autonomous Job Agent
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Autonomous agent that scores job vacancies against user profiles, tailors resume highlight bullets, and syncs status updates via Telegram bot and web notifications.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>24/7 background vacancy scanning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Early access waitlist queue for seekers and recruiters</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link to="/agency" className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1">
              <span>Explore Job Agent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Verified Job Marketplace
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Curated vacancies filtered by country, remote compatibility, salary transparency, and Easy Apply capabilities with zero duplicate or spam listings.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Verified employer postings across humanitarian and tech hubs</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Custom job alerts and saved vacancies list</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link to="/jobs" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
              <span>Browse Jobs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Service 4 */}
        <div className="bg-white dark:bg-[#1a1a24] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Employer Hiring Hub
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Post vacancies, manage incoming applications, and search thousands of public candidate resumes formatted in LaTeX typography for immediate contact.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Fast job posting flow with custom screening filters</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Candidate search by technical skills and availability</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link to="/employer" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
              <span>Employer Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
