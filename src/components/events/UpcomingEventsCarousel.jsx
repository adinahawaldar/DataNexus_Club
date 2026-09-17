import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/*
  ============================================================
  UPCOMING EVENTS DATA
  ============================================================

  This array stores all upcoming events.

  Each event contains:
  - id: Unique identifier for the event.
  - name: Event name.
  - status: Status shown on the event card.
  - image: Image displayed as the card background.
  - description: Complete event description.
  - registrationLink: Link used for event registration.

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

/*
  ============================================================
  UPCOMING EVENTS CAROUSEL COMPONENT
  ============================================================

  This component handles:
  - Horizontal event carousel.
  - Active event tracking.
  - Previous / Next navigation.
  - Dot navigation.
  - Mouse dragging on desktop.
  - View Details expansion.
  - Automatic scrolling to the description.
  - Framer Motion animations.
*/
function UpcomingEventsCarousel() {
  /*
    ============================================================
    STATE
    ============================================================
  */

  /*
    Stores the index of the event currently positioned
    in the center of the carousel.

    Example:
    activeIndex = 0 → first event is active.
    activeIndex = 1 → second event is active.
  */
  const [activeIndex, setActiveIndex] = useState(0);

  /*
    Controls whether the complete description of the
    currently active event is visible.
  */
  const [showDetails, setShowDetails] = useState(false);

  /*
    ============================================================
    REFS
    ============================================================
  */

  /*
    Reference to the main horizontal carousel element.

    useRef allows us to directly access the DOM element
    without causing a React re-render.
  */
  const carouselRef = useRef(null);

  /*
    Stores references to every individual event card.

    These references are used to calculate which card
    is closest to the center of the carousel.
  */
  const cardRefs = useRef([]);

  /*
    Reference to the description section.

    Used to automatically scroll to the complete
    description box when View Details is clicked.
  */
  const descriptionRef = useRef(null);

  /*
    ============================================================
    DESKTOP MOUSE DRAG REFS
    ============================================================

    These values are stored in refs instead of state because
    they change frequently while dragging and do not need
    to trigger React re-renders.
  */

  /*
    True while the user is currently dragging
    the carousel with the mouse.
  */
  const isMouseDragging = useRef(false);

  /*
    Stores the horizontal mouse position when
    the drag begins.
  */
  const mouseStartX = useRef(0);

  /*
    Stores the carousel's scroll position when
    the drag begins.
  */
  const mouseStartScrollLeft = useRef(0);

  /*
    Used to determine whether the mouse movement
    was an actual drag rather than a normal click.
  */
  const hasDragged = useRef(false);

  /*
    ============================================================
    AUTOMATICALLY SCROLL TO DESCRIPTION
    ============================================================
  */

  /*
    Runs whenever showDetails changes.

    When the description opens, the page automatically
    scrolls down so that the complete description box
    becomes visible.
  */
  useEffect(() => {
    if (!showDetails || !descriptionRef.current) {
      return;
    }

    /*
      Wait for the description to start expanding,
      then calculate its position and scroll to it.
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

    /*
      Clear the timeout if the component changes
      or the effect runs again before the timeout fires.
    */
    return () => {
      clearTimeout(timeout);
    };
  }, [showDetails]);

  /*
    ============================================================
    FIND ACTIVE CARD
    ============================================================
  */

  /*
    Determines which event card is closest to the
    horizontal center of the carousel.

    This is important because the active card changes
    when the user:
    - Scrolls manually.
    - Drags the carousel.
    - Uses the navigation arrows.
  */
  const updateActiveCard = () => {
    const carousel = carouselRef.current;

    /*
      Stop if the carousel DOM element is not available.
    */
    if (!carousel) {
      return;
    }

    /*
      Calculate the horizontal center point of the
      visible carousel area.
    */
    const carouselCenter =
      carousel.scrollLeft +
      carousel.clientWidth / 2;

    /*
      Start by assuming the first card is closest.
    */
    let closestIndex = 0;

    /*
      Infinity allows the first real distance calculated
      to automatically become the closest distance.
    */
    let closestDistance = Infinity;

    /*
      Check the center position of every event card.
    */
    cardRefs.current.forEach(
      (card, index) => {
        if (!card) {
          return;
        }

        /*
          Calculate the horizontal center of this card.
        */
        const cardCenter =
          card.offsetLeft +
          card.offsetWidth / 2;

        /*
          Find the distance between the card center
          and the carousel center.
        */
        const distance = Math.abs(
          cardCenter - carouselCenter
        );

        /*
          If this card is closer to the carousel center
          than the previous closest card, make it active.
        */
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    );

    /*
      Only update React state when the active card
      actually changes.
    */
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);

      /*
        Close details when changing events so that
        the previous event's description does not
        remain open for the new event.
      */
      setShowDetails(false);
    }
  };

  /*
    ============================================================
    SCROLL LISTENER
    ============================================================
  */

  /*
    Attach a native scroll event listener to the carousel.

    Whenever the carousel moves, updateActiveCard()
    checks which card is currently closest to the center.
  */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const handleScroll = () => {
      updateActiveCard();
    };

    /*
      passive: true tells the browser that this listener
      will not prevent scrolling, allowing smoother scrolling.
    */
    carousel.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    /*
      Remove the event listener when the effect is cleaned up.
    */
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

  /*
    Scrolls a specific event card into the center
    of the carousel.
  */
  const scrollToEvent = (index) => {
    const carousel = carouselRef.current;

    const card = cardRefs.current[index];

    /*
      Stop if either the carousel or requested card
      does not exist.
    */
    if (!carousel || !card) {
      return;
    }

    /*
      Calculate the scroll position required to place
      the selected card exactly in the center.
    */
    const targetScrollLeft =
      card.offsetLeft -
      (carousel.clientWidth -
        card.offsetWidth) /
        2;

    /*
      Smoothly move the carousel to the calculated position.
    */
    carousel.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });

    /*
      Hide the description whenever a different event
      is selected.
    */
    setShowDetails(false);
  };

  /*
    ============================================================
    ARROWS
    ============================================================
  */

  /*
    Move to the next event.

    The condition prevents moving beyond the last event.
  */
  const goToNext = () => {
    if (
      activeIndex <
      upcomingEvents.length - 1
    ) {
      scrollToEvent(activeIndex + 1);
    }
  };

  /*
    Move to the previous event.

    The condition prevents moving before the first event.
  */
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

  /*
    Runs when the user presses the mouse button
    inside the carousel.
  */
  const handleMouseDown = (event) => {
    /*
      Don't start dragging when the user clicks
      a button or link inside the carousel.
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

    /*
      Mark the beginning of a mouse drag.
    */
    isMouseDragging.current = true;

    /*
      At the beginning, assume this is not yet
      an actual drag.
    */
    hasDragged.current = false;

    /*
      Remember where the mouse started.
    */
    mouseStartX.current =
      event.clientX;

    /*
      Remember the carousel's starting scroll position.
    */
    mouseStartScrollLeft.current =
      carousel.scrollLeft;

    /*
      Change the cursor to show that the carousel
      is currently being dragged.
    */
    carousel.style.cursor =
      'grabbing';
  };

  /*
    Runs while the mouse is being moved during a drag.
  */
  const handleMouseMove = (event) => {
    /*
      Ignore mouse movement when a drag has not started.
    */
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

    /*
      Calculate how far the mouse moved horizontally
      from its starting position.
    */
    const distance =
      event.clientX -
      mouseStartX.current;

    /*
      A movement greater than 5 pixels is treated
      as an actual drag.
    */
    if (Math.abs(distance) > 5) {
      hasDragged.current = true;
    }

    /*
      Move the native horizontal scroll position
      opposite to the mouse movement.

      Moving the mouse left → carousel moves left.
      Moving the mouse right → carousel moves right.
    */
    carousel.scrollLeft =
      mouseStartScrollLeft.current -
      distance;
  };

  /*
    Runs when the mouse button is released.
  */
  const handleMouseUp = () => {
    /*
      Do nothing if a drag was never started.
    */
    if (
      !isMouseDragging.current
    ) {
      return;
    }

    /*
      Mark the drag as finished.
    */
    isMouseDragging.current = false;

    const carousel =
      carouselRef.current;

    /*
      Restore the normal grab cursor.
    */
    if (carousel) {
      carousel.style.cursor =
        'grab';
    }

    /*
      After dragging, find the nearest event and
      smoothly settle the carousel on that event.
    */
    setTimeout(() => {
      updateActiveCard();

      scrollToEvent(activeIndex);
    }, 50);

    /*
      Reset the drag flag shortly afterward so that
      accidental clicks are not triggered by the drag.
    */
    setTimeout(() => {
      hasDragged.current = false;
    }, 100);
  };

  /*
    If the mouse leaves the carousel while dragging,
    finish the drag automatically.
  */
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

  /*
    Toggle the description of the currently active event.

    If the carousel was just dragged, ignore the click
    so that releasing the mouse does not accidentally
    open the details.
  */
  const handleViewDetails = () => {
    if (hasDragged.current) {
      return;
    }

    /*
      Toggle:
      false → true  = show details
      true  → false = hide details
    */
    setShowDetails(
      (previous) => !previous
    );
  };

  /*
    ============================================================
    ACTIVE EVENT
    ============================================================
  */

  /*
    Get the complete data object for the currently
    active event using its array index.
  */
  const activeEvent =
    upcomingEvents[activeIndex];

  return (
    <section
      id="upcomingevents"
      className="relative overflow-hidden px-0 pt-10 pb-14 sm:pt-14"
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
            ======================================================

            This is a normal HTML div with horizontal scrolling.

            CSS scroll snapping is used so cards naturally
            settle into position after scrolling.

            The carousel also supports:
            - Mouse dragging on desktop.
            - Touch swiping on mobile.
            - Arrow navigation.
            - Dot navigation.
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
            h-[440px]
            w-full
            items-center
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            snap-x
            snap-mandatory
            cursor-grab
            px-[calc(50%-105px)]
            sm:h-[510px]
            sm:px-[calc(50%-120px)]
            lg:px-[calc(50%-120px)]
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
              /*
                Check whether this card is currently
                positioned in the center.
              */
              const isActive =
                index === activeIndex;

              /*
                Calculate how many positions away this
                card is from the active card.
              */
              const distance = Math.abs(
                index - activeIndex
              );

              /*
                Cards farther than one position away
                are hidden.

                The active card is fully visible,
                while its immediate neighbors are
                partially visible.
              */
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
                    /*
                      Store the DOM reference for this
                      particular card at the same index
                      as the event in the array.
                    */
                    cardRefs.current[
                      index
                    ] = element;
                  }}
                  className="
                    relative
                    flex
                    h-[390px]
                    w-[185px]
                    shrink-0
                    snap-center
                    items-center
                    justify-center
                    sm:h-[460px]
                    sm:w-[220px]
                    lg:h-[500px]
                    lg:w-[240px]
                  "
                >
                  {/* ==================================================
                      EVENT CARD
                      ==================================================

                      Framer Motion controls the visual state
                      of each card.

                      The active card:
                      - Is larger.
                      - Is fully visible.
                      - Has the highest z-index.

                      Neighboring cards:
                      - Are smaller.
                      - Are slightly rotated.
                      - Are partially transparent.
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
                      h-[390px]
                      w-[235px]
                      shrink-0
                      overflow-hidden
                      rounded-[2rem]
                      bg-[#1a073f]
                      shadow-2xl
                      sm:h-[460px]
                      sm:w-[280px]
                      sm:rounded-[2.5rem]
                      lg:h-[500px]
                      lg:w-[310px]
                    "
                    style={{
                      /*
                        Enables 3D transforms such as rotateY.
                      */
                      transformStyle:
                        'preserve-3d',

                      /*
                        Sets the depth used for the 3D effect.
                      */
                      perspective: 1000,

                      /*
                        Only the active card should receive
                        pointer interactions.
                      */
                      pointerEvents:
                        isActive
                          ? 'auto'
                          : 'none',
                    }}
                  >
                    {/* ==============================================
                        IMAGE

                        object-cover makes the image completely
                        cover the card while preserving its
                        aspect ratio.

                        Any excess part of the image is cropped.
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
                        ==============================================

                        These gradients darken the image so that
                        the white event text remains readable.
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
                            /*
                              Prevent the carousel's mouse
                              drag handler from interfering
                              with this button.
                            */
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
          CAROUSEL DOTS
          ========================================================

          Each dot represents one event.

          The active event gets a wider dot so the user
          can easily identify which event is selected.
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
          ========================================================

          This section only appears when View Details
          is clicked.

          AnimatePresence + motion.div creates the
          expand/collapse animation.
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