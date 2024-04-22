// "use client";
// import { useState, useEffect } from 'react';

// function FlashcardReview({ deckId }) {
//   const [flashcards, setFlashcards] = useState([]);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://127.0.0.1:8000/decks/${deckId}/flashcards/`, {
//         headers: {
//           'Authorization': `Token ${token}`,
//         },
//       });
//       const data = await response.json();
//       setFlashcards(data);
//     };

//     fetchFlashcards();
//   }, [deckId]);

//   const handleRating = async (score) => {
//     setIsSubmitting(true);

//     const token = localStorage.getItem('token');
//     const flashcard = flashcards[currentCardIndex];

//     const response = await fetch('http://127.0.0.1:8000/flashcard/rating/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${token}`,
//       },
//       body: JSON.stringify({
//         flashcard_id: flashcard.id,
//         score,
//       }),
//     });

//     if (response.ok) {
//       setCurrentCardIndex((prev) => prev + 1);  // Move to the next flashcard
//     }

//     setIsSubmitting(false);
//   };

//   if (flashcards.length === 0) {
//     return <div>No flashcards to review.</div>;
//   }

//   const currentCard = flashcards[currentCardIndex];

//   return (
//     <div>
//       <h2 className='text-black'>Review Flashcard</h2>
//       <p className='text-black'>Question: {currentCard.question}</p>
//       <p className='text-black'>Answer: {currentCard.answer}</p>

//       <button className='text-black'
//         onClick={() => handleRating(1)}  // Difficult recall
//         disabled={isSubmitting}
//       >
//         Hard
//       </button>
//       <button className='text-black'
//         onClick={() => handleRating(2)}  // Moderate recall
//         disabled={isSubmitting}
//       >
//         Neutral
//       </button>
//       <button className='text-black'
//         onClick={() => handleRating(3)}  // Easy recall
//         disabled={isSubmitting}
//       >
//         Easy
//       </button>
//     </div>
//   );
// }

// export default FlashcardReview;

"use client";
import { useState, useEffect } from 'react';

function FlashcardReview({ deckId }) {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/decks/${deckId}/flashcards/`, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFlashcards(data);
        setCurrentCardIndex(0); // Reset index when fetching new flashcards
      } else {
        console.error("Failed to fetch flashcards");
      }
    };

    if (deckId) {
      fetchFlashcards(); // Fetch flashcards when deckId changes
    }
  }, [deckId]); // Dependency array includes deckId to re-fetch when it changes

  const handleRating = async (score) => {
    setIsSubmitting(true);

    const token = localStorage.getItem('token');
    const currentCard = flashcards[currentCardIndex];

    if (!currentCard) {
      console.error("Invalid flashcard index");
      setIsSubmitting(false);
      return;
    }

    const response = await fetch('http://127.0.0.1:8000/flashcards/rate/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify({
        flashcard_id: currentCard.id,
        score,
      }),
    });

    if (response.ok) {
      setCurrentCardIndex((prev) => prev + 1); // Move to the next flashcard
    } else {
      console.error("Failed to submit rating");
    }

    setIsSubmitting(false);
  };

  if (flashcards.length === 0) {
    return <div>No flashcards to review.</div>; // Handle empty flashcard list
  }

  const currentCard = flashcards[currentCardIndex]; // Get current flashcard based on index

  return (
    <div>
      <h2 className='text-black'>Review Flashcard</h2>
      {currentCard ? (  // Check if currentCard is valid
        <>
          <p className='text-black'>Question: {currentCard.question}</p>
          <p className='text-black'>Answer: {currentCard.answer}</p>

          <button className='bg-red-500 text-white px-3 py-2 rounded'
            onClick={() => handleRating(1)}  // Difficult recall
            disabled={isSubmitting}
          >
            Hard
          </button>
          <button className='bg-yellow-500 text-white px-3 py-2 rounded'
            onClick={() => handleRating(2)}  // Moderate recall
            disabled={isSubmitting}
          >
            Neutral
          </button>
          <button className='bg-green-500 text-white px-3 py-2 rounded'
            onClick={() => handleRating(3)}  // Easy recall
            disabled={isSubmitting}
          >
            Easy
          </button>
        </>
      ) : (
        <p>You've finished reviewing all flashcards.</p> // Handle end of flashcard list
      )}
    </div>
  );
}

export default FlashcardReview;
