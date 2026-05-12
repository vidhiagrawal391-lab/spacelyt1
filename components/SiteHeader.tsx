"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BriefcaseBusiness, ChevronDown, Home, Mail, Menu, MessageCircle, Phone, Ruler, X } from "lucide-react";
import { servicePages } from "@/lib/servicePages";

const mobileNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" }
];

const mobileContactLinks = [
  { href: "/#contact", label: "WhatsApp / Call", detail: "Request a quick callback", icon: Phone },
  { href: "mailto:hello@spacelyt.com", label: "Email", detail: "hello@spacelyt.com", icon: Mail }
];

const mobileDockLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: BriefcaseBusiness },
  { href: "/calculators", label: "Estimate", icon: Ruler },
  { href: "/#contact", label: "Contact", icon: Phone }
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
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
        className={`fixed inset-0 z-[90] overflow-hidden bg-[#0d0d0d] text-white transition duration-500 md:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,45,170,.24),transparent_18rem),radial-gradient(circle_at_92%_18%,rgba(255,138,61,.18),transparent_20rem),linear-gradient(145deg,#090909,#151111_48%,#080808)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(0deg,rgba(255,45,170,.14),transparent)]" />

        <div className={`relative mx-auto flex h-full max-w-7xl flex-col px-5 py-5 transition duration-500 ${mobileMenuOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.98]"}`}>
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="font-display text-lg font-bold tracking-[0.18em]" onClick={closeMobileMenu}>
              SPACELYT
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/15"
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-7 flex min-h-0 flex-1 flex-col overflow-y-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Mobile navigation">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-2xl">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[#ff5c8a]">Spacelyt Studio</p>
              <h2 className="mt-4 font-display text-[clamp(2.55rem,14vw,4.8rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
                Design.
                <br />
                Build.
                <br />
                Deliver.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/58">Premium spaces planned and executed by one accountable turnkey team.</p>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/42">Navigate</p>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/28">01 / 06</span>
              </div>
              <div className="mt-3 divide-y divide-white/10 border-y border-white/10">
                {mobileNavLinks.map((item) => (
                  <MobileMenuLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    number={String(mobileNavLinks.indexOf(item) + 1).padStart(2, "0")}
                    onClick={closeMobileMenu}
                  />
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(255,45,170,.28)]"
            >
              Book Free Consultation
              <MessageCircle className="h-4 w-4" />
            </Link>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {servicePages.slice(0, 4).map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={closeMobileMenu}
                  className="min-h-28 rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
                  >
                  <span className="font-mono text-[0.65rem] text-[#ff5c8a]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-5 block font-display text-xl font-semibold leading-none tracking-[-0.04em]">{service.title}</span>
                </Link>
              ))}
            </div>

            <div className="mt-5 grid gap-2 rounded-[1.4rem] border border-white/10 bg-black/20 p-3">
              {mobileContactLinks.map((contact) => {
                const Icon = contact.icon;
                return (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 rounded-[1rem] bg-white/[0.06] px-4 py-3 transition hover:bg-white/[0.1]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#ff5c8a]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{contact.label}</span>
                      <span className="mt-0.5 block text-xs text-white/52">{contact.detail}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="grid grid-cols-4 gap-1 rounded-[1.2rem] border border-white/10 bg-white/[0.08] p-1.5 backdrop-blur-2xl">
            {mobileDockLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-[0.95rem] text-[0.68rem] font-semibold text-white/62 transition hover:bg-white/10 hover:text-white">
                  <Icon className="h-4 w-4 text-[#ff5c8a]" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenuLink({ href, label, number, onClick }: { href: string; label: string; number: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex min-h-16 items-center justify-between gap-4 transition hover:text-[#ff8a3d]">
      <span className="font-mono text-[0.68rem] text-[#ff5c8a]">{number}</span>
      <span className="mr-auto font-display text-[clamp(2rem,10vw,3.35rem)] font-semibold leading-none tracking-[-0.04em]">{label}</span>
      <ArrowRight className="h-5 w-5 text-white/38" />
    </Link>
  );
}
