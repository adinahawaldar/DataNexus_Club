import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import Events from '../components/Events';
import About from '../components/About';
import TeamPreview from '../components/TeamPreview';
import JoinCommunity from '../components/JoinCommunity';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

export default function LandingPage() {
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Momentum Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen">
      <SplashScreen onStartFade={() => setIsSplashDone(true)} />
      <Hero isSplashDone={isSplashDone} />
      <Events />
      <About />
      <TeamPreview />
      <JoinCommunity />
      <Footer />
    </main>
  );
}
