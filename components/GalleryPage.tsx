"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Images, Maximize2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type GalleryCategory = "View All" | "Architecture" | "Construction" | "Interior" | "Exterior" | "Full Turnkey";

type GalleryItem = {
  title: string;
  category: Exclude<GalleryCategory, "View All">;
  location: string;
  image: string;
  size: "tall" | "wide" | "standard";
};

const ease = [0.22, 1, 0.36, 1] as const;
const categories: GalleryCategory[] = ["View All", "Architecture", "Construction", "Interior", "Exterior", "Full Turnkey"];

const galleryItems: GalleryItem[] = [
  {
    title: "Modern Residence Elevation",
    category: "Architecture",
    location: "Concept facade direction",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82",
    size: "tall"
  },
  {
    title: "Turnkey Living Suite",
    category: "Full Turnkey",
    location: "Planning to handover",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82",
    size: "wide"
  },
  {
    title: "Premium Lounge Interior",
    category: "Interior",
    location: "Material-led design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=82",
    size: "standard"
  },
  {
    title: "Structured Site Progress",
    category: "Construction",
    location: "Execution phase",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82",
    size: "standard"
  },
  {
    title: "Courtyard Exterior Story",
    category: "Exterior",
    location: "Outdoor living",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=82",
    size: "tall"
  },
  {
    title: "Architectural Stair Volume",
    category: "Architecture",
    location: "Spatial planning",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82",
    size: "standard"
  },
  {
    title: "Kitchen and Dining Finish",
    category: "Interior",
    location: "Functional interior detailing",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=82",
    size: "wide"
  },
  {
    title: "Facade Light and Texture",
    category: "Exterior",
    location: "Evening exterior mood",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=82",
    size: "standard"
  },
  {
    title: "Complete Home Transformation",
    category: "Full Turnkey",
    location: "Design, build, deliver",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=82",
    size: "tall"
  },
  {
    title: "Construction Coordination",
    category: "Construction",
    location: "Quality and site control",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=82",
    size: "standard"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("View All");
  const filteredItems = useMemo(
    () => activeCategory === "View All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <GalleryHero />
      <section className="px-4 pb-14 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
          <motion.div layout className="mt-8 grid auto-rows-[16rem] gap-4 sm:auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <GalleryCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
      <SiteFooter />
      <PopupManager />
    </main>
  );
}

function GalleryHero() {
  return (
    <section className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(255,138,61,.13),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <Reveal>
          <p className="technical-label text-[#ff2daa]">Spacelyt Gallery</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3.4rem,10vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            Project Frames,
            <br />
            <span className="gradient-text">Built for Better Spaces</span>
          </h1>
        </Reveal>
        <Reveal className="rounded-[2rem] border border-white/72 bg-white/76 p-5 shadow-soft backdrop-blur-2xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111] text-white">
            <Images className="h-5 w-5" />
          </div>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            Explore Spacelyt directions across architecture, construction, interiors, exteriors, and complete full turnkey project delivery.
          </p>
          <Link href="/services" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-soft">
            Explore Services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function CategoryFilter({
  activeCategory,
  onChange
}: {
  activeCategory: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 rounded-[1.6rem] border border-white/72 bg-white/72 p-2 shadow-soft backdrop-blur-2xl md:justify-start">
      {categories.map((category) => {
        const active = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold transition ${
              active
                ? "bg-[#111] text-white shadow-soft"
                : "bg-white/70 text-[var(--muted)] hover:bg-white hover:text-[var(--ink)]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const spanClass =
    item.size === "tall"
      ? "md:row-span-2"
      : item.size === "wide"
        ? "md:col-span-2"
        : "";

  return (
    <motion.article
      layout
      className={`group relative overflow-hidden rounded-[1.85rem] border border-white/70 bg-white/70 shadow-soft ${spanClass}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease, delay: index * 0.03 }}
    >
      <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 32vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.68))]" />
      <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/82 px-3 py-1.5 text-xs font-semibold text-[#111] shadow-soft backdrop-blur-xl">
        {item.category}
      </div>
      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/82 text-[#111] opacity-0 shadow-soft backdrop-blur-xl transition group-hover:opacity-100">
        <Maximize2 className="h-4 w-4" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/62">{item.location}</p>
        <h2 className="mt-2 max-w-md font-display text-3xl font-semibold leading-none tracking-[-0.04em]">{item.title}</h2>
      </div>
    </motion.article>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease }}
    >
      {children}
    </motion.div>
  );
}
