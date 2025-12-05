import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'

export default function ResearchInnovation() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">

          {/* Left content */}
          <div className="pt-4 sm:pt-6 md:pt-12">
            <div className="text-lg sm:text-xl md:text-[25px] text-[var(--button-red)] font-plus-jakarta-sans font-medium leading-[25px] mb-2 sm:mb-3 pb-2 sm:pb-[10px]">
              Research & Innovation
            </div>
            <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight mb-4 sm:mb-6 text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <div className="mt-2 sm:mt-[-10px]">
              <GlobalArrowButton className="w-full sm:w-[173px] h-[40px] sm:h-[44px]">
                Learn More
              </GlobalArrowButton>
            </div>
          </div>

          {/* Right large card */}
          <div className="relative flex justify-center md:justify-end items-end mt-6 md:mt-0">
            {/* Big picture */}
            <div className="relative w-full max-w-[496px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-[10px] overflow-hidden shadow-2xl z-10 mt-10 sm:mt-14 md:mt-20 mr-0 md:mr-[50px]">
              <Image 
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
                alt="Research & Innovation"
                fill
                className="object-cover"
              />
            </div>

            {/* Long rectangle overlapping bottom horizontally - transparent with cards inside */}
            <div className="absolute w-[90%] sm:w-[95%] md:w-[1141px] h-[140px] sm:h-[160px] md:h-[192px] shadow-lg z-20 items-center justify-center px-4 sm:px-6 md:px-8 bg-gray-200/50 hidden md:flex bottom-[60px] sm:bottom-[80px] md:bottom-[110px] left-1/2 transform -translate-x-1/2 rounded-[20px]">
              {/* Uniform cards with gaps */}
              <div className="flex gap-3 sm:gap-4 md:gap-6 w-full justify-center overflow-x-auto">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className="bg-white rounded-[10px] shadow-md flex-shrink-0 w-[180px] sm:w-[200px] md:w-[240px] h-[100px] sm:h-[120px] md:h-[140px]"
                  >
                    {/* Card content placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[90%] h-[80%] bg-[var(--light-gray)] rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
