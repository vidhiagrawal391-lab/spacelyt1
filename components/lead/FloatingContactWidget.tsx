"use client";

import { MessageCircle, Phone } from "lucide-react";

type FloatingContactWidgetProps = {
  onRequestCallback: () => void;
  whatsappUrl?: string;
};

export default function FloatingContactWidget({ onRequestCallback, whatsappUrl }: FloatingContactWidgetProps) {
  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3">
      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/8 bg-white/90 px-4 text-sm font-semibold text-[#111] shadow-soft backdrop-blur-xl"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          Chat on WhatsApp
        </a>
      ) : null}
      <button
        type="button"
        onClick={onRequestCallback}
        className="inline-flex h-14 items-center gap-3 rounded-full bg-[linear-gradient(135deg,#4b1232,#ff2daa,#ff8a3d)] px-5 text-sm font-semibold text-white shadow-glow"
      >
        <Phone className="h-5 w-5" />
        Request Callback
      </button>
    </div>
  );
}
