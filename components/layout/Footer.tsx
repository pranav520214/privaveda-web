'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F4F1E9] text-[#121715] border-t border-[rgba(18,23,21,0.13)] pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section 53: Return to Ivory with Slowly Moving Scientific Object */}
        <div className="border-b border-[rgba(18,23,21,0.13)] pb-20 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="space-y-6 max-w-3xl">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#747C78] block">
                CLOSING PRINCIPLE &middot; EPILOGUE
              </span>
              <h3 className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-[#121715] tracking-tight leading-[1.04]">
                Start with one medicine.<br />
                Prove it carefully.
              </h3>
              <div className="font-serif italic text-xl sm:text-2xl text-[#236E67] font-light">
                यथा देहः तथा चिकित्सा &mdash; As the body, so the medicine.
              </div>
            </div>

            {/* Precision Scientific Object: Slowly Rotating Dual-Axis Calibration Reticle */}
            <div className="relative w-36 h-36 shrink-0 flex items-center justify-center select-none" aria-hidden="true">
              {/* Outer Slow Vernier Ticks */}
              <svg
                viewBox="0 0 120 120"
                className="w-36 h-36 animate-spin [animation-duration:40s]"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#121715"
                  strokeWidth="0.75"
                  strokeDasharray="2 4"
                  strokeOpacity="0.3"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke="#236E67"
                  strokeWidth="0.5"
                  strokeDasharray="1 6"
                  strokeOpacity="0.4"
                />
                <circle
                  cx="60"
                  cy="6"
                  r="1.5"
                  fill="#236E67"
                />
                <circle
                  cx="60"
                  cy="114"
                  r="1.5"
                  fill="#236E67"
                />
              </svg>

              {/* Counter-rotating Inner Micro Ticks */}
              <svg
                viewBox="0 0 120 120"
                className="absolute inset-0 w-36 h-36 animate-spin [animation-duration:24s] [animation-direction:reverse]"
              >
                <line x1="60" y1="20" x2="60" y2="28" stroke="#121715" strokeWidth="0.8" strokeOpacity="0.4" />
                <line x1="60" y1="92" x2="60" y2="100" stroke="#121715" strokeWidth="0.8" strokeOpacity="0.4" />
                <line x1="20" y1="60" x2="28" y2="60" stroke="#121715" strokeWidth="0.8" strokeOpacity="0.4" />
                <line x1="92" y1="60" x2="100" y2="60" stroke="#121715" strokeWidth="0.8" strokeOpacity="0.4" />
              </svg>

              {/* Center Restrained Focal Reticle */}
              <div className="absolute w-2 h-2 rounded-full border border-[#236E67] bg-[#F4F1E9]" />
              <div className="absolute w-1 h-1 rounded-full bg-[#121715]" />
            </div>
          </div>
        </div>

        {/* Brand & Mandate Callout */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-10 border-b border-[rgba(18,23,21,0.13)]">
          <div>
            <span className="font-mono text-base tracking-[0.25em] text-[#121715] font-bold uppercase block">
              PRIVAVEDA
            </span>
            <p className="font-sans text-xs text-[#747C78] mt-1">
              Patient-specific simulation. Clinician-led review.
            </p>
          </div>
          <div className="font-mono text-xs text-[#236E67] uppercase tracking-wider">
            Motto: The model simulates. The clinician decides.
          </div>
        </div>

        {/* 4-Column Quiet Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-xs font-mono">
          
          {/* Col 1: System Purpose */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#747C78] block">
              SYSTEM PHILOSOPHY
            </span>
            <p className="font-sans text-xs text-[#38413D] leading-relaxed font-normal">
              Patient-specific pharmacokinetic simulation and clinician-led review platform.
              Coupling mechanistic ODE solvers with Monte Carlo uncertainty.
            </p>
            <div className="text-[11px] text-[#236E67] italic font-serif">
              यथा देहः तथा चिकित्सा &mdash; As the body, so the medicine.
            </div>
          </div>

          {/* Col 2: Project Leadership */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#747C78] block">
              PROJECT LEADERSHIP
            </span>
            <div>
              <p className="text-[#121715] font-medium font-sans">Pranav Kumar Mishra</p>
              <p className="text-xs text-[#747C78] mt-0.5">Team Lead / Project Lead</p>
              <p className="text-[11px] text-[#747C78]">Software Architecture &amp; Quantitative Simulation</p>
            </div>
            <div className="pt-1 text-[10px] text-[#236E67]">
              Theme: Healthcare &amp; HealthTech
            </div>
          </div>

          {/* Col 3: UN SDG Alignment */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#747C78] block">
              SUSTAINABLE DEVELOPMENT
            </span>
            <div className="space-y-2 text-[11px] text-[#38413D]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-[#4C9F38] text-white flex items-center justify-center font-bold text-[10px] rounded-[1px]">
                  3
                </span>
                <span>Good Health &amp; Well-Being</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-[#FD6925] text-white flex items-center justify-center font-bold text-[10px] rounded-[1px]">
                  9
                </span>
                <span>Industry, Innovation &amp; Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Col 4: Top Navigation & Architecture */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#747C78] block">
              ARCHITECTURE
            </span>
            <p className="text-[11px] text-[#747C78] leading-relaxed">
              AIR-GAPPED ON-PREMISE CONTAINER DEPLOYMENT &middot; ZERO EXTERNAL TELEMETRY
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#236E67] hover:text-[#121715] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-[rgba(18,23,21,0.13)] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#747C78]">
          <p>
            &copy; {new Date().getFullYear()} PRIVAVEDA RESEARCH &middot; ALL SIMULATED METRICS SYNTHETIC FOR DEMONSTRATION
          </p>
          <p className="tracking-widest uppercase text-[#236E67]">
            &ldquo;THE MODEL SIMULATES. THE CLINICIAN DECIDES.&rdquo;
          </p>
        </div>

      </div>
    </footer>
  );
};
