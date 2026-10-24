import React, { useState } from 'react';
import { 
  Bot, Sparkles, CheckCircle2, ArrowRight, Zap, 
  ShieldCheck, Clock, Users, Building2, Send, ChevronDown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AgencyPage: React.FC = () => {
  const { showToast } = useAuth();
  const [role, setRole] = useState<'seeker' | 'employer'>('seeker');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [target, setTarget] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    showToast(`Thank you, ${name}! You have been added to the Job Agent early access waitlist.`, 'success');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50/70 via-white to-white dark:from-[#1b1524] dark:via-[#121212] dark:to-[#121212] border-b border-purple-100 dark:border-slate-800/80 pt-12 pb-16 transition-colors">
        <div className="max-w-[1200px] mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous AI Career Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-3xl mx-auto font-display">
            Meet the Wrkzon <span className="text-purple-600 dark:text-purple-400">Job Agent</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The autonomous matching loop that works while you sleep. Job Agent scores positions, tailors CV highlights, submits Easy Apply packets, and keeps both sides updated.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#waitlist-section"
              className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Join Early Access Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Interactive 4-Step Pipeline */}
      <section id="how-it-works" className="max-w-[1200px] mx-auto px-4 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            How Job Agent Closes the Loop
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            From discovering new job listings to final interview invitations, here is the automated lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 relative group hover:border-purple-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Scan &amp; Score
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Agent ingests live vacancies across global NGO, tech, and corporate boards, scoring each against your verified skills.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 relative group hover:border-purple-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Tailor Highlights
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dynamically organizes your LaTeX resume summary and bullet points to match the job's stated requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 relative group hover:border-purple-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Instant Dispatch
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Submits your pre-screened application through Wrkzon Easy Apply or packages candidate shortlists for recruiters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 relative group hover:border-purple-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold text-lg">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Status Alerts
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Real-time notifications sent directly to your web dashboard, email, or linked Telegram bot.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist-section" className="max-w-[800px] mx-auto px-4">
        <div className="bg-white dark:bg-[#1a1a24] rounded-3xl p-8 sm:p-10 shadow-xl border border-purple-200 dark:border-purple-900/50 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Join the Job Agent Waitlist
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We roll out early access batches weekly. Select your perspective below to lock in your priority queue spot.
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 max-w-xs mx-auto">
            <button
              type="button"
              onClick={() => setRole('seeker')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                role === 'seeker' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Job Seeker
            </button>
            <button
              type="button"
              onClick={() => setRole('employer')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                role === 'employer' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Employer / Recruiter
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                You're on the early access list!
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                We'll notify {email} the moment your Job Agent batch activates. In the meantime, ensure your CV is up to date in the CV Maker.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {role === 'seeker' ? 'Your Full Name' : 'Contact Person Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Abebaw Alanche"
                    className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {role === 'seeker' ? 'Desired Role or Profession' : 'Company or Organization Name'}
                  </label>
                  <input
                    type="text"
                    value={target}
                    onChange={e => setTarget(e.target.value)}
                    placeholder={role === 'seeker' ? 'e.g. Senior Software Engineer' : 'e.g. Acme Health Corp'}
                    className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Location / Country
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="e.g. Addis Ababa / Remote"
                    className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-[11px] text-purple-800 dark:text-purple-300">
                🔒 We respect your privacy. No spam, and your information is never shared with third parties without your authorization.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-all active:scale-[0.99]"
              >
                Request Priority Access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-[1000px] mx-auto px-4">
        <div className="bg-white dark:bg-[#1a1a24] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white text-center font-display">
            Manual Search vs. Wrkzon Job Agent
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-bold">Feature</th>
                  <th className="py-3 px-4 font-bold">Traditional Job Hunt</th>
                  <th className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Wrkzon Job Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-semibold">Job Scanning</td>
                  <td className="py-3 px-4 text-slate-500">Manual search 3-5 times a day</td>
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Autonomous 24/7 background loop</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Resume Formatting</td>
                  <td className="py-3 px-4 text-slate-500">Manual edits per application</td>
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Automated LaTeX highlight alignment</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Compatibility Scoring</td>
                  <td className="py-3 px-4 text-slate-500">Guesswork / Keyword stuffing</td>
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Semantic parsing &amp; match score</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Alert Delivery</td>
                  <td className="py-3 px-4 text-slate-500">Delayed newsletter digests</td>
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Instant Telegram &amp; Web notification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
