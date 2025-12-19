'use client';

import { useState } from 'react';
import StudentActivities from '../department/student_activities';
import Gallery from '../general/gallery';

export default function MasterClassTab({
  tab1Activities = null,
  tab1Gallery = null,
  tab1GalleryTitle = "Annual Masterclass 2025-24 Glimpse",
  tab2Activities = null,
  tab2Gallery = null,
  tab2GalleryTitle = "Annual Masterclass 2025-26 Glimpse",
}) {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Our Successful Masterclasses 2024-25' },
    { id: 'tab2', label: 'Annual Masterclass Calendar 2025-26' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="px-4 lg:px-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-12 gap-4 md:gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-plus-jakarta-sans text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg transition-all duration-200 whitespace-normal md:whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[var(--button-red)] text-white font-semibold shadow-md'
                  : 'bg-[var(--lite-sand)] text-gray-800 font-normal hover:opacity-90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'tab1' && (
            <>
              <StudentActivities
                title=""
                subtitle=""
                activities={tab1Activities}
                paddingClassName="py-0"
              />
              <Gallery
                title={tab1GalleryTitle}
                images={tab1Gallery}
                backgroundColor="bg-white"
                paddingClassName="py-0"
                titleClassName="font-plus-jakarta-sans text-lg font-bold sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 mt-5 text-[var(--foreground)] text-center"
              />
            </>
          )}
          {activeTab === 'tab2' && (
            <>
              <StudentActivities
                title=""
                subtitle=""
                activities={tab2Activities}
                paddingClassName="py-0"
              />
              <Gallery
                title={tab2GalleryTitle}
                images={tab2Gallery}
                backgroundColor="bg-white"
                paddingClassName="py-0"
                titleClassName="font-plus-jakarta-sans text-lg font-bold sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-[var(--foreground)] text-center"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

