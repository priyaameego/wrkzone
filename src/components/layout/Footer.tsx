"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#060b19] text-white isolate">
      {/* Background Gradients & Accents with isolate so it never blends with body bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1633] via-[#070d1e] to-[#040711] -z-10" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#fb8500]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(29, 78, 216, 0.22) 0%, rgba(6, 11, 25, 0) 75%)",
        }}
      />
      <div className="h-1 bg-gradient-to-r from-blue-600 via-fb8500 to-blue-600" />

      <div className="mx-auto max-w-7xl px-6 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-900/60 to-fb8500/40 backdrop-blur-md p-8 border border-white/10 hover:border-white/20 transition-all shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2 font-serif">
                Stay Updated
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Get the latest service trends and exclusive offers right in your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-fb8500/50 focus:bg-white/20 transition-all text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-fb8500 to-yellow-500 text-white font-bold hover:shadow-lg hover:shadow-fb8500/50 transition-all hover:scale-105 shrink-0 text-sm cursor-pointer"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-fb8500 text-lg font-bold text-white shadow-md">
                🔧
              </span>
              <span className="text-xl font-extrabold">
                <span className="text-white">Wrk</span>
                <span className="bg-gradient-to-r from-fb8500 to-yellow-400 bg-clip-text text-transparent">
                  Zone
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Connect with trusted professionals or grow your service business. All in one platform.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-fb8500 text-white transition-all hover:scale-110"
                title="Facebook"
                href="https://facebook.com"
              >
                👍
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-fb8500 text-white transition-all hover:scale-110"
                title="Twitter"
                href="https://twitter.com"
              >
                🐦
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-fb8500 text-white transition-all hover:scale-110"
                title="Instagram"
                href="https://instagram.com"
              >
                📷
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-fb8500 text-white transition-all hover:scale-110"
                title="LinkedIn"
                href="https://linkedin.com"
              >
                🔗
              </a>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fb8500 to-yellow-400" />
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/ads"
                >
                  Browse Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/post"
                >
                  Post an Ad
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/#categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/about"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fb8500 to-yellow-400" />
              Account
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/register"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/login"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/ads"
                >
                  My Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/about"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fb8500 to-yellow-400" />
              Popular Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/category/plumbing"
                >
                  💧 Plumbing
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/category/ac-repair"
                >
                  ❄️ AC Repair
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/category/pest-control"
                >
                  🐛 Pest Control
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/category/cleaning"
                >
                  🧹 Cleaning
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-white/70 hover:text-fb8500 transition-all hover:translate-x-1 inline-block"
                  href="/ads"
                >
                  ⚡ More Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-3 gap-6 items-center text-sm">
            <div className="text-white/70">
              <p>© 2026 WrkZone. Built with 💙 for professionals.</p>
            </div>
            <div className="flex justify-center gap-6">
              <Link className="text-white/70 hover:text-fb8500 transition" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-white/70 hover:text-fb8500 transition" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-white/70 hover:text-fb8500 transition" href="/terms">
                Cookie Policy
              </Link>
            </div>
            <div className="text-right text-white/70">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span>🌍</span>
                <span>Made Globally</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
