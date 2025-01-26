"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      setScrollProgress(progress);
      

      // Show header after first section
      if (progress > 0.5) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative font-sans bg-black text-white">
      <header className={`fixed top-8 left-1/2 -translate-x-1/2 
                      bg-white/10 backdrop-blur-md
                      px-6 py-3 rounded-full
                      border border-white/20
                      shadow-lg
                      z-[100]
                      w-fit
                      transition-all duration-500 ease-in-out
                      ${showHeader ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-white/70 transition-colors">Home</a>
          <a href="#vision" className="hover:text-white/70 transition-colors">Vision</a>
          <a href="#features" className="hover:text-white/70 transition-colors">Features</a>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4">
        <section id="hero" className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-7xl font-playfair">BloomScroll</h1>
          <p className="text-2xl mt-4 text-gray-500">A social media platform for human flourishing</p>
        </section>

        <section id="vision" className="h-screen grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-w-[60ch]">
              Social media has devolved into superficial engagement over meaningful connection. 
              We need a paradigm shift—a platform that restores relationality by prioritizing human flourishing.
              Bloom is a digital platform designed for connection and inspiration. 
              Instead of draining users, we focus on creating moments of growth and positivity.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {/* Empty right column for flower */}
          </div>
        </section>

        <section id="features" className="h-screen grid md:grid-cols-2 items-center gap-8">
          <div className="flex items-center justify-center">
            {/* Empty left column for flower */}
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-w-[60ch]">
              Experience meaningful connections through intentional interactions.
              Tools and content designed to nurture personal development.
              Creating an environment that uplifts and inspires.Join a community that values authenticity and positivity.
              Engage in conversations that matter and connect with others who share your values.
              Together, we can create a space where everyone can thrive.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
