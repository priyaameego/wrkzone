import React from "react";
import { PARTNERS } from "@/lib/data";

export function PartnersSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 opacity-60 blur-3xl pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-fb8500/20 rounded-full border border-fb8500/30 mb-4">
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            🤝 Industry Partners
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 font-serif text-neutral-900">
          Trusted By{" "}
          <span className="bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            Leading Brands
          </span>
        </h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          Partnering with companies across India to deliver exceptional services
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {PARTNERS.map((p, idx) => {
          const colors = [
            "from-blue-600 to-blue-400",
            "from-fb8500 to-ffb81c",
            "from-emerald-500 to-teal-400",
            "from-blue-600 to-indigo-500",
            "from-amber-500 to-orange-400",
            "from-rose-500 to-pink-400",
          ];
          const grad = colors[idx % colors.length];

          return (
            <div
              key={p.name}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-10 transition-opacity group-hover:opacity-15`}
              />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 ring-2 ring-white/50 group-hover:ring-2 group-hover:ring-fb8500/50 shadow-sm group-hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="font-bold text-neutral-900 text-sm group-hover:text-fb8500 transition-colors">
                  {p.name}
                </h3>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-fb8500 w-0 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
