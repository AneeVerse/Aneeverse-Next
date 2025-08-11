'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Decorative panel doesn't need carousel state now

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok && data.success) {
        window.location.href = '/admin';
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex">
      {/* Decorative left section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center bg-[#073742] text-white p-16 relative overflow-hidden">
        {/* Logo & Back */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
          <div className="text-2xl font-bold tracking-wide">ANEEVERSE</div>
          <Link href="/" className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm hover:bg-white/20 transition-colors">
            Back to website →
          </Link>
        </div>

        <h2 className="text-5xl font-light leading-tight z-10 text-center">
          Unleashing Creativity,
          <br />Powering Excellence
        </h2>

        {/* Decorative SVG blobs */}
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-40 -right-40 opacity-20">
          <circle cx="350" cy="350" r="350" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0a4c5c" />
              <stop offset="100%" stopColor="#0f6a7f" />
            </linearGradient>
          </defs>
        </svg>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-48 -left-48 opacity-10 rotate-45">
          <rect x="0" y="0" width="500" height="500" rx="60" fill="#0e586d" />
        </svg>
      </div>

      {/* Right section */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-semibold text-[#073742] mb-2">Welcome back</h1>
          <p className="text-gray-600 mb-8">
            New here?{' '}
            <Link href="/register" className="text-white hover:underline">
              Create an account
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#073742]"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:border-[#073742]"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-[#073742] text-white font-medium hover:bg-[#085061] transition-colors disabled:opacity-60"
            >
              {isLoading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          {/* Divider */}
          {/* <div className="my-8 flex items-center gap-4">
            <span className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">Or continue with</span>
            <span className="flex-1 h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#073742] hover:bg-gray-50 transition-colors">
              <FcGoogle size={20} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#073742] hover:bg-gray-50 transition-colors">
              <FaApple size={20} /> Apple
            </button>
          </div> */}
        </div>
      </div>
    </main>
  );
} 