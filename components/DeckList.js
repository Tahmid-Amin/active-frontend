"use client";


// function DeckList() {
//     const [decks, setDecks] = useState([]);

//     useEffect(() => {
//         fetch('/api/decks')
//             .then(response => response.json())
//             .then(data => setDecks(data));
//     }, []);

//     return (
//         <div>
//             {decks.map(deck => (
//                 <div key={deck.id}>
//                     <h3>{deck.title}</h3>
//                     {/* Map flashcards here */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// components/DeckList.js (update with styled JSX)
// function DeckList() {
//     const [decks, setDecks] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/decks/')
//             .then(response => response.json())
//             .then(data => {
//                 setDecks(data);
//                 setIsLoading(false);
//             })
//             .catch(error => {
//                 console.error('Failed to load decks:', error);
//                 setIsLoading(false);
//             });
//     }, []);

//     if (isLoading) {
//         return <p className="text-center text-black">Loading decks...</p>;
//     }

//     if (decks.length === 0) {
//         return <p className="text-center text-black">No decks available. Create your first deck!</p>;
//     }

//     return (
//         <div className="mt-4">
//             {decks.map(deck => (
//                 <div key={deck.id} className="p-4 mb-2 border-b">
//                     <h3 className="font-bold">{deck.title}</h3>
//                     {/* Additional deck details can go here */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default DeckList;

// import React, { useState, useEffect } from 'react';

// function DeckList() {
//     const [decks, setDecks] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/decks/')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not satisfactory');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 if (!Array.isArray(data)) {
//                     throw new Error('Received data is not an array');
//                 }
//                 setDecks(data);
//                 setIsLoading(false);
//             })
//             .catch(error => {
//                 console.error('Failed to load decks:', error);
//                 setError('Failed to load decks. Please try again later.');
//                 setIsLoading(false);
//             });
//     }, []);

//     if (isLoading) {
//         return <div className="text-center mt-4">Loading decks...</div>;
//     }

//     if (error) {
//         return <div className="text-center text-red-500 mt-4">{error}</div>;
//     }

//     if (decks.length === 0) {
//         return <div className="text-center mt-4">No decks available. Create your first deck!</div>;
//     }

//     return (
//         <div className="mt-4">
//             {decks.map(deck => (
//                 <div key={deck.id} className="p-4 mb-2 border-b">
//                     <h3 className="font-bold">{deck.title}</h3>
//                     {/* Additional deck details can go here */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default DeckList;

// import React, { useState, useEffect } from 'react';

// function DeckList() {
//     const [decks, setDecks] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const token = localStorage.getItem('token');  // Retrieve the token from local storage

//         fetch('http://127.0.0.1:8000/decks/', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Token ${token}`,  // Include the token in the Authorization header
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not satisfactory');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (!Array.isArray(data)) {
//                 throw new Error('Received data is not an array');
//             }
//             setDecks(data);
//             setIsLoading(false);
//         })
//         .catch(error => {
//             console.error('Failed to load decks:', error);
//             setError('Failed to load decks. Please try again later.');
//             setIsLoading(false);
//         });
//     }, []);

//     if (isLoading) {
//         return <div className="text-center mt-4">Loading decks...</div>;
//     }

//     if (error) {
//         return <div className="text-center text-red-500 mt-4">{error}</div>;
//     }

//     if (decks.length === 0) {
//         return <div className="text-center mt-4 text-black">No decks available. Create your first deck!</div>;
//     }

//     return (
//         <div className="mt-4">
//             {decks.map(deck => (
//                 <div key={deck.id} className="p-4 mb-2 border border-black">
//                     <h3 className="font-bold text-black">{deck.title}</h3>
//                     {/* Additional deck details can go here */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default DeckList;

import React, { useState, useEffect } from 'react';

function DeckList({ onSelectDeck }) {  // Accept onSelectDeck as a prop
    const [decks, setDecks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');  // Retrieve the token from local storage

        fetch('http://127.0.0.1:8000/decks/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,  // Include the token in the Authorization header
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not satisfactory');
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('Received data is not an array');
            }
            setDecks(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Failed to load decks:', error);
            setError('Failed to load decks. Please try again later.');
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="text-center mt-4">Loading decks...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-4">{error}</div>;
    }

    if (decks.length === 0) {
        return <div className="text-center mt-4 text-black">No decks available. Create your first deck!</div>;
    }

    return (
        <div className="mt-4">
            {decks.map(deck => (
                <div key={deck.id} onClick={() => onSelectDeck(deck.id)} className="p-4 mb-2 border border-black cursor-pointer hover:bg-gray-300">
                    <h3 className="font-bold text-black">{deck.title}</h3>
                    {/* Additional deck details can go here */}
                </div>
            ))}
        </div>
    );
}

export default DeckList;

