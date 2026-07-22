'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import Lights from './Lights';
import AnimatedMesh from './AnimatedMesh';

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Lights />
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <AnimatedMesh />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
