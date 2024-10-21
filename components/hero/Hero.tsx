import React from 'react'
import './hero.css'
import Countdown from '../Countdown'

const Hero = () => {
  const targetDate = new Date("2024-11-30T12:00:00").getTime(); // Example date
  return (
    <div id='/' className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col gap-10 justify-center items-center -mt-24'>
        <div className='md:text-8xl text-5xl font-bold text-[rgb(0,107,255)] animate-flicker'>Engage 4.0</div>
        <div className='md:text-4xl text-xl font-bold text-[rgb(0,107,255)] animate-flicker'>Hack : Engage : Build</div>
        <div className='mt-4'>
          <div className='btn font-bold md:text-xl text-sm'>Apply with Devfolio</div>
        </div>
        <div className='mt-20'><Countdown targetDate={targetDate} /></div>
      </div>
    </div>
  )
}

export default Hero
