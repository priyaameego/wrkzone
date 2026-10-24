import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WrkZone",
  description: "Privacy policy and data protection practices of WrkZone local marketplace.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 bg-neutral-50/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-neutral-200/80 prose prose-neutral max-w-none">
          <div className="mb-8 border-b border-neutral-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed">
            <h2 className="text-xl font-bold text-neutral-900">1. Information We Collect</h2>
            <p>
              When you use WrkZone, we collect information you provide directly, such as your name, email address, phone number, city, and service advertisement details (including service descriptions, pricing, and images).
            </p>

            <h2 className="text-xl font-bold text-neutral-900">2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Publish and display your service advertisements to potential customers.</li>
              <li>Enable direct communication between customers and service providers via telephone and WhatsApp.</li>
              <li>Provide customer support, fraud prevention, and platform safety.</li>
              <li>Send system updates and optional newsletter announcements.</li>
            </ul>

            <h2 className="text-xl font-bold text-neutral-900">3. Information Sharing</h2>
            <p>
              WrkZone is a public classifieds marketplace. Any information you publish in a service advertisement (including phone number and business location) will be publicly visible to website visitors so they can hire you. We do not sell your personal data to third-party data brokers.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">4. Cookies &amp; Tracking</h2>
            <p>
              We use minimal, privacy-friendly cookies to maintain user session state, remember your selected city preferences, and ensure website security.
            </p>

            <h2 className="text-xl font-bold text-neutral-900">5. Data Retention &amp; Deletion</h2>
            <p>
              You may request the deletion of your account or published advertisements at any time by emailing{" "}
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
