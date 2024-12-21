import React from 'react';
import { Watch } from '../data/watches';

interface SelectPictureModeProps {
  correctWatch: Watch;
  options: Watch[];
  onGuess: (correct: boolean) => void;
}

export function SelectPictureMode({ correctWatch, options, onGuess }: SelectPictureModeProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-white text-center mb-8">
        Select the picture of the {correctWatch.brand} {correctWatch.name}
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {options.map((watch) => (
          <button
            key={watch.id}
            onClick={() => onGuess(watch.id === correctWatch.id)}
            className="relative group transform transition-all hover:scale-105"
          >
            <img
              src={watch.imageUrl}
              alt="Watch option"
              className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:brightness-110 transition-all"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
    </div>
  );
}