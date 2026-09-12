import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import AchievementsHero from "../components/AchievementsHero";
import Footer from "../components/Footer";

function AchievementsPage() {
    const achievements = [
        {
            number: "01",
            title: "Hackathons",
            description:
                "Collaborating, competing, and building practical solutions through technical challenges and hackathons.",
            image: "/achievements/achievement1.jpeg",
        },
        {
            number: "02",
            title: "Technical Projects",
            description:
                "Turning ideas into real projects while learning AI, data science, development, and problem solving.",
            image: "/achievements/achievement2.jpeg",
        },
        {
            number: "03",
            title: "Community Impact",
            description:
                "Creating a stronger student community through workshops, teamwork, knowledge sharing, and innovation.",
            image: "/achievements/achievement3.jpeg",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0b0813] text-white">

            {/* NAVBAR */}
            <Navbar variant="dark" />

            {/* HERO */}
            <AchievementsHero />

            {/* ================= EXPLORE ACHIEVEMENTS ================= */}
            <section
                id="achievement-highlights"
                className="relative overflow-hidden bg-[#0b0813] px-6 py-24 sm:px-10 lg:px-16"
            >
                <div className="mx-auto max-w-[1440px]">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7 }}
                        className="mb-12"
                    >
                        <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                            Explore Our Journey
                        </p>

                        <h2 className="max-w-3xl font-poppins text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Moments that
                            <span className="text-purple-400">
                                {" "}made an impact.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-zinc-400 sm:text-base">
                            Every event, project, and collaboration becomes a
                            part of our journey. These moments represent the
                            creativity, teamwork, and growth of DataNexus.
                        </p>
                    </motion.div>


                    {/* Achievement Cards */}
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
                                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.06]"
                            >

                                {/* IMAGE */}
                                <div className="relative h-[300px] overflow-hidden">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Number */}
                                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                                        <span className="font-poppins text-xs font-bold text-white">
                                            {achievement.number}
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a073f] transition-all duration-300 group-hover:rotate-12">
                                        ↗
                                    </div>
                                </div>


                                {/* CONTENT */}
                                <div className="p-7">

                                    <h3 className="font-poppins text-2xl font-bold text-white">
                                        {achievement.title}
                                    </h3>

                                    <p className="mt-3 font-poppins text-sm leading-7 text-zinc-400">
                                        {achievement.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
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
    className="relative overflow-hidden bg-[#0b0813] px-6 pb-24 pt-20 text-white sm:px-10 sm:pb-28 sm:pt-24 lg:px-16"
>
    <div className="mx-auto max-w-[1440px]">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >

            <div className="max-w-2xl">

                {/* Small eyebrow */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-purple-400/50" />

                    <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        Looking Back
                    </p>
                </div>

                {/* Main heading */}
                <h2 className="font-poppins text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                    Past{" "}
                    <span className="text-zinc-400">
                        Achievements.
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-xl font-poppins text-sm leading-7 text-zinc-500 sm:text-base">
                    Milestones, experiences, and moments that helped shape
                    the journey of DataNexus.
                </p>
            </div>


            {/* Archive label */}
            <div className="hidden shrink-0 items-center gap-3 md:flex">
                <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    Our Archive
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <span className="text-sm text-zinc-500">
                        ↘
                    </span>
                </div>
            </div>
        </motion.div>


        {/* ================= PAST ACHIEVEMENT CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">


            {/* ================= CARD 01 ================= */}
            <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                    duration: 0.65,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="group overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] transition-all duration-400 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]"
            >

                {/* Image area */}
                <div className="relative h-[285px] overflow-hidden bg-[#08060e]">

                    <img
                        src="/achievements/past1.jpeg"
                        alt="Past DataNexus achievement"
                        className="h-full w-full object-contain opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                    />

                    {/* Soft overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Year badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md">
                        <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                            2025
                        </span>
                    </div>

                    {/* Past badge */}
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                        <span className="font-poppins text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                            Past
                        </span>
                    </div>

                    {/* Bottom image label */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                        <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                            DataNexus Archive
                        </span>
                    </div>
                </div>


                {/* Content */}
                <div className="p-6 sm:p-7">

                    {/* Number + arrow */}
                    <div className="mb-7 flex items-center justify-between">
                        <span className="font-poppins text-xs font-semibold text-purple-400/70">
                            01
                        </span>

                        <span className="text-sm text-zinc-700 transition-colors duration-300 group-hover:text-purple-400">
                            ↗
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                        Past Achievement 01
                    </h3>

                    {/* Description */}
                    <p className="mt-3 font-poppins text-sm leading-7 text-zinc-500">
                        Add the short description of this achievement or
                        event here.
                    </p>

                    {/* Result */}
                    <div className="mt-6 border-t border-white/[0.07] pt-5">
                        <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400/70">
                            Result
                        </p>

                        <p className="mt-2 font-poppins text-sm leading-6 text-zinc-400">
                            Add the achievement result here.
                        </p>
                    </div>
                </div>
            </motion.article>


            {/* ================= CARD 02 ================= */}
            <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                    duration: 0.65,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="group overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] transition-all duration-400 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]"
            >

                {/* Image area */}
                <div className="relative h-[285px] overflow-hidden bg-[#08060e]">

                    <img
                        src="/achievements/past2.jpeg"
                        alt="Past DataNexus achievement"
                        className="h-full w-full object-contain opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                    />

                    {/* Soft overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Year badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md">
                        <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                            2025
                        </span>
                    </div>

                    {/* Past badge */}
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                        <span className="font-poppins text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                            Past
                        </span>
                    </div>

                    {/* Bottom image label */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                        <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                            DataNexus Archive
                        </span>
                    </div>
                </div>


                {/* Content */}
                <div className="p-6 sm:p-7">

                    {/* Number + arrow */}
                    <div className="mb-7 flex items-center justify-between">
                        <span className="font-poppins text-xs font-semibold text-purple-400/70">
                            02
                        </span>

                        <span className="text-sm text-zinc-700 transition-colors duration-300 group-hover:text-purple-400">
                            ↗
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                        Past Achievement 02
                    </h3>

                    {/* Description */}
                    <p className="mt-3 font-poppins text-sm leading-7 text-zinc-500">
                        Add the short description of this achievement or
                        event here.
                    </p>

                    {/* Result */}
                    <div className="mt-6 border-t border-white/[0.07] pt-5">
                        <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400/70">
                            Result
                        </p>

                        <p className="mt-2 font-poppins text-sm leading-6 text-zinc-400">
                            Add the achievement result here.
                        </p>
                    </div>
                </div>
            </motion.article>


            {/* ================= CARD 03 ================= */}
            <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                    duration: 0.65,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="group overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] transition-all duration-400 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]"
            >

                {/* Image area */}
                <div className="relative h-[285px] overflow-hidden bg-[#08060e]">

                    <img
                        src="/achievements/past3.jpeg"
                        alt="Past DataNexus achievement"
                        className="h-full w-full object-contain opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                    />

                    {/* Soft overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Year badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md">
                        <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                            2024
                        </span>
                    </div>

                    {/* Past badge */}
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                        <span className="font-poppins text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                            Past
                        </span>
                    </div>

                    {/* Bottom image label */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                        <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                            DataNexus Archive
                        </span>
                    </div>
                </div>


                {/* Content */}
                <div className="p-6 sm:p-7">

                    {/* Number + arrow */}
                    <div className="mb-7 flex items-center justify-between">
                        <span className="font-poppins text-xs font-semibold text-purple-400/70">
                            03
                        </span>

                        <span className="text-sm text-zinc-700 transition-colors duration-300 group-hover:text-purple-400">
                            ↗
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                        Past Achievement 03
                    </h3>

                    {/* Description */}
                    <p className="mt-3 font-poppins text-sm leading-7 text-zinc-500">
                        Add the short description of this achievement or
                        event here.
                    </p>

                    {/* Result */}
                    <div className="mt-6 border-t border-white/[0.07] pt-5">
                        <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400/70">
                            Result
                        </p>

                        <p className="mt-2 font-poppins text-sm leading-6 text-zinc-400">
                            Add the achievement result here.
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