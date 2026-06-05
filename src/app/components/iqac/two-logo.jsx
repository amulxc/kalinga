import React from "react";
import Image from "next/image";
import LogoLoop from "../gsap/LogoLoop";

export default function TwoLogo({ logos }) {
    if (!logos || logos.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center justify-center my-8 overflow-hidden">
            {/* Centered Major Achievements Text */}
            <div className="mb-6">
                <h2 className="font-stix mb-2 text-[var(--foreground)] !py-2">
                    Major Achievements
                </h2>
            </div>

            {/* Scrolling Logos */}
            <div className="w-full relative py-2">
                <LogoLoop
                    logos={logos}
                    speed={60}
                    direction="left"
                    logoHeight={200}
                    gap={32}
                    pauseOnHover={true}
                    ariaLabel="Major Achievement Logos"
                    renderItem={(logo, idx) => (
                        <div
                            className="flex items-center justify-center bg-transparent border-[1.5px] border-gray-300 rounded-xl p-4 w-64 h-48 sm:w-80 sm:h-64 shadow-sm transition-all hover:shadow-md"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt || logo.name || "Achievement Logo"}
                                width={logo.width || 200}
                                height={logo.height || 100}
                                className="object-contain w-auto !h-full"
                            />
                        </div>
                    )}
                />
            </div>
        </div>
    );
}