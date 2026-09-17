import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
    const { isDark } = useTheme();

    const navLinks = [
        { label: "Home", href: "#/" },
        { label: "Teams", href: "#/teams" },
        { label: "Events", href: "#/events" },
        { label: "Achievements", href: "#/achievements" },
        { label: "About", href: "#/about" },
        { label: "S4DS Chapter", href: "https://s4ds.org/" },
    ];

    const socialHandles = [
        {
            name: "Instagram",
            href: "https://instagram.com",
            icon: (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            icon: (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            name: "WhatsApp",
            href: "https://whatsapp.com",
            icon: (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347" />
                    <path d="M12 2a10 10 0 0 0-8.52 15.22L2 22l4.9-1.43A10 10 0 1 0 12 2zm0 18a7.96 7.96 0 0 1-4.07-1.12l-.29-.17-3.03.89.89-2.95-.19-.31A7.97 7.97 0 1 1 12 20z" />
                </svg>
            ),
        },
    ];

    return (
        <footer
            className={`relative overflow-hidden px-4 py-14 select-none transition-colors duration-500 ${
                isDark ? "bg-[#080611] text-white" : "bg-[#faf8fd] text-zinc-900"
            }`}
        >
            {/* subtle atmosphere */}
            <div
                className={`pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl ${
                    isDark ? "bg-purple-700/10" : "bg-purple-300/30"
                }`}
            />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7 }}
                className={`relative z-10 mx-auto max-w-[1440px] rounded-[32px] border p-7 backdrop-blur-sm sm:rounded-[40px] sm:p-10 lg:p-14 ${
                    isDark
                        ? "border-white/10 bg-white/[0.04]"
                        : "border-zinc-200/90 bg-white/90 shadow-xl"
                }`}
            >
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    {/* BRAND */}
                    <div className="max-w-xl">
                        <h2
                            className={`font-poppins text-2xl font-extrabold sm:text-3xl ${
                                isDark ? "text-white" : "text-[#1a073f]"
                            }`}
                        >
                            DataNexus Club
                        </h2>

                        <p
                            className={`mt-3 max-w-lg font-poppins text-sm leading-6 ${
                                isDark ? "text-zinc-400" : "text-zinc-600"
                            }`}
                        >
                            Society for Data Science (S4DS) Student Chapter
                        </p>

                        <p
                            className={`mt-1 font-poppins text-xs ${
                                isDark ? "text-zinc-500" : "text-zinc-500"
                            }`}
                        >
                            Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC)
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="mt-6 flex items-center gap-3">
                            {socialHandles.map((handle) => (
                                <a
                                    key={handle.name}
                                    href={handle.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={handle.name}
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                                        isDark
                                            ? "border-white/10 bg-white/5 text-zinc-300 hover:bg-purple-600 hover:text-white"
                                            : "border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-purple-600 hover:text-white shadow-xs"
                                    }`}
                                >
                                    {handle.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 lg:max-w-xl lg:justify-end">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : "_self"}
                                rel={
                                    link.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className={`font-poppins text-sm font-semibold transition-colors duration-200 ${
                                    isDark
                                        ? "text-zinc-400 hover:text-purple-400"
                                        : "text-zinc-700 hover:text-purple-700"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div
                    className={`mt-10 flex flex-col gap-3 border-t pt-7 text-xs sm:flex-row sm:items-center sm:justify-between ${
                        isDark
                            ? "border-white/10 text-zinc-500"
                            : "border-zinc-200 text-zinc-600"
                    }`}
                >
                    <p>
                        © 2026 DataNexus Club • AIKTC. All rights reserved.
                    </p>

                    <p>
                        Built with ❤️ by DataNexus Student Developers
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}
