import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12 space-y-8 font-sans">
      <div className="space-y-2 text-center pb-6 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
          Wrkzon Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last revised: October 2026 &middot; Compliant with GDPR and Global Data Protection Standards
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Introduction</h2>
          <p>
            At Wrkzon ("we", "our", or "us"), accessible from https://www.wrkzon.com, candidate privacy and data sovereignty are fundamental principles. This Privacy Policy details the types of personal information collected, how it is processed, and the measures we take to protect your confidential information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Account &amp; Contact Data:</strong> Name, email address, password hash, phone number, and account role (Job Seeker or Employer).</li>
            <li><strong>CV &amp; Resume Details:</strong> Work history, education records, personal projects, technical skills, languages, and professional summaries entered into our CV Maker.</li>
            <li><strong>Job Applications:</strong> Positions applied to via Easy Apply, cover notes, and submission timestamps.</li>
            <li><strong>Usage &amp; Device Information:</strong> Anonymized telemetry, browser version, operating system, and IP address for security auditing and rate limiting.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Public Candidate Profiles &amp; Visibility Controls</h2>
          <p>
            When you create a CV on Wrkzon, you have direct control over whether your profile is set to <strong>Public</strong> or <strong>Private</strong>. Private CVs are accessible only to you. When marked Public, a sanitized link (omitting private street addresses and phone numbers) can be viewed by verified recruiters. You may switch your visibility toggle at any time from your Myzon dashboard.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. No Sale of Personal Information</h2>
          <p>
            Wrkzon never sells, rents, or monetizes candidate resumes to third-party data brokers or marketing affiliates. Your data is used exclusively to facilitate career discovery and employer connections.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Cookies and Local Storage</h2>
          <p>
            We use strictly necessary cookies and local storage tokens to preserve your theme preference (Light/Dark/System), active session tokens, and draft CV edits.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">6. Your Rights &amp; Data Deletion</h2>
          <p>
            You have the right to request a complete copy of all personal data held by Wrkzon, or request permanent deletion of your account and saved CVs. Inquiries can be directed to privacy@wrkzon.com.
          </p>
        </section>
      </div>
    </div>
  );
};
