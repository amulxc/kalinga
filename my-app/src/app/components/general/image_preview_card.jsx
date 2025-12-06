'use client'

import React from 'react'
import Image from 'next/image'

const ImagePreviewCard = ({ currentImage, nextImageUrl, onPrev, onNext }) => {
  return (
    <div className="flex justify-center md:justify-end mr-0 sm:mr-4 md:mr-8 lg:mr-[100px] mt-6 md:mt-0">
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] xl:h-[380px]">
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
              alt="Next preview" 
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        {/* Front card */}
        <div 
          className="relative overflow-visible shadow-2xl z-10 bg-white w-full h-full mt-4 sm:mt-6 md:mt-8 lg:mt-[50px] rounded-[12px]"
        >
          <div className="absolute inset-0 rounded-[12px] overflow-hidden">
            <Image 
              src={currentImage} 
              alt="Preview showcase" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          {/* nav arrows positioned bottom-center overlaying image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] sm:bottom-[-10px] md:bottom-[-12px] lg:bottom-[-20px] flex gap-2 sm:gap-3 z-20 pointer-events-auto">
            <div className="shadow-lg rounded-lg pointer-events-none">
              <button 
                type="button"
                onClick={onPrev}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto relative z-10"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="shadow-lg rounded-lg pointer-events-none">
              <button 
                type="button"
                onClick={onNext}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors cursor-pointer pointer-events-auto relative z-10"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreviewCard

