'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.25 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusKnotGeometry args={[1, 0.35, 128, 32]} />
      <MeshWobbleMaterial
        color={hovered ? '#f43f5e' : '#6366f1'}
        factor={0.5}
        speed={2}
        roughness={0.15}
        metalness={0.85}
      />
    </mesh>
  );
}
