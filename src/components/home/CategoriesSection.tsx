import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-2 font-serif">
          Browse by Category
        </h2>
        <p className="text-neutral-500 text-lg">
          Choose from our curated services
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group bg-white rounded-2xl p-6 text-center ring-1 ring-neutral-200 hover:ring-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="font-bold text-neutral-900 text-sm leading-tight">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
