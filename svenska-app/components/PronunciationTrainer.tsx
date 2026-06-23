'use client';

export default function Pronunciation() {
  function speak(word: string) {
    const speech = new SpeechSynthesisUtterance(word);

    speech.lang = 'sv-SE';

    speechSynthesis.speak(speech);
  }

  return (
    <button
      onClick={() => speak('Hej')}
      className="
bg-blue-500
text-white
p-4
rounded-lg
"
    >
      🔊 Listen
    </button>
  );
}
