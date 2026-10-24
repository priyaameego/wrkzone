import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WrkZone — Find Trusted Local Services & Post Free Ads | #1 Marketplace in India",
  description:
    "Discover verified pest control, plumbers, electricians, cleaners & 100+ local services near you. Post your services free on India's most trusted local services marketplace. No registration required!",
  keywords: [
    "pest control",
    "home cleaning",
    "plumber near me",
    "electrician near me",
    "ac repair",
    "carpenter",
    "local services india",
    "free classified ads"
  ],
  authors: [{ name: "WrkZone" }],
  metadataBase: new URL("https://wrkzone.com"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png"
  },
  openGraph: {
    title: "WrkZone — Find Trusted Local Services & Post Free Ads | #1 Marketplace in India",
    description:
      "Discover verified plumbers, electricians, cleaners & 100+ local services near you. Post your services free on India's most trusted local services marketplace.",
    url: "https://wrkzone.com",
    siteName: "WrkZone",
    images: [
      {
        url: "/logo.png",
        width: 384,
        height: 100,
        alt: "WrkZone Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50/50 text-neutral-900 antialiased selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden w-full max-w-full">
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
