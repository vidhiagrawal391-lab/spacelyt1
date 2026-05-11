"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LeadField, LeadPopupConfig } from "@/lib/leadPopupConfig";

type LeadPopupProps = {
  config: LeadPopupConfig | null;
  open: boolean;
  onClose: () => void;
  onSubmitted: () => void;
};

type LeadValues = Record<string, string>;

const phoneRegex = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;

export default function LeadPopup({ config, open, onClose, onSubmitted }: LeadPopupProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<LeadValues>(() => {
    const initial: LeadValues = {};
    config?.fields.forEach((field) => {
      initial[field.name] = "";
    });
    return initial;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      const firstInput = dialogRef.current?.querySelector<HTMLElement>("input, select, textarea, button");
      firstInput?.focus();
    });
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("button, input, select, textarea, a[href]")
      ).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!config) return null;

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    config.fields.forEach((field) => {
      const value = values[field.name]?.trim() ?? "";
      if (field.required && !value) {
        nextErrors[field.name] = `${field.label} is required.`;
      }
      if (field.name === "phone" && value && !phoneRegex.test(value.replace(/\s/g, ""))) {
        nextErrors[field.name] = "Enter a valid Indian mobile number.";
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitLead = async () => {
    // TODO: Connect this payload to the production CRM/contact API when the endpoint is available.
    await new Promise((resolve) => setTimeout(resolve, 350));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    await submitLead();
    setStatus("success");
    onSubmitted();
    window.setTimeout(onClose, 2000);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/28 p-3 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            aria-describedby="lead-popup-description"
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/80 bg-white/94 p-5 shadow-[0_30px_120px_rgba(17,17,17,.22)] outline-none backdrop-blur-2xl sm:p-7"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close popup"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#111] shadow-soft"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="pr-12">
              <p className="technical-label text-[#ff2daa]">Spacelyt Consultation</p>
              <h2 id="lead-popup-title" className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#111] sm:text-5xl">
                {config.title}
              </h2>
              <p id="lead-popup-description" className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                {config.subtitle}
              </p>
            </div>

            {status === "success" ? (
              <div className="mt-7 rounded-[1.25rem] border border-[#ff2daa]/20 bg-[#fff5fb] p-5 text-sm font-semibold text-[#111]">
                Thank you. Our team will contact you shortly.
              </div>
            ) : (
              <form className="mt-7 grid gap-4" onSubmit={handleSubmit} noValidate>
                {config.fields.map((field) => (
                  <LeadFieldControl
                    key={field.name}
                    field={field}
                    value={values[field.name] ?? ""}
                    error={errors[field.name]}
                    onChange={(value) => setValues((current) => ({ ...current, [field.name]: value }))}
                  />
                ))}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-6 text-sm font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Submitting..." : config.cta}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function LeadFieldControl({
  field,
  value,
  error,
  onChange
}: {
  field: LeadField;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const inputClass =
    "mt-2 min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-[#111] outline-none transition focus:border-[#ff2daa] focus:ring-4 focus:ring-[#ff2daa]/10";

  return (
    <label className="block text-sm font-semibold text-[#111]">
      {field.label}
      {field.required ? <span className="text-[#ff2daa]"> *</span> : null}
      {field.type === "select" ? (
        <select className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)}>
          <option value="">Select</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          className={`${inputClass} min-h-28 resize-none py-3`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
        />
      ) : (
        <input
          className={inputClass}
          type={field.type}
          value={value}
          inputMode={field.type === "tel" ? "tel" : undefined}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
        />
      )}
      {error ? <span className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
