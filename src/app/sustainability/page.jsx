import SustainabilityClient from "./SustainabilityClient";

export const metadata = {
  title: "Sustainability & SGD Cell | Green Campus | Kalinga University",
  description: "Kalinga University is committed to the UN Sustainable Development Goals (SDGs). Explore our green initiatives, waste management, and solar energy projects for a better future.",
  keywords: "Sustainability university Raipur, Sustainable Development Goals Chhattisgarh, Green campus Kalinga, SDG implementation India higher education",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/sustainability",
  },
};

export default function SustainabilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sustainability & SDG Cell - Kalinga University",
    "description": "Details about the university's commitment to SDGs and various environmental and social sustainability initiatives.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Sustainability", "item": "https://kalingauniversity.ac.in/sustainability" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SustainabilityClient />
    </>
  );
}
