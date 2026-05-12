"use client";

import { MessageCircle, Phone } from "lucide-react";

type FloatingContactWidgetProps = {
  onRequestCallback: () => void;
  whatsappUrl?: string;
};

export default function FloatingContactWidget({ onRequestCallback, whatsappUrl }: FloatingContactWidgetProps) {
  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Spacelyt on WhatsApp"
          className="group inline-flex h-14 w-14 items-center justify-center rounded-[0.95rem] border border-black/8 bg-white text-[#25D366] shadow-[0_14px_40px_rgba(17,17,17,.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(37,211,102,.24)]"
        >
          <span className="absolute -left-36 hidden rounded-full bg-[#111] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
            <MessageCircle className="h-5 w-5" />
          </span>
        </a>
      ) : null}
      <button
        type="button"
        onClick={onRequestCallback}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-4 text-xs font-semibold text-white shadow-glow sm:h-14 sm:gap-3 sm:px-5 sm:text-sm"
      >
        <Phone className="h-5 w-5" />
        Request Callback
      </button>
    </div>
  );
}
