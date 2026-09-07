import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      className="relative z-50 w-full pt-4 sm:pt-6 pb-4 sm:pb-8 px-4 sm:px-8 lg:px-12 select-none"
    >
      <div className="w-full flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home');
          }}
          className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-[#1a073f] flex items-center gap-2"
        >
          DataNexus
        </a>

        {/* Desktop Navigation: Glassmorphic Floating Pill Bar */}
        <nav className="hidden md:inline-flex items-center gap-1 p-1.5 rounded-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(131,56,236,0.08)]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                  isActive ? 'text-[#1a073f]' : 'text-zinc-700 hover:text-[#1a073f]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white backdrop-blur-md rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-white/90 z-0"
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

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-zinc-200 text-[#1a073f] shadow-sm hover:bg-white active:scale-95 transition-all"
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

      {/* Mobile Animated Slide-Down Navigation Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-3 w-full rounded-2xl bg-white/95 backdrop-blur-2xl border border-zinc-200/90 p-3 shadow-xl flex flex-col gap-1.5"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-purple-50 text-[#1a073f] border border-purple-200/80 shadow-2xs'
                      : 'text-zinc-700 hover:bg-zinc-100/70 hover:text-zinc-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-purple-600 inline-block" />
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
