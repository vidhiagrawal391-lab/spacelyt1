import { NextResponse } from "next/server";

const leadRecipientEmail = "hello@spacelyt.com";
const fallbackSiteUrl = "https://spacelyt1-psi.vercel.app/";

type LeadPayload = {
  popup?: {
    kind?: string;
    title?: string;
    serviceSlug?: string;
  };
  values?: Record<string, string>;
  pageUrl?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const values = payload.values ?? {};
    const name = values.name?.trim() || "Spacelyt website visitor";
    const phone = values.phone?.trim();
    const pageUrl = payload.pageUrl ?? request.headers.get("origin") ?? fallbackSiteUrl;
    const pageOrigin = getOrigin(pageUrl);

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("_subject", `New Spacelyt lead: ${payload.popup?.title ?? "Website popup"}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("Popup Type", payload.popup?.kind ?? "Unknown");
    formData.append("Popup Title", payload.popup?.title ?? "Unknown");
    formData.append("Service Slug", payload.popup?.serviceSlug ?? "Not applicable");
    formData.append("Page URL", pageUrl);
    formData.append("Submitted At", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
    formData.append("Name", name);

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(`https://formsubmit.co/ajax/${leadRecipientEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Origin: pageOrigin,
        Referer: pageUrl
      },
      body: formData
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean | string; message?: string } | null;
    const success = result?.success === true || result?.success === "true";
    const message = result?.message ?? "";
    const requiresActivation = message.toLowerCase().includes("activation");

    if (!response.ok || (!success && !requiresActivation)) {
      return NextResponse.json({ error: message || "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, activationRequired: requiresActivation, message });
  } catch {
    return NextResponse.json({ error: "Invalid lead request." }, { status: 400 });
  }
}

function getOrigin(url: string) {
  try {
    return new URL(url).origin;
  } catch {
    return new URL(fallbackSiteUrl).origin;
  }
}
