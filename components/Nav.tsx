'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CgMenuGridR } from 'react-icons/cg';
import Link from 'next/link';

// Array of link objects with text and href
const links = [
  { text: 'About Us', href: '/#about' },
  { text: 'Tracks', href: '/#tracks' },
  { text: 'Sponsors', href: '/#sponsors' },
  { text: 'FAQ', href: '/#faq' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-10 sticky inset-x-0 top-0 z-30 w-full bg-black/30 backdrop-blur-lg transition-all'>
      <div className='flex justify-between items-center text-xl font-bold'>
        <div className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>🪐</div>
        
        <div className='hidden md:flex items-center gap-10'>
          {links.map((link, index) => (
            <Link href={link.href} key={index} className='hover:text-[#006BFF] hover:scale-105 transition-all duration-200'>
              {link.text}
            </Link>
          ))}
        </div>

        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <motion.div
              initial={isOpen ? 'open' : 'closed'}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.2 }}
            >
              <CgMenuGridR className='text-xl' /> 
            </motion.div>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className='max-w-[40vw] flex flex-col md:hidden mt-4 border-2 rounded border-[#006BFF] right-[10vw] absolute py-2 pl-4 bg-black'
        >
          {links.map((link, index) => (
            <Link href={link.href} key={index} className='text-right p-4 py-2 hover:text-[#006BFF] hover:scale-105 transition-all duration-200 animate-flicker'>
              {link.text}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Nav;