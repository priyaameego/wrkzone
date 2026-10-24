"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/post");
    }, 600);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col px-6 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-orange-200/70">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl sunrise-gradient text-2xl shadow-lg shadow-orange-500/30 text-white">
            ✨
          </span>
          <h1 className="mt-4 text-2xl font-extrabold text-neutral-900 font-serif">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            It&apos;s free — start posting ads in minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-neutral-800">
              Full name *
            </span>
            <input
              type="text"
              required
              placeholder="Rahul Sharma"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="mt-1.5 w-full rounded-xl border border-orange-200/80 bg-orange-50/30 px-4 py-3 text-sm outline-none transition focus:border-[#fb8500] focus:ring-2 focus:ring-orange-400/30 text-neutral-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-neutral-800">
              Email *
            </span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1.5 w-full rounded-xl border border-orange-200/80 bg-orange-50/30 px-4 py-3 text-sm outline-none transition focus:border-[#fb8500] focus:ring-2 focus:ring-orange-400/30 text-neutral-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-neutral-800">
              Password *
            </span>
            <input
              type="password"
              required
              placeholder="Min 6 characters"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="mt-1.5 w-full rounded-xl border border-orange-200/80 bg-orange-50/30 px-4 py-3 text-sm outline-none transition focus:border-[#fb8500] focus:ring-2 focus:ring-orange-400/30 text-neutral-900"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-semibold text-neutral-800">Phone</span>
              <input
                type="text"
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="mt-1.5 w-full rounded-xl border border-orange-200/80 bg-orange-50/30 px-4 py-3 text-sm outline-none transition focus:border-[#fb8500] focus:ring-2 focus:ring-orange-400/30 text-neutral-900"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-neutral-800">City</span>
              <input
                type="text"
                placeholder="Mumbai"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="mt-1.5 w-full rounded-xl border border-orange-200/80 bg-orange-50/30 px-4 py-3 text-sm outline-none transition focus:border-[#fb8500] focus:ring-2 focus:ring-orange-400/30 text-neutral-900"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl sunrise-gradient py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.01] transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link className="font-bold text-[#fb8500] hover:underline" href="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
