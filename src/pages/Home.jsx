import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ExpectationSection from '../components/ExpectationSection';
import ProcessSection from '../components/ProcessSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpectationSection />
      <ProcessSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsappButton />
    </div>
  );
}