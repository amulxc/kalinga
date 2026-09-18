import React from 'react';
import { notFound } from 'next/navigation';
import EventDetailContent from '@/app/components/news_and_events/event_detail_content';
import CareerApplicationForm from '@/app/components/careers/CareerApplicationForm';
import AdmissionCareer from '@/app/components/general/admission_cta';
import UpcomingEvents from '@/app/components/admissions/upcoming_events';
import { fetchNewsEvents, fetchNewsEventDetails, fetchNewsEventSEO, parseHtmlToParagraphs, parseHtmlListItems, parseHtmlToText } from '@/app/lib/api';
import { getEventDisplayDate } from './eventDateOverrides';
import { getEventContent } from './eventContentOverrides';
import { getEventGlimpses } from './eventGlimpses';
import { getEventImage } from './eventImageOverrides';
import Gallery from '@/app/components/general/gallery';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const seoData = await fetchNewsEventSEO(slug);

    if (seoData) {
        return {
            title: seoData.meta_title || seoData.title,
            description: seoData.meta_description,
            keywords: seoData.meta_keywords,
            openGraph: {
                title: seoData.og_title || seoData.meta_title,
                description: seoData.og_description || seoData.meta_description,
                images: seoData.og_image ? [seoData.og_image] : [],
            },
            twitter: {
                card: "summary_large_image",
                title: seoData.twitter_title || seoData.meta_title,
                description: seoData.twitter_description || seoData.meta_description,
                images: seoData.twitter_image ? [seoData.twitter_image] : [],
            },
            alternates: {
                canonical: seoData.canonical_url,
            },
        };
    }

    // Fallback metadata if SEO endpoint doesn't return data (or returns 404 but item exists)
    // We'll try to fetch the item details to get basic info
    try {
        const item = await fetchNewsEventDetails(slug);
        if (item) {
            return {
                title: item.heading,
                description: item.heading, // We could parse content if needed
            }
        }
    } catch (e) {
        console.error("Error fetching fallback metadata", e);
    }

    return {
        title: 'News & Events | Kalinga University',
    };
}

export default async function NewsEventDetailsPage({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    let newsEvent = null;

    try {
        const data = await fetchNewsEventDetails(decodedSlug);
        // Detail endpoint returns the object directly, not in results array
        if (data) {
            newsEvent = data;
        }
    } catch (error) {
        console.error("Error fetching news event details:", error);
    }

    if (!newsEvent) {
        notFound();
    }

    // Transform API data for the UI component
    const tags = [];
    // Multi-day events carry their range in eventDateOverrides, since the CMS
    // date field only holds the opening day.
    const displayDate = getEventDisplayDate(decodedSlug, newsEvent.date);
    if (displayDate) tags.push({ label: displayDate, color: 'orange' });
    if (newsEvent.category_name) tags.push({ label: newsEvent.category_name, color: 'blue' });
    if (newsEvent.department_name) tags.push({ label: newsEvent.department_name, color: 'red' });

    // Events whose CMS copy is still just the launch teaser carry their full
    // write-up in eventContentOverrides.
    const content = getEventContent(decodedSlug, newsEvent.content);

    // Photos of the previous edition, where the CMS gallery holds only the poster.
    const glimpses = getEventGlimpses(decodedSlug);

    // Parse description/content
    const description = parseHtmlToParagraphs(content);

    // Images
    // A repo photo stands in where the CMS entry still carries the generic
    // "upcoming events" placeholder.
    const imageOverride = getEventImage(decodedSlug);
    const cmsImages = newsEvent.images || [];
    const cmsBanner = cmsImages.find(img => img.is_featured) || cmsImages[0];

    const mainImage = imageOverride
        ? { src: imageOverride.image, alt: imageOverride.alt }
        : {
            src: cmsBanner?.image || 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
            alt: newsEvent.heading
        };

    // The thumbnail strip sets the large image on click, so the banner an
    // override replaces must not stay in it.
    const galleryImages = cmsImages
        .filter(img => !(imageOverride && img === cmsBanner))
        .map(img => ({
            id: img.id,
            src: img.image,
            alt: img.alt || newsEvent.heading
        }));


    return (
        <>
            <EventDetailContent
                tags={tags}
                title={parseHtmlToText(newsEvent.heading)}
                description={description}
                htmlContent={content}
                mainImage={mainImage}
                galleryImages={galleryImages}
                link={newsEvent.link}
            />
            {glimpses && (
                <Gallery
                    title={glimpses.title}
                    images={glimpses.images}
                    enableLightbox={true}
                />
            )}
            <UpcomingEvents />
            <AdmissionCareer />
        </>
    );
}
