import React from 'react';
import { motion } from 'framer-motion';

export default function TeamPreview() {
  const keyLeaders = [
    {
      id: 'hod',
      name: 'Dr. Rajesh Sharma',
      role: 'Head of Department',
      shortRole: 'HOD',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      rotate: '-rotate-4 sm:-rotate-6',
      yOffset: 'translate-y-2 sm:translate-y-4',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'faculty',
      name: 'Prof. Ananya Roy',
      role: 'Faculty Coordinator',
      shortRole: 'Faculty Coordinator',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-2 sm:rotate-3',
      yOffset: '-translate-y-2 sm:-translate-y-4',
      badgePos: '-top-12 left-1/2 -translate-x-1/2',
    },
    {
      id: 'president',
      name: 'Aarav Mehta',
      role: 'President',
      shortRole: 'President',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      rotate: '-rotate-2 sm:-rotate-3',
      yOffset: 'translate-y-1 sm:translate-y-2',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'vice-president',
      name: 'Ishita Verma',
      role: 'Vice President',
      shortRole: 'Vice President',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-4 sm:rotate-6',
      yOffset: 'translate-y-4 sm:translate-y-6',
      badgePos: '-bottom-12 left-1/2 -translate-x-1/2',
    },
  ];

  return (
    <section id="teams" className="relative w-full py-20 sm:py-28 bg-white text-zinc-900 select-none overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto text-center flex flex-col items-center">

        {/* All 4 Team Leader Cards Spread Side-by-Side (100% Visible & Playfully Rotated) */}
        <div className="relative my-10 sm:my-16 w-full max-w-5xl px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center justify-center">
            {keyLeaders.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
                className={`relative w-full aspect-[4/5] rounded-[32px] overflow-visible shadow-2xl bg-zinc-900 border-4 border-white ${leader.rotate} ${leader.yOffset} transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]`}
              >
                {/* Photo Container */}
                <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating Glassmorphic Pill Tag */}
                <div
                  className={`absolute ${leader.badgePos} bg-[#f4f4f5]/95 backdrop-blur-xl px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.14)] border border-white/90 flex flex-col items-center text-center whitespace-nowrap z-30 pointer-events-none`}
                >
                  <span className="text-[11px] sm:text-xs font-medium text-zinc-500 tracking-tight leading-none">
                    {leader.role}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 leading-tight mt-1">
                    {leader.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* "Meet the Team ↗" Title - Single Line, Dark Purple & Arrow Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-10 group flex items-center justify-center w-full max-w-full px-2 sm:px-4 mx-auto select-none overflow-hidden"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem] tracking-tight leading-none text-[#1a073f] whitespace-nowrap flex items-center justify-center gap-2 sm:gap-4 w-full">
            <span>Meet the Team</span>
            <svg
              className="inline-block w-[0.6em] h-[0.6em] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 text-[#1a073f] flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7,7 17,7 17,17" />
            </svg>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
