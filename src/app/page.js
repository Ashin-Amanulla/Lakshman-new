"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import DisclaimerModal from "@/components/common/DisclaimerModal";

export default function HomePage() {
  return (
    <>
      <PageWrapper>
        {/* Hero */}
        <Hero />

        {/* About & Stats */}
        <About />

        {/* Practice Areas */}
        <PracticeAreas />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Contact CTA */}
        <Contact />
      </PageWrapper>

      {/* Disclaimer Modal */}
      <DisclaimerModal />
    </>
  );
}
