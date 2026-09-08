import React from 'react';
import EventsNavbar from '../components/events/EventsNavbar';
import FeaturedEvent from '../components/events/FeaturedEvent.jsx';
import UpcomingEventsCarousel from '../components/events/UpcomingEventsCarousel';
import PastEvents from '../components/events/PastEvents';
import Footer from '../components/Footer';

function Events() {
  return (
    <main className="relative min-h-screen bg-[#faf9ff]">

      {/* --------------------------------
          EVENTS HEADER BACKGROUND
          Grid + Atmospheric Aura
          Extends behind the Navbar
          -------------------------------- */}

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

        {/* Grid & Atmospheric Multicolor Aura Texture */}
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

          {/* Technical Grid Pattern */}
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


          {/* Soft Coral Left Accent Glow */}
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


          {/* Soft Purple Center Primary Glow */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[340px]
              sm:w-[600px]
              h-[230px]
              sm:h-[350px]
              rounded-full
              opacity-55
              sm:opacity-65
              blur-[60px]
              sm:blur-[90px]
            "
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.45) 0%, rgba(192, 132, 252, 0.18) 50%, transparent 75%)',
            }}
          />


          {/* Soft Pink Right Accent Glow */}
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


        {/* Soft Fade Into Page Background */}
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


      {/* --------------------------------
          SECTION 1: EVENTS NAVBAR
          -------------------------------- */}

      <div className="relative z-20">
        <EventsNavbar />
      </div>


      {/* --------------------------------
          SECTION 2: EVENTS HEADER
          -------------------------------- */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          px-6
          sm:px-10
          lg:px-16
          pt-8
          sm:pt-14
          pb-12
          sm:pb-16
          text-center
        "
      >

        {/* Header Content */}
        <div className="relative z-10">

          {/* Subtitle */}
          <p
            className="
              font-sans
              text-lg
              sm:text-xl
              md:text-2xl
              font-medium
              tracking-tight
              text-[#8338ec]
            "
          >
            Where ideas turn into experiences.
          </p>


          {/* Main Title */}
          <h1
            className="
              mt-3
              font-sans
              font-bold
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
              xl:text-[7.5rem]
              tracking-tight
              leading-none
              text-[#1a073f]
            "
          >
            Our Events
          </h1>


          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-sans
              text-base
              sm:text-lg
              leading-relaxed
              text-zinc-600
            "
          >
            Explore our upcoming and past events, workshops, competitions,
            and experiences organised by Data Nexus Club.
          </p>

        </div>

      </section>


      {/* --------------------------------
          SECTION 3: FEATURED EVENT
          -------------------------------- */}

      <FeaturedEvent />


      {/* --------------------------------
          SECTION 4: UPCOMING EVENTS
          -------------------------------- */}

      <UpcomingEventsCarousel />


      {/* --------------------------------
          SECTION 5: PAST EVENTS
          -------------------------------- */}

      <PastEvents />
      {/* --------------------------------
          SECTION 6: FOOTER
          -------------------------------- */}

      <Footer />

    </main>
  );
}

export default Events;