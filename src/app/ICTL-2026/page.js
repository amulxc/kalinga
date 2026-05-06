"use client";
import { useState, useEffect, useMemo } from "react";
import MainIntro from "../components/about/main_intro";

export default function ICTL2026() {
    const thirdParagraph = "Kalinga University, established in 2013, stands out as one of the leading private institutions that has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year. It has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education.";

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">ICTL–2026</h1>
            <MainIntro
                title="About Kalinga University"
                description={[thirdParagraph]}
                imageUrl="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/about/KU_new.jpg"
                imageAlt="Main Building"
            />
        </div>
    );
}