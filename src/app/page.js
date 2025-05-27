'use client';
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureCards from '../components/home/FeatureCards';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeroSection />
        <FeatureCards />
        <CTASection />
      </div>
    </div>
  );
}


