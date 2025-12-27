"use client";

import React from "react";

export default function Icons({ name = "arrowBox", className = "", size = 24, ...props }) {
    const common = { width: size, height: size, ...props };

    if (name === "arrowBox") {
        return (
            <svg
                {...common}
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={[
                    "h-6 w-6 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0",
                    className,
                ].join(" ")}
                aria-hidden="true"
            >
                <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z" />
            </svg>
        );
    }

    if (name === "chevronDown") {
        return (
            <svg
                {...common}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={["transition-transform", className].join(" ")}
                aria-hidden="true"
            >
                <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    // ✅ For sliders
    if (name === "chevronLeft") {
        return (
            <svg
                {...common}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
                aria-hidden="true"
            >
                <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (name === "chevronRight") {
        return (
            <svg
                {...common}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
                aria-hidden="true"
            >
                <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return null;
}
