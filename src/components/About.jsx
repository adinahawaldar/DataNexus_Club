import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative w-full py-20 sm:py-24 overflow-hidden select-none transition-colors duration-500 ${
        isDark ? 'bg-[#07050e] text-white' : 'bg-white text-zinc-900'
      }`}
    >
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        {/* 3 Columns Layout with Scroll-Triggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start w-full">
          {/* Column 1: Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <span
              className={`font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-xs ${
                isDark
                  ? 'bg-purple-950/80 border border-purple-500/30 text-purple-300'
                  : 'bg-purple-100/70 border border-purple-200/60 text-purple-900'
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4v5a2 2 0 002 2h6" />
                <polyline points="9 8 12 11 9 14" />
              </svg>
              Built by students, for students
            </span>
          </motion.div>

          {/* Column 2: What We Do / Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={`font-sans text-2xl sm:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              Data Nexus Club
            </h3>
            <p className={`font-sans text-base leading-relaxed font-normal m-0 ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
              We are the Data Nexus Club, a community of students passionate about data science, AI, and machine learning. We host workshops, talks, and collaborative projects to foster learning and innovation.
            </p>
          </motion.div>

          {/* Column 3: Our Affiliation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={`font-sans text-2xl sm:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              Our Affiliation
            </h3>
            <p className={`font-sans text-base leading-relaxed font-normal m-0 ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
              We are proudly a student chapter of the{' '}
              <a
                href="https://s4ds.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-4 transition-colors ${
                  isDark
                    ? 'text-purple-400 hover:text-purple-300 decoration-purple-500/40 hover:decoration-purple-400'
                    : 'text-purple-700 hover:text-purple-900 decoration-purple-300 hover:decoration-purple-600'
                }`}
              >
                Society for Data Science (S4DS)
              </a>
              . Through this partnership, we collaborate on knowledge-sharing, research initiatives, and industry events to foster growth and innovation in the data science community.
            </p>
          </motion.div>
        </div>

        {/* Read More Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-14 sm:mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://s4ds.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2.5 transition-all duration-300 cursor-pointer font-poppins bg-gradient-to-r from-[#5b21b6] via-[#9333ea] to-[#5b21b6] backdrop-blur-xl border border-white/30 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.45)] hover:brightness-115"
          >
            Learn More About S4DS
            <motion.svg
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              width="14"
              height="14"
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
      </div>
    </section>
  );
}
