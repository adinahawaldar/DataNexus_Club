import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, animate, useInView } from 'framer-motion';

/* Featured event content */
const featuredEvent = {
  title: 'PREPIT',
  date: '18 APRIL 2026',
  description:
    'PREPIT is an intensive interview preparation and training program designed to help students excel in technical and HR interviews. The event focuses on Data Science, Machine Learning concepts, coding challenges, and mock interview sessions guided by experienced mentors.',
  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85',
  registrationLink: '',
};


/* Animates numeric values when they enter the viewport */
function AnimatedNumber({ value }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.1,
    once: false,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setDisplayValue(0);

      const controls = animate(0, value, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      setDisplayValue(value);
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {String(displayValue).padStart(2, '0')}
    </span>
  );
}


/* Individual flip-clock card used for days, hours, minutes, and seconds */
function FlipClockCard({ value, label }) {
  const formattedVal = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center group flex-shrink-0">

      <div className="relative w-14 h-18 sm:w-20 sm:h-24 md:w-24 md:h-26 lg:w-28 lg:h-30 bg-white border border-zinc-200/90 rounded-lg sm:rounded-xl shadow-md flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.03]">

        {/* Top half highlight */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white via-zinc-50/80 to-zinc-100/60 pointer-events-none border-b border-zinc-200/60" />

        {/* Bottom half shadow */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-zinc-100/90 via-zinc-100 to-zinc-200/70 pointer-events-none" />

        {/* Split line between the two halves */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-zinc-300/90 z-20 shadow-xs" />

        {/* Left hinge notch */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-3 sm:h-4 bg-zinc-300/90 rounded-r-sm border-r border-y border-zinc-400/40 z-30 shadow-inner" />

        {/* Right hinge notch */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-3 sm:h-4 bg-zinc-300/90 rounded-l-sm border-l border-y border-zinc-400/40 z-30 shadow-inner" />

        {/* Animated timer value */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formattedVal}
            initial={{ rotateX: -80, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 80, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#1a073f] z-10 select-none drop-shadow-xs"
          >
            {formattedVal}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Unit label */}
      <span className="text-[8px] sm:text-[10px] md:text-xs font-extrabold text-purple-600 tracking-[0.15em] sm:tracking-[0.22em] uppercase mt-1.5 sm:mt-2 font-poppins">
        {label}
      </span>
    </div>
  );
}


function FeaturedEvent() {
  const [daysDisplay, setDaysDisplay] = useState(0);
  const [hoursDisplay, setHoursDisplay] = useState(0);
  const [minsDisplay, setMinsDisplay] = useState(0);
  const [liveSeconds, setLiveSeconds] = useState(0);
  const [animatingSec, setAnimatingSec] = useState(0);
  const [isIntroDone, setIsIntroDone] = useState(true);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.15,
    once: false,
  });

  /* Initial countdown values */
  const targetD = 18;
  const targetH = 14;
  const targetM = 22;
  const targetS = 45;

  /* Keeps the countdown running every second */
  useEffect(() => {
    setDaysDisplay(targetD);
    setHoursDisplay(targetH);
    setMinsDisplay(targetM);
    setLiveSeconds(targetS);
    setAnimatingSec(targetS);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveSeconds((prev) => {
        if (prev <= 0) {
          setMinsDisplay((m) => {
            if (m <= 0) {
              setHoursDisplay((h) => {
                if (h <= 0) {
                  setDaysDisplay((d) => (d <= 0 ? 0 : d - 1));
                  return 23;
                }

                return h - 1;
              });

              return 59;
            }

            return m - 1;
          });

          return 59;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* Animates the timer values when the countdown enters the viewport */
  useEffect(() => {
    if (isInView) {
      setDaysDisplay(0);
      setHoursDisplay(0);
      setMinsDisplay(0);
      setAnimatingSec(0);
      setIsIntroDone(false);

      const dControls = animate(0, targetD, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setDaysDisplay(Math.round(v)),
      });

      const hControls = animate(0, targetH, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setHoursDisplay(Math.round(v)),
      });

      const mControls = animate(0, targetM, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setMinsDisplay(Math.round(v)),
      });

      const sControls = animate(0, liveSeconds, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setAnimatingSec(Math.round(v)),
        onComplete: () => setIsIntroDone(true),
      });

      return () => {
        dControls.stop();
        hControls.stop();
        mControls.stop();
        sControls.stop();
      };
    }
  }, [isInView]);

  const displaySec = isIntroDone ? liveSeconds : animatingSec;

  /* Scrolls to the upcoming events section */
  const handleKnowMore = () => {
    const upcomingSection =
      document.getElementById('upcomingevents');

    if (upcomingSection) {
      upcomingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="featuredevent"
      className="relative px-4 sm:px-8 lg:px-12 pb-8 sm:pb-10"
    >
      {/* Featured event card */}
      <div
        className="
          relative
          mx-auto
          max-w-3xl
          overflow-hidden
          rounded-[1.75rem]
          sm:rounded-[2.5rem]
          min-h-[400px]
          sm:min-h-[500px]
          flex
          items-center
          justify-center
        "
      >

        {/* Event background image */}
        <img
          src={featuredEvent.image}
          alt={featuredEvent.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Image overlays for text readability */}
        <div className="absolute inset-0 bg-[#1a073f]/70" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#1a073f]/35
            via-[#1a073f]/60
            to-[#1a073f]/90
          "
        />

        {/* Event content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-4xl
            px-5
            sm:px-8
            pt-12
            pb-5
            sm:py-12
            text-center
          "
        >

          {/* Featured event label */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />

            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-white/80">
              Featured Event
            </span>
          </div>


          <h2
            className="
              mt-3
              font-sans
              font-bold
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.25rem]
              tracking-tight
              leading-none
              text-white
            "
          >
            {featuredEvent.title}
          </h2>


          <p
            className="
              mt-3
              font-sans
              text-xs
              sm:text-sm
              md:text-base
              font-semibold
              tracking-[0.12em]
              text-white/75
            "
          >
            {featuredEvent.date}
          </p>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-sans
              text-sm
              sm:text-base
              leading-relaxed
              text-white/80
            "
          >
            {featuredEvent.description}
          </p>


          {/* Countdown clock */}
          <div
            ref={ref}
            className="
              w-full
              mt-5
              sm:mt-6
              mb-2
              sm:mb-6
              select-none
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                sm:gap-3
                lg:gap-4
              "
            >

              <FlipClockCard
                value={daysDisplay}
                label="DAYS"
              />

              <FlipClockCard
                value={hoursDisplay}
                label="HOURS"
              />

              <FlipClockCard
                value={minsDisplay}
                label="MINUTES"
              />

              <FlipClockCard
                value={displaySec}
                label="SECONDS"
              />

            </div>

          </div>


          {/* Event registration CTA */}
          <div className="flex justify-center mt-5 sm:mt-6">

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href={featuredEvent.registrationLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-zinc-950
                text-white
                rounded-full
                px-5
                py-2.5
                sm:px-7
                sm:py-3
                text-xs
                sm:text-sm
                font-semibold
                inline-flex
                items-center
                gap-2
                shadow-xl
                hover:bg-purple-950
                transition-colors
                duration-200
                cursor-pointer
              "
            >
              Enroll Now

              <motion.svg
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

            </motion.a>

          </div>

        </div>

      </div>


      {/* Scroll prompt for upcoming events */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="flex justify-center mt-5"
      >

        <button
          onClick={handleKnowMore}
          className="
            inline-flex
            items-center
            gap-1.5
            text-sm
            sm:text-base
            font-semibold
            text-[#1a073f]
            hover:text-[#8338ec]
            transition-colors
            duration-200
            cursor-pointer
          "
        >

          <span>
            Know More
          </span>

          {/* Animated down arrow */}
          <motion.svg
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

        </button>

      </motion.div>

    </section>
  );
}

export default FeaturedEvent;