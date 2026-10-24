import React from "react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import HomePage from "@/app/page";
import AdsPage from "@/app/ads/page";
import AdDetailPage from "@/app/ads/[id]/page";
import CategoryPage from "@/app/category/[slug]/page";
import AboutPage from "@/app/about/page";
import LoginPage from "@/app/login/page";
import RegisterPage from "@/app/register/page";
import PostAdPage from "@/app/post/page";
import ContactPage from "@/app/contact/page";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";

// Root layout with Header, Footer, and ScrollRestoration
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-stone-50/50 text-neutral-900 antialiased selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden w-full max-w-full">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="text-6xl mb-4">🔍</div>
      <h1 className="text-3xl font-extrabold font-serif text-neutral-900 mb-2">
        Page Not Found
      </h1>
      <p className="text-neutral-600 mb-6 max-w-md">
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="rounded-full bg-[#fb8500] hover:bg-[#e67300] px-7 py-3 text-sm font-bold text-white shadow-md transition"
      >
        Back to Home
      </a>
    </div>
  ),
});

// Routes definition for WrkZone home services marketplace
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const adsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ads",
  component: AdsPage,
});

const adDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ads/$id",
  component: AdDetailPage,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$slug",
  component: CategoryPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/post",
  component: PostAdPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  adsRoute,
  adDetailRoute,
  categoryRoute,
  aboutRoute,
  loginRoute,
  registerRoute,
  postRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
