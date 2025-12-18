"use client";

import React, { useEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

function Academiccards() {
    const wrapperRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "" });

    // change image for every card
    const PLACEHOLDER =
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png";

    const cards = [
        {
            title: "Digital Classrooms",
            description:
                "Our classrooms have smart boards, projectors, and audio-visual tools, which make learning fun and interactive. Students actively use these tools for presentations and collaborative learning.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "ACADEMIC INFRASTRUCTURE",
        },
        {
            title: "Resource-Rich Library",
            description:
                "Our library is packed with the latest collection of books, journals, research papers, digital resources, magazines, and newspapers to support academic and research excellence.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "ACADEMIC INFRASTRUCTURE",
        },
        {
            title: "Modern Laboratories",
            description:
                "We have over 90+ laboratories, including language labs, central instrumentation facilities, computer labs with 1600+ high-tech systems, and advanced research labs.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "RESEARCH & PRACTICAL LEARNING",
        },
        {
            title: "Incubation Centre",
            description:
                "Kalinga Incubation Foundation (KIF) supports students’ entrepreneurial ideas and helps transform them into successful startup ventures through mentorship, networking, and seed funding.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "INNOVATION & STARTUPS",
        },
        {
            title: "Moot Court",
            description:
                "Our Moot Court provides law students with a real courtroom experience, helping them participate in trials, competitions, and practical legal training to build confidence.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "LEGAL EDUCATION",
        },
        {
            title: "Centres of Excellence",
            description:
                "We collaborate with leading industry partners to offer skill-based training in EVs, IIoT, Robotics, AI & ML, MSME, Automobile Engineering, Coding, Drones, and more.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "INDUSTRY COLLABORATIONS",
        },
        {
            title: "Film Making Studio",
            description:
                "Our fully equipped film making studio enables students to learn script writing, acting, direction, lighting, editing, set design, camera handling, and live streaming.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "CREATIVE ARTS",
        },
        {
            title: "Podcast Studio",
            description:
                "The soundproof podcast studio is equipped with professional microphones and recording equipment, providing students with an ideal space for content creation.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "MEDIA & COMMUNICATION",
        },
        {
            title: "Internship Programs & Hands-on Training",
            description:
                "We provide on-campus and off-campus internships along with hands-on training programs to enhance real-world skills and make students job-ready.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "CAREER READINESS",
        },
        {
            title: "ERP Portal",
            description:
                "Every student has access to the ERP portal for academic curriculum, exam schedules, results, notices, transportation details, and other essential information.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "DIGITAL SERVICES",
        },
        {
            title: "Animal House",
            description:
                "A safe and well-maintained animal house supports experimental studies and research in pharmacy, biotechnology, and life sciences, following strict ethical guidelines.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "RESEARCH FACILITIES",
        },
        {
            title: "Audio-Visual Centre",
            description:
                "The audio-visual centre offers advanced tools and resources that support interactive learning, presentations, and student projects.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "LEARNING SUPPORT",
        },
        {
            title: "Auditorium, Seminar Halls & Board Rooms",
            description:
                "Our digitally equipped auditorium, seminar halls, and board rooms host conferences, guest lectures, placement programs, training sessions, and campus events.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "EVENT INFRASTRUCTURE",
        },
        {
            title: "E-Learning Rooms (SWAYAM / MOOCs)",
            description:
                "E-learning rooms offer high-speed internet, printing facilities, and access to digital libraries, online courses, and research databases.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "DIGITAL EDUCATION",
        },
        {
            title: "Training & Placement Cell",
            description:
                "The TnP cell conducts interview preparation, resume building, soft skills training, and organises campus placement drives for students.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "CAREER SERVICES",
        },
        {
            title: "Scholarships",
            description:
                "Students can avail scholarships up to 100% based on eligibility, including merit-based, sports, entrance exams, content creators, and more.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "STUDENT SUPPORT",
        },
        {
            title: "Research Facilities",
            description:
                "High-tech instruments, research labs, centres of excellence, IPR cell, and dedicated faculty support undergraduate, postgraduate, and Ph.D. research.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "ADVANCED RESEARCH",
        },
        {
            title: "Value Added Courses",
            description:
                "Short-term certificate courses conducted by industry experts help students enhance their skills and add value to their resumes.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "SKILL DEVELOPMENT",
        },
        {
            title: "Counselling Support",
            description:
                "Experienced counsellors provide one-on-one sessions to support students facing academic stress or personal challenges.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "STUDENT WELLBEING",
        },
        {
            title: "Recording Studio",
            description:
                "Our recording studio offers advanced tools for producing high-quality audio and video content, supporting creative expression.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "MEDIA PRODUCTION",
        },
        {
            title: "Career Development Centre",
            description:
                "The Career Development Centre guides students with job search strategies, training programs, internships, and placement opportunities.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "PROFESSIONAL GROWTH",
        },
        {
            title: "Business Lab",
            description:
                "The business lab provides advanced systems and software to help commerce and management students master data analysis and decision-making tools.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "MANAGEMENT STUDIES",
        },
        {
            title: "Statistical Database Lab",
            description:
                "This lab equips students and researchers with advanced statistical analysis techniques to analyse, interpret, and present data effectively.",
            imageSrc: PLACEHOLDER,
            logoSrc: PLACEHOLDER,
            subtitle: "DATA & ANALYTICS",
        },
    ];



    useEffect(() => {
        const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
        if (open) document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleClickCapture = (e) => {
        const btn = e.target?.closest?.("button, a");
        if (!btn) return;

        const label = (btn.textContent || "").trim().toLowerCase();
        if (!label.includes("know more")) return;

        e.preventDefault();

        const root = wrapperRef.current;
        if (!root) return;

        // Find all "Know More" buttons, pick clicked button index
        const knowMoreButtons = Array.from(root.querySelectorAll("button, a")).filter(
            (el) => ((el.textContent || "").trim().toLowerCase().includes("know more"))
        );

        const idx = knowMoreButtons.indexOf(btn);
        const picked = cards[idx] || cards[0];

        setModalData({
            title: picked?.title || "Details",
            description: picked?.description || "",
        });

        setOpen(true);
    };

    return (
        <>
            <div ref={wrapperRef} onClickCapture={handleClickCapture}>
                <Cards cards={cards} />
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                    role="dialog"
                    aria-modal="true"
                    onMouseDown={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    <div
                        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                                {modalData.title}
                            </h3>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="mt-4 text-[var(--light-text-gray)] leading-relaxed">
                            {modalData.description}
                        </p>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Academiccards;
