"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { servicePages } from "@/lib/servicePages";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/78 px-4 py-3 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-display text-lg font-bold tracking-[0.18em]" onClick={closeMobileMenu}>
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
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--ink)] shadow-soft md:hidden"
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={`fixed inset-0 z-[80] overflow-y-auto bg-[#0d0d0d] px-5 py-5 text-white transition duration-300 md:hidden ${
          mobileMenuOpen ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-7xl flex-col">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="font-display text-lg font-bold tracking-[0.18em]" onClick={closeMobileMenu}>
              SPACELYT
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex-1" aria-label="Mobile navigation">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#ff5c8a]">Menu</p>
            <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
              <MobileMenuLink href="/services" label="Services" onClick={closeMobileMenu} />
              <MobileMenuLink href="/calculators" label="Calculators" onClick={closeMobileMenu} />
              <MobileMenuLink href="/#projects" label="Projects" onClick={closeMobileMenu} />
              <MobileMenuLink href="/#process" label="Process" onClick={closeMobileMenu} />
              <MobileMenuLink href="/#contact" label="Contact" onClick={closeMobileMenu} />
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/42">Services</p>
              <div className="mt-4 grid gap-2">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-full border border-white/10 bg-[#161616] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  {service.title}
                  <ArrowRight className="h-4 w-4 text-[#ff5c8a]" />
                </Link>
              ))}
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(255,45,170,.25)]"
            >
              Start Your Project
            </Link>
          </nav>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="font-display text-4xl font-semibold leading-none tracking-[-0.05em]">
              Plan.
              <br />
              Design.
              <br />
              Build.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/52">Turnkey spaces, handled from first sketch to final handover.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenuLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex min-h-16 items-center justify-between font-display text-[2.15rem] font-semibold leading-none tracking-[-0.04em]">
      {label}
      <ArrowRight className="h-5 w-5 text-white/38" />
    </Link>
  );
}
