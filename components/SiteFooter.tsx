"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { servicePages } from "@/lib/servicePages";

const FLOATING_CALLBACK_EVENT = "spacelyt:open-floating-callback";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Kochar%20Petrol%20Pump%20Chand%20Chaura%20Gaya%2C%20Bihar%2C%20823001%2C%20India";

export default function SiteFooter() {
  return (
    <footer className="mt-10 bg-[#111] px-5 py-10 text-white sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="col-span-2 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 text-center md:col-span-1 md:border-0 md:bg-transparent md:p-0 md:text-left">
          <Link href="/" className="font-display text-2xl font-bold tracking-[0.18em]">SPACELYT</Link>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/62 md:mx-0">
            Planning, architecture, construction, interiors, exteriors, and building solutions under one coordinated turnkey system.
          </p>
          <SocialLinks />
        </div>
        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 md:border-0 md:bg-transparent md:p-0">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/78">Services</h3>
          <ul className="mt-4 grid gap-3 text-[0.8rem] leading-6 text-white/56 sm:grid-cols-2 sm:text-sm md:mt-5 md:grid-cols-1">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition hover:text-white">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 md:border-0 md:bg-transparent md:p-0">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/78">Contact</h3>
          <ul className="mt-4 grid gap-3 text-[0.8rem] leading-6 text-white/56 sm:text-sm md:mt-5">
            <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent(FLOATING_CALLBACK_EVENT))}
                className="transition hover:text-white"
              >
                Start Consultation
              </button>
            </li>
            <li>
              <a href="mailto:hello@spacelyt.com" className="transition hover:text-white">
                hello@spacelyt.com
              </a>
            </li>
            <li>
              <a href="tel:+918002234888" className="transition hover:text-white">
                +918002234888
              </a>
            </li>
            <li>
              <a href={MAP_URL} target="_blank" rel="noreferrer" className="transition hover:text-white">
                Kochar Petrol Pump Chand Chaura Gaya, Bihar, 823001, India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/12 pt-6 text-center font-mono text-[0.66rem] leading-5 tracking-[0.08em] text-white/46 sm:mt-12 sm:flex-row sm:text-left sm:text-[0.68rem] sm:uppercase sm:tracking-[0.18em]">
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
