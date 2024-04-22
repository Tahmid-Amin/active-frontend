// pages/dashboard.js
"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import StreakCard from '@/components/Streak';


// function Dashboard() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
//             <div className="flex justify-start lg:w-0 lg:flex-1">
//               <Link href="/">
//                 <span className="sr-only">Your Company</span>
//                 <img className="h-8 w-auto sm:h-10 cursor-pointer" src="/your-logo.svg" alt="" />
//               </Link>
//             </div>
//             <div className="-mr-2 -my-2 md:hidden">
//               <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                 {/* Mobile menu button */}
//               </button>
//             </div>
//             <nav className="hidden md:flex space-x-10">
//               <div className="relative">
//                 {/* Dropdown menu toggle */}
//                 <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={toggleDropdown}>
//                   <span>Account</span>
//                 </button>
//                 {/* Dropdown panel */}
//                 {dropdownOpen && (
//                   <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
//                     <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                       <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                         <Link href="/account">
//                           <span className="hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium text-gray-900 cursor-pointer">
//                             Your Account
//                           </span>
//                         </Link>
//                         <span onClick={handleLogout} className="hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium text-gray-900 cursor-pointer">
//                           Logout
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <main className="flex-1">
//         <div className="py-6">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//             {/* Replace with your dashboard content */}
//             <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// function handleLogout() {
//   // Implement your logout functionality here
//   console.log('Logout logic goes here.');
// }

// export default Dashboard;

// app/dashboard/page.js

// export default function DashboardPage() {
//   return (
//     <div className="max-w-4xl mx-auto px-4">
//       <h1 className="text-xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
//       <p className="text-gray-800">This is your main dashboard.</p>
//     </div>
//   );
// }

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 flex justify-between items-start">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
        <p className="text-gray-800">This is your main dashboard.</p>
      </div>

      <StreakCard /> {/* Display StreakCard on the right side */}
    </div>
  );
}
