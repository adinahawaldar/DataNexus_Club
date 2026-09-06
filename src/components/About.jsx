import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-24 bg-white overflow-hidden select-none">
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        {/* 3 Columns Layout with Scroll-Triggered Reveal (Trigger on Scroll Up & Down) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start w-full">
          {/* Column 1: Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-purple-900 uppercase inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/60 shadow-xs">
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
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950 mb-4 tracking-tight">
              Data Nexus Club
            </h3>
            <p className="font-sans text-base leading-relaxed text-zinc-700 font-normal m-0">
              We are the Data Nexus Club, a community of students passionate about data science, AI, and machine learning. We host workshops, talks, and collaborative projects to foster learning and innovation.
            </p>
          </motion.div>

          {/* Column 3: Our Affiliation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950 mb-4 tracking-tight">
              Our Affiliation
            </h3>
            <p className="font-sans text-base leading-relaxed text-zinc-700 font-normal m-0">
              We are proudly a student chapter of the{' '}
              <a
                href="https://s4ds.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-900 font-semibold underline decoration-purple-300 underline-offset-4 hover:decoration-purple-600 transition-colors"
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
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-14 sm:mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://s4ds.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 text-white border-none rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2.5 shadow-lg hover:bg-purple-950 transition-colors duration-200 cursor-pointer"
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
