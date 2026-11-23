/**
 * News & events that are not (yet) in the CMS.
 *
 * Each record mirrors the shape of a `/news-events/` API result, so every
 * consumer of `fetchNewsEvents` / `fetchNewsEventDetails` (the events page,
 * event detail pages, department/course "Events and Activities" sliders, the
 * IQAC page, etc.) picks them up without any changes of its own.
 *
 * Source: "Events Sheet - Website" (sheet 20.11.2026) and "Events - Website"
 * doc; photos from the matching Drive folders, stored under
 * /public/news-and-events/2026-events/<slug>/.
 *
 * Remove an entry once the same event is published in the CMS.
 */

const IMG = "/news-and-events/2026-events";

// CMS department ids (see /api/departments/)
const DEPT = {
  commerceManagement: { id: 4, name: "Faculty of Commerce and Management" },
  science: { id: 5, name: "Faculty of Science" },
  law: { id: 7, name: "Faculty of Law" },
  technology: { id: 8, name: "Faculty of Technology" },
  education: { id: 9, name: "Faculty of Education" },
};

const EVENTS_CATEGORY = { id: 2, name: "Events" };

function images(slug, count, alt) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    image: `${IMG}/${slug}/${i + 1}.webp`,
    alt,
    caption: null,
    is_featured: i === 0,
  }));
}

function record({ id, slug, date, heading, shortPara, content, dept = null, photoCount }) {
  const imgs = images(slug, photoCount, heading);
  return {
    id,
    slug,
    date,
    heading: `<p>${heading}</p>`,
    short_para: `<p>${shortPara}</p>`,
    content,
    images: imgs,
    photos: [],
    primary_image: imgs[0],
    images_count: imgs.length,
    tags: [],
    tags_count: 0,
    link: null,
    featured: false,
    is_published: true,
    is_featured: false,
    reading_time: 2,
    category: EVENTS_CATEGORY.id,
    category_name: EVENTS_CATEGORY.name,
    category_data: { id: EVENTS_CATEGORY.id, name: EVENTS_CATEGORY.name, slug: "events" },
    department: dept ? dept.id : null,
    department_name: dept ? dept.name : undefined,
    form_category: null,
    form_category_data: null,
    isLocal: true,
  };
}

const lawSeminarClosing =
  "Senior judicial officers, including Family Court Judges, Special Judges, Additional Sessions Judges, and Civil Judges, graced the seminar.";

export const LOCAL_NEWS_EVENTS = [
  record({
    id: 900002,
    slug: "nba-accreditation-for-mba-program",
    date: "16 May, 2026",
    heading: "Kalinga University Achieves NBA Accreditation for MBA Program",
    shortPara: "We achieved a major academic milestone as our MBA Program has received NBA accreditation.",
    dept: DEPT.commerceManagement,
    photoCount: 2,
    content: `<p>We achieved a major academic milestone as our Master of Business Administration (MBA) Program has received NBA accreditation. Through a rigorous evaluation process carried out by different teams, various academic and institutional parameters were assessed, including curriculum design, teaching-learning process, faculty experience and their achievements, research and innovation, student performance, placement track record, infrastructure, governance, and implementation of Outcome-Based Education (OBE).</p>
<p>The leaders of the University congratulated the Internal Quality Assurance Cell (IQAC), Department of Management, faculty members, students, alumni, industry collaborators, and administrative staff for their dedication towards achieving the NBA accreditation.</p>
<p>The MBA program at Kalinga University is designed to provide students with experiential learning opportunities through internships, case studies, live projects, industrial visits, workshops, and seminars. Students develop ethical values, analytical abilities, and leadership skills required in the competitive business environment.</p>`,
  }),
  record({
    id: 900003,
    slug: "training-session-on-group-discussion-and-personal-interview",
    date: "25 Apr, 2026",
    heading: "Training Session on Group Discussion &amp; Personal Interview",
    shortPara: "We organised a Training Session on Group Discussion &amp; Personal Interview.",
    photoCount: 3,
    content: `<p>We organised a Training Session on Group Discussion &amp; Personal Interview in which more than 120 students participated, including final-year students, recent graduates, and aspirants preparing for competitive exams such as CAT and MAT. The session was conducted by Mr. Saurabh Banwar, Manager, Career and Corporate Resource Centre (CCRC) and Sr. Corporate Trainer, Kalinga University.</p>
<p>The insightful session aimed to address a critical gap among students, i.e. the ability to express their ideas and knowledge with clarity, confidence, and structured interviews. A live Group Discussion and Personal Interview round was conducted to enable students to understand how to think and respond confidently in real-time, maintain proper body language and posture, listen actively, manage nervousness, and communicate effectively.</p>
<p>The session was further carried out by Mr. Narendra Dewangan, Director, Best Computer Institute; Ms. Indu Sahu, Computer Trainer, Best Computer Institute; Ms. Disha Thakur, Asst. Professor, Shri Chandulal Medical College, Bhilai; and Mr. Javed Hussain, Director, Sayna Commerce Coaching.</p>`,
  }),
  record({
    id: 900004,
    slug: "mou-with-conceive-research-and-centre",
    date: "25 Apr, 2026",
    heading: "MoU Signed with Conceive Research and Centre (OPC) Private Limited",
    shortPara: "We signed an MoU with Conceive Research and Centre (OPC) Private Limited.",
    photoCount: 1,
    content: `<p>We signed an MoU with Conceive Research and Centre (OPC) Private Limited. The MoU was signed by Dr. Sandeep Gandhi, Registrar, Kalinga University and Mr. Pritam Chatterjee, Director of Conceive Research and Centre (OPC) Private Limited and Chief Embryologist.</p>
<p>Key areas of collaboration include hands-on exposure to IVF laboratory protocols, ART bank operations, embryo culture techniques and cryostorage procedures, technical training sessions on ICSI, vitrification, embryo biopsy, and quality control in reproductive laboratories, joint projects exploring reproductive biotechnology, gamete/embryo cryopreservation, and fertility preservation technologies, and knowledge sharing between university faculty and industry embryologists.</p>
<p>Our students will gain invaluable practical experience in one of the most advanced fertility research facilities in Chhattisgarh. It will help them build technical competence, professional confidence, and industry awareness.</p>`,
  }),
  record({
    id: 900005,
    slug: "earth-day-celebration-2026",
    date: "22 Apr, 2026",
    heading: "Earth Day Celebration 2026",
    shortPara: "An Earth Day celebration was organised on the theme &ldquo;Our Power, Our Planet&rdquo;.",
    dept: DEPT.science,
    photoCount: 5,
    content: `<p>The Internal Quality Assurance Cell (IQAC), in collaboration with the Department of Zoology, organised an Earth Day celebration on the theme &ldquo;Our Power, Our Planet&rdquo; in association with the Ministry of Earth Sciences, Government of India. The program was inaugurated by Dr. Vijayalaxmi, Director, IQAC, in the presence of Deans, Heads of Departments, faculty members, and student volunteers.</p>
<p>The event featured a series of activities, including a Painting Competition, a Slogan Writing Competition, a Pledge-Taking Ceremony and Certificate Distribution, and a Tree Plantation Drive. On this occasion, Dr. R. Shridhar, Vice Chancellor of Kalinga University, highlighted the importance of environmental awareness and encouraged participants to adopt sustainable practices in their daily lives. Dr. Manoj Singh, Head of the Department of Zoology, Faculty of Science, also addressed the participants and encouraged everyone to take collective responsibility towards protecting the environment.</p>
<p>More than 40 participants took part in the Painting and Slogan Writing Competitions, which were evaluated by the jury members, Dr. Shraddha Verma, Dean, Faculty of Education, and Dr. Shilpi Bhattacharya, Dean, Faculty of Arts and Humanities. The celebration concluded with an interactive feedback session, followed by the certificate distribution ceremony.</p>`,
  }),
  record({
    id: 900006,
    slug: "seminar-on-cyber-law-and-digital-evidence-bilaspur",
    date: "17 Apr, 2026",
    heading: "Seminar on Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence at District Court, Bilaspur",
    shortPara: "We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the District Court, Bilaspur.",
    dept: DEPT.law,
    photoCount: 3,
    content: `<p>We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the District Court, Bilaspur. The seminar witnessed active participation from a large number of practising advocates and was graced by the Honourable District Judge, Adv. Dauram Chandravanshi &ndash; President, Adv. Ravi Pandey &ndash; Secretary, Adv. P. R. Shrivas &ndash; Treasurer, Adv. Rakesh Chaubey &ndash; Library Secretary, Adv. Shailesh Kumar Ketarap &ndash; I District &amp; Additional Sessions Judge, Adv. Lavkesh Pratap &ndash; Special Judge, Adv. Venseslas Toppo &ndash; District and Add Sessions Judge, II F.T.S.C (POCSO), Adv. Vijendra Sonwani &ndash; XI District &amp; Additional Sessions Judge, Bilaspur, and more.</p>
<p>The expert session was delivered by Ms. Ekta Chandrakar, Assistant Professor, Faculty of Law, who discussed important legal provisions, recent judicial developments, and the practical aspects of digital evidence in the justice delivery system. ${lawSeminarClosing}</p>`,
  }),
  record({
    id: 900007,
    slug: "mou-with-zee-institute-of-creative-art-bhubaneswar",
    date: "08 Apr, 2026",
    heading: "MoU Signed with Zee Institute of Creative Art, Bhubaneswar",
    shortPara: "Kalinga University signed an MoU with Zee Institute of Creative Art (ZICA), Bhubaneswar.",
    photoCount: 1,
    content: `<p>Kalinga University, Naya Raipur, Chhattisgarh, India, has signed a Memorandum of Understanding (MoU) with Zee Institute of Creative Art (ZICA), Bhubaneswar, to expand creative career opportunities for students. The agreement aims to facilitate two specialisations, i.e., Bachelor of Vocation (B.Voc) programs in Animation and VFX in Fashion Technology.</p>
<p>The agreement was formally signed by Mr. Pramod Kumar Panda, Director, ZICA Bhubaneswar, and Dr. Sandeep Gandhi, Registrar, Kalinga University, in the presence of Mr. Kalicharan Sahu, Centre Head, ZICA Bhubaneswar, and Mr. Abhishek Sharma, Director Admissions, Kalinga University.</p>
<p>Under this collaboration, ZICA Bhubaneswar will provide expert mentorship, real-world exposure, and access to the latest tools and technologies used in animation, VFX, and fashion industries. It will enable students to gain practical insights, build strong portfolios, and enhance their employability in a highly demanding sector.</p>`,
  }),
  record({
    id: 900008,
    slug: "mou-with-hebei-international-studies-university-china",
    date: "02 Apr, 2026",
    heading: "MoU Signed with Hebei International Studies University, China",
    shortPara: "Kalinga University signed an MoU with Hebei International Studies University, China.",
    photoCount: 3,
    content: `<p>Kalinga University, Naya Raipur, Chhattisgarh, India, has signed a Memorandum of Understanding (MoU) with Hebei International Studies University, China, to promote academic and research collaboration between the two institutions.</p>
<p>The MoU was signed by Academician Sun Jianzhong, President and Rector, Hebei International Studies University, China and Dr. Sandeep Gandhi, Registrar, Kalinga University, in the presence of other representatives. Through this collaboration, both institutions will benefit from student exchange programs and collaborative activities, including conferences, seminars, workshops, and curriculum development.</p>`,
  }),
  record({
    id: 900009,
    slug: "icsdgf-2026",
    date: "31 Mar, 2026",
    heading: "International Conference on &ldquo;Sustainable Development towards a Greener Future (ICSDGF-2026)&rdquo;",
    shortPara: "The two-day International Conference encouraged participants to contribute towards a sustainable future.",
    dept: DEPT.technology,
    photoCount: 4,
    content: `<p>The Faculty of Technology organised a two-day International Conference on &ldquo;Sustainable Development towards a Greener Future (ICSDGF-2026)&rdquo;. Chief Guest Prof. Rajeev Prakash, Director of the Indian Institute of Technology Bhilai, inaugurated the conference. The keynote speaker, Dr. Ajay Tripathi, Professor and Head of Mechanical Engineering at Government Engineering College Raipur, discussed the use of thermal drones and solar monitoring software to capture images for maintenance needs for efficient operation.</p>
<p>The technical sessions, held in a hybrid format, featured academicians, professors, technology experts, industry professionals, and research scholars from India and abroad. A total of 600 research papers were received for the conference, out of which 260 were selected and presented during technical sessions. Selected research papers will be published in the Taylor and Francis journal and other Scopus-indexed journals.</p>
<p>The conference was organised with the support and collaboration of various academic institutions, industries, organisations, and government bodies, including NABARD; Anusandhan National Research Foundation; Chhattisgarh Council of Science and Technology; UltraTech Cement; Government Engineering College, Raipur; KIPM Technical Campus, Gorakhpur, and other partners. Dr. M. L. Agarwal &ndash; Additional Director, Technical Education Department, Chhattisgarh, delivered the valedictory address.</p>`,
  }),
  record({
    id: 900010,
    slug: "seminar-on-cyber-law-and-digital-evidence-kurud",
    date: "27 Mar, 2026",
    heading: "Seminar on Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence at Civil Court, Kurud",
    shortPara: "We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the Civil Court, Kurud.",
    dept: DEPT.law,
    photoCount: 2,
    content: `<p>We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the Civil Court, Kurud. The seminar witnessed active participation from a large number of practising advocates and was graced by the Honourable Adv. Radheshyam, Additional District &amp; Sessions Judge, Adv. Rajat Kumar Nisla, Civil Judge (Senior Division), Adv. Nilesh Baghel, Civil Judge (Junior Division), Adv. Ramesh Pandey, President, Bar Association; Adv. L. P. Goswami, Patron, Bar Association; Adv. Naresh Digre, Vice President, Bar Association; Adv. Yashwant Sahu, Secretary, Bar Association.</p>
<p>The session was addressed by Ms. Saloni Tyagi, HoD, Faculty of Law, who discussed statutory provisions governing cyber law, the legal framework surrounding digital evidence, procedures for collection and preservation of electronic records, admissibility of digital evidence in courts, and recent judicial developments in this domain. ${lawSeminarClosing}</p>`,
  }),
  record({
    id: 900011,
    slug: "seminar-on-cyber-law-and-digital-evidence-korba",
    date: "24 Mar, 2026",
    heading: "Seminar on Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence at District Court, Korba",
    shortPara: "We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the District Court, Korba.",
    dept: DEPT.law,
    photoCount: 3,
    content: `<p>We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the District Court, Korba. The seminar witnessed active participation from a large number of practising advocates and was graced by Honourable Mr. Gopi Kaushiq, Election Officer; Adv. Ravindra Kumar Parashar, Member of State Bar Council; Adv. Ganesh Kuldeep, President, Bar Council; Adv. Nutan Singh Thakur, Secretary, Bar Council and Sabhapati, Nagar Nigam Korba; Adv. Anish Saxena, Vice President, Bar Council; Adv. Ashwaq Ahmed, Senior Advocate; and Mr. Ashok Kumar Tiwari, Member of State Bar Council.</p>
<p>The session was addressed by Mrs. Ekta Chandrakar, Assistant Professor, Faculty of Law, who discussed statutory provisions governing intellectual property laws, arbitration frameworks, mediation processes, drafting of arbitration clauses, enforceability of arbitral awards, and recent judicial developments. ${lawSeminarClosing}</p>`,
  }),
  record({
    id: 900012,
    slug: "seminar-on-bharatiya-nyaya-sanhita-manendragarh",
    date: "24 Mar, 2026",
    heading: "Seminar on &ldquo;Bharatiya Nyaya Sanhita (BNS) and its Practical Implications in the Criminal Justice System&rdquo;",
    shortPara: "We organised a seminar on &ldquo;Bharatiya Nyaya Sanhita (BNS)&rdquo; at the Session Court, Manendragarh.",
    dept: DEPT.law,
    photoCount: 1,
    content: `<p>We organised a seminar on &ldquo;Bharatiya Nyaya Sanhita (BNS) and its Practical Implications in the Criminal Justice System&rdquo; at the Session Court, Manendragarh. The seminar witnessed active participation from a large number of practising advocates and was graced by the Honourable President, Mr. Surya Prakash Singh; Vice President, Mr. Uttam Kumar Singh; Vice President, Ms. Meena Singh; and Joint Secretary, Ms. Netra Bindu Jha.</p>
<p>The session was addressed by Ms. Chitika Malhotra, Assistant Professor, Faculty of Law, who discussed key provisions of the Bharatiya Nyaya Sanhita (BNS), its structural changes from the Indian Penal Code (IPC), newly introduced offences, revised definitions, and its impact on criminal law practice. The session also covered practical aspects such as interpretation of provisions, procedural coordination with allied laws, and challenges faced by advocates during the transition from IPC to BNS. ${lawSeminarClosing}</p>`,
  }),
  record({
    id: 900013,
    slug: "seminar-on-cyber-law-and-digital-evidence-bemetara",
    date: "24 Mar, 2026",
    heading: "Seminar on Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence at District Court, Bemetara",
    shortPara: "We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the District Court, Bemetara.",
    dept: DEPT.law,
    photoCount: 3,
    content: `<p>We organised a Seminar on &ldquo;Cyber Law &amp; Digital Evidence and Admissibility of Digital Evidence&rdquo; at the District Court, Bemetara. The seminar witnessed active participation from a large number of practising advocates and was graced by the Honourable District Judge, Adv. Saroj Nandan Das, Additional District &amp; Sessions Judge (First), Adv. Devendra Kumar, Additional District &amp; Sessions Judge, Adv. Sakshi Dixit, and Chief Judicial Magistrate Adv. Mohit Singh.</p>
<p>The session was addressed by Ms. Vishakha Sakharkar, Assistant Professor, Faculty of Law, who discussed statutory provisions governing cyber law, the legal framework surrounding digital evidence, procedures for collection and preservation of electronic records, admissibility of digital evidence in courts, and recent judicial developments in this domain. ${lawSeminarClosing}</p>`,
  }),
  record({
    id: 900014,
    slug: "workshop-on-practical-ai-tools-for-modern-educators",
    date: "23 Mar, 2026",
    heading: "7-Day Online Workshop on &ldquo;Practical AI Tools for Modern Educators&rdquo;",
    shortPara: "The Faculty of Education at Kalinga University successfully organised a 7-Day Online Workshop.",
    dept: DEPT.education,
    photoCount: 2,
    content: `<p>The Faculty of Education at Kalinga University successfully organised a 7-Day Online Workshop on &ldquo;Practical AI Tools for Modern Educators&rdquo;. A total of 135 registrations were received from educators, research scholars, and students. The program featured Ms. Sweedal D Costa (Educator, Content Strategist, and Founder of &lsquo;Hack the Classroom&rsquo;) as the primary Resource Person.</p>
<p>Teachers from prestigious institutions such as Rajkumar College, Prestige Public School Pune, Bharatmāta School, Delhi Public School (DPS), and Krishna Public School (KPS) actively participated. The workshop was successfully coordinated by Dr. Harsha Sharma under the guidance of Dr. Shraddha Verma, Dean, Faculty of Education.</p>
<h3>Over the seven days, sessions covered:</h3>
<ul>
  <li><strong>AI Foundations &amp; Research:</strong> Including tools like <strong>NotebookLM</strong> and AI-based research assistance.</li>
  <li><strong>Creative Content:</strong> Utilising <strong>Canva</strong> for Education, <strong>Suno</strong> for music, and digital resources for children.</li>
  <li><strong>Gamification &amp; Engagement:</strong> Using platforms like <strong>Flippity</strong> and <strong>Classroom Screen</strong>.</li>
  <li><strong>Productivity &amp; Automation:</strong> Mastering slide automation with <strong>Gamma</strong> and <strong>Napkin</strong>, and overall workflow automation.</li>
</ul>`,
  }),
];

/**
 * Post-event write-ups and photos for events that already exist in the CMS
 * but still carry their pre-event teaser. Fields here replace the CMS ones;
 * `extraImages` are appended to the CMS gallery.
 */
export const CMS_EVENT_PATCHES = {
  "toppers-felicitation-ceremony": {
    heading: "<p>&ldquo;Topper&rsquo;s Felicitation Ceremony 5.0&rdquo; to Honour CGBSE 2026 Meritorious Students</p>",
    short_para:
      "<p>We conducted &ldquo;Topper&rsquo;s Felicitation Ceremony 5.0&rdquo; to honour CGBSE 2026 Meritorious Students for their achievement.</p>",
    content: `<p>We conducted &ldquo;Topper&rsquo;s Felicitation Ceremony 5.0&rdquo; to honour CGBSE 2026 Meritorious Students for their dedication and outstanding achievement across the state. Around 200 students from different schools, along with their parents, participated in the ceremony. Academic leaders of the University were present, along with the Renowned influencer and creator of the &ldquo;HiRaipur&rdquo; platform, Mr. Pijush K Roy, who attended the event as the Special Guest.</p>
<p>Students who secured above 80% marks in the CGBSE Class 12 Board Examination were honoured, and those who secured above 95% marks were specially felicitated and offered 100% scholarship opportunities for admission at Kalinga University. Cash prizes and certificates were distributed to the top-performing students based on their ranks, with INR 10,000/- for Rank 1, INR 8,000/- for Rank 2, INR 6,000/- for Rank 3, INR 4,000/- for Rank 4, INR 3,000/- for Rank 5, and INR 2,000/- each for students securing Rank 6 to Rank 10.</p>
<p>Mr. Sameer Ratnaparkhi took a special session for parents on the topic &ldquo;How Parents Can Support Growth Without Pressure&rdquo;. Mr. Saurabh Banwar encouraged students to stay focused and confident in their careers. The ceremony concluded with smiles, proud moments, and heartfelt memories.</p>`,
    extraImages: images("toppers-felicitation-ceremony", 4, "Topper's Felicitation Ceremony 5.0").map((img) => ({
      ...img,
      is_featured: false,
    })),
  },
};

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

/** Parses the CMS "23 May, 2026" date format; returns NaN for anything else. */
function eventTime(item) {
  const m = /^(\d{1,2}) ([A-Z][a-z]{2})[a-z]*,? (\d{4})$/.exec((item?.date || "").trim());
  if (!m || MONTHS[m[2]] === undefined) return NaN;
  return Date.UTC(+m[3], MONTHS[m[2]], +m[1]);
}

function applyPatch(item) {
  const patch = item && CMS_EVENT_PATCHES[item.slug];
  if (!patch) return item;
  const { extraImages = [], ...fields } = patch;
  return { ...item, ...fields, images: [...(item.images || []), ...extraImages] };
}

function matchesParams(item, params = {}) {
  if (params.department && String(item.department) !== String(params.department)) return false;
  if (params.category && String(item.category) !== String(params.category)) return false;
  if (params.slug && item.slug !== params.slug) return false;
  return true;
}

/**
 * Merges local events into a `/news-events/` list response, applies CMS
 * patches, and keeps the list newest-first (undated CMS items stay last, in
 * their API order).
 */
export function mergeLocalNewsEvents(data, params = {}) {
  const apiResults = (data?.results || []).map(applyPatch);
  const apiSlugs = new Set(apiResults.map((item) => item.slug));
  const local = LOCAL_NEWS_EVENTS.filter((item) => !apiSlugs.has(item.slug) && matchesParams(item, params));
  if (local.length === 0 && apiResults.every((item, i) => item === data?.results?.[i])) return data;

  const merged = [...apiResults, ...local]
    .map((item, index) => ({ item, index, t: eventTime(item) }))
    .sort((a, b) => {
      const aDated = !Number.isNaN(a.t);
      const bDated = !Number.isNaN(b.t);
      if (aDated && bDated) return b.t - a.t || a.index - b.index;
      if (aDated !== bDated) return aDated ? -1 : 1;
      return a.index - b.index;
    })
    .map(({ item }) => item);

  return { ...(data || {}), count: (data?.count || apiResults.length) + local.length, results: merged };
}

const stripTags = (html = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&ndash;/g, "–")
    .trim();

/**
 * StudentActivities-ready cards for the given local event slugs, for pages
 * that show a hand-picked set of events rather than a CMS department feed.
 */
export function getLocalEventActivities(slugs) {
  return slugs
    .map(getLocalNewsEvent)
    .filter(Boolean)
    .map((item) => ({
      id: item.id,
      title: stripTags(item.heading),
      description: stripTags(item.short_para),
      imageSrc: item.primary_image.image,
      imageAlt: stripTags(item.heading),
      date: item.date,
      buttonText: "Read More",
      slug: item.slug,
    }));
}

/** Local record for a slug, if any. */
export function getLocalNewsEvent(slug) {
  return LOCAL_NEWS_EVENTS.find((item) => item.slug === slug) || null;
}

/** Applies a CMS patch (if any) to a single detail response. */
export function patchNewsEventDetail(item) {
  return applyPatch(item);
}
