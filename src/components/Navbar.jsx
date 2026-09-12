import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'Teams', label: 'Teams' },
    { id: 'Events', label: 'Events' },
    { id: 'Achievements', label: 'About' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);

    let targetId = id.toLowerCase();
    if (id === 'Achievements') targetId = 'about';

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 w-full pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-12 select-none"
    >
      <div className="w-full flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home');
          }}
          className={`font-sans text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2 transition-colors ${
            isDark ? 'text-white drop-shadow-sm' : 'text-[#1a073f]'
          }`}
        >
          DataNexus
        </a>

        {/* Right Section: Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Desktop Navigation: Glassmorphic Floating Pill Bar */}
          <nav
            className={`inline-flex items-center gap-1 p-1.5 rounded-full transition-colors duration-300 ${
              isDark
                ? 'bg-[#120d29]/80 backdrop-blur-xl border border-purple-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
                : 'bg-white/70 backdrop-blur-xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-[#1a073f]'
                      : isDark
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 hover:text-[#1a073f]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className={`absolute inset-0 rounded-full z-0 ${
                        isDark
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_2px_12px_rgba(147,51,234,0.4)] border border-purple-400/30'
                          : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-zinc-200/60'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-bold">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Sun / Moon Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center ${
              isDark
                ? 'bg-[#120d29]/80 border border-purple-500/30 text-amber-300 hover:bg-purple-900/40 shadow-md'
                : 'bg-white/80 border border-zinc-200/80 text-purple-950 hover:bg-purple-50 shadow-xs'
            }`}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Buttons (Theme Toggle + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className={`p-2.5 rounded-full transition-all duration-300 active:scale-95 ${
              isDark
                ? 'bg-[#120d29]/80 border border-purple-500/30 text-amber-300'
                : 'bg-white/80 border border-zinc-200/80 text-purple-950'
            }`}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2.5 rounded-full backdrop-blur-xl active:scale-95 transition-all ${
              isDark
                ? 'bg-[#120d29]/80 border border-purple-500/30 text-white'
                : 'bg-white/80 border border-zinc-200/80 text-[#1a073f]'
            }`}
          >
            {isMobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-Down Navigation Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden mt-3 w-full rounded-2xl backdrop-blur-2xl p-3 shadow-2xl flex flex-col gap-1.5 ${
              isDark
                ? 'bg-[#0d091e]/95 border border-purple-500/30'
                : 'bg-white/95 border border-zinc-200/90'
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                        : 'bg-purple-50 text-[#1a073f] border border-purple-200/80'
                      : isDark
                      ? 'text-zinc-400 hover:bg-white/5 hover:text-white'
                      : 'text-zinc-700 hover:bg-zinc-100/70 hover:text-zinc-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className={`ml-auto w-2 h-2 rounded-full inline-block ${
                        isDark ? 'bg-white' : 'bg-purple-600'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
