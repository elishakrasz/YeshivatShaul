import Image from 'next/image';
import Link from 'next/link';
import { Noto_Rashi_Hebrew } from 'next/font/google';

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi", subsets: ['hebrew'] });

export default function Footer() {
  return (
    <footer className={`${rashi.className} flex items-center justify-between  py-4 px-32`}>
      {/* Footer Links */}
      <div>
        <div className="flex items-center">
          <Link href="mailto:info@ygs.world"
          >
            <p className="text-slate-600 font-light text-xl hover:underline mr-8">About Us</p>
          </Link>
          <Link href="mailto:info@ygs.world"
          >
            <p className="text-slate-600 font-light text-xl hover:underline mr-8">Programs</p>
          </Link>
          <Link href="mailto:info@ygs.world"
          >
            <p className="text-slate-600 font-light text-xl hover:underline">Support</p>
          </Link>
        </div>
      </div>

      {/* Centered Text */}
      <div className={`${rashi.className} text-center flex py-4`}>
        <h1 className="font-light text-slate-600 text-[28px]">Yeshivat Geulas Shaul</h1>
        <p className='pr-4'>{"   "}</p>
        <h1 className={`text-4xl font-semibold ${rashi.className}`}>ישיבת גאולת שאול</h1>
      </div>

      {/* Logo on the right */}
      <div className="flex items-center w-14">
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
