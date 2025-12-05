import React from 'react'
import Image from 'next/image'

const logos = ['Infosys','Citi','Microsoft','Adobe','Cognizant']

const GlobalPresence = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto bg-[var(--dark-blue)] rounded-xl p-4 sm:p-6 md:p-8 text-center text-white relative w-full h-auto min-h-[500px] sm:min-h-[550px] md:h-[571px]">
        <div className="max-w-3xl mx-auto">
          <div className="text-base font-plus-jakarta-sans sm:text-lg md:text-xl lg:text-[25px] text-white/90 mb-2 sm:mb-3 font-medium leading-[25px] text-center">
            Global Presence
          </div>
          <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] my-3 sm:my-4 leading-tight px-2 text-white">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className="text-xs sm:text-sm md:text-[16px] text-white/80 leading-relaxed px-2 sm:px-4 font-plus-jakarta-sans text-center">
            Home to students from 50+ countries, Kalinga University fosters global learning through exchange programs, international collaborations, and a culturally rich campus environment.
          </p>
        </div>

        {/* globe graphic */}
        <div className="mt-6 sm:mt-8">
          <div className="mx-auto w-full max-w-[729px] h-auto min-h-[200px] sm:min-h-[250px] md:h-[289px] relative -mb-8 sm:-mb-12 md:-mb-17 z-0 px-4">
            <div className="relative w-full h-[289px]">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png"
                alt="Global map"
                fill
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="pb-6 sm:pb-8 md:pb-12 lg:pb-10 -mt-4 sm:-mt-6 md:-mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full z-10 relative px-4">
          {logos.map((l) => (
            <div key={l} className="bg-white text-gray-700 rounded-md px-4 sm:px-6 py-2 sm:py-3 shadow text-xs sm:text-sm font-medium w-full sm:w-[180px] md:w-[198px] h-auto min-h-[70px] sm:h-[90px] border-[4px] sm:border-[6px] border-white flex items-center justify-center">
              {l}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
