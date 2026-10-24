"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen py-16 bg-neutral-50/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-bold mb-3 border border-blue-200">
            💬 We are Here to Help
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent">WrkZone Support</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Have questions about posting a service, verifying your profile, or booking a pest control or cleaning pro? Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details Cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-fb8500 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-sm">Email Support</h3>
              <p className="text-xs text-neutral-500 mt-1">Direct inquiries &amp; safety</p>
              <a
                href="mailto:support@wrkzone.com"
                className="mt-3 block text-sm font-bold text-fb8500 hover:underline"
              >
                support@wrkzone.com
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-sm">Toll-Free Helpline</h3>
              <p className="text-xs text-neutral-500 mt-1">Monday – Saturday 9am–7pm</p>
              <a
                href="tel:18001234567"
                className="mt-3 block text-sm font-bold text-blue-600 hover:underline"
              >
                1800-123-4567
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-sm">Headquarters</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                WrkZone Marketplace India<br />
                Serving 22+ Major Indian Metro Cities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-emerald-700">
                    Thank you for reaching out. Our support team will get back to you within 24 hours at <strong>{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-fb8500 bg-neutral-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-fb8500 bg-neutral-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Pest control inquiry / Account verification"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-fb8500 bg-neutral-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-fb8500 bg-neutral-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm text-white primary-gradient shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
