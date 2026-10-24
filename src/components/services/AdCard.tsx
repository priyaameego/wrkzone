import React from "react";
import Link from "next/link";
import { ServiceAd } from "@/lib/data";

interface AdCardProps {
  ad: ServiceAd;
}

export function AdCard({ ad }: AdCardProps) {
  // Category styles using the exact wrkzone.com hex22/hex44 gradient and badges
  const catStyles: Record<string, { bg: string; badge: string; icon: string }> = {
    cleaning: {
      bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
      badge: "#f59e0b",
      icon: "🧹",
    },
    "pest-control": {
      bg: "linear-gradient(135deg, #84cc1622, #84cc1644)",
      badge: "#84cc16",
      icon: "🐜",
    },
    "ac-repair": {
      bg: "linear-gradient(135deg, #06b6d422, #06b6d444)",
      badge: "#06b6d4",
      icon: "❄️",
    },
    plumbing: {
      bg: "linear-gradient(135deg, #3b82f622, #3b82f644)",
      badge: "#3b82f6",
      icon: "🔧",
    },
    carpentry: {
      bg: "linear-gradient(135deg, #d9770622, #d9770644)",
      badge: "#d97706",
      icon: "🔨",
    },
    electrician: {
      bg: "linear-gradient(135deg, #eab30822, #eab30844)",
      badge: "#eab308",
      icon: "💡",
    },
    movers: {
      bg: "linear-gradient(135deg, #8b5cf622, #8b5cf644)",
      badge: "#8b5cf6",
      icon: "📦",
    },
    painting: {
      bg: "linear-gradient(135deg, #ec489922, #ec489944)",
      badge: "#ec4899",
      icon: "🎨",
    },
  };

  const currentStyle = catStyles[ad.categorySlug] || {
    bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
    badge: "#fb8500",
    icon: ad.categoryIcon || "⚡",
  };

  const isNegotiable =
    ad.title.toLowerCase().includes("cleaning") ||
    ad.title.toLowerCase().includes("carpentry") ||
    ad.price.toLowerCase().includes("negotiable");

  return (
    <Link
      href={`/ads/${ad.id}`}
      className="card-lift group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 shadow-sm hover:shadow-md hover:ring-[#fb8500] transition-all cursor-pointer"
    >
      {/* Top Banner with Illustration & Badges matching AC Repair */}
      <div className="relative h-44 overflow-hidden">
        <div
          className="flex h-full w-full items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300"
          style={{ background: currentStyle.bg }}
        >
          {currentStyle.icon}
        </div>
        {ad.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-neutral-600 shadow-xs border border-white/50">
            ⭐ Featured
          </span>
        )}
        <span
          className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow flex items-center gap-1"
          style={{ background: currentStyle.badge }}
        >
          <span>{currentStyle.icon}</span>
          <span>{ad.categoryName}</span>
        </span>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 font-bold font-serif text-neutral-900 group-hover:text-[#fb8500] transition text-base">
          {ad.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-600 leading-relaxed font-normal">
          {ad.description}
        </p>

        <div className="mt-3 flex items-center gap-1 text-sm text-neutral-600">
          <span>📍</span>
          <span className="truncate">
            {ad.area ? `${ad.area}, ` : ""}
            {ad.city}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
          <span className="font-extrabold text-neutral-900 text-base">
            {ad.price}
            {isNegotiable && !ad.price.includes("Negotiable") ? " · Negotiable" : ""}
          </span>
          <span className="text-xs text-neutral-500 font-normal">
            {ad.postedAgo}
          </span>
        </div>
      </div>
    </Link>
  );
}
