# Sustainability page (`/sustainability`)

The Sustainability page presents the work of the University's SDG Cell. It uses a
two-column layout: a sticky **side panel** on the left and stacked content
sections on the right, in the order defined by the
"Sustainability - New Content" document.

## Layout

| Breakpoint | Navigation |
| --- | --- |
| `lg` and up | Sticky side rail (`SustainabilitySideNav`) beside the content |
| below `lg` | Collapsible picker pinned under the site header (`SustainabilitySectionPicker`) |

Both surfaces are driven by the same section list and the same active-section
state, so they can never drift apart.

The page banner and breadcrumb come from the global `Breadcrumb` component via
`src/lib/pageData.ts` — the page itself does not render a hero.

## File map

```
src/app/sustainability/
  page.jsx                     Metadata + JSON-LD, renders the client
  SustainabilityClient.jsx     Assembles nav + sections in order

src/app/components/sustainability/
  useScrollSpy.js              Active-section tracking + smooth scroll helper
  SustainabilitySideNav.jsx    Desktop sticky rail
  SustainabilitySectionPicker.jsx  Mobile collapsible picker
  SectionNavLink.jsx           Shared nav item
  SectionBlock.jsx             Section shell (anchor id, heading, scroll offset)
  DocumentLinks.jsx            Shared grid of "open the PDF" buttons
  OrdinalText.jsx              Raises ordinal suffixes (12th → 12ᵗʰ) in plain copy
  data/
    navigation.js              Section ids + labels (drives nav AND order)
    sdg-content.js             Editorial copy, policy table, cell members, goal tiles
    coe-content.js             Centres of Excellence, office orders, PDF links
    clubs-content.js           Green Club and BIS Standard Club
    initiatives-content.js     The six initiative detail-page links
  sections/                    One component per section
```

## Section order

1. `sdg-cell` — Sustainable Development Goals (SDG) Cell
2. `commitment` — Commitment towards the SDGs (+ policy and composition PDFs)
3. `sustainability-policy` — Overview of the 17 UN goals and the role of universities
4. `mission-vision` — Mission, vision and SDG alignment
5. `policy-statement` — Policy statement and six principles
6. `sustainability-policies` — Goal → theme → policies table
7. `sdg-cell-composition` — SDG Cell members table
8. `centres-of-excellence` — CoE intro, vision, mission, objectives and centres
9. `office-orders` — CoE Establishment 2022 and 2025 office orders
10. `annual-reports` — Annual reports 2022–23, 2023–24, 2024–25
11. `sustainable-development-goals` — The 17 goal tiles with goal-wise reports
12. `our-initiatives` — Links to the six initiative detail pages
13. `student-engagement` — Green Club and BIS Standard Club

## Editing content

All copy, tables, links and image URLs live in `components/sustainability/data/`.
Editing a section normally means editing one data file — the section components
only handle presentation.

- **Adding or reordering a section**: add/move the entry in `data/navigation.js`
  and place the matching component in the same position in
  `SustainabilityClient.jsx`. The anchor id must match the `id` passed to
  `SectionBlock`.
- **Goal-wise SDG reports**: drop the PDF into `public/sdg-reports/` and add an
  entry to `SDG_GOAL_REPORTS` in `data/sdg-content.js`, keyed by goal number.
  Only goals present in that map become clickable and show the "View Report"
  ribbon. Reports open in a new tab and render in the browser's built-in PDF
  viewer. Currently only SDG 2 has a published report
  (`public/sdg-reports/sdg-02-zero-hunger-report.pdf`).
- **Our Initiatives**: `SUSTAINABILITY_INITIATIVES` in
  `data/initiatives-content.js` — each entry links to its detail page under
  `src/app/sustainability/<slug>/`.
- **Centres of Excellence**: `COE_CENTRES` in `data/coe-content.js`. The
  UltraTech Cement logo is served from `public/logos/ultratech-cement.jpg`; the
  remaining logos come from the CDN.
- **Office orders**: `OFFICE_ORDERS` in `data/coe-content.js` holds the full text
  of each order plus the link to the signed PDF.

## Notes

- Copy in `data/` stays plain text. Where it contains ordinals ("12th April",
  "7th Semester"), the rendering section wraps the string in `<OrdinalText>`,
  which raises the suffix. If you add copy with a date or semester to a section
  that does not use it yet, wrap it there too.

- Section anchors carry `scroll-mt-[150px]` so headings clear the sticky header
  and, on mobile, the section picker. The scroll-spy reading line in
  `useScrollSpy.js` (`OFFSET = 160`) must stay above that value.
- Documents open in a new tab rather than the in-page flipbook, matching the rest
  of the SDG Cell material.
