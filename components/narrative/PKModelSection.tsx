'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { WebGLFallback } from '@/three/canvas/WebGLFallback';

const MainCanvas = dynamic(
  () => import('@/three/canvas/MainCanvas').then((mod) => mod.MainCanvas),
  { ssr: false, loading: () => <WebGLFallback /> }
);
const CompartmentScene = dynamic(
  () => import('@/three/scenes/CompartmentScene').then((mod) => mod.CompartmentScene),
  { ssr: false }
);

export const PKModelSection: React.FC = () => {
  const [modelType, setModelType] = useState<'1-Compartment' | '2-Compartment'>('1-Compartment');

  return (
    <section id="pk-model" className="w-full py-24 px-6 sm:px-10 lg:px-16 bg-canvas border-b border-[rgba(17,21,19,0.12)]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase block">
              06 / MECHANISTIC PHARMACOKINETICS
            </span>
            <div className="w-12 h-[1px] bg-ink/20 mt-2 mb-4" />
            <p className="font-mono text-xs text-graphite uppercase tracking-wide">
              Coupled Fluid Compartments
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-ink tracking-tight leading-[1.05]">
              The body becomes<br />
              <span className="italic font-light text-graphite">a dynamic system.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-graphite max-w-2xl leading-relaxed font-normal">
              The geometry is the explanation. Pharmacokinetic modeling transforms anatomy into 
              interconnected distribution volumes and mass transfer flux rates.
            </p>
          </div>
        </div>

        {/* Studio Viewport & Model Architecture Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Precision Fluid Chambers */}
          <div className="lg:col-span-8 h-[460px] sm:h-[520px] w-full border border-[rgba(18,23,21,0.13)] bg-[#E9E5DB]/40 relative">
            {/* Architectural Schematic Annotations */}
            <div className="absolute top-4 left-4 z-10 space-y-0.5">
              <div className="text-[10px] font-mono tracking-widest text-teal uppercase font-semibold">
                &mdash;&mdash; ILLUSTRATIVE COMPARTMENT MODEL
              </div>
              <div className="text-[9px] font-mono text-muted uppercase">
                V₁ (Central) &middot; V₂ (Peripheral) &middot; CL (Clearance) &middot; Q (Flux)
              </div>
            </div>

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button
                onClick={() => setModelType('1-Compartment')}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-[2px] transition-colors ${
                  modelType === '1-Compartment'
                    ? 'bg-ink text-canvas font-semibold'
                    : 'text-graphite hover:text-ink'
                }`}
              >
                1-Compartment
              </button>
              <button
                onClick={() => setModelType('2-Compartment')}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-[2px] transition-colors ${
                  modelType === '2-Compartment'
                    ? 'bg-ink text-canvas font-semibold'
                    : 'text-graphite hover:text-ink'
                }`}
              >
                2-Compartment
              </button>
            </div>

            <MainCanvas cameraPosition={[0, 0, 4.8]}>
              <CompartmentScene modelType={modelType} />
            </MainCanvas>

            {/* Industrial Fluid Labels */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-muted uppercase">
              <span>Depot &rarr; k_a</span>
              <span>Central V₁ &harr; Peripheral V₂ (Q)</span>
              <span>Elimination (CL) &rarr; Sink</span>
            </div>
          </div>

          {/* Right: Analytical Equations & Integrated Telemetry */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-teal font-semibold uppercase">
                MASS BALANCE FORMULATION
              </span>
              <h4 className="font-serif text-2xl font-normal text-ink">
                Linear Differential Balance
              </h4>
              <p className="text-xs font-sans text-graphite leading-relaxed font-normal">
                Rate of concentration change within central volume V₁ is governed by mucosal input, 
                intercompartmental clearance, and irreversible elimination.
              </p>
            </div>

            {/* Integrated Equation (No generic card box) */}
            <div className="py-4 border-t border-b border-[rgba(18,23,21,0.13)] space-y-2 font-mono text-xs">
              <div className="text-ink font-semibold text-sm">
                dA₁/dt = input &minus; distribution &minus; elimination
              </div>
              <div className="text-graphite text-[11px] pt-1">
                dA₁/dt = k_a &middot; A_depot &minus; (CL / V₁) &middot; A₁ &minus; (Q / V₁) &middot; A₁ + (Q / V₂) &middot; A₂
              </div>
              <div className="text-[10px] text-muted italic pt-1">
                ILLUSTRATIVE MODEL &middot; Do not imply visualization is complete production engine
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-muted">
              <div className="flex justify-between border-b border-[rgba(18,23,21,0.08)] pb-1.5">
                <span>Central Distribution Volume V₁</span>
                <span className="text-ink font-semibold tabular-nums">28.4 L</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(18,23,21,0.08)] pb-1.5">
                <span>Peripheral Volume V₂</span>
                <span className="text-ink font-semibold tabular-nums">15.3 L</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(18,23,21,0.08)] pb-1.5">
                <span>Systemic Clearance CL</span>
                <span className="text-ink font-semibold tabular-nums">1.48 L/h</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(18,23,21,0.08)] pb-1.5">
                <span>Intercompartmental Clearance Q</span>
                <span className="text-ink font-semibold tabular-nums">0.82 L/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
