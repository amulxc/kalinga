"use client";

import { useState } from "react";

export function AccordionItem({ title, children, defaultOpen = false, titleClassName = "", bgClassName = "", className = "" }) {
  const [open, setOpen] = useState(defaultOpen);

  const defaultTitleClassName = "font-stix text-[24px] leading-[30px] text-[var(--button-red)]";
  const finalTitleClassName = titleClassName || defaultTitleClassName;

  let finalBgClassName = "";
  if (bgClassName) {
    const hasPadding = bgClassName.split(/\s+/).some(c =>
      c.startsWith('p-') || c.startsWith('px-') || c.startsWith('py-') ||
      c.startsWith('pt-') || c.startsWith('pb-') || c.startsWith('pl-') || c.startsWith('pr-')
    );
    finalBgClassName = hasPadding ? bgClassName : `${bgClassName} p-[15px] md:p-[17.5px]`;
  } else {
    finalBgClassName = "bg-[var(--card-sandal)] p-[15px] md:p-[17.5px]";
  }

  return (
    <div className={`rounded-[16px] ${finalBgClassName} ${className}`}>
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <h3 className={finalTitleClassName}>
          {title}
        </h3>

        {/* Arrow */}
        <span
          className={`ml-4 inline-block transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "mt-4 max-h-[15000px]" : "max-h-0"
          }`}
      >
        {children}
      </div>
    </div>
  );
}
