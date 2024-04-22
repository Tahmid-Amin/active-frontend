// 'use client';
// import { useState } from 'react';

// function CreateFlashcardForm({ deckId }) {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const token = localStorage.getItem('token');  // Retrieve the token for authentication

//         try {
//             const response = await fetch('http://127.0.0.1:8000/flashcards/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Token ${token}`,
//                 },
//                 body: JSON.stringify({ deck: deckId, question, answer }),
//             });

//             if (response.ok) {
//                 setQuestion('');
//                 setAnswer('');
//                 alert('Flashcard created successfully');
//             } else {
//                 throw new Error('Failed to create flashcard');
//             }
//         } catch (error) {
//             console.error(error);
//             alert('Error creating flashcard');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Question"
//                 className='text-black'
//                 required
//                 disabled={isSubmitting}
//             />
//             <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 placeholder="Answer"
//                 className='text-black'
//                 required
//                 disabled={isSubmitting}
//             />
//             <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-500 text-white rounded px-4 py-2"
//             >
//                 Add Flashcard
//             </button>
//         </form>
//     );
// }

// export default CreateFlashcardForm;

// 'use client';
// import { useState } from 'react';

// function CreateFlashcardForm({ deckId }) {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const token = localStorage.getItem('token');  // Retrieve the token for authentication

//         console.log("Deck ID:", deckId);  // Verify deckId is valid
//         console.log("Submitting question:", question, "and answer:", answer);  // Log the form data

//         try {
//             const response = await fetch('http://127.0.0.1:8000/flashcards/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Token ${token}`,  // Ensure token is included
//                 },
//                 body: JSON.stringify({ deck: deckId, question, answer }),  // Check the data being sent
//             });

//             console.log("Response status:", response.status);  // Log the response status

//             if (response.ok) {
//                 setQuestion('');
//                 setAnswer('');
//                 console.log("Flashcard created successfully");  // Indicate successful creation
//             } else {
//                 const errorData = await response.json();  // Get additional error information
//                 console.error("Failed to create flashcard:", errorData);  // Log the error details
//                 throw new Error("Failed to create flashcard");
//             }
//         } catch (error) {
//             console.error("Error during flashcard creation:", error);  // Catch any thrown errors
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Question"
//                 className="text-black"
//                 required
//                 disabled={isSubmitting}
//             />
//             <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 placeholder="Answer"
//                 className="text-black"
//                 required
//                 disabled={isSubmitting}
//             />
//             <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-500 text-white rounded px-4 py-2"
//             >
//                 Add Flashcard
//             </button>
//         </form>
//     );
// }

// export default CreateFlashcardForm;

// 'use client';
// import { useState } from 'react';

// function CreateFlashcardForm({ deckId }) {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const token = localStorage.getItem('token');  // Retrieve the token for authentication

//         try {
//             const response = await fetch('http://127.0.0.1:8000/flashcards/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Token ${token}`,
//                 },
//                 body: JSON.stringify({ deck: deckId, question, answer }),
//             });

//             console.log("Response status:", response.status);  // Check the response status

//             if (response.ok) {
//                 console.log("Flashcard created successfully");
//                 setQuestion('');
//                 setAnswer('');
//                 // Additional success handling
//             } else {
//                 // If the response isn't JSON, you might get a syntax error
//                 const errorText = await response.text();  // Read the raw response text
//                 console.error("Error response:", errorText);
//                 throw new Error("Failed to create flashcard");  // Throw the error for further handling
//             }
//         } catch (error) {
//             console.error("Error during flashcard creation:", error);  // Catch and log any errors
//             alert('Error creating flashcard');  // Provide user feedback
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Question"
//                 className='text-black'
//                 required
//                 disabled={isSubmitting}
//             />
//             <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 placeholder="Answer"
//                 className='text-black'
//                 required
//                 disabled={isSubmitting}
//             />
//             <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-500 text-white rounded px-4 py-2"
//             >
//                 Add Flashcard
//             </button>
//         </form>
//     );
// }

// export default CreateFlashcardForm;

// 'use client';
// import { useState } from 'react';

// function CreateFlashcardForm({ deckId }) {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const token = localStorage.getItem('token'); // Retrieve the token for authentication

//         try {
//             const response = await fetch(`http://127.0.0.1:8000/decks/${deckId}/flashcards/`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Token ${token}`,
//                 },
//                 body: JSON.stringify({ question, answer }),
//             });

//             if (response.ok) {
//                 console.log('Flashcard created successfully');
//                 setQuestion('');
//                 setAnswer('');
//                 // Additional success handling
//             } else {
//                 const errorText = await response.text(); // Read the raw response text
//                 console.error('Error response:', errorText);
//                 alert('Failed to create flashcard'); // User feedback for failure
//             }
//         } catch (error) {
//             console.error('Error during flashcard creation:', error);
//             alert('Error creating flashcard'); // Provide user feedback
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Question"
//                 className="text-black"
//                 required
//                 disabled={isSubmitting}
//             />
//             <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 placeholder="Answer"
//                 className="text-black"
//                 required
//                 disabled={isSubmitting}
//             />
//             <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-500 text-white rounded px-4 py-2"
//             >
//                 Add Flashcard
//             </button>
//         </form>
//     );
// }

// export default CreateFlashcardForm;

'use client';
import { useState } from 'react';

function CreateFlashcardForm({ deckId }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const token = localStorage.getItem('token'); // Retrieve the token for authentication

        try {
            const response = await fetch(`http://127.0.0.1:8000/decks/${deckId}/flashcards/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                body: JSON.stringify({ deck: deckId, question, answer }), // Include the deck ID
            });

            if (response.ok) {
                console.log('Flashcard created successfully');
                setQuestion('');
                setAnswer('');
                // Additional success handling
            } else {
                const errorText = await response.text(); // Read the raw response text
                console.error('Error response:', errorText);
                alert('Failed to create flashcard'); // User feedback for failure
            }
        } catch (error) {
            console.error('Error during flashcard creation:', error);
            alert('Error creating flashcard'); // Provide user feedback
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Question"
                className="text-black"
                required
                disabled={isSubmitting}
            />
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Answer"
                className="text-black"
                required
                disabled={isSubmitting}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white rounded px-4 py-2"
            >
                Add Flashcard
            </button>
        </form>
    );
}

export default CreateFlashcardForm;
