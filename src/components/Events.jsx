import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';

// Sub-component for individual Flip Clock Card Box
function FlipClockCard({ value, label }) {
  const formattedVal = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center group flex-shrink-0">
      {/* Flip Clock Card Box */}
      <div className="relative w-14 h-18 sm:w-20 sm:h-24 md:w-24 md:h-26 lg:w-28 lg:h-30 bg-white border border-zinc-200/90 rounded-lg sm:rounded-xl shadow-md flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.03]">
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
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#1a073f] z-10 select-none drop-shadow-xs"
          >
            {formattedVal}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Label Text Underneath */}
      <span className="text-[8px] sm:text-[10px] md:text-xs font-extrabold text-purple-600 tracking-[0.15em] sm:tracking-[0.22em] uppercase mt-1.5 sm:mt-2 font-poppins">
        {label}
      </span>
    </div>
  );
}

// Sub-component for Nexathon Flip Clock Timer Banner integrated inside Events section
function NexathonFlipClockTimer({ onRegisterClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: false });

  const targetD = 18;
  const targetH = 14;
  const targetM = 22;
  const targetS = 45;

  const [daysDisplay, setDaysDisplay] = useState(targetD);
  const [hoursDisplay, setHoursDisplay] = useState(targetH);
  const [minsDisplay, setMinsDisplay] = useState(targetM);
  const [liveSeconds, setLiveSeconds] = useState(targetS);
  const [animatingSec, setAnimatingSec] = useState(targetS);
  const [isIntroDone, setIsIntroDone] = useState(true);

  // Live interval ticker
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
  }, [isInView]);

  const displaySec = isIntroDone ? liveSeconds : animatingSec;

  return (
    <div className="w-full bg-gradient-to-r from-purple-50/70 via-white to-purple-50/70 border border-purple-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-lg relative overflow-hidden select-none mb-12 sm:mb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10"
      >
        {/* Left Side: Flagship Tag + Title + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg lg:max-w-xl">
          <div className="inline-flex items-center gap-2 bg-purple-100/90 border border-purple-200 px-3.5 py-1 rounded-full mb-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-[#1a073f] uppercase font-poppins">
              FLAGSHIP HACKATHON • OCT 15-16, 2026
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a073f] tracking-tight leading-tight font-poppins">
            NEXATHON '26
          </h3>

          <p className="text-[#1a073f]/90 text-xs sm:text-sm font-medium mt-1.5 leading-relaxed font-poppins">
            24 Hours of AI & Data Science. Build real-world solutions, compete for prize pools, and learn directly from industry mentors.
          </p>
        </div>

        {/* Center: 4 Flip Clock Cards */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
          <FlipClockCard value={daysDisplay} label="DAYS" />
          <FlipClockCard value={hoursDisplay} label="HOURS" />
          <FlipClockCard value={minsDisplay} label="MINUTES" />
          <FlipClockCard value={displaySec} label="SECONDS" />
        </div>

        {/* Right Side: Register CTA Button */}
        <div className="flex flex-col items-center md:items-end flex-shrink-0">
          <button
            onClick={onRegisterClick}
            className="bg-[#1a073f] hover:bg-purple-900 text-white font-bold text-xs sm:text-sm lg:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-purple-950/20 hover:shadow-purple-950/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 font-poppins"
          >
            <span>Register Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isNexathonModalOpen, setIsNexathonModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('overview');
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'AI Agents & LLMs',
    teamSize: 'Team of 4',
  });

  const eventsData = [
    {
      id: 1,
      title: 'Weekly Tech & AI Workshops',
      description:
        'Hands-on sessions covering web development, AI/ML, cloud computing and more. Build real projects with mentors guiding you.',
      badge: 'Every Saturday',
      bgImage:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'DataNexus Hackathon 2026',
      description:
        '24 hours of building, collaborating and competing. Form teams, ship projects, win prizes and get swag.',
      badge: '15-16 Aug 2026',
      bgImage:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: '2-Week Intensive Bootcamp',
      description:
        'Intensive 2-week skill building programs. From full-stack to machine learning, go from zero to project-ready.',
      badge: 'Sept 2026',
      bgImage:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    },
  ];

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

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <section id="events" className="relative w-full pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-white text-zinc-900 select-none overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Integrated Nexathon Countdown Flip Clock Banner */}
        <NexathonFlipClockTimer
          onRegisterClick={() => {
            setActiveModalTab('register');
            setIsNexathonModalOpen(true);
          }}
        />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full mb-8 sm:mb-10 px-2 sm:px-1">
          {/* Left Side: Clean Heading & Professional Subtitle */}
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-sans font-bold text-[#1a073f] tracking-tight leading-tight"
            >
              Shape the Data Science Future.{' '}
              <span className="font-script text-purple-600 text-3xl sm:text-4xl lg:text-[3.2rem] font-normal italic inline-block ml-1">
                Build with us:
              </span>
            </motion.h2>
            <p className="text-zinc-600 font-medium text-xs sm:text-sm lg:text-base mt-2 leading-relaxed">
              Explore our upcoming hackathons, hands-on bootcamps, and technical speaker sessions.
            </p>
          </div>

          {/* Right Side: See All Events Button */}
          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-end">
            <button
              onClick={() => {
                const joinElem = document.getElementById('join');
                if (joinElem) joinElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#1a073f] text-white rounded-full px-6 py-3 text-xs sm:text-sm font-semibold shadow-md hover:bg-purple-900 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              See All Events
            </button>
            <div className="w-10 h-10 rounded-full bg-[#1a073f] text-white flex items-center justify-center shadow-md hover:bg-purple-900 transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="12" y2="4" />
                <polyline points="5,4 12,4 12,11" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3 Columns Full Width Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-2xl overflow-hidden h-[320px] sm:h-[360px] lg:h-[400px] w-full p-5 sm:p-6 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer bg-zinc-950"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${event.bgImage})` }}
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />

              {/* Top-Right Floating Circle Arrow Button */}
              <div className="relative z-20 flex justify-end w-full">
                <div className="w-10 h-10 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#1a073f] group-hover:text-white transition-all duration-300">
                  <svg
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
                  </svg>
                </div>
              </div>

              {/* Bottom-Left Title & Subtitle Stack */}
              <div className="relative z-20 mt-auto text-left pr-2">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-snug drop-shadow-md">
                  {event.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium mt-1.5 drop-shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                  {event.badge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEXATHON INTERACTIVE MODAL (REGISTRATION & TRACK DETAILS) */}
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
              {/* Close Button */}
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
                  className={`text-sm sm:text-base font-bold pb-1 transition-colors ${
                    activeModalTab === 'overview'
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Hackathon Overview
                </button>
                <button
                  onClick={() => setActiveModalTab('register')}
                  className={`text-sm sm:text-base font-bold pb-1 transition-colors ${
                    activeModalTab === 'register'
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Register Team
                </button>
              </div>

              {activeModalTab === 'overview' ? (
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    NEXATHON '26 Flagship Hackathon
                  </h3>
                  <p className="text-purple-200/90 text-xs sm:text-sm mb-6 leading-relaxed">
                    24 hours of non-stop AI innovation. Connect with mentors, build solutions, and win from a ₹1.5L pool.
                  </p>

                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400 mb-3">
                    Hackathon Tracks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {tracks.map((t, idx) => (
                      <div key={idx} className="bg-purple-950/40 border border-purple-500/20 rounded-xl p-3.5">
                        <div className="font-bold text-sm text-white">{t.title}</div>
                        <div className="text-xs text-zinc-400 mt-1">{t.desc}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalTab('register')}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-full shadow-lg transition-all"
                  >
                    Proceed to Registration
                  </button>
                </div>
              ) : (
                <div>
                  {registered ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/40">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Registration Submitted!</h3>
                      <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
                        We've received your team registration for <span className="text-purple-300 font-bold">{formData.track}</span>. Check your inbox for confirmation details!
                      </p>
                      <button
                        onClick={() => {
                          setRegistered(false);
                          setIsNexathonModalOpen(false);
                        }}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-full shadow-lg"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-purple-300 mb-1">
                          Team Lead Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Rivera"
                          className="w-full bg-purple-950/40 border border-purple-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-hidden focus:border-purple-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-purple-300 mb-1">
                          College Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@college.edu"
                          className="w-full bg-purple-950/40 border border-purple-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-hidden focus:border-purple-400"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-purple-300 mb-1">
                            Selected Track
                          </label>
                          <select
                            value={formData.track}
                            onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                            className="w-full bg-purple-950/60 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-purple-400"
                          >
                            <option value="Autonomous AI Agents">Autonomous AI Agents</option>
                            <option value="Computer Vision & AR">Computer Vision & AR</option>
                            <option value="Smart Campus Tech">Smart Campus Tech</option>
                            <option value="Open Innovation">Open Innovation</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-purple-300 mb-1">
                            Team Size
                          </label>
                          <select
                            value={formData.teamSize}
                            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                            className="w-full bg-purple-950/60 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-purple-400"
                          >
                            <option value="Solo (1)">Solo (1 Participant)</option>
                            <option value="Team of 2">Team of 2</option>
                            <option value="Team of 3">Team of 3</option>
                            <option value="Team of 4">Team of 4 (Max)</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-full shadow-lg transition-all mt-4"
                      >
                        Submit Nexathon Registration
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard Event Registration Modal Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-zinc-100 text-left select-text"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="inline-block bg-purple-100 text-purple-950 font-semibold text-xs px-3.5 py-1.5 rounded-full mb-3 border border-purple-200">
                {selectedEvent.badge}
              </div>

              <h3 className="text-2xl font-bold text-[#1a073f] mb-2">
                {selectedEvent.title}
              </h3>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 mb-6">
                <h4 className="font-semibold text-purple-950 text-xs uppercase tracking-wider mb-1">
                  Event Highlights
                </h4>
                <ul className="text-xs text-purple-900 space-y-1 list-disc list-inside">
                  <li>Open to all students & tech enthusiasts</li>
                  <li>Certificate of participation & networking opportunities</li>
                  <li>Mentorship from senior AI & Data Science members</li>
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    alert(`Thank you for registering for "${selectedEvent.title}"! A confirmation has been logged.`);
                    setSelectedEvent(null);
                  }}
                  className="w-full bg-[#1a073f] text-white rounded-full py-3.5 text-sm font-semibold shadow-lg hover:bg-purple-950 transition-colors"
                >
                  Confirm Registration
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
