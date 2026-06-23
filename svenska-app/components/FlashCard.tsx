'use client';

import { useState } from 'react';

type Word = {
  swedish: string;
  english: string;
  example: string;
  level?: string;
  category?: string;
};

export default function FlashCard({ word }: { word: Word }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex justify-center select-none">
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-full max-w-md h-72 perspective"
      >
        <div
          className={`
            relative w-full h-full
            transition-transform duration-700
            transform-style-preserve-3d

            ${flipped ? 'rotate-y-180' : ''}
          `}
        >
          {/* FRONT */}
          <div
            className="
              absolute inset-0
              backface-hidden
              bg-linear-to-br from-pink-500 to-violet-500
              text-white
              rounded-2xl
              shadow-lg
              flex flex-col justify-center items-center
              text-center
              p-6

              active:scale-95
              transition-transform
            "
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{word.english}</h2>

            <p className="mt-3 text-sm opacity-90">Tap to flip 👆</p>
          </div>

          {/* BACK */}
          <div
            className="
              absolute inset-0
              backface-hidden
              rotate-y-180
              bg-linear-to-br from-purple-600 to-indigo-600
              text-white
              rounded-2xl
              shadow-lg
              flex flex-col justify-center items-center
              text-center
              p-6

              active:scale-95
              transition-transform
            "
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{word.swedish}</h2>

            <p className="mt-4 text-xl">{word.example}</p>

            <p className="mt-3 text-xs ">
              {word.level} • {word.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
