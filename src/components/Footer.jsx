import React from "react";
import { motion } from "framer-motion";

export default function Footer({ variant = "dark" }) {
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
                </svg>
            ),
        },
        {
            name: "Phone",
            href: "tel:+911234567890",
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#080611] px-4 py-14 text-white sm:px-8 lg:px-12">

            {/* subtle atmosphere */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-700/10 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 mx-auto max-w-[1440px] rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:rounded-[40px] sm:p-10 lg:p-14"
            >

                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                    {/* BRAND */}
                    <div className="max-w-xl">
                        <h2 className="font-poppins text-2xl font-extrabold sm:text-3xl">
                            DataNexus Club
                        </h2>

                        <p className="mt-3 max-w-lg font-poppins text-sm leading-6 text-zinc-400">
                            Society for Data Science (S4DS) Student Chapter
                        </p>

                        <p className="mt-1 font-poppins text-xs text-zinc-500">
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
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:bg-purple-600 hover:text-white"
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
                                className="font-poppins text-sm font-semibold text-zinc-400 transition-colors duration-200 hover:text-purple-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>


                {/* COPYRIGHT */}
                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
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
