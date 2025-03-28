'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already logged in
    const session = document.cookie.includes('admin_session=true');
    if (session) {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // For demo purposes, hardcoded credentials
    // In a real app, this would be an API call
    if (email === 'admin@aneeverse.com' && password === 'admin123') {
      // Set a cookie to maintain the session
      document.cookie = 'admin_session=true; path=/';
      router.push('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="Aneeverse Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-600 mt-2">Sign in to access the admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-600 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Email: admin@aneeverse.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
} 