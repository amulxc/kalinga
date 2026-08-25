/**
 * Display dates for events that run across more than one day.
 *
 * The CMS `date` field holds a single day, so a multi-day event shows only the
 * day it opens. Until the backend carries an end date, the full range lives
 * here, keyed by event slug.
 *
 * Remove an entry once the API can supply that event's range on its own.
 */
export const EVENT_DATE_OVERRIDES = {
    "ideathon-6-0": "23.11.2026 - 24.11.2026",
};

/**
 * Returns the date to show for an event: the override when one exists for the
 * slug, otherwise whatever the API supplied.
 *
 * @param {string} slug - the event's slug
 * @param {string} [apiDate] - the `date` field from the news-events API
 * @returns {string|undefined}
 */
export function getEventDisplayDate(slug, apiDate) {
    return EVENT_DATE_OVERRIDES[slug] ?? apiDate;
}

export default EVENT_DATE_OVERRIDES;
