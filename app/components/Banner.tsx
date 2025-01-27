import Link from 'next/link'
import React from 'react'
import {Noto_Rashi_Hebrew } from 'next/font/google'

const rashi = Noto_Rashi_Hebrew({ variable: "--font-rashi", subsets: ['hebrew'] });


const Banner = () => {
  return (
    <div className={`${rashi.className} mx-auto justify-center items-center flex pt-16 pb-24`}>
        <Link className="text-3xl font-light text-slate-400 hover:text-blue-900" href="https://zoom.us/j/99218765366?pwd=iar399lpDbjZuw5EvWcTrOdKAzlMvg.1">Click Here to Join the Session</Link>
    </div>
  )
}

export default Banner