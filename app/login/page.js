// "use client";
// // pages/login.js or app/login/page.client.js
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Login() {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const router = useRouter();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Adjust the URL to match your Django backend login endpoint
//     const response = await fetch('http://localhost:8000/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     });

//     if (response.ok) {
//       // Assuming your backend returns a token or similar for successful logins
//       // Store the token in localStorage or a cookie as needed
//       console.log("Login successful");
//       router.push("/user/dashboard"); // Redirect to the dashboard page
//     } else {
//       // Handle errors, such as displaying an error message
//       console.error("Login failed");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//       <main className="bg-white p-8 rounded-lg shadow w-full max-w-sm">
//         <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="username"
//             value={credentials.username}
//             onChange={handleChange}
//             placeholder="Username"
//             className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//           <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Log In</button>
//         </form>
//       </main>
//     </div>
//   );
// }

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Make sure you use the correct import for useRouter based on Next.js version

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Adjust the URL to match your Django backend login endpoint
    const response = await fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();  // Parse JSON data from response
      if (data.token) {
        localStorage.setItem('token', data.token);  // Store the token in localStorage
        console.log("Login successful");
        router.push("/user/dashboard"); // Redirect to the dashboard page
      } else {
        console.error("Login failed: No token received");
      }
    } else {
      console.error("Login failed: Server responded with an error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <main className="bg-white p-8 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Log In</button>
        </form>
      </main>
    </div>
  );
}
