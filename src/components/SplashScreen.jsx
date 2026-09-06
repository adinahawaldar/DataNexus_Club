import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Start fade out transition after 2.2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2200);

    // Completely unmount splash screen after transition (2.8 seconds)
    const finishTimer = setTimeout(() => {
      setIsDone(true);
      if (onFinish) onFinish();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-white z-[99999] flex flex-col justify-end p-10 box-border transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFading ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto'
      }`}
    >
      {/* Large Horizontal Text in the Bottom */}
      <div className="w-full overflow-hidden">
        <h1 className="font-sans text-[clamp(28px,6vw,76px)] font-extrabold text-zinc-950 tracking-tight uppercase leading-[1.05] m-0 animate-[splashTextSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          WELCOME TO DATA NEXUS CLUB
        </h1>
      </div>
    </div>
  );
}
