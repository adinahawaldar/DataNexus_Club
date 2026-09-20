import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import AchievementsHero from "../components/AchievementsHero";
import Footer from "../components/Footer";

import sih1 from "../assets/achievements/sih1.jpg";
import achievement1 from "../assets/achievements/achievement1.jpg";
import achievement3 from "../assets/achievements/achievement3.jpg";

import past1 from "../assets/achievements/achievem5.jpg";
import past2 from "../assets/achievements/past2.jpg";
import past3 from "../assets/achievements/achievement4.jpg";

import { ThemeProvider, useTheme } from "../context/ThemeContext";

function AchievementsPage() {
    return (
        <ThemeProvider>
            <AchievementsContent />
        </ThemeProvider>
    );
}

function AchievementsContent() {
    const { isDark } = useTheme();

    const achievements = [
        {
            number: "01",
            title: "Hackathons (SIH '26 Winners)",
            description:
                "Collaborating, competing, and building practical solutions through technical challenges and hackathons.",
            image: sih1,
        },
        {
            number: "02",
            title: "Technical Projects",
            description:
                "Turning ideas into real projects while learning AI, data science, development, and problem solving.",
            image: achievement1,
        },
        {
            number: "03",
            title: "Community Impact",
            description:
                "Creating a stronger student community through workshops, teamwork, knowledge sharing, and innovation.",
            image: achievement3,
        },
    ];

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${
                isDark
                    ? "bg-[#0b0813] text-white"
                    : "bg-[#faf8fd] text-zinc-900"
            }`}
        >
            {/* NAVBAR */}
            <Navbar />

            {/* HERO */}
            <AchievementsHero />

            {/* ================= EXPLORE ACHIEVEMENTS ================= */}
            <section
                id="achievement-highlights"
                className={`relative overflow-hidden px-6 py-24 transition-colors duration-500 sm:px-10 lg:px-16 ${
                    isDark ? "bg-[#0b0813]" : "bg-[#faf8fd]"
                }`}
            >
                <div className="mx-auto max-w-[1440px]">

                    {/* HEADING */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7 }}
                        className="mb-12"
                    >
                        <p
                            className={`mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.25em] ${
                                isDark
                                    ? "text-purple-400"
                                    : "text-purple-600"
                            }`}
                        >
                            Explore Our Journey
                        </p>

                        <h2
                            className={`max-w-3xl font-poppins text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${
                                isDark
                                    ? "text-white"
                                    : "text-[#1a073f]"
                            }`}
                        >
                            Moments that
                            <span className="text-purple-500">
                                {" "}made an impact.
                            </span>
                        </h2>

                        <p
                            className={`mt-5 max-w-2xl font-poppins text-sm leading-7 sm:text-base ${
                                isDark
                                    ? "text-zinc-400"
                                    : "text-zinc-600"
                            }`}
                        >
                            Every event, project, and collaboration becomes a
                            part of our journey. These moments represent the
                            creativity, teamwork, and growth of DataNexus.
                        </p>
                    </motion.div>

                    {/* ACHIEVEMENT CARDS */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                        {achievements.map((achievement, index) => (
                            <motion.article
                                key={achievement.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                }}
                                className={`group overflow-hidden rounded-[30px] border transition-all duration-500 hover:-translate-y-2 ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.04] hover:border-purple-400/30 hover:bg-white/[0.06]"
                                        : "border-purple-200/60 bg-white shadow-[0_15px_45px_rgba(26,7,63,0.08)] hover:border-purple-300 hover:bg-white hover:shadow-[0_20px_55px_rgba(126,34,206,0.12)]"
                                }`}
                            >
                                {/* IMAGE */}
                                <div className="relative h-[300px] overflow-hidden">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* NUMBER */}
                                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                                        <span className="font-poppins text-xs font-bold text-white">
                                            {achievement.number}
                                        </span>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-7">

                                    <h3
                                        className={`font-poppins text-2xl font-bold ${
                                            isDark
                                                ? "text-white"
                                                : "text-[#1a073f]"
                                        }`}
                                    >
                                        {achievement.title}
                                    </h3>

                                    <p
                                        className={`mt-3 font-poppins text-sm leading-7 ${
                                            isDark
                                                ? "text-zinc-400"
                                                : "text-zinc-600"
                                        }`}
                                    >
                                        {achievement.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-500">
                                        <span className="h-px w-8 bg-purple-400/60" />
                                        DataNexus
                                    </div>
                                </div>
                            </motion.article>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= PAST ACHIEVEMENTS ================= */}
            <section
                id="past-achievements"
                className={`relative overflow-hidden px-6 pb-24 pt-20 transition-colors duration-500 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 ${
                    isDark
                        ? "bg-[#0b0813] text-white"
                        : "bg-[#faf8fd] text-zinc-900"
                }`}
            >
                <div className="mx-auto max-w-[1440px]">

                    {/* SECTION HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mb-12"
                    >
                        <div className="max-w-2xl">

                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-purple-400/50" />

                                <p
                                    className={`font-poppins text-[11px] font-semibold uppercase tracking-[0.24em] ${
                                        isDark
                                            ? "text-zinc-500"
                                            : "text-zinc-500"
                                    }`}
                                >
                                    Looking Back
                                </p>
                            </div>

                            <h2
                                className={`font-poppins text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${
                                    isDark
                                        ? "text-white"
                                        : "text-[#1a073f]"
                                }`}
                            >
                                Past{" "}
                                <span
                                    className={
                                        isDark
                                            ? "text-zinc-400"
                                            : "text-purple-500"
                                    }
                                >
                                    Achievements.
                                </span>
                            </h2>

                            <p
                                className={`mt-5 max-w-xl font-poppins text-sm leading-7 sm:text-base ${
                                    isDark
                                        ? "text-zinc-500"
                                        : "text-zinc-600"
                                }`}
                            >
                                Milestones, experiences, and moments that helped
                                shape the journey of DataNexus.
                            </p>
                        </div>
                    </motion.div>

                    {/* PAST ACHIEVEMENT CARDS */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {/* CARD 01 */}
                        <motion.article
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.05,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`group overflow-hidden rounded-[26px] border transition-all duration-400 hover:-translate-y-1 ${
                                isDark
                                    ? "border-white/[0.08] bg-white/[0.025] hover:border-purple-400/20 hover:bg-white/[0.04]"
                                    : "border-purple-200/60 bg-white shadow-[0_12px_40px_rgba(26,7,63,0.06)] hover:border-purple-300 hover:shadow-[0_18px_45px_rgba(126,34,206,0.10)]"
                            }`}
                        >
                            <div
                                className={`relative h-[285px] overflow-hidden ${
                                    isDark
                                        ? "bg-[#08060e]"
                                        : "bg-zinc-100"
                                }`}
                            >
                                <img
                                    src={past1}
                                    alt="Past DataNexus achievement"
                                    className="h-full w-full object-contain opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* YEAR */}
                                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md">
                                    <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                                        2025
                                    </span>
                                </div>

                                {/* PAST */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                                    <span className="font-poppins text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                                        Past
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                                    <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                                        DataNexus Archive
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 sm:p-7">

                                <div className="mb-7 flex items-center justify-between">
                                    <span className="font-poppins text-xs font-semibold text-purple-400/70">
                                        01
                                    </span>

                                    <span className="text-sm text-zinc-700 transition-colors duration-300 group-hover:text-purple-400">
                                        ↗
                                    </span>
                                </div>

                                <h3
                                    className={`font-poppins text-xl font-bold tracking-tight sm:text-2xl ${
                                        isDark
                                            ? "text-zinc-100"
                                            : "text-[#1a073f]"
                                    }`}
                                >
                                    Technical Paper Presentation
                                </h3>

                                <p
                                    className={`mt-3 font-poppins text-sm leading-7 ${
                                        isDark
                                            ? "text-zinc-500"
                                            : "text-zinc-600"
                                    }`}
                                >
                                    Sana Zakir Shaikh, Talha Siddique and Amrut
                                    Patankar achieved first prize at the
                                    Technical Paper Presentation held at
                                    Pillai HOC College of Engineering &
                                    Technology. Their research excellence
                                    reflects the department's academic strength.
                                </p>

                                <div
                                    className={`mt-6 border-t pt-5 ${
                                        isDark
                                            ? "border-white/[0.07]"
                                            : "border-purple-100"
                                    }`}
                                >
                                    <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400/70">
                                        Result
                                    </p>

                                    <p
                                        className={`mt-2 font-poppins text-sm leading-6 ${
                                            isDark
                                                ? "text-zinc-400"
                                                : "text-zinc-600"
                                        }`}
                                    >
                                        Won 1st Prize
                                    </p>
                                </div>
                            </div>
                        </motion.article>

                        {/* CARD 02 */}
                        <motion.article
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`group overflow-hidden rounded-[26px] border transition-all duration-400 hover:-translate-y-1 ${
                                isDark
                                    ? "border-white/[0.08] bg-white/[0.025] hover:border-purple-400/20 hover:bg-white/[0.04]"
                                    : "border-purple-200/60 bg-white shadow-[0_12px_40px_rgba(26,7,63,0.06)] hover:border-purple-300 hover:shadow-[0_18px_45px_rgba(126,34,206,0.10)]"
                            }`}
                        >
                            <div
                                className={`relative h-[285px] overflow-hidden ${
                                    isDark
                                        ? "bg-[#08060e]"
                                        : "bg-zinc-100"
                                }`}
                            >
                                <img
                                    src={past2}
                                    alt="Past DataNexus achievement"
                                    className="h-full w-full object-contain opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* YEAR */}
                                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md">
                                    <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                                        2025
                                    </span>
                                </div>

                                {/* PAST */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                                    <span className="font-poppins text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                                        Past
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                                    <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                                        DataNexus Archive
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 sm:p-7">

                                <div className="mb-7 flex items-center justify-between">
                                    <span className="font-poppins text-xs font-semibold text-purple-400/70">
                                        02
                                    </span>

                                    <span className="text-sm text-zinc-700 transition-colors duration-300 group-hover:text-purple-400">
                                        ↗
                                    </span>
                                </div>

                                <h3
                                    className={`font-poppins text-xl font-bold tracking-tight sm:text-2xl ${
                                        isDark
                                            ? "text-zinc-100"
                                            : "text-[#1a073f]"
                                    }`}
                                >
                                    SPARK A THON
                                </h3>

                                <p
                                    className={`mt-3 font-poppins text-sm leading-7 ${
                                        isDark
                                            ? "text-zinc-500"
                                            : "text-zinc-600"
                                    }`}
                                >
                                    Our team “The Logic Legends” dominated the
                                    SPARK A THON at FCRIT Vashi, finishing first
                                    among 50+ teams. Their creativity and
                                    teamwork made AIKTC proud on the national
                                    stage.
                                </p>

                                <div
                                    className={`mt-6 border-t pt-5 ${
                                        isDark
                                            ? "border-white/[0.07]"
                                            : "border-purple-100"
                                    }`}
                                >
                                    <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400/70">
                                        Result
                                    </p>

                                    <p
                                        className={`mt-2 font-poppins text-sm leading-6 ${
                                            isDark
                                                ? "text-zinc-400"
                                                : "text-zinc-600"
                                        }`}
                                    >
                                        First Place
                                    </p>
                                </div>
                            </div>
                        </motion.article>

                        {/* CARD 03 */}
                        <motion.article
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.25,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`group overflow-hidden rounded-[26px] border transition-all duration-400 hover:-translate-y-1 ${
                                isDark
                                    ? "border-white/[0.08] bg-white/[0.025] hover:border-purple-400/20 hover:bg-white/[0.04]"
                                    : "border-purple-200/60 bg-white shadow-[0_12px_40px_rgba(26,7,63,0.06)] hover:border-purple-300 hover:shadow-[0_18px_45px_rgba(126,34,206,0.10)]"
                            }`}
                        >
                            <div
                                className={`relative h-[285px] overflow-hidden ${
                                    isDark
                                        ? "bg-[#08060e]"
                                        : "bg-zinc-100"
                                }`}
                            >
                                <img
                                    src={past3}
                                    alt="Past DataNexus achievement"
                                    className="h-full w-full object-contain opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* YEAR */}
                                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md">
                                    <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                                        2025
                                    </span>
                                </div>

                                {/* PAST */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                                    <span className="font-poppins text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                                        Past
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                                    <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                                        DataNexus Archive
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 sm:p-7">

                                <div className="mb-7 flex items-center justify-between">
                                    <span className="font-poppins text-xs font-semibold text-purple-400/70">
                                        03
                                    </span>

                                    <span className="text-sm text-zinc-700 transition-colors duration-300 group-hover:text-purple-400">
                                        ↗
                                    </span>
                                </div>

                                <h3
                                    className={`font-poppins text-xl font-bold tracking-tight sm:text-2xl ${
                                        isDark
                                            ? "text-zinc-100"
                                            : "text-[#1a073f]"
                                    }`}
                                >
                                    DataNexus Members in the Council of SoET
                                </h3>

                                <p
                                    className={`mt-3 font-poppins text-sm leading-7 ${
                                        isDark
                                            ? "text-zinc-500"
                                            : "text-zinc-600"
                                    }`}
                                >
                                    Data Science department boasts active
                                    members in the Council of SoET. Mueez
                                    Hajwani, Maseera Rumani, and Ali Khan served
                                    as key leaders in Bonhomie 2026:
                                    <br />
                                    • Mueez Hajwani (Technical Secretary)
                                    <br />
                                    • Ali Khan (Cultural Secretary)
                                    <br />
                                    • Maseera Rumani (Cultural Secretary)
                                    <br />
                                    Their dedication in technical, cultural,
                                    and documentation roles contributed to the
                                    department's success and recognition.
                                </p>

                                {/* ROLE */}
                                <div
                                    className={`mt-6 border-t pt-5 ${
                                        isDark
                                            ? "border-white/[0.07]"
                                            : "border-purple-100"
                                    }`}
                                >
                                    <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400/70">
                                        Role
                                    </p>

                                    <p
                                        className={`mt-2 font-poppins text-sm leading-6 ${
                                            isDark
                                                ? "text-zinc-400"
                                                : "text-zinc-600"
                                        }`}
                                    >
                                        Council Members & Student Leaders
                                    </p>
                                </div>
                            </div>
                        </motion.article>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default AchievementsPage;