import Image from "next/image";

export default function LeadershipCard({ name, title, image, usePTagForName = false, imageFit = "cover", imageContainerClassName = "h-[350px]" }) {
  const NameTag = usePTagForName ? 'p' : 'h3';
  return (
    <div className="bg-[var(--lite-sand)] rounded-xl p-4 h-full flex flex-col relative overflow-hidden">
      {/* Image */}
      <div className={`relative w-full ${imageContainerClassName} mb-4 rounded-lg overflow-hidden`}>
        <Image
          src={image}
          alt={name}
          fill
          className={`object-${imageFit}`}
        />
      </div>

      {/* Name */}
      <NameTag className="!text-[16px] text-[var(--foreground)] font-plus-jakarta-sans font-semibold">
        {name}
      </NameTag>

      {/* Title */}
      <p className="text-[var(--light-text-gray)] text-sm mb-4">
        {title}
      </p>
    </div>
  );
}

