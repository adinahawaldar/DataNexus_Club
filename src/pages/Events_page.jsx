import React from 'react';
import { motion } from 'framer-motion';

import EventsNavbar from '../components/events/EventsNavbar';
import FeaturedEvent from '../components/events/FeaturedEvent.jsx';
import UpcomingEventsCarousel from '../components/events/UpcomingEventsCarousel';
import PastEvents from '../components/events/PastEvents';
import Footer from '../components/Footer';

function Events() {
  return (
    <main className="relative min-h-screen bg-[#faf9ff]">

      {/* Header background: grid pattern, atmospheric glows, and fade into page background */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          right-0
          h-[620px]
          sm:h-[680px]
          overflow-hidden
          z-0
        "
      >
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-full
            max-w-5xl
            h-[400px]
            sm:h-[500px]
            overflow-hidden
          "
        >
          {/* Technical grid used as the visual background texture */}
          <div
            className="
              absolute
              inset-0
              opacity-60
              sm:opacity-85
            "
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(161, 161, 170, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(161, 161, 170, 0.4) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.35) 40%, transparent 70%)',
              WebkitMaskImage:
                'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.35) 40%, transparent 70%)',
            }}
          />

          {/* Left-side warm accent glow */}
          <div
            className="
              absolute
              top-1/2
              left-1/4
              -translate-x-1/2
              -translate-y-1/2
              w-[220px]
              sm:w-[420px]
              h-[180px]
              sm:h-[280px]
              rounded-full
              opacity-35
              sm:opacity-45
              blur-[50px]
              sm:blur-[80px]
            "
            style={{
              background:
                'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, transparent 75%)',
            }}
          />

          {/* Main purple glow behind the events header */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[420px]
              sm:w-[700px]
              h-[280px]
              sm:h-[400px]
              rounded-full
              opacity-80
              sm:opacity-90
              blur-[55px]
              sm:blur-[80px]
            "
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.65) 0%, rgba(192, 132, 252, 0.32) 45%, rgba(216, 180, 254, 0.12) 65%, transparent 80%)',
            }}
          />

          {/* Right-side pink accent glow */}
          <div
            className="
              absolute
              top-1/2
              right-1/4
              translate-x-1/2
              -translate-y-1/2
              w-[220px]
              sm:w-[420px]
              h-[180px]
              sm:h-[280px]
              rounded-full
              opacity-35
              sm:opacity-45
              blur-[50px]
              sm:blur-[80px]
            "
            style={{
              background:
                'radial-gradient(circle, rgba(236, 72, 153, 0.20) 0%, transparent 75%)',
            }}
          />
        </div>

        {/* Fades the header background smoothly into the main page background */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-[#faf9ff]
          "
        />
      </div>


      {/* Events page navigation */}
      <div className="relative z-20">
        <EventsNavbar />
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