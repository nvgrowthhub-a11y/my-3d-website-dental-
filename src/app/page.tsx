import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import HeroOverlay from '@/components/ui/HeroOverlay';

// Three.js Canvas ko SSR disable karke import karte hain
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      <Navbar />
      <Scene />
      <HeroOverlay />
    </main>
  );
}
