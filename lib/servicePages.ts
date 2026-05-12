export type ServicePageData = {
  slug: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  benefits: string[];
  scopeItems: string[];
  processSteps: string[];
  deliverables: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
  primaryCTA: string;
  secondaryCTA: string;
};

export const servicePages: ServicePageData[] = [
  {
    slug: "planning",
    title: "Planning",
    eyebrow: "Service 01 / Blueprint Phase",
    heroTitle: "Planning That Defines the Entire Project",
    heroSubtitle:
      "Before design or construction begins, we help you understand the site, scope, budget, feasibility, and right direction for your space.",
    shortDescription:
      "Site, scope, budget, feasibility, material direction, and timeline strategy aligned before work begins.",
    longDescription:
      "Planning is where a successful project begins. Spacelyt helps clients convert ideas into clear requirements by studying the site, understanding lifestyle or business needs, defining functional zones, and mapping the right path for design and execution.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82",
    benefits: [
      "Clear project scope before execution",
      "Better budget and timeline direction",
      "Reduced confusion between design and site work",
      "Right service mix for the project stage"
    ],
    scopeItems: [
      "Site understanding",
      "Requirement mapping",
      "Space planning",
      "Budget direction",
      "Feasibility checks",
      "Material direction",
      "Timeline planning",
      "Service mix recommendation"
    ],
    processSteps: [
      "Consultation",
      "Site and requirement study",
      "Space usage planning",
      "Budget and feasibility mapping",
      "Project direction report",
      "Next-stage recommendation"
    ],
    deliverables: [
      "Requirement summary",
      "Space planning direction",
      "Budget range guidance",
      "Timeline direction",
      "Recommended service path"
    ],
    faqs: [
      {
        question: "Can I start only with planning?",
        answer: "Yes. You can begin with planning and later move into architecture, construction, interiors, or turnkey execution."
      },
      {
        question: "Is planning useful before buying materials?",
        answer: "Yes. Planning helps avoid unclear scope, wrong material choices, and execution confusion."
      },
      {
        question: "Do you visit the site?",
        answer: "Site study can be included depending on project location and requirement."
      }
    ],
    relatedServices: ["architecture", "construction", "building-solutions"],
    seoTitle: "Planning Services | Space Planning & Project Scope | Spacelyt",
    seoDescription:
      "Spacelyt helps define your project scope, site requirements, budget direction, feasibility, and space planning before design or execution begins.",
    primaryCTA: "Start Consultation",
    secondaryCTA: "View Process"
  },
  {
    slug: "architecture",
    title: "Architecture",
    eyebrow: "Service 02 / Design Structure",
    heroTitle: "Architecture With Purpose, Form, and Function",
    heroSubtitle: "We shape concepts into buildable plans, elevations, layouts, and coordinated design direction.",
    shortDescription:
      "Concepts become buildable elevations, plans, documentation, and coordinated structural direction.",
    longDescription:
      "Architecture at Spacelyt connects creativity with execution. We focus on how a space looks, works, flows, and can actually be built.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=82",
    benefits: [
      "Design direction that can move into execution",
      "Better coordination between structure and interiors",
      "Functional layouts for real use",
      "A stronger visual identity for the project"
    ],
    scopeItems: [
      "Concept design",
      "Floor plans",
      "Elevation design",
      "Layout planning",
      "Functional zoning",
      "Structural coordination",
      "Design documentation",
      "Coordination with construction and interiors"
    ],
    processSteps: [
      "Requirement brief",
      "Site and layout study",
      "Concept direction",
      "Floor plan and elevation development",
      "Technical coordination",
      "Final design documentation"
    ],
    deliverables: [
      "Concept layouts",
      "Floor plans",
      "Elevation direction",
      "Design documentation",
      "Coordination notes"
    ],
    faqs: [
      {
        question: "Do you provide only architecture design?",
        answer: "Yes. You can take architecture as a standalone service or connect it with construction and interiors."
      },
      {
        question: "Can architecture and interiors be planned together?",
        answer: "Yes. That is recommended for better coordination."
      },
      {
        question: "Do you work on residential and commercial architecture?",
        answer: "Yes. Spacelyt supports both residential and commercial projects."
      }
    ],
    relatedServices: ["planning", "construction", "interior-design"],
    seoTitle: "Architecture Services | Floor Plans, Elevations & Design | Spacelyt",
    seoDescription:
      "Spacelyt provides architecture services including concept planning, floor plans, elevations, functional layouts, and design coordination.",
    primaryCTA: "Start Consultation",
    secondaryCTA: "View Process"
  },
  {
    slug: "construction",
    title: "Construction",
    eyebrow: "Service 03 / Site Execution",
    heroTitle: "Construction Managed From Start to Finish",
    heroSubtitle:
      "From civil work to execution coordination, we help turn planned designs into finished spaces with clarity and control.",
    shortDescription:
      "Civil work, procurement, vendor coordination, quality checks, and site execution under one accountable team.",
    longDescription:
      "Construction needs coordination, sequencing, materials, supervision, and accountability. Spacelyt supports clients with a structured execution approach so work moves from plan to site with fewer gaps.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=82",
    benefits: [
      "One team coordinating scope and execution",
      "Clearer sequencing across site stages",
      "Better material and vendor alignment",
      "Stage-wise checks before handover"
    ],
    scopeItems: [
      "Civil work coordination",
      "Site execution",
      "Vendor coordination",
      "Material procurement support",
      "Work sequencing",
      "Quality checks",
      "Timeline tracking",
      "Handover support"
    ],
    processSteps: [
      "Scope finalisation",
      "Site preparation",
      "Vendor and material coordination",
      "Civil and execution work",
      "Stage-wise quality checks",
      "Final handover"
    ],
    deliverables: [
      "Execution plan",
      "Material coordination list",
      "Site progress updates",
      "Quality check notes",
      "Handover checklist"
    ],
    faqs: [
      {
        question: "Do you handle complete construction?",
        answer: "Yes. Construction can be handled as part of a turnkey project or as a dedicated service."
      },
      {
        question: "Can you work from existing drawings?",
        answer: "Yes, if the drawings and scope are clear."
      },
      {
        question: "Do you coordinate materials and vendors?",
        answer: "Yes. Material and vendor coordination can be included based on project scope."
      }
    ],
    relatedServices: ["planning", "architecture", "building-solutions"],
    seoTitle: "Construction Services | Site Execution & Turnkey Build | Spacelyt",
    seoDescription:
      "Spacelyt manages construction work, site execution, material coordination, vendor management, quality checks, and handover support.",
    primaryCTA: "Start Consultation",
    secondaryCTA: "View Process"
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    eyebrow: "Service 04 / Interior Systems",
    heroTitle: "Interior Design That Feels Personal and Premium",
    heroSubtitle:
      "We design interiors that balance beauty, comfort, function, material quality, and practical execution.",
    shortDescription:
      "Material-led interior systems, lighting, furniture, modular work, and luxury detailing with practical build control.",
    longDescription:
      "Interior design is more than styling. Spacelyt creates interior systems that work for daily life, business use, storage, movement, lighting, furniture, and long-term comfort.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=82",
    benefits: [
      "Personalised interiors with practical build control",
      "Better storage, movement, lighting, and comfort",
      "Material choices aligned with execution",
      "Residential and commercial design support"
    ],
    scopeItems: [
      "Space styling",
      "Furniture planning",
      "Lighting design",
      "Material selection",
      "Modular work direction",
      "Storage planning",
      "False ceiling and wall treatments",
      "Interior execution coordination"
    ],
    processSteps: [
      "Lifestyle or business requirement study",
      "Design style direction",
      "Layout and furniture planning",
      "Material and finish selection",
      "Execution coordination",
      "Styling and handover"
    ],
    deliverables: [
      "Interior concept direction",
      "Furniture layout",
      "Material palette",
      "Lighting direction",
      "Execution scope",
      "Final styling direction"
    ],
    faqs: [
      {
        question: "Do you design home interiors?",
        answer: "Yes. Spacelyt works on residential interiors including apartments, villas, and renovations."
      },
      {
        question: "Do you handle commercial interiors?",
        answer: "Yes. We support offices, retail, hospitality, and other commercial spaces."
      },
      {
        question: "Can interiors be part of a full turnkey project?",
        answer: "Yes. Interiors can be integrated with planning, architecture, construction, and exterior work."
      }
    ],
    relatedServices: ["planning", "architecture", "building-solutions"],
    seoTitle: "Interior Design Services | Residential & Commercial Interiors | Spacelyt",
    seoDescription:
      "Spacelyt designs practical, premium interiors with space planning, furniture, lighting, materials, modular systems, and execution coordination.",
    primaryCTA: "Start Consultation",
    secondaryCTA: "View Process"
  },
  {
    slug: "exterior-design",
    title: "Exterior Design",
    eyebrow: "Service 05 / Facade Identity",
    heroTitle: "Exterior Design That Creates Lasting First Impressions",
    heroSubtitle:
      "We shape facades, entrances, outdoor areas, lighting, and elevation details into one strong exterior identity.",
    shortDescription:
      "Facade, entrance, landscape, lighting, boundary, and elevation work shaped as one exterior language.",
    longDescription:
      "Exterior design defines how a property is first experienced. Spacelyt creates exterior concepts that connect architecture, materials, lighting, landscape, and entrance experience.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=82",
    benefits: [
      "A stronger first impression for the property",
      "Facade, entrance, landscape, and lighting alignment",
      "Material direction suited to exterior conditions",
      "Exterior identity that connects with interiors"
    ],
    scopeItems: [
      "Facade design",
      "Elevation improvement",
      "Entrance design",
      "Landscape planning",
      "Outdoor lighting",
      "Boundary and gate design",
      "Material selection",
      "Exterior execution coordination"
    ],
    processSteps: [
      "Existing site or elevation study",
      "Exterior concept direction",
      "Facade and entrance planning",
      "Material and lighting direction",
      "Execution detailing",
      "Final exterior handover"
    ],
    deliverables: [
      "Exterior concept",
      "Facade direction",
      "Material palette",
      "Outdoor lighting plan",
      "Entrance design direction",
      "Execution scope"
    ],
    faqs: [
      {
        question: "Can you redesign an existing building exterior?",
        answer: "Yes. Spacelyt can support facade upgrades and exterior improvements."
      },
      {
        question: "Do you handle landscape and lighting?",
        answer: "Yes. Landscape and outdoor lighting can be included in the exterior design scope."
      },
      {
        question: "Can exterior design connect with interiors?",
        answer: "Yes. We can create a consistent design language from outside to inside."
      }
    ],
    relatedServices: ["architecture", "interior-design", "building-solutions"],
    seoTitle: "Exterior Design Services | Facade, Entrance & Outdoor Design | Spacelyt",
    seoDescription:
      "Spacelyt creates exterior design solutions including facade design, entrance planning, landscape direction, outdoor lighting, and elevation improvements.",
    primaryCTA: "Start Consultation",
    secondaryCTA: "View Process"
  },
  {
    slug: "building-solutions",
    title: "Building Solutions",
    eyebrow: "Service 06 / Complete Delivery",
    heroTitle: "Complete Building Solutions Under One Roof",
    heroSubtitle:
      "One coordinated system for planning, design, construction, interiors, exteriors, project management, and final delivery.",
    shortDescription:
      "Residential, commercial, renovation, turnkey execution, project management, and final delivery connected.",
    longDescription:
      "Building solutions bring every major service together. Spacelyt helps clients avoid scattered vendors by connecting the complete project journey under one coordinated process.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=82",
    benefits: [
      "One coordinated project system",
      "Less dependency on scattered vendors",
      "Planning, design, build, and handover connected",
      "Suitable for residential, commercial, and renovation work"
    ],
    scopeItems: [
      "Residential projects",
      "Commercial projects",
      "Renovations",
      "Turnkey execution",
      "Project management",
      "Planning and design coordination",
      "Construction and interiors",
      "Handover support"
    ],
    processSteps: [
      "Consultation and requirement mapping",
      "Site and scope planning",
      "Design and execution strategy",
      "Vendor and material coordination",
      "Stage-wise execution",
      "Quality checks and handover"
    ],
    deliverables: [
      "Complete project scope",
      "Service roadmap",
      "Design and execution coordination",
      "Timeline and milestone direction",
      "Quality and handover checklist"
    ],
    faqs: [
      {
        question: "What does building solutions include?",
        answer:
          "It includes planning, design, construction, interiors, exteriors, project coordination, and handover support based on the project requirement."
      },
      {
        question: "Is this suitable for full turnkey projects?",
        answer: "Yes. This is the best option for clients who want one team to manage the complete project journey."
      },
      {
        question: "Do you work on both residential and commercial projects?",
        answer: "Yes. Spacelyt supports residential, commercial, renovation, and complete turnkey projects."
      }
    ],
    relatedServices: ["planning", "architecture", "construction"],
    seoTitle: "Building Solutions | Complete Turnkey Project Services | Spacelyt",
    seoDescription:
      "Spacelyt offers complete building solutions for residential, commercial, renovation, and turnkey projects from planning to final handover.",
    primaryCTA: "Start Consultation",
    secondaryCTA: "View Process"
  }
];

export const servicePageMap = new Map(servicePages.map((service) => [service.slug, service]));

export function getServicePage(slug: string) {
  return servicePageMap.get(slug);
}

export function getRelatedServices(service: ServicePageData) {
  return service.relatedServices
    .map((slug) => servicePageMap.get(slug))
    .filter((related): related is ServicePageData => Boolean(related));
}
