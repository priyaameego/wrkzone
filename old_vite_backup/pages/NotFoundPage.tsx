import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Home, Search, FileText } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-[600px] mx-auto px-4 py-20 text-center space-y-6">
      <div className="text-7xl font-extrabold text-[#ff6600] font-display">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
        The link you followed may be broken or the page may have been moved. You can return to our homepage or search open jobs.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Wrkzon Home</span>
        </Link>
        <Link
          to="/jobs"
          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-colors flex items-center gap-2"
        >
          <Search className="w-4 h-4" />
          <span>Browse Jobs</span>
        </Link>
      </div>
    </div>
  );
};
