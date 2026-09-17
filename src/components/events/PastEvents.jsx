import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/*
  ============================================================
  PAST EVENTS DATA
  ============================================================

  Add multiple images to the "images" array for each event.
  The first image is shown initially, then the images
  automatically crossfade one after another.
*/

const pastEvents = {
  '2026': [
    {
      id: 1,
      name: 'PREPIT',
      date: '18 April 2026',

      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'PREPIT is an intensive interview preparation and training program designed to help students excel in technical and HR interviews. The event focuses on Data Science, Machine Learning concepts, coding challenges, and mock interview sessions guided by experienced mentors.',
    },

    {
      id: 2,
      name: 'Power BI Competition',
      date: '26 February 2026',

      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'A practical data visualization competition where participants worked with data and created meaningful dashboards and insights using Power BI.',
    },

    {
      id: 3,
      name: 'Workshop on Power BI',
      date: '17 February 2026',

      images: [
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'An interactive workshop focused on Power BI and the fundamentals of transforming data into meaningful visualizations and dashboards.',
    },
  ],

  '2025': [
    {
      id: 4,
      name: 'Java Bootcamp',
      date: '14 October 2025',

      images: [
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'A practical bootcamp designed to strengthen programming fundamentals and introduce students to Java through hands-on learning.',
    },

    {
      id: 5,
      name: 'Unleashing the Power of Data',
      date: '9 October 2025',

      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'An engaging session exploring the importance of data and how data-driven thinking can be used to understand problems and create meaningful solutions.',
    },

    {
      id: 6,
      name: 'Workshop: Fundamentals of Data Science',
      date: '26 September 2025',

      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'A foundational workshop introducing students to important Data Science concepts and helping them understand the possibilities of working with data.',
    },

    {
      id: 7,
      name: 'Inauguration of S4DS & Data Nexus Club',
      date: '11 September 2025',

      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=85',
      ],

      description:
        'The inauguration of S4DS and Data Nexus Club marked the beginning of a student community focused on Data Science, learning, collaboration, and innovation.',
    },
  ],
};

/*
  ============================================================
  PAST EVENTS COMPONENT
  ============================================================
*/

function PastEvents() {
  /*
    ============================================================
    STATE
    ============================================================
  */

  // 2026 is selected by default.
  const [selectedYear, setSelectedYear] =
    useState('2026');

  // Controls View More / Show Less.
  const [showAll, setShowAll] =
    useState(false);

  // Stores the event whose description is currently open.
  const [openEventId, setOpenEventId] =
    useState(null);

  /*
    ============================================================
    CONSTANTS
    ============================================================
  */

  const events =
    pastEvents[selectedYear];

  /*
    Show only the first 3 events
    unless View More has been clicked.
  */

  const visibleEvents = showAll
    ? events
    : events.slice(0, 3);

  /*
    ============================================================
    YEAR CHANGE
    ============================================================
  */

  const handleYearChange = (year) => {
    setSelectedYear(year);

    // Start the newly selected year from the beginning.
    setShowAll(false);

    // Close any previously opened description.
    setOpenEventId(null);
  };

  /*
    ============================================================
    KNOW MORE
    ============================================================
  */

  const handleKnowMore = (eventId) => {
    setOpenEventId((currentId) =>
      currentId === eventId
        ? null
        : eventId
    );
  };

  return (
    <section
      id="pastevents"
      className="relative overflow-hidden px-4 pb-32 pt-20 sm:px-8 sm:pt-28 lg:px-16"
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
        className="mx-auto max-w-4xl text-center"
      >
        <p className="font-sans text-lg font-medium tracking-tight text-[#8338ec] sm:text-xl md:text-2xl">
          Memories that stay.
        </p>

        <h2 className="mt-3 font-sans text-4xl font-bold leading-none tracking-tight text-[#1a073f] sm:text-5xl md:text-6xl lg:text-7xl">
          Past Events
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-zinc-600 sm:text-lg">
          A look back at the events, workshops,
          competitions, and experiences that shaped
          Data Nexus.
        </p>
      </motion.div>

      {/* ========================================================
          YEAR SELECTOR
          ======================================================== */}

      <div className="mt-10 flex justify-center sm:mt-14">
        <div
          className="
            no-scrollbar
            flex
            max-w-full
            overflow-x-auto
            rounded-full
            border
            border-[#1a073f]/10
            bg-white/70
            p-1.5
            shadow-sm
            backdrop-blur-md
          "
        >
          {['2026', '2025'].map(
            (year) => {
              const isActive =
                selectedYear === year;

              return (
                <button
                  key={year}
                  type="button"
                  onClick={() =>
                    handleYearChange(year)
                  }
                  className="
                    relative
                    shrink-0
                    cursor-pointer
                    rounded-full
                    px-6
                    py-2.5
                    font-sans
                    text-sm
                    font-semibold
                    sm:px-8
                    sm:py-3
                    sm:text-base
                  "
                >
                  {isActive && (
                    <motion.div
                      layoutId="pastEventsYearPill"
                      className="absolute inset-0 rounded-full bg-[#1a073f]"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-500 hover:text-[#1a073f]'
                    }`}
                  >
                    {year}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* ========================================================
          EVENT LIST
          ======================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{
            opacity: 0,
            x: 45,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -45,
          }}
          transition={{
            duration: 0.55,
            ease: 'easeOut',
          }}
          className="mx-auto mt-16 max-w-6xl sm:mt-20"
        >
          {/* ==================================================
              YEAR LABEL
          ================================================== */}

          <div className="mb-12 flex items-center justify-center gap-4 sm:mb-16">
            <div className="h-px w-12 bg-[#8338ec]/25 sm:w-20" />

            <span
              className="
                font-script
                text-3xl
                font-bold
                leading-none
                tracking-tight
                bg-gradient-to-r
                from-[#6d28d9]
                via-[#8338ec]
                to-[#c026d3]
                bg-clip-text
                text-transparent
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              {selectedYear} Memories
            </span>

            <div className="h-px w-12 bg-[#8338ec]/25 sm:w-20" />
          </div>

          {/* ==================================================
              EVENTS
          ================================================== */}

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {visibleEvents.map(
              (event, index) => {
                const isEven =
                  index % 2 === 1;

                const isOpen =
                  openEventId ===
                  event.id;

                return (
                  <motion.article
                    key={event.id}
                    initial={{
                      opacity: 0,
                      y: 45,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      delay:
                        index * 0.08,
                      ease: 'easeOut',
                    }}
                    className="group"
                  >
                    {/* ==================================================
                        MAIN EVENT ROW
                    ================================================== */}

                    <div
                      className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-14 ${
                        isEven
                          ? 'lg:flex-row-reverse'
                          : ''
                      }`}
                    >
                      {/* ==================================================
                          IMAGE SLIDESHOW
                      ================================================== */}

                      <div className="w-full lg:w-[52%]">
                        <EventImageSlideshow
                          images={event.images}
                          eventName={event.name}
                        />
                      </div>

                      {/* ==================================================
                          EVENT CONTENT
                      ================================================== */}

                      <div className="w-full lg:w-[48%]">
                        <div className="max-w-xl">

                          {/* DATE */}

                          <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#8338ec] sm:text-sm">
                            {event.date}
                          </p>

                          {/* TITLE */}

                          <h3 className="mt-3 font-sans text-3xl font-bold leading-[1.05] tracking-tight text-[#1a073f] sm:text-4xl lg:text-5xl">
                            {event.name}
                          </h3>

                          {/* SHORT DESCRIPTION */}

                          <p className="mt-5 font-sans text-sm leading-7 text-zinc-600 sm:text-base">
                            {event.description.length >
                            150
                              ? `${event.description.slice(
                                  0,
                                  150
                                )}...`
                              : event.description}
                          </p>

                          {/* KNOW MORE */}

                          <motion.button
                            type="button"
                            onClick={() =>
                              handleKnowMore(
                                event.id
                              )
                            }
                            whileHover={{
                              x: 4,
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
                              border-b
                              border-[#1a073f]/30
                              pb-1
                              font-sans
                              text-sm
                              font-semibold
                              text-[#1a073f]
                              transition-colors
                              duration-200
                              hover:border-[#8338ec]
                              hover:text-[#8338ec]
                            "
                          >
                            {isOpen
                              ? 'Hide Details'
                              : 'Know More'}

                            <motion.svg
                              animate={{
                                rotate:
                                  isOpen
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
                    </div>

                    {/* ==================================================
                        EXPANDED DETAILS
                    ================================================== */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
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
                          className="overflow-hidden"
                        >
                          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#1a073f]/10 bg-white/70 px-6 py-7 shadow-sm backdrop-blur-md sm:mt-10 sm:px-10 sm:py-9">

                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#8338ec]">
                              About the event
                            </p>

                            <h4 className="mt-2 font-sans text-2xl font-bold tracking-tight text-[#1a073f] sm:text-3xl">
                              {event.name}
                            </h4>

                            <p className="mt-4 font-sans text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
                              {event.description}
                            </p>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              }
            )}
          </div>

          {/* ==================================================
              VIEW MORE / SHOW LESS
          ================================================== */}

          {events.length > 3 && (
            <div className="mt-16 flex justify-center sm:mt-20">
              <motion.button
                type="button"
                onClick={() => {
                  setShowAll(
                    (current) =>
                      !current
                  );

                  setOpenEventId(null);
                }}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-full
                  bg-[#1a073f]
                  px-6
                  py-3
                  font-sans
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-colors
                  duration-200
                  hover:bg-purple-950
                  sm:px-8
                  sm:py-4
                "
              >
                {showAll
                  ? 'Show Less'
                  : 'View More'}

                <motion.svg
                  animate={{
                    rotate:
                      showAll
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
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

/*
  ============================================================
  EVENT IMAGE SLIDESHOW
  ============================================================
*/

function EventImageSlideshow({
  images,
  eventName,
}) {
  // Current image being displayed.
  const [currentImage, setCurrentImage] =
    useState(0);

  // Pause slideshow while hovering.
  const [isHovered, setIsHovered] =
    useState(false);

  /*
    Reset slideshow whenever the event
    changes.
  */

  useEffect(() => {
    setCurrentImage(0);
  }, [images]);

  /*
    Automatically move to the next image.

    The slideshow only runs when:
    - There is more than one image.
    - The user is not hovering over it.
  */

  useEffect(() => {
    if (
      images.length <= 1 ||
      isHovered
    ) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage(
        (current) =>
          (current + 1) %
          images.length
      );
    }, 3500);

    return () =>
      clearInterval(interval);
  }, [images, isHovered]);

  /*
    Move to the previous image.
  */

  const handlePreviousImage = (event) => {
    event.stopPropagation();

    setCurrentImage(
      (current) =>
        (current - 1 + images.length) %
        images.length
    );
  };

  /*
    Move to the next image.
  */

  const handleNextImage = (event) => {
    event.stopPropagation();

    setCurrentImage(
      (current) =>
        (current + 1) %
        images.length
    );
  };

  /*
    Manually select an image
    using the indicator dots.
  */

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <motion.div
      className="
        relative
        aspect-[4/3]
        w-full
        overflow-hidden
        rounded-[2rem]
        bg-[#1a073f]
        shadow-xl
        sm:rounded-[2.5rem]
      "
      onMouseEnter={() =>
        setIsHovered(true)
      }
      onMouseLeave={() =>
        setIsHovered(false)
      }
    >
      {/* ======================================================
          IMAGES
      ====================================================== */}

      <AnimatePresence initial={false}>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`${eventName} - photo ${
            currentImage + 1
          }`}
          draggable="false"
          initial={{
            opacity: 0,
            scale: 1.03,
          }}
          animate={{
            opacity: 1,
            scale: isHovered
              ? 1.055
              : 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.01,
          }}
          transition={{
            opacity: {
              duration: 0.7,
              ease: 'easeInOut',
            },
            scale: {
              duration: 0.5,
              ease: 'easeOut',
            },
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            max-w-none
            object-cover
            object-center
          "
        />
      </AnimatePresence>

      {/* ======================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#1a073f]/45
          via-transparent
          to-transparent
          opacity-70
          transition-opacity
          duration-500
          group-hover:opacity-40
        "
      />

      {/* ======================================================
          LEFT CHEVRON
      ====================================================== */}

      {images.length > 1 && (
        <motion.button
          type="button"
          onClick={handlePreviousImage}
          aria-label="Previous photo"
          whileHover={{
            scale: 1.08,
            x: -2,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            absolute
            left-4
            top-1/2
            z-20
            flex
            h-10
            w-10
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#1a073f]/50
            text-white
            shadow-lg
            backdrop-blur-md
            transition-colors
            duration-300
            hover:bg-[#1a073f]/75
            sm:left-6
            sm:h-12
            sm:w-12
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}

      {/* ======================================================
          RIGHT CHEVRON
      ====================================================== */}

      {images.length > 1 && (
        <motion.button
          type="button"
          onClick={handleNextImage}
          aria-label="Next photo"
          whileHover={{
            scale: 1.08,
            x: 2,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            absolute
            right-4
            top-1/2
            z-20
            flex
            h-10
            w-10
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#1a073f]/50
            text-white
            shadow-lg
            backdrop-blur-md
            transition-colors
            duration-300
            hover:bg-[#1a073f]/75
            sm:right-6
            sm:h-12
            sm:w-12
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}

      {/* ======================================================
          SLIDESHOW INDICATORS
      ====================================================== */}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-1.5
            rounded-full
            border
            border-white/15
            bg-[#1a073f]/45
            px-3
            py-2
            backdrop-blur-md
            sm:bottom-7
          "
        >
          {images.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  handleDotClick(
                    index
                  )
                }
                aria-label={`Show photo ${
                  index + 1
                }`}
                className="
                  flex
                  h-3
                  w-3
                  cursor-pointer
                  items-center
                  justify-center
                "
              >
                <span
                  className={`
                    block
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentImage ===
                      index
                        ? 'h-2.5 w-2.5 bg-white'
                        : 'h-1.5 w-1.5 bg-white/45'
                    }
                  `}
                />
              </button>
            )
          )}
        </div>
      )}
    </motion.div>
  );
}

export default PastEvents;