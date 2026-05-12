"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { servicePages } from "@/lib/servicePages";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/78 px-4 py-3 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-display text-lg font-bold tracking-[0.18em]">
          SPACELYT
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex" aria-label="Main navigation">
          <div className="group relative">
            <Link href="/services" className="inline-flex items-center gap-1.5 py-3 transition hover:text-[var(--ink)]">
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[22rem] -translate-x-1/2 translate-y-2 rounded-[1.4rem] border border-white/75 bg-white/92 p-2 opacity-0 shadow-soft backdrop-blur-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-[var(--ink)] transition hover:bg-[#fff5fb]"
                >
                  <span>
                    <span className="block text-sm font-semibold">{service.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{service.shortDescription}</span>
                  </span>
                  <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-[#ff2daa]" />
                </Link>
              ))}
            </div>
          </div>
          <Link href="/calculators" className="transition hover:text-[var(--ink)]">Calculators</Link>
          <Link href="/#projects" className="transition hover:text-[var(--ink)]">Projects</Link>
          <Link href="/#process" className="transition hover:text-[var(--ink)]">Process</Link>
          <Link href="/#contact" className="transition hover:text-[var(--ink)]">Contact</Link>
        </nav>
        <Link href="/#contact" className="hidden rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow md:inline-flex">
          Start Your Project
        </Link>
      </div>
      <nav className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto pb-1 text-xs font-semibold text-[var(--muted)] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden" aria-label="Mobile navigation">
        <Link href="/services" className="shrink-0 rounded-full bg-white px-4 py-2 shadow-soft">Services</Link>
        <Link href="/calculators" className="shrink-0 rounded-full bg-white/78 px-4 py-2 shadow-soft">Calculators</Link>
        {servicePages.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="shrink-0 rounded-full bg-white/78 px-4 py-2 shadow-soft">
            {service.title}
          </Link>
        ))}
        <Link href="/#contact" className="shrink-0 rounded-full bg-[#111] px-4 py-2 text-white shadow-soft">Start Project</Link>
      </nav>
    </header>
  );
}
