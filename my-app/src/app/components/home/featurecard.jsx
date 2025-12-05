import React from 'react'
import Image from 'next/image'

export default function FeatureCards() {
  const cards = [
    { id: 1, title: 'Lorem ipsum dolor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', variant: 'amber' },
    { id: 2, title: 'Lorem ipsum dolor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', variant: 'gray' },
    { id: 3, title: 'Lorem ipsum dolor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', variant: 'amber' },
    { id: 4, title: 'Lorem ipsum dolor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', variant: 'gray' },
  ]
 
  return (
    <section className="py-8 sm:py-12 px-4">
      <div className="container mx-auto relative">
        {/* Main rounded dark panel */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0D3B66] overflow-visible text-white shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
          
          {/* Top section: Image left, Text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6 sm:mb-8 md:mb-20">
            {/* Image on left - extending outside on top */}
            <div className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24">
              <div className="relative w-full h-full rounded-2xl overflow-hidden transform-3d-slant-mirror shadow-2xl">
                <Image
                  src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
                  alt="Kalinga students celebrating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content on right */}
            <div className="flex flex-col justify-center">
              <h2 className="font-stix text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-3 sm:mb-4 text-white">Lorem ipsum dolor sit amet, consectetur</h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[15px] leading-relaxed mb-3 sm:mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
              <a href="#" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors">
                Read More <span className="text-base sm:text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Cards row - 4 cards in a row at bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {cards.map((c) => (
              <div
                key={c.id}
                className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-6 shadow-xl ${c.variant === 'amber' ? 'bg-amber-100 text-black' : 'bg-slate-100 text-gray-800'}`}>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/60 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm md:text-sm mb-1.5 sm:mb-2">{c.title}</h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
