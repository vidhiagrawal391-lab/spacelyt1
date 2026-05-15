import {
  Boxes,
  Building2,
  DraftingCompass,
  Hammer,
  Landmark,
  LampFloor,
  type LucideIcon
} from "lucide-react";

export type Service = {
  number: string;
  slug: string;
  title: string;
  flowTitle: string;
  short: string;
  bullets: string[];
  icon: LucideIcon;
  image: string;
  art: "planning" | "architecture" | "construction" | "interior" | "exterior" | "solutions";
};

export const services: Service[] = [
  {
    number: "01",
    slug: "planning",
    title: "Planning That Defines the Entire Project",
    flowTitle: "Planning",
    short: "Site, space, budget, feasibility, material direction, and timeline strategy aligned before work begins.",
    bullets: ["Site analysis", "Space planning", "Budget planning", "Project feasibility", "Material direction", "Timeline strategy"],
    icon: DraftingCompass,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82",
    art: "planning"
  },
  {
    number: "02",
    slug: "architecture",
    title: "Architecture With Purpose, Form, and Function",
    flowTitle: "Architecture",
    short: "Concepts become buildable elevations, plans, documentation, and coordinated structural direction.",
    bullets: ["Concept design", "Elevation design", "Floor plans", "Structural coordination", "3D visualization", "Design documentation"],
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82",
    art: "architecture"
  },
  {
    number: "03",
    slug: "construction",
    title: "Construction Managed From Start to Finish",
    flowTitle: "Construction",
    short: "Civil work, procurement, vendor coordination, quality checks, and site execution under one accountable team.",
    bullets: ["Civil work", "Site execution", "Vendor coordination", "Material procurement", "Quality checks", "Timeline control"],
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=82",
    art: "construction"
  },
  {
    number: "04",
    slug: "interior-design",
    title: "Interior Design That Feels Personal and Premium",
    flowTitle: "Interior Design",
    short: "Material-led interior systems, lighting, furniture, modular work, and luxury detailing with practical build control.",
    bullets: ["Space styling", "Furniture planning", "Lighting design", "Material selection", "Modular work", "Luxury detailing"],
    icon: LampFloor,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82",
    art: "interior"
  },
  {
    number: "05",
    slug: "exterior-design",
    title: "Exterior Design That Creates Lasting First Impressions",
    flowTitle: "Exterior Design",
    short: "Facade, entrance, landscape, lighting, boundary, and elevation work shaped as one exterior language.",
    bullets: ["Facade design", "Landscape planning", "Outdoor lighting", "Entrance design", "Boundary wall design", "Elevation enhancement"],
    icon: Building2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82",
    art: "exterior"
  },
  {
    number: "06",
    slug: "building-solutions",
    title: "Full Turnkey Projects Under One Roof",
    flowTitle: "Full Turnkey",
    short: "Residential, commercial, renovation, turnkey execution, project management, and final handover connected.",
    bullets: ["Residential projects", "Commercial projects", "Renovations", "Turnkey execution", "Project management", "End-to-end delivery"],
    icon: Boxes,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=82",
    art: "solutions"
  }
];

export const processSteps = ["Consult", "Plan", "Design", "Source", "Execute", "Handover"];

export const whyCards = [
  "One company for complete execution",
  "Better coordination",
  "Clear timelines",
  "Premium design quality",
  "Transparent process",
  "End-to-end accountability"
];

export const portfolio = [
  {
    name: "Ivory Courtyard Residence",
    type: "Residential",
    categories: ["Residential", "Interiors", "Exteriors", "Construction"],
    scope: "Architecture, interiors, landscape, execution",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=82"
  },
  {
    name: "Studio Atrium Office",
    type: "Commercial",
    categories: ["Commercial", "Interiors", "Construction"],
    scope: "Planning, construction, interior systems",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=82"
  },
  {
    name: "Stone Facade House",
    type: "Exteriors",
    categories: ["Residential", "Exteriors"],
    scope: "Facade, outdoor lighting, entrance design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82"
  }
];
