'use client';

import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50">
      <div className="flex items-center gap-2 text-indigo-400 font-bold text-xl tracking-wider">
        <Sparkles className="h-6 w-6" />
        <span>NEXUS 3D</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
        <a href="#features" className="hover:text-white transition">Features</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
      <button className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 text-sm font-semibold transition shadow-lg shadow-indigo-600/20">
        Get Started
      </button>
    </header>
  );
}
