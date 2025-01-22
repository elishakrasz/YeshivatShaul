import Image from 'next/image';
import Link from 'next/link';
import { Noto_Rashi_Hebrew } from 'next/font/google';

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi", subsets: ['hebrew'] });

export default function Footer() {
  return (
    <footer className={`${rashi.className} flex items-center justify-between  py-4 px-24`}>
      {/* Footer Links */}
      <div>
        <div className="flex items-center">
          <Link href="/about">
            <p className="text-slate-600 font-light text-2xl hover:underline mr-8">About Us</p>
          </Link>
          <Link href="/programs">
            <p className="text-slate-600 font-light text-2xl hover:underline mr-8">Programs</p>
          </Link>
          <Link href="/support">
            <p className="text-slate-600 font-light text-2xl hover:underline">Support</p>
          </Link>
        </div>
      </div>

      {/* Centered Text */}
      <div className={`${rashi.className} text-center flex`}>
        <h1 className="font-light text-slate-600 text-[28px]">Yeshivat Geulas Shaul</h1>
        <p className='pr-4'>{"   "}</p>
        <h1 className={`text-4xl font-semibold ${rashi.className}`}>ישיבת גאולת שאול</h1>
      </div>

      {/* Logo on the right */}
      <div className="flex items-center">
        <Image
          src="/yeshivatshaul.jpg" // Replace with the correct path to the logo
          alt="Logo"
          width={80}
          height={80}
        />
      </div>
    </footer>
  );
}
