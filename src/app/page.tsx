"use client"
import { useEffect, useState } from 'react';
import WhiteFlower from "../components/WhiteFlower";

export default function Home() {
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 2 });

  return (
    <main className="relative font-sans min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 
                      bg-white/10 backdrop-blur-md
                      px-8 py-4 rounded-full
                      border border-white/20
                      shadow-lg
                      z-[100]
                      w-fit">
        <nav className="flex gap-8 text-sm">
          <a href="#hero" className="hover:text-white/70 transition-colors">Home</a>
          <a href="#vision" className="hover:text-white/70 transition-colors">Vision</a>
          <a href="#features" className="hover:text-white/70 transition-colors">Features</a>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4">
        <section id="hero" className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-7xl font-playfair">BloomScroll</h1>
        </section>

        <section id="vision" className="h-screen grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-w-[40ch]">
              Social media has devolved into superficial engagement over meaningful connection. 
              We need a paradigm shift—a platform that restores relationality by prioritizing human flourishing.
            </p>
            <p className="text-lg leading-relaxed text-w-[40ch]">
              Bloom is a digital platform designed for connection and inspiration. 
              Instead of draining users, we focus on creating moments of growth and positivity.
            </p>
          </div>
        </section>

        <section id="vision" className="h-screen grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-w-[40ch]">
              Bloom is a digital platform designed for connection and inspiration.
              We believe in fostering genuine interactions and nurturing creativity. 
              Our mission is to create a space where users can share their passions, 
              discover new interests, and connect with like-minded individuals.
            </p>
            <p className="text-lg leading-relaxed text-w-[40ch]">
             
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
