import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_ADS } from "@/lib/data";
import { AdCard } from "@/components/services/AdCard";
import {
  MapPin,
  Clock,
  Eye,
  Star,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Share2
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return ALL_ADS.map((ad) => ({
    id: ad.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const ad = ALL_ADS.find((a) => a.id === id);
  if (!ad) return { title: "Service Not Found | WrkZone" };

  return {
    title: `${ad.title} in ${ad.city} | WrkZone`,
    description: ad.description,
  };
}

import { useParams } from "@/lib/compat/next-navigation";

export default function AdDetailPage({
  params,
}: {
  params?: { id?: string } | Promise<{ id?: string }>;
}) {
  const routeParams = useParams<{ id?: string }>();
  const id = (params && "id" in (params as any) ? (params as any).id : routeParams?.id) || "";
  const ad = ALL_ADS.find((a) => a.id === id) || ALL_ADS[0];

  const relatedAds = ALL_ADS.filter(
    (a) => a.id !== ad.id && a.categorySlug === ad.categorySlug
  ).slice(0, 3);

  const catStyles: Record<string, { bg: string; badge: string }> = {
    cleaning: { bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)", badge: "#f59e0b" },
    "pest-control": { bg: "linear-gradient(135deg, #84cc1622, #84cc1644)", badge: "#84cc16" },
    "ac-repair": { bg: "linear-gradient(135deg, #06b6d422, #06b6d444)", badge: "#06b6d4" },
    plumbing: { bg: "linear-gradient(135deg, #3b82f622, #3b82f644)", badge: "#3b82f6" },
    carpentry: { bg: "linear-gradient(135deg, #d9770622, #d9770644)", badge: "#d97706" },
    electrician: { bg: "linear-gradient(135deg, #eab30822, #eab30844)", badge: "#eab308" },
    movers: { bg: "linear-gradient(135deg, #8b5cf622, #8b5cf644)", badge: "#8b5cf6" },
    painting: { bg: "linear-gradient(135deg, #ec489922, #ec489944)", badge: "#ec4899" },
  };

  const currentStyle = catStyles[ad.categorySlug] || {
    bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
    badge: "#fb8500",
  };

  return (
    <div className="min-h-screen py-6 sm:py-10 bg-neutral-50/60 overflow-x-hidden w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-xs sm:text-sm text-neutral-500">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Link href="/" className="hover:text-fb8500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/ads" className="hover:text-fb8500 transition-colors">
              Ads
            </Link>
            <span>/</span>
            <Link
              href={`/category/${ad.categorySlug}`}
              className="hover:text-fb8500 transition-colors font-medium text-neutral-800"
            >
              {ad.categoryName}
            </Link>
          </div>
          <Link
            href="/ads"
            className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to services</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200/80 shadow-sm">
              {/* Illustration Top Banner matching AC Repair original */}
              <div className="relative h-72 sm:h-96">
                <div
                  className="flex h-full w-full items-center justify-center text-8xl"
                  style={{ background: currentStyle.bg }}
                >
                  {ad.categoryIcon}
                </div>
                {ad.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#fb8500] px-3 py-1.5 text-xs font-bold text-white shadow">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <div className="p-6 sm:p-8">
                {/* Category Badge */}
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ background: currentStyle.badge }}
                >
                  {ad.categoryIcon} {ad.categoryName}
                </span>

                {/* Title */}
                <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl text-neutral-900 font-serif break-words">
                  {ad.title}
                </h1>

              {/* Location & Metadata */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 pb-6 border-b border-neutral-100">
                <span className="flex items-center gap-1 text-neutral-800 font-semibold">
                  <MapPin className="w-4 h-4 text-fb8500" />
                  <span>
                    {ad.area ? `${ad.area}, ` : ""}
                    {ad.city}
                  </span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-neutral-400" />
                  <span>{ad.views} views</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>{ad.postedAgo}</span>
                </span>
              </div>

              {/* Service Description */}
              <div className="py-6">
                <h2 className="text-lg font-bold text-neutral-900 mb-3">
                  Description
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed whitespace-pre-line">
                  {ad.description}
                </p>
              </div>

              {/* Highlights & Checklist */}
              {ad.highlights && ad.highlights.length > 0 && (
                <div className="py-6 border-t border-neutral-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 mb-4">
                    Service Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ad.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-sm font-medium text-neutral-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What is Included / Full Details */}
              {ad.fullDetails && ad.fullDetails.length > 0 && (
                <div className="py-6 border-t border-neutral-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 mb-4">
                    What is Included
                  </h3>
                  <ul className="space-y-2.5">
                    {ad.fullDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600">
                        <span className="text-fb8500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reviews Section */}
              <div className="pt-6 border-t border-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-neutral-900">
                    Customer Reviews
                  </h2>
                  <span className="text-xs font-semibold text-neutral-500">
                    {ad.provider.reviewsCount} verified reviews
                  </span>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-5 text-center border border-neutral-100">
                  <div className="flex items-center justify-center gap-1 text-amber-500 mb-1 text-lg">
                    {"⭐".repeat(Math.round(ad.provider.rating))}
                  </div>
                  <div className="text-xl font-extrabold text-neutral-900">
                    {ad.provider.rating} out of 5
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Based on {ad.provider.reviewsCount} customer jobs completed via WrkZone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Contact, Price, Provider Info */}
          <div className="space-y-6">
            {/* Price & Contact Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80 lg:sticky lg:top-24 space-y-6">
              <div>
                <span className="text-xs text-neutral-500 font-medium block">
                  Service Rate
                </span>
                <div className="text-3xl font-extrabold text-neutral-900 mt-1">
                  {ad.price}
                </div>
                <span className="text-xs text-emerald-600 font-semibold block mt-1">
                  ✓ Free consultation &amp; inspection
                </span>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="space-y-3">
                <a
                  href={`tel:${ad.provider.phone}`}
                  className="w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {ad.provider.phone}</span>
                </a>

                <a
                  href={`https://wa.me/91${ad.provider.whatsapp}?text=Hi%2C%20I%20saw%20your%20${encodeURIComponent(ad.title)}%20ad%20on%20WrkZone`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Provider</span>
                </a>
              </div>

              {/* About Provider */}
              <div className="pt-6 border-t border-neutral-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                  About the provider
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full primary-gradient flex items-center justify-center text-white font-bold text-base shadow-sm">
                    {ad.provider.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900 flex items-center gap-1.5">
                      <span>{ad.provider.name}</span>
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {ad.provider.city} • Member since {ad.provider.memberSince}
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety Warning Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-amber-800">
                  <span>🛡️</span>
                  <span>Stay safe</span>
                </div>
                <p className="leading-relaxed">
                  Meet in person, inspect the work before final payment, and never pay in full upfront. WrkZone is a free community classifieds platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedAds.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">
              More in <span className="text-fb8500">{ad.categoryName}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAds.map((ra) => (
                <AdCard key={ra.id} ad={ra} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
