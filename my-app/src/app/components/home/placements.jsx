'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const logos = ['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal','Google','Dell']

const Placements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const placementImages = [
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg'
  ]
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % placementImages.length)
  }
  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + placementImages.length) % placementImages.length)
  }
  
  const currentImage = placementImages[currentIndex]
  const nextImageUrl = placementImages[(currentIndex + 1) % placementImages.length]
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left: title + stats */}
          <div>
            <div className="text-base sm:text-lg md:text-xl lg:text-[25px] text-[var(--button-red)] mb-2 sm:mb-2.5 lg:mb-3 font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
              Placements
            </div>
            <h2 className="font-stix text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] mb-2 sm:mb-3 lg:mb-4 leading-tight text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-[15px] text-gray-600 max-w-xl mb-3 sm:mb-4 lg:mb-6 font-plus-jakarta-sans leading-snug sm:leading-normal lg:leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 text-center text-gray-800">
              <div className="flex-1 w-full sm:w-auto">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--button-red)]">3300 +</div>
                <div className="text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-1.5 lg:mt-2 text-[var(--light-text-gray)]">Students Placed</div>
              </div>

              <div className="hidden sm:block h-10 sm:h-12 border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--button-red)]">500 +</div>
                <div className="text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-1.5 lg:mt-2 text-[var(--light-text-gray)]">Corporate Recruiters</div>
              </div>

                <div className="hidden sm:block h-10 sm:h-12 border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--button-red)]">1300 +</div>
                <div className="text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-1.5 lg:mt-2 text-[var(--light-text-gray)]">Internships Offered</div>
              </div>
            </div>
          </div>

          {/* Right: image preview card with behind preview */}
          <div className="flex justify-center md:justify-end mr-0 sm:mr-8 md:mr-12 lg:mr-[100px]">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[260px] sm:h-[300px] md:h-[350px] lg:h-[380px]">
              {/* Behind preview - orange/yellow card */}
              <div 
                className="absolute overflow-hidden shadow-2xl z-0 hidden md:block"
                style={{
                  top: '20px',
                  right: '-20px',
                  width: '100%',
                  height: '100%',
                  transform: 'rotate(3deg)',
                  transformOrigin: 'center center',
                  borderRadius: '12px',
                  backgroundColor: '#f5c675',
                  transition: 'all 0.3s ease',
                  marginTop: '50px',
                }}
              />
              {/* Behind image preview - next image tilted */}
              <div 
                className="absolute overflow-hidden shadow-2xl z-0 hidden md:block"
                style={{
                  top: '-15px',
                  left: '-15px',
                  width: 'calc(100% + 30px)',
                  height: 'calc(100% + 30px)',
                  transform: 'rotate(-5deg) scale(0.93)',
                  transformOrigin: 'center center',
                  opacity: 0.5,
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  marginTop: '50px',
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={nextImageUrl} 
                    alt="Next placement preview" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              {/* Front card */}
              <div 
                className="relative overflow-visible shadow-2xl z-10 bg-white w-full h-full mt-8 sm:mt-12 md:mt-[50px] rounded-[12px]"
              >
                <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                  <Image 
                    src={currentImage} 
                    alt="Placement showcase" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                {/* nav arrows positioned bottom-center overlaying image */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] sm:bottom-[-8px] md:bottom-[-20px] flex gap-2 sm:gap-3 z-20">
                  <button 
                    onClick={prevImage}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md bg-[var(--button-red)] text-white shadow-md hover:opacity-90 transition-colors flex items-center justify-center text-lg sm:text-xl"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md bg-gray-300 text-gray-700 shadow-md hover:bg-gray-400 transition-colors flex items-center justify-center text-lg sm:text-xl"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos strip */}
        <div className="mt-4 sm:mt-6 lg:mt-8">
          <div className="bg-[var(--dark-blue)] rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 items-center justify-center overflow-hidden relative w-full h-auto min-h-[160px] sm:min-h-[180px] lg:h-[200px]">
            {/* Text stacked above logos */}
            <div className="flex flex-col items-center text-center gap-3 sm:gap-4 lg:gap-5 w-full">
              <div
                className="font-plus-jakarta-sans text-[clamp(14px,2vw,20px)] leading-tight sm:leading-[25px] text-white text-center w-full px-2"
              >
                Trusted by 500+ Global Recruiters
              </div>

              <div className="w-full flex justify-center">
                <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 py-1 sm:py-2 flex-wrap justify-center">
                  {logos.map((l) => (
                    <div
                      key={l}
                      className="flex-shrink-0 bg-white rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 flex items-center justify-center w-[70px] h-[50px] sm:w-[80px] sm:h-[55px] md:w-[90px] md:h-[60px] lg:w-[110px] lg:h-[70px]"
                      style={{
                        borderRadius: '10px'
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              {/* arrow controls on right */}
              {/* <div className="flex gap-3 flex-shrink-0">
                <button className="w-9 h-9 rounded-md bg-[#972B28] text-white shadow hover:bg-[#6d211d] transition-colors flex items-center justify-center">‹</button>
                <button className="w-9 h-9 rounded-md bg-gray-300 text-gray-800 shadow hover:bg-gray-400 transition-colors flex items-center justify-center">›</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Placements
