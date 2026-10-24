"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (
        (email === "rahul@wrkzone.com" && password === "user123") ||
        (email === "admin@wrkzone.com" && password === "admin123") ||
        (email.length >= 3 && password.length >= 3)
      ) {
        router.push("/ads");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 600);
  }

  function fillDemo(demoEmail: string, demoPass: string) {
    setEmail(demoEmail);
    setPassword(demoPass);
    setError("");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-6 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-orange-200">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl sunrise-gradient text-2xl shadow-lg shadow-orange-500/30 text-white">
            🌅
          </span>
          <h1 className="mt-4 text-2xl font-extrabold font-serif text-neutral-900">
            Welcome back!
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Log in to manage your ads and bookings.
          </p>
        </div>

        {error && (
          <p className="mt-5 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 border border-red-200">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-neutral-800">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-xl border border-orange-200 bg-orange-50/40 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 text-neutral-900 font-medium"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-neutral-800">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-xl border border-orange-200 bg-orange-50/40 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 text-neutral-900 font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl sunrise-gradient py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.01] transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          New to WrkZone?{" "}
          <Link href="/register" className="font-bold text-[#fb8500] hover:underline">
            Create an account
          </Link>
        </p>

        <div className="mt-6 rounded-xl bg-orange-50/80 p-4 text-xs text-neutral-600 border border-orange-200/60">
          <p className="font-bold text-neutral-900">Demo accounts (click to test):</p>
          <div className="mt-2 space-y-1.5">
            <button
              type="button"
              onClick={() => fillDemo("rahul@wrkzone.com", "user123")}
              className="w-full text-left p-1.5 rounded hover:bg-orange-100/70 transition flex items-center justify-between"
            >
              <span>👤 User: rahul@wrkzone.com / user123</span>
              <span className="text-[#fb8500] font-bold">Use</span>
            </button>
            <button
              type="button"
              onClick={() => fillDemo("admin@wrkzone.com", "admin123")}
              className="w-full text-left p-1.5 rounded hover:bg-orange-100/70 transition flex items-center justify-between"
            >
              <span>🛡️ Admin: admin@wrkzone.com / admin123</span>
              <span className="text-[#fb8500] font-bold">Use</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
