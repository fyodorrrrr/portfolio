export const projects = [
  {
    slug: "agriwise",
    title: "AgriWise",
    meta: "Personal project · 2025",
    caption: "GIS + AI decision support for land-use planning.",
    description:
      "A GIS and AI-driven decision-support platform helping farmers assess land suitability and plan crop decisions from geospatial and climate data.",
    whatIDid:
      "Smallholder farmers lacked an accessible way to combine satellite/GIS layers with agronomic data to make land-use decisions. I built a mapping pipeline that overlays soil, terrain, and climate datasets, then layered an AI recommendation model on top to translate raw geospatial data into plain-language guidance.",
    tech: ["Python", "GIS", "Machine Learning", "PostgreSQL", "React"],
    image: { src: "/assets/works/agriwise/mapping.png", width: 1897, height: 939 },
    gallery: [
      { src: "/assets/works/agriwise/dashboard.png", width: 1897, height: 943 },
      { src: "/assets/works/agriwise/forecasting.png", width: 1900, height: 946 },
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    slug: "equiped",
    title: "EquipED",
    meta: "Personal project · 2025",
    caption: "Multi-agent LLM evaluation for small language models.",
    description:
      "A multi-agent, LLM-based evaluation system for benchmarking small language models (SLMs) against task-specific rubrics.",
    whatIDid:
      "Evaluating SLM outputs at scale needed more nuance than static test sets or single-model scoring could provide. I designed a pipeline of cooperating LLM agents — generation, critique, and scoring roles — that evaluate and cross-check SLM responses against rubric-driven criteria.",
    tech: ["Python", "LLM Agents", "Evaluation Pipelines", "Prompt Engineering"],
    image: { src: "/assets/works/equipED/model-validation.png", width: 1908, height: 942 },
    gallery: [
      { src: "/assets/works/equipED/sign-in.png", width: 1917, height: 944 },
      { src: "/assets/works/equipED/overview.png", width: 1910, height: 941 },
      { src: "/assets/works/equipED/sme-workspace.png", width: 1910, height: 948 },
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    slug: "sbcc-management-system",
    title: "SBCC Management System",
    meta: "Academic project · 2024",
    caption: "Records, scheduling, and reporting for a church community.",
    description:
      "A web-based management system handling records, scheduling, and reporting for a church community, built with Django and PostgreSQL.",
    whatIDid:
      "Manual, paper-based record-keeping made membership data and event scheduling hard to track and update. I designed the REST API and relational data models from scratch, then built the admin and member-facing flows around them.",
    tech: ["Django", "Python", "PostgreSQL", "REST APIs"],
    image: null,
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    slug: "haul-thrift-shop",
    title: "Haul Thrift Shop",
    meta: "Personal project · 2024",
    caption: "Mobile thrift shop with real-time inventory and checkout.",
    description:
      "A mobile thrift shop application built with Flutter and Firebase, featuring buyer and seller flows, wishlist, checkout, and real-time updates.",
    whatIDid:
      "Independent thrift sellers needed a lightweight mobile storefront without building custom infrastructure. I used Firestore for real-time inventory and order state, with Provider for predictable state management across buyer and seller flows.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider"],
    image: { src: "/assets/HAUL.png", width: 2245, height: 1587 },
    github: "https://github.com/fyodorrrrr/haul-app",
    demo: "#",
    featured: false,
  },
];
