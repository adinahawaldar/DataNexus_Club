import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TeamPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyLeaders = [
    {
      id: 'hod',
      name: 'Dr. Rajesh Sharma',
      role: 'Head of Department',
      shortRole: 'HOD',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      rotate: '-rotate-4 sm:-rotate-6',
      yOffset: 'translate-y-2 sm:translate-y-4',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
      bio: 'Ph.D. in Machine Learning with 15+ years of research experience. Guiding DataNexus Club towards technical excellence and academic innovation.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'faculty',
      name: 'Prof. Ananya Roy',
      role: 'Faculty Coordinator',
      shortRole: 'Faculty Coordinator',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-2 sm:rotate-3',
      yOffset: '-translate-y-2 sm:-translate-y-4',
      badgePos: '-top-12 left-1/2 -translate-x-1/2',
      bio: 'Associate Professor specializing in AI ethics and Data Science. Mentor to student research teams and competitive hackathon projects.',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'president',
      name: 'Aarav Mehta',
      role: 'President',
      shortRole: 'President',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      rotate: '-rotate-2 sm:-rotate-3',
      yOffset: 'translate-y-1 sm:translate-y-2',
      badgePos: '-top-10 left-1/2 -translate-x-1/2',
      bio: 'Final year Data Science undergrad. Lead organizer for 5+ national hackathons, passion for building agentic AI systems and scaling tech communities.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      id: 'vice-president',
      name: 'Ishita Verma',
      role: 'Vice President',
      shortRole: 'Vice President',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      rotate: 'rotate-4 sm:rotate-6',
      yOffset: 'translate-y-4 sm:translate-y-6',
      badgePos: '-bottom-12 left-1/2 -translate-x-1/2',
      bio: 'Third year AI enthusiast. Manages club operations, industry partnerships, and heads our weekly machine learning bootcamp series.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  ];

  const fullTeam = [
    ...keyLeaders,
    {
      id: 'tech-lead',
      name: 'Vikramaditya Das',
      role: 'Technical Lead',
      shortRole: 'Tech Lead',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
      bio: 'Full-stack developer & ML practitioner. Lead mentor for DataNexus open-source repositories and hands-on coding bootcamps.',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      id: 'events-lead',
      name: 'Sanya Kapoor',
      role: 'Events & PR Lead',
      shortRole: 'Events Lead',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      bio: 'Passionate event strategist. Coordinates guest lectures, alumni webinars, and national hackathon sponsorships.',
      linkedin: 'https://linkedin.com',
    },
  ];

  return (
    <section id="teams" className="relative w-full py-20 sm:py-28 bg-white text-zinc-900 select-none overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto text-center flex flex-col items-center">

        {/* All 4 Team Leader Cards Spread Side-by-Side (100% Visible & Playfully Rotated) */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative my-10 sm:my-16 w-full max-w-5xl px-2 cursor-pointer group"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center justify-center">
            {keyLeaders.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
                className={`relative w-full aspect-[4/5] rounded-[32px] overflow-visible shadow-2xl bg-zinc-900 border-4 border-white ${leader.rotate} ${leader.yOffset} transition-all duration-300 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]`}
              >
                {/* Photo Container */}
                <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating Glassmorphic Pill Tag - Styled matching reference screenshot */}
                <div
                  className={`absolute ${leader.badgePos} bg-[#f4f4f5]/95 backdrop-blur-xl px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.14)] border border-white/90 flex flex-col items-center text-center whitespace-nowrap z-30 transition-transform group-hover:scale-105 pointer-events-none`}
                >
                  <span className="text-[11px] sm:text-xs font-medium text-zinc-500 tracking-tight leading-none">
                    {leader.role}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 leading-tight mt-1">
                    {leader.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Large Clickable "Meet the Team ↗" Title - Expanded Width & Black Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsModalOpen(true)}
          className="mt-6 sm:mt-10 group cursor-pointer flex items-center justify-center w-full max-w-full px-2 sm:px-4 mx-auto select-none overflow-hidden sm:overflow-visible"
        >
          <h2 className="font-display font-medium text-6xl sm:text-[9rem] md:text-[11.2rem] lg:text-[13rem] xl:text-[14.2rem] tracking-tight leading-none text-[#1a073f] group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 sm:gap-4 w-full">
            <span>Meet the Team</span>
            <svg
              className="inline-block w-[0.6em] h-[0.6em] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 text-[#1a073f] group-hover:text-black flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7,7 17,7 17,17" />
            </svg>
          </h2>
        </motion.div>

        <p className="text-zinc-600 text-sm sm:text-base font-medium mt-4">
          Click to explore our faculty guides, core student leaders, and team leads.
        </p>
      </div>

      {/* Interactive Full Teams Roster Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-10 relative shadow-2xl border border-zinc-100 text-left my-8 select-text"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-3 rounded-full bg-zinc-100 text-zinc-700 hover:bg-[#1a073f] hover:text-white transition-colors z-20 shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="mb-8 pr-12">
                <span className="inline-block bg-purple-100 text-[#1a073f] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-2 border border-purple-200">
                  DataNexus Leadership & Mentors
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#1a073f] tracking-tight">
                  Meet Our Team
                </h3>
                <p className="text-zinc-600 text-sm sm:text-base mt-2">
                  The faculty mentors, student leaders, and engineers driving innovation at Data Nexus Club.
                </p>
              </div>

              {/* Team Roster Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullTeam.map((member) => (
                  <div
                    key={member.id}
                    className="bg-neutral-50/80 rounded-2xl p-5 border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-sm">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-[#1a073f] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {member.role}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-zinc-950">
                        {member.name}
                      </h4>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-2">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-200/60 flex items-center gap-3 text-purple-900">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold hover:underline flex items-center gap-1"
                        >
                          LinkedIn ↗
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold hover:underline flex items-center gap-1"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center pt-4 border-t border-zinc-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#1a073f] text-white rounded-full px-8 py-3.5 text-sm font-semibold shadow-lg hover:bg-purple-950 transition-colors"
                >
                  Close Roster
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
