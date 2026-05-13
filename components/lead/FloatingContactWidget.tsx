"use client";

import { Phone } from "lucide-react";

type FloatingContactWidgetProps = {
  onRequestCallback: () => void;
  whatsappUrl?: string;
};

export default function FloatingContactWidget({ onRequestCallback, whatsappUrl }: FloatingContactWidgetProps) {
  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3.5 sm:bottom-6 sm:right-6">
      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Spacelyt on WhatsApp"
          className="group relative mr-1 inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-[0.85rem] border border-black/5 bg-white shadow-[0_12px_34px_rgba(17,17,17,.16)] transition hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(37,211,102,.22)] sm:mr-2 sm:h-14 sm:w-14"
        >
          <span className="absolute -left-36 hidden rounded-full bg-[#111] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#31d66b] text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,.38),0_8px_18px_rgba(49,214,107,.34)] sm:h-9 sm:w-9">
            <WhatsAppMark className="h-5 w-5 sm:h-5 sm:w-5" />
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

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 3.5a8.45 8.45 0 0 0-7.18 12.91L3.9 20.5l4.2-1a8.44 8.44 0 0 0 3.94.98h.01a8.49 8.49 0 0 0 8.48-8.48 8.47 8.47 0 0 0-8.49-8.5Zm0 15.53a7.06 7.06 0 0 1-3.6-.98l-.26-.16-2.5.6.58-2.43-.17-.25a7.04 7.04 0 1 1 5.95 3.22Zm3.88-5.27c-.21-.1-1.25-.62-1.44-.69-.19-.07-.33-.1-.47.1-.14.22-.54.69-.66.83-.12.14-.24.16-.45.05-.21-.1-.9-.33-1.71-1.05a6.4 6.4 0 0 1-1.18-1.46c-.12-.21-.01-.33.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.36-.05-.1-.47-1.13-.65-1.55-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.7 0 1 .74 1.98.84 2.12.1.14 1.46 2.23 3.54 3.13.5.21.88.34 1.18.44.5.16.95.14 1.31.08.4-.06 1.25-.51 1.43-1 .18-.5.18-.92.12-1-.05-.09-.19-.14-.4-.24Z"
      />
    </svg>
  );
}
