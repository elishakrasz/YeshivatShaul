import Image from 'next/image';
import Link from 'next/link';
import {Noto_Rashi_Hebrew } from 'next/font/google'

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi" });



export default function Navigation() {
  return (
    <nav className={ `${rashi.className} flex items-center justify-between bg-white shadow-inner py-4 px-24`}>
      {/* Logo on the left */}
      <div className="flex items-center">
        <Image
          src="/yeshivatshaul.jpg" // Replace with the correct path to the logo
          alt="Logo"
          width={80}
          height={80}
        />
        
      </div>
      {/* Navigation links */}
      <div className={ `${rashi.className} flex items-center justify-between`}>
      <h1 className='font-light text-slate-600 text-[28px]'>Yeshivat Geulas Shaul</h1>
        <h1 className='ml-4 text-2xl'>-</h1>
      <h1 className={`ml-6 text-4xl font-semibold ${rashi.className}`}>ישיבת גאולת שאול</h1>
      </div>
      
      
      <div >
        <Link href="/contact">
          <p className="text-slate-600 font-light text-2xl hover:underline ">Contact</p>
        </Link>
      </div>
    </nav>
  );
}