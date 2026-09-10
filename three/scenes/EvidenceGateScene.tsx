'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EvidenceGateProps {
  gateState?: 'REVIEWABLE_ZERO_BLOCKS' | 'CAUTION_FLAGS_PRESENT' | 'SIMULATION_ABSTAINED';
}

export const EvidenceGateScene: React.FC<EvidenceGateProps> = ({
  gateState = 'REVIEWABLE_ZERO_BLOCKS',
}) => {
  const ringRef = useRef<THREE.Group>(null);
  const dialRef = useRef<THREE.Group>(null);
  const plateRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Measured slow mechanical rotation
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
    }
    if (dialRef.current) {
      dialRef.current.rotation.z -= delta * 0.04;
    }
    if (plateRef.current) {
      plateRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  const stateColor =
    gateState === 'REVIEWABLE_ZERO_BLOCKS'
      ? '#236E67'
      : gateState === 'CAUTION_FLAGS_PRESENT'
      ? '#D97706'
      : '#747C78';

  const isAbstained = gateState === 'SIMULATION_ABSTAINED';

  return (
    <group ref={plateRef} position={[0, 0, 0]} rotation={[0.15, -0.2, 0]}>
      {/* Outer Machined Titanium Ring */}
      <mesh>
        <torusGeometry args={[1.75, 0.035, 16, 64]} />
        <meshStandardMaterial
          color="#38413D"
          metalness={0.75}
          roughness={0.25}
        />
      </mesh>

      {/* Internal Precision Vernier Scale Ring */}
      <group ref={dialRef}>
        <mesh>
          <torusGeometry args={[1.62, 0.012, 12, 48]} />
          <meshBasicMaterial color="#38413D" wireframe />
        </mesh>
        {/* 24 Calibration Index Ticks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const isMajor = i % 6 === 0;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.62, Math.sin(angle) * 1.62, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[isMajor ? 0.09 : 0.04, 0.012, 0.015]} />
              <meshBasicMaterial color={isMajor ? '#A6C4BC' : '#747C78'} />
            </mesh>
          );
        })}
      </group>

      {/* Counter-rotating Sensor Guidance Ring */}
      <group ref={ringRef}>
        <mesh>
          <torusGeometry args={[1.45, 0.016, 16, 64]} />
          <meshStandardMaterial
            color={stateColor}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Optical Quartz Translucent Inspection Disk / Verification Plane */}
      <mesh>
        <circleGeometry args={[1.42, 48]} />
        <meshPhysicalMaterial
          color={isAbstained ? '#38413D' : '#F4F1E9'}
          roughness={0.12}
          transmission={isAbstained ? 0.4 : 0.9}
          thickness={0.4}
          transparent
          opacity={isAbstained ? 0.7 : 0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Etched Reticle Crosshair & Concentric Metric Circles */}
      <group position={[0, 0, 0.02]}>
        <mesh>
          <ringGeometry args={[0.35, 0.358, 48]} />
          <meshBasicMaterial color={stateColor} transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
        <mesh>
          <ringGeometry args={[0.85, 0.858, 48]} />
          <meshBasicMaterial color="#38413D" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.45, 0.008, 0.005]} />
          <meshBasicMaterial color={stateColor} transparent opacity={0.8} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.008, 0.45, 0.005]} />
          <meshBasicMaterial color={stateColor} transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Abstention Mechanical Interlock (Precision Shutter Blades) */}
      {isAbstained && (
        <group position={[0, 0, 0.04]}>
          {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
            <mesh key={i} rotation={[0, 0, angle + 0.25]} position={[0, 0, 0.01]}>
              <boxGeometry args={[1.45, 0.72, 0.015]} />
              <meshStandardMaterial
                color="#121715"
                metalness={0.7}
                roughness={0.4}
              />
            </mesh>
          ))}
          {/* Central Calibrated Abstention Shutter Cap */}
          <mesh position={[0, 0, 0.06]}>
            <circleGeometry args={[0.26, 32]} />
            <meshStandardMaterial color="#38413D" roughness={0.3} metalness={0.6} />
          </mesh>
        </group>
      )}
    </group>
  );
};
