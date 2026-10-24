import React from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { FileText, Users, Briefcase, Bot } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-[1050] bg-white dark:bg-[#1a1a22] border-t border-slate-200 dark:border-slate-800 flex items-center justify-around h-14 px-2 shadow-lg"
      aria-label="Mobile Navigation"
    >
      <Link
        to="/cvmaker"
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
          currentPath === '/cvmaker' 
            ? 'text-[#ff6600] font-bold' 
            : 'text-slate-600 dark:text-slate-400 hover:text-[#ff6600]'
        }`}
      >
        <FileText className="w-5 h-5 mb-0.5" />
        <span>Make CV</span>
      </Link>

      <Link
        to="/candidates"
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
          currentPath.startsWith('/candidates') || currentPath.startsWith('/cv/') 
            ? 'text-[#ff6600] font-bold' 
            : 'text-slate-600 dark:text-slate-400 hover:text-[#ff6600]'
        }`}
      >
        <Users className="w-5 h-5 mb-0.5" />
        <span>CVs</span>
      </Link>

      <Link
        to="/jobs"
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
          currentPath.startsWith('/jobs') || currentPath.startsWith('/job/') 
            ? 'text-[#ff6600] font-bold' 
            : 'text-slate-600 dark:text-slate-400 hover:text-[#ff6600]'
        }`}
      >
        <Briefcase className="w-5 h-5 mb-0.5" />
        <span>Jobs</span>
      </Link>

      <Link
        to="/agency"
        className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
          currentPath === '/agency' 
            ? 'text-[#ff6600] font-bold' 
            : 'text-slate-600 dark:text-slate-400 hover:text-[#ff6600]'
        }`}
      >
        <Bot className="w-5 h-5 mb-0.5" />
        <span>Job Agent</span>
      </Link>
    </nav>
  );
};
