"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import Gallery from "../general/gallery";
import SectionHeading from "../general/SectionHeading";

const MOMENTS_TABS = [
  {
    value: "proud-moments",
    label: "Proud Moments",
    images: [
      { id: 1, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/OP-Choudhary-DSC09444.jpg", alt: "proud Moment 1" },
      { id: 2, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Ahmed-Sule-DSC06258.webp", alt: "proud Moment 2" },
      { id: 3, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Anusuiya-Uikey-DSC02315.webp", alt: "proud Moment 3" },
      { id: 4, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/dfdf.jpg", alt: "proud Moment 4" },
      { id: 5, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Dr-DavidJRanz-IMG-2343.webp", alt: "proud Moment 5" },
      { id: 6, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/DSC08537.webp", alt: "proud Moment 6" },
      { id: 7, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/image015.jpg", alt: "proud Moment 7" },
      { id: 8, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Mr-Gabriel-Pandurini-DSC01246-2.webp", alt: "proud Moment 8" },
      { id: 9, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Mr-Mukhtar-Uma-Bunza-DSC00310.webp", alt: "proud Moment 9" },
      { id: 10, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Padma-Shri-Anuj-Sharma-DSC00490.webp", alt: "proud Moment 10" },
      { id: 11, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Proud-Moments-PPT-Slide-11.png", alt: "proud Moment 11" },
      { id: 12, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Proud-Moments-PPT-Slide-12.png", alt: "proud Moment 12" },
      { id: 13, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Proud-Moments-PPT-Slide-9.jpg", alt: "proud Moment 13" },
      { id: 14, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Proud-Moments-PPT-Slide-16.png", alt: "proud Moment 14" },
      { id: 15, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/REMASTERED-3.jpg", alt: "proud Moment 15" },
      { id: 16, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Remastred2222.webp", alt: "proud Moment 16" },
      { id: 17, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Republic-Day-2025-DSC09609.jpg", alt: "proud Moment 17" },
      { id: 18, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Republic-Day-2024-DSC01169.webp", alt: "proud Moment 18" },
      { id: 19, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/SHRI-ARUN-SAO-JI.jpg", alt: "proud Moment 19" },
      { id: 20, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Shri-Ramen-Deka-JI.webp", alt: "proud Moment 20" },
      { id: 21, image: "https://cdn.kalingauniversity.ac.in/news-and-events/proud-moments/Vishnu-Deo-Sai-10.52.02.webp", alt: "proud Moment 21" },
    ],
  },
  {
    value: "festive-moments",
    label: "Festive Moments",
    images: [
      { id: 1, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/01.gif", alt: "Festive Moment 1" },
      { id: 2, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/02.jpg", alt: "Festive Moment 2" },
      { id: 3, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/03.jpg", alt: "Festive Moment 3" },
      { id: 4, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/04.jpg", alt: "Festive Moment 4" },
      { id: 5, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/05.webp", alt: "Festive Moment 5" },
      { id: 6, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/06.jpg", alt: "Festive Moment 6" },
      { id: 7, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/07.jpg", alt: "Festive Moment 7" },
      { id: 8, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/08.jpg", alt: "Festive Moment 8" },
      { id: 9, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/09.webp", alt: "Festive Moment 9" },
      { id: 10, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/10.jpg", alt: "Festive Moment 10" },
      { id: 11, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/11.webp", alt: "Festive Moment 11" },
      { id: 12, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/12.jpg", alt: "Festive Moment 12" },
      { id: 13, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/13.jpg", alt: "Festive Moment 13" },
      { id: 14, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/14.webp", alt: "Festive Moment 14" },
      { id: 15, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/15.jpg", alt: "Festive Moment 15" },
      { id: 16, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/16.jpg", alt: "Festive Moment 16" },
      { id: 17, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/17.webp", alt: "Festive Moment 17" },
      { id: 18, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/18.jpg", alt: "Festive Moment 18" },
      { id: 19, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/19.jpg", alt: "Festive Moment 19" },
      { id: 20, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/20..webp", alt: "Festive Moment 20" },
      { id: 21, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/21..jpg", alt: "Festive Moment 21" },
      { id: 22, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/22.jpg", alt: "Festive Moment 22" },
      { id: 23, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/23.gif", alt: "Festive Moment 23" },
      { id: 24, image: "https://cdn.kalingauniversity.ac.in/news-and-events/festive-moments/24.gif", alt: "Festive Moment 24" },

    ],
  },
  {
    value: "victory-moments",
    label: "Victory Moments",
    images: [
      { id: 1, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-1.gif", alt: "Victory Moment 1" },
      { id: 2, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-2.jpg", alt: "Victory Moment 2" },
      { id: 3, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-3.jpg", alt: "Victory Moment 3" },
      { id: 4, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-4.jpg", alt: "Victory Moment 4" },
      { id: 5, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-5.jpg", alt: "Victory Moment 5" },
      { id: 6, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-6.jpg", alt: "Victory Moment 6" },
      { id: 7, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-7.jpg", alt: "Victory Moment 7" },
      { id: 8, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-8.jpg", alt: "Victory Moment 8" },
      { id: 9, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-9.jpg", alt: "Victory Moment 9" },
      { id: 10, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-10.jpg", alt: "Victory Moment 10" },
      { id: 11, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-11.jpg", alt: "Victory Moment 11" },
      { id: 12, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-12.jpg", alt: "Victory Moment 12" },
      { id: 13, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-13.jpg", alt: "Victory Moment 13" },
      { id: 14, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-14.jpg", alt: "Victory Moment 14" },
      { id: 15, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-15.jpg", alt: "Victory Moment 15" },
      { id: 16, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-16.jpg", alt: "Victory Moment 16" },
      { id: 17, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-17.jpg", alt: "Victory Moment 17" },
      { id: 18, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-18.jpg", alt: "Victory Moment 18" },
      { id: 19, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-19.jpg", alt: "Victory Moment 19" },
      { id: 20, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-20.jpg", alt: "Victory Moment 20" },
      { id: 21, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-21.jpg", alt: "Victory Moment 21" },
      { id: 22, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-22.jpg", alt: "Victory Moment 22" },
      { id: 23, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-23.jpg", alt: "Victory Moment 23" },
      { id: 24, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-24.jpg", alt: "Victory Moment 24" },
      { id: 25, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-25.jpg", alt: "Victory Moment 25" },
      { id: 26, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-26.jpg", alt: "Victory Moment 26" },
      { id: 27, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-27.jpg", alt: "Victory Moment 27" },
      { id: 28, image: "https://cdn.kalingauniversity.ac.in/news-and-events/victory-moments/images-28.jpg", alt: "Victory Moment 28" },

    ],
  },
  {
    value: "star-moments",
    label: "Star Moments",
    images: [
      { id: 1, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Saurab-Dwivedi.jpeg", alt: "Star Moment 1" },
      { id: 2, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Shilpa-Shetty-events.jpeg", alt: "Star Moment 2" },
      { id: 3, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Anand-Kumar-DSC06462.jpg", alt: "Star Moment 3" },
      { id: 4, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Dr-Sumit-Mitra-DSC09140.jpg", alt: "Star Moment 4" },
      { id: 5, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/image-1.jpg", alt: "Star Moment 5" },
      { id: 6, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/image-2.gif", alt: "Star Moment 6" },
      { id: 7, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/image-3.jpg", alt: "Star Moment 7" },
      { id: 8, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/image-4.jpg", alt: "Star Moment 8" },
      { id: 9, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/images-5.JPG", alt: "Star Moment 9" },
      { id: 10, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/images-6.JPG", alt: "Star Moment 10" },
      { id: 11, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Independence-day-2023.jpeg", alt: "Star Moment 11" },
      { id: 12, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Independence-Day-2024.jpg", alt: "Star Moment 12" },
      { id: 13, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Mr-Gopinath-Muthukad.jpg", alt: "Star Moment 13" },
      { id: 14, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Mr.Bhagwan-tiwari.jpg", alt: "Star Moment 14" },
      { id: 15, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Mr.Gopal-Singh.jpg", alt: "Star Moment 15" },
      { id: 16, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/MR.Pankaj-Sarda.jpg", alt: "Star Moment 16" },
      { id: 17, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Prof.Shailendra-kumar.jpg", alt: "Star Moment 17" },
      { id: 18, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Raveena-Tandon.jpg", alt: "Star Moment 18" },
      { id: 19, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/sanjay-mishra.jpg", alt: "Star Moment 19" },
      { id: 20, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Shri-Arun-Kumar-Mishra.jpg", alt: "Star Moment 20" },
      { id: 21, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Shri-Prasann-R.IAS.jpg", alt: "Star Moment 21" },
      { id: 22, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Shri-tokhan-sahu-ji.jpg", alt: "Star Moment 22" },
      { id: 23, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/star-moments-1.PNG", alt: "Star Moment 23" },
      { id: 24, image: "https://cdn.kalingauniversity.ac.in/news-and-events/star-moments/Zareen-Khan-events.jpeg", alt: "Star Moment 24" },
    ],
  },
];

export default function MomentsGallery({ title = "Moments", backgroundColor = "bg-white" }) {
  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <SectionHeading title={title} />
        </div>

        <Tabs defaultValue="proud-moments">
          <TabsList className="mb-8">
            {MOMENTS_TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {MOMENTS_TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.images.length > 0 ? (
                <Gallery
                  images={tab.images}
                  title=""
                  paddingClassName="py-4"
                  forceSlider={true}
                />
              ) : (
                <div className="py-16 text-center text-gray-400 text-lg">
                  Coming soon...
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
