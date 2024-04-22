"use client";
import { useState } from 'react';
import DeckSelection from '@/components/DeckSelection';
import FlashcardReview from '@/components/FlashcardReview';

export default function ReviewPage() {
  const [selectedDeckId, setSelectedDeckId] = useState(null);

  const handleDeckSelection = (deckId) => {
    setSelectedDeckId(deckId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-xl font-semibold text-gray-800">Flashcard Review</h1>

      {selectedDeckId ? (
        <FlashcardReview deckId={selectedDeckId} />
      ) : (
        <DeckSelection onSelect={handleDeckSelection} />
      )}
    </div>
  );
}
