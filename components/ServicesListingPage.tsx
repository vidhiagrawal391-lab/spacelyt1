"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import ServiceCTAButton from "@/components/ServiceCTAButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { servicePages } from "@/lib/servicePages";

const ease = [0.22, 1, 0.36, 1] as const;
const connectedSteps = ["Planning", "Architecture", "Construction", "Interiors", "Exteriors", "Handover"];

export default function ServicesListingPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <section className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(56,189,248,.12),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="technical-label text-[#ff2daa]">Spacelyt services</p>
            <h1 className="mt-5 max-w-6xl font-display text-[clamp(3.1rem,9vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              Complete Turnkey Services for Every Stage of Your Space
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Planning, architecture, construction, interiors, exteriors, and building solutions coordinated under one Spacelyt system.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ServiceCTAButton serviceName="Full Turnkey">Start Your Project</ServiceCTAButton>
              <ServiceCTAButton serviceName="Full Turnkey" variant="secondary">Get Free Consultation</ServiceCTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service, index) => (
            <Reveal key={service.slug}>
              <Link href={`/services/${service.slug}`} className="group block h-full overflow-hidden rounded-[2rem] border border-white/76 bg-white/78 p-4 shadow-soft backdrop-blur-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                  <Image src={service.image} alt={service.title} fill unoptimized sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1.5 font-mono text-xs font-semibold text-[#ff2daa] shadow-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.05em]">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.shortDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-xs font-semibold text-white">
                  View Service <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.6rem] border border-white/78 bg-white/64 p-5 shadow-glow backdrop-blur-2xl md:p-8">
          <Reveal>
            <p className="technical-label text-[#ff2daa]">How our services connect</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              One project path, not scattered vendors
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-6">
            {connectedSteps.map((step, index) => (
              <Reveal key={step} className="relative rounded-[1.4rem] bg-white/82 p-4 shadow-soft">
                <span className="gradient-badge">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-base font-semibold">{step}</h3>
                {index < connectedSteps.length - 1 ? (
                  <ArrowRight className="absolute right-4 top-5 hidden h-4 w-4 text-[#ff2daa] md:block" />
                ) : (
                  <Check className="absolute right-4 top-5 hidden h-4 w-4 text-[#ff2daa] md:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/78 bg-white/78 p-6 shadow-glow backdrop-blur-2xl md:p-10">
          <p className="technical-label text-[#ff2daa]">Consultation</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Start with the right service mix.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Share your site, requirement, and budget direction. Spacelyt will help you decide where to begin and how each service should connect.
          </p>
          <div className="mt-8">
            <ServiceCTAButton serviceName="Full Turnkey">Get Free Consultation</ServiceCTAButton>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
      <PopupManager />
    </main>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.68, ease }}
    >
      {children}
    </motion.div>
  );
}
