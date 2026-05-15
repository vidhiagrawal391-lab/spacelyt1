"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const ease = [0.22, 1, 0.36, 1] as const;
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Kochar%20Petrol%20Pump%20Chand%20Chaura%20Gaya%2C%20Bihar%2C%20823001%2C%20India";
const whatsappUrl = "https://wa.me/918002234888";
const contactCards = [
  {
    label: "Call Us",
    value: "+918002234888",
    href: "tel:+918002234888",
    icon: Phone
  },
  {
    label: "Email Us",
    value: "hello@spacelyt.com",
    href: "mailto:hello@spacelyt.com",
    icon: Mail
  },
  {
    label: "WhatsApp",
    value: "Chat with Spacelyt",
    href: whatsappUrl,
    icon: MessageCircle
  },
  {
    label: "Visit Us",
    value: "Kochar Petrol Pump Chand Chaura Gaya, Bihar, 823001, India",
    href: mapUrl,
    icon: MapPin
  }
];

type ContactValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const initialValues: ContactValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "Full Turnkey",
  message: ""
};

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <ContactHero />
      <ContactInfoSection />
      <ContactFormSection />
      <MapSection />
      <SiteFooter />
      <PopupManager />
    </main>
  );
}

function ContactHero() {
  return (
    <section className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(255,138,61,.13),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            <Link href="/" className="transition hover:text-[var(--ink)]">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(3.4rem,10vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            Contact
            <br />
            <span className="gradient-text">Spacelyt</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.label} className="h-full">
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full flex-col rounded-[1.8rem] border border-white/72 bg-white/76 p-5 shadow-soft backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#111] text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="technical-label mt-8 text-[#ff2daa]">0{index + 1} / {card.label}</span>
                <span className="mt-3 text-base font-semibold leading-7 text-[var(--ink)]">{card.value}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted)] transition group-hover:text-[#ff2daa]">
                  Open <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <Reveal className="rounded-[2.3rem] border border-white/76 bg-[#111] p-6 text-white shadow-glow md:p-8">
          <p className="technical-label text-[#ff8a3d]">Get In Touch</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Tell us about your project.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/62">
            Share your site, budget direction, project type, and requirement. Our team will help you understand the right service path for planning, architecture, construction, interiors, exteriors, or full turnkey delivery.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111] shadow-soft">
              Explore Service <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services/building-solutions" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/18 bg-white/[0.08] px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-white/14">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
        <Reveal className="rounded-[2.1rem] border border-white/76 bg-white/78 p-6 shadow-soft backdrop-blur-2xl">
          <p className="technical-label text-[#ff2daa]">Office Location</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,6vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
            Visit our office
          </h2>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-5 block text-sm leading-7 text-[var(--muted)] transition hover:text-[var(--ink)]">
            Kochar Petrol Pump Chand Chaura Gaya, Bihar, 823001, India
          </a>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#111] px-6 text-sm font-semibold text-white shadow-soft">
            Open In Google Maps <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
        <Reveal className="min-h-[24rem] overflow-hidden rounded-[2.1rem] border border-white/76 bg-white/76 p-2 shadow-glow backdrop-blur-2xl">
          <iframe
            title="Spacelyt office location map"
            src="https://www.google.com/maps?q=Kochar%20Petrol%20Pump%20Chand%20Chaura%20Gaya%2C%20Bihar%2C%20823001%2C%20India&output=embed"
            className="h-full min-h-[23rem] w-full rounded-[1.75rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const updateValue = (key: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!values.name.trim() || !values.phone.trim()) {
      setError("Name and phone number are required.");
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          popup: {
            kind: "contact",
            title: "Contact Page Enquiry",
            serviceSlug: values.projectType.toLowerCase().replace(/\s+/g, "-")
          },
          values,
          pageUrl: window.location.href
        })
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2.3rem] border border-white/76 bg-white/82 p-5 shadow-soft backdrop-blur-2xl md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" required value={values.name} onChange={(value) => updateValue("name", value)} />
        <Field label="Phone Number" required value={values.phone} onChange={(value) => updateValue("phone", value)} type="tel" />
        <Field label="Email" value={values.email} onChange={(value) => updateValue("email", value)} type="email" />
        <label className="block text-sm font-semibold text-[#111]">
          Project Type
          <select
            value={values.projectType}
            onChange={(event) => updateValue("projectType", event.target.value)}
            className="mt-2 min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-[#111] outline-none transition focus:border-[#ff2daa] focus:ring-4 focus:ring-[#ff2daa]/10"
          >
            {["Architecture", "Construction", "Interior", "Exterior", "Full Turnkey"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-[#111]">
        Message / Requirement
        <textarea
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          rows={5}
          className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#111] outline-none transition focus:border-[#ff2daa] focus:ring-4 focus:ring-[#ff2daa]/10"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-6 text-sm font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
      {error ? <p className="mt-4 text-sm font-semibold text-red-600">{error}</p> : null}
      {status === "success" ? <p className="mt-4 text-sm font-semibold text-[#111]">Thank you. Our team will contact you shortly.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-semibold text-red-600">Something went wrong. Please try again.</p> : null}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold text-[#111]">
      {label}
      {required ? <span className="text-[#ff2daa]"> *</span> : null}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-[#111] outline-none transition focus:border-[#ff2daa] focus:ring-4 focus:ring-[#ff2daa]/10"
      />
    </label>
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
