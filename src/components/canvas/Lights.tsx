'use client';

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#6366f1" />
      <pointLight position={[5, -5, 5]} intensity={0.8} color="#ec4899" />
    </>
  );
}
