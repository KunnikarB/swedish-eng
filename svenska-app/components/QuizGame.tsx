'use client';

import { useState, useMemo } from 'react';
import { words } from '@/data/words';

export default function QuizGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = words[index];

  const options = useMemo(() => {
    const opts = [
      current.english,
      words[(index + 1) % words.length].english,
      words[(index + 2) % words.length].english,
    ];

    // eslint-disable-next-line react-hooks/purity
    return [...opts].sort(() => Math.random() - 0.5);
  
  }, [index, current]);

  function answer(option: string) {
    if (option === current.english) {
      setScore(score + 1);
    }

    if (index + 1 < words.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  }

  function playAgain() {
    setIndex(0);

    setScore(0);

    setFinished(false);
  }

  if (finished) {
    return (
      <div className="text-center mt-4">
        <h1
          className="border-2 bg-pink-500
text-white
rounded-2xl
p-4
shadow-lg
max-w-sm
mx-auto text-2xl mt-20 mb-10"
        >
          Game Finished 🎉
        </h1>
        <p
          className="text-2xl border-pink-400 max-w-sm mx-auto p-4 rounded-2xl"
        >
          🌸 Your score: {score} / {words.length} 🌸
        </p>
        <button
          onClick={playAgain}
          className="
          mt-4
          bg-purple-600
          hover:bg-purple-700
          text-white
          px-6
          py-3
          rounded-xl
          shadow-lg
          cursor-pointer"
        >
          🔄 Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="text-center p-10 mt-10 border-violet-400 border-2 rounded-2xl">
      <h2
        className="border-2 bg-pink-500
text-white
rounded-2xl
p-4
shadow-lg
max-w-sm
mx-auto text-2xl"
      >
        What does this mean?
      </h2>

      <h2 className="text-3xl mt-8 border-2 max-w-sm mx-auto p-4 rounded-2xl">
        🌸 {current.swedish} 🌸
      </h2>

      <div className="text-2xl flex flex-col gap-2 p-8 max-w-sm mx-auto " >
        {options.map((opt) => (
          <button
            className="border-pink-400 border rounded-2xl max-w-xs mx-auto
            text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 justify-center cursor-pointer "
            key={opt}
            onClick={() => answer(opt)}
            style={{
              display: 'block',
              margin: 10,
              padding: 10,
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <p className="bg-violet-500 border max-w-sm mx-auto p-4 rounded-2xl text-md">
        Score: {score}
      </p>
    </div>
  );
}
