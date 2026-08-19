"use client";

import { useCallback, useEffect, useState } from "react";

// Reading line: a bit below the sticky site header.
const OFFSET = 160;

/**
 * Tracks which anchored section is currently being read and exposes a helper to
 * jump to one. Sections on this page are far taller than the viewport, so a
 * position check is more dependable than intersection ratios.
 *
 * @param {Array<{id: string, label: string}>} sections - sections in page order
 * @returns {{activeId: string, goToSection: (id: string) => void}}
 */
export default function useScrollSpy(sections = []) {
    const [activeId, setActiveId] = useState(sections[0]?.id || "");

    useEffect(() => {
        if (typeof window === "undefined" || sections.length === 0) return undefined;

        let frame = null;

        const syncActiveSection = () => {
            frame = null;

            let current = sections[0].id;
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element && element.getBoundingClientRect().top <= OFFSET) {
                    current = section.id;
                }
            });

            // The last section may never reach the reading line, so pin it once
            // the page is scrolled all the way down.
            const atBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
            if (atBottom) current = sections[sections.length - 1].id;

            setActiveId((previous) => (previous === current ? previous : current));
        };

        const onScroll = () => {
            if (frame === null) frame = window.requestAnimationFrame(syncActiveSection);
        };

        syncActiveSection();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (frame !== null) window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [sections]);

    const goToSection = useCallback((id) => {
        const target = document.getElementById(id);
        if (!target) return;

        setActiveId(id);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Keep the URL shareable without triggering the browser's instant jump.
        window.history.replaceState(null, "", `#${id}`);
    }, []);

    return { activeId, goToSection };
}
