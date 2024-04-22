// Assuming this file is located at app/signup/page.client.js or a similar structure
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Signup() {
  // State management for form data
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  // Handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make sure to replace the URL with your actual Django API endpoint
    const response = await fetch('http://127.0.0.1:8000/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Signup successful");
      router.push('/login'); // Redirects to the login page
    } else {
      console.log("Signup failed");
      // Handle errors, such as displaying an error message
    }
  };

  // The form and its fields, styled with Tailwind CSS
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Sign Up - Active Recall App</title>
      </Head>
      <main className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            required
          />
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            required
          />
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
          />
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
}