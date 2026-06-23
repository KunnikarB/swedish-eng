import QuizGame from '@/components/QuizGame';

export default function GamesPage() {
  return (
    <div className="mt-10">
      <h1
        className="text-2xl text-center bg-violet-500 p-4 rounded-2xl
shadow-lg
max-w-sm
mx-auto
text-white"
      >
        🎮 Swedish Game Mode
      </h1>
      <QuizGame />
    </div>
  );
}
