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
      name: 'WhatsApp',
      href: 'https://whatsapp.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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
        viewport={{ once: true, amount: 0.15 }}
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
