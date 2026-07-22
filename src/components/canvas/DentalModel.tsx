'use client';

import { useGLTF } from '@react-three/drei';

export default function DentalModel() {
  // Public folder ke path ko direct '/models/filename.glb' karke likho
  const { scene } = useGLTF('/models/tooth.glb');

  return (
    <primitive 
      object={scene} 
      scale={1.5}          // Model ka size chhota/bada karne ke liye
      position={[0, 0, 0]}  // X, Y, Z coordinates
      rotation={[0, Math.PI / 4, 0]} 
    />
  );
}

// Performance fast karne ke liye model pehle se load kar lo
useGLTF.preload('/models/tooth.glb');
