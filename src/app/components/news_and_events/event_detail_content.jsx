'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from '@/app/components/general/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const EventDetailContent = ({
  tags = [],
  title = '',
  description = [],
  htmlContent = '',
  mainImage = {
    src: 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
    alt: 'Event Gallery'
  },
  galleryImages = []
}) => {
  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(mainImage);

  // Update selected image when mainImage or galleryImages change
  useEffect(() => {
    setSelectedImage(mainImage);
  }, [mainImage]);

  // Handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tags/Badges Section */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg text-white text-sm font-plus-jakarta-sans whitespace-nowrap ${tag.color === 'orange' ? 'bg-[var(--dark-orange-red)]' :
                  tag.color === 'blue' ? 'bg-[var(--dark-blue)]' :
                    tag.color === 'red' ? 'bg-[var(--button-red)]' :
                      'bg-[var(--dark-blue)]'
                  }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* Main Title */}
        {title && (
          <SectionHeading
            title={title}
            titleClassName="mb-6 text-left"
          />
        )}

        {/* HTML Content or Description Paragraphs */}
        <div className="mb-8 md:mb-12 font-plus-jakarta-sans text-base text-[#333]">
          {htmlContent ? (
            <div
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            description.length > 0 && (
              <div className="space-y-4">
                {description.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )
          )}
        </div>

        <style jsx>{`
          .rich-text-content {
            font-family: 'Plus Jakarta Sans', sans-serif;
            line-height: 1.5;
            color: #333;
          }
          .rich-text-content :global(p) {
            margin-bottom: 0.75rem;
          }
          .rich-text-content :global(p:last-child) {
            margin-bottom: 0;
          }
          /* Hide truly empty paragraphs */
          .rich-text-content :global(p:empty) {
            display: none;
          }
          .rich-text-content :global(ul) {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          .rich-text-content :global(ol) {
            list-style-type: decimal;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          .rich-text-content :global(li) {
            margin-bottom: 0.4rem;
          }
          .rich-text-content :global(h1), 
          .rich-text-content :global(h2), 
          .rich-text-content :global(h3), 
          .rich-text-content :global(h4) {
            font-weight: 700;
            margin-top: 1.25rem;
            margin-bottom: 0.6rem;
            color: #1a1a1a;
            font-family: 'STIX Two Math', serif;
          }
          .rich-text-content :global(h2) { font-size: 1.5rem; }
          .rich-text-content :global(h3) { font-size: 1.25rem; }
          .rich-text-content :global(strong) {
            font-weight: 700;
            color: #111;
          }
        `}</style>

        {/* Main Large Image */}
        {selectedImage && selectedImage.src && (
          <div className="mb-5">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                key={selectedImage.src}
                src={selectedImage.src}
                alt={selectedImage.alt || 'Event Gallery'}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}

        {/* Gallery Grid or Slider - 4 Smaller Images */}
        {galleryImages.length > 0 && (
          galleryImages.length > 4 ? (
            <div className="relative">
              <Swiper
                modules={[Autoplay]}
                navigation={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="gallery-swiper"
              >
                {galleryImages.map((image) => {
                  const isSelected = selectedImage.src === image.src;
                  return (
                    <SwiperSlide key={image.id}>
                      <div
                        className={`relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${isSelected ? 'ring-4 ring-[var(--button-red)] ring-offset-2' : 'hover:opacity-80'
                          }`}
                        onClick={() => handleImageClick(image)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleImageClick(image);
                          }
                        }}
                        aria-label={`Select image: ${image.alt || 'Gallery image'}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((image) => {
                const isSelected = selectedImage.src === image.src;
                return (
                  <div
                    key={image.id}
                    className={`relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${isSelected ? 'ring-4 ring-[var(--button-red)] ring-offset-2' : 'hover:opacity-80'
                      }`}
                    onClick={() => handleImageClick(image)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleImageClick(image);
                      }
                    }}
                    aria-label={`Select image: ${image.alt || 'Gallery image'}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default EventDetailContent;


