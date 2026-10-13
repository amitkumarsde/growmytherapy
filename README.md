# Dr. Maya Reynolds, PsyD - Therapy Website Homepage

A one-page website for **Dr. Maya Reynolds**, a (fictional) psychologist in **Santa Monica, CA**.

- **Part 1:** The page copies the **layout** of the [Conejo Valley Family Counseling homepage](https://www.conejovalleycounseling.com/home).
- **Part 2:** The colours, text and photos are all new, based on Dr. Reynolds' profile.
- **Part 3:** It adds one new section, **"Our Office"**, which the original site doesn't have.

**Built with:** Next.js and Tailwind CSS.

---

## How to run it

1. Install the packages (only needed the first time):
   ```bash
   npm install
   ```
2. Start the website:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3000** in your browser.

To make a production build, run:

```bash
npm run build
```

---

## Folder structure

```
growmytherapy/
│
├── public/
│   └── images/                    ← all 13 photos used on the page
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             ← loads the fonts, wraps every page
│   │   ├── page.tsx               ← the homepage + SEO info for Google
│   │   └── globals.css            ← colours, font sizes, spacing
│   │
│   ├── components/
│   │   ├── home-page.tsx          ← puts the header, sections and footer in order
│   │   ├── header.tsx             ← top menu + phone menu
│   │   ├── footer.tsx             ← links, address, crisis-line note
│   │   ├── ui.tsx                 ← small reusable parts (buttons, photos, logo)
│   │   └── sections/              ← one file for each section of the page
│   │       ├── hero.tsx           ← main heading and photos
│   │       ├── intro.tsx          ← About, with Dr. Reynolds' photo
│   │       ├── services.tsx       ← 3 service cards
│   │       ├── banner.tsx         ← quote over the Santa Monica Pier photo
│   │       ├── expertise.tsx      ← "What we can work through" list
│   │       ├── approach.tsx       ← My approach
│   │       ├── statement.tsx      ← big photo with a short line
│   │       ├── specialties.tsx    ← 4 methods
│   │       ├── office.tsx         ← Our Office (new section)
│   │       ├── faq.tsx            ← questions and answers
│   │       └── cta.tsx            ← "Could we be a good fit?" booking section
│   │
│   └── content/
│       ├── maya.ts                ← ALL the text and image paths for the page
│       └── types.ts               ← describes the shape of the content
│
├── next.config.ts                 ← Next.js settings
├── package.json                   ← project packages and commands
└── README.md                      ← this file
```

### The simple idea

- **Text and photos** live in one file: `src/content/maya.ts`.
- **Layout** (where things sit on the page) lives in `src/components/sections/`, one file per section.
- **Colours and fonts** live in `src/app/globals.css`.

So you can change words, photos or colours without touching the layout.

---

## Page sections (top to bottom)

1. **Header**: logo, menu and "Contact" button
2. **Hero**: main heading, *"Anxiety & trauma therapy in Santa Monica, so you can finally exhale."*
3. **About**: short bio with Dr. Reynolds' photo
4. **Services**: 3 services
   - Anxiety & Panic Therapy
   - Trauma Therapy & EMDR
   - Burnout & Perfectionism Therapy
5. **Quote banner**: a quote over a photo of Santa Monica Pier
6. **Areas of focus**: list of 11 things she helps with
7. **My approach**: how she works
8. **Statement**: a short line next to a sunset photo
9. **Methods**: CBT, Mindfulness, EMDR, Body-Oriented Techniques
10. **Our Office** *new section*: her real office photos, address and visit details
11. **FAQs**: 5 common questions, which open and close when clicked
12. **Book a session**: final call to action
13. **Footer**: links, address and a crisis-line note (988)

---

## Part 1: Layout clone

- I measured every section of the original page and rebuilt it with the same sizes and spacing.
- The section order, backgrounds, photo positions and oval buttons all match the original.
- **Works on all screens:** desktop, tablet and mobile.
- On mobile, sections stack in the **same order** as the original's mobile view.
- **Fonts:** the original uses paid fonts, so I used the closest free Google Fonts:

| Original font | Font used here |
|---|---|
| beaufort-pro (headings) | **Newsreader** |
| Muli (body text) | **Mulish** (same font, new name) |
| PrintedMoments (handwritten words) | **Ms Madi** |

---

## Part 2: New theme, text and photos

### Colours: "Santa Monica Dusk"

| Role | Colour | Hex code | Used for |
|---|---|---|---|
| Primary | Deep Pacific blue | `#22394A` | Headings, text, buttons |
| Secondary | Sunset clay | `#C0765C` | Handwritten accent words |
| Accent | Blush sand | `#EFDCCF` | "My approach" background |
| Background | Shell white | `#FAF5F0` | Light sections |
| Background | Warm white | `#FFFDFA` | White sections |

**Why these colours?**
- They come from a **Santa Monica beach at sunset**, where the practice is.
- The blue feels **calm and trustworthy**.
- The clay colour matches the **red brick walls** in her real office photos.
- All text is **easy to read** and meets accessibility contrast rules (WCAG AA).

To change a colour, edit it once in `src/app/globals.css` and it updates everywhere.

### Text

- **All text comes from Dr. Reynolds' profile.** Nothing is made up.
- It speaks to her real clients: busy, high-achieving adults, entrepreneurs, creatives and professionals.
- **SEO (to rank on Google):**
  - "Santa Monica" and her specialties appear in the main heading and the other headings.
  - The page has a proper title, a description and a share preview for social media.
  - Every photo has a clear description (alt text).
  - It includes extra details for Google: business address and FAQs.
- The profile has **no phone number, email or prices**, so none are shown.

### Photos

| Where the photo is from | Photos |
|---|---|
| Dr. Reynolds' profile | Her headshot + 2 office photos |
| Unsplash (free to use) | 10 photos: Santa Monica beach scenes and calm, natural-light moments |

- All photos are saved inside the project at `public/images/`.
- **To change a photo:** save the new photo over the old one, using the **same file name**.

---

## Part 3: New "Our Office" section

- **Where:** after "Methods" and before the FAQs.
- **Why there:** the page flows from *how I work* → *where we meet* → *questions* → *book*.
- **What it shows:**
  - Her 2 real office photos, shown overlapping like a photo collage
  - The office address with a **"Get directions"** link (opens Google Maps)
  - In-person sessions in Santa Monica, plus online sessions across California
  - A calm, private and light-filled space
- **Design:** it uses the same fonts, colours, spacing and buttons as the rest of the page, so it fits right in.

---
