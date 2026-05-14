"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { servicePages } from "@/lib/servicePages";

const FLOATING_CALLBACK_EVENT = "spacelyt:open-floating-callback";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Kochar%20Petrol%20Pump%20Chand%20Chaura%20Gaya%2C%20Bihar%2C%20823001%2C%20India";

export default function SiteFooter() {
  return (
    <footer className="mt-10 bg-[#111] px-4 py-12 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-2xl font-bold tracking-[0.18em]">SPACELYT</Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/62">
            Planning, architecture, construction, interiors, exteriors, and building solutions under one coordinated turnkey system.
          </p>
          <SocialLinks />
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/78">Services</h3>
          <ul className="mt-5 grid gap-3 text-sm text-white/56">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition hover:text-white">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/78">Contact</h3>
          <ul className="mt-5 grid gap-3 text-sm text-white/56">
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
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/12 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/46 sm:flex-row">
        <span>© 2016 Spacelyt.com All Rights Reserved. Website Designed By OreoDigi.com.</span>
        <span className="text-[#ff5c8a]">Plan / Design / Build / Deliver</span>
      </div>
    </footer>
  );
}
