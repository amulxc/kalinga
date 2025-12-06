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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .news-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .news-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .events-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .events-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    <section className="relative w-full py-16">
      <div className="container mx-auto">
        {/* Main Layout: News section with title + Event Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_2.0fr_0.8fr] gap-6 sm:gap-6 mt-10 sm:mt-14 items-start">
          {/* Left section: News & Events title and two cards */}
          <div className="md:col-span-2 flex flex-col">
            {/* Section title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-stix text-black mb-6 sm:mb-8">News & Events</h2>
            
            {/* Two column grid for news cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6">
              {/* Column 1: Featured news */}
              <div className="w-full">
            <div className="bg-white overflow-hidden shadow-lg rounded-[9px] w-full h-auto md:h-[380px]">
              <div className="relative h-64 sm:h-80 md:h-[380px]">
                <Image 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title} 
                  fill
                  className="object-cover" 
                />
                {/* Bottom overlay - reddish-brown semi-transparent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 text-white p-4 sm:p-6 bg-[var(--button-red)]/80 backdrop-blur-lg h-auto min-h-[110px] sm:h-[110px] rounded-b-[9px]"
                 
                >
                  <p className="text-xs sm:text-sm tracking-wide font-light mb-1 sm:mb-[5px] mt-[-10px] sm:mt-[-15px]">Day 5 Highlights</p>
                  <p className="text-sm sm:text-base md:text-[16px] font-plus-jakarta-sans font-semibold leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: stacked news list */}
          <div className="w-full">
            <div className="bg-[var(--light-gray)] rounded-lg shadow-lg w-full h-auto md:h-[380px] p-4 sm:p-5 flex flex-col">
              <div className="flex-1 overflow-y-auto news-scrollbar-hide space-y-4">
                {newsItems.map((news) => (
                  <div key={news.id} className="flex items-start gap-3">
                    <div className="relative w-22 h-22 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                      <Image 
                        src={news.image} 
                        alt={news.title} 
                        fill
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs text-gray-600 font-semibold !text-[12px]">{news.date}</p>
                      <p className="text-sm text-gray-800 leading-relaxed">{news.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex justify-center flex-shrink-0">
              <GlobalArrowButton
                        className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                        textClassName="!text-[#000] !font-semibold !ml-0 !px-0"
                        arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                        arrowSize={18}
                      >
                        Read More
            </GlobalArrowButton>
              </div>
            </div>
              </div>
            </div>
          </div>

          {/* Column 3: Event Calendar */}
          <div className="w-full max-w-[380px] md:max-w-[420px]">
            <div className="bg-[var(--dark-blue)] text-white overflow-hidden shadow-lg h-auto md:h-[470px] w-full rounded-[9px] p-5 sm:p-6 md:p-7">
                <div className="pt-2 pb-6 flex justify-center">
                  <h2 className="text-2xl font-stix text-center font-semibold ">Event Calendar</h2>
                </div>

                {/* Day selector */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mt-[-30px] pt-3">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--dark-blue)] flex items-center justify-center text-white   transition-colors flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="15,5 9,12 15,19" fill="currentColor"/>
                    </svg>
                  </button>

                  <div className="flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto date-scrollbar-hide flex-1 justify-center px-2">
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
                            <div className={`bg-orange-500 text-white rounded-md w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex flex-col items-center justify-center font-bold shadow-md`}>
                              <span className="text-xl sm:text-2xl md:text-3xl">{day}</span>
                              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium">{months[idx]}</span>
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

                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--dark-blue)] flex items-center justify-center text-white shadow-sm hover:bg-orange-500 transition-colors flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="9,5 15,12 9,19" fill="currentColor"/>
                    </svg>
                  </button>
                </div>

                {/* Events list */}
                <div className="overflow-y-auto events-scrollbar-hide max-h-[280px] md:max-h-[320px]">
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
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--button-red)]"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 12L12 4M12 4H6M12 4V10"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
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
    </>
  )
}
