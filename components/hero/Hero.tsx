import React from 'react'
import './main.css'
import Countdown from '../Countdown'

const Hero = () => {
  const targetDate = new Date("2024-11-30T12:00:00").getTime(); // Example date
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col gap-10 justify-center items-center -mt-24'>
        <div className='text-8xl font-bold text-[rgb(0,107,255)] animate-flicker'>Engage 4.0</div>
        <div className='text-4xl font-bold text-[rgb(0,107,255)] animate-flicker'>Hack : Engage : Build</div>
        <div className='mt-4'>
          <div className='btn font-bold'>Apply with Devfolio</div>
        </div>
        <div className='mt-20'><Countdown targetDate={targetDate} /></div>
      </div>
    </div>
  )
}

export default Hero
