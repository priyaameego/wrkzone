"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ALL_ADS, POPULAR_METRO_CITIES } from "@/lib/data";
import { AdCard } from "@/components/services/AdCard";

// Categories list exactly matching wrkzone.com/ads screenshot
const ADS_CATEGORIES = [
  { slug: "ac-repair", name: "AC Repair", icon: "❄️" },
  { slug: "appliance-repair", name: "Appliance Repair", icon: "🔌" },
  { slug: "cctv-security", name: "CCTV & Security", icon: "📹" },
  { slug: "carpentry", name: "Carpentry", icon: "🔨" },
  { slug: "cleaning", name: "Cleaning", icon: "🧹" },
  { slug: "computer-repair", name: "Computer Repair", icon: "💻" },
  { slug: "construction", name: "Construction", icon: "🏗️" },
  { slug: "electrician", name: "Electrician", icon: "💡" },
  { slug: "fitness-trainer", name: "Fitness Trainer", icon: "💪" },
  { slug: "gardening", name: "Gardening", icon: "🌿" },
  { slug: "home-salon", name: "Home Salon", icon: "💇" },
  { slug: "mobile-repair", name: "Mobile Repair", icon: "📱" },
  { slug: "movers", name: "Movers & Packers", icon: "📦" },
  { slug: "painting", name: "Painting", icon: "🎨" },
  { slug: "pest-control", name: "Pest Control", icon: "🐜" },
  { slug: "photography", name: "Photography", icon: "📸" },
  { slug: "plumbing", name: "Plumbing", icon: "🔧" },
  { slug: "tuition-coaching", name: "Tuition & Coaching", icon: "📚" },
];

function AdsContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams?.get("q") || "";
  const initialCity = searchParams?.get("city") || "";
  const initialCategory = searchParams?.get("category") || "";

  const [query, setQuery] = useState(initialQ);
  const [city, setCity] = useState(initialCity);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high" | "popular">("newest");

  const filteredAds = useMemo(() => {
    return ALL_ADS.filter((ad) => {
      const matchQ =
        !query.trim() ||
        ad.title.toLowerCase().includes(query.toLowerCase()) ||
        ad.description.toLowerCase().includes(query.toLowerCase()) ||
        ad.categoryName.toLowerCase().includes(query.toLowerCase());

      const matchCity =
        !city.trim() ||
        ad.city.toLowerCase() === city.toLowerCase() ||
        ad.area.toLowerCase().includes(city.toLowerCase());

      const matchCategory =
        !selectedCategory.trim() ||
        ad.categorySlug === selectedCategory ||
        (selectedCategory === "movers" && (ad.categorySlug === "movers" || ad.categorySlug === "packers-movers"));

      return matchQ && matchCity && matchCategory;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.priceNum - b.priceNum;
      if (sortBy === "price-high") return b.priceNum - a.priceNum;
      if (sortBy === "popular") return b.views - a.views;
      // Default: featured first, then original order
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [query, city, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 w-full overflow-x-hidden">
      {/* Title & Result Count */}
      <h1 className="text-3xl font-extrabold font-serif text-neutral-900">
        Browse services
      </h1>
      <p className="mt-1 text-sm text-neutral-500">
        {filteredAds.length} results
      </p>

      {/* Search Bar matching live screenshot */}
      <div className="mt-6 max-w-2xl">
        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-neutral-200 sm:flex-row sm:rounded-full"
        >
          {/* Query Input */}
          <div className="flex flex-1 items-center gap-2 px-3">
            <span className="text-lg">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What service do you need? e.g. Plumber, AC repair"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 text-neutral-900 font-medium"
            />
          </div>

          {/* City Dropdown */}
          <div className="flex items-center gap-2 border-t border-neutral-100 px-3 sm:border-l sm:border-t-0">
            <span className="text-lg">📍</span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent py-3 text-sm outline-none text-neutral-800 font-medium sm:w-32 cursor-pointer"
            >
              <option value="">All Cities</option>
              {POPULAR_METRO_CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="rounded-xl sm:rounded-full bg-[#fb8500] hover:bg-[#e67300] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform duration-300 shrink-0 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      {/* Categories Pills & Sort Row */}
      <div className="mt-8 space-y-4">
        {/* Category Pills wrap */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
              selectedCategory === ""
                ? "bg-[#fb8500] text-white shadow-md shadow-orange-500/30"
                : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-[#fb8500]"
            }`}
          >
            All
          </button>
          {ADS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? "" : cat.slug)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#fb8500] text-white shadow-md shadow-orange-500/30"
                    : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-[#fb8500]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-sm font-semibold text-neutral-600">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold outline-none focus:border-[#fb8500] text-neutral-800 cursor-pointer"
          >
            <option value="newest">Newest first</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="popular">Most viewed</option>
          </select>
        </div>
      </div>

      {/* Responsive Listings Cards Grid matching screenshots */}
      {filteredAds.length === 0 ? (
        <div className="py-20 text-center">
          <div className="text-5xl mb-3">🔍</div>
          <h3 className="text-xl font-bold font-serif text-neutral-900">
            No services found
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Try adjusting your search terms or clearing the city filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCity("");
              setSelectedCategory("");
            }}
            className="mt-4 rounded-full bg-[#fb8500] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#e67300] transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredAds.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-6 py-16 text-center text-neutral-500">
          Loading services...
        </div>
      }
    >
      <AdsContent />
    </Suspense>
  );
}
