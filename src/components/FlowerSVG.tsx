import React from 'react';

const FlowerSVG = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="100" 
    height="100" 
    viewBox="0 0 100 100"
  >
    <g className="flower">
      {/* Center */}
      <circle cx="50" cy="50" r="10" fill="#FFD700"/>
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((rotation) => (
        <path
          key={rotation}
          d="M 50 50 Q 65 35, 50 20 Q 35 35, 50 50"
          fill="white"
          transform={`rotate(${rotation}, 50, 50)`}
          className="petal"
        />
      ))}
    </g>
  </svg>
);

export default FlowerSVG;