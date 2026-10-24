import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { ChevronRight, ArrowLeft, Clock, HelpCircle } from 'lucide-react';
import { mockHelpArticles } from '../data/mockData';

export const HelpArticlePage: React.FC = () => {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const article = mockHelpArticles.find(a => a.slug === slug) || mockHelpArticles[0];

  return (
    <div className="max-w-[820px] mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Link to="/" className="hover:text-[#ff6600]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/help" className="hover:text-[#ff6600]">Help Center</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 dark:text-slate-200 truncate">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400 uppercase tracking-wider">
          {article.category}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
          {article.title}
        </h1>
        <div className="text-xs text-slate-500">
          Last updated: {article.updatedAt}
        </div>
      </header>

      {/* Content */}
      <article className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4 font-sans whitespace-pre-line border-t border-slate-200 dark:border-slate-800 pt-6">
        {article.content}
      </article>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link
          to="/help"
          className="text-xs font-bold text-[#ff6600] hover:underline flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Help Center</span>
        </Link>

        <Link
          to="/support"
          className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#ff6600]"
        >
          Still need assistance? Contact Support &rarr;
        </Link>
      </div>
    </div>
  );
};
