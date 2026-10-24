import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, ALL_ADS, POPULAR_METRO_CITIES } from "@/lib/data";
import { AdCard } from "@/components/services/AdCard";
import { ArrowLeft, MapPin, Search } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found | WrkZone" };

  return {
    title: `${cat.name} Near Me | Top ${cat.name} Services | WrkZone`,
    description: `Discover verified local ${cat.name.toLowerCase()} experts near you. ${cat.description}. Post free ads and connect directly with trusted pros on WrkZone.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter ads for this category
  const categoryAds = ALL_ADS.filter((a) => a.categorySlug === slug);

  return (
    <div className="min-h-screen py-10 bg-neutral-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-6 font-medium">
          <Link href="/" className="hover:text-fb8500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#categories" className="hover:text-fb8500 transition-colors">
            Categories
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-bold">{category.name}</span>
        </div>

        {/* Category Header Hero */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-neutral-200/80 mb-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-fb8500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-4xl sm:text-5xl shadow-sm shrink-0">
                {category.icon}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/60 text-amber-900 mb-2">
                  <span>{categoryAds.length} pros available near you</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  {category.name}
                </h1>
                <p className="mt-1 text-sm sm:text-base text-neutral-600 max-w-2xl">
                  {category.description}
                </p>
              </div>
            </div>

            <Link
              href="/post"
              className="px-5 py-3 rounded-2xl font-bold text-sm text-white primary-gradient shadow-md shadow-fb8500/25 hover:scale-[1.02] transition-all shrink-0 self-start md:self-auto"
            >
              + Post Ad in {category.name}
            </Link>
          </div>

          {/* Quick City Navigation */}
          <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider shrink-0 mr-1">
              Top Cities:
            </span>
            {POPULAR_METRO_CITIES.slice(0, 10).map((city) => (
              <Link
                key={city}
                href={`/ads?category=${category.slug}&city=${encodeURIComponent(city)}`}
                className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 hover:bg-amber-100/60 hover:text-amber-900 text-neutral-700 transition-colors shrink-0"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Listings Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
              Verified <span className="text-fb8500">{category.name}</span> Providers
            </h2>
            <Link
              href="/ads"
              className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Services</span>
            </Link>
          </div>

          {categoryAds.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {categoryAds.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white p-12 text-center border border-neutral-200">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900">
                Be the first to offer {category.name} in your city!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto mt-1">
                Post your {category.name.toLowerCase()} service ad completely free in under 60 seconds and start getting direct customer inquiries.
              </p>
              <Link
                href="/post"
                className="mt-6 inline-block px-6 py-3 rounded-xl font-bold text-sm text-white primary-gradient shadow-md"
              >
                + Post Free {category.name} Ad
              </Link>
            </div>
          )}
        </div>

        {/* Other Categories Suggestions */}
        <div className="mt-16 pt-10 border-t border-neutral-200">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">
            Other Popular Services
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 12).map((other) => (
              <Link
                key={other.slug}
                href={`/category/${other.slug}`}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>{other.icon}</span>
                <span>{other.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
