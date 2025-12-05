'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'
import GlobalRedPlainButton from '../general/global-red_plain_button'

const Programs = () => {
  const [activeTab, setActiveTab] = useState('UG')
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(1)

  const programs = [
    { id: 1, title: 'Overview', type: 'Diploma', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Overview', type: 'UG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Law', type: 'UG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp', summary: '' },
    { id: 4, title: 'Information Technology', type: 'UG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg', summary: '' },
  ]

  const visiblePrograms = programs.filter(p => p.type === activeTab)

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(visiblePrograms.length - 1, i + 1))

  return (
    <section className="py-16 bg-[var(--light-gray)]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
          {/* Left column: Text and Tabs */}
          <div className="flex flex-col">
            {/* Header text */}
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <div className="text-[var(--button-red)] text-base sm:text-lg md:text-xl lg:text-[25px] pt-3 sm:pt-5 md:pt-8 lg:pt-[50px] font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
                Explore Our Programs
              </div>
              <h2 className="font-stix text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] leading-tight pt-3 sm:pt-5 md:pt-8 lg:pt-[50px] text-[var(--foreground)]">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 pt-4 sm:pt-6 md:pt-8 lg:pt-[70px]">
              <button
                onClick={() => setActiveTab('Diploma')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,37px)] leading-tight ${activeTab === 'Diploma' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                Diploma
              </button>
              <button
                onClick={() => setActiveTab('UG')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,37px)] leading-tight ${activeTab === 'UG' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                UG
              </button>
              <button
                onClick={() => setActiveTab('PG')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,37px)] leading-tight ${activeTab === 'PG' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                PG
              </button>
              <button
                onClick={() => setActiveTab('Ph.D')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,37px)] leading-tight ${activeTab === 'Ph.D' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                Ph.D
              </button>
            </div>
          </div>

          {/* Right column: Blue card and Search */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 items-start lg:items-end w-full lg:w-auto">
            {/* Blue card */}
            <div className="bg-[var(--dark-blue)] p-3 sm:p-4 lg:p-6 shadow-xl w-full lg:w-[560px] h-auto min-h-[180px] sm:min-h-[200px] lg:h-[257px] rounded-[10px]">
              <div className="bg-white/90 rounded-lg h-[100px] sm:h-[120px] lg:h-[150px] mb-2 sm:mb-3 lg:mb-4 px-2 sm:px-3 lg:px-4 flex items-center justify-center">
                <span className="text-gray-400 text-xs sm:text-sm">Program Preview</span>
              </div>
              <div className="flex justify-center">
                <GlobalArrowButton className="!bg-white !text-[var(--button-red)] !w-auto text-xs sm:text-sm">
                  Find Your Right Programs
                </GlobalArrowButton>
              </div>
            </div>

            {/* Search input */}
            <div className="w-full lg:w-[586px] mt-10 py-1 sm:py-2 h-auto lg:h-[73px]">
              <div className="flex items-center bg-[#F1F1F1] rounded-lg px-2 sm:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-5 shadow-sm border border-gray-200">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Programs...."
                  className="bg-transparent outline-none flex-1 text-[clamp(12px,2vw,25px)] font-plus-jakarta-sans font-medium text-black"
                />
                <button className="text-[var(--button-red)] ml-1 sm:ml-2" aria-label="search">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[29px] lg:w-[29px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
          {/* Overview card */}
          <div className="relative w-full max-w-[320px] sm:max-w-[345px] h-[320px] sm:h-[340px] lg:h-[360px] mx-auto sm:max-w-none sm:mx-0" >
            {/* Behind image preview - Law program */}
            {visiblePrograms[1] && (
              <div
                className="absolute overflow-hidden shadow-2xl z-0 hidden sm:block relative"
                style={{
                  top: '-15px',
                  left: '-15px',
                  width: 'calc(100% + 30px)',
                  height: 'calc(100% + 30px)',
                  transform: 'rotate(-5deg) scale(0.93)',
                  transformOrigin: 'center center',
                  opacity: 0.5,
                  borderRadius: '10px',
                  transition: 'all 0.3s ease'
                }}
              >
                <Image
                  src={visiblePrograms[1].img}
                  alt={visiblePrograms[1].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 text-white text-base sm:text-lg md:text-xl font-bold drop-shadow-lg">{visiblePrograms[1].title}</div>
              </div>
            )}
            {/* Front Overview card */}
            <div className="md:col-span-1 md:translate-y-10 px-2 sm:px-0 mt-[-60px] ">
              <div className="bg-[#F9C88B] rounded-xl p-6 sm:p-8 shadow-xl h-[375px] flex flex-col relative z-10">
                <h3 className="font-stix text-[28px] sm:text-[32px] leading-tight mb-4 text-[#1a1a1a]">Overview</h3>
                <p className="text-sm sm:text-[15px] text-[#1a1a1a] mb-6 leading-relaxed font-plus-jakarta-sans opacity-90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore
                </p>

                <ul className="text-sm text-[#1a1a1a] mb-8 space-y-4 font-plus-jakarta-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B22222] text-lg mt-0.5">🎓</span>
                    <span><span className="font-semibold">Scholarships :</span> Check eligibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B22222] text-lg mt-0.5">📜</span>
                    <span><span className="font-semibold">Qualification :</span> Pass in Higher Secondary Examinations of (10+2)</span>
                  </li>
                </ul>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <GlobalArrowButton
                    className="!bg-transparent !shadow-none hover:!shadow-none !h-auto !px-0 !py-0"
                    textClassName="!text-[#1a1a1a] hover:!text-[#B22222] !font-plus-jakarta-sans !text-base !px-0"
                    arrowClassName="!bg-transparent !p-0 !px-0"
                    arrowIconClassName="!text-[#1a1a1a] hover:!text-[#B22222]"
                    arrowSize={14}
                  >
                    Know More
                  </GlobalArrowButton>

                  <div className="flex items-center gap-1">
                    <GlobalArrowButton
                      className="!bg-white !text-[#1a1a1a] !px-5 !py-2.5 !rounded-lg !font-bold !shadow-sm hover:!bg-gray-50 !font-plus-jakarta-sans !text-sm !h-auto !w-auto"
                      textClassName="!text-[#1a1a1a] !font-plus-jakarta-sans !text-sm !px-0"
                      arrowClassName="!bg-[var(--button-red)]"
                      arrowIconClassName="!text-white"
                      arrowSize={16}
                    >
                      Apply Now
                    </GlobalArrowButton>
                    <button className="bg-[var(--button-red)] text-white w-[42px] h-[42px] rounded-lg flex items-center justify-center shadow-sm hover:opacity-90 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program cards with decorative accents */}
          {visiblePrograms.slice(1).map((p, i) => {
            const slicedPrograms = visiblePrograms.slice(1);
            // Cycle back to first program if no next program exists
            const nextProgram = slicedPrograms[i + 1] || slicedPrograms[0];
            return (
              <div key={p.id} className="relative w-full max-w-[345px] h-[360px] mx-auto sm:max-w-none sm:mx-0" >
                {/* Next image preview - tilted behind with same style */}
                <div
                  className="absolute overflow-hidden shadow-2xl z-0 hidden sm:block relative"
                  style={{
                    top: '-15px',
                    left: '-15px',
                    width: 'calc(100% + 30px)',
                    height: 'calc(100% + 30px)',
                    transform: 'rotate(4deg) scale(0.92)',
                    transformOrigin: 'center center',
                    opacity: 0.5,
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Image
                    src={nextProgram.img}
                    alt={nextProgram.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 text-white text-base sm:text-lg md:text-xl font-bold drop-shadow-lg">{nextProgram.title}</div>
                </div>
                <div
                  className="relative overflow-hidden shadow-xl z-10 w-full h-full"
                  style={{
                    borderRadius: '10px',
                    opacity: 1
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-3 sm:left-8 bottom-3 sm:bottom-5 text-white text-base sm:text-lg md:text-xl drop-shadow-lg font-stix text-[25px] leading-[30px]">
                    {p.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Explore Programs button - centered */}
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-[60px] mb-6 sm:mb-8 md:mb-10">
          <GlobalArrowButton className="w-full sm:w-[224px] mb-[50px]">
            Explore Programs
          </GlobalArrowButton>
        </div>
        {/* Footer controls */}
        <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-6 pr-0 sm:pr-4 md:pr-[60px]">
          <div className="flex items-center gap-2 sm:gap-3 -mt-45 ml-[90px] mb-[50px]">
            <button onClick={prev} className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[var(--button-red)] text-white shadow-md hover:opacity-90 transition-colors flex items-center justify-center text-lg sm:text-xl">‹</button>
            <button onClick={next} className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-gray-300 text-gray-700 shadow-md hover:bg-gray-400 transition-colors flex items-center justify-center text-lg sm:text-xl">›</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
