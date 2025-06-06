'use client';

import { useState, useEffect, useRef } from 'react';
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
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  
  const carouselImages = [
    "/images/login/register.png",
    "/images/login/register2.png",
    "/images/login/register3.png",
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Carousel drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // If dragged enough, change slide
    if (currentTranslate > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentTranslate < -100 && currentSlide < carouselImages.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    setCurrentTranslate(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ firstName, lastName, email, password, agreedToTerms });
  };

  return (
    <main className="min-h-screen flex">
      {/* Left Section - Image Carousel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#073742] text-white overflow-hidden">
        <div 
          ref={carouselRef}
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="flex h-full" style={{ width: `${carouselImages.length * 100}%` }}>
            {carouselImages.map((src, index) => (
              <div key={index} className="relative" style={{ width: `${100 / carouselImages.length}%` }}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={100}
                />
                <div className="absolute inset-0 bg-[#073742]/30 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Logo and Back Button */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
          <div className="text-2xl font-bold">ANEEVERSE</div>
          <Link 
            href="/"
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm hover:bg-white/20 transition-colors"
          >
            Back to website →
          </Link>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-20 left-8 right-8 z-10">
          <h2 className="text-4xl font-light mb-4">
            Unleashing Creativity,<br />
            Powering Excellence
          </h2>
          <div className="flex gap-2 mt-8">
            {carouselImages.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/30'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 bg-[#1F1F1F] p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-semibold text-white mb-2">Create an account</h1>
          <p className="text-gray-400 mb-8">
            Already have an account?{' '}
            <Link href="/login" className="text-[white] hover:underline">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#073742]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#073742]"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#073742]"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#073742]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 text-[#073742] focus:ring-[#073742] bg-[#2D2D2D]"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <Link href="/terms" className="text-[white] hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#073742] text-white font-medium hover:bg-[#052630] transition-colors"
            >
              Create account
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-[#1F1F1F]">Or register with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#3D3D3D] text-white hover:bg-[#2D2D2D] transition-colors"
              >
                <FcGoogle size={20} />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#3D3D3D] text-white hover:bg-[#2D2D2D] transition-colors"
              >
                <FaApple size={20} />
                <span>Apple</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 