import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    {
      id: 'Home',
      label: 'Home',
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: 'Teams',
      label: 'Teams',
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'Events',
      label: 'Events',
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'Achievements',
      label: 'Achievements',
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      ),
    },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    const targetId = id.toLowerCase();
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
      className="w-full flex items-center justify-between pt-6 pb-8 pl-4 sm:pl-8 lg:pl-12 pr-2 sm:pr-4 lg:pr-6 select-none"
    >
      {/* Brand Logo */}
      <a href="#" className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 flex items-center gap-2">
        DataNexus
      </a>

      {/* Glassmorphic Floating Pill Nav Bar with Framer Motion Animated Slider */}
      <nav className="ml-auto inline-flex items-center gap-1 p-1.5 rounded-full bg-white/20 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(131,56,236,0.08)]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                isActive ? 'text-zinc-950' : 'text-zinc-700/80 hover:text-zinc-950'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-white/90 z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-transform duration-200 ${isActive ? 'scale-110 text-zinc-950' : 'text-zinc-600/80'}`}>
                {item.icon}
              </span>
              <span className={`relative z-10 ${isActive ? 'inline' : 'hidden sm:inline'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
