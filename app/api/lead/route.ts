import { NextResponse } from "next/server";

const leadRecipientEmail = "hello@spacelyt.com";
const fallbackSiteUrl = "https://spacelyt1-psi.vercel.app/";
const leadApiVersion = "2026-05-14-v2";

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
        "User-Agent": "Mozilla/5.0 Spacelyt Lead Form",
        "X-Requested-With": "XMLHttpRequest",
        Origin: pageOrigin,
        Referer: pageUrl
      },
      body: formData
    });

    const responseText = await response.text();
    const result = parseFormSubmitResponse(responseText);
    const success = result?.success === true || result?.success === "true";
    const message = result?.message ?? "";
    const requiresActivation = message.toLowerCase().includes("activation");

    if (!response.ok || (!success && !requiresActivation)) {
      return NextResponse.json(
        {
          error: message || "Email delivery failed.",
          upstreamStatus: response.status,
          upstreamResponse: responseText.slice(0, 220),
          version: leadApiVersion
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, activationRequired: requiresActivation, message, version: leadApiVersion });
  } catch {
    return NextResponse.json({ error: "Invalid lead request.", version: leadApiVersion }, { status: 400 });
  }
}

function getOrigin(url: string) {
  try {
    return new URL(url).origin;
  } catch {
    return new URL(fallbackSiteUrl).origin;
  }
}

function parseFormSubmitResponse(text: string) {
  try {
    return JSON.parse(text) as { success?: boolean | string; message?: string };
  } catch {
    if (text.includes('"success":"true"') || text.includes('"success":true')) {
      return { success: true, message: "The form was submitted successfully." };
    }
    if (text.toLowerCase().includes("activation")) {
      return { success: false, message: text };
    }
    return null;
  }
}
