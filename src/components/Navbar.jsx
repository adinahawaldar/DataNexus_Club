import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dncLogo from '../assets/DNC_Logo.png';
import { navigateTo } from '../utils/navigation';

const getActiveFromPath = () => {
  const currentPath = (window.location.pathname + window.location.hash).toLowerCase();

  if (currentPath.includes('teams')) return 'Teams';
  if (currentPath.includes('events')) return 'Events';
  if (currentPath.includes('achievements')) return 'Achievements';
  return 'Home';
};

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(getActiveFromPath);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleLocationUpdate = () => {
      setActiveTab(getActiveFromPath());
    };

    window.addEventListener('popstate', handleLocationUpdate);
    window.addEventListener('hashchange', handleLocationUpdate);

    return () => {
      window.removeEventListener('popstate', handleLocationUpdate);
      window.removeEventListener('hashchange', handleLocationUpdate);
    };
  }, []);

  const navItems = [
    { id: 'Home', label: 'Home', path: '/' },
    { id: 'Teams', label: 'Teams', path: '/teams' },
    { id: 'Events', label: 'Events', path: '/events' },
    { id: 'Achievements', label: 'Achievements', path: '/achievements' },
  ];

  const handleNavClick = (path, id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
    navigateTo(path);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-50 w-full px-4 pt-4 pb-4 select-none sm:px-8 sm:pt-6 sm:pb-6 lg:px-12"
    >
      <div className="flex w-full items-center justify-between">

        {/* ================= LOGO ================= */}
        <button
          onClick={() => handleNavClick('/', 'Home')}
          className="flex items-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="DataNexus Home"
        >
          <img
            src={dncLogo}
            alt="DataNexus Club Logo"
            className="h-16 w-auto object-contain transition-all duration-300 sm:h-20"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(147, 51, 234, 0.25))',
            }}
          />
        </button>

        {/* ================= RIGHT CONTROLS (NAV + MOBILE TOGGLE) ================= */}
        <div className="flex items-center gap-2.5 sm:gap-3">

          {/* DESKTOP NAV */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1.5 shadow-[0_8px_32px_0_rgba(131,56,236,0.08)] backdrop-blur-2xl md:inline-flex"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path, item.id);
                  }}
                  className={`relative flex cursor-pointer items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#1a073f]'
                      : 'text-white hover:text-purple-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 z-0 rounded-full border border-white/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 font-bold">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileOpen}
            className="cursor-pointer rounded-full border border-white/15 bg-white/10 p-2.5 text-white shadow-sm backdrop-blur-xl transition-all duration-200 hover:bg-white/20 md:hidden"
          >
            {isMobileOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-3 flex w-full flex-col gap-1.5 rounded-2xl border border-white/10 bg-[#15111f]/95 p-3 shadow-xl backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path, item.id);
                  }}
                  className={`flex w-full cursor-pointer items-center rounded-xl px-4 py-3 text-left text-sm font-bold transition-all ${
                    isActive
                      ? 'border border-purple-400/40 bg-purple-600/30 text-white'
                      : 'text-zinc-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-purple-400" />
                  )}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}