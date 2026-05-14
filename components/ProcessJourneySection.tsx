"use client";

import { useState } from "react";
import { ArrowRight, ClipboardList, HardHat, KeyRound, MessagesSquare, PenTool, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const SERVICE_CTA_EVENT = "spacelyt:open-service-consultation";

function openStartProjectPopup() {
  window.dispatchEvent(
    new CustomEvent(SERVICE_CTA_EVENT, {
      detail: { serviceName: "Building Solutions", serviceSlug: "building-solutions" }
    })
  );
}

type ProcessStep = {
  title: string;
  shortTitle: string;
  description: string;
  label: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    shortTitle: "Consult",
    label: "Project brief",
    description: "We understand your site, budget, goals, lifestyle, timeline, and expected outcome before shaping the project route.",
    icon: MessagesSquare
  },
  {
    title: "Site & Scope Planning",
    shortTitle: "Plan",
    label: "Blueprint base",
    description: "Measurements, feasibility, service requirements, and budget direction are mapped so the work starts with clarity.",
    icon: ClipboardList
  },
  {
    title: "Design Direction",
    shortTitle: "Design",
    label: "Visual system",
    description: "Planning, architecture, interiors, exterior language, and material intent are resolved as one buildable direction.",
    icon: PenTool
  },
  {
    title: "Execution & Quality Checks",
    shortTitle: "Execute",
    label: "Site control",
    description: "Site progress, civil work, vendor coordination, procurement, finishing, and quality reviews move through one team.",
    icon: HardHat
  },
  {
    title: "Final Handover",
    shortTitle: "Handover",
    label: "Project close",
    description: "We close the project with final checks, delivery support, and a clear handover path for the completed space.",
    icon: KeyRound
  }
];

const nodePositions = [
  { left: "10%", top: "55%" },
  { left: "29%", top: "22%" },
  { left: "50%", top: "10%" },
  { left: "71%", top: "22%" },
  { left: "90%", top: "55%" }
];

export default function ProcessJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const activeStep = processSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="process" className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,45,170,.12),transparent_28%),radial-gradient(circle_at_74%_70%,rgba(56,189,248,.13),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.34] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="technical-label text-[#ff2daa]">Process</p>
            <h2 className="mt-3 max-w-4xl font-display text-[clamp(2.7rem,7vw,5.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              A Clear Journey From Idea to Handover
            </h2>
          </div>
          <motion.button
            type="button"
            onClick={openStartProjectPopup}
            className="hidden min-h-12 items-center justify-center gap-3 rounded-full bg-white/82 px-6 text-sm font-semibold text-[var(--ink)] shadow-soft backdrop-blur-xl md:inline-flex"
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="mt-8 hidden min-h-[34rem] rounded-[3rem] border border-white/76 bg-white/48 p-8 shadow-glow backdrop-blur-2xl lg:block">
          <div className="relative h-[30rem]">
            <ProcessConnector activeIndex={activeIndex} />

            <motion.div
              key={activeStep.title}
              className="absolute left-1/2 top-[61%] z-20 w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/85 bg-white/90 p-6 text-center shadow-soft backdrop-blur-xl"
              initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.42, ease }}
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white shadow-glow">
                <ActiveIcon className="h-7 w-7" />
              </span>
              <p className="technical-label mt-5 text-[#ff2daa]">Step {String(activeIndex + 1).padStart(2, "0")} / {activeStep.label}</p>
              <h3 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em]">{activeStep.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{activeStep.description}</p>
            </motion.div>

            {processSteps.map((step, index) => (
              <ProcessNode
                key={step.title}
                step={step}
                index={index}
                active={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-7 lg:hidden">
          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {processSteps.map((step, index) => (
              <MobileProcessNode
                key={step.title}
                step={step}
                index={index}
                active={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <motion.div
            key={activeStep.title}
            className="mt-4 rounded-[2rem] border border-white/78 bg-white/86 p-5 shadow-soft backdrop-blur-xl"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease }}
          >
            <p className="technical-label text-[#ff2daa]">Step {String(activeIndex + 1).padStart(2, "0")} / {activeStep.label}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.04em]">{activeStep.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{activeStep.description}</p>
          </motion.div>

          <button
            type="button"
            onClick={openStartProjectPopup}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-6 text-sm font-semibold text-white shadow-glow"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProcessConnector({ activeIndex }: { activeIndex: number }) {
  const progress = activeIndex / (processSteps.length - 1);

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 1180 480" fill="none" preserveAspectRatio="none">
      <path
        d="M112 264 C248 82 350 82 462 52 C590 38 642 58 724 76 C848 102 952 96 1062 264"
        stroke="rgba(17,17,17,.12)"
        strokeWidth="1.5"
      />
      <motion.path
        d="M112 264 C248 82 350 82 462 52 C590 38 642 58 724 76 C848 102 952 96 1062 264"
        stroke="url(#process-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.62, ease }}
      />
      <defs>
        <linearGradient id="process-gradient" x1="112" y1="232" x2="1062" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff2daa" />
          <stop offset="0.55" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ProcessNode({
  step,
  index,
  active,
  onActivate
}: {
  step: ProcessStep;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = step.icon;
  const position = nodePositions[index];

  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`absolute z-30 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-[#ff2daa]/50 ${
        active
          ? "border-white bg-white text-[var(--ink)] shadow-glow"
          : "border-white/72 bg-white/68 text-[var(--ink)] shadow-soft hover:bg-white/90"
      }`}
      style={position}
      initial={{ opacity: 0, scale: 0.86, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.52, delay: index * 0.13, ease }}
    >
      <span className={`mb-2 flex h-11 w-11 items-center justify-center rounded-2xl transition ${
        active ? "bg-[linear-gradient(135deg,#ff2daa,#ff8a3d)] text-white" : "bg-white text-[#ff2daa]"
      }`}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
      <span className="mt-1 max-w-24 text-sm font-semibold leading-tight">{step.shortTitle}</span>
    </motion.button>
  );
}

function MobileProcessNode({
  step,
  index,
  active,
  onActivate
}: {
  step: ProcessStep;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = step.icon;

  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={onActivate}
      className={`flex h-32 w-32 shrink-0 snap-start flex-col items-center justify-center rounded-full border text-center backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-[#ff2daa]/50 ${
        active ? "border-white bg-white shadow-glow" : "border-white/72 bg-white/72 shadow-soft"
      }`}
      initial={{ opacity: 0, scale: 0.88, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileTap={{ scale: 0.96 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay: index * 0.1, ease }}
    >
      <span className={`mb-2 flex h-10 w-10 items-center justify-center rounded-2xl ${
        active ? "bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)] text-white" : "bg-white text-[#ff2daa]"
      }`}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
      <span className="mt-1 max-w-24 text-sm font-semibold leading-tight">{step.shortTitle}</span>
    </motion.button>
  );
}
