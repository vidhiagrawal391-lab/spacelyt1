import type { Service } from "@/lib/content";

export type LeadField = {
  name: string;
  label: string;
  type: "text" | "tel" | "select" | "textarea";
  required?: boolean;
  options?: string[];
};

export type LeadPopupKind = "homepage" | "service" | "estimate" | "exit" | "floating";

export type LeadPopupConfig = {
  kind: LeadPopupKind;
  title: string;
  subtitle: string;
  cta: string;
  fields: LeadField[];
  serviceSlug?: string;
};

export const projectTypeOptions = [
  "Residential",
  "Commercial",
  "Renovation",
  "Interior Design",
  "Construction",
  "Full Turnkey Project"
];

export const budgetRangeOptions = [
  "Below ₹5 Lakhs",
  "₹5–15 Lakhs",
  "₹15–30 Lakhs",
  "₹30 Lakhs+",
  "Not sure yet"
];

export const propertyTypeOptions = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "Villa",
  "Office",
  "Retail / Commercial",
  "Other"
];

export const projectRequirementOptions = [
  "Planning",
  "Architecture",
  "Construction",
  "Interior Design",
  "Exterior Design",
  "Full Turnkey"
];

export const homepageConsultationPopup: LeadPopupConfig = {
  kind: "homepage",
  title: "Get a Free Space Consultation",
  subtitle: "Share a few details and our team will help you plan your project from concept to completion.",
  cta: "Get Free Consultation",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "city", label: "City / Location", type: "text", required: true },
    { name: "projectType", label: "Project Type", type: "select", required: true, options: projectTypeOptions }
  ]
};

export const estimatePopup: LeadPopupConfig = {
  kind: "estimate",
  title: "Get a Project Estimate",
  subtitle: "Tell us your project type and budget. We’ll help you understand the right service path.",
  cta: "Get Estimate",
  fields: [
    { name: "propertyType", label: "Property Type", type: "select", required: true, options: propertyTypeOptions },
    { name: "requirement", label: "Project Requirement", type: "select", required: true, options: projectRequirementOptions },
    { name: "budget", label: "Budget Range", type: "select", required: true, options: budgetRangeOptions },
    { name: "name", label: "Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "city", label: "City", type: "text", required: true }
  ]
};

export const exitIntentPopup: LeadPopupConfig = {
  kind: "exit",
  title: "Before you leave",
  subtitle: "Want a quick call to understand what your project needs?",
  cta: "Request Callback",
  fields: [
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "projectType", label: "Project Type", type: "select", required: true, options: projectTypeOptions }
  ]
};

export const floatingContactPopup: LeadPopupConfig = {
  kind: "floating",
  title: "Talk to Spacelyt",
  subtitle: "Share your requirement and our team will call you back.",
  cta: "Request Call Back",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "message", label: "Message / Requirement", type: "textarea" }
  ]
};

const servicePopupCopy: Record<string, Pick<LeadPopupConfig, "title" | "subtitle" | "cta">> = {
  planning: {
    title: "Need help planning your space?",
    subtitle: "Get expert guidance before starting your project.",
    cta: "Plan My Space"
  },
  architecture: {
    title: "Designing a new space?",
    subtitle: "Speak with Spacelyt about architecture, layout, and functional design.",
    cta: "Discuss Architecture"
  },
  construction: {
    title: "Planning construction work?",
    subtitle: "Get support for scope, execution, quality checks, and handover.",
    cta: "Discuss Construction"
  },
  "interior-design": {
    title: "Want interiors that are beautiful and practical?",
    subtitle: "Get a design consultation for your home, office, or commercial space.",
    cta: "Discuss Interiors"
  },
  "exterior-design": {
    title: "Upgrade your exterior presence",
    subtitle: "Plan facades, outdoor areas, and first impressions with Spacelyt.",
    cta: "Discuss Exterior Design"
  },
  "building-solutions": {
    title: "Need complete building support?",
    subtitle: "Get coordinated solutions for your project from one reliable team.",
    cta: "Start Discussion"
  }
};

export function createServicePopup(service: Service): LeadPopupConfig {
  const copy = servicePopupCopy[service.slug] ?? {
    title: `Discuss ${service.flowTitle}`,
    subtitle: "Get expert guidance from Spacelyt for this stage of your project.",
    cta: "Discuss This Service"
  };

  return {
    kind: "service",
    serviceSlug: service.slug,
    ...copy,
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "budget", label: "Budget Range", type: "select", required: true, options: budgetRangeOptions }
    ]
  };
}
