/**
 * Banner images for events whose CMS artwork does not represent the event.
 *
 * Some entries are published with a generic "upcoming events" placeholder
 * because the department had no artwork ready at launch. Where a better photo
 * exists - in the repo or on the CDN - it is listed here by event slug and used
 * in place of the CMS image, both for the hero on the event page and for the
 * card in the Upcoming Events section.
 *
 * Remove an entry once the CMS holds the same image.
 */
export const EVENT_IMAGE_OVERRIDES = {
    "ideathon-6-0": {
        image: "/news-and-events/ideathon-6-0/banner.webp",
        alt: "IDEATHON 6.0",
    },
};

/**
 * Returns the replacement banner for an event, or undefined when the CMS
 * image should be used as-is.
 *
 * @param {string} slug - the event's slug
 * @returns {{image: string, alt: string}|undefined}
 */
export function getEventImage(slug) {
    return EVENT_IMAGE_OVERRIDES[slug];
}

/**
 * Events whose banner should stay a cover image only - i.e. shown on the
 * Upcoming Events card - and not repeated as the large image inside the
 * event detail page body.
 */
const HIDE_INLINE_IMAGE_SLUGS = ["ideathon-6-0"];

/**
 * @param {string} slug - the event's slug
 * @returns {boolean} true when the banner should be hidden from the detail page body
 */
export function shouldHideInlineImage(slug) {
    return HIDE_INLINE_IMAGE_SLUGS.includes(slug);
}
