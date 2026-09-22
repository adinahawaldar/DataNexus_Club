import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import adinaImg from '../assets/team/Adina Hawalder.png';
import amaanImg from '../assets/team/Amaan Jalgaonkar.png';
import taskeenImg from '../assets/team/Taskeen Shaikh.png';
import aimanImg from '../assets/team/Aiman Kelkar.png';
import mahekImg from '../assets/team/Mahek Bagdadi.png';
import ahmedImg from '../assets/team/Ahmed Dhundware.png';
import sualehaImg from '../assets/team/Sualeha Hasbule.png';
import hamzaImg from '../assets/team/Hamza Patel.png';
import samiyaImg from '../assets/team/Samiya Khan.png';
import asrarImg from '../assets/team/Asrar Siddique.png';
import mohammadImg from '../assets/team/Mohammad Ahmed.png';
import siminImg from '../assets/team/Simin Ainarkar.png';
import tasifImg from '../assets/team/Tasif Farooqui.png';
import biswajitImg from '../assets/team/Biswajit Parida.png';
import sandeshImg from '../assets/team/Sandesh kite.png';
import maarijImg from '../assets/team/Mohammad Maarij.png';
import nazimImg from '../assets/team/Nazim Shaikh.png';
import raheedImg from '../assets/team/Rahee  Khot.png';
import anjaliImg from '../assets/team/Anjali.png';
import raoufImg from '../assets/team/Raouf.png';
import furkhanImg from '../assets/team/Furkhan.png';
import fatimaImg from '../assets/team/Fatima Siddique.png';
import fatimachougleImg from '../assets/team/Fatima Chougle.png';
import pranaliImg from '../assets/team/Pranali.png';
import madihaImg from '../assets/team/madiha.png';
import ridaImg from '../assets/team/rida.png';
import aatifImg from '../assets/team/Aatif Shaikh.png';
import naumanImg from '../assets/team/Nauman Patel.png';
import kashifImg from '../assets/team/Kashif Qureshi.png';
import heroImage from '../assets/team/TEAM.png';
import mueezImg from '../assets/team/mueez.png';
import aliImg from '../assets/team/ali.png';
import irfaImg from '../assets/team/irfa.png';
import vivekImg from '../assets/team/vivek.png';
import saeemImg from '../assets/team/saeem.png';
import sanaImg from '../assets/team/sana.png';
import maseeraImg from '../assets/team/maseera.png';
import sandipImg from '../assets/team/sandip.png';
import altafImg from '../assets/team/altaf.png';
import fizaImg from '../assets/team/fiza.png';


const cn = (...classes) => classes.filter(Boolean).join(' ');

const HERO_IMAGE = heroImage;

const TEAMS = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];
const TEAM_TABS = ['ALL', ...TEAMS];

const AUTOPLAY_MS = 3500;

/* -------------------------------------------------------
   TEAM DISPLAY NAMES
-------------------------------------------------------- */

const TEAM_DISPLAY_NAMES = {
  'Team 1': 'Technical Team',
  'Team 2': 'Documentation Team',
  'Team 3': 'Marketing Team',
  'Team 4': 'Media Team',
  'Team 5': 'Design Team',
};

/* -------------------------------------------------------
   ALL TAB DATA
   5 MICRO / CORE TEAM MEMBERS ONLY
-------------------------------------------------------- */

const ALL_TEAM_DETAILS = [
  ['Madiha Lasne', 'President', madihaImg, '#'],
  ['Aatif Shaikh', 'Vice President', aatifImg, '#'],
  ['Rida Dhanse', 'Secretary', ridaImg, '#'],
  ['Nauman Patel', 'Member', naumanImg, '#'],
  ['Kaashif Qureshi', 'Member', kashifImg, '#'],
];

/* -------------------------------------------------------
   INDIVIDUAL TEAM DATA
-------------------------------------------------------- */

const TEAM_MEMBER_DETAILS = [
  // TEAM 1
  [
    ['Sandesh kite', 'Technical Lead', sandeshImg, '#'],
    ['Mohammed Maarij', 'Core Member', maarijImg, '#'],
    ['Adina Hawalder', 'Core Member', adinaImg, '#'],
    ['Amaan Jalgaonkar', 'Core Member', amaanImg, '#'],
    ['Taskeen Shaikh', 'Core Member', taskeenImg, '#'],
  ],

  // TEAM 2
  [
    ['Aiman Kelkar', 'Documentation Head', aimanImg, '#'],
    ['Mahek Bagdadi', 'Core Member', mahekImg, '#'],
    ['Ahmed Dhundware', 'Core Member', ahmedImg, '#'],
    ['Sualeha Hasbule', 'Core Member', sualehaImg, '#'],
    ['Hamza Patel', 'Core Member', hamzaImg, '#'],
  ],

  // TEAM 3
  [
    ['Samiya Khan', 'Marketing Head', samiyaImg, '#'],
    ['Asrar Siddique', 'Core Member', asrarImg, '#'],
    ['Mohammed Ahmed', 'Core Member', mohammadImg, '#'],
    ['Simin Ainarkar', 'Core Member', siminImg, '#'],
    ['Tasif Farooqui', 'Core Member', tasifImg, '#'],
  ],

  // TEAM 4
  [
    ['Biswajit Parida', 'Media Head', biswajitImg, '#'],
    ['Nazim Shaik', 'Core Member', nazimImg, '#'],
    ['Raheed Khot', 'Core Member', raheedImg, '#'],
    ['Anjali', 'Core Member', anjaliImg, '#'],
    ['Idrisi Mumtarin', 'Core Member', "idrisiImg", '#'],
  ],

  // TEAM 5
  [
    ['Raouf Shaikh', 'Design Head', raoufImg, '#'],
    ['Furkhan Shaikh', 'Core Member', furkhanImg, '#'],
    ['Fatima Siddiqui', 'Core Member', fatimaImg, '#'],
    ['Fatima Chougle', 'Core Member', fatimachougleImg, '#'],
    ['Pranali Kunake', 'Core Member', pranaliImg, '#'],
  ],
];

/* -------------------------------------------------------
   CONVERT INDIVIDUAL TEAM DATA
-------------------------------------------------------- */

const TEAM_MEMBERS = Object.fromEntries(
  TEAMS.map((team, teamIndex) => [
    team,
    TEAM_MEMBER_DETAILS[teamIndex].map(
      ([name, role, image, linkedin], index) => ({
        id: `${team}-${index}`,
        name,
        role,
        image,
        linkedin,
      })
    ),
  ])
);

/* -------------------------------------------------------
   ALL TAB DATA
-------------------------------------------------------- */

const ALL_TEAM_MEMBERS = ALL_TEAM_DETAILS.map(
  ([name, role, image, linkedin], index) => ({
    id: `all-${index}`,
    name,
    role,
    image,
    linkedin,
  })
);

/* -------------------------------------------------------
   ALL CURRENT TEAM MEMBERS
   Used for Team of 2026 section
-------------------------------------------------------- */

const ALL_MEMBERS = Object.values(TEAM_MEMBERS).flat();

/* -------------------------------------------------------
   FOUNDING MEMBERS
-------------------------------------------------------- */

const FOUNDING_MEMBERS = [
  ['MR. MUEEZ HAJWANI', 'PRESIDENT', mueezImg, '#'],
  ['MR. ALI KHAN', 'VICE PRESIDENT', aliImg, '#'],
  ['MR. IRFAN SHAIKH', 'SECRETARY', irfaImg, '#'],
  ['MR. VIVEK P. BANGAR', 'TREASURER', vivekImg, '#'],
  ['MR. SAEEM BIJLE', 'TREASURER MEMBER', saeemImg, '#'],
  ['MS. SANA SHAIKH', 'TECHNICAL HEAD', sanaImg, '#'],
  ['MS. MS. MASEERA RUMANI', 'DESIGN HEAD', maseeraImg, '#'],
  ['MR. SANDIP DUSADH', 'DOCUMENTATION HEAD', sandipImg, '#'],
  ['MR. ALTAF KASU', 'MARKETING HEAD', altafImg, '#'],
  ['MS. FIZA PEERKHAN', 'MEDIA HEAD', fizaImg, '#'],
  
].map(([name, role, image, linkedin], index) => ({
  id: `founder-${index}`,
  name,
  role,
  image,
  linkedin,
}));

/* -------------------------------------------------------
   CAROUSEL HELPERS
-------------------------------------------------------- */

function useCarouselStep() {
  const [step, setStep] = useState(135);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w < 380) {
        setStep(108);
      } else if (w < 640) {
        setStep(112);
      } else {
        setStep(135);
      }
    };

    update();

    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  return step;
}

function getCarouselOffset(index, activeIndex, count) {
  let offset = index - activeIndex;

  if (offset > count / 2) {
    offset -= count;
  }

  if (offset < -count / 2) {
    offset += count;
  }

  return offset;
}

function getCarouselStyle(offset, step) {
  const distance = Math.abs(offset);

  const scale =
    distance === 0 ? 1 : distance === 1 ? 0.8 : 0.65;

  const opacity =
    distance === 0 ? 1 : distance === 1 ? 0.6 : 0.35;

  return {
    transform: `translateX(${offset * step}px) scale(${scale})`,
    opacity: distance > 2 ? 0 : opacity,
    zIndex: 10 - distance,
    pointerEvents: distance > 1 ? 'none' : 'auto',
  };
}

/* -------------------------------------------------------
   MAIN PAGE
-------------------------------------------------------- */

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf8fd] text-zinc-900 transition-colors duration-500 dark:bg-[#07050e] dark:text-white">
      <HeroCard />

      <TeamSection />

      <TeamOf2026Section />

      <FoundingMembersSection />

      <Footer />
    </main>
  );
}

/* -------------------------------------------------------
   HERO
-------------------------------------------------------- */

function HeroCard() {
  return (
    <section className="w-full p-2 sm:p-2 md:p-4 lg:p-5">
      <div
        className="relative flex h-[70vh] min-h-[340px] max-h-[700px] w-full flex-col justify-between overflow-hidden rounded-lg border border-purple-900/10 bg-zinc-200 dark:border-white/10 dark:bg-[#15111f] sm:h-[95vh] sm:min-h-[400px] sm:rounded-xl md:rounded-2xl"
      >
        <motion.img
          src={HERO_IMAGE}
          alt="DataNexus Club team"
          className="absolute inset-0 h-full w-full object-cover opacity-[1.5]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />

        <div className="absolute inset-0 bg-transparent" />

        <div className="absolute inset-x-0 top-0 z-20">
          <Navbar />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block max-w-xl px-5 py-3 font-poppins text-[2.75rem] font-extrabold leading-[0.95] tracking-tight text-[#1a073f] dark:text-white sm:text-7xl md:text-8xl"
          >
            Meet the team
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   TEAM SECTION
-------------------------------------------------------- */

function TeamSection() {
  const [activeTeam, setActiveTeam] = useState('Team 1');
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [revealedMemberId, setRevealedMemberId] = useState(null);

  let members;
  let displayTitle;
  let showLeader = true;

  if (activeTeam === 'ALL') {
    // ONLY the 5 Micro / Core Team cards
    members = ALL_TEAM_MEMBERS;
    displayTitle = 'Core Team';
    showLeader = false;
  } else {
    members = TEAM_MEMBERS[activeTeam];
    displayTitle = TEAM_DISPLAY_NAMES[activeTeam];
    showLeader = true;
  }

  // Individual Teams = maximum 5 cards
  // All = all 5 Micro / Core Team cards
  const teamMembers = showLeader
    ? members.slice(0, 5)
    : members;

  const handleTeamChange = (team) => {
    setActiveTeam(team);
    setRevealedMemberId(null);
  };

  return (
    <section
      id="team-section"
      className="px-4 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pt-40"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* HEADER */}
        <div className="mb-6 flex flex-col items-center gap-4 sm:mb-7 lg:flex-row lg:items-center lg:justify-between">

          <motion.h2
            key={displayTitle}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full text-center font-poppins text-3xl font-bold tracking-tight text-[#1a073f] dark:text-white sm:text-left sm:text-5xl lg:text-6xl"
          >
            {displayTitle}
          </motion.h2>

          {/* TEAM NAVIGATION */}
          <div className="hidden w-full flex-nowrap justify-end gap-1 pb-1 sm:flex lg:w-auto lg:shrink-0">
            {TEAM_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTeamChange(tab)}
                className={cn(
                  'flex shrink-0 items-center justify-center whitespace-nowrap text-xs tracking-wide transition-colors',

                  activeTeam === tab
                    ? 'h-8 rounded-full bg-[#1a073f] px-4 text-white dark:bg-purple-500'
                    : 'h-8 px-2 text-zinc-500 hover:text-[#1a073f] dark:text-zinc-400 dark:hover:text-white'
                )}
              >
                {tab === 'ALL'
                  ? 'Micro'
                  : TEAM_DISPLAY_NAMES[tab].replace(' Team', '')}
              </button>
            ))}
          </div>

          <div className="flex w-full min-w-0 items-center justify-center gap-1 sm:hidden">
            {TEAM_TABS.slice(0, 3).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTeamChange(tab)}
                className={cn(
                  'flex h-8 shrink-0 items-center justify-center whitespace-nowrap text-[11px] tracking-wide transition-colors',
                  activeTeam === tab
                    ? 'rounded-full bg-[#1a073f] px-3 text-white dark:bg-purple-500'
                    : 'px-1.5 text-zinc-500 hover:text-[#1a073f] dark:text-zinc-400 dark:hover:text-white'
                )}
              >
                {tab === 'ALL' ? 'Micro' : TEAM_DISPLAY_NAMES[tab].replace(' Team', '')}
              </button>
            ))}

            <div className="relative shrink-0">
              <span className="sr-only">Select another team</span>
              <button
                type="button"
                aria-expanded={isMoreOpen}
                aria-haspopup="menu"
                onClick={() => setIsMoreOpen((current) => !current)}
                className={cn(
                  'flex h-8 items-center rounded-full border bg-[#1a073f] px-2.5 pr-6 text-[11px] tracking-wide text-white outline-none transition-colors',
                  TEAM_TABS.includes(activeTeam) && TEAM_TABS.indexOf(activeTeam) > 2
                    ? 'border-purple-400 bg-purple-500'
                    : 'border-purple-300/40 dark:border-purple-400/40'
                )}
              >
                {TEAM_TABS.includes(activeTeam) && TEAM_TABS.indexOf(activeTeam) > 2
                  ? TEAM_DISPLAY_NAMES[activeTeam].replace(' Team', '')
                  : 'More'}
              </button>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px]">
                ▼
              </span>

              {isMoreOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-10 z-30 min-w-full overflow-hidden rounded-xl border border-purple-300/40 bg-[#1a073f] p-1 shadow-[0_12px_28px_rgba(26,7,63,0.35)]"
                >
                {TEAM_TABS.slice(3).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      handleTeamChange(tab);
                      setIsMoreOpen(false);
                    }}
                    className="block w-full rounded-lg px-3 py-1.5 text-left text-[11px] text-white transition-colors hover:bg-purple-500"
                  >
                    {TEAM_DISPLAY_NAMES[tab].replace(' Team', '')}
                  </button>
                ))}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* CARDS */}
        <motion.div
          key={activeTeam}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 gap-5 lg:grid-cols-5 lg:gap-6"
        >

          {teamMembers.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              isLeader={showLeader && index === 0}
              isCenteredMobile={teamMembers.length === 5 && index === 4}
              isRevealed={revealedMemberId === member.id}
              onToggle={() =>
                setRevealedMemberId((current) =>
                  current === member.id ? null : member.id
                )
              }
            />
          ))}

        </motion.div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------
   MEMBER CARD
-------------------------------------------------------- */

function MemberCard({
  member,
  isLeader = false,
  isCenteredMobile = false,
  isRevealed = false,
  onToggle,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative isolate aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-purple-400/70 bg-[linear-gradient(180deg,#25194d_0%,#170f38_50%,#05030d_100%)] shadow-[0_14px_40px_rgba(26,7,63,0.28)] transition-all duration-300 hover:-translate-y-1',
        isCenteredMobile &&
          'max-sm:col-span-2 max-sm:w-[calc(50%-0.625rem)] max-sm:justify-self-center',

        isLeader
          ? 'shadow-[0_18px_45px_rgba(147,51,234,0.28)]'
          : ''
      )}

      onClick={onToggle}
    >

      {/* TEAM HEAD BADGE */}
      {isLeader && (
        <div className="absolute left-3 top-3 z-20 rounded-full border border-purple-300/40 bg-purple-600/90 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-white backdrop-blur-md">
          TEAM HEAD
        </div>
      )}

      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-contain object-bottom transition duration-300 group-hover:scale-105 group-hover:brightness-50"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      <div
        className={cn(
          'absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100',

          isRevealed && 'opacity-100'
        )}
      >
        <div>

          <h3 className="font-poppins text-base font-bold leading-tight sm:text-lg">
            {member.name}
          </h3>

          <p className="mt-1 font-poppins text-xs text-white/75 sm:text-sm">
            {member.role}
          </p>

        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${member.name}'s LinkedIn profile`}
          onClick={(event) =>
            event.stopPropagation()
          }
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/35"
        >
          <FaLinkedinIn size={13} />
        </a>

      </div>

    </motion.article>
  );
}

/* -------------------------------------------------------
   TEAM OF 2026
-------------------------------------------------------- */

function TeamOf2026Section() {
  const members = ALL_MEMBERS.slice(0, 9);

  const rows = [
    members.slice(0, 3),
    members.slice(3, 6),
    members.slice(6, 9),
  ];

  const marqueeRows = [
    [...rows[0], ...rows[0]],
    [...rows[1], ...rows[1]],
    [...rows[2], ...rows[2]],
  ];

  return (
    <section className="overflow-hidden bg-[#faf8fd] py-10 dark:bg-[#07050e] sm:py-20">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.12 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto"
      >

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 px-4 text-center font-poppins text-[2rem] font-bold leading-tight tracking-tight text-[#1a073f] dark:text-white sm:mb-14 sm:px-0 sm:text-7xl"
        >
          Team of 2026
        </motion.h2>

        <div className="space-y-2 sm:space-y-4">

          {marqueeRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={{
                hidden: { opacity: 0, x: rowIndex === 1 ? 34 : -34 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >

              <div
                className={cn(
                  'team-marquee flex w-max gap-2 sm:gap-4',

                  rowIndex === 1
                    ? 'team-marquee-reverse'
                    : ''
                )}
              >

                {row.map(
                  (member, memberIndex) => (
                    <div
                      key={`${member.id}-${memberIndex}`}
                      className="flex shrink-0 items-center gap-2 sm:gap-4"
                    >

                      <div className="h-14 w-[calc(100vw-104px)] rounded-none bg-[#9613F4] sm:h-20 sm:w-[395px]" />

                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${member.name}'s LinkedIn profile`}
                        className="group relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-none bg-zinc-200 transition-transform hover:scale-105 dark:bg-[#15111f] sm:h-[76px] sm:w-20"
                      >

                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              'none';
                          }}
                        />

                        <span className="absolute inset-0 flex items-center justify-center bg-black/55 px-1 text-center text-[9px] leading-tight text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-[10px]">
                          {member.name}
                        </span>

                      </a>

                    </div>
                  )
                )}

                <div className="h-14 w-[calc(100vw-104px)] shrink-0 rounded-none bg-[#9613F4] sm:h-20 sm:w-[395px]" />

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

/* -------------------------------------------------------
   FOUNDING MEMBERS
-------------------------------------------------------- */

function FoundingMembersSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swipeStartX = useRef(null);
  const suppressClick = useRef(false);

  const count = FOUNDING_MEMBERS.length;
  const step = useCarouselStep();

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % count
      );
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [count, isPaused]);

  const handleEnter = useCallback(
    (member, index) => {
      setHoveredId(member.id);
      setIsPaused(true);
      setActiveIndex(index);
    },
    []
  );

  const handleLeave = useCallback(() => {
    setHoveredId(null);
    setIsPaused(false);
  }, []);

  const handleTap = useCallback(
    (member, index) => {
      if (suppressClick.current) {
        suppressClick.current = false;
        return;
      }

      setActiveIndex(index);
      setHoveredId(member.id);
      setIsPaused(true);
    },
    []
  );

  const handleTouchStart = useCallback((event) => {
    swipeStartX.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      if (swipeStartX.current === null) return;

      const distance = event.changedTouches[0].clientX - swipeStartX.current;
      swipeStartX.current = null;

      if (Math.abs(distance) < 40) return;

      suppressClick.current = true;
      setHoveredId(null);
      setIsPaused(false);
      setActiveIndex((current) =>
        distance < 0
          ? (current + 1) % count
          : (current - 1 + count) % count
      );
    },
    [count]
  );

  return (
    <section className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-12">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto max-w-[1120px]"
      >

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 text-center font-poppins text-2xl font-bold tracking-tight text-[#1a073f] dark:text-white sm:mb-10 sm:text-5xl"
        >
          Our Founding Members
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 34, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-[226px] max-w-[320px] touch-pan-y items-center justify-center overflow-hidden sm:h-72 sm:max-w-[900px] sm:overflow-visible"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {FOUNDING_MEMBERS.map(
            (member, index) => {

              const offset =
                getCarouselOffset(
                  index,
                  activeIndex,
                  count
                );

              const active = offset === 0;

              const isHovered =
                hoveredId === member.id;

              return (
                <div
                  key={member.id}
                  className={cn(
                    'group absolute h-[200px] w-[150px] cursor-pointer overflow-hidden rounded-md bg-zinc-200 shadow-lg transition-all duration-500 ease-out dark:bg-[#15111f] sm:h-64 sm:w-48',

                    active &&
                      'ring-2 ring-[#241052]/20'
                  )}

                  style={getCarouselStyle(
                    offset,
                    step
                  )}

                  onMouseEnter={() =>
                    handleEnter(
                      member,
                      index
                    )
                  }

                  onMouseLeave={handleLeave}

                  onClick={() =>
                    handleTap(
                      member,
                      index
                    )
                  }
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className={cn(
                      'h-full w-full object-cover transition duration-300',

                      isHovered &&
                        'scale-105 brightness-50 blur-[2px]'
                    )}

                    onError={(event) => {
                      event.currentTarget.style.display =
                        'none';
                    }}
                  />

                  <div
                    className={cn(
                      'absolute inset-0 flex flex-col items-center justify-center gap-2 text-white transition-opacity sm:gap-3',

                      isHovered
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  >

                    <span className="px-3 text-center text-xs font-medium sm:text-sm">

                      {member.name}

                      <small className="mt-1 block text-[10px] font-normal text-white/75 sm:text-xs">
                        {member.role}
                      </small>

                    </span>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 hover:bg-white/35 sm:h-8 sm:w-8"
                    >
                      <FaLinkedinIn size={13} />
                    </a>

                  </div>

                </div>
              );
            }
          )}

        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex justify-center gap-2"
        >

          {FOUNDING_MEMBERS.map(
            (member, index) => (
              <button
                key={member.id}
                type="button"
                aria-label={`Show ${member.name}`}
                onClick={() => {
                  setActiveIndex(index);
                  setHoveredId(null);
                }}
                className={cn(
                  'h-2 rounded-full transition-all',

                  index === activeIndex
                    ? 'w-5 bg-[#241052]'
                    : 'w-2 bg-[#D9D9DC]'
                )}
              />
            )
          )}

        </motion.div>

      </motion.div>

    </section>
  );
}