import React from "react";
import { motion } from "framer-motion";

function AchievementsHero() {
    const scrollToAchievements = () => {
        const section = document.getElementById("achievement-highlights");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0b0813] text-white">
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-700/10 blur-3xl" />
                <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-800/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-16">
                <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-500/10 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-purple-400" />

                            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                                Our Achievements
                            </span>
                        </div>

                        <h1 className="font-poppins text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                            Small Steps,
                            <br />
                            <span className="text-purple-400">
                                Big Impact.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-lg font-poppins text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                            From hackathons to impactful projects, our journey
                            reflects the passion, innovation, and teamwork of
                            DataNexus.
                        </p>

                        <button
                            onClick={scrollToAchievements}
                            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-poppins text-sm font-bold text-[#1a073f] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-purple-100 active:scale-95"
                        >
                            <span>Explore Our Achievements</span>

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a073f] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                ↗
                            </span>
                        </button>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="h-px w-10 bg-purple-400/50" />

                            <span className="font-poppins text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                                Learn • Build • Achieve
                            </span>
                        </div>
                    </motion.div>

                    {/* RIGHT COLLAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="relative mx-auto h-[500px] w-full max-w-[650px] sm:h-[570px] lg:h-[600px]"
                    >
                        {/* Decorative border */}
                        <div className="absolute right-4 top-5 h-[87%] w-[72%] rounded-[32px] border border-purple-300/10" />

                        {/* IMAGE 1 */}
                        <motion.div
                            whileHover={{ y: -8, rotate: 0 }}
                            transition={{ duration: 0.35 }}
                            className="absolute left-0 top-12 z-20 h-[340px] w-[68%] rotate-[-3deg] overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.4)] sm:h-[420px]"
                        >
                            <img
                                src="/achievements/achievement1.jpeg"
                                alt="DataNexus achievement"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
                                <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                                    DataNexus
                                </span>
                            </div>
                        </motion.div>

                        {/* IMAGE 2 */}
                        <motion.div
                            whileHover={{ y: -8, rotate: 0 }}
                            transition={{ duration: 0.35 }}
                            className="absolute right-0 top-0 z-30 h-[200px] w-[43%] rotate-[4deg] overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900 shadow-[0_20px_55px_rgba(0,0,0,0.4)] sm:h-[235px]"
                        >
                            <img
                                src="/achievements/achievement2.jpeg"
                                alt="DataNexus achievement"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>

                        {/* IMAGE 3 */}
                        <motion.div
                            whileHover={{ y: -8, rotate: 0 }}
                            transition={{ duration: 0.35 }}
                            className="absolute bottom-0 right-3 z-30 h-[195px] w-[46%] rotate-[-3deg] overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900 shadow-[0_20px_55px_rgba(0,0,0,0.4)] sm:h-[235px]"
                        >
                            <img
                                src="/achievements/achievement3.jpeg"
                                alt="DataNexus achievement"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>

                        {/* 03 badge */}
                        <div className="absolute bottom-20 left-[58%] z-40 hidden -translate-x-1/2 sm:block">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-purple-500/15 backdrop-blur-xl">
                                <span className="font-poppins text-xl font-extrabold text-purple-300">
                                    03
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AchievementsHero;