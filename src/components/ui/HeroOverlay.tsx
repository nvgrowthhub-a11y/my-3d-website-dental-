'use client';

import { ArrowRight } from 'lucide-react';

export default function HeroOverlay() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 pointer-events-none">
      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6">
        Next-Gen Web Experiences
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg max-w-4xl">
        Build Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">3D Websites</span> Effortlessly
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
        Seamlessly combine modern web development with Three.js rendering using Next.js App Router and React Three Fiber.
      </p>
      
      <div className="mt-10 flex flex-wrap gap-4 justify-center pointer-events-auto">
        <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-xl shadow-indigo-600/30 transition hover:bg-indigo-500 active:scale-95">
          <span>Explore Platform</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="rounded-full border border-slate-700 bg-slate-900/60 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-slate-800 hover:border-slate-600 active:scale-95">
          Documentation
        </button>
      </div>
    </div>
  );
}
