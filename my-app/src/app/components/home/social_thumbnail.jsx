import React from 'react'
import Image from 'next/image'

const items = [
  { id: 1, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', alt: 'Campus speaker' },
  { id: 2, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', alt: 'Students chatting' },
  { id: 3, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', alt: 'Lecture' },
  { id: 4, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', alt: 'Career guidance' },
]

export default function SocialThumbs({ className = '' }) {
  return (
    <section className={`w-full py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Title */}
        <div className="flex justify-center mb-4 sm:mb-2 md:mb-[-20px] lg:mb-[-30px]">
          <h2 className="social-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-stix">Social Media Presence</h2>
        </div>

        {/* Images gallery */}
        <div className="relative w-full ml-0 mr-0 md:ml-[20px] md:mr-[-20px] lg:ml-[40px] lg:mr-[-33px] h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:h-[420px] mb-6 sm:mb-8 md:mb-1">
          <div className="absolute inset-0 flex items-center justify-center">
              {items.map((it, idx) => {
              // Responsive positions for tablet and desktop
              const positions = [
                { md: '8%', lg: '8%' },
                { md: '34%', lg: '34%' },
                { md: '60%', lg: '60%' },
                { md: '86%', lg: '86%' },
              ]
              const pos = positions[idx] || positions[0]
              return (
                <div 
                  key={it.id} 
                  className="absolute overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[9.66px] hidden md:block top-[10px] sm:top-[15px] lg:top-[20px] w-[180px] h-[200px] md:w-[200px] md:h-[220px] lg:w-[301px] lg:h-[330px]"
                  style={{
                    left: pos.md,
                    transform: 'translateX(-50%)',
                    zIndex: 10 + idx,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image src={it.img} alt={it.alt} fill className="object-cover" />
                  </div>
                  <div className="absolute right-1.5 sm:right-2 bottom-1.5 sm:bottom-2 bg-black/30 backdrop-blur rounded-full p-1 sm:p-1.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" aria-hidden>
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                      <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                    </svg>
                  </div>
                </div>
              )
            })}
            {/* Mobile layout - grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden w-full px-2 sm:px-4">
              {items.map((it) => (
                <div 
                  key={it.id} 
                  className="relative overflow-hidden shadow-lg rounded-[9.66px] aspect-[301/330]"
                >
                  <Image src={it.img} alt={it.alt} fill className="object-cover" />
                  <div className="absolute right-1.5 sm:right-2 bottom-1.5 sm:bottom-2 bg-black/30 backdrop-blur rounded-full p-1 sm:p-1.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" aria-hidden>
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                      <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Instagram follow button - positioned over gallery, centered */}
          <div className="absolute left-1/2 bottom-[-70px] sm:bottom-[-65px] md:bottom-[-70px] lg:bottom-[-60px] transform -translate-x-1/2 z-20">
            <button className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[var(--button-red)] hover:opacity-90 text-white w-[180px] sm:w-[200px] md:w-[232px] h-[36px] sm:h-[40px] md:h-[44px] rounded-[10px] font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base transition-colors shadow-md px-3 sm:px-4">
            <span className="whitespace-nowrap font-light ml-0 sm:ml-4 md:ml-6 lg:ml-10">Follow Us Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 text-white" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
             
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
