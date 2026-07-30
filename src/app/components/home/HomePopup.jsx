"use client";

import { useState, useEffect } from "react";

/**
 * Home page promotional popup.
 * - Shows a desktop image on md+ screens and a mobile image on small screens.
 * - Appears once per browser session (dismissed state stored in sessionStorage).
 * - Closes via the X button, backdrop click, or the Escape key.
 * - Locks body scroll only while open; fully self-contained so it can't affect other features.
 */
const DESKTOP_IMAGE = "https://cdn.kalingauniversity.ac.in/Home/popup-desktop";
const MOBILE_IMAGE = "https://cdn.kalingauniversity.ac.in/Home/mobile-popup";
const STORAGE_KEY = "kuHomePopupDismissed";

export default function HomePopup() {
  const [open, setOpen] = useState(false);

  // Show once per session, shortly after the page settles
  useEffect(() => {
    let alreadyDismissed = false;
    try {
      alreadyDismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (_) {
      // sessionStorage may be unavailable (private mode) — just show the popup
    }
    if (alreadyDismissed) return;

    const timer = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(timer);
  }, []);

  // Escape to close + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (_) {
      // ignore storage errors
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10050] flex items-center justify-center bg-black/70 p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Announcement"
    >
      <div
        className="relative inline-block"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg text-[var(--dark-blue)] transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Desktop image */}
        <img
          src={DESKTOP_IMAGE}
          alt="Kalinga University announcement"
          className="hidden md:block rounded-xl object-contain shadow-2xl"
          style={{ width: "auto", height: "auto", maxWidth: "600px", maxHeight: "80vh" }}
        />
        {/* Mobile image */}
        <img
          src={MOBILE_IMAGE}
          alt="Kalinga University announcement"
          className="block md:hidden rounded-xl object-contain shadow-2xl"
          style={{ width: "auto", height: "auto", maxWidth: "70vw", maxHeight: "85vh" }}
        />
      </div>
    </div>
  );
}
