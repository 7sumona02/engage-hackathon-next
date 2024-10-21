import React from 'react'

const Footer = () => {
  return (
    <div className='p-5'>
      <div className='flex justify-center items-center md:gap-14 gap-6 md:text-xl text-xs'>
        <button
            className="bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-[rgb(0,107,255)] 
        after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
        >
            Instagram
        </button>
        <button
        className="bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-[rgb(0,107,255)] 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
      >
        Github
      </button>
      <button
            className="bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-[rgb(0,107,255)]
        after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
        >
            Discord
        </button>
        <button
        className="bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-[rgb(0,107,255)]
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
      >
        Momentum
      </button>
      </div>
    </div>
  )
}

export default Footer
