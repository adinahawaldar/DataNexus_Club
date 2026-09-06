import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Teams', href: '#teams' },
    { label: 'Events', href: '#events' },
    { label: 'Achievements', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'S4DS Chapter', href: 'https://s4ds.org/' },
  ];

  const socialHandles = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-white text-zinc-900 select-none overflow-hidden">
      {/* Subtle Atmospheric Backdrop Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-purple-100/50 pointer-events-none" />

      {/* Floating Box Container matching reference screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1440px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-7 sm:p-12 lg:p-14 shadow-[0_30px_80px_rgba(26,7,63,0.14)]"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Section: Logo, Society for Data Science, AIKTC Campus & Social Icons */}
          <div className="flex flex-col items-start space-y-4 max-w-xl">
            {/* Brand Logo */}
            <a href="#" className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#1a073f] flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#1a073f] text-white flex items-center justify-center text-sm font-sans font-bold shadow-sm">
                DN
              </span>
              DataNexus Club
            </a>

            {/* Campus & Society Details */}
            <div className="space-y-1 text-left">
              <p className="text-zinc-900 font-bold text-base sm:text-lg tracking-tight">
                Society for Data Science (S4DS) Student Chapter
              </p>
              <p className="text-zinc-600 font-medium text-xs sm:text-sm">
                Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC)
              </p>
            </div>

            {/* Social Handles Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialHandles.map((handle, idx) => (
                <a
                  key={idx}
                  href={handle.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={handle.name}
                  className="w-10 h-10 rounded-full bg-neutral-100 text-[#1a073f] flex items-center justify-center shadow-sm hover:bg-[#1a073f] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {handle.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section: Navbar Quick Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4 lg:pt-0">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-sm sm:text-base font-semibold text-zinc-700 hover:text-[#1a073f] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Inner Copyright Line */}
        <div className="pt-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-medium">
          <p>© 2026 DataNexus Club • AIKTC. All rights reserved.</p>
          <p>Built with ❤️ by DataNexus Student Developers</p>
        </div>
      </motion.div>
    </footer>
  );
}
