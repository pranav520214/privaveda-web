'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HumanTwinScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const fluidParticlesRef = useRef<THREE.Points>(null);
  const measurementRef = useRef<THREE.Group>(null);

  // Pharmacophore ligand core nodes (matte ceramic ivory & deep privaveda teal)
  const moleculeNodes = useMemo(() => [
    { pos: [0.15, 0.05, 0.2] as [number, number, number], r: 0.16, col: '#236E67', roughness: 0.25 }, // Target site (focused)
    { pos: [0.55, 0.35, -0.05] as [number, number, number], r: 0.11, col: '#E9E5DB', roughness: 0.4 },  // Ceramic atom
    { pos: [-0.35, 0.28, 0.15] as [number, number, number], r: 0.12, col: '#E9E5DB', roughness: 0.4 },
    { pos: [0.38, -0.36, 0.1] as [number, number, number], r: 0.10, col: '#A6C4BC', roughness: 0.35 },
    { pos: [-0.25, -0.32, -0.1] as [number, number, number], r: 0.11, col: '#E9E5DB', roughness: 0.4 },
    { pos: [0.92, 0.52, -0.18] as [number, number, number], r: 0.07, col: '#38413D', roughness: 0.45 },
    { pos: [-0.75, 0.48, 0.2] as [number, number, number], r: 0.07, col: '#38413D', roughness: 0.45 },
  ], []);

  // Molecular chemical bond cylinders
  const bonds = useMemo(() => [
    { p1: [0.15, 0.05, 0.2], p2: [0.55, 0.35, -0.05] },
    { p1: [0.15, 0.05, 0.2], p2: [-0.35, 0.28, 0.15] },
    { p1: [0.15, 0.05, 0.2], p2: [0.38, -0.36, 0.1] },
    { p1: [0.15, 0.05, 0.2], p2: [-0.25, -0.32, -0.1] },
    { p1: [0.55, 0.35, -0.05], p2: [0.92, 0.52, -0.18] },
    { p1: [-0.35, 0.28, 0.15], p2: [-0.75, 0.48, 0.2] },
  ], []);

  // Micro-fluidic plasma particles drifting along laminar stream
  const { particlePositions, particleVelocities } = useMemo(() => {
    const count = 160;
    const pts = new Float32Array(count * 3);
    const vels = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pts[i * 3] = (Math.random() - 0.5) * 1.5;
      pts[i * 3 + 1] = (Math.random() - 0.5) * 2.8;
      pts[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
      vels[i] = 0.08 + Math.random() * 0.12;
    }
    return { particlePositions: pts, particleVelocities: vels };
  }, []);

  // Controlled slow drift (measured, heavy camera feeling)
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.35) * 0.025;
      groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.06;
      groupRef.current.rotation.x = Math.cos(t * 0.22) * 0.03;
    }

    // Gentle laminar flow of plasma points
    if (fluidParticlesRef.current) {
      const pos = fluidParticlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 160; i++) {
        pos[i * 3 + 1] -= particleVelocities[i] * delta * 0.8;
        if (pos[i * 3 + 1] < -1.4) {
          pos[i * 3 + 1] = 1.4;
        }
      }
      fluidParticlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Subtle breath on focused measurement node
    if (measurementRef.current) {
      measurementRef.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0.2, 0, 0]}>
      {/* Outer Optical Plasma Vessel / Micro-Chamber */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.98, 0.98, 3.1, 48, 1, true]} />
        <meshPhysicalMaterial
          color="#F4F1E9"
          roughness={0.06}
          metalness={0.02}
          transmission={0.93}
          thickness={0.8}
          ior={1.38}
          transparent
          opacity={0.42}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Machined Graphite Vessel Collars */}
      <mesh position={[0, 1.55, 0]}>
        <torusGeometry args={[0.98, 0.015, 16, 64]} />
        <meshStandardMaterial color="#38413D" roughness={0.3} metalness={0.65} />
      </mesh>
      <mesh position={[0, -1.55, 0]}>
        <torusGeometry args={[0.98, 0.015, 16, 64]} />
        <meshStandardMaterial color="#38413D" roughness={0.3} metalness={0.65} />
      </mesh>

      {/* Internal Micro-Capillary Guide Conduits */}
      <mesh position={[-0.45, 0, -0.2]}>
        <cylinderGeometry args={[0.008, 0.008, 2.9, 12]} />
        <meshBasicMaterial color="#747C78" transparent opacity={0.35} />
      </mesh>
      <mesh position={[0.52, 0, -0.15]}>
        <cylinderGeometry args={[0.008, 0.008, 2.9, 12]} />
        <meshBasicMaterial color="#747C78" transparent opacity={0.35} />
      </mesh>

      {/* Molecular Ligand Structure (Ceramic Matte + Mineral Teal) */}
      <group position={[0, 0.1, 0]}>
        {moleculeNodes.map((node, i) => (
          <mesh key={i} position={node.pos}>
            <sphereGeometry args={[node.r, 32, 32]} />
            <meshStandardMaterial
              color={node.col}
              roughness={node.roughness}
              metalness={0.05}
            />
          </mesh>
        ))}

        {/* Bond Cylinders */}
        {bonds.map((bond, i) => {
          const v1 = new THREE.Vector3(...(bond.p1 as [number, number, number]));
          const v2 = new THREE.Vector3(...(bond.p2 as [number, number, number]));
          const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
          const dir = new THREE.Vector3().subVectors(v2, v1);
          const len = dir.length();
          const orientation = new THREE.Matrix4();
          orientation.lookAt(v1, v2, new THREE.Vector3(0, 1, 0));

          return (
            <mesh key={i} position={mid}>
              <cylinderGeometry args={[0.014, 0.014, len, 16]} />
              <meshStandardMaterial color="#747C78" roughness={0.35} metalness={0.3} />
            </mesh>
          );
        })}

        {/* Focused Measurement Event: Precision Optical Reticle & Concentric Ring */}
        <group position={[0.15, 0.05, 0.2]}>
          <group ref={measurementRef}>
            <mesh>
              <ringGeometry args={[0.22, 0.23, 36]} />
              <meshBasicMaterial color="#236E67" transparent opacity={0.75} side={THREE.DoubleSide} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <ringGeometry args={[0.27, 0.276, 36]} />
              <meshBasicMaterial color="#38413D" transparent opacity={0.4} side={THREE.DoubleSide} />
            </mesh>
          </group>

          {/* Precision Alignment Pin */}
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color="#236E67" />
          </mesh>
        </group>
      </group>

      {/* Floating Laminar Plasma Particles */}
      <points ref={fluidParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          color="#236E67"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>
    </group>
  );
};
