import React from 'react';

export type GameModeType = 'writing' | 'selectPicture' | 'selectName';

interface GameModeProps {
  mode: GameModeType;
  onModeSelect: (mode: GameModeType) => void;
  lives: number;
  score: number;
}

export function GameMode({ mode, onModeSelect }: GameModeProps) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => onModeSelect('writing')}
        className={`px-6 py-3 rounded-lg transition-colors ${
          mode === 'writing'
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        Writing
      </button>
      <button
        onClick={() => onModeSelect('selectPicture')}
        className={`px-6 py-3 rounded-lg transition-colors ${
          mode === 'selectPicture'
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        Pictures
      </button>
      <button
        onClick={() => onModeSelect('selectName')}
        className={`px-6 py-3 rounded-lg transition-colors ${
          mode === 'selectName'
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        Names
      </button>
    </div>
  );
}