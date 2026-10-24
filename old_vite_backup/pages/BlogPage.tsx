import React, { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { BookOpen, Clock, Calendar, ArrowRight, Search, ChevronRight } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';

export const BlogPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Job Search Strategy', 'Interview Preparation', 'CV & Cover Letters'];

  const filteredPosts = useMemo(() => {
    return mockBlogPosts.filter(p => {
      const matchCat = selectedCat === 'All' || p.category === selectedCat;
      const matchSearch = !search || 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCat, search]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
          Job Tips &amp; Career Insights
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Practical advice on CV writing, recruiter psychology, and interview techniques.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCat === cat
                  ? 'bg-[#ff6600] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1a1a24] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <article
            key={post.id}
            className="bg-white dark:bg-[#1a1a24] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="text-[#ff6600] font-bold">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <Link
                to={`/blog/${post.slug}` as any}
                className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors leading-snug block"
              >
                {post.title}
              </Link>

              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500">{post.date}</span>
              <Link
                to={`/blog/${post.slug}` as any}
                className="text-[#ff6600] font-bold flex items-center gap-1 group-hover:underline"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
