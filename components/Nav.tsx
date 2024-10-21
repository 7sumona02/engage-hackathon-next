import React from 'react'

const Nav = () => {
  return (
    <div className='p-10 sticky inset-x-0 top-0 z-30 w-full bg-black/30 backdrop-blur-lg transition-all'>
      <div className='flex justify-between items-center text-xl font-bold'>
        <div>
            <div className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>Logo</div>
        </div>
        <div className='flex items-center gap-10'>
            <div className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>About Us</div>
            <div className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>Tracks</div>
            <div className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>Sponsors</div>
            <div className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>FAQ</div>
        </div>
      </div>
    </div>
  )
}

export default Nav
