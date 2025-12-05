'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Facilities() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const facilities = [
    { id: 1, title: 'Library', image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp' },
    { id: 2, title: 'study room', image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg' },
    { id: 3, title: 'Sports', image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg' },
    { id: 4, title: 'Classroom', image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg' },
    { id: 5, title: 'Laboratories', image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length)
  }

  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < 5; i++) {
      slides.push(facilities[(currentSlide + i) % facilities.length])
    }
    return slides
  }

  return (
    <section
      className="relative w-full py-16"
      aria-label="Facilities section"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-lg h-[500px] sm:h-[580px] md:h-[648px]"
        style={{
          backgroundImage: `url(${facilities[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.6s ease-in-out',
          imageRendering: 'crisp-edges',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/45 transition-opacity duration-300"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start h-full py-8 sm:py-12 md:py-16 lg:py-20">
          {/* Left content */}
          <div className="text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6 md:pt-8 space-y-4 sm:space-y-6 relative">
            <div style={{ marginTop: '-50px' }}>
              {/* <div className="w-12 h-1 bg-orange-500 mb-4"></div> */}
              <p className="text-white mb-7 text-lg sm:text-xl md:text-[25px] font-plus-jakarta-sans font-medium leading-[25px]">Facilities</p>
              <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">Lorem ipsum dolor sit amet, consectetur</h2>
            </div>

            <div className="relative">
              <p className="transition-all duration-300 text-2xl sm:text-3xl md:text-[40px] font-plus-jakarta-sans font-normal leading-[47px] text-left absolute -top-[60px] left-0">
                0{currentSlide + 1}
                <span className="text-white/70 text-lg sm:text-xl md:text-[22px] font-plus-jakarta-sans font-normal leading-[47px] text-left">
                  /0{facilities.length}
                </span>
              </p>
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[150px] font-light font-stix leading-none tracking-tight capitalize transition-all duration-500 ease-in-out mt-16 sm:mt-20 md:mt-[100px]" style={{ willChange: 'contents' }}>{facilities[currentSlide].title}</h3>
            </div>

            {/* Navigation buttons */}
            {/* <div className="flex items-center gap-4 pt-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div> */}
          </div>

          {/* Right column with description text */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-white flex flex-col justify-end h-full pb-6 sm:pb-8 md:pb-12">
            <p className="max-w-md text-xs font-extralight sm:text-sm md:text-[14px] font-plus-jakarta-sans leading-[25px] mb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        {/* Overlapping thumbnail strip centered at bottom */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 sm:-translate-y-16 md:-translate-y-20 -bottom-8 sm:-bottom-12 md:-bottom-16 z-20 w-[96%] sm:w-[94%] md:w-[90%] lg:w-[88%]">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {getVisibleSlides().map((facility, idx) => {
              const actualIndex = (currentSlide + idx) % facilities.length
              const barColors = ['bg-orange-500', 'bg-yellow-500', 'bg-gray-400', 'bg-green-500', 'bg-gray-400']
              const barColor = barColors[idx] || 'bg-gray-400'
              const isActive = actualIndex === currentSlide
              return (
                <div key={`${facility.id}-${currentSlide}-${idx}`} className="flex flex-col gap-1 flex-shrink-0">
                  {/* colored accent bar above each thumbnail */}
                  <div className={`w-full h-1 sm:h-2 mb-1 ${barColor} transition-all duration-300`} />
                  <button 
                    onClick={() => setCurrentSlide(actualIndex)}
                    className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 w-20 h-14 sm:w-28 sm:h-18 md:w-40 md:h-24 lg:w-48 lg:h-28 hover:opacity-90 hover:scale-105 shadow-lg ${isActive ? 'ring-2 ring-white scale-105' : ''}`}
                    aria-label={facility.title}
                  >
                    <div className="relative w-full h-full">
                      <Image 
                        src={facility.image} 
                        alt={facility.title} 
                        fill
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 sm:p-2 transition-opacity duration-300">
                        <div className="text-white text-[10px] sm:text-xs font-medium text-center capitalize">{facility.title}</div>
                      </div>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
