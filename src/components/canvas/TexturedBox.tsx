'use client';

import { useTexture } from '@react-three/drei';

export default function TexturedBox() {
  // Texture image load karo
  const colorMap = useTexture('/textures/marble.jpg');

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      {/* Texture ko material par apply kar do */}
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
