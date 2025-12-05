'use client'

import React from 'react'
import Image from 'next/image'

const AccreditationRanking = () => {
  const accreditations = [
    { id: 1, name: 'NAAC Grade B', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.png' },
    { id: 2, name: 'NIRF Ranking 2023', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.png' },
    { id: 3, name: 'UGC', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.png' },
    { id: 4, name: 'NAAC Grade B', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.png' },
  ]

  // Duplicate items for seamless infinite scroll
  const duplicatedAccreditations = [...accreditations, ...accreditations]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .accreditation-marquee {
          animation: marquee 30s linear infinite;
        }
        .accreditation-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
      <section className="py-16">
        <div className="">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0.5">
            {/* Left title pill */}
            <div className="flex-none relative w-full md:w-auto md:left-[-130px] z-10">
              <div className="bg-[var(--button-red)] text-white rounded-[80px] sm:rounded-[100px] md:rounded-[120px] flex items-center justify-center shadow-lg w-full md:w-[574px] h-auto min-h-[100px] sm:min-h-[140px] md:h-[172px] px-4 sm:px-6 md:px-0">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-stix leading-tight text-center md:ml-25 py-2 sm:py-0">
                  Accreditation<br />&amp; Ranking
                </h2>
              </div>
            </div>

            {/* Marquee slider */}
            <div className="flex-1 w-full md:w-auto md:ml-[-130px] overflow-hidden relative">
              <div className="accreditation-marquee flex items-center gap-4 sm:gap-6 md:gap-6">
                {duplicatedAccreditations.map((accred, idx) => (
                  <div
                    key={`${accred.id}-${idx}`}
                    className="flex-shrink-0 bg-[var(--light-gray)] rounded-[15px] sm:rounded-[20px] w-[180px] h-[140px] sm:w-[200px] sm:h-[160px] md:w-[231px] md:h-[181px] flex items-center justify-center shadow-sm overflow-hidden"
                  >
                    <div className="relative w-[156px] h-[72px] px-[10px]">
                      <Image
                        src={accred.logo}
                        alt={accred.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AccreditationRanking
