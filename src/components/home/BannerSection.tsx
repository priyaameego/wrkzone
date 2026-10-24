import React from "react";
import Link from "next/link";

export function BannerSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4">
      <Link
        className="block overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
        href="/register"
      >
        <img
          src="/banners/banner1.svg"
          alt="Become a Verified Pro — Boost your bookings!"
          className="w-full h-auto"
        />
      </Link>
    </section>
  );
}
