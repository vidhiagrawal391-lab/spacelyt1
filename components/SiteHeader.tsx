"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { servicePages } from "@/lib/servicePages";

const SERVICE_CTA_EVENT = "spacelyt:open-service-consultation";

const mainNavLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/calculators", label: "Calculators" },
  { href: "/#projects", label: "Project" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };
  const openStartProjectPopup = () => {
    closeMobileMenu();
    window.dispatchEvent(
      new CustomEvent(SERVICE_CTA_EVENT, {
        detail: { serviceName: "Full Turnkey", serviceSlug: "building-solutions" }
      })
    );
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/78 px-4 py-3 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <Link href="/" className="font-display text-lg font-bold tracking-[0.18em]" onClick={closeMobileMenu}>
            SPACELYT
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex" aria-label="Main navigation">
            {mainNavLinks.map((item) =>
              item.hasDropdown ? (
                <div key={item.href} className="group relative">
                  <Link href={item.href} className="inline-flex items-center gap-1.5 py-3 transition hover:text-[var(--ink)]">
                    {item.label}
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
              ) : (
                <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <button
            type="button"
            onClick={openStartProjectPopup}
            className="hidden rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow md:inline-flex"
          >
            Start Your Project
          </button>
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
      </header>

      <div
        className={`fixed inset-0 z-[120] h-dvh overflow-y-auto bg-[#0d0d0d] text-white transition duration-500 md:hidden ${
          mobileMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,45,170,.24),transparent_18rem),radial-gradient(circle_at_92%_18%,rgba(255,138,61,.18),transparent_20rem),linear-gradient(145deg,#090909,#151111_48%,#080808)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(0deg,rgba(255,45,170,.14),transparent)]" />

        <div className={`relative mx-auto flex min-h-dvh max-w-7xl flex-col px-5 py-5 transition duration-500 ${mobileMenuOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.98]"}`}>
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

          <nav className="mt-7 flex flex-1 flex-col pb-5" aria-label="Mobile navigation">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#ff8a3d]">Main menu</p>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/34">Desktop links</span>
              </div>
              <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {mainNavLinks.map((item, index) =>
                  item.hasDropdown ? (
                    <MobileServicesMenuItem
                      key={item.href}
                      label={item.label}
                      number={String(index + 1).padStart(2, "0")}
                      open={mobileServicesOpen}
                      onToggle={() => setMobileServicesOpen((open) => !open)}
                      onClick={closeMobileMenu}
                    />
                  ) : (
                    <MobileMenuLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      number={String(index + 1).padStart(2, "0")}
                      onClick={closeMobileMenu}
                    />
                  )
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={openStartProjectPopup}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(255,45,170,.28)]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

function MobileServicesMenuItem({
  label,
  number,
  open,
  onToggle,
  onClick
}: {
  label: string;
  number: string;
  open: boolean;
  onToggle: () => void;
  onClick: () => void;
}) {
  return (
    <div>
      <button type="button" onClick={onToggle} className="flex min-h-16 w-full items-center justify-between gap-4 text-left transition hover:text-[#ff8a3d]">
        <span className="font-mono text-[0.68rem] text-[#ff5c8a]">{number}</span>
        <span className="mr-auto font-display text-[clamp(2rem,10vw,3.35rem)] font-semibold leading-none tracking-[-0.04em]">{label}</span>
        <ChevronDown className={`h-5 w-5 text-white/38 transition ${open ? "rotate-180 text-[#ff8a3d]" : ""}`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0">
          <div className="grid gap-2 pl-10">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={onClick}
                className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:bg-white/[0.1]"
              >
                <span>
                  <span className="block text-sm font-semibold">{service.title}</span>
                  <span className="mt-1 line-clamp-1 block text-xs text-white/48">{service.shortDescription}</span>
                </span>
                <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-[#ff8a3d]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
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
