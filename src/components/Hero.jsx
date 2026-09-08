import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import Navbar from './Navbar';


// Sub-component for individual circular ring counter with smooth slow count-up from 0 on scroll (up & down)
function CircularProgressRing({ label, targetValue, progressRatio, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: false });
  const [displayVal, setDisplayVal] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      setDisplayVal(0);
      setCurrentProgress(0);

      // Animate number display very slowly over 4.2s from 0 to targetValue each time scrolled into view
      const numControls = animate(0, targetValue, {
        duration: 4.2,
        delay,
        ease: 'easeOut',
        onUpdate: (v) => setDisplayVal(Math.round(v)),
      });

      // Animate purple circle progress ring arc very slowly over 4.2s from 0 to target ratio each time
      const ringControls = animate(0, progressRatio, {
        duration: 4.2,
        delay,
        ease: 'easeOut',
        onUpdate: (v) => setCurrentProgress(v),
      });

      return () => {
        numControls.stop();
        ringControls.stop();
      };
    } else {
      setDisplayVal(0);
      setCurrentProgress(0);
    }
  }, [isInView, targetValue, progressRatio, delay]);

  const radius = 38;
  const strokeWidth = 3.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - currentProgress * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 35, opacity: 0, scale: 0.88 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center group cursor-pointer"
    >
      {/* SVG Circle Ring in Purple */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
          {/* Background Track Circle */}
          <circle
            cx="45"
            cy="45"
            r={radius}
            className="stroke-purple-100"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Active Progress Ring Arc in Brand Purple */}
          <circle
            cx="45"
            cy="45"
            r={radius}
            className="stroke-purple-600"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Number Display Inside Circle (Starts from 00 every time) */}
        <span className="absolute text-xl sm:text-3xl md:text-4xl font-extrabold font-sans text-[#1a073f] tracking-tight group-hover:scale-110 transition-transform">
          {String(displayVal).padStart(2, '0')}
        </span>
      </div>

      {/* Label Text Underneath */}
      <span className="text-xs sm:text-sm font-semibold text-zinc-500 tracking-wide mt-2 group-hover:text-purple-700 transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

// Sub-component for Nexathon Flip Clock Timer (matching screenshot design)
// Sub-component for individual Flip Clock Card in Light Theme (Compact Horizontal Layout)
function FlipClockCard({ value, label }) {
  const formattedVal = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center group flex-shrink-0">
      {/* Flip Clock Card Box - Clean White Card */}
      <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-26 lg:w-28 lg:h-30 bg-white border border-zinc-200/90 rounded-lg sm:rounded-xl shadow-md flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.03]">
        {/* Top Half Highlight Surface */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white via-zinc-50/80 to-zinc-100/60 pointer-events-none border-b border-zinc-200/60" />

        {/* Bottom Half Shadow Surface */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-zinc-100/90 via-zinc-100 to-zinc-200/70 pointer-events-none" />

        {/* Center Split Horizontal Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-zinc-300/90 z-20 shadow-xs" />

        {/* Left Side Hinge Notch */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-3 sm:h-4 bg-zinc-300/90 rounded-r-sm border-r border-y border-zinc-400/40 z-30 shadow-inner" />

        {/* Right Side Hinge Notch */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-3 sm:h-4 bg-zinc-300/90 rounded-l-sm border-l border-y border-zinc-400/40 z-30 shadow-inner" />

        {/* Number in Purple font with Framer Motion flip animation */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formattedVal}
            initial={{ rotateX: -80, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#1a073f] z-10 select-none drop-shadow-xs"
          >
            {formattedVal}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Label Text Underneath in Purple */}
      <span className="text-[8px] sm:text-[10px] md:text-xs font-extrabold text-purple-600 tracking-[0.18em] sm:tracking-[0.22em] uppercase mt-1.5 sm:mt-2 font-poppins">
        {label}
      </span>
    </div>
  );
}

// Sub-component for Nexathon Flip Clock Timer (Full-Width Horizontal Rectangle Banner Layout)
function NexathonFlipClockTimer({ timeLeft, onRegisterClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: false });

  const targetD = timeLeft?.days || 18;
  const targetH = timeLeft?.hours || 14;
  const targetM = timeLeft?.minutes || 22;
  const targetS = timeLeft?.seconds || 45;

  const [daysDisplay, setDaysDisplay] = useState(targetD);
  const [hoursDisplay, setHoursDisplay] = useState(targetH);
  const [minsDisplay, setMinsDisplay] = useState(targetM);
  const [liveSeconds, setLiveSeconds] = useState(targetS);
  const [animatingSec, setAnimatingSec] = useState(targetS);
  const [isIntroDone, setIsIntroDone] = useState(true);

  // Live 1-second interval ticker for live countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveSeconds((prev) => {
        if (prev <= 0) {
          setMinsDisplay((m) => {
            if (m <= 0) {
              setHoursDisplay((h) => {
                if (h <= 0) {
                  setDaysDisplay((d) => (d <= 0 ? 0 : d - 1));
                  return 23;
                }
                return h - 1;
              });
              return 59;
            }
            return m - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Animate from 0 to target values when scrolled into view
  useEffect(() => {
    if (isInView) {
      setDaysDisplay(0);
      setHoursDisplay(0);
      setMinsDisplay(0);
      setAnimatingSec(0);
      setIsIntroDone(false);

      const dControls = animate(0, targetD, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setDaysDisplay(Math.round(v)),
      });

      const hControls = animate(0, targetH, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setHoursDisplay(Math.round(v)),
      });

      const mControls = animate(0, targetM, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setMinsDisplay(Math.round(v)),
      });

      const sControls = animate(0, liveSeconds, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setAnimatingSec(Math.round(v)),
        onComplete: () => setIsIntroDone(true),
      });

      return () => {
        dControls.stop();
        hControls.stop();
        mControls.stop();
        sControls.stop();
      };
    }
  }, [isInView, targetD, targetH, targetM]);

  const displaySec = isIntroDone ? liveSeconds : animatingSec;

  return (
    <section className="w-full bg-white py-5 sm:py-6 lg:py-7 px-4 sm:px-8 border-y border-zinc-200/80 relative overflow-hidden select-none">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 lg:gap-8 relative z-10"
      >
        {/* Left Side: Badge + Name + Short Design in Purple Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg lg:max-w-xl">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-3 py-0.5 rounded-full mb-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#1a073f] uppercase">
              FLAGSHIP HACKATHON • OCT 15-16, 2026
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a073f] tracking-tight leading-tight">
            NEXATHON '26
          </h2>

          <p className="text-[#1a073f] text-xs sm:text-sm font-semibold mt-1 leading-snug">
            24 Hours of AI & Data Science. Build real-world solutions, compete for prize pools, and learn directly from industry mentors.
          </p>
        </div>

        {/* Center / Right: 4 Flip Clock Cards (DAYS, HOURS, MINUTES, SECONDS) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
          <FlipClockCard value={daysDisplay} label="DAYS" />
          <FlipClockCard value={hoursDisplay} label="HOURS" />
          <FlipClockCard value={minsDisplay} label="MINUTES" />
          <FlipClockCard value={displaySec} label="SECONDS" />
        </div>

        {/* Right Side: Register Now CTA Button */}
        <div className="flex flex-col items-center md:items-end flex-shrink-0">
          <button
            onClick={onRegisterClick}
            className="bg-[#1a073f] hover:bg-purple-900 text-white font-bold text-xs sm:text-sm lg:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-purple-950/20 hover:shadow-purple-950/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Register Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// Sub-component for 3D Flowing Lavender Glass Grid & Warm Horizon Background
function DataFlowingRibbon3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* 3D Lavender Glass Grid Receding Horizon Background Layer using user selected bg1.jpeg */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-100 z-10 transition-transform duration-1000 scale-105 filter saturate-[1.15]"
        style={{ backgroundImage: 'url(/bg1.jpeg)' }}
      />
      {/* Soft top gradient to ensure smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-purple-900/10 z-10 pointer-events-none" />
    </div>
  );
}

export default function Hero({ isSplashDone = false }) {
  return (
    <div className="w-full text-zinc-900 select-none bg-white px-2 sm:px-3 md:px-4 lg:px-5 pt-2 sm:pt-3 pb-2 sm:pb-3 h-screen min-h-[580px] max-h-[1050px] flex flex-col">
      {/* Top Hero Header Card Section fitting screen height */}
      <div className="relative w-full h-full bg-white overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_50px_-15px_rgba(26,7,63,0.25)] border border-purple-900/10 flex flex-col justify-between">
        {/* 3D Flowing Ribbon Background with bg1.jpeg */}
        <DataFlowingRibbon3D />

        {/* Header / Navbar Container */}
        <div className="relative z-20 w-full flex-shrink-0">
          <Navbar />
        </div>

        {/* Main Central Container - Centered vertically within screen */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex-1 flex flex-col items-center justify-center">
          <section className="relative flex flex-col items-center justify-center text-center py-4 sm:py-8 w-full z-10 my-auto">
            <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 flex flex-col items-center">
              {/* Headline Title */}
              <motion.h1
                key={isSplashDone ? 'hero-title-active' : 'hero-title-init'}
                initial={{ y: 45, opacity: 0 }}
                animate={isSplashDone ? { y: 0, opacity: 1 } : { y: 45, opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.08] text-white drop-shadow-lg uppercase text-center select-none"
              >
                Data Nexus Club
              </motion.h1>

              {/* Subtitle Description */}
              <motion.p
                key={isSplashDone ? 'hero-desc-active' : 'hero-desc-init'}
                initial={{ opacity: 0, y: 25 }}
                animate={isSplashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins text-xs sm:text-sm md:text-base font-normal text-zinc-100/90 leading-relaxed max-w-xl mx-auto mt-3.5 sm:mt-5 tracking-wide drop-shadow-sm"
              >
                Explore AI, Data, and Innovation through a community that learns by building.
              </motion.p>

              {/* Single CTA Button */}
              <motion.div
                key={isSplashDone ? 'hero-cta-active' : 'hero-cta-init'}
                initial={{ opacity: 0, y: 25 }}
                animate={isSplashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8 flex items-center justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="#events"
                  className="bg-[#1a073f] hover:bg-purple-900 text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-xl shadow-purple-950/20 hover:shadow-purple-950/30 inline-flex items-center gap-2.5 cursor-pointer transition-all font-poppins"
                >
                  <span>Explore Our Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
