'use client';

import { useState } from 'react';
import FlashCard from '@/components/FlashCard';
import { words } from '@/data/words';

export default function Vocabulary() {
  const [level, setLevel] = useState('All');
  const [category, setCategory] = useState('All');

  const filteredWords = words.filter((word) => {
    return (
      (level === 'All' || word.level === level) &&
      (category === 'All' || word.category === category)
    );
  });

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Learn Swedish 🇸🇪</h1>

      {/* FILTERS */}
      <div className="flex gap-4 justify-center flex-wrap mb-10">
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Levels</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Categories</option>
          <option value="Animals">Animals</option>
          <option value="Food">Food</option>
          <option value="Verbs">Verbs</option>
          <option value="People">People</option>
          <option value="Work">Work</option>
          <option value="Society">Society</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
          <option value="Education">Education</option>
          <option value="Diet Expressions">Diet Expressions</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredWords.map((word) => (
          <FlashCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}
