"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from '../general/SectionHeading'

/**
 * Achievements gallery with a click-to-zoom popup (lightbox).
 * Kept separate from the shared CustomGallery so the popup behaviour
 * only applies to this section.
 */
const AchievementsGallery = ({
  images = [],
  title = "Achievements",
  subtitle = "",
  backgroundColor = "bg-white",
  paddingClassName = "py-16",
  titleClassName = "",
}) => {
  const displayImages = images;
  const useSlider = displayImages.length > 4;

  // Lightbox state - holds the currently opened image, or null when closed
  const [lightboxImage, setLightboxImage] = useState(null);

  // Close on Escape and lock body scroll while the popup is open
  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxImage]);

  const titleAlignment = titleClassName.includes('text-left') ? 'text-left' :
    titleClassName.includes('text-right') ? 'text-right' :
      'text-center';

  const renderImage = (item) => (
    <button
      type="button"
      onClick={() => setLightboxImage(item)}
      aria-label={`View ${item.alt || 'image'}`}
      className="block w-full text-left"
    >
      <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[10px] aspect-square group cursor-pointer">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          unoptimized={item.image?.toLowerCase().endsWith('.gif')}
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
    </button>
  );

  return (
    <section className={`${backgroundColor} ${paddingClassName}`}>
      <div className="px-2">
        {/* Title */}
        <div className={`mb-6 sm:mb-8 md:mb-10 ${titleAlignment}`}>
          <SectionHeading title={title} subtitle={subtitle} titleClassName={titleClassName} />
        </div>

        {useSlider ? (
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={16}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="gallery-swiper"
            >
              {displayImages.map((item) => (
                <SwiperSlide key={item.id}>{renderImage(item)}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {displayImages.map((item) => (
              <div
                key={item.id}
                className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)] max-w-[300px]"
              >
                {renderImage(item)}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox popup */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[75vh] max-w-[90vw] sm:max-w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - anchored to the image's top-right corner */}
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close"
              className="absolute -top-2.5 -right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-lg text-[var(--dark-blue)] transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={lightboxImage.image}
              alt={lightboxImage.alt}
              className="max-h-[75vh] w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsGallery
