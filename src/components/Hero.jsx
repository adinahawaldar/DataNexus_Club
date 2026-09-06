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
function NexathonFlipClockTimer({ timeLeft, onRegisterClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  const targetD = timeLeft.days || 57;
  const targetH = timeLeft.hours || 11;
  const targetM = timeLeft.minutes || 52;

  // Initialize with target values so it NEVER displays 00:00:00 when loaded or out of view
  const [daysDisplay, setDaysDisplay] = useState(targetD);
  const [hoursDisplay, setHoursDisplay] = useState(targetH);
  const [minsDisplay, setMinsDisplay] = useState(targetM);
  const [liveSeconds, setLiveSeconds] = useState(timeLeft.seconds || 45);
  const [animatingSec, setAnimatingSec] = useState(timeLeft.seconds || 45);
  const [isAnimationDone, setIsAnimationDone] = useState(true);

  // Live 1-second interval ticker for live countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveSeconds((prev) => (prev <= 0 ? 59 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Animate from 0 to target values when scrolled into view (up & down)
  useEffect(() => {
    if (isInView) {
      setDaysDisplay(0);
      setHoursDisplay(0);
      setMinsDisplay(0);
      setAnimatingSec(0);
      setIsAnimationDone(false);

      const dControls = animate(0, targetD, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (v) => setDaysDisplay(Math.round(v)),
      });

      const hControls = animate(0, targetH, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (v) => setHoursDisplay(Math.round(v)),
      });

      const mControls = animate(0, targetM, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (v) => setMinsDisplay(Math.round(v)),
      });

      const sControls = animate(0, liveSeconds, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (v) => setAnimatingSec(Math.round(v)),
        onComplete: () => setIsAnimationDone(true),
      });

      return () => {
        dControls.stop();
        hControls.stop();
        mControls.stop();
        sControls.stop();
      };
    }
  }, [isInView, timeLeft.days, timeLeft.hours, timeLeft.minutes]);

  // Current display seconds (animating initial scroll count up, then live ticking)
  const displaySec = isAnimationDone ? liveSeconds : animatingSec;
  const secStr = String(displaySec).padStart(2, '0');
  const secTens = secStr[0];
  const secUnits = secStr[1];

  return (
    <div className="w-full mt-8 sm:mt-14 mb-6 sm:mb-10 select-none">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white border-y border-zinc-200/80 shadow-sm py-6 sm:py-8 px-4 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Top Row: 57 : 11 : 52  with DAYS HOUR MIN */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 font-sans mb-1.5 sm:mb-2.5">
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
              {String(daysDisplay).padStart(2, '0')}
            </span>
            <span className="text-[8px] sm:text-[10px] font-semibold text-zinc-400 tracking-widest uppercase mt-0.5">
              DAYS
            </span>
          </div>

          {/* Separator */}
          <span className="text-lg sm:text-2xl md:text-3xl font-bold text-zinc-400 -mt-2 sm:-mt-3">:</span>

          {/* Hour */}
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
              {String(hoursDisplay).padStart(2, '0')}
            </span>
            <span className="text-[8px] sm:text-[10px] font-semibold text-zinc-400 tracking-widest uppercase mt-0.5">
              HOUR
            </span>
          </div>

          {/* Separator */}
          <span className="text-lg sm:text-2xl md:text-3xl font-bold text-zinc-400 -mt-2 sm:-mt-3">:</span>

          {/* Min */}
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
              {String(minsDisplay).padStart(2, '0')}
            </span>
            <span className="text-[8px] sm:text-[10px] font-semibold text-zinc-400 tracking-widest uppercase mt-0.5">
              MIN
            </span>
          </div>
        </div>

        {/* Middle Row: COMING  [ 1 ] [ 0 ]  SOON */}
        <div className="w-full flex items-center justify-center my-0.5 sm:my-1">
          <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-10 w-full max-w-7xl">
            {/* COMING watermark */}
            <span className="text-2xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black text-zinc-200 tracking-tighter uppercase leading-none flex-1 text-right select-none">
              COMING
            </span>

            {/* Flip Clock Cards Container */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                {/* Tens Flip Card */}
                <div className="relative w-8 h-12 sm:w-14 sm:h-20 md:w-16 md:h-22 bg-zinc-950 text-white rounded-md sm:rounded-lg shadow-lg flex items-center justify-center border border-zinc-800 overflow-hidden">
                  {/* Split line */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-zinc-800 z-10" />
                  {/* Inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
                  {/* Digit */}
                  <span className="text-xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight z-0">
                    {secTens}
                  </span>
                </div>

                {/* Units Flip Card */}
                <div className="relative w-8 h-12 sm:w-14 sm:h-20 md:w-16 md:h-22 bg-zinc-950 text-white rounded-md sm:rounded-lg shadow-lg flex items-center justify-center border border-zinc-800 overflow-hidden">
                  {/* Split line */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-zinc-800 z-10" />
                  {/* Inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
                  {/* Digit */}
                  <span className="text-xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight z-0">
                    {secUnits}
                  </span>
                </div>
              </div>

              {/* S E C O N D S Label below flip cards */}
              <span className="text-[7px] sm:text-[9px] font-semibold text-zinc-400 tracking-[0.3em] uppercase mt-1">
                S E C O N D S
              </span>
            </div>

            {/* SOON watermark */}
            <span className="text-2xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black text-zinc-200 tracking-tighter uppercase leading-none flex-1 text-left select-none">
              SOON
            </span>
          </div>
        </div>

        {/* Single Professional Dark Purple CTA Register Button & Flagship Label */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center gap-2">
          <button
            onClick={onRegisterClick}
            className="bg-[#1a073f] hover:bg-purple-950 text-white text-xs sm:text-base font-bold px-8 py-3.5 sm:px-10 sm:py-4 rounded-full shadow-lg shadow-purple-950/20 hover:shadow-purple-950/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Claim Your Spot Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <span className="text-[10px] sm:text-xs font-extrabold text-[#1a073f] tracking-[0.2em] uppercase mt-1">
            🏆 FLAGSHIP EVENT • NEXATHON 2026
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero({ isSplashDone = true }) {
  const [isNexathonModalOpen, setIsNexathonModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('overview'); // 'overview' | 'register'
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'AI Agents & LLMs',
    teamSize: 'Team of 4',
  });

  // Target date for Nexathon (18 days 14 hours 22 minutes 45 seconds)
  const [timeLeft] = useState({
    days: 18,
    hours: 14,
    minutes: 22,
    seconds: 45,
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  const tracks = [
    {
      title: '🤖 Autonomous AI Agents',
      desc: 'Build multi-agent workflows, autonomous task handlers, and LLM-powered tools.',
    },
    {
      title: '👁️ Computer Vision & AR',
      desc: 'Real-time video analytics, spatial computing, and intelligent surveillance solutions.',
    },
    {
      title: '⚡ Smart Campus Tech',
      desc: 'Automate student workflows, smart resource allocation, and campus IoT networks.',
    },
    {
      title: '🚀 Open Innovation',
      desc: 'Wildcard track for any cutting-edge software, hardware, or AI project.',
    },
  ];

  return (
    <div className="relative w-full pb-14 sm:pb-20 bg-white text-zinc-900 overflow-hidden select-none">
      {/* Header / Navbar Container */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Hero Central Section */}
        <section className="flex flex-col items-center justify-center text-center mt-4 sm:mt-8 mb-16 sm:mb-24 min-h-[65vh] sm:min-h-[72vh] w-full">
          {/* Masterpiece Title Layout */}
          <div className="relative flex flex-col items-center justify-center select-none my-4 sm:my-8 w-full">
            {/* Grid & Atmospheric Multicolor Aura Texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] sm:h-[550px] pointer-events-none z-0 overflow-hidden">
              {/* Technical Grid Pattern */}
              <div
                className="absolute inset-0 opacity-80 sm:opacity-85"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(161, 161, 170, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(161, 161, 170, 0.45) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                  maskImage:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)',
                }}
              />

              {/* Soft Coral Left Accent Glow */}
              <div
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[280px] rounded-full opacity-40 blur-[85px]"
                style={{
                  background: 'radial-gradient(circle, rgba(251, 146, 60, 0.24) 0%, transparent 75%)',
                }}
              />

              {/* Soft Purple Center Primary Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[340px] rounded-full opacity-55 blur-[95px]"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.32) 0%, rgba(192, 132, 252, 0.14) 50%, transparent 75%)',
                }}
              />

              {/* Soft Pink Right Accent Glow */}
              <div
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[280px] rounded-full opacity-40 blur-[85px]"
                style={{
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, transparent 75%)',
                }}
              />
            </div>

            {/* DATANEXUS Title */}
            <motion.h1
              initial={{ y: 50, opacity: 0, scale: 0.94 }}
              animate={isSplashDone ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.94 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-black text-6xl sm:text-[8rem] md:text-[10rem] lg:text-[11.8rem] xl:text-[13rem] tracking-tight uppercase leading-none text-center text-[#1a073f] w-full max-w-full z-10"
              style={{
                filter: 'drop-shadow(0px 8px 24px rgba(168, 85, 247, 0.25))',
              }}
            >
              DATANEXUS
            </motion.h1>

            {/* Overlapping Solid Cursive Script "Club" */}
            <motion.span
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              animate={isSplashDone ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.75, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-normal transform -rotate-4 -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-24 z-20 text-[#fefae0] inline-block select-none"
              style={{
                filter:
                  'drop-shadow(2px 3px 0px #1e0538) drop-shadow(0px 6px 16px rgba(46, 16, 101, 0.4))',
              }}
            >
              Club
            </motion.span>
          </div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isSplashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-xl font-medium text-zinc-700 leading-relaxed max-w-2xl mx-auto mt-5 sm:mt-6 tracking-tight px-2 sm:px-0"
          >
            Explore AI, data, and innovation through a community that learns by building.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSplashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#nexathon"
              className="bg-zinc-950 text-white rounded-full px-5 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-base font-semibold inline-flex items-center gap-2 shadow-xl hover:bg-purple-950 transition-colors duration-200 cursor-pointer"
            >
              Explore Our Work
              <motion.svg
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="12" y2="4" />
                <polyline points="5,4 12,4 12,11" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </section>

      </div>

      {/* Nexathon Countdown Section */}
      <NexathonFlipClockTimer
        timeLeft={timeLeft}
        onRegisterClick={() => {
          setActiveModalTab('register');
          setIsNexathonModalOpen(true);
        }}
      />

      {/* ========================================================================= */}
      {/* NEXATHON INTERACTIVE MODAL (REGISTRATION & TRACK DETAILS) */}
      {/* ========================================================================= */}

      {/* ========================================================================= */}
      {/* NEXATHON INTERACTIVE MODAL (REGISTRATION & TRACK DETAILS) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isNexathonModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNexathonModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0728] border border-purple-500/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-left text-white overflow-hidden select-text"
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setIsNexathonModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-zinc-300 hover:bg-white/20 transition-colors z-20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Modal Header Tabs */}
              <div className="flex items-center gap-3 border-b border-purple-500/20 pb-4 mb-6 pr-10">
                <button
                  onClick={() => setActiveModalTab('overview')}
                  className={`text-sm sm:text-base font-bold pb-1 transition-colors relative ${activeModalTab === 'overview' ? 'text-purple-300' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  Hackathon Overview
                  {activeModalTab === 'overview' && (
                    <motion.div layoutId="modalTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-purple-400" />
                  )}
                </button>
                <button
                  onClick={() => setActiveModalTab('register')}
                  className={`text-sm sm:text-base font-bold pb-1 transition-colors relative ${activeModalTab === 'register' ? 'text-purple-300' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  Register Team
                  {activeModalTab === 'register' && (
                    <motion.div layoutId="modalTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-purple-400" />
                  )}
                </button>
              </div>

              {/* Tab 1: Overview & Problem Tracks */}
              {activeModalTab === 'overview' && (
                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      FLAGSHIP EVENT • OCT 15-16, 2026
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                      Nexathon '26 Tracks & Perks
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                      Choose your track, assemble a team of 1-4 members, and build groundbreaking projects in 24 hours.
                    </p>
                  </div>

                  {/* 4 Tracks Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {tracks.map((track, i) => (
                      <div key={i} className="bg-white/5 border border-purple-500/20 p-4 rounded-2xl">
                        <h4 className="font-bold text-purple-200 text-sm">{track.title}</h4>
                        <p className="text-zinc-400 text-xs mt-1 leading-snug">{track.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-purple-950/40 border border-purple-500/30 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-amber-300 font-bold text-sm">🏆 Cash Prizes & Swag</div>
                      <div className="text-zinc-300 text-xs">1st Place: ₹25,000 | 2nd Place: ₹15,000 | 3rd Place: ₹10,000</div>
                    </div>
                    <button
                      onClick={() => setActiveModalTab('register')}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors flex-shrink-0"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Quick Registration Form */}
              {activeModalTab === 'register' && (
                <div>
                  {registered ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-2xl">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-white">Registration Confirmed!</h3>
                      <p className="text-zinc-300 text-sm max-w-md mx-auto">
                        Welcome to Nexathon '26, <span className="text-purple-300 font-bold">{formData.name || 'Hacker'}</span>! We have reserved your spot for track <span className="text-purple-300 font-bold">{formData.track}</span>. Check your inbox for Discord invite links and guidelines.
                      </p>
                      <button
                        onClick={() => {
                          setRegistered(false);
                          setIsNexathonModalOpen(false);
                        }}
                        className="bg-purple-600 hover:bg-purple-500 text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-colors mt-2"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Nexathon Team Registration</h3>
                        <p className="text-zinc-400 text-xs">Fill out the quick details below to secure your hacker slot.</p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-xs font-semibold text-purple-200 mb-1">Lead Hacker Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Rivera"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-purple-200 mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="alex@university.edu"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-400"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-purple-200 mb-1">Preferred Track</label>
                            <select
                              value={formData.track}
                              onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                              className="w-full bg-[#160b33] border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-400"
                            >
                              <option value="AI Agents & LLMs">🤖 AI Agents & LLMs</option>
                              <option value="Computer Vision & AR">👁️ Computer Vision & AR</option>
                              <option value="Smart Campus Tech">⚡ Smart Campus Tech</option>
                              <option value="Open Innovation">🚀 Open Innovation</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-purple-200 mb-1">Team Format</label>
                            <select
                              value={formData.teamSize}
                              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                              className="w-full bg-[#160b33] border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-400"
                            >
                              <option value="Solo">Solo Hacker</option>
                              <option value="Duo (2)">Team of 2</option>
                              <option value="Trio (3)">Team of 3</option>
                              <option value="Team of 4">Team of 4 (Max)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white rounded-full py-3 text-sm font-bold shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                        >
                          Confirm & Complete Registration
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
