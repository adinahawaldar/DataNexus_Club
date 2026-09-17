import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ isSplashDone = false }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`relative w-full min-h-[90vh] lg:min-h-screen select-none flex flex-col justify-between overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#07050e] text-white' : 'bg-[#faf8fd] text-zinc-900'
      }`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Purple Glows (Dark Mode - Both Mobile & Desktop) */}
        {isDark ? (
          <>
            {/* Top Center Ambient Violet/Purple Glow */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[850px] lg:w-[1100px] h-[340px] sm:h-[550px] rounded-full pointer-events-none opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.45) 0%, rgba(79, 70, 229, 0.18) 55%, transparent 85%)',
                filter: 'blur(70px)',
              }}
            />
            {/* Central Indigo-Purple Glowing Aura (Behind Headline Text) */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[950px] lg:w-[1200px] h-[300px] sm:h-[550px] rounded-full pointer-events-none opacity-35"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.35) 0%, rgba(59, 130, 246, 0.16) 45%, transparent 90%)',
                filter: 'blur(65px)',
              }}
            />
          </>
        ) : (
          <>
            {/* Subtle Graph Paper Grid Pattern (Light Mode) */}
            <div
              className="absolute inset-0 bg-[size:3.5rem_3.5rem] opacity-35 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]"
              style={{
                maskImage:
                  'radial-gradient(ellipse 80% 55% at 50% 42%, #000 10%, transparent 88%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 80% 55% at 50% 42%, #000 10%, transparent 88%)',
              }}
            />
            {/* Soft Ambient Off-White & Light Purple Center Glow (Light Mode) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[950px] lg:w-[1250px] h-[280px] sm:h-[550px] rounded-full pointer-events-none opacity-75"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(216, 180, 254, 0.45) 0%, rgba(233, 213, 255, 0.25) 45%, rgba(250, 245, 255, 0.1) 75%, transparent 95%)',
                filter: 'blur(75px)',
              }}
            />
          </>
        )}

        {/* Bottom Fade Gradient Overlay for Seamless Section Transition */}
        <div
          className={`absolute inset-x-0 bottom-0 h-48 pointer-events-none z-0 bg-gradient-to-t ${
            isDark
              ? 'from-[#07050e] via-[#07050e]/80 to-transparent'
              : 'from-[#faf8fd] via-[#faf8fd]/80 to-transparent'
          }`}
        />
      </div>

      {/* Header / Navbar Container */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Main Central Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-10 sm:py-16">
        <section className="flex flex-col items-center justify-center text-center w-full">
          {/* Masterpiece Title Layout */}
          <div className="relative flex flex-col items-center justify-center select-none my-2 sm:my-4 w-full">
            {/* DATANEXUS Title */}
            <motion.h1
              key={isSplashDone ? 'title-active' : 'title-init'}
              initial={{ y: 40, opacity: 0 }}
              animate={isSplashDone ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className={`font-outfit font-black text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[12.5rem] tracking-tight uppercase leading-none text-center select-none transition-colors ${
                isDark
                  ? 'bg-gradient-to-b from-[#f1f5f9] via-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(147,51,234,0.22)]'
                  : 'text-[#1a073f] drop-shadow-[0_0_35px_rgba(168,85,247,0.3)]'
              }`}
            >
              DATANEXUS
            </motion.h1>

            {/* Overlapping Cursive Script "Club" */}
            <motion.span
              key={isSplashDone ? 'script-active' : 'script-init'}
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={isSplashDone ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`font-script text-6xl xs:text-7xl sm:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-bold tracking-normal transform -rotate-3 -mt-4 xs:-mt-5 sm:-mt-12 lg:-mt-20 xl:-mt-24 z-20 ${
                isDark ? 'text-[#fffdfa]' : 'text-[#fefbe8]'
              }`}
              style={{
                WebkitTextStroke: isDark ? '1px #4c1d95' : '1.5px #1a073f',
                filter: isDark
                  ? 'drop-shadow(2px 3px 0px #2a084e) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.5))'
                  : 'drop-shadow(2px 3px 0px #1a073f) drop-shadow(0px 4px 8px rgba(26, 7, 63, 0.18))',
              }}
            >
              Club
            </motion.span>
          </div>

          {/* Subtitle Description */}
          <motion.p
            key={isSplashDone ? 'desc-active' : 'desc-init'}
            initial={{ opacity: 0, y: 20 }}
            animate={isSplashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`font-sans text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto mt-6 sm:mt-8 tracking-normal transition-colors ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            Explore AI, data, and innovation through a community that learns by building.
          </motion.p>

          {/* Single CTA Button */}
          <motion.div
            key={isSplashDone ? 'cta-active' : 'cta-init'}
            initial={{ opacity: 0, y: 20 }}
            animate={isSplashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="#events"
              className={`font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-2.5 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isDark
                  ? 'bg-gradient-to-r from-[#5b21b6] via-[#9333ea] to-[#5b21b6] backdrop-blur-xl border border-white/30 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.45)] hover:brightness-115'
                  : 'bg-[#12092c] text-white border border-black/20 shadow-xl hover:bg-black'
              }`}
            >
              <span>Explore Our Work</span>
              <span className="text-base font-bold">↗</span>
            </a>
          </motion.div>
        </section>
      </div>

      {/* Empty bottom spacer for perfect vertical balance */}
      <div className="pb-6 pointer-events-none" />
    </div>
  );
}

