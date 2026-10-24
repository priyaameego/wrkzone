import React, { useState } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { 
  Download, Share2, Printer, Mail, MapPin, 
  ExternalLink, ChevronRight, Award, Briefcase, 
  GraduationCap, CheckCircle2, ShieldCheck, Sparkles, Send
} from 'lucide-react';
import { mockCandidates } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const CandidateDetailPage: React.FC = () => {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const { showToast } = useAuth();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const candidate = mockCandidates.find(c => c.slug === slug) || mockCandidates[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Public CV link copied to clipboard!', 'info');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    showToast(`Downloading ${candidate.name} - LaTeX CV (PDF)...`, 'success');
  };

  const handleSendContact = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Message sent to ${candidate.name}! They will receive it via their registered email.`, 'success');
    setMessage('');
    setContactModalOpen(false);
  };

  return (
    <div className="cv-public-page bg-[#f3f4f6] dark:bg-[#121218] min-h-screen py-8 px-4 transition-colors">
      <div className="max-w-[860px] mx-auto space-y-6">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#ff6600]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/candidates" className="hover:text-[#ff6600]">Candidates</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 dark:text-slate-200 truncate">{candidate.name}</span>
          </nav>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-2.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            <span>Template: {candidate.cvTemplate}</span>
          </span>
        </div>

        {/* Action Toolbar */}
        <div className="bg-white dark:bg-[#1e1e28] p-3.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="px-4 py-2 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#ff6600]" />
              <span>Contact Candidate</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              title="Share Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Paper Document (LaTeX-Styled Canvas) */}
        <article className="cv-public-document bg-white dark:bg-[#1a1a24] text-slate-800 dark:text-slate-100 p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-8 font-sans">
          
          {/* Document Header */}
          <header className="border-b-2 border-slate-800 dark:border-slate-600 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-display">
                  {candidate.name}
                </h1>
                <p className="text-base font-semibold text-[#ff6600] dark:text-orange-400 mt-1">
                  {candidate.headline}
                </p>
              </div>

              <div className="sm:text-right space-y-1 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{candidate.location}</span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                  Status: {candidate.availability}
                </div>
              </div>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Executive Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {candidate.summary}
            </p>
          </section>

          {/* Section: Work Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {candidate.workHistory.map((work, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {work.title} &middot; <span className="font-semibold text-slate-600 dark:text-slate-400">{work.company}</span>
                    </h3>
                    <span className="text-xs font-mono font-medium text-slate-500">
                      {work.period} | {work.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-[#ff6600]">
                    {work.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>

            <div className="space-y-3">
              {candidate.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <strong className="text-sm text-slate-900 dark:text-white">{edu.degree}</strong>
                    <div className="text-slate-500">{edu.school} {edu.honors && `— ${edu.honors}`}</div>
                  </div>
                  <span className="font-mono text-slate-400 text-xs mt-1 sm:mt-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Skills & Technologies */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical &amp; Core Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((s, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Key Projects (if present) */}
          {candidate.projects && candidate.projects.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Featured Projects
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {candidate.projects.map((proj, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {proj.description}
                    </p>
                    {proj.tools && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.tools.map(t => (
                          <span key={t} className="text-[10px] text-orange-600 dark:text-orange-400 font-mono font-medium">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {candidate.certifications && candidate.certifications.length > 0 && (
              <section className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                  Certifications
                </h2>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  {candidate.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {candidate.languages && candidate.languages.length > 0 && (
              <section className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {candidate.languages.map((lang, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      {lang}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

        </article>
      </div>

      {/* Contact Candidate Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#1e1e28] rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Contact {candidate.name}
              </h3>
              <button
                onClick={() => setContactModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Send an interview invitation or job inquiry. Your message will be routed securely through Wrkzon.
            </p>

            <form onSubmit={handleSendContact} className="space-y-3">
              <textarea
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Hi Abebaw, we noticed your background in React and C# and would love to discuss an open Senior Engineer role..."
                rows={5}
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold shadow-sm"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
