"use client"
import { useEffect, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import UpcomingConference from "../components/research/upcoming_conference";
import Gallery from "../components/general/gallery";
import AdmissionCareer from "../components/general/admission_cta";
import { fetchNewsEvents, fetchAllDepartments, parseHtmlToText } from '../lib/api';
import MediaCardSlider from "../components/general/media-card-slider";
import StudentActivities from "../components/department/student_activities";
import MomentsGallery from "../components/news_and_events/moments_gallery";
import { getEventImage } from './[slug]/eventImageOverrides';

const placementGalleryImages = [
  // // Training and Placement Cell
  // { id: 1, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-1.webp", title: "Training and Placement Gallery" },
  // { id: 2, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-2.webp", title: "Training and Placement Gallery" },
  // { id: 3, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-3.webp", title: "Training and Placement Gallery" },

  // // Aditya Biotech Lab
  // { id: 4, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-4.webp", title: "Aditya Biotech Lab" },
  // { id: 5, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-5.webp", title: "Aditya Biotech Lab" },

  // International Students / Campus (IDs 6-9)
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/placement/ind-1.jpeg", title: "Aditya Biotech Lab" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/placement/ind-2.jpeg", title: "Aditya Biotech Lab" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/placement/ind-3.jpeg", title: "Aditya Biotech Lab" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/placement/ind-4.jpg", title: "Automobile Expo Visit" },

  // Automobile Expo Visit
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/placement/ind-5.jpg", title: "Automobile Expo Visit" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/placement/ind-6.jpg", title: "Automobile Expo Visit" },
  { id: 12, image: "https://cdn.kalingauniversity.ac.in/placement/ind-7.jpg", title: "Automobile Expo Visit" },
  { id: 13, image: "https://cdn.kalingauniversity.ac.in/placement/ind-8.jpg", title: "Automobile Expo Visit" },
  { id: 14, image: "https://cdn.kalingauniversity.ac.in/placement/ind-9.jpg", title: "Automobile Expo Visit" },
  { id: 15, image: "https://cdn.kalingauniversity.ac.in/placement/ind-10.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 16, image: "https://cdn.kalingauniversity.ac.in/placement/ind-11.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 17, image: "https://cdn.kalingauniversity.ac.in/placement/ind-12.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 18, image: "https://cdn.kalingauniversity.ac.in/placement/ind-13.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 19, image: "https://cdn.kalingauniversity.ac.in/placement/ind-14.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 20, image: "https://cdn.kalingauniversity.ac.in/placement/ind-15.jpg", title: "Bhilai Steel Plant Industrial Visit" },

  // Bhilai Steel Plant Industrial Visit
  { id: 21, image: "https://cdn.kalingauniversity.ac.in/placement/ind-16.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 22, image: "https://cdn.kalingauniversity.ac.in/placement/ind-17.jpg", title: "Bhilai Steel Plant Industrial Visit" },

  // CIPET Visit
  { id: 23, image: "https://cdn.kalingauniversity.ac.in/placement/ind-18.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 24, image: "https://cdn.kalingauniversity.ac.in/placement/ind-19.jpg", title: "Bhilai Steel Plant Industrial Visit" },
];

const customImages = [
  { id: 4, image: "https://cdn.kalingauniversity.ac.in/news-and-events/new-year.png", alt: "New Year Celebration" },
  { id: 5, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-1.webp", alt: "gallery-1" },
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-2.webp", alt: "gallery-2" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-3.webp", alt: "gallery-3" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-4.webp", alt: "gallery-4" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-5.webp", alt: "gallery-5" },
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-6.webp", alt: "gallery-6" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-7.webp", alt: "gallery-7" },
  { id: 12, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-8.webp", alt: "gallery-8" },
  { id: 13, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-9.webp", alt: "gallery-9" }
];



// Events surfaced in the "Upcoming Events" section instead of the Event Calendar list.
const eventsHiddenFromCalendar = ["ideathon-6-0"];

// Upcoming events that are not managed in the CMS.
const staticUpcomingEvents = [
  {
    id: 'ku-hackathon-2027',
    title: 'KU Hackathon 2027',
    description: 'The Department of Computer Science and the Faculty of Information Technology are organizing Hackathon-2027, a 24-hour non-stop innovation challenge at Kalinga University. Students from schools across India work individually or in teams to solve real-world problems using technology and build software prototypes.',
    date: '18th-19th February, 2027',
    organisedBy: 'Department of Computer Science & Faculty of Information Technology',
    imageSrc: '/news-and-events/ku-hackathon-2027.jpg',
    imageAlt: 'KU Hackathon 2027',
    buttonText: 'Read More',
    link: '/ku-hackathon-2027',
  }
];

function NewsAndEvents() {
  const [newsItems, setNewsItems] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);





  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch all items to handle distinct sections client-side for smoother transition
      const params = {};
      const data = await fetchNewsEvents(params);

      if (data && data.results) {
        setNewsItems(data.results);

        // Extract unique categories from the data
        const categoryMap = new Map();
        data.results.forEach(item => {
          if (item.category && item.category_name) {
            categoryMap.set(String(item.category), {
              id: String(item.category),
              name: item.category_name
            });
          }
        });
        const uniqueCategories = Array.from(categoryMap.values());
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle hash-based scrolling
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    if (!loading && mounted) {
      handleHashScroll();
      window.addEventListener("hashchange", handleHashScroll);
      return () => window.removeEventListener("hashchange", handleHashScroll);
    }
  }, [loading, mounted]);

  // --- Derived Data Processing ---
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Helper to ensure stable rendering for SSR
  const isFutureEvent = (dateStr) => {
    if (!mounted) return false;
    return new Date(dateStr) > today;
  };

  // Truncation helper for fallback content
  const getTruncatedContent = (content) => {
    if (!content) return "";
    const text = parseHtmlToText(content);
    const words = text.split(/\s+/);
    if (words.length <= 18) return text;
    return words.slice(0, 18).join(" ") + " ....";
  };

  // 1. Upcoming Events (Date > Today) - rendered below Upcoming Conferences
  const upcomingEventItems = useMemo(() => {
    const fromCms = newsItems.filter(item => {
      if (!item.date) return false;
      return isFutureEvent(item.date);
    }).map(item => ({
      id: item.id,
      title: parseHtmlToText(item.heading),
      description: item.short_para ? parseHtmlToText(item.short_para) : getTruncatedContent(item.content),
      fullDescription: parseHtmlToText(item.content),
      imageSrc: getEventImage(item.slug)?.image || item.primary_image?.image || item.images?.[0]?.image || 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
      imageAlt: getEventImage(item.slug)?.alt || item.primary_image?.alt || parseHtmlToText(item.heading),
      date: item.date,
      organisedBy: item.department_name || undefined,
      buttonText: 'Read More',
      slug: item.slug
    }));

    return [...fromCms, ...staticUpcomingEvents];
  }, [newsItems]);

  // Event Calendar list, minus the events promoted to the Upcoming Events section
  const calendarItems = useMemo(
    () => newsItems.filter(item => !eventsHiddenFromCalendar.includes(item.slug)),
    [newsItems]
  );

  // 2. Newly Adds (This Week) - For Bottom Section
  const newlyAdds = useMemo(() => {
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneWeekFuture = new Date(today);
    oneWeekFuture.setDate(today.getDate() + 7);

    return newsItems.filter(item => {
      if (!item.date) return false;
      const d = new Date(item.date);
      return d >= oneWeekAgo && d <= oneWeekFuture;
    }).slice(0, 3).map(item => {
      return {
        id: item.id,
        title: parseHtmlToText(item.heading),
        date: item.date,
        category: item.category_name,
        description: item.short_para ? parseHtmlToText(item.short_para) : getTruncatedContent(item.content),
        image: item.images?.[0]?.image || 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
        href: `/news-and-events/${item.slug}`,
        registerButtonText: "Read More"
      };
    });
  }, [newsItems]);

  const eventActivities = [
    {
      id: 'educational-picnic-kanker',
      title: "One-Day Educational Picnic to Kanker",
      description: "A one-day educational picnic for the B.Ed Semester 3 students, organised to provide historical exposure and opportunities for team bonding. The trip began with a historic visit to the Kanker Palace, where students interacted with the official guide and learnt about the significance of the architecture and its royal linkage. After this, students visited Sarvodaya Vidyalaya, an educational institution run under the guidance of the daughter of Raja Saheb, where they learnt community-based educational practices. Following this, the students visited Malajkundum Dam and Dudh Nadi Dam, where they understood the importance of dams in water conservation. The picnic provided valuable exposure to students beyond classroom-based learning.",
      date: "19.11.2025",
      time: "06:00 A.M. to 10:00 P.M.",
      venue: "From Raipur to Kanker (C.G)",
      organisedBy: "Faculty of Education",
      eventType: "Offline",
      attendedBy: "B.Ed Students and Faculty Members",
      buttonText: "Read More"
    },
    {
      id: 'international-trip-dubai',
      title: "An International Trip to Dubai",
      description: "To take learning beyond textbooks, we organised an international educational trip to Dubai. It was a 5-night and 6-day trip in which a team of students and faculty members explored one of the world’s most advanced cities. The trip included a stay at a luxury 4-star hotel, Indian meals, and private transportation. They explored Burj Khalifa, Miracle Garden, Dubai Mall, Dubai Frame, Knowledge Village, Marina Dhow Cruise, and Desert Safari. The trip generated curiosity among students and unforgettable memories as we prepared students for a global future.",
      date: "15.04.2025",
      venue: "Dubai, UAE",
      buttonText: "Read More"
    },
    {
      id: 'excursion-manali',
      title: "An Excursion to Manali, Himachal Pradesh",
      description: "After the insightful industrial visit to Sorbax Pharmaceutical, Badii, faculty members and students went on a trip to Manali, where students enjoyed paragliding and other activities. The trip ended with a fun learning experience and enriched the bond between students.",
      date: "24.02.2025 - 02.03.2025",
      venue: "Manali, Himachal Pradesh",
      buttonText: "Read More"
    },
    {
      id: 'jagran-film-festival',
      title: "Collaboration with Jagran Film Festival (Raipur)",
      description: "It aimed to provide students with exposure to the world of cinema and media through special screenings, panel discussions, and interactive sessions with filmmakers and industry experts.",
      date: "17.01.2025 - 18.01.2025",
      time: "09:30 A.M. to 06:30 P.M.",
      venue: "City Centre Mall, Pandri (Raipur)",
      organisedBy: "Department of Journalism and Mass Communication, Faculty of Arts & Humanities",
      eventType: "Offline",
      attendedBy: "Students and faculty members from the Arts & Humanities Department",
      buttonText: "Read More",
      learningOutcomes: [
        "An understanding of the key stages of cinema and film production.",
        "Networking opportunities with filmmakers, critics, and industry professionals.",
        "A broader perspective on storytelling techniques, cinematic forms, and global cinematic trends.",
        "Creative and technical elements behind filmmaking.",
        "Ethical, social, and cultural influence on the industry.",
        "Career pathways and opportunities in the cinema and media industries."
      ]
    }
  ];

  const mappedEventActivities = eventActivities.map(activity => ({
    ...activity,
    description: getTruncatedContent(activity.description),
    fullDescription: activity.description
  }));



  const upcomingevents = [
    {
      id: 'icdiacs-26',
      title: 'ICDIACS 2026',
      description: 'The conference provides a platform for researchers, academicians, industry experts, and innovators to discuss advancements in AI, Cybersecurity, Digital Intelligence, IoT, Data Science, and Sustainable Digital Technologies.',
      date: '27th-28th October, 2026',
      organisedBy: 'Department of Computer Science & Faculty of Information Technology',
      imageSrc: '/news-and-events/conferences/icdiacs-2026.webp',
      imageAlt: '3rd International Conference on Digital Intelligence: AI, Cybersecurity and Computing for a Sustainable Future (ICDIACS 2026)',
      buttonText: 'Read More',
      link: "/icdiacs-26",
    },
    {
      id: 'global-conference-law',
      title: 'Two-Day Global Conference on Emerging Trends in Artificial Intelligence',
      description: 'The conference provides a global platform for legal professionals, academicians, researchers, policymakers, and industry experts to discuss comparative legal and regulatory approaches to AI governance.',
      date: '20th-21st November, 2026',
      organisedBy: 'Faculty of Law',
      imageSrc: '/news-and-events/conferences/legal-governance.webp',
      imageAlt: 'Global Conference on Emerging Trends in Artificial Intelligence: Comparative Approaches of Legal Governance',
      buttonText: 'Read More',
      link: "https://kalingauniversity.ac.in/law-organize-two-days-conference",
    },
    {
      id: 'ai-for-humanity-27',
      title: '3rd International Conference on AI For Humanity',
      description: 'The conference aims to explore the role of Artificial Intelligence and Indian Knowledge Systems in addressing global sustainability challenges.',
      date: '22nd-23rd January, 2027',
      organisedBy: 'Faculty of Education',
      imageSrc: '/news-and-events/conferences/ai-for-humanity-2027.webp',
      imageAlt: '3rd International Conference on AI for Humanity: Leveraging Indian Knowledge Systems to Accelerate Sustainable Development Goals',
      buttonText: 'Read More',
      link: "/ai-for-humanity-27",
    },
    {
      id: 'scisustain-27',
      title: 'SciSustain 2027',
      description: 'The conference promotes interdisciplinary collaboration by integrating Artificial Intelligence with Materials Science, Mathematical Sciences, Life Sciences, Forensic Science, Environmental Sciences, and more.',
      date: '19th-20th January, 2027',
      organisedBy: 'Faculty of Science',
      imageSrc: '/news-and-events/conferences/scisustain-2027.webp',
      imageAlt: 'SciSustain 2027 - International Conference on AI-Driven Scientific Innovations for Sustainable Development Goals',
      buttonText: 'Read More',
      link: "/scisustain-2027",
    },
    {
      id: 'icbtaisg-27',
      title: 'ICBTAISG 2027',
      description: 'The conference aims to exchange ideas, present innovative research, and explore strategies to build resilient, sustainable, and inclusive businesses in an AI-driven economy.',
      date: '23rd-24th February, 2027',
      organisedBy: 'Faculty of Commerce and Management',
      imageSrc: '/news-and-events/conferences/icbtaisg-2027.webp',
      imageAlt: 'International Conference on Business Transformation in the Age of AI, Sustainability and Inclusive Growth (ICBTAISG - 2027)',
      buttonText: 'Read More',
      link: "/ICBTAISG-2027",
    },
    {
      id: 'indian-knowledge-systems',
      title: 'Indian Knowledge Systems',
      description: 'The conference aims to promote the integration of Indian Knowledge Systems (IKS) into contemporary education, research, and innovation for holistic and sustainable development.',
      date: '26th-27th February, 2027',
      organisedBy: 'Faculty of Arts and Humanities',
      imageSrc: '/news-and-events/conferences/indian-knowledge-systems.webp',
      imageAlt: 'Integration of Indian Knowledge Systems for Sustainable Development and Technological Transformation',
      buttonText: 'Read More',
      link: "/Indian-knowledge-systems",
    },
    {
      id: 'iceasre-2027',
      title: 'ICEASRE 2027',
      description: 'The conference will provide a platform to explore how advancements in engineering and Agritech can address pressing challenges in rural communities.',
      date: '12th-13th March, 2027',
      organisedBy: 'Faculty of Technology',
      imageSrc: '/news-and-events/conferences/iceasre-2027.webp',
      imageAlt: 'International Conference on Engineering, Agritech & Sustainable Rural Ecosystems (ICEASRE - 2027)',
      buttonText: 'Read More',
      link: "/iceasre-2027",
    },
    {
      id: 'viksit-bharat-2047',
      title: 'Viksit Bharat 2047',
      description: 'The conference aims to discuss the transformative role of Artificial Intelligence and translational research in advancing healthcare in India.',
      date: '30th-31st March, 2027',
      organisedBy: 'Faculty of Pharmacy',
      imageSrc: '/news-and-events/conferences/viksit-bharat-2047.webp',
      imageAlt: 'International Conference on AI and Translational Innovations in Pharmaceutical Sciences and Healthcare for Viksit Bharat @2047',
      buttonText: 'Read More',
      link: "/viksit-bharat-2047",
    }

  ];


  return (
    <div>


      {/* 1. Main Filters & List */}
      <EventCalendar items={calendarItems} departments={departments} categories={categories} />

      {/* 3. Newly Adds (This Week) */}
      {newlyAdds.length > 0 && (
        <UpcomingConference
          conferences={newlyAdds}
          title="This Week's Updates"
          backgroundColor="bg-[var(--light-gray)]"
          categoryText="New" // Override category badge if needed
        />
      )}

      {/* Static Sections */}
      <ThreeCardSider />
      <StudentActivities
        id="upcoming-conferences"
        title="Upcoming Conferences"
        subtitle=""
        activities={upcomingevents}
        useModal={true}
        autoplay={false}
        stackedLayout
        aboutLabel="About the Conference"
      />
      {upcomingEventItems.length > 0 && (
        <StudentActivities
          id="upcoming-events"
          title="Upcoming Events"
          subtitle=""
          activities={upcomingEventItems}
          autoplay={false}
          stackedLayout
          aboutLabel="About the Event"
        />
      )}
      <MediaCardSlider
        title="Industrial Visits"
        imageItems={placementGalleryImages}
        categoryTitle=""
        id="industrial-visits"
      />
      <StudentActivities
        id="excursion"
        title="Excursions"
        subtitle=""
        activities={mappedEventActivities}
        useModal={true}
      />
      
      <MomentsGallery />
      <Gallery images={customImages} />
      <AdmissionCareer />

      {/* Scrollbar Styles */}
      <style jsx global>{`
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default NewsAndEvents;