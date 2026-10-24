import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { CitiesSection } from "@/components/home/CitiesSection";
import { BannerSection } from "@/components/home/BannerSection";
import { FreshListingsSection } from "@/components/home/FreshListingsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FaqSection } from "@/components/home/FaqSection";
import { AppPromoSection } from "@/components/home/AppPromoSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Browse by Category */}
      <CategoriesSection />

      {/* 3. Top Metro Cities */}
      <CitiesSection />

      {/* 4. Banner Promo */}
      <BannerSection />

      {/* 5. Fresh Listings */}
      <FreshListingsSection />

      {/* 6. Why Choose WrkZone */}
      <WhyChooseSection />

      {/* 7. Customer Testimonials */}
      <TestimonialsSection />

      {/* 8. Industry Partners */}
      <PartnersSection />

      {/* 9. How WrkZone Works */}
      <HowItWorksSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Download Mobile App */}
      <AppPromoSection />

      {/* 12. Ready to Grow / CTA */}
      <CtaSection />
    </div>
  );
}
