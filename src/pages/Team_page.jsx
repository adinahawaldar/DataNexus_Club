import { useCallback, useEffect, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../context/ThemeContext';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const HERO_IMAGE = 'src/assets/team/image-removebg-preview (2).png';
const TEAMS = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6'];
const TEAM_TABS = ['All', ...TEAMS];
const AUTOPLAY_MS = 3500;

// Replace each member's role and LinkedIn URL with the real details.
const TEAM_MEMBER_DETAILS = [
  [
    ['Aarav Mehta', 'Team Head', '/src/assets/team/dimy1.png', '#'],
    ['Ishita Verma', 'Technical Lead', '/src/assets/team/dimy1.png', '#'],
    ['Kabir Shah', 'Design Lead', '/src/assets/team/dimy1.png', '#'],
    ['Nisha Patil', 'Events Lead', '/src/assets/team/dimy1.png', '#'],
    ['Rohan Das', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Sara Khan', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Vivaan Rao', 'Core Member', '/src/assets/team/dimy1.png', '#'],
  ],
  [
    ['Ananya Roy', 'Team Head', '/src/assets/team/madiha.png', '#'],
    ['Dev Malhotra', 'Technical Lead', '/src/assets/team/dimy1.png', '#'],
    ['Meera Joshi', 'Design Lead', '/src/assets/team/dimy1.png', '#'],
    ['Arjun Nair', 'Events Lead', '/src/assets/team/dimy1.png', '#'],
    ['Kiara Shah', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Neel Kapoor', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Tara Singh', 'Core Member', '/src/assets/team/dimy1.png', '#'],
  ],
  [
    ['Aditi Jain', 'Team Head', '/src/assets/team/dimy1.png', '#'],
    ['Yash Gupta', 'Technical Lead', '/src/assets/team/dimy1.png', '#'],
    ['Riya Menon', 'Design Lead', '/src/assets/team/dimy1.png', '#'],
    ['Advik Rao', 'Events Lead', '/src/assets/team/dimy1.png', '#'],
    ['Mahi Shah', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Om Kulkarni', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Zoya Khan', 'Core Member', '/src/assets/team/dimy1.png', '#'],
  ],
  [
    ['Sana Ali', 'Team Head', '/src/assets/team/dimy1.png', '#'],
    ['Aryan Deshmukh', 'Technical Lead', '/src/assets/team/dimy1.png', '#'],
    ['Diya Patel', 'Design Lead', '/src/assets/team/dimy1.png', '#'],
    ['Kunal Mehta', 'Events Lead', '/src/assets/team/dimy1.png', '#'],
    ['Myra Das', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Reyansh Nair', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Siya Roy', 'Core Member', '/src/assets/team/dimy1.png', '#'],
  ],
  [
    ['Ayan Kapoor', 'Team Head', '/src/assets/team/dimy1.png', '#'],
    ['Ira Sharma', 'Technical Lead', '/src/assets/team/dimy1.png', '#'],
    ['Neil Verma', 'Design Lead', '/src/assets/team/dimy1.png', '#'],
    ['Vanya Joshi', 'Events Lead', '/src/assets/team/dimy1.png', '#'],
    ['Rudra Singh', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Tia Khan', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Veer Shah', 'Core Member', '/src/assets/team/dimy1.png', '#'],
  ],
  [
    ['Aisha Nair', 'Team Head', '/src/assets/team/dimy1.png', '#'],
    ['Dhruv Jain', 'Technical Lead', '/src/assets/team/dimy1.png', '#'],
    ['Ishaan Roy', 'Design Lead', '/src/assets/team/dimy1.png', '#'],
    ['Lavanya Das', 'Events Lead', '/src/assets/team/dimy1.png', '#'],
    ['Manav Patil', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Navya Gupta', 'Core Member', '/src/assets/team/dimy1.png', '#'],
    ['Parth Mehta', 'Core Member', '/src/assets/team/dimy1.png', '#'],
  ],
];

const TEAM_MEMBERS = Object.fromEntries(
  TEAMS.map((team, teamIndex) => [
    team,
    TEAM_MEMBER_DETAILS[teamIndex].map(([name, role, image, linkedin], index) => ({
      id: `${team}-${index}`,
      name,
      role,
      image,
      linkedin,
    })),
  ]),
);

const ALL_MEMBERS = Object.values(TEAM_MEMBERS).flat();

const FOUNDING_MEMBERS = [
  ['Dr. Rajesh Sharma', 'Faculty Advisor', '/src/assets/team/dimy1.png', '#'],
  ['Prof. Ananya Roy', 'Faculty Coordinator', '/src/assets/team/dimy1.png', '#'],
  ['Aarav Mehta', 'Club President', '/src/assets/team/dimy1.png', '#'],
  ['Ishita Verma', 'Vice President', '/src/assets/team/dimy1.png', '#'],
  ['Kabir Shah', 'Secretary', '/src/assets/team/dimy1.png', '#'],
  ['Nisha Patil', 'Treasurer', '/src/assets/team/dimy1.png', '#'],
].map(([name, role, image, linkedin], index) => ({
  id: `founder-${index}`,
  name,
  role,
  image,
  linkedin,
}));

// Tracks viewport width so the founding-members carousel can use a smaller
// horizontal step on narrow screens instead of a fixed desktop offset.
function useCarouselStep() {
  const [step, setStep] = useState(135);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 380) setStep(64);
      else if (w < 640) setStep(88);
      else setStep(135);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return step;
}

function getCarouselOffset(index, activeIndex, count) {
  let offset = index - activeIndex;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

function getCarouselStyle(offset, step) {
  const distance = Math.abs(offset);
  const scale = distance === 0 ? 1 : distance === 1 ? 0.8 : 0.65;
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.6 : 0.35;

  return {
    transform: `translateX(${offset * step}px) scale(${scale})`,
    opacity: distance > 2 ? 0 : opacity,
    zIndex: 10 - distance,
    pointerEvents: distance > 1 ? 'none' : 'auto',
  };
}

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <ThemeProvider>
      <main className="min-h-screen overflow-x-hidden bg-[#faf8fd] text-zinc-900 transition-colors duration-500 dark:bg-[#07050e] dark:text-white">
        <HeroCard />
        <TeamSection />
        <TeamOf2025Section />
        <FoundingMembersSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

function HeroCard() {
  return (
    <section className="w-full p-2 sm:p-2 md:p-4 lg:p-5">
      <div
        className="relative flex h-[70vh] min-h-[340px] max-h-[700px] w-full flex-col justify-between overflow-hidden rounded-lg border border-purple-900/10 bg-zinc-200 dark:border-white/10 dark:bg-[#15111f] sm:h-[95vh] sm:min-h-[400px] sm:rounded-xl md:rounded-2xl"
      >
        <img
          src={HERO_IMAGE}
          alt="DataNexus Club team"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/10" />
        <div className="absolute inset-x-0 top-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-10">
          <h1 className="max-w-xl font-poppins text-[2.75rem] font-extrabold leading-[0.95] tracking-tight text-[#1a073f] dark:text-white sm:text-7xl md:text-8xl">
            Meet the team
          </h1>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const [activeTeam, setActiveTeam] = useState('Team 1');
  const members = activeTeam === 'All' ? ALL_MEMBERS : TEAM_MEMBERS[activeTeam];
  const leader = members[0];
  const teamMembers = members.slice(1, 7);

  return (
    <section id="team-section" className="px-4 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-[#1a073f] dark:text-white sm:text-6xl">{activeTeam}</h2>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:gap-4 sm:px-0">
            {TEAM_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTeam(tab)}
                className={cn(
                  'flex shrink-0 items-center justify-center whitespace-nowrap text-xs tracking-wide transition-colors',
                  activeTeam === tab
                    ? 'h-8 rounded-full bg-[#1a073f] px-4 text-white dark:bg-purple-500'
                    : 'h-8 px-2 text-zinc-500 hover:text-[#1a073f] dark:text-zinc-400 dark:hover:text-white',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(150px,0.7fr)_minmax(0,1.7fr)] sm:gap-6">
          {leader && <MemberCard member={leader} isLeader />}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, isLeader = false }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-[28px] border border-zinc-200/90 bg-white shadow-[0_14px_40px_rgba(26,7,63,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#15111f] dark:shadow-[0_14px_40px_rgba(0,0,0,0.28)]',
        isLeader ? 'min-h-[220px] sm:h-full sm:min-h-[260px]' : 'aspect-square',
      )}
      onClick={() => setRevealed((current) => !current)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-50"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div
        className={cn(
          'absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          revealed && 'opacity-100',
        )}
      >
        <div>
          <h3 className="font-poppins text-base font-bold leading-tight sm:text-lg">{member.name}</h3>
          <p className="mt-1 font-poppins text-xs text-white/75 sm:text-sm">{member.role}</p>
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${member.name}'s LinkedIn profile`}
          onClick={(event) => event.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/35"
        >
          <FaLinkedinIn size={13} />
        </a>
      </div>
    </article>
  );
}

function TeamOf2025Section() {
  const members = ALL_MEMBERS.slice(0, 9);
  const rows = [members.slice(0, 3), members.slice(3, 6), members.slice(6, 9)];
  const marqueeRows = [
    [...rows[0], ...rows[0]],
    [...rows[1], ...rows[1]],
    [...rows[2], ...rows[2]],
  ];

  return (
    <section className="overflow-hidden bg-[#faf8fd] py-10 dark:bg-[#07050e] sm:py-20">
      <div className="mx-auto">
        <h2 className="mb-8 px-4 text-center font-poppins text-[2rem] font-bold leading-tight tracking-tight text-[#1a073f] dark:text-white sm:mb-14 sm:px-0 sm:text-7xl">
          Team of 2025
        </h2>

        <div className="space-y-2 sm:space-y-4">
          {marqueeRows.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden">
              <div className={cn('team-marquee flex w-max gap-2 sm:gap-4', rowIndex === 1 ? 'team-marquee-reverse' : '')}>
                {row.map((member, memberIndex) => (
                  <div key={`${member.id}-${memberIndex}`} className="flex shrink-0 items-center gap-2 sm:gap-4">
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
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/55 px-1 text-center text-[9px] leading-tight text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-[10px]">
                        {member.name}
                      </span>
                    </a>
                  </div>
                ))}
                <div className="h-14 w-[calc(100vw-104px)] shrink-0 rounded-none bg-[#9613F4] sm:h-20 sm:w-[395px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center px-4 sm:mt-12 sm:px-0">
          <a
            href="#team-section"
            className="w-full rounded-2xl border border-[#1a073f] px-6 py-3.5 text-center text-sm text-[#1a073f] transition-colors hover:bg-[#1a073f] hover:text-white dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-500 sm:w-auto sm:px-16 sm:py-4 sm:text-base"
          >
            Meet the teams
          </a>
        </div>
      </div>
    </section>
  );
}

function FoundingMembersSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = FOUNDING_MEMBERS.length;
  const step = useCarouselStep();

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count, isPaused]);

  const handleEnter = useCallback((member, index) => {
    setHoveredId(member.id);
    setIsPaused(true);
    setActiveIndex(index);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
    setIsPaused(false);
  }, []);

  // Tap support for touch devices: tapping a card both centers it and
  // reveals its overlay, mirroring the desktop hover behavior.
  const handleTap = useCallback((member, index) => {
    setActiveIndex(index);
    setHoveredId((current) => (current === member.id ? null : member.id));
    setIsPaused(true);
  }, []);

  return (
    <section className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-7 text-center font-poppins text-2xl font-bold tracking-tight text-[#1a073f] dark:text-white sm:mb-10 sm:text-5xl">
          Founding Members
        </h2>
        <div className="relative mx-auto flex h-56 max-w-[900px] items-center justify-center overflow-hidden sm:h-72 sm:overflow-visible">
          {FOUNDING_MEMBERS.map((member, index) => {
            const offset = getCarouselOffset(index, activeIndex, count);
            const active = offset === 0;
            const isHovered = hoveredId === member.id;
            return (
              <div
                key={member.id}
                className={cn(
                  'group absolute h-44 w-32 cursor-pointer overflow-hidden rounded-md bg-zinc-200 shadow-lg transition-all duration-500 ease-out dark:bg-[#15111f] sm:h-64 sm:w-48',
                  active && 'ring-2 ring-[#241052]/20',
                )}
                style={getCarouselStyle(offset, step)}
                onMouseEnter={() => handleEnter(member, index)}
                onMouseLeave={handleLeave}
                onClick={() => handleTap(member, index)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={cn(
                    'h-full w-full object-cover transition duration-300',
                    isHovered && 'scale-105 brightness-50 blur-[2px]',
                  )}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <div
                  className={cn(
                    'absolute inset-0 flex flex-col items-center justify-center gap-2 text-white transition-opacity sm:gap-3',
                    isHovered ? 'opacity-100' : 'opacity-0',
                  )}
                >
                  <span className="px-3 text-center text-xs font-medium sm:text-sm">
                    {member.name}
                    <small className="mt-1 block text-[10px] font-normal text-white/75 sm:text-xs">{member.role}</small>
                  </span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    onClick={(event) => event.stopPropagation()}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 hover:bg-white/35 sm:h-8 sm:w-8"
                  >
                    <FaLinkedinIn size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {FOUNDING_MEMBERS.map((member, index) => (
            <button
              key={member.id}
              type="button"
              aria-label={`Show ${member.name}`}
              onClick={() => {
                setActiveIndex(index);
                setHoveredId(null);
              }}
              className={cn('h-2 rounded-full transition-all', index === activeIndex ? 'w-5 bg-[#241052]' : 'w-2 bg-[#D9D9DC]')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}