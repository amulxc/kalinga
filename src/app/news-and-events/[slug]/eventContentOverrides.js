/**
 * Full event write-ups that the CMS entry does not yet carry.
 *
 * The `content` field for some events holds only the short teaser that was
 * available when the event was first published. Where the department has since
 * supplied the complete brief (themes, categories, prizes, round dates), it
 * lives here keyed by event slug and is rendered in place of the API copy.
 *
 * The markup is plain semantic HTML - `.rich-text-content` in globals.css
 * already styles headings, lists and tables, so no classes are needed here.
 *
 * Remove an entry once the CMS `content` for that slug carries the full text.
 */
export const EVENT_CONTENT_OVERRIDES = {
    "ideathon-6-0": `
<p>Do you have a business idea in technology, sustainability, healthcare, finance, education, or any other field? Here&rsquo;s your chance to turn it into reality!</p>

<p>The Faculty of Commerce and Management is organizing <strong>IDEATHON 6.0 &ndash; A Business Plan Competition 2026</strong> on 23<sup>rd</sup> and 24<sup>th</sup> November 2026 for school and college students, offering the opportunity to present business plans and win amazing cash prizes worth <strong>INR 1,20,000/-</strong> and certifications.</p>

<p>We invite aspiring young entrepreneurs to pitch their ideas, compete, and take their first step towards building successful business ventures.</p>

<h2>In Collaboration With</h2>
<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin:8px 0 20px"><img src="/news-and-events/ideathon-6-0/partners/young-indians.png" alt="Young Indians" style="height:70px;width:auto;margin:0" /><img src="/news-and-events/ideathon-6-0/partners/sr-university.png" alt="SR University, Warangal" style="height:70px;width:auto;margin:0" /><img src="/news-and-events/ideathon-6-0/partners/asma-pune.png" alt="ASMA Institute of Management, Pune" style="height:70px;width:auto;margin:0" /><img src="/news-and-events/ideathon-6-0/partners/campus-on.png" alt="Campus On" style="height:70px;width:auto;margin:0" /></div>
<p><strong>Powered By:</strong></p>
<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin:8px 0 20px"><img src="/news-and-events/ideathon-6-0/partners/unstop.png" alt="Unstop" style="height:70px;width:auto;margin:0" /></div>
<p><strong>Trophy Partner:</strong></p>
<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin:8px 0 20px"><img src="/news-and-events/ideathon-6-0/partners/gift-kya-de.png" alt="Gift Kya De? (GKD)" style="height:70px;width:auto;margin:0" /></div>
<p><strong>Gifting Partner:</strong></p>
<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin:8px 0 20px"><img src="/news-and-events/ideathon-6-0/partners/orgalife.png" alt="Orgalife" style="height:70px;width:auto;margin:0" /></div>
<p><strong>Sponsored By:</strong></p>
<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin:8px 0 20px"><img src="/news-and-events/ideathon-6-0/partners/7-overground.png" alt="7 Overground" style="height:70px;width:auto;margin:0" /><img src="/news-and-events/ideathon-6-0/partners/kms-seeds.png" alt="KMS Seeds Private Limited" style="height:70px;width:auto;margin:0" /></div>
<p><strong>Aligned With UN Sustainable Development Goals (SDGs):</strong> SDG 4 &ndash; Quality Education, SDG 8 &ndash; Decent Work and Economic Growth, SDG 9 &ndash; Industry, Innovation and Infrastructure</p>

<h2>Who Can Participate?</h2>
<ul>
  <li><strong>Category A</strong> &ndash; School Students (IX&ndash;XII)</li>
  <li><strong>Category B</strong> &ndash; College/University Students (UG, PG &amp; Research Scholars)</li>
</ul>

<h2>Themes</h2>
<ul>
  <li>AI, DeepTech and Emerging Technologies</li>
  <li>AI for MSMEs and Digital Business Transformation</li>
  <li>Climate-Tech, Green Energy and Net Zero Solutions</li>
  <li>Circular Economy, Waste-to-Wealth and Sustainable Consumption</li>
  <li>Sustainable Agriculture, Food Security and Rural Innovation</li>
  <li>HealthTech, Preventive Healthcare and Mental Wellness</li>
  <li>Cybersecurity, Digital Trust and Online Safety</li>
  <li>Smart Mobility, Traffic Management and Smart Cities</li>
  <li>FinTech, Digital Finance and Financial Inclusion</li>
  <li>E-Governance, E-Commerce and Digital Marketing</li>
  <li>Future Education, EdTech and Gamified Learning</li>
  <li>SpaceTech, DroneTech and Disaster Management</li>
  <li>Social Innovation, Swachh Bharat and Community Development</li>
  <li>Water Conservation, Sanitation and Sustainable Living</li>
  <li>Women Safety, Accessibility and Inclusive Design</li>
  <li>Tourism, Hospitality, Culture and Creative Economy</li>
  <li>Advanced Manufacturing, Production and Industry 5.0</li>
  <li>Fitness, SportsTech and Active Lifestyle</li>
  <li>Blockchain, IoT and Smart Infrastructure</li>
  <li>Vision India@2047: Innovations for a Developed India</li>
  <li>Open Innovation: Any Other Creative, Social or Business Idea</li>
</ul>

<h2>Cash Rewards</h2>
<p>Cash Rewards for Winners Across Both Categories:</p>
<ul>
  <li><strong>Winning Team:</strong> INR 25,000/-</li>
  <li><strong>First Runner-up:</strong> INR 15,000/-</li>
  <li><strong>Second Runner-up:</strong> INR 10,000/-</li>
  <li><strong>2 Businesses with Potential:</strong> INR 5,000/- each</li>
</ul>

<h2>Important Dates</h2>
<table>
  <thead>
    <tr>
      <th>Round 1</th>
      <th>Round 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Registration Start Date: 1<sup>st</sup> August 2026</td>
      <td>Registration Start Date: 11<sup>th</sup> October 2026</td>
    </tr>
    <tr>
      <td>Closing Date: 3<sup>rd</sup> October 2026</td>
      <td>Closing Date: 7<sup>th</sup> November 2026</td>
    </tr>
    <tr>
      <td>Announcement of Shortlisted Teams: 11<sup>th</sup> October 2026</td>
      <td>Presentation of Business Plan (Online/Offline): 23<sup>rd</sup> and 24<sup>th</sup> November 2026</td>
    </tr>
  </tbody>
</table>

<h2>Registration Fees</h2>
<table>
  <thead>
    <tr>
      <th>Teams</th>
      <th>Round 1 (Entry Fee)</th>
      <th>Round 2 (For Shortlisted Teams)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Indian Teams</td>
      <td>INR 200/-</td>
      <td>INR 1500/-</td>
    </tr>
    <tr>
      <td>International Teams</td>
      <td>USD 5</td>
      <td>USD 15</td>
    </tr>
  </tbody>
</table>

<h2>Important Information</h2>
<ul>
  <li>The teams should get a minimum score of 50% to be eligible for the reward.</li>
  <li>Maximum presentation time: 15 minutes per team.</li>
  <li>Maximum number of members in a team: 5.</li>
  <li>Accommodation facility is available on a chargeable basis as per the University norms.</li>
  <li>Business plans are to be submitted to <a href="mailto:ideathon@kalingauniversity.ac.in">ideathon@kalingauniversity.ac.in</a>.</li>
</ul>

<h2>Contact Persons</h2>
<ul>
  <li><strong>Dr. Divya Nandini Sharma:</strong> +91-6261763882, +91-7024116975</li>
  <li><strong>Dr. Satvik Jain:</strong> +91-8800328488</li>
  <li><strong>Mr. Abhishek Jaiswar:</strong> +91-8303561035</li>
  <li><strong>Email:</strong> <a href="mailto:ideathon@kalingauniversity.ac.in">ideathon@kalingauniversity.ac.in</a></li>
</ul>
`,
};

/** Brochure downloads that replace the CMS `link` for an event. */
export const EVENT_LINK_OVERRIDES = {
    "ideathon-6-0": "/news-and-events/ideathon-6-0/IDEATHON-6.0-Brochure.pdf",
};

export function getEventLink(slug, apiLink) {
    return EVENT_LINK_OVERRIDES[slug] ?? apiLink;
}

/**
 * Returns the write-up to render for an event: the override when one exists for
 * the slug, otherwise whatever the API supplied.
 *
 * @param {string} slug - the event's slug
 * @param {string} [apiContent] - the `content` field from the news-events API
 * @returns {string|undefined}
 */
export function getEventContent(slug, apiContent) {
    return EVENT_CONTENT_OVERRIDES[slug] ?? apiContent;
}

export default EVENT_CONTENT_OVERRIDES;
