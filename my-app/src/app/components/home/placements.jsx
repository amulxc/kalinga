'use client'

import React, { useState } from 'react'
import ImagePreviewCard from '../general/image_preview_card'

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
  
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]
  
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes logoMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .logo-marquee {
          animation: logoMarquee 40s linear infinite;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center md:items-center">
          {/* Left: title + stats */}
          <div className="w-full">
            <div className="text-sm sm:text-base md:text-lg lg:text-[25px] text-[var(--button-red)] mb-2 sm:mb-2.5 lg:mb-3 font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
              Placements
            </div>
            <h2 className="font-stix text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[50px] mb-2 sm:mb-3 lg:mb-4 leading-tight text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-xl mb-4 sm:mb-5 lg:mb-6 font-plus-jakarta-sans leading-relaxed sm:leading-normal lg:leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3 lg:gap-6 text-gray-800">
              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">3300 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Students Placed</h6>
              </div>

              <div className="hidden sm:block self-stretch border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">500 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Corporate Recruiters</h6>
              </div>

              <div className="hidden sm:block self-stretch border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">1300 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Internships Offered</h6>
              </div>
            </div>
          </div>

          {/* Right: image preview card with behind preview */}
          <ImagePreviewCard
            currentImage={currentImage}
            nextImageUrl={nextImageUrl}
            onPrev={prevImage}
            onNext={nextImage}
          />
        </div>
      </div>

        {/* Logos strip */}
        <div className="mt-6 sm:mt-8 lg:mt-8 px-3 sm:px-4 lg:px-6">
          <div className="bg-[var(--dark-blue)] py-4 sm:py-5 md:py-6 lg:py-8 items-center justify-center overflow-hidden relative w-full h-auto min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:h-[200px] rounded-xl">
            {/* Text stacked above logos */}
            <div className="flex flex-col items-center text-left gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
              <h5
                className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg leading-tight sm:leading-[25px] text-white text-left w-full px-4 sm:px-6 lg:px-8"
              >
                Trusted by 500+ Global Recruiters
              </h5>

              <div className="w-full overflow-hidden relative px-4 sm:px-6 lg:px-8">
                <div className="logo-marquee flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 py-1 sm:py-2">
                  {duplicatedLogos.map((l, idx) => (
                    <div
                      key={`${l}-${idx}`}
                      className="flex-shrink-0 bg-white rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-gray-700 flex items-center justify-center w-[60px] h-[45px] sm:w-[70px] sm:h-[50px] md:w-[80px] md:h-[55px] lg:w-[90px] lg:h-[60px] xl:w-[110px] xl:h-[70px]"
                      style={{
                        borderRadius: '10px'
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Placements
