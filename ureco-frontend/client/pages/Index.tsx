import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import ClientStories from "../components/ClientStories";
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-ureco-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <ClientStories />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}
