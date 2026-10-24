import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — WrkZone",
  description: "Terms and conditions for using the WrkZone local services and pest control classifieds marketplace.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 bg-neutral-50/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-neutral-200/80 prose prose-neutral max-w-none">
          <div className="mb-8 border-b border-neutral-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-fb8500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-3">
              Terms of Service
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed">
            <h2 className="text-xl font-bold text-neutral-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using WrkZone (wrkzone.com), you agree to comply with and be bound by these Terms of Service. WrkZone is a local community classifieds marketplace connecting independent service providers (such as pest control exterminators, plumbers, electricians, AC technicians, and cleaners) with homeowners and businesses.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">2. Platform Role &amp; Independence</h2>
            <p>
              WrkZone provides a directory and advertising platform. We do not employ service providers directly, nor do we act as contractors or brokers. All contracts, estimates, schedules, and service agreements are made directly between the service provider and the customer.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">3. Posting Guidelines for Providers</h2>
            <p>
              Service providers agree to post accurate, lawful, and truthful advertisements regarding their services, qualifications, chemicals used (in case of pest control treatments), and pricing. Prohibited content includes fraudulent claims, impersonation, hazardous unregulated chemicals, and spam.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">4. Safety &amp; In-Person Transactions</h2>
            <p>
              Customers and providers are advised to meet in person, verify identity and qualifications, inspect the job site, agree on pricing before work begins, and never pay in full upfront. WrkZone is not liable for disputes arising between customers and service providers.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, WrkZone and its operators shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from the use of the platform or services arranged through it.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">6. Contact Information</h2>
            <p>
              For legal inquiries or dispute reporting, please contact us at{" "}
              <a href="mailto:support@wrkzone.com" className="text-fb8500 font-bold hover:underline">
                support@wrkzone.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
