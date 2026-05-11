"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Layers3,
  Sparkles
} from "lucide-react";
import { useRef, useState } from "react";
import AnimatedConnectorLine from "@/components/AnimatedLinePath";
import { BlueprintArt } from "@/components/BlueprintArt";
import { portfolio, processSteps, services, whyCards, type Service } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

function MotionBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={reveal}
      transition={{ duration: 0.82, ease }}
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
      <HeroSection />
      <ServiceSystemSection />
      <TurnkeyStatementSection />
      {services.map((service, index) => (
        <ServiceDetailSection key={service.slug} service={service} index={index} />
      ))}
      <ProcessRailSection />
      <PortfolioBentoSection />
      <WhySpacelytSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

function GradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="gradient-orb left-[-12rem] top-[8rem] h-[34rem] w-[34rem] from-[#ff2daa]/28 via-[#ff8a3d]/18 to-[#38bdf8]/20"
        animate={{ x: [0, 52, 0], y: [0, 34, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-orb right-[-10rem] top-[36rem] h-[30rem] w-[30rem] from-[#8b5cf6]/20 via-[#ff5c8a]/24 to-[#38bdf8]/18"
        animate={{ x: [0, -42, 0], y: [0, 60, 0], scale: [1, 0.94, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  );
}

function MagneticButton({
  children,
  href,
  variant = "primary"
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold shadow-soft transition ${
        variant === "primary"
          ? "bg-[linear-gradient(135deg,#111,#ff2daa_55%,#ff8a3d)] text-white"
          : "border border-black/10 bg-white/70 text-[var(--ink)] backdrop-blur-xl hover:border-pink-400/50"
      }`}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
      {variant === "primary" ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /> : null}
    </motion.a>
  );
}

function HeroSection() {
  const heroImages = [
    services[1],
    services[3],
    services[2],
    services[0]
  ];

  return (
    <section className="section-shell flex min-h-screen items-center overflow-hidden pt-10">
      <div className="content-grid relative z-20 grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <MotionBlock>
          <div className="technical-label mb-5 text-[#ff2daa]">SPACELYT / TURNKEY SPACE TRANSFORMATION</div>
          <h1 className="font-display text-balance text-[clamp(3.15rem,7vw,8.4rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
            One Partner.
            <br />
            <span className="gradient-text">Every Stage</span>
            <br />
            of Your Space.
          </h1>
          <p className="mt-7 max-w-2xl text-balance text-base leading-8 text-[var(--muted)] sm:text-lg">
            Spacelyt brings planning, architecture, construction, interiors, exteriors, and building solutions into one seamless turnkey experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#contact">Start Your Project</MagneticButton>
            <MagneticButton href="#services" variant="secondary">
              Explore Services <ArrowDown className="h-4 w-4" />
            </MagneticButton>
          </div>
        </MotionBlock>

        <MotionBlock className="relative min-h-[28rem] sm:min-h-[36rem] lg:min-h-[42rem]">
          <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-400/30 bg-white/30 shadow-[0_0_100px_rgba(255,45,170,.18)] backdrop-blur-2xl sm:h-[28rem] sm:w-[28rem]" />
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 560 560"
            className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 sm:h-[36rem] sm:w-[36rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="280" cy="280" r="230" className="fill-none stroke-[#ff2daa]/35 stroke-[1.5]" strokeDasharray="12 18" />
            <circle cx="280" cy="280" r="178" className="fill-none stroke-[#38bdf8]/25 stroke-[1]" />
          </motion.svg>
          <div className="absolute left-1/2 top-1/2 z-10 w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/70 bg-white/80 p-4 text-center shadow-glow backdrop-blur-2xl sm:w-[21rem] sm:p-5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white">
              <Layers3 className="h-7 w-7" />
            </div>
            <p className="mt-4 font-display text-xl font-semibold sm:mt-5 sm:text-2xl">Turnkey Delivery</p>
            <p className="mt-2 text-xs leading-5 text-[var(--muted)] sm:mt-3 sm:text-sm sm:leading-6">One coordinated studio from plan to handover.</p>
          </div>
          {heroImages.map((service, index) => (
            <FloatingHeroCard key={service.slug} service={service} index={index} />
          ))}
        </MotionBlock>
      </div>
    </section>
  );
}

function FloatingHeroCard({ service, index }: { service: Service; index: number }) {
  const positions = [
    "left-0 top-4 sm:top-8",
    "right-0 top-10 sm:right-2 sm:top-2",
    "left-4 bottom-4 hidden sm:block",
    "right-0 bottom-16 hidden sm:block"
  ];
  const Icon = service.icon;
  return (
    <motion.div
      className={`group absolute ${positions[index]} w-[11.5rem] overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/78 p-3 shadow-soft backdrop-blur-xl sm:w-[15.5rem]`}
      initial={{ opacity: 0, y: 28, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.28 + index * 0.12, duration: 0.72, ease }}
      whileHover={{ y: -8, rotate: index % 2 ? 1.4 : -1.4 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
        <Image src={service.image} alt={service.flowTitle} fill sizes="260px" className="image-depth object-cover" priority={index < 2} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/36 to-transparent" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="technical-label text-[#ff2daa]">S/{service.number}</p>
          <p className="font-display text-base font-semibold">{service.flowTitle}</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] text-white">
          <Icon className="h-4 w-4" />
        </span>
      </div>
    </motion.div>
  );
}

function ServiceSystemSection() {
  return (
    <section id="services" className="section-shell">
      <div className="content-grid">
        <div className="grid items-end gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <MotionBlock>
            <p className="technical-label text-[#ff2daa]">SERVICE SYSTEM</p>
            <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl">
              Six services.
              <br />
              <span className="gradient-text">One orbit.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
              A complete delivery system where planning, design, execution, and handover stay connected instead of becoming separate handoffs.
            </p>
          </MotionBlock>
          <div className="grid auto-rows-[13rem] gap-4 md:grid-cols-6">
            {services.map((service, index) => (
              <ServiceBentoCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBentoCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const spans = [
    "md:col-span-4",
    "md:col-span-2 md:row-span-2",
    "md:col-span-3",
    "md:col-span-3",
    "md:col-span-2",
    "md:col-span-4"
  ];
  return (
    <motion.a
      href={`#${service.slug}`}
      className={`group premium-card relative overflow-hidden rounded-[2rem] p-5 ${spans[index]}`}
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ delay: index * 0.07, duration: 0.7, ease }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,#ff2daa55,transparent_67%)] transition group-hover:scale-125" />
      <div className="absolute inset-0 opacity-[0.16]">
        <BlueprintArt type={service.art} />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-5">
          <span className="gradient-badge">0{index + 1}</span>
          <Icon className="h-7 w-7 text-[#ff2daa]" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">{service.flowTitle}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">{service.short}</p>
        </div>
      </div>
    </motion.a>
  );
}

function TurnkeyStatementSection() {
  return (
    <section className="section-shell flex items-center">
      <div className="content-grid">
        <MotionBlock className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/72 p-6 shadow-glow backdrop-blur-2xl sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,#ff2daa38,transparent_64%)]" />
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="technical-label text-[#ff2daa]">TURNKEY STATEMENT</p>
              <h2 className="font-display mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl">
                Not just design.
                <br />
                <span className="gradient-text">Complete project delivery.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
                From first consultation to final handover, every stage is coordinated by one team.
              </p>
            </div>
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem]">
              <Image src={services[3].image} alt="Interior delivery preview" fill sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/82 via-white/42 to-[#ff2daa]/18" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {["Plan", "Design", "Build", "Deliver"].map((item, index) => (
                    <div key={item} className="relative rounded-2xl bg-white/74 p-4 text-center">
                      <span className="mx-auto mb-3 block h-2 w-2 rounded-full bg-[linear-gradient(135deg,#ff2daa,#38bdf8)] shadow-[0_0_18px_rgba(255,45,170,.6)]" />
                      <p className="font-display text-sm font-semibold">{item}</p>
                      {index < 3 ? <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#ff2daa] sm:block" /> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function ServiceDetailSection({ service, index }: { service: Service; index: number }) {
  const variants = [
    PlanningLayout,
    ArchitectureLayout,
    ConstructionLayout,
    InteriorLayout,
    ExteriorLayout,
    SolutionsLayout
  ];
  const Layout = variants[index] ?? PlanningLayout;
  return <Layout service={service} index={index} />;
}

function ServiceShell({
  service,
  index,
  children,
  className = ""
}: {
  service: Service;
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={service.slug} className={`section-shell flex items-center ${className}`}>
      <div className="content-grid">{children}</div>
    </section>
  );
}

function ImagePanel({ service, className = "" }: { service: Service; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[2rem] shadow-soft ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-8 inset-x-0">
        <Image src={service.image} alt={`${service.flowTitle} reference`} fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/10" />
    </div>
  );
}

function BulletCloud({ service }: { service: Service }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {service.bullets.map((bullet) => (
        <div key={bullet} className="flex items-center gap-3 rounded-full border border-black/8 bg-white/70 px-4 py-3 text-sm shadow-[0_12px_35px_rgba(17,17,17,.05)] backdrop-blur-xl">
          <Check className="h-4 w-4 text-[#ff2daa]" />
          {bullet}
        </div>
      ))}
    </div>
  );
}

function PlanningLayout({ service, index }: { service: Service; index: number }) {
  return (
    <ServiceShell service={service} index={index}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
        <MotionBlock>
          <p className="technical-label text-[#ff2daa]">SERVICE 01 / BLUEPRINT PHASE</p>
          <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            Planning that plots the whole project.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{service.short}</p>
          <div className="relative mt-9 rounded-[2rem] border border-pink-300/30 bg-white/62 p-5 shadow-soft backdrop-blur-xl">
            <BlueprintArt type="planning" />
            <BulletCloud service={service} />
          </div>
        </MotionBlock>
        <MotionBlock className="relative">
          <ImagePanel service={service} className="h-[34rem]" />
          <span className="absolute -bottom-5 left-8 rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] px-5 py-3 text-sm font-semibold text-white shadow-glow">Feasibility mapped first</span>
        </MotionBlock>
      </div>
    </ServiceShell>
  );
}

function ArchitectureLayout({ service, index }: { service: Service; index: number }) {
  return (
    <ServiceShell service={service} index={index}>
      <div className="grid items-center gap-8 lg:grid-cols-[.42fr_1fr]">
        <MotionBlock className="hidden lg:block">
          <p className="font-display text-[8rem] font-semibold leading-none tracking-[-0.07em] text-black/[0.04] [writing-mode:vertical-rl]">ARCHITECTURE</p>
        </MotionBlock>
        <div className="grid gap-8 lg:grid-cols-[.92fr_1.08fr]">
          <MotionBlock>
            <p className="technical-label text-[#8b5cf6]">SERVICE 02 / FORM + FUNCTION</p>
            <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">{service.title}</h2>
            <p className="mt-6 text-base leading-8 text-[var(--muted)]">{service.short}</p>
            <div className="mt-8">
              <BulletCloud service={service} />
            </div>
          </MotionBlock>
          <MotionBlock className="premium-card relative min-h-[34rem] overflow-hidden rounded-[2.25rem] p-4">
            <ImagePanel service={service} className="absolute inset-4" />
            <BlueprintArt type="architecture" />
          </MotionBlock>
        </div>
      </div>
    </ServiceShell>
  );
}

function ConstructionLayout({ service, index }: { service: Service; index: number }) {
  const stages = ["Site", "Structure", "Finishing", "Handover"];
  return (
    <ServiceShell service={service} index={index}>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
        <MotionBlock>
          <p className="technical-label text-[#ff8a3d]">SERVICE 03 / SITE EXECUTION</p>
          <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">Construction managed like a live progress system.</h2>
          <div className="mt-10 space-y-4">
            {stages.map((stage, stageIndex) => (
              <div key={stage} className="grid grid-cols-[3.5rem_1fr] items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8a3d,#ff2daa)] font-mono text-xs text-white shadow-glow">{stageIndex + 1}</span>
                <div className="rounded-[1.5rem] border border-black/8 bg-white/68 p-5 shadow-soft backdrop-blur-xl">
                  <h3 className="font-display text-xl font-semibold">{stage}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{service.bullets[stageIndex]} coordinated with timeline control and quality review.</p>
                </div>
              </div>
            ))}
          </div>
        </MotionBlock>
        <MotionBlock className="relative">
          <ImagePanel service={service} className="h-[38rem]" />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/70 bg-white/72 p-5 backdrop-blur-xl">
            <p className="technical-label text-[#ff2daa]">LIVE SITE CONTROL</p>
            <p className="mt-2 font-display text-2xl font-semibold">Civil, vendor, material, and quality checks in one loop.</p>
          </div>
        </MotionBlock>
      </div>
    </ServiceShell>
  );
}

function InteriorLayout({ service, index }: { service: Service; index: number }) {
  return (
    <ServiceShell service={service} index={index}>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <MotionBlock className="relative min-h-[42rem] overflow-hidden rounded-[2.5rem]">
          <Image src={service.image} alt={service.flowTitle} fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-white/8" />
          <div className="absolute bottom-7 left-7 right-7 rounded-[1.8rem] border border-white/70 bg-white/76 p-6 shadow-soft backdrop-blur-2xl">
            <p className="technical-label text-[#ff2daa]">SERVICE 04 / MATERIAL STORY</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Interior Design That Feels Personal and Premium</h2>
          </div>
          <div className="absolute right-6 top-6 grid gap-3">
            {["Marble", "Wood", "Fabric"].map((item, itemIndex) => (
              <span key={item} className={`rounded-full px-4 py-2 text-xs font-semibold shadow-soft ${itemIndex === 0 ? "bg-white" : itemIndex === 1 ? "bg-[#ff8a3d]/85 text-white" : "bg-[#ff2daa]/85 text-white"}`}>{item}</span>
            ))}
          </div>
        </MotionBlock>
        <MotionBlock className="flex flex-col justify-center">
          <p className="text-xl leading-9 text-[var(--muted)]">{service.short}</p>
          <div className="mt-9">
            <BulletCloud service={service} />
          </div>
        </MotionBlock>
      </div>
    </ServiceShell>
  );
}

function ExteriorLayout({ service, index }: { service: Service; index: number }) {
  return (
    <ServiceShell service={service} index={index}>
      <div className="space-y-8">
        <MotionBlock className="grid items-end gap-6 lg:grid-cols-[1fr_.72fr]">
          <div>
            <p className="technical-label text-[#38bdf8]">SERVICE 05 / ELEVATION + LIGHT</p>
            <h2 className="font-display mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">{service.title}</h2>
          </div>
          <p className="text-base leading-8 text-[var(--muted)]">{service.short}</p>
        </MotionBlock>
        <MotionBlock className="premium-card relative min-h-[32rem] overflow-hidden rounded-[2.5rem] p-4">
          <ImagePanel service={service} className="absolute inset-4" />
          <BlueprintArt type="exterior" />
          <motion.div
            aria-hidden="true"
            className="absolute right-16 top-12 h-24 w-24 rounded-full bg-[radial-gradient(circle,#fff,#ff8a3d_38%,transparent_70%)] opacity-70 blur-sm"
            animate={{ x: [0, -42, 0], y: [0, 28, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </MotionBlock>
        <BulletCloud service={service} />
      </div>
    </ServiceShell>
  );
}

function SolutionsLayout({ service, index }: { service: Service; index: number }) {
  return (
    <ServiceShell service={service} index={index}>
      <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <MotionBlock>
          <p className="technical-label text-[#ff2daa]">SERVICE 06 / FINAL HANDOVER</p>
          <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">{service.title}</h2>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">{service.short}</p>
          <div className="mt-8 inline-flex rounded-full bg-[linear-gradient(135deg,#ff2daa,#8b5cf6,#38bdf8)] p-px">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-semibold">End-to-End Delivery</span>
          </div>
        </MotionBlock>
        <MotionBlock className="premium-card relative min-h-[36rem] overflow-hidden rounded-[2.5rem] p-8">
          <ImagePanel service={service} className="absolute inset-6" />
          <div className="absolute inset-0 bg-white/42" />
          <div className="relative z-10 grid h-full content-center gap-4">
            {services.map((item, itemIndex) => (
              <div key={item.slug} className="flex items-center gap-4 rounded-full border border-white/80 bg-white/74 p-3 shadow-soft backdrop-blur-xl">
                <span className="h-2 w-16 rounded-full bg-[linear-gradient(90deg,#ff2daa,#ff8a3d,#38bdf8)]" />
                <span className="font-display text-lg font-semibold">{item.flowTitle}</span>
                <span className="ml-auto font-mono text-xs text-[var(--muted)]">0{itemIndex + 1}</span>
              </div>
            ))}
          </div>
        </MotionBlock>
      </div>
    </ServiceShell>
  );
}

function ProcessRailSection() {
  return (
    <section className="section-shell">
      <div className="content-grid">
        <MotionBlock className="mx-auto max-w-4xl text-center">
          <p className="technical-label text-[#ff2daa]">TURNKEY JOURNEY RAIL</p>
          <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">A seamless path from consult to handover.</h2>
        </MotionBlock>
        <div className="relative mt-14 grid gap-4 lg:grid-cols-6">
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-1 rounded-full bg-[linear-gradient(90deg,#ff2daa,#ff8a3d,#8b5cf6,#38bdf8)] lg:block"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.4, ease }}
          />
          {processSteps.map((step, index) => (
            <MotionBlock key={step} className="relative rounded-[1.75rem] border border-white/70 bg-white/72 p-5 shadow-soft backdrop-blur-xl">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff2daa,#38bdf8)] font-mono text-xs font-semibold text-white shadow-glow">{index + 1}</span>
              <h3 className="font-display mt-7 text-2xl font-semibold">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{["Understand the vision.", "Plot scope and budget.", "Resolve the design language.", "Select material systems.", "Coordinate site execution.", "Deliver the finished space."][index]}</p>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioBentoSection() {
  const [active, setActive] = useState("Residential");
  const filters = ["Residential", "Commercial", "Interiors", "Exteriors", "Construction"];
  const visibleProjects = portfolio.filter((project) => project.categories.includes(active));
  return (
    <section className="section-shell">
      <div className="content-grid">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <MotionBlock className="max-w-4xl">
            <p className="technical-label text-[#ff2daa]">PORTFOLIO</p>
            <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">Featured spaces, framed with delivery intent.</h2>
          </MotionBlock>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active === filter
                    ? "bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] text-white shadow-glow"
                    : "border border-black/8 bg-white/68 text-[var(--muted)] hover:border-pink-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid auto-rows-[18rem] gap-5 lg:grid-cols-4">
          {visibleProjects.map((project, index) => (
            <MotionBlock key={project.name} className={`group relative overflow-hidden rounded-[2rem] shadow-soft ${index === 0 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-2"}`}>
              <Image src={project.image} alt={project.name} fill sizes="(min-width: 1024px) 48vw, 92vw" className="image-depth object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-[linear-gradient(135deg,#ff2daa,#8b5cf6)] px-4 py-2 text-xs font-semibold text-white shadow-glow">{project.type}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-3xl font-semibold tracking-[-0.03em]">{project.name}</h3>
                <p className="mt-2 max-w-md translate-y-2 text-sm opacity-0 transition group-hover:translate-y-0 group-hover:opacity-90">{project.scope}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySpacelytSection() {
  const metrics = [
    ["6", "core services"],
    ["1", "dedicated project partner"],
    ["100%", "turnkey coordination"]
  ];
  return (
    <section className="section-shell">
      <div className="content-grid">
        <MotionBlock className="max-w-4xl">
          <p className="technical-label text-[#ff2daa]">WHY SPACELYT</p>
          <h2 className="font-display mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">Premium execution feels calm because the system is clear.</h2>
        </MotionBlock>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {whyCards.slice(0, 3).map((card, index) => (
            <MotionBlock key={card} className="premium-card rounded-[2rem] p-7">
              <span className="gradient-badge">0{index + 1}</span>
              <h3 className="font-display mt-14 text-3xl font-semibold tracking-[-0.03em]">{card}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{whyCards[index + 3]}</p>
            </MotionBlock>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {metrics.map(([value, label]) => (
            <MotionBlock key={label} className="rounded-[2rem] border border-white/70 bg-white/72 p-7 shadow-soft backdrop-blur-xl">
              <p className="gradient-text font-display text-6xl font-semibold tracking-[-0.05em]">{value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section id="contact" className="section-shell flex items-center">
      <div className="content-grid">
        <MotionBlock className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/78 px-6 py-20 text-center shadow-glow backdrop-blur-2xl sm:px-12 lg:py-28">
          <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ff2daa35,#ff8a3d18,transparent_68%)]" />
          <Sparkles className="relative z-10 mx-auto h-10 w-10 text-[#ff2daa]" strokeWidth={1.35} />
          <h2 className="relative z-10 mx-auto mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl">Let&apos;s Build Your Dream Space.</h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-[var(--muted)]">
            Share your vision with Spacelyt. We&apos;ll plan, design, execute, and deliver it as one complete turnkey project.
          </p>
          <div className="relative z-10 mt-9">
            <MagneticButton href="mailto:hello@spacelyt.com">Start Your Project</MagneticButton>
          </div>
        </MotionBlock>
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
        <FooterList title="Studio" items={["Process", "Portfolio", "Why Spacelyt", "Consultation"]} />
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
