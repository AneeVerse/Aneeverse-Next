'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft, FaLinkedin, FaStar } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

const logos = [
  "/images/home/logo/ishaniya foundashion logo 1.png",
  "/images/home/logo/gilmoreoak logo 2.png",
  "/images/home/logo/deepak fertilizers logo 3.png",
  "/images/home/logo/Tiger Terrain logo 4.png",
  "/images/home/logo/mesmerize india logo 5.png",
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioWorks, setPortfolioWorks] = useState([]);

  // Fetch portfolio works for the left panel
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "portfolioWork"] | order(featured desc, publishedAt desc)[0...4] {
            _id,
            title,
            mainImage,
            thumbnailImage,
            industry
          }
        `);
        setPortfolioWorks(data || []);
      } catch (err) {
        console.error('Error fetching portfolio for login page:', err);
      }
    };
    fetchPortfolio();
  }, []);

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

  // Helper to get image URL
  const getImageUrl = (work) => {
    const image = work.thumbnailImage || work.mainImage;
    if (image?.asset) {
      return urlForImage(image).width(400).height(400).url();
    }
    return null;
  };

  // Default display categories if sanity hasn't returned enough data
  const categories = [
    { title: "Brand & Identity" },
    { title: "Marketing & Advertising" },
    { title: "Digital & Web" },
    { title: "Motion & Video" }
  ];

  return (
    <main className="h-screen w-full bg-[#052b33] p-4 lg:p-6 flex items-center justify-center overflow-hidden font-sans">
      <div className="w-full h-full max-w-[1400px] flex flex-col lg:flex-row gap-4 lg:gap-6">

        {/* LEFT CARD - Brand Panel */}
        <div className="hidden lg:flex flex-1 bg-[#073742] rounded-[40px] p-8 xl:p-12 flex-col justify-between relative overflow-hidden text-white h-full shadow-2xl shadow-black/20">
          {/* Top: Logo */}
          <div className="z-10">
            <Link href="/" className="text-3xl font-black tracking-tighter text-[#88d7f0] uppercase">
              Aneeverse
            </Link>
          </div>

          {/* Middle: Headline & Cards */}
          <div className="z-10 flex-grow flex flex-col justify-center max-w-4xl">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] uppercase tracking-tighter">
                Creative<br />
                Subscription Partner
              </h1>
            </div>

            {/* Service Cards Grid - 4 items */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[0, 1, 2, 3].map((idx) => {
                const work = portfolioWorks[idx];
                const category = categories[idx];
                const imageUrl = work && getImageUrl(work);

                return (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="bg-black/20 rounded-xl aspect-[4/5] relative overflow-hidden group shadow-2xl">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={work?.title || category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white/5 animate-pulse">
                          <span className="text-white/20 text-[8px] text-center px-2 uppercase font-bold">
                            {category.title}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-[9px] uppercase tracking-wider text-white/60">
                      {category.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom: Trusted By Logos */}
          <div className="z-10 pt-6 border-t border-white/10">
            <p className="text-[10px] font-bold tracking-widest uppercase opacity-40 mb-4">Trusted by established brands</p>
            <div className="flex flex-wrap items-center gap-x-8 xl:gap-x-10 gap-y-4 filter brightness-0 invert opacity-60">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="Partner Logo" className="h-6 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CARD - Login Panel */}
        <div className="w-full lg:w-[450px] xl:w-[500px] h-full bg-white rounded-[40px] flex flex-col justify-center relative p-8 lg:p-10 xl:p-14 shadow-2xl shadow-black/20">
          <div className="max-w-[380px] w-full mx-auto flex flex-col justify-center">

            <div>
              <h2 className="text-3xl lg:text-[42px] font-bold text-gray-900 mb-8 tracking-tight text-left">Sign In</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-full bg-[#F2F2F2] text-gray-900 border-none focus:ring-2 focus:ring-[#073742] transition-all placeholder-gray-500 font-medium text-base h-[54px]"
                  required
                />
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-[#F2F2F2] text-gray-900 border-none focus:ring-2 focus:ring-[#073742] transition-all placeholder-gray-500 font-medium text-base h-[54px]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    tabIndex="-1"
                  >
                    {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                  </button>
                </div>

                {error && <div className="text-red-500 text-xs font-bold px-2">{error}</div>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all shadow-lg disabled:opacity-70 mt-2 h-[54px] active:scale-[0.98]"
                >
                  {isLoading ? 'Signing in...' : 'Continue'}
                </button>
              </form>

              <div className="mt-4 text-left">
                <Link href="/forgot-password" title="Forgot Password" className="text-[#3F51B5] lg:text-blue-600 font-semibold text-sm hover:underline transition-colors">
                  Forgot your password?
                </Link>
              </div>
            </div>

            {/* Social Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white text-gray-400 font-bold uppercase tracking-[0.1em]">OR</span>
              </div>
            </div>

            {/* Social Stack */}
            <div className="space-y-4">
              <button className="w-full h-[54px] flex items-center justify-center gap-3 px-6 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all font-bold text-base bg-white">
                <FcGoogle size={22} /> <span>Login with Google</span>
              </button>
              <button className="w-full h-[54px] flex items-center justify-center gap-3 px-6 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all font-bold text-base bg-white">
                <FaMicrosoft size={18} className="text-[#00a4ef]" /> <span>Login with Microsoft</span>
              </button>
              <button className="w-full h-[54px] flex items-center justify-center gap-3 px-6 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all font-bold text-base bg-white">
                <FaLinkedin size={22} className="text-[#0077b5]" /> <span>Login with LinkedIn</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}