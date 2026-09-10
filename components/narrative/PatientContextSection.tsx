'use client';

import React from 'react';

export const PatientContextSection: React.FC = () => {
  return (
    <section id="patient-context" className="w-full py-28 px-6 sm:px-10 lg:px-16 bg-canvas border-b border-[rgba(18,23,21,0.13)]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase block">
              02 / PATIENT CONTEXT
            </span>
            <div className="w-12 h-[1px] bg-ink/20 mt-2 mb-4" />
            <p className="font-mono text-xs text-graphite uppercase tracking-wide">
              Context Shapes Review
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-ink tracking-tight leading-[1.05]">
              The same medicine can require<br />
              <span className="italic font-light text-graphite">a different conversation.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-graphite max-w-[540px] leading-relaxed font-normal">
              A standard dose creates widely disparate circulating concentrations across individuals. 
              The clinician must connect changing laboratories, concurrent therapies, and metabolic genetics 
              with model predictions.
            </p>
          </div>
        </div>

        {/* Spatial Telemetry Matrix with Hairline Leader Lines — Not Generic Box Cards */}
        <div className="border-t border-[rgba(18,23,21,0.13)] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 5 Cols: Patient Physiological State Schematic */}
            <div className="lg:col-span-5 space-y-6 pr-0 lg:pr-8 lg:border-r border-[rgba(18,23,21,0.13)]">
              <div className="text-[10px] font-mono tracking-[0.2em] text-teal uppercase font-semibold">
                PATIENT RECORD &middot; SYNTHETIC INDEX CASE
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-snug">
                Case 01: Type 2 Diabetes with CKD Stage 3b
              </h3>
              <p className="font-sans text-xs sm:text-sm text-graphite leading-relaxed font-light">
                Impaired glomerular filtration combined with intermediate CYP2D6 metabolizer status extends systemic half-life. 
                Standard population dosing would accumulate toward renal tubular toxicity.
              </p>

              <div className="p-4 bg-[#E9E5DB]/70 border-l-2 border-teal space-y-1">
                <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
                  PHYSIOLOGICAL DERIVATION
                </span>
                <p className="font-mono text-xs text-ink">
                  CL_renal = 1.48 L/h &middot; V₁ = 28.4 L &middot; Half-life = 20.7h
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Spatial Arrangement of the 6 Concrete Inputs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              
              {/* 01: Age */}
              <div className="p-5 border-b border-[rgba(18,23,21,0.12)] space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase">
                  <span>INPUT 01 &middot; DEMOGRAPHICS</span>
                  <span className="text-graphite font-semibold">BIOMETRIC</span>
                </div>
                <div className="text-2xl font-serif text-ink">
                  64 <span className="text-sm font-sans text-graphite font-normal">Years</span>
                </div>
                <p className="text-[11px] font-sans text-muted leading-tight">
                  Chronological age reduces nephron reserve and baseline physiological clearance.
                </p>
              </div>

              {/* 02: Weight */}
              <div className="p-5 border-b border-[rgba(18,23,21,0.12)] space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase">
                  <span>INPUT 02 &middot; BODY HABITUS</span>
                  <span className="text-graphite font-semibold">ALLOMETRIC</span>
                </div>
                <div className="text-2xl font-serif text-ink tabular-nums">
                  68.0 <span className="text-sm font-sans text-graphite font-normal">kg</span>
                </div>
                <p className="text-[11px] font-sans text-muted leading-tight">
                  Scales central volume V₁: (68 / 70)^1.0 and clearance: (68 / 70)^0.75.
                </p>
              </div>

              {/* 03: Serum Creatinine / eGFR */}
              <div className="p-5 border-b border-[rgba(18,23,21,0.12)] space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase">
                  <span>INPUT 03 &middot; RENAL FILTRATION</span>
                  <span className="text-teal font-semibold">CRITICAL</span>
                </div>
                <div className="text-2xl font-serif text-ink tabular-nums">
                  1.82 <span className="text-sm font-sans text-graphite font-normal">mg/dL</span>
                  <span className="text-xs font-mono text-muted ml-2">(eGFR 38)</span>
                </div>
                <p className="text-[11px] font-sans text-muted leading-tight">
                  Indicates Stage 3b renal impairment; tubular clearance reduced by 48%.
                </p>
              </div>

              {/* 04: Current Medicine & Regimen */}
              <div className="p-5 border-b border-[rgba(18,23,21,0.12)] space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase">
                  <span>INPUT 04 &middot; PHARMACOTHERAPY</span>
                  <span className="text-graphite font-semibold">REGIMEN</span>
                </div>
                <div className="text-xl font-serif text-ink">
                  Gentamicin <span className="text-sm font-sans text-graphite font-normal">5 mg/kg</span>
                </div>
                <p className="text-[11px] font-sans text-muted leading-tight">
                  Narrow therapeutic index aminoglycoside with steep nephrotoxicity gradient.
                </p>
              </div>

              {/* 05: Administration Time */}
              <div className="p-5 border-b border-[rgba(18,23,21,0.12)] space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase">
                  <span>INPUT 05 &middot; TEMPORAL ANCHOR</span>
                  <span className="text-graphite font-semibold">SYNCHRONIZED</span>
                </div>
                <div className="text-xl font-serif text-ink tabular-nums">
                  08:00 UTC <span className="text-xs font-mono text-muted">(T = 0.0h)</span>
                </div>
                <p className="text-[11px] font-sans text-muted leading-tight">
                  Single daily infusion start time anchored for steady-state trajectory solving.
                </p>
              </div>

              {/* 06: Selected Measurement Event (Focal Point for Transition) */}
              <div className="p-5 border-b-2 border-teal bg-[#E9E5DB]/80 space-y-2 sm:col-span-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-teal uppercase font-bold">
                  <span>INPUT 06 &middot; TDM OBSERVATION</span>
                  <span className="px-1.5 py-0.5 bg-teal text-white text-[9px] font-mono uppercase">
                    ISOLATED LEVEL
                  </span>
                </div>
                <div className="text-3xl font-serif text-ink tabular-nums">
                  2.41 <span className="text-sm font-sans text-graphite font-normal">mg/L</span>
                </div>
                <p className="text-[11px] font-sans text-graphite leading-tight font-medium">
                  Observed trough concentration at T = 12.0h. Isolates to update prior distribution.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
