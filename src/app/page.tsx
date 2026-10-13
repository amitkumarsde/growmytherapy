import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { ADDRESS, SITE_URL, mayaContent } from "@/content/maya";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist offering anxiety, trauma, EMDR, and burnout therapy for adults in Santa Monica, CA, plus secure telehealth across California.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapist Santa Monica",
    "EMDR therapy Santa Monica",
    "burnout therapy Santa Monica",
    "psychologist Santa Monica CA",
    "online therapy California",
    "panic attack therapy",
    "perfectionism therapist",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dr. Maya Reynolds, PsyD",
    title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: "Warm, grounded therapy for high-achieving adults navigating anxiety, panic, trauma, and burnout. In person in Santa Monica and online across California.",
    images: [{ url: "/images/santa-monica-therapy-office-windows.jpg", width: 1500, height: 1125 }],
    locale: "en_US",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#practice`,
    name: "Dr. Maya Reynolds, PsyD — Anxiety & Trauma Therapy",
    description: "Licensed clinical psychologist offering anxiety, panic, trauma, EMDR, and burnout therapy for adults in Santa Monica, CA, and secure telehealth across California.",
    url: SITE_URL,
    image: `${SITE_URL}/images/santa-monica-therapy-office-windows.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Santa Monica" },
      { "@type": "State", name: "California" },
    ],
    availableService: [
      "Anxiety & Panic Therapy",
      "Trauma Therapy & EMDR",
      "Burnout & Perfectionism Therapy",
      "Cognitive-Behavioral Therapy (CBT)",
      "Mindfulness-Based Therapy",
      "Telehealth Therapy",
    ].map((name) => ({ "@type": "MedicalTherapy", name })),
    employee: {
      "@type": "Person",
      name: "Maya Reynolds",
      honorificSuffix: "PsyD",
      jobTitle: "Licensed Clinical Psychologist",
      image: `${SITE_URL}/images/dr-maya-reynolds-psyd.png`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mayaContent.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <HomePage content={mayaContent} />
    </>
  );
}
