import React from 'react'
import FeaturedNewsCard from '../general/featured_news_card'

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Event 1',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      id: 2,
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Event 2',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      id: 3,
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Event 3',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Title */}
        <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 md:mb-10 text-[var(--foreground)]">
          Upcoming Events
        </h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event) => (
            <FeaturedNewsCard
              key={event.id}
              image={event.image}
              alt={event.alt}
              badgeText={event.badgeText}
              title={event.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents

