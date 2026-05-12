"use client";

import FloatingContactWidget from "@/components/lead/FloatingContactWidget";
import LeadPopup from "@/components/lead/LeadPopup";
import { usePopupTriggers } from "@/components/lead/usePopupTriggers";

const whatsappUrl = "https://wa.me/918002234888?text=Hi%20Spacelyt%2C%20I%20want%20to%20consult%20about%20my%20home%20project.";

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
