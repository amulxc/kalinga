"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from '../general/SectionHeading'
import ImageLightbox, { useImageLightbox } from '../general/ImageLightbox'

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

  // Shared full-screen viewer (portalled to <body>, arrows + Escape)
  const lightbox = useImageLightbox(displayImages.length);

  const titleAlignment = titleClassName.includes('text-left') ? 'text-left' :
    titleClassName.includes('text-right') ? 'text-right' :
      'text-center';

  const renderImage = (item, index) => (
    <button
      type="button"
      onClick={() => lightbox.open(index)}
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
              {displayImages.map((item, index) => (
                <SwiperSlide key={item.id}>{renderImage(item, index)}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {displayImages.map((item, index) => (
              <div
                key={item.id}
                className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)] max-w-[300px]"
              >
                {renderImage(item, index)}
              </div>
            ))}
          </div>
        )}
      </div>

      <ImageLightbox
        images={displayImages}
        index={lightbox.index}
        onClose={lightbox.close}
        onPrev={lightbox.showPrev}
        onNext={lightbox.showNext}
      />
    </section>
  );
};

export default AchievementsGallery
