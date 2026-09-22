import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import FeaturedEvent from '../components/events/FeaturedEvent.jsx';
import UpcomingEventsCarousel from '../components/events/UpcomingEventsCarousel';
import PastEvents from '../components/events/PastEvents';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

function Events() {
  return (
    <ThemeProvider>
      <EventsContent />
    </ThemeProvider>
  );
}

function EventsContent() {
  return (
    <main
    className="
      relative
      w-full
      min-h-screen
      transition-colors
      duration-500
      overflow-hidden
      bg-[#faf8fd]
      text-zinc-900
      dark:bg-[#07050e]
      dark:text-white"
      >

      {/* Events page navigation */}
      <div className="relative z-20">
        <Navbar />
      </div>


      {/* Events page introductory header */}
      <section
        className="
          relative
          z-10
          overflow-hidden
          px-6
          sm:px-10
          lg:px-16
          pt-6
          sm:pt-10
          pb-8
          sm:pb-10
          text-center
        "
      >
        <div className="relative z-10">

          {/* Subtitle with smooth rise animation */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-sans
              text-base
              sm:text-lg
              md:text-xl
              font-medium
              tracking-tight
              text-[#8338ec]
              dark:text-purple-400
            "
          >
            Where ideas turn into experiences.
          </motion.p>


          {/* Main title with slight delay */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-2
              font-sans
              font-bold
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[6.5rem]
              tracking-tight
              leading-none
              text-[#1a073f]
              dark:text-white
            "
          >
            Our Events
          </motion.h1>


          {/* Description with final staggered delay */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-sans
              text-sm
              sm:text-base
              leading-relaxed
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Explore our upcoming and past events, workshops, competitions,
            and experiences organised by Data Nexus Club.
          </motion.p>

        </div>
      </section>


      {/* Featured event section */}
      <FeaturedEvent />


      {/* Upcoming events carousel section */}
      <UpcomingEventsCarousel />


      {/* Past events section */}
      <PastEvents />


      {/* Shared site footer */}
      <Footer />

    </main>
  );
}

export default Events;