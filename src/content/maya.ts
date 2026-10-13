import type { SiteContent } from "./types";

// All text and photos for the homepage, taken from Dr. Reynolds' profile

export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

export const ADDRESS = {
  street: "123th Street 45 W",
  city: "Santa Monica",
  region: "CA",
  postalCode: "90401",
};
const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

const book = { label: "Book a session", href: "#contact" };

export const mayaContent: SiteContent = {
  brand: {
    name: "Maya Reynolds",
    tagline: "PsyD · Clinical Psychologist",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  hero: {
    eyebrow: "In-person therapy in Santa Monica & online across California",
    title: "Anxiety & trauma therapy in Santa Monica, so you can finally {exhale}.",
    text: "Warm, grounded therapy for high-achieving adults navigating anxiety, panic, trauma, and burnout—with Dr. Maya Reynolds, PsyD, licensed clinical psychologist.",
    cta: book,
    image: {
      src: "/images/hero-santa-monica-ocean.jpg",
      alt: "Woman sitting quietly facing the Pacific Ocean in soft morning light",
      position: "62% center",
    },
    accentImage: {
      src: "/images/hero-lifeguard-tower.jpg",
      alt: "Santa Monica lifeguard tower on the beach at dusk",
      position: "48% center",
    },
  },

  intro: {
    id: "about",
    title: "Functional on the outside, quietly bracing for {everything} inside.",
    lead: "I'm Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, California.",
    paragraphs: [
      "Many of the adults I work with are high-achieving, thoughtful, and self-aware—yet feel exhausted, stuck in overthinking, or emotionally on edge. It might look like constant worry, tension in your body, difficulty sleeping, or earlier life experiences that still shape your relationships, confidence, and sense of safety.",
      "Therapy with me is a place to slow down and reconnect. We'll pair practical, evidence-based tools with deeper, reflective work, so the relief you feel lasts beyond our sessions. My goal isn't just symptom relief—it's helping you build insight, resilience, and a stronger relationship with yourself over time.",
    ],
    image: {
      src: "/images/dr-maya-reynolds-psyd.png",
      alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA",
      position: "center 22%",
    },
  },

  services: {
    id: "services",
    title: "How I can {help}",
    items: [
      {
        title: "Anxiety & Panic Therapy",
        text: "Constant worry, racing thoughts, a body that never quite relaxes. Using CBT and mindfulness-based tools, we'll interrupt the cycle of overthinking and panic, ease physical tension, and help you feel steady again—at work, at home, and at night when your mind won't switch off.",
        image: {
          src: "/images/service-anxiety-calm.jpg",
          alt: "Woman holding a cup of tea by a sunlit window, taking a calm pause",
          position: "center 30%",
        },
      },
      {
        title: "Trauma Therapy & EMDR",
        text: "Whether you've lived through a single difficult event or long-standing patterns rooted in childhood, relationships, or chronic stress, trauma work here is carefully paced. With EMDR and body-oriented techniques, we focus on safety and stabilization first, so you feel more regulated day to day—not just in session.",
        image: {
          src: "/images/service-trauma-grounding.jpg",
          alt: "Woman resting a hand over her heart, eyes closed, practicing a grounding breath",
          position: "center 35%",
        },
      },
      {
        title: "Burnout & Perfectionism Therapy",
        text: "For entrepreneurs, creatives, and professionals who've spent years pushing through stress. Together we'll loosen the grip of perfectionism and high internal pressure, help you reconnect with yourself, and build more sustainable ways of living and working.",
        image: {
          src: "/images/service-burnout-reset.jpg",
          alt: "Professional working on a laptop beside a bright window, late-afternoon light",
          position: "center",
        },
      },
    ],
  },

  banner: {
    text: "You deserve to feel as steady on the inside as you look on the outside. *Let's build that calm together.*",
    image: {
      src: "/images/banner-santa-monica-pier-dusk.jpg",
      alt: "",
      position: "center 60%",
    },
  },

  expertise: {
    title: "What we can work {through}",
    items: [
      "Anxiety & Constant Worry",
      "Panic Attacks",
      "Overthinking",
      "Single-Incident Trauma",
      "Complex & Childhood Trauma",
      "Chronic Stress",
      "Professional Burnout",
      "Perfectionism",
      "High Internal Pressure",
      "Difficulty Sleeping",
      "Relationships & Confidence",
      "…and more.",
    ],
  },

  approach: {
    id: "approach",
    eyebrow: "My approach",
    title: "Warm, collaborative, and grounded therapy.",
    lead: "Therapy works best when you feel respected, understood, and actively involved in the process.",
    left: [
      "Our sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods—cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques—to help you understand both the emotional and the physiological sides of what you're experiencing.",
    ],
    right: [
      "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life. And because many of my clients are entrepreneurs, creatives, and professionals, I understand the realities of living and working in a fast-paced environment. Here, you can set the armor down, slow your pace, and develop more sustainable ways of living and working.",
    ],
    cta: { label: "Meet Dr. Reynolds", href: "#about" },
    image: {
      src: "/images/approach-mindful-breath.jpg",
      alt: "Woman meditating on a mat by the ocean, practicing mindful breathing",
      position: "center",
    },
  },

  statement: {
    text: "Practical tools for today. Deeper healing that {lasts}.",
    image: {
      src: "/images/statement-shoreline-sunset.jpg",
      alt: "Woman standing on the shoreline under a soft pink sunset sky",
      position: "center 40%",
    },
  },

  specialties: {
    id: "methods",
    title: "Evidence-based {methods} I use…",
    items: [
      {
        title: "Cognitive-Behavioral Therapy (CBT)",
        text: "CBT helps you notice the thought patterns that keep anxiety and overthinking running—and gives you practical, structured tools to respond differently. It's especially helpful for worry, panic, and the high internal pressure that often comes with perfectionism.",
        cta: { label: "Learn more", href: "#approach", ariaLabel: "Learn more about CBT" },
      },
      {
        title: "Mindfulness-Based Practices",
        text: "Mindfulness helps you step out of autopilot and back into the present. Together we’ll build simple, realistic practices that quiet a busy mind and help you meet stress with more steadiness—even on the busiest days.",
        cta: { label: "Learn more", href: "#approach", ariaLabel: "Learn more about mindfulness" },
      },
      {
        title: "EMDR Therapy",
        text: "Eye Movement Desensitization and Reprocessing (EMDR) helps your brain reprocess painful memories so they feel less charged in the present. I pace EMDR carefully, with safety and stabilization first, for both single-incident and complex trauma.",
        cta: { label: "Learn more", href: "#faqs", ariaLabel: "Learn more about EMDR therapy" },
      },
      {
        title: "Body-Oriented Techniques",
        text: "Anxiety and trauma live in the body, too—in tension, a racing heart, or restless sleep. Body-oriented techniques help you understand those physical signals and regulate your nervous system, so calm becomes something you can return to in daily life.",
        cta: { label: "Learn more", href: "#approach", ariaLabel: "Learn more about body-oriented therapy" },
      },
    ],
  },

  office: {
    id: "office",
    eyebrow: "Our office · Santa Monica",
    title: "A calm, light-filled space to {land}.",
    paragraphs: [
      "My Santa Monica therapy office is a quiet, private space designed to feel calm and grounding—soft natural light, comfortable seating, and an uncluttered room where nothing competes for your attention.",
      "Clients often share that the space itself helps them feel more at ease the moment they arrive. If coming in isn't right for you, secure telehealth sessions are available anywhere in California.",
    ],
    details: [
      { label: "Location", value: ADDRESS_LINE },
      { label: "Sessions", value: "In person in Santa Monica · Secure telehealth across California" },
      { label: "The space", value: "Private, quiet, and calm—with natural light and room to breathe" },
    ],
    primaryCta: book,
    secondaryCta: { label: "Get directions", href: MAPS_URL },
    images: [
      {
        src: "/images/santa-monica-therapy-office-windows.jpg",
        alt: "Dr. Maya Reynolds’ Santa Monica therapy office with tall windows, exposed brick, and a soft armchair",
        position: "center",
      },
      {
        src: "/images/santa-monica-therapy-office-lounge.jpg",
        alt: "Comfortable sofa, olive tree, and bookshelves inside the Santa Monica counseling room",
        position: "38% center",
      },
    ],
  },

  faq: {
    id: "faqs",
    title: "Questions, {answered}",
    items: [
      {
        q: "Do you offer in-person therapy in Santa Monica or online sessions?",
        a: "Both. I see clients in person at my Santa Monica office, and I offer secure telehealth sessions for clients located anywhere in California. Many people choose whichever format fits their week best.",
      },
      {
        q: "Who do you typically work with?",
        a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware—often entrepreneurs, creatives, or professionals—who look “functional” on the outside but feel exhausted or on edge inside.",
      },
      {
        q: "What is EMDR, and how does it help with trauma?",
        a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain reprocess painful memories so they feel less overwhelming. I use it for both single-incident and complex trauma, always paced carefully with safety and stabilization first.",
      },
      {
        q: "What does a session with you feel like?",
        a: "Warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving space for reflection and depth, and you're an active partner in deciding what we focus on. We'll blend CBT, mindfulness, and body-oriented tools based on what you need.",
      },
      {
        q: "Is therapy just about reducing symptoms?",
        a: "Relief matters, but it's not the only goal. I want to help you develop insight, resilience, and a stronger relationship with yourself—so you feel more regulated in daily life, not just during sessions.",
      },
    ],
  },

  cta: {
    id: "contact",
    eyebrow: "Schedule a session",
    title: "Could we be a good {fit}?",
    paragraphs: [
      "If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit. Reaching out is a meaningful first step, and you don't need to have everything figured out before we talk.",
      "Sessions are available in person at my Santa Monica office or online via secure telehealth anywhere in California.",
    ],
    button: { label: "Request an appointment", href: "#contact" },
    accentImage: {
      src: "/images/cta-pacific-texture.jpg",
      alt: "",
      position: "center",
    },
    image: {
      src: "/images/cta-quiet-moment.jpg",
      alt: "Woman sipping coffee by a window, taking a quiet moment for herself",
      position: "68% 82%",
    },
  },

  footer: {
    blurb:
      "Getting started should feel simple. Meet in person at my Santa Monica office, or schedule secure telehealth sessions from anywhere in California—whatever feels best for you.",
    columns: [
      {
        heading: "Navigate",
        lines: [
          { label: "Home", href: "/" },
          { label: "About", href: "#about" },
          { label: "Approach", href: "#approach" },
          { label: "Office", href: "#office" },
          { label: "FAQs", href: "#faqs" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Therapy services",
        lines: [
          { label: "Anxiety & Panic Therapy", href: "#services" },
          { label: "Trauma Therapy & EMDR", href: "#services" },
          { label: "Burnout & Perfectionism", href: "#services" },
          { label: "CBT & Mindfulness", href: "#methods" },
          { label: "Telehealth across California", href: "#faqs" },
        ],
      },
      {
        heading: "Visit",
        lines: [
          "Dr. Maya Reynolds, PsyD",
          ADDRESS.street,
          `${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`,
          { label: "Get directions", href: MAPS_URL },
          "In-person therapy in Santa Monica & secure telehealth for clients across California",
        ],
      },
    ],
    note: "If you are in crisis or thinking about harming yourself, call or text 988 (Suicide & Crisis Lifeline) or call 911.",
    copyright: "© 2026 Maya Reynolds, PsyD · Licensed Clinical Psychologist · Santa Monica, CA",
  },
};
