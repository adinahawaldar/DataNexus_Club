import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, animate, useInView } from 'framer-motion';
import agentic_ai from '../../assets/events/agentic_ai.jpg';

/* Featured event content */
const featuredEvent = {
  title: 'Agentic AI',
  date: '28th September 2026',
  time: '10:00 AM',
  description:
    'The CSE (Data Science) Department along with DataNexus Club is organizing a 5 hours intensive workshop on Agentic AI for students of FE, SE, TE & BE of CSE (Data Science).The workshop will introduce students to Agentic AI, AI agents, agent-based systems, workflows, and real-world applications through conceptual sessions, live demonstrations, interactive activities, and hands-on exercises.',
  image:
    agentic_ai,
  registrationLink: 'https://forms.gle/CDV2pfdxm6jYn4uD7',
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

      <div className="relative w-14 h-18 sm:w-20 sm:h-24 md:w-24 md:h-26 lg:w-28 lg:h-30 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 rounded-lg sm:rounded-xl shadow-md dark:shadow-black/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.03]">

        {/* Top half highlight */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white via-zinc-50/80 to-zinc-100/60 dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 pointer-events-none border-b border-zinc-200/60 dark:border-white/10" />

        {/* Bottom half shadow */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-zinc-100/90 via-zinc-100 to-zinc-200/70 dark:from-zinc-900 dark:via-zinc-950 dark:to-black pointer-events-none" />

        {/* Split line between the two halves */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-zinc-300/90 dark:bg-white/10 z-20 shadow-xs" />

        {/* Left hinge notch */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-3 sm:h-4 bg-zinc-300/90 dark:bg-zinc-700 rounded-r-sm border-r border-y border-zinc-400/40 dark:border-white/10 z-30 shadow-inner" />

        {/* Right hinge notch */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-3 sm:h-4 bg-zinc-300/90 dark:bg-zinc-700 rounded-l-sm border-l border-y border-zinc-400/40 dark:border-white/10 z-30 shadow-inner" />

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
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#1a073f] dark:text-white z-10 select-none drop-shadow-xs"
          >
            {formattedVal}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Unit label */}
      <span className="text-[8px] sm:text-[10px] md:text-xs font-extrabold text-purple-600 dark:text-purple-400 tracking-[0.15em] sm:tracking-[0.22em] uppercase mt-1.5 sm:mt-2 font-poppins">
        {label}
      </span>
    </div>
  );
}


/* Converts the event date and time into a JavaScript Date object */
function getEventDateTime() {
  const [day, monthName, year] = featuredEvent.date
    .replace(/(\d+)(st|nd|rd|th)/, '$1')
    .split(' ');

  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const [timeValue, period] = featuredEvent.time.split(' ');
  let [hours, minutes] = timeValue.split(':').map(Number);

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  }

  if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return new Date(
    Number(year),
    months[monthName],
    Number(day),
    hours,
    minutes,
    0
  );
}


/* Calculates the remaining time until the event */
function getTimeLeft() {
  const eventDate = getEventDateTime();

  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / (24 * 60 * 60)),
    hours: Math.floor(
      (totalSeconds % (24 * 60 * 60)) / (60 * 60)
    ),
    minutes: Math.floor(
      (totalSeconds % (60 * 60)) / 60
    ),
    seconds: totalSeconds % 60,
  };
}


function FeaturedEvent() {
  const initialTime = getTimeLeft();

  const [daysDisplay, setDaysDisplay] = useState(initialTime.days);
  const [hoursDisplay, setHoursDisplay] = useState(initialTime.hours);
  const [minsDisplay, setMinsDisplay] = useState(initialTime.minutes);
  const [liveSeconds, setLiveSeconds] = useState(initialTime.seconds);
  const [animatingSec, setAnimatingSec] = useState(initialTime.seconds);
  const [isIntroDone, setIsIntroDone] = useState(true);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.15,
    once: false,
  });


  /* Keeps the countdown synchronized with the actual event date */
  useEffect(() => {
    const updateCountdown = () => {
      const timeLeft = getTimeLeft();

      setDaysDisplay(timeLeft.days);
      setHoursDisplay(timeLeft.hours);
      setMinsDisplay(timeLeft.minutes);
      setLiveSeconds(timeLeft.seconds);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);


  /* Animates the timer values when the countdown enters the viewport */
  useEffect(() => {
    if (isInView) {
      const currentTime = getTimeLeft();

      setDaysDisplay(0);
      setHoursDisplay(0);
      setMinsDisplay(0);
      setAnimatingSec(0);
      setIsIntroDone(false);

      const dControls = animate(0, currentTime.days, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setDaysDisplay(Math.round(v)),
      });

      const hControls = animate(0, currentTime.hours, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setHoursDisplay(Math.round(v)),
      });

      const mControls = animate(0, currentTime.minutes, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (v) => setMinsDisplay(Math.round(v)),
      });

      const sControls = animate(0, currentTime.seconds, {
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
            {featuredEvent.date} • {featuredEvent.time}
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
            dark:text-white
            hover:text-[#8338ec]
            dark:hover:text-purple-400
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