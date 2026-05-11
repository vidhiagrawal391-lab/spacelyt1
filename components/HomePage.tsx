"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Menu,
  ShieldCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedConnectorLine from "@/components/AnimatedLinePath";
import { BlueprintArt } from "@/components/BlueprintArt";
import PopupManager from "@/components/lead/PopupManager";
import { portfolio, services, type Service } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      id={id}
      initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <GradientBackground />
      <AnimatedConnectorLine />
      <MobileHeader />
      <HeroSection />
      <ServiceOverviewSection />
      <TurnkeyAdvantageSection />
      <ProjectTypesSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <ServiceDetailSection />
      <ConsultationCTASection />
      <FAQSection />
      <Footer />
      <PopupManager />
    </main>
  );
}

function GradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="gradient-orb left-[-10rem] top-[8rem] h-[28rem] w-[28rem] from-[#ff2daa]/24 via-[#ff8a3d]/16 to-[#38bdf8]/16"
        animate={{ x: [0, 38, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-orb right-[-12rem] top-[42rem] h-[32rem] w-[32rem] from-[#38bdf8]/18 via-[#ff5c8a]/18 to-[#8b5cf6]/14"
        animate={{ x: [0, -42, 0], y: [0, 46, 0], scale: [1, 0.94, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  );
}

function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/78 px-4 py-3 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a href="#" className="font-display text-lg font-bold tracking-[0.18em]">
          SPACELYT
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow md:inline-flex">
          Start Your Project
        </a>
        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white shadow-soft md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function MagneticButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition ${
        variant === "primary"
          ? "bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] text-white shadow-glow"
          : "border border-black/8 bg-white/78 text-[var(--ink)] shadow-soft backdrop-blur-xl"
      }`}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

function SectionHead({
  label,
  title,
  action,
  href = "#contact"
}: {
  label?: string;
  title: React.ReactNode;
  action?: string;
  href?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 px-1">
      <div>
        {label ? <p className="technical-label mb-2 text-[#ff2daa]">{label}</p> : null}
        <h2 className="font-display text-balance text-[clamp(2rem,8vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.04em]">{title}</h2>
      </div>
      {action ? (
        <a href={href} className="shrink-0 rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs font-semibold shadow-soft">
          {action}
        </a>
      ) : null}
    </div>
  );
}

function Carousel({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}>
      {children}
    </div>
  );
}

function SectionCTA({ href = "#contact", children = "Start Your Project" }: { href?: string; children?: React.ReactNode }) {
  return (
    <div className="mt-5 px-1">
      <a href={href} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-6 text-sm font-semibold text-white shadow-glow sm:w-auto">
        {children}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:min-h-[82vh] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="technical-label mb-5 text-[#ff2daa]">SPACELYT / TURNKEY SPACE TRANSFORMATION</p>
          <h1 className="font-display text-[clamp(3.6rem,15vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.07em]">
            From Blueprint
            <br />
            to <span className="gradient-text">Beautiful Spaces</span>
          </h1>
          <p className="mt-5 max-w-xl text-balance font-display text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            One partner for planning, design, build and delivery.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Spacelyt brings planning, architecture, construction, interiors, exteriors, and building solutions together into one seamless turnkey experience.
          </p>
          <div className="mt-7 grid gap-3 sm:flex">
            <MagneticButton href="#contact">Start Your Project</MagneticButton>
            <MagneticButton href="#services" variant="secondary">Explore Services</MagneticButton>
          </div>
        </Reveal>

        <Reveal className="relative min-h-[34rem] overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/70 p-3 shadow-glow backdrop-blur-2xl">
          <Image src={portfolio[0].image} alt="Spacelyt featured project" fill sizes="(min-width: 1024px) 52vw, 92vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-black/8 to-white/20" />
          <div className="absolute left-4 top-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold shadow-soft backdrop-blur-xl">
            Turnkey delivery studio
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-2xl">
            <p className="technical-label text-[#ff2daa]">Concept to completion</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em]">From first sketch to final handover.</h2>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
              <span className="rounded-full bg-white px-3 py-2">Plan</span>
              <span className="rounded-full bg-white px-3 py-2">Build</span>
              <span className="rounded-full bg-white px-3 py-2">Deliver</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceOverviewSection() {
  return (
    <section id="services" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead title="Complete Turnkey Services" action="Get Free Consultation" />
        <Carousel className="gap-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a key={service.slug} href={`#${service.slug}`} className="relative min-w-[18.5rem] snap-start overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl lg:min-w-0">
                <div className="absolute inset-0 opacity-[0.1]">
                  <BlueprintArt type={service.art} />
                </div>
                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="gradient-badge">{service.number}</span>
                    <Icon className="h-6 w-6 text-[#ff2daa]" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{service.flowTitle}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-xs font-semibold text-white">
                    Discuss This Service <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </Carousel>
        <SectionCTA>Get Free Consultation</SectionCTA>
      </div>
    </section>
  );
}

function TurnkeyAdvantageSection() {
  const benefits: Array<{ icon: LucideIcon; title: string; text: string }> = [
    { icon: ShieldCheck, title: "One accountable team", text: "Planning, design, site work, and handover stay under one coordinated project partner." },
    { icon: CalendarCheck, title: "Clear scope and budget planning", text: "Scope, priorities, cost direction, and timelines are mapped before execution starts." },
    { icon: BadgeCheck, title: "Design-to-execution coordination", text: "Architecture, interiors, construction, and vendor work move from the same project roadmap." },
    { icon: Check, title: "Quality checks and handover support", text: "Site execution is reviewed through practical milestones before final delivery." }
  ];
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Turnkey Advantage" title="Why Clients Choose Spacelyt" action="Request Callback" />
        <Carousel className="lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {benefits.map(({ icon: BenefitIcon, title, text }) => {
            return (
            <Reveal key={title} className="min-w-[17.5rem] snap-start rounded-[1.7rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl lg:min-w-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white">
                <BenefitIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-7 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
            </Reveal>
          );})}
        </Carousel>
      </div>
    </section>
  );
}

function ProjectTypesSection() {
  const projectTypes = [
    ["Residential Spaces", "Homes planned, designed, built, and finished with one accountable team."],
    ["Commercial Spaces", "Workspaces, retail, and hospitality environments coordinated from scope to delivery."],
    ["Renovations", "Existing sites transformed with practical planning, execution control, and minimal chaos."],
    ["Luxury Interiors", "Material-led interior design, detailing, lighting, furniture, and modular work."],
    ["Facades & Exteriors", "Elevation, entry, landscape, boundary, and outdoor lighting brought together."],
    ["Complete Turnkey Projects", "End-to-end project management for residential, commercial, and building work."]
  ];
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Project Types" title="Spaces We Create" action="Get Project Estimate" />
        <Carousel className="gap-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {projectTypes.map(([title, text], index) => (
            <Reveal key={title} className="min-w-[17.5rem] snap-start rounded-[1.7rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl lg:min-w-0">
              <span className="technical-label text-[#ff2daa]">Type {String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-7 font-display text-3xl font-semibold leading-tight tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
            </Reveal>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ["Consultation", "Understand your site, budget, goals, and expected outcome."],
    ["Site & Scope Planning", "Map measurements, feasibility, project scope, and priorities."],
    ["Design Direction", "Resolve planning, architecture, interiors, and visual language."],
    ["Material & Vendor Coordination", "Align material systems, vendor roles, and procurement direction."],
    ["Execution & Quality Checks", "Coordinate site progress, civil work, finishing, and reviews."],
    ["Final Handover", "Close the project with delivery support and final checks."]
  ];
  return (
    <section id="process" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Process" title="A Clear Journey From Idea to Handover" action="Start Your Project" />
        <div className="relative">
          <motion.div
            aria-hidden="true"
            className="absolute left-4 right-4 top-9 hidden h-px bg-[linear-gradient(90deg,#ff2daa,#ff8a3d,#38bdf8)] lg:block"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease }}
          />
        <Carousel className="sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {steps.map(([step, text], index) => (
            <Reveal key={step} className="relative min-w-[17.5rem] snap-start overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl sm:min-w-0">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[radial-gradient(circle,#ff2daa33,transparent_68%)]" />
              <span className="gradient-badge">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 font-display text-2xl font-semibold">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
            </Reveal>
          ))}
        </Carousel>
        </div>
        <SectionCTA>Start Your Project</SectionCTA>
      </div>
    </section>
  );
}

function FeaturedProjectsSection() {
  const selectedProjects = [
    { ...portfolio[0], name: "Residential Turnkey", scope: "Planning, architecture, interiors, exteriors, and execution for complete homes." },
    { ...portfolio[1], name: "Commercial Interior & Build", scope: "Commercial planning, interior systems, construction coordination, and handover." },
    { ...portfolio[2], name: "Facade & Exterior Upgrade", scope: "Elevation, facade, landscape, entry, and outdoor lighting improvements." }
  ];
  return (
    <section id="projects" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Portfolio" title="Selected Project Directions" action="Request Callback" />
        <Carousel className="lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof portfolio)[number] }) {
  return (
    <Reveal className="min-w-[19rem] snap-start overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 p-3 shadow-soft backdrop-blur-xl lg:min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
        <Image src={project.image} alt={project.name} fill sizes="330px" className="image-depth object-cover" />
      </div>
      <div className="p-2 pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[linear-gradient(135deg,#ff2daa,#8b5cf6)] px-3 py-1.5 text-xs font-semibold text-white">{project.type}</span>
          <span className="text-xs font-semibold text-[var(--muted)]">Spacelyt direction</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">{project.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.scope}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-xs font-semibold text-white">
          Discuss This Service <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  );
}

function AboutSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src={services[3].image} alt="Spacelyt coordinated interiors and build delivery" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover" />
        </Reveal>
        <Reveal>
          <p className="technical-label text-[#ff2daa]">About Spacelyt</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Spaces,
            <br />
            <span className="gradient-text">Designed to be delivered.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Spacelyt is built around one idea: better spaces come from better coordination. We connect planning, architecture, construction, interiors, exteriors, and building solutions from day one, so clients get clarity from concept to completion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ConsultationCTASection() {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6 lg:px-10">
      <Reveal className="mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-glow backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="technical-label text-[#ff2daa]">Consultation</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em]">Not sure where to start?</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">Share your site, budget, and vision. Spacelyt will help map the right service mix for your project.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Planning", "Design", "Construction", "Turnkey Delivery"].map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-soft">{item}</span>
            ))}
          </div>
        </div>
        <div className="rounded-[1.7rem] bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] p-1">
          <div className="rounded-[1.5rem] bg-white/90 p-5">
            <p className="technical-label">SPACELYT MATCH</p>
            <h3 className="mt-6 font-display text-3xl font-semibold">Find your project route</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">A focused consultation helps define scope, budget, timeline, and the right service mix.</p>
            <a href="mailto:hello@spacelyt.com" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#111] px-5 py-4 text-sm font-semibold text-white">
              Book a Consultation
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ServiceDetailSection() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="Service Detail" title="Explore Our Service System" action="Get Free Consultation" />
        <Carousel className="lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0">
          {services.map((service, index) => (
            <ServiceCollectionCard key={service.slug} service={service} index={index} />
          ))}
        </Carousel>
        <SectionCTA>Get Project Estimate</SectionCTA>
      </div>
    </section>
  );
}

function ServiceCollectionCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Reveal id={service.slug} className="relative min-w-[20.5rem] snap-start overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 p-4 shadow-soft backdrop-blur-xl md:grid md:min-w-0 md:grid-cols-[0.7fr_1.3fr] md:gap-6 md:p-5">
      <div className="relative mb-4 min-h-[12.5rem] overflow-hidden rounded-[1.5rem] md:mb-0 md:min-h-[15rem]">
        <Image src={service.image} alt={service.flowTitle} fill sizes="(min-width: 768px) 30vw, 88vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/36 to-transparent" />
      </div>
      <div className="relative">
        <div className="absolute inset-0 opacity-[0.12]">
          <BlueprintArt type={service.art} />
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between md:mb-7">
            <p className="technical-label text-[#ff2daa]">{String(index + 1).padStart(2, "0")} - Service</p>
            <Icon className="h-6 w-6 text-[#ff2daa]" />
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">{service.title}</h3>
          <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-6 text-[var(--muted)] md:mt-4 md:line-clamp-none md:leading-7">{service.short}</p>
          <div className="mt-5 grid gap-2 md:grid-cols-2">
            {service.bullets.slice(0, 4).map((bullet) => (
              <span key={bullet} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-[0_12px_35px_rgba(17,17,17,.05)]">
                <Check className="h-4 w-4 text-[#ff2daa]" />
                {bullet}
              </span>
            ))}
          </div>
          <a href="#contact" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111] px-5 text-sm font-semibold text-white">
            Start With This Service <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function FAQSection() {
  const faqs = [
    ["Do you handle complete turnkey projects?", "Yes. Spacelyt coordinates planning, architecture, construction, interiors, exteriors, and delivery."],
    ["Can I start only with planning?", "Yes. You can begin with planning and expand into design or execution after scope is clear."],
    ["Do you work on residential and commercial projects?", "Yes. The service model supports homes, commercial spaces, renovations, and full building solutions."],
    ["How do I start?", "Share your project vision and site details. The first step is a consultation and scope mapping."]
  ];
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead label="FAQ" title="Common Questions" action="Request Callback" />
        <Carousel className="lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0">
          {faqs.map(([question, answer]) => (
            <Reveal key={question} className="min-w-[19rem] snap-start rounded-[1.5rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl lg:min-w-0">
              <h3 className="font-display text-xl font-semibold">{question}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{answer}</p>
            </Reveal>
          ))}
        </Carousel>
        <SectionCTA>Talk to Spacelyt</SectionCTA>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111] px-5 py-12 text-white sm:px-10">
      <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-[#ff2daa]/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-[0.12em]">SPACELYT</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/62">One partner for planning, architecture, construction, interiors, exteriors, and complete building solutions.</p>
        </div>
        <FooterList title="Services" items={["Planning", "Architecture", "Construction", "Interiors", "Exteriors", "Building Solutions"]} />
        <FooterList title="Studio" items={["Process", "Projects", "Why Spacelyt", "Consultation"]} />
        <FooterList title="Contact" items={["hello@spacelyt.com", "+91 - - -", "India"]} />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/12 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/46 sm:flex-row">
        <span>© Spacelyt 2026</span>
        <span className="text-[#ff5c8a]">Plan / Design / Build / Deliver</span>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/78">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/56">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
