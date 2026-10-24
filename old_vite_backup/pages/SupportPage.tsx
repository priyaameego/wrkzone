import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { HelpCircle, Mail, MessageSquare, CheckCircle2, Send, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const SupportPage: React.FC = () => {
  const { showToast } = useAuth();
  const [ticketCategory, setTicketCategory] = useState('CV Maker Issues');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !description) return;
    setSubmitted(true);
    showToast('Support ticket created successfully! Ticket #WRK-' + Math.floor(100000 + Math.random() * 900000), 'success');
  };

  return (
    <div className="max-w-[820px] mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
          Wrkzon Support Desk
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Submit technical issues, request account assistance, or reach our Telegram live bots.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <i className="fab fa-telegram text-base" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">Live Telegram Bot Support</h2>
          <p className="text-xs text-slate-500">Connect with automated troubleshooting via chat.</p>
          <a
            href="https://t.me/wrkzon_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 hover:underline inline-block pt-1"
          >
            Launch @wrkzon_bot &rarr;
          </a>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ff6600] flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">Help Center Knowledge Base</h2>
          <p className="text-xs text-slate-500">Self-serve answers to account and template setup.</p>
          <Link
            to="/help"
            className="text-xs font-bold text-[#ff6600] hover:underline inline-block pt-1"
          >
            Browse Articles &rarr;
          </Link>
        </div>
      </div>

      {/* Ticket Form */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Submit a Support Ticket
        </h2>

        {submitted ? (
          <div className="p-8 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Ticket Logged Successfully
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              We have recorded your issue and sent an acknowledgment to {email}. An engineer will review your ticket within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 rounded-xl bg-[#ff6600] text-white text-xs font-bold"
            >
              Submit Another Ticket
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Issue Category</label>
              <select
                value={ticketCategory}
                onChange={e => setTicketCategory(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              >
                <option value="CV Maker Issues">CV Maker &amp; PDF Export Issue</option>
                <option value="Job Agent">Job Agent Waitlist &amp; Alerts</option>
                <option value="Account Login">Account Sign In / Password Reset</option>
                <option value="Employer Posting">Employer Job Posting &amp; Verification</option>
                <option value="Bug Report">General Bug Report / Feedback</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Detailed Description</label>
              <textarea
                required
                rows={5}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe what happened, what device or browser you are using, and any error message displayed..."
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Ticket</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
