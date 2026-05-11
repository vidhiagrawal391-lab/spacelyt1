"use client";

import FloatingContactWidget from "@/components/lead/FloatingContactWidget";
import LeadPopup from "@/components/lead/LeadPopup";
import { usePopupTriggers } from "@/components/lead/usePopupTriggers";

const whatsappUrl = "";

export default function PopupManager() {
  const { activePopup, closePopup, markSubmitted, openFloating } = usePopupTriggers();

  return (
    <>
      <LeadPopup
        key={activePopup ? `${activePopup.kind}-${activePopup.serviceSlug ?? "default"}` : "closed"}
        config={activePopup}
        open={Boolean(activePopup)}
        onClose={closePopup}
        onSubmitted={markSubmitted}
      />
      <FloatingContactWidget onRequestCallback={openFloating} whatsappUrl={whatsappUrl || undefined} />
    </>
  );
}
