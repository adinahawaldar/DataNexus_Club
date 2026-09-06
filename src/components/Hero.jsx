import React from 'react';
import Navbar from './Navbar';
import bloomImg from '../assets/bloom.jpg';
import monacoImg from '../assets/monaco.jpg';
import emberlyImg from '../assets/emberly.jpg';

export default function Hero() {
  const works = [
    { id: 'bloom', title: 'Bloom', image: bloomImg },
    { id: 'monaco', title: 'Monaco', image: monacoImg },
    { id: 'emberly', title: 'Emberly', image: emberlyImg },
  ];

  return (
    <div className="relative w-full pb-10 sm:pb-16 bg-neutral-50 text-zinc-900 overflow-hidden">
      {/* Dynamic Ambient Mesh Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[750px] pointer-events-none z-0 overflow-hidden">
        {/* Soft Lavender Ambient Core */}
        <div
          className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.28) 0%, rgba(192, 132, 252, 0.18) 40%, rgba(236, 72, 153, 0.06) 70%, transparent 90%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Top Header Light Accent */}
        <div
          className="absolute -top-40 left-1/3 w-[800px] h-[400px] rounded-full opacity-45"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(232, 121, 249, 0.22) 0%, transparent 75%)',
            filter: 'blur(95px)',
          }}
        />
        {/* Smooth Bottom Ambient Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/20 to-neutral-50" />
      </div>

      {/* Header / Navbar Container */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Hero Central Section */}
        <section className="flex flex-col items-center text-center mt-2 mb-14 w-full">
          {/* Masterpiece Title Layout */}
          <div className="relative flex flex-col items-center justify-center select-none my-2 sm:my-4">
            {/* DATANEXUS Title: Soft Royal Violet Bebas Neue */}
            <h1 className="font-display font-bold text-7xl sm:text-9xl lg:text-[11rem] tracking-wider uppercase leading-none text-center text-[#5b21b6]">
              DATANEXUS
            </h1>

            {/* Overlapping Luminous Cream-to-Violet Cursive Script "Club" */}
            <span
              className="font-script text-6xl sm:text-8xl lg:text-[7.5rem] font-bold tracking-normal transform -rotate-4 -mt-8 sm:-mt-14 lg:-mt-20 z-20 bg-gradient-to-b from-white via-[#fef08a] to-[#d8b4fe] bg-clip-text text-transparent"
              style={{
                filter:
                  'drop-shadow(2px 3px 0px #2a084e) drop-shadow(0px 6px 16px rgba(91, 33, 182, 0.45))',
              }}
            >
              Club
            </span>
          </div>

          {/* Subtitle Description */}
          <p className="font-sans text-lg sm:text-xl font-medium text-zinc-700 leading-relaxed max-w-2xl mx-auto mt-6 tracking-tight">
            Explore AI, data, and innovation through a community that learns by building.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#works"
              className="bg-zinc-950 text-white rounded-full px-8 py-4 text-base font-semibold inline-flex items-center gap-2.5 shadow-xl hover:bg-purple-950 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Explore Our Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="12" y2="4" />
                <polyline points="5,4 12,4 12,11" />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* Selected Works Section - Full Screen Width */}
      <section id="works" className="relative z-10 mt-6 w-full px-2 sm:px-3 lg:px-4">
        {/* Cards Horizontal Scroll Container on Mobile/Tablet & Grid on Desktop with tight gap */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 sm:gap-3 pb-2 no-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 w-full">
          {works.map((work) => (
            <div
              key={work.id}
              className="cursor-pointer group w-[88vw] max-w-[450px] sm:w-[480px] flex-shrink-0 snap-align-start lg:w-full lg:max-w-none lg:flex-shrink"
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden rounded-md shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Card Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
