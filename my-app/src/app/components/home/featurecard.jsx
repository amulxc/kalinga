'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function FeatureCards({ 
  isSlider = false,
  cards = [
    { 
      id: 1, 
      title: 'Academic Excellence', 
      body: 'Kalinga University offers world-class education with experienced faculty, modern curriculum, and industry-aligned programs designed to prepare students for successful careers.', 
      variant: 'amber' 
    },
    { 
      id: 2, 
      title: 'State-of-the-Art Infrastructure', 
      body: 'Our campus features modern laboratories, well-equipped classrooms, advanced research facilities, and cutting-edge technology to support comprehensive learning experiences.', 
      variant: 'gray' 
    },
    { 
      id: 3, 
      title: 'Industry Partnerships', 
      body: 'Strong collaborations with leading industries provide students with internship opportunities, live projects, and placement assistance to bridge the gap between academia and industry.', 
      variant: 'amber' 
    },
    { 
      id: 4, 
      title: 'Student Support Services', 
      body: 'Comprehensive support including career counseling, mentorship programs, scholarship opportunities, and extracurricular activities to ensure holistic development of every student.', 
      variant: 'gray' 
    },
  ],
  title = "Lorem ipsum dolor sit amet, consectetur",
  fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  truncatedText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  hiddenText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  imageUrl = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  imageAlt = "Kalinga students celebrating"
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const displayText = isExpanded ? fullText : truncatedText
 
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto relative">
        {/* Main rounded dark panel */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[var(--dark-blue)] overflow-visible text-white shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 pt-10">
          
          {/* Top section: Image left, Text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6 sm:mb-8 md:mb-10">
            {/* Image on left - extending outside on top */}
            <div className="relative w-full h-[400px] -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-3d-slant-mirror">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content on right */}
            <div className="flex flex-col justify-center">
              <h2 className="font-stix text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-3 sm:mb-4 text-white">{title}</h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[15px] leading-relaxed">
                {displayText}
                {!isExpanded && hiddenText && (
                  <>
                    {' '}
                    <button 
                      onClick={() => setIsExpanded(true)}
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Read More
                    </button>
                  </>
                )}
                {isExpanded && (
                  <>
                    {hiddenText}
                    {' '}
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Read Less
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Cards row - Grid or Slider */}
          {isSlider ? (
            <div className="relative">
              {/* Slider container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                >
                  {cards.map((c) => (
                    <div
                      key={c.id}
                      className="min-w-[25%] max-w-[25%] px-2 sm:px-3 flex-shrink-0"
                    >
                      <div className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-6 shadow-xl h-full ${c.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`}>
                        <div className="flex flex-col gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/60 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold !text-base mb-1.5 sm:mb-2">{c.title}</h4>
                            <p className="text-xs sm:text-sm leading-relaxed text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]">{c.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation buttons - bottom right */}
              <div className="flex justify-end items-center gap-3 mt-6 sm:mt-8">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + Math.ceil(cards.length / 4)) % Math.ceil(cards.length / 4))}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Previous cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % Math.ceil(cards.length / 4))}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Next cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {cards.map((c) => (
                <div
                  key={c.id}
                  className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-6 shadow-xl ${c.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`}>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/60 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold !text-base mb-1.5 sm:mb-2">{c.title}</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]">{c.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
