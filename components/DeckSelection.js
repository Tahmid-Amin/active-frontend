// "use client";
// import { useState, useEffect } from 'react';

// function DeckSelection({ onSelect }) {
//   const [decks, setDecks] = useState([]);

//   useEffect(() => {
//     const fetchDecks = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://127.0.0.1:8000/user/decks/', {
//         headers: {
//           'Authorization': `Token ${token}`,
//         },
//       });
//       const data = await response.json();
//       setDecks(data);
//     };

//     fetchDecks();
//   }, []);

//   return (
//     <div>
//       <h2 className='text-black'>Select a Deck to Review</h2>
//       <select className="w-full p-2 border rounded text-gray-800" onChange={(e) => onSelect(e.target.value)}>
//         <option value="">-- Select a Deck --</option>
//         {decks.map((deck) => (
//           <option key={deck.id} value={deck.id}>
//             {deck.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default DeckSelection;

// "use client";
// import { useState, useEffect } from 'react';

// function DeckSelection({ onSelect }) {
//   const [decks, setDecks] = useState([]);

//   useEffect(() => {
//     const fetchDecks = async () => {
//       const token = localStorage.getItem('token');  // Fetch token from local storage
//       const response = await fetch('http://127.0.0.1:8000/user/decks/', {
//         headers: {
//           'Authorization': `Token ${token}`,  // Include token in headers
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {  // Check if response is OK
//         const data = await response.json();  // Parse JSON data
//         setDecks(data);  // Set the decks in the state
//       } else {
//         console.error("Failed to fetch decks");  // Handle fetch failure
//       }
//     };

//     fetchDecks();  // Fetch decks on component mount
//   }, []);  // Empty dependency array means this useEffect runs once

//   return (
//     <div className="p-4">
//       <h2 className="text-gray-900 font-semibold">Select a Deck to Review</h2>  {/* Correct text color */}
//       <select
//         className="w-full p-2 border border-gray-300 rounded bg-white text-black"
//         onChange={(e) => onSelect(e.target.value)}  // Call onSelect with the selected value
//       >
//         <option value="">-- Select a Deck --</option>  {/* Default option */}
//         {decks.map((deck) => (
//           <option key={deck.id} value={deck.id}>  {/* Use deck name */}
//             {deck.name}  {/* Display deck name */}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default DeckSelection;

"use client";
import { useState, useEffect } from 'react';

function DeckSelection({ onSelect }) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token for authorization
      const response = await fetch('http://127.0.0.1:8000/user/decks/', {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json', // Set content type for JSON
        },
      });

      if (response.ok) {
        const data = await response.json(); // Ensure proper JSON parsing
        console.log('Decks:', data); // Add console.log to inspect data
        setDecks(data); // Set the state with the fetched data
      } else {
        console.error("Failed to fetch decks");
      }
    };

    fetchDecks(); // Fetch decks when component mounts
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-gray-900 font-semibold">Select a Deck to Review</h2>
      <select
        className="w-full p-2 border border-gray-300 rounded bg-white text-black"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Select a Deck --</option> {/* Default option */}
        {decks.map((deck) => (
          <option key={deck.id} value={deck.id} className="text-black"> {/* Deck option */}
            {deck.title ? deck.title : 'Unnamed Deck'} {/* Display deck name or placeholder */}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DeckSelection;
