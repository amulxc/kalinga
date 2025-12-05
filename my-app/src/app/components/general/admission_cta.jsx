import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from './global-arrow_button'

const AdmissionCareer = () => {
  return (
    <section className="py-6 bg-white max-w-[1246px] mx-auto mt-[-80px] sm:mt-[-120px] md:mt-[-140px] lg:mt-[-160px]">
      <div className="container mx-auto relative flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0">

        {/* Left Panel - Admission */}
        <div className="w-full  md:w-[48%] lg:w-[622px] bg-[var(--dark-orange-red)] rounded-[10px] p-6 sm:p-8 text-white h-auto md:h-[300px] lg:h-[318px] flex flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pr-4 sm:pr-8 md:pr-12 lg:pr-[90px]">

        <p className="text-base mt-14 sm:text-lg md:text-lg lg:text-xl xl:text-[31px] leading-tight sm:leading-normal font-stix text-center leading-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div className="mt-3 sm:mt-4 w-full sm:w-[211px] self-start sm:self-start md:self-start lg:self-start">
            <GlobalArrowButton
              className="!bg-white !text-black !w-full !h-[40px] sm:!h-[44px] !rounded-lg !shadow-lg hover:!bg-gray-50 !text-sm sm:!text-base"
              textClassName="!text-black !text-[16px] !px-0"
              arrowClassName="!bg-[var(--button-red)] !w-7 sm:!w-8 !h-7 sm:!h-8 !rounded-lg"
              arrowIconClassName="!text-white"
              arrowSize={12}
            >
              Admission Open
            </GlobalArrowButton>
          </div>
        <h2
          className="font-stix text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[123px] leading-none whitespace-nowrap pt-2 sm:pt-[10px]"
           style={{
                color: 'transparent',
                WebkitTextStroke: '0.2px #FFFFFF',
              }}
        >
          Admission
        </h2>
         
        </div>

        {/* Center - Image (visible only on large screens) */}
        <div className="relative hidden lg:block lg:absolute lg:left-1/2 lg:top-[150px] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-48 h-60 sm:w-56 sm:h-72 md:w-[280px] md:h-[360px] lg:w-[372px] lg:h-[482px] z-20 mx-auto lg:mx-0">
          <div className="relative w-full h-full">
            <Image 
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg" 
              alt="Student" 
              fill
              className="object-cover rounded-xl shadow-7xl" 
            />
          </div>
        </div>

        {/* Right Panel - Career (on md screens this appears to the right) */}
        <div className="w-full md:w-[48%] lg:w-[622px] bg-[var(--button-red)] rounded-[10px] p-6 sm:p-8 text-white h-auto md:h-[300px] lg:h-[318px] flex flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pl-4 sm:pl-8 md:pl-12 lg:pl-[140px]">

<p className="text-base mt-14 sm:text-lg md:text-lg lg:text-xl xl:text-[31px] leading-tight sm:leading-normal font-stix text-center leading-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
 <div className="mt-3 sm:mt-4 w-full sm:w-[173px] self-start sm:self-end md:self-end lg:self-end sm:ml-auto">
            <GlobalArrowButton
              className="!bg-white !text-black !w-full !h-[40px] sm:!h-[44px] !rounded-lg !shadow-lg hover:!bg-gray-50 !text-sm sm:!text-base"
              textClassName="!text-black !text-[16px] !px-0"
              arrowClassName="!bg-[var(--button-red)] !w-7 sm:!w-8 !h-7 sm:!h-8 !rounded-lg"
              arrowIconClassName="!text-white"
              arrowSize={12}
            >
              Contact Us
            </GlobalArrowButton>
          </div>
<h2
  className="font-stix text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[123px] leading-none whitespace-nowrap pt-2 sm:pt-[10px] pl-0 md:pl-[30px] lg:pl-[50px] xl:pl-[100px]"
   style={{
        color: 'transparent',
        WebkitTextStroke: '0.2px #FFFFFF',
      }}
>
  Career
</h2>
 
</div>
      </div>
    </section>
  )
}

export default AdmissionCareer
