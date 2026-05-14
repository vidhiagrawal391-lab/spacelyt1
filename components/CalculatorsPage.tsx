"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, ChevronRight, Home, IndianRupee, Layers3, MapPin, PackageCheck, Ruler, Sofa, type LucideIcon } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const FLOATING_CALLBACK_EVENT = "spacelyt:open-floating-callback";

type CalculatorType = "home" | "kitchen" | "wardrobe";
type Finish = "essential" | "premium" | "luxury";
type Estimate = {
  total: number;
  low: number;
  high: number;
  rows: [string, number][];
};

const cityMultipliers: Record<string, number> = {
  Bengaluru: 1.08,
  Mumbai: 1.16,
  Delhi: 1.1,
  Hyderabad: 1.04,
  Pune: 1.02,
  Chennai: 1.03,
  Kolkata: 0.96,
  Jaipur: 0.92
};

const finishOptions: Record<Finish, { label: string; multiplier: number; description: string }> = {
  essential: { label: "Essential", multiplier: 0.9, description: "Functional modular work with durable standard finishes." },
  premium: { label: "Premium", multiplier: 1.15, description: "Better finishes, richer hardware, and more storage detailing." },
  luxury: { label: "Luxury", multiplier: 1.42, description: "High-end finishes, statement details, lighting, and custom features." }
};

const calculatorTabs: { id: CalculatorType; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Full Home", icon: Home },
  { id: "kitchen", label: "Kitchen", icon: Layers3 },
  { id: "wardrobe", label: "Wardrobe", icon: PackageCheck }
];

const roomRates = {
  kitchen: 210000,
  bedroom: 175000,
  living: 160000,
  dining: 90000,
  foyer: 65000,
  falseCeiling: 105,
  lighting: 72
};

function currency(value: number) {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(value >= 1000000 ? 1 : 2)}L`;
  }

  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export default function CalculatorsPage() {
  const [activeType, setActiveType] = useState<CalculatorType>("home");
  const [city, setCity] = useState("Bengaluru");
  const [bhk, setBhk] = useState(2);
  const [area, setArea] = useState(1050);
  const [finish, setFinish] = useState<Finish>("premium");
  const [rooms, setRooms] = useState({
    kitchen: true,
    living: true,
    dining: false,
    foyer: false,
    falseCeiling: true,
    lighting: true
  });
  const [kitchenSize, setKitchenSize] = useState(90);
  const [kitchenShape, setKitchenShape] = useState("L-shaped");
  const [wardrobeWidth, setWardrobeWidth] = useState(8);
  const [wardrobeCount, setWardrobeCount] = useState(2);

  const estimate = useMemo<Estimate>(() => {
    const cityFactor = cityMultipliers[city] ?? 1;
    const finishFactor = finishOptions[finish].multiplier;

    if (activeType === "kitchen") {
      const shapeFactor = kitchenShape === "Island" ? 1.36 : kitchenShape === "U-shaped" ? 1.2 : kitchenShape === "Parallel" ? 1.12 : 1;
      const base = kitchenSize * 3350 * shapeFactor * cityFactor * finishFactor;
      return {
        total: base,
        low: base * 0.88,
        high: base * 1.16,
        rows: [
          ["Base and wall cabinets", base * 0.46],
          ["Countertop and dado", base * 0.22],
          ["Hardware and accessories", base * 0.18],
          ["Installation and finishing", base * 0.14]
        ]
      };
    }

    if (activeType === "wardrobe") {
      const base = wardrobeWidth * wardrobeCount * 24500 * cityFactor * finishFactor;
      return {
        total: base,
        low: base * 0.9,
        high: base * 1.18,
        rows: [
          ["Wardrobe carcass", base * 0.38],
          ["Shutters and finish", base * 0.3],
          ["Internal accessories", base * 0.2],
          ["Delivery and installation", base * 0.12]
        ]
      };
    }

    const selectedRoomCost =
      (rooms.kitchen ? roomRates.kitchen : 0) +
      bhk * roomRates.bedroom +
      (rooms.living ? roomRates.living : 0) +
      (rooms.dining ? roomRates.dining : 0) +
      (rooms.foyer ? roomRates.foyer : 0) +
      (rooms.falseCeiling ? area * roomRates.falseCeiling : 0) +
      (rooms.lighting ? area * roomRates.lighting : 0);
    const areaBase = area * (bhk >= 4 ? 930 : bhk === 3 ? 860 : bhk === 2 ? 780 : 690);
    const base = (selectedRoomCost + areaBase) * cityFactor * finishFactor;

    return {
      total: base,
      low: base * 0.86,
      high: base * 1.15,
      rows: [
        ["Modular kitchen", rooms.kitchen ? roomRates.kitchen * cityFactor * finishFactor : 0],
        ["Bedroom wardrobes", bhk * roomRates.bedroom * cityFactor * finishFactor],
        ["Living and storage units", (rooms.living ? roomRates.living : 0) * cityFactor * finishFactor],
        ["Ceiling, lighting, and finishes", ((rooms.falseCeiling ? area * roomRates.falseCeiling : 0) + (rooms.lighting ? area * roomRates.lighting : 0)) * cityFactor * finishFactor]
      ]
    };
  }, [activeType, area, bhk, city, finish, kitchenShape, kitchenSize, rooms, wardrobeCount, wardrobeWidth]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <aside className="rounded-[2rem] border border-white/75 bg-white/78 p-5 shadow-glow backdrop-blur-2xl lg:sticky lg:top-24 lg:p-7">
            <p className="technical-label text-[#ff2daa]">Spacelyt Calculators</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">
              Estimate before you build.
            </h1>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Plan a practical budget for full home interiors, kitchens, and wardrobes with city, scope, size, and finish choices.
            </p>

            <div className="mt-7 grid gap-2 rounded-[1.35rem] bg-[#111] p-2 text-white sm:grid-cols-3">
              {calculatorTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeType === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveType(tab.id)}
                    className={`flex min-h-12 items-center justify-center gap-2 rounded-[1rem] px-3 text-sm font-semibold transition ${isActive ? "bg-white text-[#111]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 rounded-[1.5rem] bg-white p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0f8] text-[#ff2daa]">
                  <IndianRupee className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--muted)]">Estimated range</p>
                  <p className="font-display text-3xl font-semibold tracking-[-0.04em]">{currency(estimate.low)} - {currency(estimate.high)}</p>
                </div>
              </div>
              <div className="mt-5 h-2 rounded-full bg-[#f1e8ea]">
                <div className="h-2 w-[72%] rounded-full bg-[linear-gradient(135deg,#ff2daa,#ff8a3d,#38bdf8)]" />
              </div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent(FLOATING_CALLBACK_EVENT))}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#111] px-5 text-sm font-semibold text-white"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>

          <div className="space-y-4">
            <CalculatorPanel title="1. Select location and finish" icon={MapPin}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold">City</span>
                  <select value={city} onChange={(event) => setCity(event.target.value)} className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff2daa]">
                    {Object.keys(cityMultipliers).map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <div>
                  <span className="text-sm font-semibold">Finish package</span>
                  <div className="mt-2 grid gap-2 sm:grid-cols-3">
                    {(Object.keys(finishOptions) as Finish[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFinish(option)}
                        className={`min-h-12 rounded-2xl border px-3 text-sm font-semibold transition ${finish === option ? "border-[#ff2daa] bg-[#fff0f8] text-[#8f0f58]" : "border-black/8 bg-white text-[var(--muted)] hover:text-[var(--ink)]"}`}
                      >
                        {finishOptions[option].label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{finishOptions[finish].description}</p>
            </CalculatorPanel>

            {activeType === "home" ? (
              <CalculatorPanel title="2. Share your home details" icon={Home}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Stepper label="BHK type" value={bhk} min={1} max={5} suffix="BHK" onChange={setBhk} />
                  <NumberInput label="Carpet area" value={area} min={350} max={5000} step={50} suffix="sq ft" onChange={setArea} />
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["kitchen", "Modular kitchen"],
                    ["living", "Living room"],
                    ["dining", "Dining unit"],
                    ["foyer", "Foyer storage"],
                    ["falseCeiling", "False ceiling"],
                    ["lighting", "Lighting plan"]
                  ].map(([key, label]) => (
                    <Toggle key={key} label={label} active={rooms[key as keyof typeof rooms]} onClick={() => setRooms((current) => ({ ...current, [key]: !current[key as keyof typeof rooms] }))} />
                  ))}
                </div>
              </CalculatorPanel>
            ) : null}

            {activeType === "kitchen" ? (
              <CalculatorPanel title="2. Configure kitchen scope" icon={Ruler}>
                <div className="grid gap-4 md:grid-cols-2">
                  <NumberInput label="Kitchen size" value={kitchenSize} min={45} max={260} step={5} suffix="sq ft" onChange={setKitchenSize} />
                  <label className="space-y-2">
                    <span className="text-sm font-semibold">Layout</span>
                    <select value={kitchenShape} onChange={(event) => setKitchenShape(event.target.value)} className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff2daa]">
                      {["Straight", "L-shaped", "Parallel", "U-shaped", "Island"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </CalculatorPanel>
            ) : null}

            {activeType === "wardrobe" ? (
              <CalculatorPanel title="2. Configure wardrobe scope" icon={Sofa}>
                <div className="grid gap-4 md:grid-cols-2">
                  <NumberInput label="Width per wardrobe" value={wardrobeWidth} min={4} max={16} step={1} suffix="ft" onChange={setWardrobeWidth} />
                  <Stepper label="Wardrobe count" value={wardrobeCount} min={1} max={6} suffix="units" onChange={setWardrobeCount} />
                </div>
              </CalculatorPanel>
            ) : null}

            <CalculatorPanel title="3. Review estimate" icon={Calculator}>
              <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr]">
                <div className="rounded-[1.5rem] bg-[#111] p-5 text-white">
                  <p className="technical-label text-white/52">Instant estimate</p>
                  <p className="mt-4 font-display text-5xl font-semibold tracking-[-0.05em]">{currency(estimate.total)}</p>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    Final pricing can change after site measurement, material selection, appliance choices, and civil work review.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                  <p className="text-sm font-semibold">Included in this estimate</p>
                  <div className="mt-4 space-y-3">
                    {estimate.rows.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 text-sm">
                        <span className="flex items-center gap-2 text-[var(--muted)]"><Check className="h-4 w-4 text-[#ff2daa]" />{label}</span>
                        <span className="font-semibold">{currency(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CalculatorPanel>
          </div>
        </div>
      </section>
    </main>
  );
}

function CalculatorPanel({ title, icon: Icon, children }: { title: string; icon: LucideIcon; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-white/75 bg-white/78 p-5 shadow-soft backdrop-blur-2xl sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f8] text-[#ff2daa]">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function NumberInput({ label, value, min, max, step, suffix, onChange }: { label: string; value: number; min: number; max: number; step: number; suffix: string; onChange: (value: number) => void }) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-semibold">{label}</span>
      <div className="flex min-h-12 items-center overflow-hidden rounded-2xl border border-black/10 bg-white">
        <input value={value} min={min} max={max} step={step} type="number" onChange={(event) => onChange(Number(event.target.value))} className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
        <span className="border-l border-black/8 px-4 text-xs font-semibold text-[var(--muted)]">{suffix}</span>
      </div>
    </label>
  );
}

function Stepper({ label, value, min, max, suffix, onChange }: { label: string; value: number; min: number; max: number; suffix: string; onChange: (value: number) => void }) {
  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold">{label}</span>
      <div className="flex min-h-12 items-center justify-between rounded-2xl border border-black/10 bg-white px-2">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="h-9 w-9 rounded-full bg-[#f7f1f3] text-lg font-semibold">-</button>
        <span className="text-sm font-semibold">{value} {suffix}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} className="h-9 w-9 rounded-full bg-[#111] text-lg font-semibold text-white">+</button>
      </div>
    </div>
  );
}

function Toggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-12 items-center justify-between gap-3 rounded-2xl border px-4 text-left text-sm font-semibold transition ${active ? "border-[#ff2daa] bg-[#fff0f8] text-[#8f0f58]" : "border-black/8 bg-white text-[var(--muted)]"}`}
    >
      <span>{label}</span>
      {active ? <Check className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
    </button>
  );
}
