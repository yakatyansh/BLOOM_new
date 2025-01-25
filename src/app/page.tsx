"use client"
import { useEffect, useState } from 'react';
import WhiteFlower from "../components/WhiteFlower";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [flowerPosition, setFlowerPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Toggle between left and right based on scroll sections
      const section = Math.floor(position / window.innerHeight);
      const xPos = section % 2 === 0 ? 0 : window.innerWidth - 400;
      
      setFlowerPosition({
        x: xPos,
        y: position
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: flowerPosition.x,
        transition: 'left 0.5s ease-out'
      }}>
        <WhiteFlower />
      </div>

      {/* Content Sections */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-6xl">Welcome</h1>
      </section>
      
      <section className="h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-4xl">Section 1</h2>
      </section>
      
      <section className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl">Section 2</h2>
      </section>
      
      <section className="h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-4xl">Section 3</h2>
      </section>
    </main>
  );
}
