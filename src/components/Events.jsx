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
      thumbImage:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80',
      btnColor: 'bg-[#fefae0] text-[#1a073f] hover:bg-yellow-200',
      badgeColor: 'bg-[#1a073f] text-white border border-purple-800',
      isPinned: true,
    },
    {
      id: 2,
      title: 'DataNexus Hackathon 2026',
      description:
        '24 hours of building, collaborating and competing. Form teams, ship projects, win prizes and get swag.',
      badge: '15-16 Aug 2026',
      bgImage:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      thumbImage:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80',
      btnColor: 'bg-white text-[#1a073f] hover:bg-purple-50 border border-purple-100',
      badgeColor: 'bg-[#1a073f] text-white border border-purple-800',
      isPinned: false,
    },
    {
      id: 3,
      title: '2-Week Intensive Bootcamp',
      description:
        'Intensive 2-week skill building programs. From full-stack to machine learning, go from zero to project-ready.',
      badge: 'Sept 2026',
      bgImage:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      thumbImage:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=80',
      btnColor: 'bg-purple-700 text-white hover:bg-purple-800',
      badgeColor: 'bg-[#1a073f] text-white border border-purple-800',
      isPinned: false,
    },
    {
      id: 4,
      title: 'Speaker Sessions & Industry Tech Talks',
      description:
        'Industry leaders and alumni share insights on emerging technologies, career paths and building impactful products.',
      badge: 'Monthly',
      bgImage:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      thumbImage:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=300&q=80',
      btnColor: 'bg-[#1a073f] text-white hover:bg-purple-950',
      badgeColor: 'bg-purple-800 text-white border border-purple-700',
      isPinned: false,
    },
  ];

  return (
    <section id="events" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white text-zinc-900 select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-end text-right w-full mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1a073f] tracking-tight leading-tight"
          >
            Imagine a world where{' '}
            <span className="font-script text-purple-600 text-3xl sm:text-5xl lg:text-6xl font-normal italic inline-block ml-1">
              you were here:
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-700 font-medium text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 max-w-xl leading-relaxed"
          >
            Every event below is free, open to any student, and happening right now. Yes, you can go.
          </motion.p>
        </div>

        {/* 2x2 Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] p-6 sm:p-8 flex flex-col justify-between border border-zinc-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${event.bgImage})` }}
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35 group-hover:from-black/90 transition-colors duration-500" />

              {/* Top Row: Pin Badge if Pinned */}
              <div className="relative z-20 flex justify-between items-start w-full">
                {event.isPinned ? (
                  <div className="bg-[#1a073f] text-white border border-purple-700 rounded-xl p-2.5 shadow-lg flex items-center justify-center -mt-2 -ml-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                    </svg>
                  </div>
                ) : (
                  <div />
                )}

                {/* Center Square Thumbnail */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-white/90 shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={event.thumbImage}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-8" />
              </div>

              {/* Middle Description */}
              <div className="relative z-20 my-auto text-center px-2 sm:px-4 py-4">
                <p className="text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md max-w-md mx-auto">
                  {event.description}
                </p>
              </div>

              {/* Bottom Row: Register Now & Date Badge */}
              <div className="relative z-20 flex items-center justify-between w-full pt-4">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className={`rounded-full px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold shadow-xl transition-all duration-200 active:scale-95 hover:scale-105 inline-flex items-center gap-2 cursor-pointer ${event.btnColor}`}
                >
                  Register Now
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
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <polyline points="9 4 13 8 9 12" />
                  </svg>
                </button>

                <span className={`font-semibold text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl shadow-md tracking-tight ${event.badgeColor}`}>
                  {event.badge}
                </span>
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
                  <li>Free registration for all students & enthusiasts</li>
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
