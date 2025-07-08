'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  // no carousel needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ firstName, lastName, email, password, agreedToTerms });
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative bg-[#073742]">
      {/* Background Image */}
      <Image src="/images/login/register.png" alt="Background" fill className="object-cover" priority />
      {/* overlay */}
      <div className="absolute inset-0 bg-[#073742]/60" />

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-12">
          <div className="text-xl font-bold text-[#073742]">ANEEVERSE</div>
          <Link href="/" className="text-sm text-[#073742] hover:underline">Back to website →</Link>
        </div>

        <h1 className="text-2xl font-bold text-[#073742] mb-1">Create an account</h1>
        <p className="text-gray-600 mb-8 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#073742] hover:underline">Log in</Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:border-[#073742]" required />
            <input type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:border-[#073742]" required />
          </div>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:border-[#073742]" required />
          <div className="relative">
            <input type={showPassword? 'text':'password'} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:border-[#073742]" required />
            <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {showPassword? <IoEyeOffOutline size={20}/> : <IoEyeOutline size={20}/>}
            </button>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" checked={agreedToTerms} onChange={(e)=>setAgreedToTerms(e.target.checked)} className="w-4 h-4 rounded border-gray-200 text-[#073742] focus:ring-[#073742]" />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">I agree to the <Link href="/terms" className="text-[#073742] hover:underline">Terms & Conditions</Link></label>
          </div>
          <button type="submit" className="w-full py-2.5 rounded-lg bg-[#073742] text-white font-medium hover:bg-[#085061] transition-colors">Create account</button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <span className="flex-1 h-px bg-gray-200"/>
          <span className="text-gray-600 text-sm">Or register with</span>
          <span className="flex-1 h-px bg-gray-200"/>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-[#073742] hover:bg-gray-50 transition-colors"><FcGoogle size={20}/> Google</button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-[#073742] hover:bg-gray-50 transition-colors"><FaApple size={20}/> Apple</button>
        </div>
      </div>
    </main>
  );
} 