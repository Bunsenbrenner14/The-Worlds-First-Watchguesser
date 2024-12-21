import React from 'react';
import { Trophy, RotateCcw } from 'lucide-react';

interface GameOverProps {
  score: number;
  onRestart: () => void;
}

export function GameOver({ score, onRestart }: GameOverProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full text-center">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-2">Game Over!</h2>
        <p className="text-2xl text-emerald-500 mb-8">Final Score: {score}</p>
        <button
          onClick={onRestart}
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Play Again
        </button>
      </div>
    </div>
  );
}