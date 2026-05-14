"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { services } from "@/lib/content";
import {
  createConsultationPopupForService,
  createServicePopup,
  estimatePopup,
  exitIntentPopup,
  floatingContactPopup,
  homepageConsultationPopup,
  type LeadPopupConfig
} from "@/lib/leadPopupConfig";

const SUBMITTED_KEY = "spacelyt_lead_submitted";
const LAST_POPUP_KEY = "spacelyt_last_popup_at";
const CLOSED_PREFIX = "spacelyt_popup_closed_";
const MIN_POPUP_GAP = 20_000;
const SERVICE_CTA_EVENT = "spacelyt:open-service-consultation";
const CONSULTATION_CTA_EVENT = "spacelyt:open-consultation";
const FLOATING_CALLBACK_EVENT = "spacelyt:open-floating-callback";

type PopupRequest = {
  config: LeadPopupConfig;
  sessionKey: string;
  ignoreSubmitted?: boolean;
};

function hasSubmitted() {
  return typeof window !== "undefined" && window.localStorage.getItem(SUBMITTED_KEY) === "true";
}

function getNow() {
  return Date.now();
}

export function usePopupTriggers() {
  const [activePopup, setActivePopup] = useState<LeadPopupConfig | null>(null);
  const activeRef = useRef<LeadPopupConfig | null>(null);
  const openedKeyRef = useRef<string | null>(null);
  const serviceTimers = useRef<Record<string, number>>({});

  const setActive = useCallback((config: LeadPopupConfig | null, key: string | null = null) => {
    activeRef.current = config;
    openedKeyRef.current = key;
    setActivePopup(config);
  }, []);

  const canOpen = useCallback((request: PopupRequest) => {
    if (activeRef.current) return false;
    if (!request.ignoreSubmitted && hasSubmitted()) return false;
    if (window.sessionStorage.getItem(`${CLOSED_PREFIX}${request.sessionKey}`) === "true") return false;
    const lastPopup = Number(window.sessionStorage.getItem(LAST_POPUP_KEY) || "0");
    return getNow() - lastPopup >= MIN_POPUP_GAP;
  }, []);

  const tryOpen = useCallback((request: PopupRequest) => {
    if (!canOpen(request)) return false;
    window.sessionStorage.setItem(LAST_POPUP_KEY, String(getNow()));
    window.sessionStorage.setItem(`${CLOSED_PREFIX}${request.sessionKey}`, "true");
    setActive(request.config, request.sessionKey);
    return true;
  }, [canOpen, setActive]);

  const closePopup = useCallback(() => {
    if (openedKeyRef.current) {
      window.sessionStorage.setItem(`${CLOSED_PREFIX}${openedKeyRef.current}`, "true");
      window.sessionStorage.setItem(LAST_POPUP_KEY, String(getNow()));
    }
    setActive(null);
  }, [setActive]);

  const markSubmitted = useCallback(() => {
    window.localStorage.setItem(SUBMITTED_KEY, "true");
    window.sessionStorage.setItem(LAST_POPUP_KEY, String(getNow()));
  }, []);

  const openFloating = useCallback(() => {
    if (activeRef.current) return;
    setActive(floatingContactPopup, "floating");
  }, [setActive]);

  const openHomepageConsultation = useCallback(() => {
    if (activeRef.current) return;
    setActive(floatingContactPopup, "header-consultation");
  }, [setActive]);

  const openServiceConsultation = useCallback((serviceName: string, serviceSlug?: string) => {
    if (activeRef.current) return;
    const matchedService = services.find(
      (service) => service.slug === serviceSlug || service.title === serviceName || service.flowTitle === serviceName
    );
    if (matchedService) {
      setActive(createServicePopup(matchedService), `service-cta-${matchedService.slug}`);
      return;
    }
    setActive(
      createConsultationPopupForService({ serviceName, serviceSlug }),
      `service-cta-${serviceSlug ?? serviceName.toLowerCase().replace(/\s+/g, "-")}`
    );
  }, [setActive]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleServiceCta = (event: Event) => {
      const detail = (event as CustomEvent<{ serviceName?: string; serviceSlug?: string }>).detail;
      if (!detail?.serviceName) return;
      openServiceConsultation(detail.serviceName, detail.serviceSlug);
    };
    window.addEventListener(SERVICE_CTA_EVENT, handleServiceCta);
    return () => window.removeEventListener(SERVICE_CTA_EVENT, handleServiceCta);
  }, [openServiceConsultation]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener(CONSULTATION_CTA_EVENT, openHomepageConsultation);
    window.addEventListener(FLOATING_CALLBACK_EVENT, openFloating);
    return () => {
      window.removeEventListener(CONSULTATION_CTA_EVENT, openHomepageConsultation);
      window.removeEventListener(FLOATING_CALLBACK_EVENT, openFloating);
    };
  }, [openFloating, openHomepageConsultation]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    const delay = 8000 + Math.round(Math.random() * 4000);
    const timer = window.setTimeout(() => {
      tryOpen({
        config: homepageConsultationPopup,
        sessionKey: "homepage"
      });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [tryOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = services
      .map((service) => ({ service, element: document.getElementById(service.slug) }))
      .filter((item): item is { service: (typeof services)[number]; element: HTMLElement } => Boolean(item.element));

    if (elements.length === 0) return;
    const timers = serviceTimers.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = elements.find((item) => item.element === entry.target);
          if (!match) return;
          const key = `service_${match.service.slug}`;
          if (entry.isIntersecting) {
            timers[match.service.slug] = window.setTimeout(() => {
              tryOpen({
                config: createServicePopup(match.service),
                sessionKey: key
              });
            }, 5000);
          } else if (timers[match.service.slug]) {
            window.clearTimeout(timers[match.service.slug]);
            delete timers[match.service.slug];
          }
        });
      },
      { threshold: 0.45 }
    );

    elements.forEach(({ element }) => observer.observe(element));
    return () => {
      observer.disconnect();
      Object.values(timers).forEach((timer) => window.clearTimeout(timer));
    };
  }, [tryOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;
      const progress = window.scrollY / documentHeight;
      if (progress >= 0.65 && activeRef.current?.kind !== "homepage") {
        tryOpen({
          config: estimatePopup,
          sessionKey: "estimate"
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tryOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let previousY = window.scrollY;
    let previousTime = getNow();
    let inactivityTimer: number | undefined;
    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

    const openExit = () => {
      tryOpen({
        config: exitIntentPopup,
        sessionKey: "exit"
      });
    };

    const resetInactivity = () => {
      if (!isMobile()) return;
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(openExit, 45_000);
    };

    const onMouseOut = (event: MouseEvent) => {
      if (isMobile()) return;
      if (event.clientY <= 8) openExit();
    };

    const onScroll = () => {
      const now = getNow();
      const delta = previousY - window.scrollY;
      const elapsed = now - previousTime;
      if (isMobile() && delta > 150 && elapsed < 850) openExit();
      previousY = window.scrollY;
      previousTime = now;
      resetInactivity();
    };

    const onActivity = () => resetInactivity();

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onActivity, { passive: true });
    window.addEventListener("mousemove", onActivity);
    resetInactivity();

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onActivity);
      window.removeEventListener("mousemove", onActivity);
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
    };
  }, [tryOpen]);

  return {
    activePopup,
    closePopup,
    markSubmitted,
    openFloating
  };
}
