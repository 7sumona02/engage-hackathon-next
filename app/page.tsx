import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/hero/Hero';
import Marq from '@/components/Marq';
import Nav from '@/components/Nav';
import Track from '@/components/track/Track';
import React from 'react';

const Page = () => {
  return (
    <div className="relative">
      {/* Image covering only the viewport */}
      <video 
        autoPlay 
        loop 
        muted 
        className="w-screen h-screen fixed top-0 left-0 object-cover z-0 opacity-80" 
        aria-hidden="true" // For accessibility
      >
        <source src="/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10"> {/* Ensure content is above the image */}
        <Nav />
        <Hero />
        <Track />
        <Marq />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Page;