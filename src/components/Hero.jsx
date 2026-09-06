import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

export default function Hero({ isSplashDone = true }) {
  const [selectedShowcase, setSelectedShowcase] = useState(null);

  const works = [
    {
      id: 'hackathon-2026',
      title: 'DataNexus AI Hackathon 2026',
      subtitle: '50+ Hackers • 12 Projects Shipped',
      date: 'August 2026',
      tag: 'Hackathon Victory',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      description:
        'Our flagship 24-hour hackathon bringing together 50+ passionate club members to build cutting-edge AI and machine learning applications. Teams shipped real-world projects spanning computer vision, automated LLM agents, and smart campus platforms.',
    },
    {
      id: 'tech-summit',
      title: 'Annual Data Science & AI Summit',
      subtitle: 'Member Showcase & Demo Day',
      date: 'July 2026',
      tag: 'Club Showcase',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      description:
        'A grand gathering of our student members, alumni, and industry mentors. Club members presented live interactive demos of their open-source machine learning models and research papers.',
    },
    {
      id: 'workshop-group',
      title: 'Deep Learning & Python Bootcamp',
      subtitle: 'Hands-on Peer Mentorship',
      date: 'June 2026',
      tag: 'Workshop Group',
      image:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      description:
        'An intensive hands-on workshop led by senior club members, training 40+ beginner and intermediate students in PyTorch, Neural Networks, and Transformer architectures.',
    },
  ];

  return (
    <div className="relative w-full pb-10 sm:pb-16 bg-white text-zinc-900 overflow-hidden select-none">
      {/* Header / Navbar Container */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Hero Central Section */}
        <section className="flex flex-col items-center text-center mt-2 mb-14 w-full">
          {/* Masterpiece Title Layout */}
          <div className="relative flex flex-col items-center justify-center select-none my-2 sm:my-4 w-full">
            
            {/* Grid & Atmospheric Multicolor Aura Texture matching reference screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] sm:h-[550px] pointer-events-none z-0 overflow-hidden">
              {/* Technical Grid Pattern Blended Seamlessly on All 4 Sides */}
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

              {/* Soft Peach / Coral Left Accent Glow */}
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

              {/* Soft Magenta / Pink Right Accent Glow */}
              <div
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[280px] rounded-full opacity-40 blur-[85px]"
                style={{
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, transparent 75%)',
                }}
              />
            </div>

            {/* DATANEXUS Title: Deep Midnight Indigo */}
            <motion.h1
              initial={{ y: 50, opacity: 0, scale: 0.94 }}
              animate={isSplashDone ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.94 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-black text-6xl sm:text-[8rem] md:text-[10rem] lg:text-[11.8rem] xl:text-[13rem] tracking-tight uppercase leading-none text-center text-[#1a073f] w-full max-w-full z-10"
              style={{
                filter: 'drop-shadow(0px 8px 24px rgba(168, 85, 247, 0.25))',
              }}
            >
              DATANEXUS
            </motion.h1>

            {/* Overlapping Solid Cream Cursive Script "Club" - Static & Constant */}
            <motion.span
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              animate={isSplashDone ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.75, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#works"
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

      {/* Selected Club Showcase Section - Full Screen Width */}
      <section id="works" className="relative z-10 mt-6 w-full px-2 sm:px-3 lg:px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 sm:gap-3 pb-2 no-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 w-full">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              onClick={() => setSelectedShowcase(work)}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={isSplashDone ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="cursor-pointer group w-[88vw] max-w-[450px] sm:w-[480px] flex-shrink-0 snap-align-start lg:w-full lg:max-w-none lg:flex-shrink"
            >
              {/* Image Container with Hover Overlay & Details */}
              <div className="relative w-full overflow-hidden rounded-xl shadow-sm transition-all duration-500 ease-out group-hover:shadow-2xl bg-zinc-950">
                {/* Group Photo */}
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover block opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-left">
                  <span className="inline-block bg-purple-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-2">
                    {work.tag}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm font-medium mt-1">
                    {work.subtitle}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-rose-300 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Click to view event showcase</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Showcase Group Photo Modal Popup */}
      <AnimatePresence>
        {selectedShowcase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedShowcase(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl border border-zinc-100 text-left select-text"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedShowcase(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20 backdrop-blur-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Modal Full Header Image */}
              <div className="relative w-full h-[260px] sm:h-[340px] overflow-hidden">
                <img
                  src={selectedShowcase.image}
                  alt={selectedShowcase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <span className="bg-purple-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {selectedShowcase.tag} • {selectedShowcase.date}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-1">
                  {selectedShowcase.title}
                </h3>
                <p className="text-purple-900 font-semibold text-sm mb-4">
                  {selectedShowcase.subtitle}
                </p>

                <p className="text-zinc-700 text-base leading-relaxed mb-6">
                  {selectedShowcase.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    Verified Club Event Record
                  </div>
                  <button
                    onClick={() => setSelectedShowcase(null)}
                    className="bg-[#1a073f] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-purple-950 transition-colors"
                  >
                    Close Showcase
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
