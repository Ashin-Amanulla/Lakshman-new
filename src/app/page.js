"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Hero />

      {/* About & Stats Section */}
      <About />

      {/* Practice Areas Section */}
      <PracticeAreas />

      {/* Contact Section */}
      <Contact />
    </PageWrapper>
  );
}
