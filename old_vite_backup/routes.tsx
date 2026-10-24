import React from 'react';
import { 
  createRootRoute, 
  createRoute, 
  createRouter, 
  Outlet, 
  ScrollRestoration 
} from '@tanstack/react-router';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { AssistantModal } from './components/layout/AssistantModal';

import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { CandidatesPage } from './pages/CandidatesPage';
import { CandidateDetailPage } from './pages/CandidateDetailPage';
import { CVMakerPage } from './pages/CVMakerPage';
import { AgencyPage } from './pages/AgencyPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { CompanyDetailPage } from './pages/CompanyDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { HelpPage } from './pages/HelpPage';
import { HelpArticlePage } from './pages/HelpArticlePage';
import { FAQPage } from './pages/FAQPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { MyzonDashboard } from './pages/MyzonDashboard';
import { EmployerDashboard } from './pages/EmployerDashboard';
import { NotFoundPage } from './pages/NotFoundPage';

// Root Layout Component
const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f3f4f6] antialiased">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <AssistantModal />
    </div>
  );
};

// Root Route
export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

// Index Route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// Jobs Routes
const jobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jobs',
  component: JobsPage,
});

const jobsCategoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jobs/$slug',
  component: JobsPage,
});

const jobDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/job/$slug',
  component: JobDetailPage,
});

// Candidates Routes
const candidatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/candidates',
  component: CandidatesPage,
});

const candidateDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cv/$slug',
  component: CandidateDetailPage,
});

// CV Maker Route
const cvmakerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cvmaker',
  component: CVMakerPage,
});

// Job Agent Route
const agencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/agency',
  component: AgencyPage,
});

// Companies Routes
const companiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/companies',
  component: CompaniesPage,
});

const companyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/company/$name',
  component: CompanyDetailPage,
});

// Locations Routes
const locationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations',
  component: LocationsPage,
});

const locationDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/location/$name',
  component: LocationDetailPage,
});

// Courses Routes
const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CoursesPage,
});

const courseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/course/$id',
  component: CourseDetailPage,
});

// Blog Routes (Job Tips)
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogPostPage,
});

// Informational & Support Routes
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const homeAboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Home/About',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const homeServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Home/Services',
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const contactUsAddRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ContactUs/add',
  component: ContactPage,
});

const helpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/help',
  component: HelpPage,
});

const helpArticleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/help/$slug',
  component: HelpArticlePage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FAQPage,
});

const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/support',
  component: SupportPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPage,
});

const homePrivacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Home/Privacy',
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsPage,
});

const homeTermsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Home/Terms',
  component: TermsPage,
});

// Auth Routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/register',
  component: RegisterPage,
});

const forgotPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/forgot-password',
  component: ForgotPasswordPage,
});

// Workspace Routes
const myzonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/myzon',
  component: MyzonDashboard,
});

const employerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/employer',
  component: EmployerDashboard,
});

// Catch-all 404 Route
const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  jobsRoute,
  jobsCategoryRoute,
  jobDetailRoute,
  candidatesRoute,
  candidateDetailRoute,
  cvmakerRoute,
  agencyRoute,
  companiesRoute,
  companyDetailRoute,
  locationsRoute,
  locationDetailRoute,
  coursesRoute,
  courseDetailRoute,
  blogRoute,
  blogPostRoute,
  aboutRoute,
  homeAboutRoute,
  servicesRoute,
  homeServicesRoute,
  contactRoute,
  contactUsAddRoute,
  helpRoute,
  helpArticleRoute,
  faqRoute,
  supportRoute,
  privacyRoute,
  homePrivacyRoute,
  termsRoute,
  homeTermsRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
  myzonRoute,
  employerRoute,
  catchAllRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
