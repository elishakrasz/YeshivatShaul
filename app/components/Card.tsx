import React from 'react';
import {Noto_Rashi_Hebrew } from 'next/font/google'
import Image from 'next/image';

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi", subsets: ['hebrew'] });

interface CardProps {
  title: string;
  subTitle: string;
}

const Card: React.FC<CardProps> = ({ title, subTitle }) => {
  return (
    <div className={`${rashi.className} border-gray-400 border-1 shadow-lg flex flex-col w-[350px] h-[350px] text-slate-800 font-light text-[32px] items-center justify-center`}>
      <h1>{title}</h1>
      <h1 className='mt-3'>{subTitle}</h1>
    </div>
  );
};

export default Card;
