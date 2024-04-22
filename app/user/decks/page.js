
// "use client";
// import React from 'react';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function DecksPage() {
//     return (
//       <div className="max-w-4xl mx-auto px-4">
//         <h1 className="text-xl font-semibold text-gray-800">My Decks</h1>
//         <p className="text-gray-800">Your decks are found here.</p>
//       </div>
//     );
//   }

// "use client";
// import React from 'react';
// import { useState } from 'react';
// import Link from 'next/link';
// import CreateDeckForm from '@/components/CreateDeck';  // Adjust the path as necessary
// import DeckList from '@/components/DeckList';  // Adjust the path as necessary
// import CreateFlashcardForm from '@/components/CreateFlashCards';

// export default function DecksPage() {
//     return (
//       <div className="max-w-4xl mx-auto px-4">
//         <h1 className="text-xl font-semibold text-gray-800">My Decks</h1>
//         <p className="text-gray-800">Your decks are found here. Create new ones or browse your existing decks.</p>
//         <CreateDeckForm />  
//         <DeckList />  
//       </div>
//     );
// }

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import CreateDeckForm from '@/components/CreateDeck';  // Ensure this path matches your project structure
import DeckList from '@/components/DeckList';  // Ensure this path matches your project structure
import CreateFlashcardForm from '@/components/CreateFlashCards';  // Ensure this path matches your project structure

export default function DecksPage() {
    // State to hold the selected deck's ID
    const [selectedDeckId, setSelectedDeckId] = useState(null);

    // Function to handle selecting a deck
    const handleDeckSelect = (deckId) => {
        setSelectedDeckId(deckId);
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-xl font-semibold text-gray-800">My Decks</h1>
            <p className="text-gray-800">Your decks are found here. Create new ones or browse your existing decks.</p>
            <CreateDeckForm />
            <DeckList onSelectDeck={handleDeckSelect} />   
            {selectedDeckId && (
                <CreateFlashcardForm deckId={selectedDeckId} />  // Conditionally render CreateFlashcardForm
            )}
        </div>
    );
}

