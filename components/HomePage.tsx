"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check
} from "lucide-react";
import AnimatedConnectorLine from "@/components/AnimatedLinePath";
import { BlueprintArt } from "@/components/BlueprintArt";
import PopupManager from "@/components/lead/PopupManager";
import ProcessJourneySection from "@/components/ProcessJourneySection";
import SiteHeader from "@/components/SiteHeader";
import SocialLinks from "@/components/SocialLinks";
import WhyChooseSpacelyt from "@/components/WhyChooseSpacelyt";
import { portfolio, services, type Service } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;
const heroShowcaseImage = "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=84";
const FLOATING_CALLBACK_EVENT = "spacelyt:open-floating-callback";
const SERVICE_CTA_EVENT = "spacelyt:open-service-consultation";
const footerServiceLinks = [
  { label: "Planning", href: "/services/planning" },
  { label: "Architecture", href: "/services/architecture" },
  { label: "Construction", href: "/services/construction" },
  { label: "Interiors", href: "/services/interior-design" },
  { label: "Exteriors", href: "/services/exterior-design" },
  { label: "Building Solutions", href: "/services/building-solutions" }
];
const footerContactLinks = [
  { label: "hello@spacelyt.com", href: "mailto:hello@spacelyt.com" },
  { label: "+918002234888", href: "tel:+918002234888" },
  {
    label: "Kochar Petrol Pump Chand Chaura Gaya, Bihar, 823001, India",
    href: "https://www.google.com/maps/search/?api=1&query=Kochar%20Petrol%20Pump%20Chand%20Chaura%20Gaya%2C%20Bihar%2C%20823001%2C%20India",
    external: true
  }
];

function openFloatingCallbackPopup() {
  window.dispatchEvent(new CustomEvent(FLOATING_CALLBACK_EVENT));
}

function openStartProjectPopup() {
  window.dispatchEvent(
    new CustomEvent(SERVICE_CTA_EVENT, {
      detail: { serviceName: "Building Solutions", serviceSlug: "building-solutions" }
    })
  );
}

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
      <SiteHeader />
      <HeroSection />
      <ServiceOverviewSection />
      <WhyChooseSpacelyt />
      <ProjectTypesSection />
      <ProcessJourneySection />
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

function MagneticButton({
  href,
  children,
  variant = "primary",
  popup
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  popup?: "start-project";
}) {
  const className = `inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition ${
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] text-white shadow-glow"
      : "border border-black/8 bg-white/78 text-[var(--ink)] shadow-soft backdrop-blur-xl"
  }`;

  if (popup === "start-project") {
    return (
      <motion.button
        type="button"
        onClick={openStartProjectPopup}
        className={className}
        whileHover={{ y: -3, scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      className={className}
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
  actionHref
}: {
  label?: string;
  title: React.ReactNode;
  action?: string;
  actionHref?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 px-1">
      <div>
        {label ? <p className="technical-label mb-2 text-[#ff2daa]">{label}</p> : null}
        <h2 className="font-display text-balance text-[clamp(2rem,8vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.04em]">{title}</h2>
      </div>
      {action && actionHref ? (
        <Link href={actionHref} className="shrink-0 rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs font-semibold shadow-soft">
          {action}
        </Link>
      ) : action ? (
        <button
          type="button"
          onClick={openFloatingCallbackPopup}
          className="shrink-0 rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs font-semibold shadow-soft"
        >
          {action}
        </button>
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

function SectionCTA({ children = "Start Your Project" }: { children?: React.ReactNode }) {
  return (
    <div className="mt-5 px-1">
      <button
        type="button"
        onClick={openFloatingCallbackPopup}
        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-6 text-sm font-semibold text-white shadow-glow sm:w-auto"
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </button>
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
            <MagneticButton href="#contact" popup="start-project">Start Your Project</MagneticButton>
            <MagneticButton href="/services" variant="secondary">Explore Services</MagneticButton>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto min-h-[36rem] w-full max-w-[28rem] overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/70 p-3 shadow-glow backdrop-blur-2xl sm:min-h-[42rem] lg:min-h-[46rem] lg:max-w-[34.875rem]">
          <Image src={heroShowcaseImage} alt="Premium vertical turnkey interior showcase" fill sizes="(min-width: 1024px) 34.875rem, 92vw" className="object-cover object-[50%_50%]" priority />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_38%),linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.04)_48%,rgba(255,255,255,0.04))]" />
          <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold shadow-soft backdrop-blur-xl">
            Turnkey delivery studio
          </div>
          <div className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/88 p-4 text-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-5">
            <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[linear-gradient(90deg,#ff2daa,#ff8a3d,#38bdf8)]" />
            <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-[#ff2daa]/18 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-[#111]/10 bg-[#111] px-3.5 py-2 shadow-[0_14px_32px_rgba(17,17,17,0.18)]">
                <p className="technical-label text-[#ff8a3d]">Concept to completion</p>
              </div>
              <h2 className="mt-4 max-w-lg font-display text-[clamp(1.75rem,4vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                From first sketch to final handover.
              </h2>
              <div className="mt-5 grid grid-cols-3 gap-2 rounded-[1.2rem] border border-black/8 bg-[#111]/[0.04] p-2">
                {["Plan", "Design", "Deliver"].map((title, index) => (
                  <motion.div
                    key={title}
                    className="relative min-h-12 overflow-hidden rounded-full border border-black/8 bg-white px-2 py-3 text-center text-xs font-bold text-[#111] shadow-[0_10px_28px_rgba(17,17,17,0.1)]"
                    animate={{
                      y: [0, -6, 0],
                      scale: [1, 1.035, 1],
                      color: ["#111111", "#ffffff", "#111111"],
                      background: [
                        "linear-gradient(135deg,#ffffff,#ffffff)",
                        "linear-gradient(135deg,#ff2daa,#ff8a3d)",
                        "linear-gradient(135deg,#ffffff,#ffffff)"
                      ],
                      boxShadow: [
                        "0 10px 28px rgba(17,17,17,0.1)",
                        "0 18px 42px rgba(255,45,170,0.32)",
                        "0 10px 28px rgba(17,17,17,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.28
                    }}
                  >
                    <motion.span
                      className="absolute inset-y-0 -left-10 w-10 bg-white/60 blur-md"
                      animate={{ x: ["0%", "360%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.28 }}
                    />
                    <span className="relative">{title}</span>
                  </motion.div>
                ))}
              </div>
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
              <Link key={service.slug} href={`/services/${service.slug}`} className="relative min-w-[18.5rem] snap-start overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl lg:min-w-0">
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
                    View Service <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </Carousel>
        <SectionCTA>Get Free Consultation</SectionCTA>
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
        <SectionHead label="Project Types" title="Spaces We Create" action="Get Project Estimate" actionHref="/calculators" />
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
    <section id="about" className="px-4 py-10 sm:px-6 lg:px-10">
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
          <button
            type="button"
            onClick={openFloatingCallbackPopup}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#111] px-5 py-4 text-sm font-semibold text-white"
          >
              Start Consultation
            </button>
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
          <Link href={`/services/${service.slug}`} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111] px-5 text-sm font-semibold text-white">
            Start With This Service <ArrowRight className="h-4 w-4" />
          </Link>
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
          <SocialLinks />
        </div>
        <FooterList title="Services" items={footerServiceLinks} />
        <FooterList title="Studio" items={["Process", "Projects", "Why Spacelyt", "Consultation"]} />
        <FooterList title="Contact" items={footerContactLinks} />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/12 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/46 sm:flex-row">
        <span>
          © 2016{" "}
          <a href="https://spacelyt.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            Spacelyt
          </a>{" "}
          All Rights Reserved. Website Designed By{" "}
          <a href="https://oreodigi.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            OreoDigi
          </a>
          .
        </span>
        <span className="text-[#ff5c8a]">Plan / Design / Build / Deliver</span>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: Array<string | { label: string; href: string; external?: boolean }> }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/78">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/56">
        {items.map((item) => (
          <li key={typeof item === "string" ? item : item.href}>
            {typeof item === "string" ? (
              item
            ) : item.external ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
