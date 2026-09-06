import React, { useState } from 'react';
import Hero from '../components/Hero';
import Events from '../components/Events';
import About from '../components/About';
import TeamPreview from '../components/TeamPreview';
import JoinCommunity from '../components/JoinCommunity';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

export default function LandingPage() {
  const [isSplashDone, setIsSplashDone] = useState(false);

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
