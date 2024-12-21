import React from 'react';
import { Watch, Clock } from 'lucide-react';
import { GameModeType } from './GameMode';

interface MenuProps {
  onStartGame: (mode: GameModeType) => void;
}

export function Menu({ onStartGame }: MenuProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <Watch className="w-16 h-16 text-purple-400" />
            <Clock className="w-10 h-10 text-purple-300 absolute -bottom-2 -right-2" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
          Watch<span className="text-purple-400">Guesser</span>
        </h1>
        <p className="text-gray-400 text-lg">Test your luxury watch knowledge</p>
      </div>

      <div className="grid gap-6 w-full max-w-lg relative z-10">
        {[
          {
            mode: 'writing' as GameModeType,
            title: 'Writing Mode',
            description: 'Type the name of the watch you see',
          },
          {
            mode: 'selectPicture' as GameModeType,
            title: 'Picture Mode',
            description: 'Select the correct watch image',
          },
          {
            mode: 'selectName' as GameModeType,
            title: 'Name Mode',
            description: 'Choose the correct watch name',
          },
        ].map((item) => (
          <button
            key={item.mode}
            onClick={() => onStartGame(item.mode)}
            className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}