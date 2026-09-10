'use client';

import React from 'react';

export const ClinicianReviewSection: React.FC = () => {
  return (
    <section id="review" className="relative w-full py-32 px-6 lg:px-12 bg-canvas text-ink border-t border-[rgba(18,23,21,0.13)]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header: The Visual Climax */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[rgba(18,23,21,0.13)]">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                SCENE 12 &middot; CLINICAL GOVERNANCE &middot; CLIMAX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="font-mono text-[10px] tracking-widest text-teal uppercase font-semibold">
                HUMAN-IN-THE-LOOP RESPONSIBILITY
              </span>
            </div>
            
            <h2 className="font-serif italic font-normal text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.98] tracking-tight">
              The model simulates.<br />
              <span className="font-normal not-italic text-graphite">The clinician decides.</span>
            </h2>
            
            <p className="font-sans text-base text-graphite leading-relaxed max-w-[540px] font-normal">
              PRIVAVEDA rejects autonomous prescribing. Algorithmic prediction and legal medical authority 
              are intentionally decoupled into two distinct, auditable spheres.
            </p>
          </div>

          <div className="font-serif italic text-lg text-muted">
            यथा देहः तथा चिकित्सा &mdash; As the body, so the medicine.
          </div>
        </div>

        {/* Dual Architectural Columns: The Model vs The Clinician */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          
          {/* Column 1: The Model Simulates */}
          <div className="space-y-6 pr-0 md:pr-10 border-b md:border-b-0 md:border-r border-[rgba(18,23,21,0.13)] pb-10 md:pb-0">
            <div className="flex items-center justify-between border-b border-[rgba(18,23,21,0.13)] pb-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal font-semibold">
                SYSTEM LAYER &middot; COMPUTATION
              </span>
              <span className="font-mono text-[9px] uppercase px-2 py-0.5 bg-teal/10 text-teal rounded-[2px]">
                DETERMINISTIC
              </span>
            </div>

            <h3 className="font-serif italic font-normal text-3xl text-ink">
              The Model Simulates.
            </h3>

            <p className="font-sans text-sm text-graphite leading-relaxed font-light">
              Calculates physiological dynamics across time, scaling parameters through published clinical evidence.
            </p>

            <ul className="divide-y divide-[rgba(18,23,21,0.1)] text-xs font-mono pt-2">
              <li className="py-3 flex items-start gap-3">
                <span className="text-teal font-bold mt-0.5">01</span>
                <span className="text-graphite font-sans font-normal">
                  Integrates changing serum labs, allometric scaling factors, and genotype (CYP2D6).
                </span>
              </li>
              <li className="py-3 flex items-start gap-3">
                <span className="text-teal font-bold mt-0.5">02</span>
                <span className="text-graphite font-sans font-normal">
                  Solves mechanistic ordinary differential equations (ODEs) over 24-hour therapeutic horizons.
                </span>
              </li>
              <li className="py-3 flex items-start gap-3">
                <span className="text-teal font-bold mt-0.5">03</span>
                <span className="text-graphite font-sans font-normal">
                  Propagates Monte Carlo parameter variance into explicit 90% credible intervals.
                </span>
              </li>
              <li className="py-3 flex items-start gap-3">
                <span className="text-teal font-bold mt-0.5">04</span>
                <span className="text-graphite font-sans font-normal">
                  Asserts deterministic safety bounds and issues automated abstention when inputs degrade.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Clinician Decides */}
          <div className="space-y-6 pl-0 md:pl-10">
            <div className="flex items-center justify-between border-b border-[rgba(18,23,21,0.13)] pb-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink font-semibold">
                HUMAN SPECIALIST &middot; CLINICAL JUDGMENT
              </span>
              <span className="font-mono text-[9px] uppercase px-2 py-0.5 bg-ink text-canvas rounded-[2px]">
                LEGAL AUTHORITY
              </span>
            </div>

            <h3 className="font-serif italic font-normal text-3xl text-ink">
              The Clinician Decides.
            </h3>

            <p className="font-sans text-sm text-graphite leading-relaxed font-light">
              Synthesizes bedside physical examination, fluid status, and clinical acuity with simulation projections.
            </p>

            <ul className="divide-y divide-[rgba(18,23,21,0.1)] text-xs font-mono pt-2">
              <li className="py-3 flex items-start gap-3">
                <span className="text-ink font-bold mt-0.5">01</span>
                <span className="text-graphite font-sans font-normal">
                  Evaluates patient hemodynamic stability, fluid retention, and qualitative bedside presentation.
                </span>
              </li>
              <li className="py-3 flex items-start gap-3">
                <span className="text-ink font-bold mt-0.5">02</span>
                <span className="text-graphite font-sans font-normal">
                  Compares alternative dosing scenarios (e.g. 100mg standard QD vs 50mg divided BID).
                </span>
              </li>
              <li className="py-3 flex items-start gap-3">
                <span className="text-ink font-bold mt-0.5">03</span>
                <span className="text-graphite font-sans font-normal">
                  Authorizes medication orders directly into hospital electronic health record systems.
                </span>
              </li>
              <li className="py-3 flex items-start gap-3">
                <span className="text-ink font-bold mt-0.5">04</span>
                <span className="text-graphite font-sans font-normal">
                  Signs immutable cryptographic audit records documenting rationale and simulated risk review.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Cryptographic Decision Ledger / Audit Record */}
        <div className="bg-[#E9E5DB] border border-[rgba(18,23,21,0.13)] p-6 sm:p-8 space-y-4 rounded-[2px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(18,23,21,0.1)] pb-4">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
              IMMUTABLE AUDIT PROVENANCE &middot; STATE SPECIFICATION
            </span>
            <span className="font-mono text-[11px] text-teal">
              SHA-256 HASH CHAIN ACTIVE
            </span>
          </div>

          <div className="bg-[#F4F1E9] border border-[rgba(18,23,21,0.1)] p-4 font-mono text-xs text-graphite space-y-1.5 overflow-x-auto leading-relaxed">
            <div><span className="text-muted">[RECORD_ID]</span> 0xPV-CASE-01-2026-9041A | PATIENT: case-1 | eGFR: 38 mL/min | CYP2D6: 0.5</div>
            <div><span className="text-muted">[ODE_STATE]</span> SOLVER: SciPy solve_ivp | MCMC: 80 samples | C_MAX: 1.87 mg/L | T_MAX: 3.5h | AUC: 21.4 mg*h/L</div>
            <div><span className="text-muted">[GATE_TEST]</span> STATUS: REVIEWABLE_ZERO_BLOCKS | AUDIT_STAMP: 0xPV-7E3B1C-SEC | LAB_AGE: 4.2h</div>
            <div className="text-teal font-semibold pt-1 border-t border-[rgba(18,23,21,0.1)]">
              [CLINICIAN_AUTH] Dr. Reviewer, PharmD &mdash; Regimen Confirmed &amp; Transmitted to Hospital EHR
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
