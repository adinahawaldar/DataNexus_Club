import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onStartFade, onFinish }) {
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const marqueeDuration = 4.2; // Seconds for 1 full scroll loop to complete

  useEffect(() => {
    // Start fading out exactly when the full marquee scroll completes
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      if (onStartFade) onStartFade();
    }, marqueeDuration * 1000);

    // Completely unmount splash screen after fade transition (0.5s)
    const finishTimer = setTimeout(() => {
      setIsDone(true);
      if (onFinish) onFinish();
    }, (marqueeDuration + 0.5) * 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onStartFade, onFinish, marqueeDuration]);

  if (isDone) return null;

  const marqueeText = "WELCOME TO DATANEXUS CLUB • WELCOME TO DATANEXUS CLUB • ";

  return (
    <div
      className={`fixed inset-0 w-full h-full min-h-screen h-[100dvh] bg-white z-[999999] flex items-center justify-center p-2 sm:p-8 box-border select-none overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
      }`}
    >
      {/* Centered Large Fast Scrolling Marquee Text */}
      <div className="relative z-10 w-full overflow-hidden my-auto py-4">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: '0%' }}
          animate={{ x: '-50%' }}
          transition={{
            duration: marqueeDuration,
            ease: 'linear',
          }}
        >
          <span
            className="font-sans font-black text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight uppercase leading-none text-[#1a073f] select-none pr-6 sm:pr-8"
            style={{
              filter: 'drop-shadow(0px 8px 24px rgba(168, 85, 247, 0.25))',
            }}
          >
            {marqueeText}
          </span>
          <span
            className="font-sans font-black text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight uppercase leading-none text-[#1a073f] select-none pr-6 sm:pr-8"
            style={{
              filter: 'drop-shadow(0px 8px 24px rgba(168, 85, 247, 0.25))',
            }}
          >
            {marqueeText}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
