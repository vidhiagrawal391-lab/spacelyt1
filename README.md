# Spacelyt

Spacelyt is a Next.js marketing website for a turnkey space transformation studio. The site presents planning, architecture, construction, interior design, exterior design, and complete building solutions as one connected project experience.

## Features

- Premium responsive homepage for Spacelyt's turnkey design-and-build offering
- Services listing page with six core service categories
- Dynamic service detail pages with SEO metadata, FAQs, related services, and structured FAQ schema
- Interior and project estimate calculators for full homes, kitchens, and wardrobes
- Lead capture system with consultation, estimate, service-specific, floating, and exit-intent popups
- Animated UI using Framer Motion and Lucide icons
- Remote Unsplash imagery configured through Next Image
- Optional Google Analytics support through `NEXT_PUBLIC_GA_ID`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Vercel CLI

## Project Structure

```text
app/
  page.tsx                  Homepage route
  layout.tsx                Root layout, metadata, fonts, analytics
  calculators/page.tsx      Calculator route
  services/page.tsx         Services listing route
  services/[slug]/page.tsx  Dynamic service detail route

components/
  HomePage.tsx              Main homepage sections
  ServicesListingPage.tsx   Services index UI
  ServicePageTemplate.tsx   Reusable service detail page
  CalculatorsPage.tsx       Estimate calculator UI and logic
  lead/                     Lead popup components and triggers

lib/
  content.ts                Homepage services, process, why cards, portfolio
  servicePages.ts           Service page content, SEO data, FAQs
  leadPopupConfig.ts        Lead form fields and popup copy
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Routes

- `/` - Homepage
- `/services` - All services
- `/services/planning`
- `/services/architecture`
- `/services/construction`
- `/services/interior-design`
- `/services/exterior-design`
- `/services/building-solutions`
- `/calculators` - Budget calculators

## Environment Variables

Create a `.env.local` file if Google Analytics is needed:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The site works without this variable; analytics is only loaded when it is present.

## Content Editing

Most business content is centralized in `lib/`:

- Edit homepage services, portfolio items, process steps, and why cards in `lib/content.ts`.
- Edit service page copy, SEO metadata, FAQs, deliverables, and related services in `lib/servicePages.ts`.
- Edit popup form fields, options, and CTA copy in `lib/leadPopupConfig.ts`.

## Deployment

This project is ready for deployment on Vercel.

```bash
npm run build
```

For Vercel deployment, connect the GitHub repository and use the default Next.js build settings. The `.vercel` folder is ignored in Git.
