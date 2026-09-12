import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dncLogo from '../assets/DNC_Logo.png';

export default function SplashScreen({ onStartFade, onFinish }) {
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Duration in seconds the logo is displayed before fading into landing page
  const displayDuration = 2.2;
  const fadeDuration = 0.8;

  useEffect(() => {
    // Start fading out logo & overlay
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      if (onStartFade) onStartFade();
    }, displayDuration * 1000);

    // Completely unmount splash overlay when fade animation completes
    const finishTimer = setTimeout(() => {
      setIsDone(true);
      if (onFinish) onFinish();
    }, (displayDuration + fadeDuration) * 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onStartFade, onFinish]);

  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: isFading ? 0 : 1,
        scale: isFading ? 1.06 : 1,
        filter: isFading ? 'blur(8px)' : 'blur(0px)',
      }}
      transition={{ duration: fadeDuration, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-full min-h-screen h-[100dvh] bg-[#07050e] z-[999999] flex flex-col items-center justify-center p-4 select-none overflow-hidden pointer-events-none"
    >
      {/* Background Ambient Purple Radial Glow */}
      <div className="absolute w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-purple-600/30 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      {/* Centered Logo & Brand Presentation */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.65, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex items-center justify-center"
        >
          <img
            src={dncLogo}
            alt="DataNexus Club Logo"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.55)]"
          />
        </motion.div>

        {/* Subtitle / Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-6 flex flex-col items-center"
        >
          <h1 className="font-sans font-bold text-2xl sm:text-4xl tracking-widest uppercase text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]">
            DataNexus <span className="text-purple-400 font-extrabold">Club</span>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
