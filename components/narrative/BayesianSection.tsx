'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { WebGLFallback } from '@/three/canvas/WebGLFallback';
import { computeBayesianUpdate } from '@/lib/simulation/bayesian';

const MainCanvas = dynamic(
  () => import('@/three/canvas/MainCanvas').then((mod) => mod.MainCanvas),
  { ssr: false, loading: () => <WebGLFallback /> }
);
const BayesianSurfaceScene = dynamic(
  () => import('@/three/scenes/BayesianSurfaceScene').then((mod) => mod.BayesianSurfaceScene),
  { ssr: false }
);

export const BayesianSection: React.FC = () => {
  const [hasObservation, setHasObservation] = useState<boolean>(true);

  const bayesianResult = computeBayesianUpdate(
    1.45,
    0.35,
    1.85,
    0.12,
    3.5
  );

  return (
    <section id="bayesian" className="w-full py-28 px-6 sm:px-10 lg:px-16 bg-comp-bg text-[#EEEAE1] border-b border-comp-border">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono tracking-widest text-teal-soft uppercase block">
              08 / BAYESIAN INFERENCE
            </span>
            <div className="w-12 h-[1px] bg-white/20 mt-2 mb-4" />
            <p className="font-mono text-xs text-muted uppercase tracking-wide">
              Conjugate Posterior Update
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.96]">
              New evidence<br />
              <span className="italic font-light text-[#AFCAC4]">changes the model.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted max-w-2xl leading-relaxed font-normal">
              As new serum concentrations arrive, the system updates its parameter estimates 
              rather than treating initial population predictions as permanent.
            </p>
          </div>
        </div>

        {/* 3D Computational Sculpture Viewport & Mathematical Readout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Probability Surface */}
          <div className="lg:col-span-8 h-[460px] sm:h-[520px] w-full border border-comp-border bg-[#030807] relative">
            <div className="absolute top-4 left-4 z-10 text-[10px] font-mono tracking-widest text-teal-soft uppercase">
              &mdash;&mdash; 3D PROBABILISTIC DENSITY MANIFOLD &middot; P(&theta;|y)
            </div>

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button
                onClick={() => setHasObservation(false)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-colors ${
                  !hasObservation
                    ? 'bg-white text-ink font-semibold'
                    : 'text-muted hover:text-white'
                }`}
              >
                Prior Only
              </button>
              <button
                onClick={() => setHasObservation(true)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-colors ${
                  hasObservation
                    ? 'bg-teal text-white font-semibold'
                    : 'text-muted hover:text-white'
                }`}
              >
                + Measured Level
              </button>
            </div>

            <MainCanvas cameraPosition={[0, 0, 4.4]}>
              <BayesianSurfaceScene hasObservation={hasObservation} />
            </MainCanvas>

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-muted uppercase">
              <span>Prior Dispersion (Graphite)</span>
              <span>Observed TDM (Red Needle)</span>
              <span>Posterior Peak (Mineral Teal)</span>
            </div>
          </div>

          {/* Right: Analytical Form & Contraction Metrics */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-teal-soft font-semibold uppercase">
                CONJUGATE FORMULATION
              </span>
              <h4 className="font-serif text-2xl font-normal text-white">
                Gaussian Conjugate Inference
              </h4>
            </div>

            <div className="p-4 bg-comp-panel border border-comp-border space-y-2 font-mono text-xs text-[#A6C4BC]">
              <div>1 / &sigma;_post&sup2; = (1 / &sigma;_prior&sup2;) + (1 / &sigma;_obs&sup2;)</div>
              <div className="text-white text-[11px]">
                &mu;_post = &sigma;_post&sup2; &middot; [ (&mu;_prior / &sigma;_prior&sup2;) + (y / &sigma;_obs&sup2;) ]
              </div>
            </div>

            {/* Synchronized Trajectory Contraction Indicator */}
            <div className="p-4 bg-[#0B1715] border border-comp-border space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[10px] text-teal-soft uppercase tracking-wider">
                <span>CREDIBLE ENVELOPE CONTRACTION</span>
                <span className="tabular-nums font-bold text-white">
                  {hasObservation ? '- 64% VARIANCE' : 'PRIOR POPULATION'}
                </span>
              </div>
              <div className="w-full bg-[#06100E] h-3 border border-comp-border relative overflow-hidden">
                <div
                  className="h-full bg-teal transition-all duration-500"
                  style={{ width: hasObservation ? '36%' : '100%' }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted">
                <span>90% CI: {hasObservation ? '[1.95 – 2.48 mg/L]' : '[1.10 – 2.80 mg/L]'}</span>
                <span>{hasObservation ? 'Conditioned on TDM' : 'Population Prior'}</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-muted">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Prior Clearance Estimate &mu;_prior</span>
                <span className="text-white font-semibold tabular-nums">{bayesianResult.prior.mean.toFixed(2)} L/h</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Observed TDM Concentration y</span>
                <span className="text-teal-soft font-semibold tabular-nums">2.41 mg/L</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Posterior Clearance Estimate &mu;_post</span>
                <span className="text-white font-semibold tabular-nums">{bayesianResult.posterior.mean.toFixed(2)} L/h</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Variance Reduction Ratio</span>
                <span className="text-teal-soft font-semibold tabular-nums">
                  {bayesianResult.varianceReductionPercent.toFixed(1)}% Contraction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
