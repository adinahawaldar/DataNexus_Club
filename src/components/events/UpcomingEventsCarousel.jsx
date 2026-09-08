import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/*
  ============================================================
  UPCOMING EVENTS DATA
  ============================================================

  Keep the nearest upcoming event first.

  Images can have ANY resolution or aspect ratio.
  The carousel automatically scales and crops them
  to completely fill the card.
*/
import prepitImage from '../../assets/bloom.jpg';

const upcomingEvents = [
  {
    id: 1,
    name: 'PREPIT',
    status: 'Upcoming',
    image: prepitImage,
    description:
      'PREPIT is an intensive interview preparation and training program designed to help students excel in technical and HR interviews. The event focuses on Data Science, Machine Learning concepts, coding challenges, and mock interview sessions guided by experienced mentors.',
    registrationLink: '',
  },

  {
    id: 2,
    name: 'Data Science Workshop',
    status: 'Upcoming',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85',
    description:
      'An interactive learning session focused on practical concepts, tools, and techniques used in Data Science.',
    registrationLink: '',
  },

  {
    id: 3,
    name: 'Power BI Competition',
    status: 'Upcoming',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    description:
      'A hands-on data visualization competition where participants transform datasets into meaningful dashboards and insights.',
    registrationLink: '',
  },

  {
    id: 4,
    name: 'Data Analytics Bootcamp',
    status: 'Upcoming',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    description:
      'A practical bootcamp designed to introduce participants to data analytics workflows and real-world problem solving.',
    registrationLink: '',
  },
];

function UpcomingEventsCarousel() {
  /*
    ============================================================
    STATE
    ============================================================
  */

  const [activeIndex, setActiveIndex] = useState(0);

  const [showDetails, setShowDetails] = useState(false);

  /*
    ============================================================
    REFS
    ============================================================
  */

  const carouselRef = useRef(null);

  const cardRefs = useRef([]);

  /*
    Reference to the description section.

    Used to automatically scroll to the complete
    description box when View Details is clicked.
  */
  const descriptionRef = useRef(null);

  /*
    Desktop mouse dragging.
  */

  const isMouseDragging = useRef(false);

  const mouseStartX = useRef(0);

  const mouseStartScrollLeft = useRef(0);

  const hasDragged = useRef(false);

  /*
    ============================================================
    AUTOMATICALLY SCROLL TO DESCRIPTION
    ============================================================
  */

  useEffect(() => {
    if (!showDetails || !descriptionRef.current) {
      return;
    }

    /*
      Wait for the description to start expanding,
      then scroll farther down so the complete
      description box is visible.
    */
    const timeout = setTimeout(() => {
      const descriptionTop =
        descriptionRef.current.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: descriptionTop - 40,
        behavior: 'smooth',
      });
    }, 150);

    return () => {
      clearTimeout(timeout);
    };
  }, [showDetails]);

  /*
    ============================================================
    FIND ACTIVE CARD
    ============================================================
  */

  const updateActiveCard = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const carouselCenter =
      carousel.scrollLeft +
      carousel.clientWidth / 2;

    let closestIndex = 0;

    let closestDistance = Infinity;

    cardRefs.current.forEach(
      (card, index) => {
        if (!card) {
          return;
        }

        const cardCenter =
          card.offsetLeft +
          card.offsetWidth / 2;

        const distance = Math.abs(
          cardCenter - carouselCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    );

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);

      /*
        Close details when changing events.
      */
      setShowDetails(false);
    }
  };

  /*
    ============================================================
    SCROLL LISTENER
    ============================================================
  */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const handleScroll = () => {
      updateActiveCard();
    };

    carousel.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      carousel.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, [activeIndex]);

  /*
    ============================================================
    CENTER SPECIFIC EVENT
    ============================================================
  */

  const scrollToEvent = (index) => {
    const carousel = carouselRef.current;

    const card = cardRefs.current[index];

    if (!carousel || !card) {
      return;
    }

    const targetScrollLeft =
      card.offsetLeft -
      (carousel.clientWidth -
        card.offsetWidth) /
        2;

    carousel.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });

    setShowDetails(false);
  };

  /*
    ============================================================
    ARROWS
    ============================================================
  */

  const goToNext = () => {
    if (
      activeIndex <
      upcomingEvents.length - 1
    ) {
      scrollToEvent(activeIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      scrollToEvent(activeIndex - 1);
    }
  };

  /*
    ============================================================
    DESKTOP MOUSE DRAG
    ============================================================
  */

  const handleMouseDown = (event) => {
    /*
      Don't interfere with buttons.
    */
    if (
      event.target.closest(
        'button, a'
      )
    ) {
      return;
    }

    const carousel =
      carouselRef.current;

    if (!carousel) {
      return;
    }

    isMouseDragging.current = true;

    hasDragged.current = false;

    mouseStartX.current =
      event.clientX;

    mouseStartScrollLeft.current =
      carousel.scrollLeft;

    carousel.style.cursor =
      'grabbing';
  };

  const handleMouseMove = (event) => {
    if (
      !isMouseDragging.current
    ) {
      return;
    }

    const carousel =
      carouselRef.current;

    if (!carousel) {
      return;
    }

    const distance =
      event.clientX -
      mouseStartX.current;

    if (Math.abs(distance) > 5) {
      hasDragged.current = true;
    }

    /*
      Move the native horizontal scroll.
    */
    carousel.scrollLeft =
      mouseStartScrollLeft.current -
      distance;
  };

  const handleMouseUp = () => {
    if (
      !isMouseDragging.current
    ) {
      return;
    }

    isMouseDragging.current = false;

    const carousel =
      carouselRef.current;

    if (carousel) {
      carousel.style.cursor =
        'grab';
    }

    /*
      After dragging, settle on the
      nearest event.
    */

    setTimeout(() => {
      updateActiveCard();

      scrollToEvent(activeIndex);
    }, 50);

    /*
      Prevent accidental button clicks.
    */

    setTimeout(() => {
      hasDragged.current = false;
    }, 100);
  };

  const handleMouseLeave = () => {
    if (isMouseDragging.current) {
      handleMouseUp();
    }
  };

  /*
    ============================================================
    VIEW DETAILS
    ============================================================
  */

  const handleViewDetails = () => {
    if (hasDragged.current) {
      return;
    }

    setShowDetails(
      (previous) => !previous
    );
  };

  /*
    ============================================================
    ACTIVE EVENT
    ============================================================
  */

  const activeEvent =
    upcomingEvents[activeIndex];

  return (
    <section
      id="upcomingevents"
      className="relative overflow-hidden px-0 pt-20 pb-28 sm:pt-28"
    >
      {/* ========================================================
          SECTION HEADING
      ======================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
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
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="mx-auto max-w-4xl px-4 text-center sm:px-8 lg:px-16"
      >
        <p className="font-sans text-lg font-medium tracking-tight text-[#8338ec] sm:text-xl md:text-2xl">
          What&apos;s happening next.
        </p>

        <h2 className="mt-3 font-sans text-4xl font-bold leading-none tracking-tight text-[#1a073f] sm:text-5xl md:text-6xl lg:text-7xl">
          Upcoming Events
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-zinc-600 sm:text-lg">
          Discover what&apos;s coming up at Data Nexus Club.
        </p>
      </motion.div>

      {/* ========================================================
          CAROUSEL
      ======================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: 'easeOut',
        }}
        className="relative mx-auto mt-14 max-w-7xl sm:mt-20"
      >
        {/* ======================================================
            LEFT ARROW
        ====================================================== */}

        <motion.button
          type="button"
          onClick={goToPrevious}
          disabled={activeIndex === 0}
          whileHover={
            activeIndex === 0
              ? {}
              : {
                  scale: 1.08,
                  x: -3,
                }
          }
          whileTap={
            activeIndex === 0
              ? {}
              : {
                  scale: 0.94,
                }
          }
          aria-label="Previous event"
          className={`absolute left-2 top-1/2 z-[80] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#1a073f]/10 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-200 sm:left-6 sm:h-14 sm:w-14 lg:left-10 ${
            activeIndex === 0
              ? 'cursor-not-allowed opacity-30'
              : 'cursor-pointer hover:bg-white'
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#1a073f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* ======================================================
            RIGHT ARROW
        ====================================================== */}

        <motion.button
          type="button"
          onClick={goToNext}
          disabled={
            activeIndex ===
            upcomingEvents.length - 1
          }
          whileHover={
            activeIndex ===
            upcomingEvents.length - 1
              ? {}
              : {
                  scale: 1.08,
                  x: 3,
                }
          }
          whileTap={
            activeIndex ===
            upcomingEvents.length - 1
              ? {}
              : {
                  scale: 0.94,
                }
          }
          aria-label="Next event"
          className={`absolute right-2 top-1/2 z-[80] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#1a073f]/10 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-200 sm:right-6 sm:h-14 sm:w-14 lg:right-10 ${
            activeIndex ===
            upcomingEvents.length - 1
              ? 'cursor-not-allowed opacity-30'
              : 'cursor-pointer hover:bg-white'
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#1a073f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* ======================================================
            NATIVE HORIZONTAL CAROUSEL
        ====================================================== */}

        <div
          ref={carouselRef}
          data-lenis-prevent
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="
            no-scrollbar
            flex
            h-[560px]
            w-full
            items-center
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            snap-x
            snap-mandatory
            cursor-grab
            px-[calc(50%-112.5px)]
            sm:h-[650px]
            sm:px-[calc(50%-132.5px)]
            lg:px-[calc(50%-142.5px)]
          "
          style={{
            touchAction: 'pan-x',

            scrollSnapType:
              'x mandatory',

            scrollSnapStop:
              'always',

            userSelect: 'none',

            WebkitTouchCallout:
              'none',

            overscrollBehaviorX:
              'contain',

            WebkitOverflowScrolling:
              'touch',
          }}
        >
          {upcomingEvents.map(
            (event, index) => {
              const isActive =
                index === activeIndex;

              const distance = Math.abs(
                index - activeIndex
              );

              const cardOpacity =
                distance > 1
                  ? 0
                  : isActive
                    ? 1
                    : 0.55;

              return (
                <div
                  key={event.id}
                  ref={(element) => {
                    cardRefs.current[
                      index
                    ] = element;
                  }}
                  className="
                    relative
                    flex
                    h-[500px]
                    w-[225px]
                    shrink-0
                    snap-center
                    items-center
                    justify-center
                    sm:h-[590px]
                    sm:w-[265px]
                    lg:h-[620px]
                    lg:w-[285px]
                  "
                >
                  {/* ==================================================
                      EVENT CARD
                  ================================================== */}

                  <motion.div
                    animate={{
                      scale: isActive
                        ? 1
                        : 0.78,

                      rotateY:
                        index <
                        activeIndex
                          ? 16
                          : index >
                              activeIndex
                            ? -16
                            : 0,

                      opacity:
                        cardOpacity,

                      zIndex: isActive
                        ? 30
                        : 20,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="
                      relative
                      h-[500px]
                      w-[285px]
                      shrink-0
                      overflow-hidden
                      rounded-[2rem]
                      bg-[#1a073f]
                      shadow-2xl
                      sm:h-[590px]
                      sm:w-[350px]
                      sm:rounded-[2.5rem]
                      lg:h-[620px]
                      lg:w-[380px]
                    "
                    style={{
                      transformStyle:
                        'preserve-3d',

                      perspective: 1000,

                      pointerEvents:
                        isActive
                          ? 'auto'
                          : 'none',
                    }}
                  >
                    {/* ==============================================
                        IMAGE

                        The image automatically scales and crops
                        to completely cover the entire card.
                    ============================================== */}

                    <img
                      src={event.image}
                      alt={event.name}
                      draggable="false"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-0
                        block
                        h-full
                        w-full
                        max-w-none
                        object-cover
                        object-center
                      "
                    />

                    {/* ==============================================
                        IMAGE OVERLAY
                    ============================================== */}

                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#1a073f]/20 via-[#1a073f]/35 to-[#1a073f]/95" />

                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-tr from-black/20 via-transparent to-white/10" />

                    {/* ==============================================
                        CONTENT
                    ============================================== */}

                    <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">

                      {/* STATUS */}

                      <div>
                        <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:text-xs">
                          {event.status}
                        </span>
                      </div>

                      {/* EVENT INFORMATION */}

                      <div className="text-left">

                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-white/70 sm:text-sm">
                          Data Nexus Club
                        </p>

                        <h3 className="font-sans text-3xl font-bold leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
                          {event.name}
                        </h3>

                        {/* VIEW DETAILS */}

                        <motion.button
                          type="button"
                          onMouseDown={(
                            event
                          ) => {
                            event.stopPropagation();
                          }}
                          onClick={(
                            event
                          ) => {
                            event.stopPropagation();

                            handleViewDetails();
                          }}
                          whileHover={{
                            scale: 1.04,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                          className="
                            mt-6
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-[#1a073f]
                            shadow-xl
                            transition-colors
                            duration-200
                            hover:bg-zinc-100
                          "
                        >
                          {showDetails
                            ? 'Hide Details'
                            : 'View Details'}

                          <motion.svg
                            animate={{
                              rotate:
                                showDetails
                                  ? 180
                                  : 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </motion.button>
                      </div>
                    </div>

                    {/* ACTIVE BORDER */}

                    {isActive && (
                      <div className="pointer-events-none absolute inset-0 z-20 rounded-[2rem] border border-white/25 sm:rounded-[2.5rem]" />
                    )}
                  </motion.div>
                </div>
              );
            }
          )}
        </div>
      </motion.div>

      {/* ========================================================
          DOTS
      ======================================================== */}

      <div className="relative z-40 mt-3 flex items-center justify-center gap-2">
        {upcomingEvents.map(
          (event, index) => {
            const isActive =
              index === activeIndex;

            return (
              <button
                key={event.id}
                type="button"
                onClick={() =>
                  scrollToEvent(index)
                }
                aria-label={`Go to ${event.name}`}
                className="flex h-6 cursor-pointer items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: isActive
                      ? 28
                      : 7,

                    opacity: isActive
                      ? 1
                      : 0.35,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="block h-1.5 rounded-full bg-[#1a073f]"
                />
              </button>
            );
          }
        )}
      </div>

      {/* ========================================================
          DESCRIPTION
      ======================================================== */}

      <AnimatePresence initial={false}>
        {showDetails && (
          <motion.div
            ref={descriptionRef}
            initial={{
              opacity: 0,
              height: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -15,
            }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
            }}
            className="mx-auto max-w-3xl overflow-hidden px-4 sm:px-8"
          >
            <div className="mt-8 rounded-[2rem] border border-[#1a073f]/10 bg-white/70 px-6 py-7 shadow-sm backdrop-blur-md sm:px-10 sm:py-9">

              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#8338ec] sm:text-sm">
                About this event
              </p>

              <h3 className="mt-2 font-sans text-2xl font-bold tracking-tight text-[#1a073f] sm:text-3xl">
                {activeEvent.name}
              </h3>

              <p className="mt-4 font-sans text-sm leading-7 text-zinc-600 sm:text-base">
                {activeEvent.description}
              </p>

              {/* ENROLL */}

              {activeEvent.registrationLink && (
                <motion.a
                  href={
                    activeEvent.registrationLink
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a073f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-purple-950"
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
                    width="17"
                    height="17"
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default UpcomingEventsCarousel;