import React from "react";

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div>
        <h2 className="text-2xl font-extrabold sm:text-3xl font-serif text-neutral-900">
          How WrkZone works
        </h2>
        <p className="mt-1 text-ink-soft text-sm">Three simple steps</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Step 1 */}
        <div className="relative rounded-3xl bg-white p-7 ring-1 ring-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full primary-gradient text-sm font-bold text-white shadow">
            1
          </span>
          <div className="text-4xl">📝</div>
          <h3 className="mt-3 text-lg font-bold text-neutral-800">
            Post or search
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            Create an account and post your service, or search for the help you need.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative rounded-3xl bg-white p-7 ring-1 ring-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full primary-gradient text-sm font-bold text-white shadow">
            2
          </span>
          <div className="text-4xl">💬</div>
          <h3 className="mt-3 text-lg font-bold text-neutral-800">
            Connect directly
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            Customers call or message you straight from your ad — no middleman fees.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative rounded-3xl bg-white p-7 ring-1 ring-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full primary-gradient text-sm font-bold text-white shadow">
            3
          </span>
          <div className="text-4xl">⭐</div>
          <h3 className="mt-3 text-lg font-bold text-neutral-800">
            Get hired &amp; reviewed
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            Do great work, collect ratings, and grow your local client base.
          </p>
        </div>
      </div>
    </section>
  );
}
