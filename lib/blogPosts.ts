export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "full-turnkey-project-guide",
    title: "What Is a Full Turnkey Project? A Complete Guide for Homeowners",
    excerpt: "Understand how full turnkey project delivery connects planning, architecture, construction, interiors, exteriors, and handover under one team.",
    category: "Full Turnkey",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82",
    seoTitle: "Full Turnkey Project Guide | Turnkey Construction and Interior Design",
    seoDescription: "Learn what full turnkey project delivery means for homes, offices, renovations, construction, architecture, interiors, exteriors, and final handover.",
    keywords: ["full turnkey project", "turnkey construction", "turnkey interior design", "complete home renovation", "project handover"],
    sections: [
      {
        heading: "Full turnkey means one accountable project path",
        body: "A full turnkey project brings design, planning, construction, interior work, exterior development, execution coordination, and final handover into one connected process. Instead of managing multiple vendors separately, clients work through one coordinated system."
      },
      {
        heading: "Why turnkey delivery reduces confusion",
        body: "When architecture, interiors, construction, and materials are planned together, the project becomes easier to control. Timelines, budgets, site decisions, and finish expectations stay clearer because every stage is connected from the beginning."
      },
      {
        heading: "Who should choose full turnkey service",
        body: "Full turnkey service is useful for homeowners, commercial space owners, renovation clients, and anyone who wants a professional team to plan, execute, and hand over the project with fewer coordination gaps."
      }
    ]
  },
  {
    slug: "architecture-planning-before-construction",
    title: "Why Architecture Planning Should Come Before Construction",
    excerpt: "Good architecture planning helps avoid budget confusion, site changes, and execution delays before construction begins.",
    category: "Architecture",
    date: "May 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
    seoTitle: "Architecture Planning Before Construction | Spacelyt",
    seoDescription: "Discover why architecture planning, site study, layout design, budget direction, and construction coordination should happen before execution starts.",
    keywords: ["architecture planning", "construction planning", "home architecture design", "site planning", "layout design"],
    sections: [
      {
        heading: "Architecture turns ideas into buildable direction",
        body: "Architecture planning defines how the space should function, how rooms connect, how natural light enters, and how construction details should respond to the site. Without this clarity, execution can become reactive and expensive."
      },
      {
        heading: "Planning protects budget and timeline",
        body: "Early planning helps identify site limitations, material expectations, structural needs, and space priorities before work begins. This reduces unnecessary changes during construction."
      },
      {
        heading: "A stronger start creates a better handover",
        body: "When the design direction is clear, construction teams, interior teams, and exterior teams can work from the same project understanding. That alignment improves the final outcome."
      }
    ]
  },
  {
    slug: "interior-design-for-modern-homes",
    title: "Interior Design Ideas for Modern Homes That Feel Premium and Practical",
    excerpt: "Explore interior design choices that balance storage, lighting, furniture, material quality, and daily comfort.",
    category: "Interior",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=82",
    seoTitle: "Modern Home Interior Design Ideas | Premium Interior Design",
    seoDescription: "Explore modern home interior design ideas for lighting, storage, furniture, modular kitchens, materials, comfort, and premium finishes.",
    keywords: ["modern home interior design", "premium interiors", "modular kitchen design", "living room interior", "interior design ideas"],
    sections: [
      {
        heading: "Premium interiors begin with function",
        body: "A beautiful interior should support daily life. Storage, circulation, lighting, seating, and maintenance needs must be planned before finishes are selected."
      },
      {
        heading: "Materials shape the final mood",
        body: "Wood textures, stone finishes, fabric, lighting temperature, wall treatments, and hardware all change how the space feels. Premium design comes from choosing these elements as one palette."
      },
      {
        heading: "Interior design should connect with construction",
        body: "Electrical points, false ceiling levels, plumbing, wall thickness, door positions, and furniture dimensions should be planned early so the final interior feels clean and intentional."
      }
    ]
  },
  {
    slug: "construction-quality-checklist",
    title: "Construction Quality Checklist Before Starting a Residential Project",
    excerpt: "A practical checklist for residential construction quality, site coordination, material planning, and project milestones.",
    category: "Construction",
    date: "May 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=82",
    seoTitle: "Residential Construction Quality Checklist | Spacelyt",
    seoDescription: "Use this residential construction checklist for site planning, materials, structural work, quality checks, contractor coordination, and handover readiness.",
    keywords: ["residential construction", "construction quality checklist", "home construction", "site execution", "contractor coordination"],
    sections: [
      {
        heading: "Define the scope before work starts",
        body: "Construction quality begins with a clear scope. Drawings, material direction, budget expectations, timelines, and site responsibilities should be documented before execution begins."
      },
      {
        heading: "Track milestones instead of only the final result",
        body: "Foundation, structure, masonry, waterproofing, electrical, plumbing, flooring, painting, and finishing all need stage-wise checks. Small misses in early stages can affect the final finish."
      },
      {
        heading: "Coordinate construction with interiors",
        body: "Interior requirements such as lighting, modular units, ceiling design, appliances, and furniture placement should inform construction decisions early."
      }
    ]
  },
  {
    slug: "exterior-design-and-facade-planning",
    title: "Exterior Design and Facade Planning for a Strong First Impression",
    excerpt: "Learn how exterior design connects facade, elevation, landscape, lighting, entrance, and outdoor usability.",
    category: "Exterior",
    date: "May 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=82",
    seoTitle: "Exterior Design and Facade Planning | Elevation Design Ideas",
    seoDescription: "Learn exterior design and facade planning ideas for elevation, entrance, landscape, outdoor lighting, boundary walls, and premium first impressions.",
    keywords: ["exterior design", "facade design", "elevation design", "landscape planning", "outdoor lighting"],
    sections: [
      {
        heading: "Exterior design is more than elevation",
        body: "A strong exterior includes facade proportion, entrance experience, lighting, boundary design, landscape, material durability, and how the building looks during the day and night."
      },
      {
        heading: "Materials must suit weather and maintenance",
        body: "Exterior materials should be chosen for visual quality as well as durability. Heat, rain, dust, and cleaning needs all affect long-term performance."
      },
      {
        heading: "Lighting completes the exterior story",
        body: "Facade lights, entry lights, pathway lights, and landscape lighting can make a property feel premium while improving safety and usability."
      }
    ]
  },
  {
    slug: "renovation-vs-new-construction",
    title: "Renovation vs New Construction: How to Choose the Right Project Path",
    excerpt: "Compare renovation and new construction based on budget, structure, timeline, design expectations, and long-term value.",
    category: "Planning",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82",
    seoTitle: "Renovation vs New Construction | Project Planning Guide",
    seoDescription: "Compare renovation and new construction for homes and commercial spaces based on budget, structure, timeline, design scope, and turnkey project planning.",
    keywords: ["renovation vs construction", "home renovation", "new construction planning", "turnkey renovation", "project planning"],
    sections: [
      {
        heading: "Start with the existing structure",
        body: "Renovation depends on what already exists. Structure, plumbing, electrical condition, wall layout, and waterproofing need to be understood before deciding how far the transformation can go."
      },
      {
        heading: "New construction gives more control",
        body: "A new project allows better control over layout, structure, elevation, services, and long-term planning. It can be more efficient when the existing space needs major changes."
      },
      {
        heading: "The right answer depends on goals",
        body: "Budget, timeline, design ambition, site condition, and long-term use should guide the decision. A planning consultation helps compare both paths clearly."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
