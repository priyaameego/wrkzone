import React from "react";
import Link from "next/link";
import { ALL_ADS } from "@/lib/data";
import { AdCard } from "@/components/services/AdCard";

export function FreshListingsSection() {
  // Show first 8 fresh ads
  const displayAds = ALL_ADS.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl font-serif text-neutral-900">
            Fresh listings
          </h2>
          <p className="mt-1 text-ink-soft text-sm">
            Recently posted services from verified members
          </p>
        </div>
        <Link
          className="hidden shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold ring-2 ring-neutral-200 hover:ring-fb8500 sm:block transition-colors text-neutral-900"
          href="/ads"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {displayAds.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </section>
  );
}
