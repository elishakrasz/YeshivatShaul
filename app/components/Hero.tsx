import React from "react";
import { Noto_Rashi_Hebrew } from "next/font/google";
import Image from "next/image";

const rashi = Noto_Rashi_Hebrew({
  variable: "--font-rashi",
  subsets: ["hebrew"],
});

function Hero() {
  return (
    <div className={`${rashi.className} h-full lg:grid lg:grid-cols-2 px-16 lg:h-[600px]`}>
      <div
        className={`${rashi.className} mt-8 items-center justify-center flex bg-center  w-full`}
      >
        <Image
          src="/yeshivatshaul.jpg"
          width={550}
          height={550}
          alt="Yeshivas Geulas Shaul Logo"
        />
      </div>
      <div>
        <div className="flex flex-col md:m-4 md:mt-10 px-6 items-center text-center h-[580px] bg-white text-gray-600">
          {/* <img src="yeshivatshaul.jpg" alt="Yeshivas Geulas Shaul Logo" className="w-48 h-auto mb-6" /> */}
          <h1 className="mt-16 text-3xl lg:mt-32 lg:text-[40px] font-bold mb-4 max-w-[500px]">
            Welcome to Yeshivas Geulas Shaul
          </h1>
          <p className="text-lg text-gray-600 lg:text-xl mt-3 md:px-12 tracking-wide mb-6">
            Join us in building a brighter future with Torah, growth, and
            community.
          </p>
          <a
            href="mailto:info@ygs.world"
            className="px-10 tracking-wider py-3 mt-5 text-xl font-light bg-blue-600 border-gray-100 border-2 hover:bg-blue-800 opacity-80 rounded-full text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
