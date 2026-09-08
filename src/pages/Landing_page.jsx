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
    // Disable browser automatic scroll restoration on page reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Always force scroll to top (Hero section) on initial page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Initialize Lenis Smooth Momentum Scrolling (Mobile & Desktop)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenis.scrollTo(0, { immediate: true });

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

  // When splash screen finishes, ensure view is centered at the top Hero section
  const handleSplashDone = () => {
    setIsSplashDone(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <main className="relative w-full min-h-screen">
      <SplashScreen onStartFade={handleSplashDone} />
      <Hero isSplashDone={isSplashDone} />
      <Events />
      <About />
      <TeamPreview />
      <JoinCommunity />
      <Footer />
    </main>
  );
}
