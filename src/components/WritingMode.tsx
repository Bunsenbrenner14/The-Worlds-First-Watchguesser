import React, { useState } from 'react';
import { Watch } from '../data/watches';

interface WritingModeProps {
  watch: Watch;
  onGuess: (correct: boolean) => void;
}

export function WritingMode({ watch, onGuess }: WritingModeProps) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = guess.toLowerCase() === watch.name.toLowerCase();
    onGuess(correct);
    setGuess('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src={watch.imageUrl}
        alt="Watch to guess"
        className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter watch name..."
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:border-emerald-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Submit Guess
        </button>
      </form>
    </div>
  );
}