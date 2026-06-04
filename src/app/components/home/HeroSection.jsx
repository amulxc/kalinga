'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import GlobalArrowButton from '../general/global-arrow_button';

const HeroSection = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2 for images, 3 for video

  const images = [
    'https://cdn.kalingauniversity.ac.in/kalingabanner.webp',
  ];

  useEffect(() => {
    if (currentStep < 3) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000); // 2 seconds per image
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <section suppressHydrationWarning={true} className="-mt-[80px] relative h-[500px] md:h-[600px] lg:h-[700px] md:mx-2 mx-0 md:rounded-2xl">
      {/* Background Content */}
      <div suppressHydrationWarning={true} className="absolute inset-0 h-full w-full md:rounded-2xl overflow-hidden">
        {currentStep < 3 ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${images[currentStep]}')`,
              backgroundColor: '#e6e9f2',
            }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ backgroundColor: '#e6e9f2' }}
          >
            <source src="/video/kalinga-reel.mp4" type="video/mp4" />
          </video>
        )}
        <div suppressHydrationWarning={true} className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
      </div>
      <div suppressHydrationWarning={true} className="container relative z-1 mx-auto h-full flex flex-col items-center justify-center text-center text-white gap-4 md:w-10/12 w-full">
        <h1>India's Leading Private University</h1>
        <p className="md:text-base text-xs md:w-8/12 w-11/12">Step into a World of Educational Excellence. A Rising Hub of Innovation, Diversity, and Future-Ready Education.</p>
        <Link href="/about-us" className="inline-flex">
          {/* <GlobalArrowButton
            as="span"
            className="!bg-white !text-black"
            arrowClassName="!bg-[var(--button-red)]"
            arrowIconClassName="!text-white"
            textClassName="!text-black"
          >
            Learn More
          </GlobalArrowButton> */}
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
