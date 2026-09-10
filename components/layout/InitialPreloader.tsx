'use client';

import React, { useEffect, useState } from 'react';

export const InitialPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => setHidden(true), 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#F4F1E9] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="w-64 space-y-4 text-center">
        <div className="space-y-1">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#121715] font-bold block">
            PRIVAVEDA
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#747C78] block">
            MODEL INITIALIZATION &middot; {progress}%
          </span>
        </div>

        <div className="w-full h-[1px] bg-[rgba(18,23,21,0.12)] relative overflow-hidden">
          <div
            className="h-full bg-[#236E67] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="font-mono text-[8px] tracking-widest uppercase text-[#747C78]">
          CALIBRATING PHARMACOKINETIC ODE ENGINE
        </div>
      </div>
    </div>
  );
};
