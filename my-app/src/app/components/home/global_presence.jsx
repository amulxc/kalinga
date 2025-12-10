'use client'
import React from 'react'
import Image from 'next/image'

const GlobalPresence = ({ 
  subtitle = "Global Presence",
  title = "Supporting Global Students at Every Step",
  description = "Your home away from home ,Our International Students Cell guides you from admission to graduation. From visa support to cultural integration, we ensure a smooth transition.Learn, grow, and thrive in a truly global community at Kalinga University.",
  logos = ['Infosys','Citi','Microsoft','Adobe','Cognizant'],
  imageUrl = "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png",
  imageAlt = "Global map",
  subtitleColor = "text-white",
  titleColor = "text-white",
  descriptionColor = "text-white/80",
  backgroundColor = "bg-[var(--dark-blue)]"
}) => {
  return (
    <section className="py-16">
      <div className="px-4 lg:px-6">
        <div className={`mx-auto ${backgroundColor} rounded-xl px-4 py-8 sm:p-6 md:p-16 text-center text-white relative w-full h-auto min-h-[500px] sm:min-h-[550px] md:h-[571px]`}>
        <div className="max-w-4xl mx-auto">
          <h5 className={`text-base font-plus-jakarta-sans !sm:text-lg md:text-xl !lg:text-[25px] px-2 ${subtitleColor} mb-2 sm:mb-3 font-medium leading-[25px] text-left md:text-center`}>
            {subtitle}
          </h5>
          <h2 className={`font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] my-3 sm:my-4 leading-tight px-2 text-left md:text-center ${titleColor}`}>
            {title}
          </h2>
          <p className={`text-sm ${descriptionColor} leading-relaxed px-2 sm:px-4 font-plus-jakarta-sans text-left md:text-center text-center`}>
            {description}
          </p>
        </div>

        {/* globe graphic */}
        <div className="mt-6 sm:mt-8">
          <div className="mx-auto w-full max-w-[729px] h-auto min-h-[200px] sm:min-h-[250px] md:h-[289px] relative -mb-8 sm:-mb-12 md:-mb-17 z-0 px-4">
            <div className="relative w-full h-[289px]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Logos inside background */}
        <div className="pb-6 sm:pb-8 md:pb-12 lg:pb-10 -mt-4 sm:-mt-6 md:-mt-8 w-full z-4 relative px-4">
          {/* Mobile: Marquee */}
          <div className="sm:hidden overflow-hidden w-full">
            <div className="flex animate-marquee gap-3">
              {[...logos, ...logos].map((l, idx) => (
                <div key={`${l}-${idx}`} className="bg-white text-gray-700 rounded-md px-4 py-2 shadow text-xs font-medium w-[160px] flex-shrink-0 h-[75px] border-[4px] border-white flex items-center justify-center">
                  {l}
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop: Flex wrap */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {logos.map((l) => (
              <div key={l} className="bg-white text-gray-700 rounded-md px-4 sm:px-6 py-2 sm:py-3 shadow text-xs sm:text-sm font-medium w-[160px] md:w-[160px] h-[75px] border-[4px] sm:border-[6px] border-white flex items-center justify-center">
                {l}
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
