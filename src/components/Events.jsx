import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    {
      id: 1,
      title: 'Weekly Tech & AI Workshops',
      description:
        'Hands-on sessions covering web development, AI/ML, cloud computing and more. Build real projects with mentors guiding you.',
      badge: 'Every Saturday',
      bgImage:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'DataNexus Hackathon 2026',
      description:
        '24 hours of building, collaborating and competing. Form teams, ship projects, win prizes and get swag.',
      badge: '15-16 Aug 2026',
      bgImage:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: '2-Week Intensive Bootcamp',
      description:
        'Intensive 2-week skill building programs. From full-stack to machine learning, go from zero to project-ready.',
      badge: 'Sept 2026',
      bgImage:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="events" className="relative w-full pt-4 sm:pt-8 pb-14 sm:pb-20 px-2 sm:px-3 lg:px-4 bg-white text-zinc-900 select-none overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full mb-8 sm:mb-10 px-2 sm:px-1">
          {/* Left Side: Clean Heading & Professional Subtitle */}
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-sans font-bold text-[#1a073f] tracking-tight leading-tight"
            >
              Shape the Data Science Future.{' '}
              <span className="font-script text-purple-600 text-3xl sm:text-4xl lg:text-[3.2rem] font-normal italic inline-block ml-1">
                Build with us:
              </span>
            </motion.h2>
            <p className="text-zinc-600 font-medium text-xs sm:text-sm lg:text-base mt-2 leading-relaxed">
              Explore our upcoming hackathons, hands-on bootcamps, and technical speaker sessions.
            </p>
          </div>

          {/* Right Side: See All Events Pill & Circular Arrow Button in Constant Brand Purple */}
          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-end">
            <button
              onClick={() => {
                const joinElem = document.getElementById('join');
                if (joinElem) joinElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#1a073f] text-white rounded-full px-6 py-3 text-xs sm:text-sm font-semibold shadow-md hover:bg-[#1a073f] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              See All Events
            </button>
            <div className="w-10 h-10 rounded-full bg-[#1a073f] text-white flex items-center justify-center shadow-md hover:bg-[#1a073f] transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="12" y2="4" />
                <polyline points="5,4 12,4 12,11" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3 Columns Full Width Cards Grid - Matching Hero Section Card Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 w-full">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-xl overflow-hidden h-[300px] sm:h-[360px] lg:h-[400px] w-full p-5 sm:p-6 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer bg-zinc-950"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${event.bgImage})` }}
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />

              {/* Top-Right Floating Circle Arrow Button */}
              <div className="relative z-20 flex justify-end w-full">
                <div className="w-10 h-10 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#1a073f] group-hover:text-white transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="12" y2="4" />
                    <polyline points="5,4 12,4 12,11" />
                  </svg>
                </div>
              </div>

              {/* Bottom-Left Title & Subtitle Stack */}
              <div className="relative z-20 mt-auto text-left pr-2">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-snug drop-shadow-md">
                  {event.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium mt-1.5 drop-shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                  {event.badge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration Modal Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-zinc-100 text-left select-text"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="inline-block bg-purple-100 text-purple-950 font-semibold text-xs px-3.5 py-1.5 rounded-full mb-3 border border-purple-200">
                {selectedEvent.badge}
              </div>

              <h3 className="text-2xl font-bold text-[#1a073f] mb-2">
                {selectedEvent.title}
              </h3>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 mb-6">
                <h4 className="font-semibold text-purple-950 text-xs uppercase tracking-wider mb-1">
                  Event Highlights
                </h4>
                <ul className="text-xs text-purple-900 space-y-1 list-disc list-inside">
                  <li>Open to all students & tech enthusiasts</li>
                  <li>Certificate of participation & networking opportunities</li>
                  <li>Mentorship from senior AI & Data Science members</li>
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    alert(`Thank you for registering for "${selectedEvent.title}"! A confirmation has been logged.`);
                    setSelectedEvent(null);
                  }}
                  className="w-full bg-[#1a073f] text-white rounded-full py-3.5 text-sm font-semibold shadow-lg hover:bg-purple-950 transition-colors"
                >
                  Confirm Registration
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
