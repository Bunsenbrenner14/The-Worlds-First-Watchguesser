import React from 'react';
import { Heart } from 'lucide-react';

interface HeartsProps {
  lives: number;
}

export function Hearts({ lives }: HeartsProps) {
  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <Heart
          key={i}
          className={`w-8 h-8 transition-all ${
            i < lives
              ? 'text-red-500 fill-red-500'
              : 'text-red-900 fill-red-900 opacity-50 transform rotate-12'
          }`}
        />
      ))}
    </div>
  );
}