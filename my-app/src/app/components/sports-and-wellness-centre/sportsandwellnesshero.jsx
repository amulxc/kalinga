"use client";

import Image from "next/image";

export default function SportsWellnessHero({
  coverImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  icon2Src = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  icon3Src = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  icon4Src = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
}) {
  const items = [
    { text: "Expert Training & Professional Guidance", icon: icon2Src },
    { text: "Avail Exclusive Sports Scholarship", icon: icon3Src },
    { text: "Develop a Winning Mindset", icon: icon4Src },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="relative">
            {/* Red vertical accent */}
            <span className="absolute left-0 top-0 h-full w-[2px] bg-[var(--button-red)]" />

            <div className="pl-6">
              {/* Title */}
              <h2 className="font-stix text-(--button-red) mb-1">
                Sports &amp; Wellness Centre
              </h2>

              {/* Subtitle */}
              <p className="font-plus-jakarta-sans text-foreground font-medium mb-6">
                Turning Passionate Players Into Athletes
              </p>

              {/* Feature Items */}
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4"
                  >
                    {item.icon ? (
                      <div className="relative h-10 w-10 shrink-0">
                        <Image
                          src={item.icon}
                          alt={item.text}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    ) : (
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-black/5" />
                    )}

                    <p className="font-plus-jakarta-sans text-(--button-red) font-medium leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-black/10 bg-black/5 aspect-video">
            {coverImageSrc && (
              <Image
                src={coverImageSrc}
                alt="Sports & Wellness Centre"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
