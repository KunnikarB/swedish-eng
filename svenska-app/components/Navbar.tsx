'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">🇸🇪 SvenskaApp</h1>

        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/vocabulary">Vocabulary</Link>
          <Link href="/grammar">Grammar</Link>
          <Link href="/games">Games</Link>
        </div>
      </div>
    </nav>
  );
}
