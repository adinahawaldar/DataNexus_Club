import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';

/* =========================================================
   FEATURED EVENT DATA
   ========================================================= */

const featuredEvent = {
  title: 'PREPIT',
  date: '18 APRIL 2026',
  description:
    'PREPIT is an intensive interview preparation and training program designed to help students excel in technical and HR interviews. The event focuses on Data Science, Machine Learning concepts, coding challenges, and mock interview sessions guided by experienced mentors.',
  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85',
  registrationLink: '',
};


/* =========================================================
   ANIMATED NUMBER
   ========================================================= */

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


/* =========================================================
   FEATURED EVENT COMPONENT
   ========================================================= */

function FeaturedEvent() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  /* ---------------------------------------------------------
     EVENT DATE
     --------------------------------------------------------- */

  const eventDate = new Date('2026-09-25T09:00:00');

  /* ---------------------------------------------------------
     COUNTDOWN
     --------------------------------------------------------- */

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        setIsExpired(true);
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      setIsExpired(false);
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------------------------------------------------
     SECONDS FORMAT
     --------------------------------------------------------- */

  const seconds = String(timeLeft.seconds).padStart(2, '0');

  /* ---------------------------------------------------------
     KNOW MORE
     --------------------------------------------------------- */

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
      className="relative px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20"
    >
      {/* =====================================================
          MAIN FEATURED EVENT CONTAINER
          ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[1.75rem]
          sm:rounded-[2.5rem]
          min-h-[590px]
          sm:min-h-[680px]
          flex
          items-center
          justify-center
        "
      >

        {/* ---------------------------------------------------
            BACKGROUND IMAGE
            --------------------------------------------------- */}

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

        {/* ---------------------------------------------------
            DARK OVERLAY
            --------------------------------------------------- */}

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

        {/* ---------------------------------------------------
            CONTENT
            --------------------------------------------------- */}

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

          {/* EVENT LABEL */}

          <p
            className="
              font-sans
              text-[10px]
              sm:text-xs
              font-semibold
              tracking-[0.16em]
              uppercase
              text-white/70
            "
          >
            Featured Event
          </p>


          {/* EVENT TITLE */}

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


          {/* EVENT DATE */}

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


          {/* EVENT DESCRIPTION */}

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


          {/* =================================================
              COUNTDOWN
              ================================================= */}

          <div
            className="
              w-full
              mt-5
              sm:mt-6
              mb-2
              sm:mb-6
              select-none
            "
          >

            {/* DAYS / HOURS / MINUTES */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
                sm:gap-8
                text-white
              "
            >

              {/* DAYS */}

              <div className="text-center">

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    leading-none
                  "
                >
                  <AnimatedNumber value={timeLeft.days} />
                </div>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.15em]
                    uppercase
                    text-white/55
                  "
                >
                  Days
                </p>

              </div>


              <span className="text-xl sm:text-2xl text-white/40">
                :
              </span>


              {/* HOURS */}

              <div className="text-center">

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    leading-none
                  "
                >
                  <AnimatedNumber value={timeLeft.hours} />
                </div>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.15em]
                    uppercase
                    text-white/55
                  "
                >
                  Hours
                </p>

              </div>


              <span className="text-xl sm:text-2xl text-white/40">
                :
              </span>


              {/* MINUTES */}

              <div className="text-center">

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    leading-none
                  "
                >
                  <AnimatedNumber value={timeLeft.minutes} />
                </div>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.15em]
                    uppercase
                    text-white/55
                  "
                >
                  Minutes
                </p>

              </div>

            </div>


            {/* =================================================
                SECONDS
                ================================================= */}

            <div
              className="
                relative
                flex
                items-center
                justify-center
                mt-5
                sm:mt-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  sm:gap-4
                "
              >

                {/* FIRST SECOND DIGIT */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-10
                    sm:h-16
                    sm:w-14
                    rounded-lg
                    sm:rounded-xl
                    bg-white
                    text-[#1a073f]
                    shadow-xl
                  "
                >
                  <span
                    className="
                      text-2xl
                      sm:text-4xl
                      font-bold
                    "
                  >
                    {seconds[0]}
                  </span>
                </div>


                {/* SECOND SECOND DIGIT */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-10
                    sm:h-16
                    sm:w-14
                    rounded-lg
                    sm:rounded-xl
                    bg-white
                    text-[#1a073f]
                    shadow-xl
                  "
                >
                  <span
                    className="
                      text-2xl
                      sm:text-4xl
                      font-bold
                    "
                  >
                    {seconds[1]}
                  </span>
                </div>

              </div>


              {/* COMING */}

              <span
                className="
                  absolute
                  right-[calc(50%+68px)]
                  sm:right-[calc(50%+90px)]
                  md:right-[calc(50%+105px)]
                  flex
                  items-center
                  h-12
                  sm:h-16
                  text-sm
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  tracking-[0.05em]
                  sm:tracking-[0.07em]
                  uppercase
                  text-white/10
                  whitespace-nowrap
                "
              >
                {isExpired ? 'EVENT' : 'COMING'}
              </span>


              {/* SOON */}

              <span
                className="
                  absolute
                  left-[calc(50%+68px)]
                  sm:left-[calc(50%+90px)]
                  md:left-[calc(50%+105px)]
                  flex
                  items-center
                  h-12
                  sm:h-16
                  text-sm
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  tracking-[0.05em]
                  sm:tracking-[0.07em]
                  uppercase
                  text-white/10
                  whitespace-nowrap
                "
              >
                {isExpired ? 'OVER' : 'SOON'}
              </span>

            </div>


            {/* =================================================
                ENROLL BUTTON
                ================================================= */}

            {!isExpired && (
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
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          KNOW MORE
          ===================================================== */}

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

          {/* Continuously animated down chevron */}

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