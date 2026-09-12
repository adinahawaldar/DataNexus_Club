import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ variant }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark: isDarkContext, toggleTheme } = useTheme();

  const isDark = variant ? variant === "dark" : isDarkContext;

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'Teams', label: 'Teams' },
    { id: 'Events', label: 'Events' },
    { id: 'Achievements', label: 'Achievements' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);

    const isCurrentPageAchievements =
      window.location.pathname.toLowerCase().includes("achievements") ||
      window.location.hash.toLowerCase().includes("achievements");

    // Achievements page navigation
    if (id === "Achievements") {
      if (isCurrentPageAchievements) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.hash = "#/achievements";
      }
      return;
    }

    // Home navigation
    if (id === "Home") {
      if (isCurrentPageAchievements) {
        window.location.hash = "#/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Teams / Events sections navigation
    const targetId = id.toLowerCase();
    if (isCurrentPageAchievements) {
      window.location.hash = `#/${targetId}`;
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.hash = `#/${targetId}`;
    }
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
          onClick={() => handleNavClick("Home")}
          className={`font-sans text-2xl font-black tracking-tight transition-colors duration-200 sm:text-3xl ${
            isDark
              ? "text-white"
              : "text-white drop-shadow-md"
          }`}
        >
          DataNexus
        </button>


        {/* ================= DESKTOP NAV ================= */}
        <nav
          className={`hidden items-center gap-1 rounded-full border p-1.5 shadow-[0_8px_32px_0_rgba(131,56,236,0.08)] backdrop-blur-2xl md:inline-flex ${
            isDark
              ? "border-white/15 bg-white/10"
              : "border-white/60 bg-white/40"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex cursor-pointer items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#1a073f]"
                    : isDark
                      ? "text-white hover:text-purple-200"
                      : "text-zinc-700 hover:text-[#1a073f]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 z-0 rounded-full border border-white/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 font-bold">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileOpen}
          className={`rounded-full border p-2.5 shadow-sm backdrop-blur-xl transition-all duration-200 md:hidden ${
            isDark
              ? "border-white/15 bg-white/10 text-white hover:bg-white/20"
              : "border-zinc-200 bg-white/70 text-[#1a073f] hover:bg-white"
          }`}
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
            className={`mt-3 flex w-full flex-col gap-1.5 rounded-2xl border p-3 shadow-xl backdrop-blur-2xl md:hidden ${
              isDark
                ? "border-white/10 bg-[#15111f]/95"
                : "border-zinc-200/90 bg-white/95"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-bold transition-all ${
                    isActive
                      ? "border border-purple-200/80 bg-purple-50 text-[#1a073f]"
                      : isDark
                        ? "text-zinc-200 hover:bg-white/10 hover:text-white"
                        : "text-zinc-700 hover:bg-zinc-100/70 hover:text-zinc-950"
                  }`}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-purple-600" />
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