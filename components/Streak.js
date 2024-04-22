'use client';
import { useEffect, useState } from 'react';

// Fetching function to get streak data
const fetchStreakData = async () => {
  const token = localStorage.getItem('token'); // Retrieve the token for authentication

  const response = await fetch('http://127.0.0.1:8000/user/streak/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`, // Use token for authentication
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch streak data'); // Handle failed requests
  }

  const data = await response.json(); // Get streak data as JSON
  return data; // Return the data
};

// StreakCard component to display streak information
export default function StreakCard() {
  const [streakData, setStreakData] = useState(null); // State for streak data
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStreakData(); // Fetch streak data
        setStreakData(data); // Store streak data in state
      } catch (err) {
        setError(err.message); // Store error message
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to fetch once

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-lg text-center">
      {error ? (
        <p className="text-red-600">Error: {error}</p> // Display error message
      ) : streakData ? (
        <>
          <h2 className="text-lg font-semibold text-black">Streak Information</h2>
          <p className='text-black'>Current Streak: {streakData.current_streak}</p>
          <p className='text-black'>Longest Streak: {streakData.longest_streak}</p>
        </>
      ) : (
        <p>Loading...</p> // Loading message while fetching data
      )}
    </div>
  );
}
