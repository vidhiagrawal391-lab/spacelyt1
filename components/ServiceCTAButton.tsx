"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICE_CTA_EVENT = "spacelyt:open-service-consultation";

type ServiceCTAButtonProps = {
  serviceName: string;
  serviceSlug?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export default function ServiceCTAButton({
  serviceName,
  serviceSlug,
  children = "Start Consultation",
  variant = "primary",
  className = ""
}: ServiceCTAButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] text-white shadow-glow"
      : variant === "dark"
        ? "bg-[#111] text-white shadow-soft"
        : "border border-black/8 bg-white/82 text-[var(--ink)] shadow-soft backdrop-blur-xl";

  return (
    <motion.button
      type="button"
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#ff2daa]/40 ${variantClass} ${className}`}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent(SERVICE_CTA_EVENT, {
            detail: { serviceName, serviceSlug }
          })
        );
      }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.button>
  );
}
