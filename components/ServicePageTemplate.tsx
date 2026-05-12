"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import ServiceCTAButton from "@/components/ServiceCTAButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { ServicePageData } from "@/lib/servicePages";
import { getRelatedServices } from "@/lib/servicePages";

const ease = [0.22, 1, 0.36, 1] as const;

type ServicePageTemplateProps = {
  service: ServicePageData;
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedServices = getRelatedServices(service);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceHero service={service} />
      <ServiceOverviewSection service={service} />
      <ServiceScopeSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceDeliverablesSection service={service} />
      <ServiceBenefitsSection service={service} />
      <RelatedServicesSection services={relatedServices} />
      <ServiceFAQSection service={service} />
      <ServiceCTASection service={service} />
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

function ServiceHero({ service }: ServicePageTemplateProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-12 sm:px-6 lg:min-h-[88dvh] lg:px-10 lg:pb-18 lg:pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(56,189,248,.12),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.36] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <Reveal>
          <nav className="text-xs font-semibold text-[var(--muted)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--ink)]">Home</Link>
            <span className="px-2">/</span>
            <Link href="/services" className="hover:text-[var(--ink)]">Services</Link>
            <span className="px-2">/</span>
            <span className="text-[var(--ink)]">{service.title}</span>
          </nav>
          <p className="technical-label mt-8 text-[#ff2daa]">{service.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(3.2rem,9vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {service.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ServiceCTAButton serviceName={service.title} serviceSlug={service.slug}>{service.primaryCTA}</ServiceCTAButton>
            <Link href="#service-process" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/8 bg-white/82 px-6 text-sm font-semibold text-[var(--ink)] shadow-soft backdrop-blur-xl">
              {service.secondaryCTA}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-white/80 bg-white shadow-glow lg:aspect-[4/4.4]">
            <Image src={service.image} alt={`${service.title} by Spacelyt`} fill priority unoptimized sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(17,17,17,.2))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/55 bg-white/80 p-5 shadow-soft backdrop-blur-xl">
              <p className="technical-label text-[#ff2daa]">Spacelyt system</p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em]">Plan / Design / Build / Deliver</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceOverviewSection({ service }: ServicePageTemplateProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="technical-label text-[#ff2daa]">Overview</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            What this service means for your project
          </h2>
        </Reveal>
        <Reveal className="rounded-[2rem] border border-white/78 bg-white/78 p-6 shadow-soft backdrop-blur-xl md:p-8">
          <p className="text-lg leading-9 text-[var(--muted)]">{service.longDescription}</p>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceScopeSection({ service }: ServicePageTemplateProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Scope" title="What we handle" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {service.scopeItems.map((item, index) => (
            <Reveal key={item} className="rounded-[1.4rem] border border-white/76 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
              <span className="font-mono text-xs font-semibold text-[#ff2daa]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-lg font-semibold leading-tight">{item}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceProcessSection({ service }: ServicePageTemplateProps) {
  return (
    <section id="service-process" className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Process" title={`${service.title} process`} />
        <div className="relative grid gap-4 lg:grid-cols-6">
          <div aria-hidden="true" className="absolute left-6 right-6 top-8 hidden h-px bg-[linear-gradient(90deg,#ff2daa,#ff8a3d,#38bdf8)] lg:block" />
          {service.processSteps.map((step, index) => (
            <Reveal key={step} className="relative rounded-[1.6rem] border border-white/76 bg-white/82 p-5 shadow-soft backdrop-blur-xl">
              <span className="gradient-badge">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-base font-semibold leading-tight">{step}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDeliverablesSection({ service }: ServicePageTemplateProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.6rem] border border-white/78 bg-white/58 p-5 shadow-glow backdrop-blur-2xl md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="technical-label text-[#ff2daa]">Deliverables</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            What you receive
          </h2>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            Clear outputs make the next decision easier, whether the project continues into another Spacelyt service or moves into full turnkey delivery.
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.deliverables.map((item) => (
            <Reveal key={item} className="flex items-center gap-3 rounded-[1.25rem] bg-white/82 p-4 shadow-soft">
              <Check className="h-5 w-5 shrink-0 text-[#ff2daa]" />
              <span className="text-sm font-semibold">{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBenefitsSection({ service }: ServicePageTemplateProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Why it matters" title="Better coordination creates better outcomes" />
        <div className="grid gap-4 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <Reveal key={benefit} className="flex gap-4 rounded-[1.7rem] border border-white/76 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white">
                <Layers3 className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em]">{benefit}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection({ services }: { services: ServicePageData[] }) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Connected services" title="Related Spacelyt services" />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Link href={`/services/${service.slug}`} className="group block h-full overflow-hidden rounded-[1.8rem] border border-white/76 bg-white/78 p-4 shadow-soft backdrop-blur-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                  <Image src={service.image} alt={service.title} fill unoptimized sizes="(min-width: 768px) 30vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em]">{service.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{service.shortDescription}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff2daa]">
                  View Service <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFAQSection({ service }: ServicePageTemplateProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionIntro eyebrow="Common questions" title={`${service.title} FAQs`} />
        <div className="grid gap-3">
          {service.faqs.map((faq) => (
            <Reveal key={faq.question} className="rounded-[1.5rem] border border-white/76 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCTASection({ service }: ServicePageTemplateProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] border border-white/78 bg-white/78 p-6 shadow-glow backdrop-blur-2xl md:p-10">
        <p className="technical-label text-[#ff2daa]">Start with Spacelyt</p>
        <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
          Ready to plan your project with Spacelyt?
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Share your site, budget, and vision. We will help define the right service path for your project.
        </p>
        <div className="mt-8">
          <ServiceCTAButton serviceName={service.title} serviceSlug={service.slug}>Start Your Project</ServiceCTAButton>
        </div>
      </Reveal>
    </section>
  );
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-6">
      <p className="technical-label text-[#ff2daa]">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.3rem,6vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
        {title}
      </h2>
    </Reveal>
  );
}
