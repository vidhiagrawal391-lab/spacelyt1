"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  KeyRound,
  Layers3,
  type LucideIcon,
  UsersRound
} from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const SERVICE_CTA_EVENT = "spacelyt:open-service-consultation";

function openStartProjectPopup() {
  window.dispatchEvent(
    new CustomEvent(SERVICE_CTA_EVENT, {
      detail: { serviceName: "Full Turnkey", serviceSlug: "building-solutions" }
    })
  );
}

type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  visual: string;
};

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Clarity Before Work Starts",
    description: "We define scope, budget direction, site needs, and service requirements before execution begins.",
    icon: Compass,
    visual: "Blueprint phase"
  },
  {
    title: "Design + Execution Together",
    description: "Our planning, architecture, interiors, construction, and exterior teams work as one flow, not disconnected vendors.",
    icon: Layers3,
    visual: "Integrated studio"
  },
  {
    title: "One Accountable Team",
    description: "Instead of managing multiple contractors, clients get one coordinated Spacelyt team from concept to completion.",
    icon: UsersRound,
    visual: "Single project partner"
  },
  {
    title: "Quality Checks at Every Stage",
    description: "From material coordination to execution reviews, the project is checked across key stages before handover.",
    icon: ClipboardCheck,
    visual: "Site review path"
  },
  {
    title: "Handover Support",
    description: "We stay involved until the final handover so the project closes with clarity, finish, and confidence.",
    icon: KeyRound,
    visual: "Final handover"
  }
];

const trustBadges = [
  "6 Core Services",
  "1 Coordinated Team",
  "Concept to Handover",
  "Planning + Design + Build",
  "Residential & Commercial"
];

const nodePositions = [
  { x: 350, y: 74 },
  { x: 216, y: 194 },
  { x: 378, y: 314 },
  { x: 204, y: 434 },
  { x: 348, y: 554 }
];

export default function WhyChooseSpacelyt() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 38%"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reduced) return;
    const nextIndex = Math.min(whyChooseItems.length - 1, Math.max(0, Math.round(latest * (whyChooseItems.length - 1))));
    setActiveIndex(nextIndex);
  });

  const activeItem = whyChooseItems[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section
      ref={sectionRef}
      id="why-spacelyt"
      className="relative overflow-hidden px-4 py-14 sm:px-6 lg:min-h-dvh lg:px-10 lg:py-16"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,45,170,.13),transparent_28%),radial-gradient(circle_at_86%_74%,rgba(56,189,248,.14),transparent_32%),linear-gradient(180deg,rgba(250,247,245,.72),rgba(255,255,255,.94))]" />
        <div className="absolute inset-0 opacity-[0.34] bg-[linear-gradient(rgba(17,17,17,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.05)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <motion.div
          className="absolute left-[8%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,.12),transparent_66%)] blur-3xl"
          animate={reduced ? undefined : { x: [0, 28, 0], y: [0, 18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 lg:min-h-[calc(100dvh-8rem)] lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <motion.div
          className="lg:sticky lg:top-24"
          initial={reduced ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="technical-label text-[#ff2daa]">Turnkey advantage</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.06em] text-[var(--ink)]">
            Why Choose Spacelyt
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
            One coordinated team for planning, design, execution, quality checks, and final handover.
          </p>

          <motion.div
            key={activeItem.title}
            className="mt-8 hidden overflow-hidden rounded-[2rem] border border-white/80 bg-white/82 p-5 shadow-soft backdrop-blur-xl lg:block"
            initial={reduced ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.42, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white shadow-glow">
                <ActiveIcon className="h-5 w-5" />
              </span>
              <span className="technical-label text-[var(--muted)]">{activeItem.visual}</span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.04em]">
              {activeItem.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
              {activeItem.description}
            </p>
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={badge} label={badge} index={index} />
            ))}
          </div>

          <motion.button
            type="button"
            onClick={openStartProjectPopup}
            className="mt-8 hidden min-h-12 items-center justify-center gap-3 rounded-full bg-[#111] px-6 text-sm font-semibold text-white shadow-soft transition lg:inline-flex"
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>

        <div className="relative hidden min-h-[42rem] lg:block">
          <div className="absolute inset-0 rounded-[3rem] border border-white/75 bg-white/56 shadow-glow backdrop-blur-2xl" />
          <div aria-hidden="true" className="absolute inset-5 overflow-hidden rounded-[2.45rem]">
            <motion.div
              className="absolute inset-0 opacity-[0.42] bg-[linear-gradient(90deg,rgba(17,17,17,.08)_1px,transparent_1px),linear-gradient(rgba(17,17,17,.08)_1px,transparent_1px)] bg-[size:42px_42px]"
              animate={reduced ? undefined : { y: [0, -22, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute left-10 top-10 h-36 w-52 rounded-[2rem] border border-black/10" />
            <div className="absolute bottom-12 right-10 h-44 w-64 rounded-[2.4rem] border border-black/10" />
            <div className="absolute left-20 top-48 h-36 w-px rotate-45 bg-black/10" />
            <div className="absolute right-32 top-24 h-48 w-px -rotate-12 bg-[#ff2daa]/22" />
          </div>

          <AnimatedConnector activeIndex={activeIndex} />

          {whyChooseItems.map((item, index) => (
            <BenefitNode
              key={item.title}
              item={item}
              index={index}
              active={index === activeIndex}
              onActivate={() => setActiveIndex(index)}
            />
          ))}

          <motion.div
            key={activeItem.visual}
            aria-hidden="true"
            className="absolute left-10 top-10 w-64 rounded-[2rem] border border-white/80 bg-white/76 p-5 shadow-soft backdrop-blur-xl"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <p className="technical-label text-[#ff2daa]">Active stage</p>
            <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em]">{String(activeIndex + 1).padStart(2, "0")}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{activeItem.visual}</p>
          </motion.div>
        </div>

        <div className="space-y-4 lg:hidden">
          {whyChooseItems.map((item, index) => (
            <MobileBenefitItem key={item.title} item={item} index={index} />
          ))}
          <button
            type="button"
            onClick={openStartProjectPopup}
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#111] px-6 text-sm font-semibold text-white"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function AnimatedConnector({ activeIndex }: { activeIndex: number }) {
  const progress = activeIndex / (whyChooseItems.length - 1);

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 672" fill="none" aria-hidden="true">
      <path
        d="M442 76 C290 112 258 156 262 196 C270 264 466 244 474 318 C482 391 244 364 250 438 C256 506 398 502 438 554"
        stroke="rgba(17,17,17,.12)"
        strokeWidth="1.5"
      />
      <motion.path
        d="M442 76 C290 112 258 156 262 196 C270 264 466 244 474 318 C482 391 244 364 250 438 C256 506 398 502 438 554"
        stroke="url(#why-line-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.55, ease }}
      />
      <defs>
        <linearGradient id="why-line-gradient" x1="230" y1="70" x2="510" y2="560" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff2daa" />
          <stop offset="0.48" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BenefitNode({
  item,
  index,
  active,
  onActivate
}: {
  item: WhyChooseItem;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = item.icon;
  const position = nodePositions[index];

  return (
    <motion.button
      type="button"
      aria-pressed={active}
      aria-current={active ? "step" : undefined}
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`absolute flex w-[20rem] items-center gap-4 rounded-[1.7rem] border p-4 text-left backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-[#ff2daa]/50 ${
        active
          ? "border-white bg-white/92 shadow-glow"
          : "border-white/70 bg-white/66 shadow-soft hover:bg-white/86"
      }`}
      style={{ left: position.x, top: position.y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.985 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease }}
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
        active ? "bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] text-white" : "bg-white text-[#ff2daa]"
      }`}>
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
        <span className="mt-1 block font-display text-xl font-semibold leading-tight tracking-[-0.03em]">{item.title}</span>
      </span>
    </motion.button>
  );
}

function TrustBadge({ label, index }: { label: string; index: number }) {
  return (
    <motion.span
      className="rounded-full border border-black/6 bg-white/76 px-4 py-2 text-xs font-semibold text-[var(--ink)] shadow-[0_12px_34px_rgba(17,17,17,.06)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.42, delay: index * 0.05, ease }}
    >
      {label}
    </motion.span>
  );
}

function MobileBenefitItem({ item, index }: { item: WhyChooseItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="relative overflow-hidden rounded-[1.7rem] border border-white/75 bg-white/82 p-5 shadow-soft backdrop-blur-xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease }}
    >
      <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,45,170,.18),transparent_68%)]" />
      <div className="relative flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="technical-label text-[#ff2daa]">Step {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.04em]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
