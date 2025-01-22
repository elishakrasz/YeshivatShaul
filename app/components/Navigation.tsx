'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Rashi_Hebrew } from 'next/font/google';

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi", subsets: ['hebrew'] });

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${rashi.className} bg-white shadow-inner py-10 lg:px-6 md:px-12`}>
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/yeshivatshaul.jpg" // Replace with the correct path to the logo
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Navigation title */}
        <div className="hidden md:flex items-center">
          <h1 className="font-light text-slate-600 text-[22px] lg:text-[28px]">Yeshivat Geulas Shaul</h1>
          <h1 className="ml-2 text-lg md:text-2xl">-</h1>
          <h1 className={`ml-4 text-2xl md:text-4xl font-semibold ${rashi.className}`}>ישיבת גאולת שאול</h1>
        </div>

    <div>
    <Link className="hidden md:block" href="mailto:info@ygs.world"
        >
          <p className="text-slate-600 font-light text-xl lg:text-2xl hover:text-blue-900">Contact Us</p>
        </Link>
    </div>
        
    

        {/* Hamburger Icon */}
        <div className="block md:hidden relative">
          <button
            className=" text-slate-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
              <ul className="py-2">
                <li>
                  <Link href="mailto:info@ygs.world">
                    <p className="px-4 py-2 text-slate-600 font-light text-lg hover:text-blue-900 hover:bg-gray-100">Contact</p>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/about">
                    <p className="px-4 py-2 text-slate-600 font-light text-lg hover:text-blue-900 hover:bg-gray-100">About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/programs">
                    <p className="px-4 py-2 text-slate-600 font-light text-lg hover:text-blue-900 hover:bg-gray-100">Programs</p>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <p className="px-4 py-2 text-slate-600 font-light text-lg hover:text-blue-900 hover:bg-gray-100">Support</p>
                  </Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
