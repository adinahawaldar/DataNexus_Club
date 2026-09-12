import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ isSplashDone = false }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`relative w-full min-h-[90vh] lg:min-h-screen select-none flex flex-col justify-between overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#07050e] text-white' : 'bg-white text-zinc-900'
      }`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark Mode Dual Ambient Glows, Vertical Pillar Light Columns & Sparkles (Lighter Soft Opacity) */}
        {isDark && (
          <>
            {/* Top Left Deep Violet/Purple Ambient Glow */}
            <div
              className="absolute -top-32 -left-24 w-[600px] sm:w-[850px] h-[550px] rounded-full pointer-events-none opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.4) 0%, rgba(79, 70, 229, 0.18) 50%, transparent 80%)',
                filter: 'blur(100px)',
              }}
            />
            {/* Top Right Vibrant Violet Ambient Glow */}
            <div
              className="absolute -top-32 -right-24 w-[600px] sm:w-[850px] h-[550px] rounded-full pointer-events-none opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.18) 50%, transparent 80%)',
                filter: 'blur(100px)',
              }}
            />
            {/* Central Indigo-Purple Glowing Aura (Behind Headline Text) */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[1100px] h-[450px] sm:h-[600px] rounded-full pointer-events-none opacity-35"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.3) 0%, rgba(59, 130, 246, 0.15) 40%, rgba(15, 10, 30, 0.05) 75%, transparent 95%)',
                filter: 'blur(90px)',
              }}
            />

            {/* Vertical Translucent Pillar Light Columns (Subtle Soft Opacity) */}
            <div className="absolute inset-0 flex justify-center gap-2 sm:gap-4 md:gap-6 px-4 pointer-events-none opacity-20 overflow-hidden">
              {[0.12, 0.3, 0.5, 0.75, 0.9, 0.75, 0.5, 0.3, 0.12].map((op, i) => (
                <div
                  key={i}
                  className="flex-1 max-w-[120px] sm:max-w-[160px] h-full bg-gradient-to-b from-purple-400/18 via-indigo-500/10 to-transparent border-x border-purple-400/10 rounded-b-3xl"
                  style={{ opacity: op }}
                />
              ))}
            </div>

            {/* Floating Twinkling Sparkles & Dust Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { top: '15%', left: '18%', size: '2.5px', opacity: 0.5, color: '#c084fc' },
                { top: '22%', left: '78%', size: '2px', opacity: 0.4, color: '#e0e7ff' },
                { top: '35%', left: '12%', size: '3px', opacity: 0.6, color: '#a855f7' },
                { top: '42%', left: '85%', size: '2.5px', opacity: 0.5, color: '#818cf8' },
                { top: '58%', left: '22%', size: '2px', opacity: 0.35, color: '#c084fc' },
                { top: '65%', left: '76%', size: '2.5px', opacity: 0.55, color: '#e0e7ff' },
                { top: '28%', left: '48%', size: '2px', opacity: 0.6, color: '#ffffff' },
                { top: '75%', left: '38%', size: '2.5px', opacity: 0.4, color: '#a855f7' },
                { top: '18%', left: '62%', size: '2px', opacity: 0.45, color: '#c084fc' },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
                    scale: [0.75, 1.25, 0.75],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                  className="absolute rounded-full shadow-[0_0_6px_rgba(192,132,252,0.6)]"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Subtle Graph Paper Grid Pattern with Vignette & Bottom Edge Blend */}
        <div
          className={`absolute inset-0 bg-[size:3.5rem_3.5rem] ${
            isDark
              ? 'opacity-15 bg-[linear-gradient(to_right,rgba(192,132,252,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(192,132,252,0.08)_1px,transparent_1px)]'
              : 'opacity-55 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]'
          }`}
          style={{
            maskImage:
              'radial-gradient(ellipse 80% 55% at 50% 42%, #000 10%, transparent 88%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 55% at 50% 42%, #000 10%, transparent 88%)',
          }}
        />

        {/* Wavy Cyber Data Flow Lines at Bottom (Positioned Low Away From CTA) */}
        <div
          className={`absolute inset-x-0 bottom-0 h-36 sm:h-48 md:h-56 pointer-events-none overflow-hidden z-0 ${
            isDark ? 'opacity-85' : 'opacity-70'
          }`}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? '#1d4ed8' : '#818cf8'} stopOpacity={isDark ? '0.9' : '0.85'} />
                <stop offset="35%" stopColor={isDark ? '#3b82f6' : '#a855f7'} stopOpacity={isDark ? '1' : '0.9'} />
                <stop offset="70%" stopColor={isDark ? '#6366f1' : '#c084fc'} stopOpacity={isDark ? '0.8' : '0.8'} />
                <stop offset="100%" stopColor={isDark ? '#8b5cf6' : '#818cf8'} stopOpacity={isDark ? '0.6' : '0.6'} />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? '#2563eb' : '#a855f7'} stopOpacity={isDark ? '0.7' : '0.75'} />
                <stop offset="50%" stopColor={isDark ? '#60a5fa' : '#c084fc'} stopOpacity={isDark ? '0.9' : '0.85'} />
                <stop offset="100%" stopColor={isDark ? '#a855f7' : '#818cf8'} stopOpacity={isDark ? '0.5' : '0.55'} />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation={isDark ? '3' : '2'} result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Lowered glowing curved wave paths away from CTA */}
            <path
              d="M-50,225 C320,180 750,255 1490,200"
              stroke="url(#waveGrad1)"
              strokeWidth="2.5"
              filter="url(#glowFilter)"
            />
            <path
              d="M-50,235 C330,190 740,263 1490,210"
              stroke="url(#waveGrad1)"
              strokeWidth="1.8"
            />
            <path
              d="M-50,245 C340,200 730,271 1490,220"
              stroke="url(#waveGrad2)"
              strokeWidth="1.5"
            />
            <path
              d="M-50,254 C350,209 720,278 1490,229"
              stroke="url(#waveGrad2)"
              strokeWidth="1.2"
            />
            <path
              d="M-50,262 C360,217 710,284 1490,237"
              stroke="url(#waveGrad1)"
              strokeWidth="1"
              strokeDasharray="12 8"
            />
            <path
              d="M-50,270 C370,225 700,290 1490,245"
              stroke="url(#waveGrad2)"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* Bottom Fade Gradient Overlay for Seamless Section Transition */}
        <div
          className={`absolute inset-x-0 bottom-0 h-48 pointer-events-none z-0 bg-gradient-to-t ${
            isDark
              ? 'from-[#07050e] via-[#07050e]/80 to-transparent'
              : 'from-white via-white/80 to-transparent'
          }`}
        />

        {/* Soft Ambient Center Glow (Light Mode) */}
        {!isDark && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full pointer-events-none opacity-65"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(233, 213, 255, 0.5) 0%, rgba(243, 232, 255, 0.25) 45%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        )}
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
              className={`font-outfit font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[12.5rem] tracking-tight uppercase leading-none text-center select-none transition-colors ${
                isDark
                  ? 'text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.18)]'
                  : 'text-[#1a073f] drop-shadow-xs'
              }`}
            >
              DATANEXUS
            </motion.h1>

            {/* Overlapping Soft Ivory Cursive Script "Club" */}
            <motion.span
              key={isSplashDone ? 'script-active' : 'script-init'}
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={isSplashDone ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-script text-6xl sm:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-bold tracking-normal transform -rotate-3 -mt-6 sm:-mt-12 lg:-mt-20 xl:-mt-24 z-20 text-[#fffdfa]"
              style={{
                filter: isDark
                  ? 'drop-shadow(2px 3px 0px #2a084e) drop-shadow(0px 0px 8px rgba(168, 85, 247, 0.25))'
                  : 'drop-shadow(2px 3px 0px #1a073f) drop-shadow(0px 3px 6px rgba(26, 7, 63, 0.12))',
                WebkitTextStroke: isDark ? '1.5px #4c1d95' : '1.5px #1a073f',
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
              className="font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-2.5 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-[#5b21b6] via-[#9333ea] to-[#5b21b6] backdrop-blur-xl border border-white/30 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.45)] hover:brightness-115"
            >
              <span>Explore Our Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </section>
      </div>

      {/* Empty bottom spacer for perfect vertical balance */}
      <div className="pb-6 pointer-events-none" />
    </div>
  );
}

