import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import madihaImg from '../assets/team/madiha.png';
import ridaImg from '../assets/team/rida.png';

export default function TeamPreview() {
  const { isDark } = useTheme();

  // Row 1: Faculty Leadership (2 Cards: HOD & Faculty Coordinator)
  const row1Leaders = [
    {
      id: 'hod',
      name: 'Dr. Rajesh Sharma',
      role: 'Head of Department',
      shortRole: 'HOD',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      rotate: '-rotate-3 sm:-rotate-4',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'faculty',
      name: 'Prof. Ananya Roy',
      role: 'Faculty Coordinator',
      shortRole: 'Faculty Coordinator',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-3 sm:rotate-4',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
  ];

  // Row 2: Student Leadership (5 Cards: President, Vice-President, Secretary, Treasurer, Curator)
  const row2Leaders = [
    {
      id: 'president',
      name: 'Madiha Lasne',
      role: 'President',
      image: madihaImg,
      imageClass: 'w-full h-full object-contain object-bottom',
      rotate: '-rotate-3 sm:-rotate-4',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'vice-president',
      name: 'Aatif Shaikh',
      role: 'Vice President',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-2 sm:rotate-3',
      badgePos: '-bottom-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'secretary',
      name: 'Rida Dhanse',
      role: 'Secretary',
      image: ridaImg,
      imageClass: 'w-full h-full object-contain object-bottom',
      rotate: '-rotate-2 sm:-rotate-3',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'treasurer',
      name: 'Nauman Patel',
      role: 'Treasurer',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-3 sm:rotate-4',
      badgePos: '-bottom-10 left-1/2 -translate-x-1/2',
    },
    {
      id: 'curator',
      name: 'Kashif Qureshi',
      role: 'Curator',
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80',
      rotate: '-rotate-3 sm:-rotate-4',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
    },
  ];

  return (
    <section
      id="teams"
      className={`relative w-full py-20 sm:py-28 select-none overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#07050e] text-white' : 'bg-white text-zinc-900'
        }`}
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto text-center flex flex-col items-center">
        {/* ROW 1: HOD & Faculty Coordinator (2 Cards) */}
        <div className="w-full max-w-2xl px-4 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center justify-center">
            {row1Leaders.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
                className={`relative w-full max-w-[240px] sm:max-w-[270px] mx-auto aspect-[4/5] rounded-[32px] overflow-visible shadow-2xl ${leader.rotate} transition-all duration-300 ${isDark
                    ? 'bg-[#130f26] border-2 border-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_25px_60px_rgba(147,51,234,0.2)]'
                    : 'bg-zinc-900 border-2 border-purple-200/40 hover:border-purple-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
                  }`}
              >
                {/* Photo Container */}
                <div
                  className={`w-full h-full rounded-[28px] overflow-hidden relative flex items-end justify-center ${isDark
                      ? 'bg-gradient-to-b from-[#25194d] via-[#170f38] to-[#0c081e]'
                      : 'bg-gradient-to-b from-[#f3e8ff] via-[#e9d5ff] to-[#c084fc]/40'
                    }`}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={leader.imageClass || "w-full h-full object-cover object-top"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Glassmorphic Pill Tag */}
                <div
                  className={`absolute ${leader.badgePos
                    } px-4 py-2.5 sm:px-5 sm:py-3 rounded-full flex flex-col items-center text-center whitespace-nowrap z-30 pointer-events-none transition-colors ${isDark
                      ? 'bg-[#1a1436]/95 backdrop-blur-xl border border-purple-400/20 text-white shadow-[0_12px_28px_rgba(0,0,0,0.5)]'
                      : 'bg-[#f4f4f5]/95 backdrop-blur-xl border border-purple-200/40 text-zinc-800 shadow-[0_12px_28px_rgba(0,0,0,0.14)]'
                    }`}
                >
                  <span
                    className={`text-[11px] sm:text-xs font-medium tracking-tight leading-none ${isDark ? 'text-purple-300' : 'text-zinc-500'
                      }`}
                  >
                    {leader.role}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-semibold leading-tight mt-1 ${isDark ? 'text-white' : 'text-zinc-800'
                      }`}
                  >
                    {leader.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROW 2: Student Executive Team (5 Cards: President, Vice-President, Secretary, Treasurer, Curator) */}
        <div className="w-full max-w-6xl px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 items-center justify-center">
            {row2Leaders.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
                className={`relative w-full aspect-[4/5] rounded-[32px] overflow-visible shadow-2xl ${leader.rotate} transition-all duration-300 ${isDark
                    ? 'bg-[#130f26] border-2 border-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_25px_60px_rgba(147,51,234,0.2)]'
                    : 'bg-zinc-900 border-2 border-purple-200/40 hover:border-purple-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
                  }`}
              >
                {/* Photo Container */}
                <div
                  className={`w-full h-full rounded-[28px] overflow-hidden relative flex items-end justify-center ${isDark
                      ? 'bg-gradient-to-b from-[#25194d] via-[#170f38] to-[#0c081e]'
                      : 'bg-gradient-to-b from-[#f3e8ff] via-[#e9d5ff] to-[#c084fc]/40'
                    }`}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={leader.imageClass || "w-full h-full object-cover object-top"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Glassmorphic Pill Tag */}
                <div
                  className={`absolute ${leader.badgePos
                    } px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex flex-col items-center text-center whitespace-nowrap z-30 pointer-events-none transition-colors ${isDark
                      ? 'bg-[#1a1436]/95 backdrop-blur-xl border border-purple-400/20 text-white shadow-[0_12px_28px_rgba(0,0,0,0.5)]'
                      : 'bg-[#f4f4f5]/95 backdrop-blur-xl border border-purple-200/40 text-zinc-800 shadow-[0_12px_28px_rgba(0,0,0,0.14)]'
                    }`}
                >
                  <span
                    className={`text-[10px] sm:text-[11px] font-medium tracking-tight leading-none ${isDark ? 'text-purple-300' : 'text-zinc-500'
                      }`}
                  >
                    {leader.role}
                  </span>
                  <span
                    className={`text-xs sm:text-xs font-semibold leading-tight mt-1 ${isDark ? 'text-white' : 'text-zinc-800'
                      }`}
                  >
                    {leader.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* "Meet the Team ↗" Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 group flex items-center justify-center w-full max-w-full px-2 sm:px-4 mx-auto select-none overflow-hidden"
        >
          <h2
            className={`font-sans font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem] tracking-tight leading-none whitespace-nowrap flex items-center justify-center gap-2 sm:gap-4 w-full transition-colors ${isDark ? 'text-white' : 'text-[#1a073f]'
              }`}
          >
            <span>Meet the Team</span>
            <svg
              className={`inline-block w-[0.6em] h-[0.6em] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 flex-shrink-0 ${isDark ? 'text-purple-400' : 'text-[#1a073f]'
                }`}
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
