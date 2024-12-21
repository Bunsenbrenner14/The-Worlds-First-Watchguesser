import React from 'react';
import { Watch } from '../data/watches';

interface SelectNameModeProps {
  correctWatch: Watch;
  options: Watch[];
  onGuess: (correct: boolean) => void;
}

export function SelectNameMode({ correctWatch, options, onGuess }: SelectNameModeProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <img
        src={correctWatch.imageUrl}
        alt="Watch to guess"
        className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
      />
      <div className="grid grid-cols-2 gap-4">
        {options.map((watch) => (
          <button
            key={watch.id}
            onClick={() => onGuess(watch.id === correctWatch.id)}
            className="px-6 py-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-center group"
          >
            <span className="text-emerald-400 font-semibold block mb-1">{watch.brand}</span>
            <span className="text-white group-hover:text-emerald-300 transition-colors">
              {watch.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}