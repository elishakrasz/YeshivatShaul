import React from 'react'
import {Noto_Rashi_Hebrew } from 'next/font/google'
import Image from 'next/image';

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi", subsets: ['hebrew'] });


function Hero() {
  return (
    <div className={ `${rashi.className} grid grid-cols-2 px-6 h-[600px]`}>
        <div className={ `${rashi.className} mt-8 items-center justify-center flex bg-center w-full`}>
    <Image 
        src="/yeshivatshaul.jpg"
        width={550}
        height={550}
        alt='Yeshivas Geulas Shaul Logo'
    />
 
</div>
<div>
<div className="flex flex-col m-4 mt-10 px-6 shadow-sm items-center text-center h-[580px] bg-white text-gray-600">
    {/* <img src="yeshivatshaul.jpg" alt="Yeshivas Geulas Shaul Logo" className="w-48 h-auto mb-6" /> */}
    <h1 className="mt-32 text-[40px] font-bold mb-4 max-w-[500px]">Welcome to Yeshivas Geulas Shaul</h1>
    <p className="text-xl mt-2 px-12 tracking-wide mb-6">Join us in building a brighter future with Torah, growth, and community.</p>
    <a href="#get-started" className="px-10 tracking-wider py-3 mt-8 text-lg font-medium text-white bg-blue-800 opacity-80 rounded-full hover:bg-blue-900 transition">
      Contact Us
    </a>
  </div>
</div>
    </div>
    
  )
}

export default Hero