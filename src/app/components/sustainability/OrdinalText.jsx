import { Fragment } from "react";

// Matches an ordinal suffix that directly follows digits: 1st, 2nd, 3rd, 12th…
const ORDINAL_PATTERN = /(\d+)(st|nd|rd|th)\b/gi;

/**
 * Renders text with ordinal suffixes raised: 12th → 12<sup>th</sup>.
 *
 * Ordinals live inside plain strings in `data/`, so this keeps the copy free of
 * markup while still typesetting dates and semesters correctly wherever they
 * appear on the page.
 *
 * @param {string} children - the text to render
 */
export default function OrdinalText({ children }) {
    if (typeof children !== "string") return children ?? null;

    const parts = [];
    let lastIndex = 0;
    let match;

    ORDINAL_PATTERN.lastIndex = 0;
    while ((match = ORDINAL_PATTERN.exec(children)) !== null) {
        const [full, number, suffix] = match;

        if (match.index > lastIndex) {
            parts.push(children.slice(lastIndex, match.index));
        }

        parts.push(
            <Fragment key={`${match.index}-${full}`}>
                {number}
                <sup className="text-[0.7em] leading-none align-super">{suffix}</sup>
            </Fragment>
        );

        lastIndex = match.index + full.length;
    }

    if (parts.length === 0) return children;
    if (lastIndex < children.length) parts.push(children.slice(lastIndex));

    return <>{parts}</>;
}
