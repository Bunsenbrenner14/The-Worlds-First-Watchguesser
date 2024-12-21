import React, { useState } from 'react';
import { watches } from './data/watches';
import { GameMode, GameModeType } from './components/GameMode';
import { WritingMode } from './components/WritingMode';
import { SelectPictureMode } from './components/SelectPictureMode';
import { SelectNameMode } from './components/SelectNameMode';
import { GameOver } from './components/GameOver';
import { Menu } from './components/Menu';
import { Hearts } from './components/Hearts';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [mode, setMode] = useState<GameModeType>('writing');
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [currentWatchIndex, setCurrentWatchIndex] = useState(
    Math.floor(Math.random() * watches.length)
  );

  const startGame = (selectedMode: GameModeType) => {
    setGameStarted(true);
    setMode(selectedMode);
    resetGame();
  };

  const resetGame = () => {
    setLives(3);
    setScore(0);
    setCurrentWatchIndex(Math.floor(Math.random() * watches.length));
  };

  const handleModeChange = (newMode: GameModeType) => {
    setMode(newMode);
    resetGame();
  };

  const getRandomOptions = () => {
    const options = [watches[currentWatchIndex]];
    while (options.length < 4) {
      const randomWatch = watches[Math.floor(Math.random() * watches.length)];
      if (!options.includes(randomWatch)) {
        options.push(randomWatch);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const handleGuess = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
    setCurrentWatchIndex(Math.floor(Math.random() * watches.length));
  };

  const handleRestart = () => {
    setGameStarted(false);
  };

  if (!gameStarted) {
    return <Menu onStartGame={startGame} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Hearts lives={lives} />
          <div className="text-2xl font-bold text-purple-400">Score: {score}</div>
        </div>

        <GameMode mode={mode} onModeSelect={handleModeChange} lives={lives} score={score} />

        {lives > 0 ? (
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl shadow-xl p-8 mt-8">
            {mode === 'writing' && (
              <WritingMode
                watch={watches[currentWatchIndex]}
                onGuess={handleGuess}
              />
            )}
            {mode === 'selectPicture' && (
              <SelectPictureMode
                correctWatch={watches[currentWatchIndex]}
                options={getRandomOptions()}
                onGuess={handleGuess}
              />
            )}
            {mode === 'selectName' && (
              <SelectNameMode
                correctWatch={watches[currentWatchIndex]}
                options={getRandomOptions()}
                onGuess={handleGuess}
              />
            )}
          </div>
        ) : (
          <GameOver score={score} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}