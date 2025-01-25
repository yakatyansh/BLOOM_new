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

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center">
        <div className="mb-16">
        </div>
        <h1 className="text-7xl font-playfair">BloomScroll</h1>
      </section>

      {/* Vision Section */}
      <section id="vision" className="h-screen grid md:grid-cols-2 items-center px-6 md:px-12">
        <div className="space-y-6 max-w-xl">
          <p className="text-lg leading-relaxed">
            Social media has devolved into superficial engagement over meaningful connection. 
            We need a paradigm shift—a platform that restores relationality by prioritizing human flourishing.
          </p>
          <p className="text-lg leading-relaxed">
            Bloom is a digital platform designed for connection and inspiration. 
            Instead of draining users, we focus on creating moments of growth and positivity.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {['Meaningful Connections', 'Growth Focus', 'Positive Impact'].map((feature, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl mb-4 font-playfair">{feature}</h3>
              <p className="text-white/70">Experience the future of digital interaction.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
