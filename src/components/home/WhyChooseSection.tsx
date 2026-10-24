import React from "react";

export function WhyChooseSection() {
  const cards = [
    {
      icon: "✓",
      title: "Verified Professionals",
      desc: "All service providers are thoroughly vetted and certified",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: "💰",
      title: "Best Prices",
      desc: "Transparent, competitive rates with no hidden fees or charges",
      gradient: "from-fb8500 to-ffb81c",
    },
    {
      icon: "🛡️",
      title: "Quality Guaranteed",
      desc: "Satisfaction guaranteed on all services with trusted warranty",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: "⚡",
      title: "Quick Booking",
      desc: "Get connected with professionals in seconds, not days",
      gradient: "from-fb8500 to-ffb81c",
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      desc: "Verified contacts and safe interactions every time",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: "🕒",
      title: "24/7 Support",
      desc: "Our dedicated support team is here to assist you anytime",
      gradient: "from-fb8500 to-ffb81c",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60 blur-3xl pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-fb8500/20 rounded-full border border-fb8500/30 mb-4">
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            ⭐ Why WrkZone is Your Best Choice
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 font-serif text-neutral-900">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">
            WrkZone
          </span>
          ?
        </h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          We connect you with trusted professionals who deliver exceptional results. Experience the difference with India&apos;s most trusted service marketplace.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-10 transition-opacity group-hover:opacity-15`}
            />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 ring-2 ring-white/50 group-hover:ring-2 group-hover:ring-fb8500/50 shadow-sm group-hover:shadow-xl transition-all">
              <div
                className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${c.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <span className="text-3xl">{c.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-fb8500 transition-colors">
                {c.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                {c.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-fb8500 w-0 group-hover:w-full transition-all duration-300 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
