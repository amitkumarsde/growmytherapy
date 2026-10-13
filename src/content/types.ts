// Shape of the homepage content (text, links and photos)

export type Img = {
  src: string;
  alt: string;
  position?: string;
};

export type LinkItem = { label: string; href: string; ariaLabel?: string };

type FooterColumn = {
  heading: string;
  lines: (string | LinkItem)[];
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
  };
  nav: LinkItem[];
  navCta: LinkItem;

  hero: {
    eyebrow: string;
    title: string;
    text: string;
    cta: LinkItem;
    image: Img;
    accentImage: Img;
  };

  intro: {
    id?: string;
    title: string;
    lead: string;
    paragraphs: [string, string];
    image: Img;
  };

  services: {
    id?: string;
    title: string;
    items: { title: string; text: string; image: Img }[];
  };

  banner: { text: string; image: Img };

  expertise: {
    title: string;
    items: string[];
  };

  approach: {
    id?: string;
    eyebrow: string;
    title: string;
    lead: string;
    left: string[];
    right: string[];
    cta: LinkItem;
    image: Img;
  };

  statement: { text: string; image: Img };

  specialties: {
    id?: string;
    title: string;
    items: { title: string; text: string; cta: LinkItem }[];
  };

  // New section
  office: {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    details: { label: string; value: string }[];
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    images: [Img, Img];
  };

  // FAQ section
  faq: {
    id: string;
    title: string;
    items: { q: string; a: string }[];
  };

  cta: {
    id?: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    button: LinkItem;
    accentImage: Img;
    image: Img;
  };

  footer: {
    blurb: string;
    columns: FooterColumn[];
    copyright: string;
    note?: string;
  };
};
