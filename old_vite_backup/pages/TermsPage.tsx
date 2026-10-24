import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12 space-y-8 font-sans">
      <div className="space-y-2 text-center pb-6 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
          Wrkzon Terms of Service
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last revised: October 2026 &middot; Standard Platform Terms &amp; Acceptable Use
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Wrkzon (https://www.wrkzon.com), our CV Maker, or Job Agent services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must discontinue use immediately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Permitted Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Job Seekers:</strong> You may build, edit, and export resumes for bona fide job search activities, and apply to vacancies listed by employers.</li>
            <li><strong>Employers:</strong> You may post legitimate employment vacancies and review candidate applications solely for direct hiring purposes.</li>
            <li><strong>Prohibited Actions:</strong> Scraping candidate resumes for unsolicited marketing, posting deceptive or fraudulent job listings, or attempting to compromise platform security is strictly prohibited and subject to immediate account termination.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
          <p>
            Wrkzon retains all right, title, and interest in platform branding, design tokens, software architecture, and proprietary algorithms. You retain 100% ownership of your resume text, work experience records, and personal profile information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Disclaimer of Warranties</h2>
          <p>
            Wrkzon provides its services on an "as is" and "as available" basis. While we strive for maximum uptime and authentic employer verification, we do not guarantee specific employment outcomes, interview selections, or hire commitments.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with applicable commercial laws. Any disputes arising hereunder shall be resolved through binding arbitration.
          </p>
        </section>
      </div>
    </div>
  );
};
