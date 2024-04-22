"use client";
import { useState } from 'react';

// function CreateDeckForm() {
//     const [title, setTitle] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('/api/decks', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ title }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Deck created:', data);
//             setTitle('');
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Deck title"
//             />
//             <button type="submit">Create Deck</button>
//         </form>
//     );
// }

// components/CreateDeckForm.js (update with styled JSX)
// function CreateDeckForm() {
//     const [title, setTitle] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         fetch('http://127.0.0.1:8000/decks/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title })
//         })
//         .then(response => response.json())
//         .then(data => {
//             setIsSubmitting(false);
//             setTitle('');
//             alert('Deck created successfully'); // Adjust feedback mechanism as needed
//         })
//         .catch(error => {
//             setIsSubmitting(false);
//             alert('Failed to create deck');
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mt-4">
//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Deck title"
//                 className="p-2 border rounded shadow-sm w-full text-black"
//                 disabled={isSubmitting}
//             />
//             <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//                 Create Deck
//             </button>
//         </form>
//     );
// }

// export default CreateDeckForm;

function CreateDeckForm() {
    const [title, setTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');  // Retrieve the token from local storage
        setIsSubmitting(true);
        fetch('http://127.0.0.1:8000/decks/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`  // Include the token in the Authorization header
            },
            body: JSON.stringify({ title })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to create deck');  // Handling non-OK responses by throwing an error
            }
        })
        .then(data => {
            setTitle('');  // Clear the title input on successful deck creation
            alert('Deck created successfully');
        })
        .catch(error => {
            console.error('Error:', error);  // Log error details for debugging
            alert('Failed to create deck');
        })
        .finally(() => setIsSubmitting(false));  // Ensure that isSubmitting is reset regardless of the outcome
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Deck title"
                className="p-2 border rounded shadow-sm w-full text-black"
                disabled={isSubmitting}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Create Deck
            </button>
        </form>
    );
}

export default CreateDeckForm;
