'use client';
import { useState } from 'react';

interface FlippingCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export function FlippingCard({ frontContent, backContent }: FlippingCardProps) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative w-52 lg:w-64 h-64 lg:h-72 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transform-style preserve-3d transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}
      >
        <div className="absolute w-full h-full backface-hidden">{frontContent}</div>
        <div className="absolute w-full h-full backface-hidden transform rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
}
