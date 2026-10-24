import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Clock, Calendar, User, ChevronRight, Share2, ArrowLeft } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const { showToast } = useAuth();

  const post = mockBlogPosts.find(p => p.slug === slug) || mockBlogPosts[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="max-w-[820px] mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Link to="/" className="hover:text-[#ff6600]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/blog" className="hover:text-[#ff6600]">Job Tips</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 dark:text-slate-200 truncate">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400 uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs text-slate-400">&middot;</span>
          <span className="text-xs text-slate-500 font-medium">{post.readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between py-3 border-y border-slate-200 dark:border-slate-800 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{post.author.name}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 hover:text-[#ff6600] text-slate-600 dark:text-slate-400 font-semibold"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <article className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
        <div className="p-4 rounded-2xl bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#ff6600] text-sm text-slate-800 dark:text-slate-200 font-medium">
          {post.excerpt}
        </div>

        <div className="whitespace-pre-line space-y-4 pt-4 leading-relaxed font-sans">
          {post.content}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
            {post.tags.map(t => (
              <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                #{t}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link
          to="/blog"
          className="text-xs font-bold text-[#ff6600] hover:underline flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all Job Tips</span>
        </Link>
      </div>
    </div>
  );
};
