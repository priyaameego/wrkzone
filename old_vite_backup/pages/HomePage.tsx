import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { 
  FileText, Users, Briefcase, Bot, Search, X, CheckCircle2, 
  Upload, Sparkles, Building2, MapPin, ArrowRight, Bookmark, 
  Send, ExternalLink, ShieldCheck, ChevronRight
} from 'lucide-react';
import { mockJobs, mockCandidates, mockCompanies, mockLocations, mockBlogPosts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { savedJobIds, toggleSaveJob, applyToJob, appliedJobIds, showToast } = useAuth();
  
  // Hero tab state: 0 = CV Maker, 1 = Job matching, 2 = Job Agent
  const [activeHeroTab, setActiveHeroTab] = useState<number>(0);
  
  // Match tab mode: 'looking' | 'hiring'
  const [matchMode, setMatchMode] = useState<'looking' | 'hiring'>('looking');

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');

  // CV Template carousel state
  const templates = [
    { name: 'AwesomeCV', img: '/cvfile/Templates/AwsomeCV.jpg' },
    { name: 'Amharic', img: '/cvfile/Templates/Amharic.jpg' },
    { name: 'Francais', img: '/cvfile/Templates/Francais.jpg' },
    { name: 'Modern', img: '/cvfile/Templates/Modern.jpg' },
    { name: 'Classic', img: '/cvfile/Templates/Classic.jpg' },
    { name: 'Europass', img: '/cvfile/Templates/Europass.jpg' },
  ];
  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);

  // Auto-rotate templates in preview
  useEffect(() => {
    if (activeHeroTab !== 0) return;
    const interval = setInterval(() => {
      setActiveTemplateIdx(prev => (prev + 1) % templates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeHeroTab, templates.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: '/jobs', search: { q: searchQuery.trim() } });
    } else {
      navigate({ to: '/jobs' });
    }
  };

  const handleUploadCVClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.json';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        showToast(`Uploaded ${target.files[0].name} successfully! Redirecting to CV Maker...`, 'success');
        setTimeout(() => navigate({ to: '/cvmaker' }), 1200);
      }
    };
    input.click();
  };

  return (
    <div className="home-landing space-y-10 pb-16">
      
      {/* 1. HERO SECTION WITH 3 TABS */}
      <section className="bg-gradient-to-b from-[#fff6ef] via-white to-white dark:from-[#1b1714] dark:via-[#121212] dark:to-[#121212] border-b border-orange-100 dark:border-slate-800/80 pt-8 pb-12 transition-colors">
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* Tab Navigation Controls */}
          <div className="flex items-center justify-center mb-8" role="tablist" aria-label="Job search and CV builder tabs">
            <div className="inline-flex bg-white dark:bg-[#1e1e28] p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <button
                type="button"
                role="tab"
                id="home-hero-tab-0"
                aria-selected={activeHeroTab === 0}
                onClick={() => setActiveHeroTab(0)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeHeroTab === 0
                    ? 'bg-[#ff6600] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                CV Maker
              </button>
              <button
                type="button"
                role="tab"
                id="home-hero-tab-1"
                aria-selected={activeHeroTab === 1}
                onClick={() => setActiveHeroTab(1)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeHeroTab === 1
                    ? 'bg-[#ff6600] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Job matching
              </button>
              <button
                type="button"
                role="tab"
                id="home-hero-tab-2"
                aria-selected={activeHeroTab === 2}
                onClick={() => setActiveHeroTab(2)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeHeroTab === 2
                    ? 'bg-[#ff6600] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Job Agent
              </button>
            </div>
          </div>

          {/* TAB 0: CV Maker */}
          {activeHeroTab === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Build a CV. Get found. Apply smarter.
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Professional CV Maker, live jobs, and Job Agent early access — free tools for seekers and employers.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleUploadCVClick}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Your CV</span>
                  </button>

                  <Link
                    to="/cvmaker"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-100 hover:bg-orange-200/80 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400 dark:hover:bg-orange-900/60 font-bold text-sm border border-orange-200 dark:border-orange-900 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Create Your CV</span>
                  </Link>

                  <Link
                    to="/agency"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 font-bold text-sm transition-all"
                  >
                    <Bot className="w-4 h-4 text-[#ff6600]" />
                    <span>Join Job Agent</span>
                  </Link>

                  <Link
                    to="/jobs"
                    className="px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#ff6600] dark:hover:text-orange-400 text-sm font-semibold hover:underline"
                  >
                    Browse Jobs &rarr;
                  </Link>
                </div>

                {/* Telegram Callout Banner */}
                <div className="pt-2">
                  <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-400">
                      <i className="fab fa-telegram text-sm" />
                      <a href="https://t.me/wrkzon_com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Job channel
                      </a>
                      <span className="text-slate-400">&middot;</span>
                      <a href="https://t.me/wrkzon_bot" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Personal bot
                      </a>
                    </div>
                    <span className="hidden sm:inline text-slate-400">|</span>
                    <span>Daily job highlights, no account required. Match alerts right in chat.</span>
                  </div>
                </div>
              </div>

              {/* Visual Preview: Templates Frame + Active Match Pill */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[380px] bg-white dark:bg-[#1a1a24] rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-800">
                  <div className="relative aspect-[1/1.4] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <img
                      src={templates[activeTemplateIdx].img}
                      alt={templates[activeTemplateIdx].name}
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                    />

                    {/* Floating Pill: 3 matches ready */}
                    <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 animate-bounce">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>3 matches ready</span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                      Template: {templates[activeTemplateIdx].name}
                    </div>
                  </div>

                  {/* Carousel navigation dots */}
                  <div className="flex justify-center items-center gap-1.5 mt-3">
                    {templates.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveTemplateIdx(i)}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          i === activeTemplateIdx
                            ? 'w-6 bg-[#ff6600]'
                            : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                        }`}
                        aria-label={`Show template ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: Job matching */}
          {activeHeroTab === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-[#ff6600] bg-orange-100 dark:bg-orange-950/60 px-3 py-1 rounded-full">
                  Live matching engine
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Match jobs and talent
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  See how Wrkzon connects seekers to roles and employers to candidates — same matching engine, two sides.
                </p>

                {/* Looking / Hiring Switch */}
                <div className="flex items-center gap-3">
                  <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setMatchMode('looking')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        matchMode === 'looking' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      Looking for Jobs
                    </button>
                    <button
                      type="button"
                      onClick={() => setMatchMode('hiring')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        matchMode === 'hiring' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      Hiring Talent
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    to="/jobs"
                    className="px-6 py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-md transition-all"
                  >
                    Browse Live Jobs
                  </Link>
                  <Link
                    to="/candidates"
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all"
                  >
                    Explore Candidates
                  </Link>
                </div>
              </div>

              {/* Visual Mock: Match Stage */}
              <div className="lg:col-span-5">
                <div className="bg-white dark:bg-[#1a1a24] rounded-2xl p-5 shadow-xl border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="text-xs font-semibold text-slate-500 ml-2">Job matching pipeline</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                      Live
                    </span>
                  </div>

                  {/* Profile Source Header */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40">
                    <div className="w-10 h-10 rounded-full bg-[#ff6600] text-white flex items-center justify-center font-bold text-sm">
                      YN
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 dark:text-white truncate">Your Profile</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">Software Engineer &middot; Addis Ababa</div>
                    </div>
                    <span className="text-xs font-semibold text-[#ff6600] animate-pulse">Scanning...</span>
                  </div>

                  {/* Scored Results Cards */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#20202c] border border-slate-200 dark:border-slate-800 hover:border-orange-300 transition-colors">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Senior Backend Engineer</div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span>Remote</span>
                          <span>&middot;</span>
                          <span className="text-[#ff6600] font-semibold">$75,000+</span>
                        </div>
                      </div>
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                        94% Match
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#20202c] border border-slate-200 dark:border-slate-800 hover:border-orange-300 transition-colors">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Full-stack Developer</div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span>Hybrid</span>
                          <span>&middot;</span>
                          <span>Full-time</span>
                        </div>
                      </div>
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                        88% Match
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#20202c] border border-slate-200 dark:border-slate-800 hover:border-orange-300 transition-colors">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Platform Infrastructure Engineer</div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span>On-site</span>
                          <span>&middot;</span>
                          <span>Addis Ababa</span>
                        </div>
                      </div>
                      <span className="text-xs font-black text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/80 px-2.5 py-1 rounded-full">
                        81% Match
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Job Agent */}
          {activeHeroTab === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-3 py-1 rounded-full">
                  Autonomous AI Career Loop
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Job Agent
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Job Agent runs the autonomous loop for seekers and employers — match, tailor, apply or shortlist, then keep both sides updated in real time.
                </p>

                <ul className="space-y-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>For seekers: autonomous job matching, tailored CV highlights, and application updates</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>For employers: pre-qualified talent matching, automated screening, and direct contact access</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    to="/agency"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Join Job Agent Early Access</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Visual Mock: Agent Timeline */}
              <div className="lg:col-span-5">
                <div className="bg-white dark:bg-[#1a1a24] rounded-2xl p-5 shadow-xl border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Job Agent Activity</span>
                    </div>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full">
                      Early access
                    </span>
                  </div>

                  <ol className="space-y-4 relative border-l-2 border-purple-200 dark:border-purple-900/60 ml-3 pl-4">
                    <li className="space-y-1">
                      <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-100 dark:ring-purple-950" />
                      <div className="text-sm font-bold text-slate-900 dark:text-white">1. Match found</div>
                      <div className="text-xs text-slate-500">Role scored 96% against your engineering background</div>
                    </li>
                    <li className="space-y-1">
                      <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-100 dark:ring-purple-950" />
                      <div className="text-sm font-bold text-slate-900 dark:text-white">2. CV tailored</div>
                      <div className="text-xs text-slate-500">Key accomplishments aligned directly to the vacancy requirements</div>
                    </li>
                    <li className="space-y-1">
                      <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-100 dark:ring-purple-950" />
                      <div className="text-sm font-bold text-slate-900 dark:text-white">3. Easy Apply sent</div>
                      <div className="text-xs text-slate-500">Candidate packet dispatched directly to the hiring committee</div>
                    </li>
                    <li className="space-y-1">
                      <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-100 dark:ring-purple-950" />
                      <div className="text-sm font-bold text-slate-900 dark:text-white">4. Updates delivered</div>
                      <div className="text-xs text-slate-500">Real-time status synced to your notification dashboard</div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 2. PROOF LINE & CHIPS */}
      <section className="max-w-[1200px] mx-auto px-4 text-center space-y-4">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Free CV Maker &middot; Live jobs &middot; Job Agent early access
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="https://jsonresume.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>JSON Resume compatible</span>
          </a>

          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
            title="Rendered with LaTeX for professional typography."
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>LaTeX-quality PDFs</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Instant Job matching</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Public candidate profiles</span>
          </span>
        </div>
      </section>

      {/* 3. MARKETPLACE SEARCH STRIP */}
      <section className="max-w-[1200px] mx-auto px-4">
        <form
          onSubmit={handleSearch}
          className="bg-white dark:bg-[#1a1a24] p-2.5 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-2"
        >
          <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
          <input
            type="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Job title, keywords, or company — e.g. accountant, engineer, legal"
            className="flex-1 bg-transparent border-0 px-2 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            aria-label="Job title, keywords, or company"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              title="Clear"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-sm transition-colors shrink-0"
          >
            Search
          </button>
        </form>
      </section>

      {/* 4. MARKETPLACE DUAL GRID (LATEST JOBS & LATEST CVS) */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Latest Jobs */}
          <div className="bg-white dark:bg-[#1a1a24] rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <Link to="/jobs" className="flex items-center gap-2.5 hover:text-[#ff6600] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-[#ff6600] flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Latest Jobs</h2>
                </Link>
                <Link to="/jobs" className="text-xs font-bold text-[#ff6600] hover:underline flex items-center gap-1">
                  <span>View all</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 py-2">
                Showing newest verified opportunities first
              </div>

              {/* Jobs List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {mockJobs.slice(0, 4).map(job => (
                  <div key={job.id} className="py-3.5 flex items-start justify-between gap-3 group">
                    <div className="space-y-1 min-w-0">
                      <Link
                        to={`/job/${job.slug}` as any}
                        className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors truncate block"
                      >
                        {job.title}
                      </Link>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                        <Link to={`/company/${job.companySlug}` as any} className="hover:underline flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-slate-400" />
                          <span>{job.company}</span>
                        </Link>
                        <span>&middot;</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{job.location}</span>
                        </span>
                        {job.salary && (
                          <>
                            <span>&middot;</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{job.salary}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {job.matchScore && (
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                          <span>{job.matchScore}%</span>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleSaveJob(job.id)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          savedJobIds.includes(job.id)
                            ? 'bg-orange-50 border-orange-300 text-[#ff6600]'
                            : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                        }`}
                        title="Save Job"
                        aria-label="Save Job"
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/jobs"
                className="w-full py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 dark:hover:bg-orange-900/40 text-[#ff6600] font-bold text-xs flex items-center justify-center gap-1 transition-colors"
              >
                <span>Browse All 2,400+ Jobs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Latest CVs */}
          <div className="bg-white dark:bg-[#1a1a24] rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <Link to="/candidates" className="flex items-center gap-2.5 hover:text-[#ff6600] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Latest CVs &amp; Talent</h2>
                </Link>
                <Link to="/candidates" className="text-xs font-bold text-[#ff6600] hover:underline flex items-center gap-1">
                  <span>View all</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 py-2">
                Verified candidate resumes ready for immediate interview
              </div>

              {/* Candidates List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {mockCandidates.map(candidate => (
                  <div key={candidate.id} className="py-3.5 flex items-start justify-between gap-3 group">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200 dark:border-slate-700">
                        {candidate.initials}
                      </div>
                      <div className="space-y-1 min-w-0">
                        <Link
                          to={`/cv/${candidate.slug}` as any}
                          className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors truncate block"
                        >
                          {candidate.name}
                        </Link>
                        <div className="text-xs text-slate-500 truncate">
                          {candidate.headline}
                        </div>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Link
                        to={`/cv/${candidate.slug}` as any}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#ff6600] text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#ff6600] transition-colors"
                      >
                        View CV
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/candidates"
                className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
              >
                <span>Explore All Candidate Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BOTTOM DIRECTORY WIDGETS (COMPANIES & LOCATIONS) */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Companies Widget */}
          <div className="bg-white dark:bg-[#1a1a24] rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Latest Companies</h3>
                <p className="text-xs text-slate-500">A quick view of active employers hiring right now.</p>
              </div>
              <Link to="/companies" className="text-xs font-bold text-[#ff6600] hover:underline">
                Browse all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {mockCompanies.map(comp => (
                <Link
                  key={comp.id}
                  to={`/company/${comp.slug}` as any}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#20202c] border border-slate-100 dark:border-slate-800 hover:border-orange-300 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 mb-2">
                    {comp.name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#ff6600] truncate w-full">
                    {comp.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {comp.openJobsCount} jobs
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Locations Widget */}
          <div className="bg-white dark:bg-[#1a1a24] rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Latest Locations</h3>
                <p className="text-xs text-slate-500">Filter opportunities by city, region or remote hubs.</p>
              </div>
              <Link to="/locations" className="text-xs font-bold text-[#ff6600] hover:underline">
                Browse all &rarr;
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {mockLocations.map(loc => (
                <Link
                  key={loc.id}
                  to={`/location/${loc.slug}` as any}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-orange-50 dark:bg-[#20202c] dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-[#ff6600] border border-slate-200 dark:border-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{loc.name}</span>
                  <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.2 rounded font-semibold text-slate-600 dark:text-slate-300 ml-1">
                    {loc.jobCount}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. CAREER TIPS & BLOG HIGHLIGHTS */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="bg-gradient-to-r from-orange-50/60 to-amber-50/60 dark:from-[#1b1916] dark:to-[#171615] rounded-3xl p-8 border border-orange-100 dark:border-slate-800/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Career Insights &amp; Job Tips
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Actionable guides to optimize your CV, ace interviews, and accelerate your job search.
              </p>
            </div>
            <Link
              to="/blog"
              className="text-sm font-bold text-[#ff6600] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockBlogPosts.slice(0, 3).map(post => (
              <div
                key={post.id}
                className="bg-white dark:bg-[#1f1f2b] p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="text-[#ff6600] font-semibold">{post.category}</span>
                    <span>{post.readTime}</span>
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

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}` as any}
                    className="text-[#ff6600] font-bold hover:underline"
                  >
                    Read &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
