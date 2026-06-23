import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold ">Learn Swedish 🇸🇪</h1>

      <p className="text-lg text-gray-600">
        Practice vocabulary, grammar, and games to improve your Swedish every
        day.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <Link
          href="/vocabulary"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Start Learning
        </Link>

        <Link
          href="/games"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg"
        >
          Play Games
        </Link>
      </div>
    </div>
  );
}
