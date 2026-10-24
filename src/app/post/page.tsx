"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CATEGORIES, POPULAR_METRO_CITIES } from "@/lib/data";
import { PlusCircle, CheckCircle2, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function PostAdPage() {
  const [formData, setFormData] = useState({
    title: "",
    categorySlug: "pest-control",
    city: "Mumbai",
    area: "",
    price: "",
    phone: "",
    whatsapp: "",
    description: "",
    providerName: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen py-16 bg-neutral-50/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-[#e67300] border border-orange-200 text-xs sm:text-sm font-bold mb-4">
            <Zap className="w-4 h-4 text-[#fb8500]" />
            <span>100% Free • No Commission • Live in 60 Seconds</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 tracking-tight">
            Post Your <span className="bg-gradient-to-r from-blue-600 to-[#fb8500] bg-clip-text text-transparent">Free Service Ad</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Reach thousands of local homeowners looking for pest control, cleaning, plumbing, AC repair &amp; home services.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-neutral-200 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Your Ad Has Been Published!
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
              Congratulations! Your listing <strong className="text-neutral-900">&ldquo;{formData.title}&rdquo;</strong> is now live on WrkZone. Customers in <strong className="text-neutral-900">{formData.city}</strong> can now view your ad and call or WhatsApp you directly.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left max-w-md mx-auto text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service:</span>
                <span className="font-bold text-neutral-900">{formData.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Location:</span>
                <span className="font-semibold">{formData.area ? `${formData.area}, ` : ""}{formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact:</span>
                <span className="font-semibold">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Price:</span>
                <span className="font-bold text-emerald-600">₹{formData.price}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/ads"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white primary-gradient shadow-md"
              >
                Browse All Ads
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    title: "",
                    categorySlug: "pest-control",
                    city: "Mumbai",
                    area: "",
                    price: "",
                    phone: "",
                    whatsapp: "",
                    description: "",
                    providerName: "",
                  });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                Post Another Ad
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl ring-1 ring-orange-200/80 space-y-6"
          >
            {/* Service Title */}
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                Service Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Herbal Pest Control — Cockroach & Termite Treatment"
                className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50/20 text-sm font-medium text-neutral-900 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20 transition-all"
              />
              <span className="text-xs text-neutral-400 mt-1 block">
                Be clear and specific so customers find you easily.
              </span>
            </div>

            {/* Category & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                  Category *
                </label>
                <select
                  value={formData.categorySlug}
                  onChange={(e) => setFormData({ ...formData, categorySlug: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                  City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
                >
                  {POPULAR_METRO_CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Area & Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                  Area / Locality
                </label>
                <input
                  type="text"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="e.g. Andheri West, Rohini, Koramangala"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                  Starting Price (₹) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g. 899 or 299/hr"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Provider Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                  Your Name / Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.providerName}
                  onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                  placeholder="e.g. Rajesh Kumar or Apex Pest Solutions"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                WhatsApp Number (Optional)
              </label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="Leave blank if same as phone"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                Detailed Service Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your service, chemicals used (e.g. herbal/bayer), warranty, response time, experience..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 focus:bg-white transition-all"
              />
            </div>

            {/* Safety & Notice */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>WrkZone Safety Policy:</strong> Posting is completely free. We do not charge commissions from service providers. Ensure all information is accurate and honest.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl font-bold text-base text-white sunrise-gradient shadow-lg shadow-orange-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <PlusCircle className="w-5 h-5" />
              <span>{isSubmitting ? "Publishing Ad..." : "Publish Free Service Ad"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
