"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Handshake, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const ease = [0.22, 1, 0.36, 1] as const;
const aboutImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82";
const studioImage = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=82";

const companyPillars = [
  {
    title: "Integrated Planning",
    text: "We align site, budget, space use, design direction, materials, and execution expectations before work begins.",
    icon: Compass
  },
  {
    title: "Client-Centered Process",
    text: "Every project route is shaped around the client’s lifestyle, business needs, timeline, and decision comfort.",
    icon: Handshake
  },
  {
    title: "Delivery Clarity",
    text: "Architecture, construction, interiors, exteriors, and handover stay connected under one accountable system.",
    icon: Layers3
  }
];

const stats = [
  ["98%", "client-first planning focus"],
  ["4.9", "average experience rating"],
  ["6", "core service disciplines"],
  ["1", "coordinated turnkey partner"]
];

const whyChoose = [
  "One point of coordination from first discussion to final handover.",
  "Premium design thinking backed by practical site execution.",
  "Clear scope, budget direction, and milestone-based delivery.",
  "Service mix built for planning, architecture, construction, interiors, exteriors, and full turnkey."
];

const faqs = [
  ["What does Spacelyt do?", "Spacelyt brings planning, architecture, construction, interiors, exteriors, and full turnkey delivery into one coordinated project experience."],
  ["Can Spacelyt handle the complete project?", "Yes. We support complete turnkey project journeys, from understanding the site and scope to execution coordination and handover."],
  ["Do you work on residential and commercial spaces?", "Yes. The Spacelyt system supports homes, offices, retail spaces, renovations, and full turnkey project requirements."],
  ["How does the process begin?", "It starts with a consultation where we understand your site, requirement, budget direction, and the right service path for your project."]
];

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <HeroSection />
      <CompanySection />
      <FacilitiesSection />
      <WhyChooseSection />
      <FAQSection />
      <ClosingCTA />
      <SiteFooter />
      <PopupManager />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(56,189,248,.13),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            <Link href="/" className="transition hover:text-[var(--ink)]">Home</Link>
            <span>/</span>
            <span>About Spacelyt</span>
          </div>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(3.4rem,10vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            About Our
            <br />
            <span className="gradient-text">Company</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

function CompanySection() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-white/72 bg-white/70 p-3 shadow-glow backdrop-blur-2xl">
          <Image src={aboutImage} alt="Spacelyt premium turnkey interior and architecture project" fill sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover" priority />
          <div className="absolute inset-3 rounded-[2rem] border border-white/55" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/70 bg-white/86 p-4 shadow-soft backdrop-blur-2xl">
            <p className="technical-label text-[#ff2daa]">Concept to completion</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.04em]">One accountable partner for better-built spaces.</p>
          </div>
        </Reveal>
        <Reveal>
          <p className="technical-label text-[#ff2daa]">More About Our Company</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Building Better Spaces Through One Coordinated System
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Spacelyt is a premium construction, architecture, interior, exterior, and full turnkey service company. We help clients move from early ideas to practical planning, refined design, site execution, and final handover with clarity at every stage.
          </p>
          <div className="mt-7 grid gap-4">
            {companyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex gap-4 rounded-[1.4rem] border border-white/72 bg-white/76 p-4 shadow-soft backdrop-blur-xl">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-semibold tracking-[-0.03em]">{pillar.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">{pillar.text}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <Reveal className="rounded-[2.3rem] border border-white/76 bg-white/72 p-6 shadow-soft backdrop-blur-2xl md:p-8">
          <p className="technical-label text-[#ff2daa]">Our Featured Facilities</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.3rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Designed for decisions, built for delivery.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Our approach turns complex project stages into a clearer path: consultation, planning, design direction, execution coordination, and handover. That means fewer gaps between drawings, material decisions, site work, and finished space.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-[1.45rem] bg-white p-5 shadow-soft">
                <p className="font-display text-4xl font-semibold tracking-[-0.05em]">{value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative min-h-[28rem] overflow-hidden rounded-[2.3rem] shadow-glow">
          <Image src={studioImage} alt="Spacelyt exterior and interior delivery detail" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.48))]" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/45 bg-white/80 p-4 shadow-soft backdrop-blur-2xl">
            <p className="technical-label text-[#ff2daa]">Spacelyt Standard</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Premium planning, careful execution, and dependable handover under one project rhythm.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6">
          <p className="technical-label text-[#ff2daa]">Why Choose Us</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Built around clarity, trust, and finish quality.
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {whyChoose.map((item, index) => (
            <Reveal key={item} className="rounded-[1.65rem] border border-white/72 bg-white/76 p-5 shadow-soft backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] text-white shadow-glow">
                  {index % 2 === 0 ? <ShieldCheck className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </span>
                <p className="text-base leading-7 text-[var(--muted)]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6">
          <p className="technical-label text-[#ff2daa]">FAQs</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Functional design, practical delivery.
          </h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} className="rounded-[1.55rem] border border-white/72 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
              <div className="flex gap-4">
                <span className="font-mono text-xs font-semibold text-[#ff2daa]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2.2rem] border border-white/76 bg-[#111] p-6 text-white shadow-glow md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <p className="technical-label text-[#ff8a3d]">Start With Spacelyt</p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2rem,6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
            Ready to plan your project with one coordinated partner?
          </h2>
        </div>
        <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111] shadow-soft">
          Explore Services <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
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
