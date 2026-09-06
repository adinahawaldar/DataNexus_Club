import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SplashScreen from '../components/SplashScreen';

export default function LandingPage() {
  return (
    <main className="relative w-full min-h-screen">
      <SplashScreen />
      <Hero />
      <About />
    </main>
  );
}
