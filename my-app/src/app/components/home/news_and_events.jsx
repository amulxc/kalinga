'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'

export default function NewsEvents() {
  const [selectedDay, setSelectedDay] = useState(28)

  const newsItems = [
    {
      id: 1,
      date: '12 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 2,
      date: '20 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 3,
      date: '27 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
  ]

  const events = [
    { title: 'Lorem Ipsum Dolor Sit Amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Lorem Ipsum Dolor Sit Amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Lorem Ipsum Dolor Sit Amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ]

  return (
    <section className="relative w-full py-16 mb-[-130px] bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="text-3xl ml-10 sm:text-4xl md:text-5xl font-stix text-black mb-1 mt-10 sm:mt-12">News & Events</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-6 sm:gap-4 mt-10 sm:mt-14 md:mt-[-80px]">
          {/* Left: Featured news */}
          <div className="flex-shrink-0 w-full max-w-[320px]">
            <div className="bg-white overflow-hidden shadow-lg rounded-[9px] w-full h-auto md:h-[355px]">
                <div className="relative h-64 sm:h-80 md:h-96">
                  <Image 
                    src={newsItems[0].image} 
                    alt={newsItems[0].title} 
                    fill
                    className="object-cover" 
                  />
                  {/* Bottom overlay - reddish-brown semi-transparent */}
                  <div 
                    className="absolute bottom-3 sm:bottom-5 left-2 sm:left-1 right-2 sm:right-1 text-white p-4 sm:p-6 bg-[var(--button-red)] w-[calc(100%-16px)] sm:w-[315px] h-auto min-h-[80px] sm:h-[96px] rounded-[10px]"
                   
                  >
                    <p className="text-xs sm:text-sm tracking-wide font-light mb-1 sm:mb-[5px] mt-[-10px] sm:mt-[-15px]">Day 5 Highlights</p>
                    <p className="text-sm sm:text-base md:text-[16px] font-plus-jakarta-sans font-semibold leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

          {/* Middle: stacked news list */}
            <div className="flex-shrink-0 w-full max-w-[340px]">
            <div className="bg-gray-100 rounded-lg shadow-lg w-full h-auto md:h-[354px] p-4 sm:p-5 overflow-auto">
              <div className="space-y-4">
                {newsItems.map((news) => (
                  <div key={news.id} className="flex items-start gap-3">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                      <Image 
                        src={news.image} 
                        alt={news.title} 
                        fill
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs text-gray-600 font-semibold mb-1">{news.date}</p>
                      <p className="text-sm font-semibold text-gray-800 leading-relaxed">{news.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <GlobalArrowButton
                  className="!bg-transparent !text-gray-700 hover:!text-gray-900 !shadow-none !h-auto !px-0"
                  textClassName="!text-gray-700 hover:!text-gray-900 !font-semibold !text-sm !px-0"
                  arrowClassName="!bg-[var(--button-red)] !w-6 !h-6"
                  arrowIconClassName="!text-white"
                  arrowSize={12}
                >
                  Explore More
                </GlobalArrowButton>
              </div>
            </div>
          </div>

          {/* Right: Event Calendar */}
            <div className="flex-1 flex justify-center w-full max-w-[466px]">
            <div className="bg-[var(--dark-blue)] text-white overflow-hidden shadow-lg h-auto md:h-[484px] w-full rounded-[9px] p-5 sm:p-6 md:p-7">
                <div className="pt-2 pb-6 flex justify-center">
                  <h3 className="text-2xl font-stix text-center font-semibold ">Event Calendar</h3>
                </div>

                {/* Day selector */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mt-[-30px]">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[var(--dark-blue)] shadow-sm hover:bg-gray-100 transition-colors flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>

                  <div className="flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto no-scrollbar flex-1 justify-center px-2">
                    {[28, 29, 30, 1, 2, 3].map((day, idx) => {
                      const months = ['October', 'October', 'October', 'November', 'November', 'November']
                      const isActive = selectedDay === day
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedDay(day)}
                          className={`flex-shrink-0 flex flex-col items-center transition-all duration-200 ${isActive ? '' : 'text-white/70 hover:text-white'}`}
                        >
                          {isActive ? (
                            <div className="flex flex-col items-center gap-1">
                              <div className="bg-orange-500 text-white rounded-md w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl md:text-3xl shadow-md">{day}</div>
                              <div className="text-[10px] sm:text-xs text-white font-medium mt-1">{months[idx]}</div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-0.5">
                              <span className="text-sm sm:text-base md:text-lg font-semibold">{day}</span>
                              <span className="text-[10px] sm:text-xs text-white/60">{months[idx]}</span>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[var(--dark-blue)] shadow-sm hover:bg-gray-100 transition-colors flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                  </button>
                </div>

                {/* Events list */}
                <div>
                  {events.map((event, idx) => {
                    const categories = [
                      { name: 'Latest News', color: 'Latest News' },
                      { name: 'Conference', color: 'Conference' },
                      { name: 'Hackathon', color: 'Hackathon' }
                    ]
                    const category = categories[idx]
                    return (
                      <div key={idx} className="flex items-start justify-between gap-2 sm:gap-4 pt-4 sm:pt-5 pb-2 sm:pb-4 border-t border-white/10 first:pt-0 first:border-t-0 hover:bg-white/5 transition-colors rounded-lg px-1 sm:px-2 -mx-1 sm:-mx-2">
                        <div className="flex-1 pr-2 sm:pr-4 min-w-0">
                          <h4 className="font-plus-jakarta-sans font-light text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2.5 text-white leading-tight">{event.title}</h4>
                          <p className="text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-2">{event.description}</p>
                        </div>

                        <div className="flex flex-col items-end gap-2 sm:gap-3 flex-shrink-0">
                          <span className="text-[10px] sm:text-xs text-white/70 font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 rounded whitespace-nowrap">{category.name}</span>
                          <button className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--button-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
