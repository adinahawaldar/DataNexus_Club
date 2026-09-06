import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JoinCommunity() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const collagePhotos = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="join" className="relative w-full pt-32 sm:pt-44 pb-24 sm:pb-32 bg-white text-zinc-900 select-none overflow-hidden">
      {/* Highly Visible Event Photo Collage Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-95 sm:opacity-100">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-full w-full">
          {collagePhotos.map((photo, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <img
                src={photo}
                alt="DataNexus Event Collage"
                className="w-full h-full object-cover brightness-100 contrast-105 transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
        {/* Seamless Blend: Top Fade to White */}
        <div className="absolute top-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none z-10" />
        {/* Seamless Blend: Bottom Fade to White */}
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Floating Center Card in Brand Theme */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/95 backdrop-blur-2xl rounded-[32px] p-8 sm:p-12 border border-white/90 shadow-[0_25px_60px_rgba(26,7,63,0.18)] text-center flex flex-col items-center"
        >
          {/* Clean, Compact Headline in Purple font-sans */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-purple-700 tracking-tight leading-tight mb-3">
            Ready to shape the future of AI & Data Science?
          </h2>

          <p className="text-zinc-700 font-medium text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            Join DataNexus Club today to build real projects, participate in hackathons, and connect with fellow developers.
          </p>

          {/* Email Subscription Input Box */}
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3 w-full"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your college email address..."
                    className="w-full bg-white border border-purple-200 rounded-full px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1a073f] text-white rounded-full px-7 py-3.5 text-sm font-semibold whitespace-nowrap shadow-lg hover:bg-[#1a073f] active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Join Community
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-purple-50 border border-purple-200 rounded-2xl p-4 sm:p-5 text-center text-[#1a073f]"
                >
                  <div className="inline-flex items-center gap-2 text-sm font-bold mb-1 text-purple-950">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                    Welcome to DataNexus Club!
                  </div>
                  <p className="text-xs sm:text-sm text-purple-900 font-medium">
                    We've sent a welcome guide and event invite to <span className="font-semibold">{email}</span>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
