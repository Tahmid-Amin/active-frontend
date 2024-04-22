// export default function UserLayout({ children }) {
//     return <section>{children}</section>
//   }

// app/user/layout.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function UserLayout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <nav className="flex space-x-4">
            <Link href="/user/dashboard"
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard
            </Link>
            <Link href="/user/decks"
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">My Decks
            </Link>
            <Link href="/user/review"
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Review
            </Link>
          </nav>
          <div className="relative">
            <button onClick={toggleDropdown} className="bg-gray-300 text-gray-800 px-3 py-2 rounded-md">
              Account
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <button onClick={() => alert('Logout logic here')} className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <main className="py-10">
        {children}
      </main>
    </div>
  );
}
