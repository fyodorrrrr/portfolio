export const projects = [
  {
    slug: "agriwise",
    title: "AgriWise",
    meta: "Hackathon project · 2026",
    caption: "GIS + AI decision support for land-use planning.",
    description:
      "A GIS and AI-driven decision-support platform helping farmers assess land suitability and plan crop decisions from geospatial and climate data.",
    role: "Team of 3 · owned backend, RAG chatbot, and mobile UX",
    problem:
      "Agricultural data for CALABARZON is scattered across spreadsheets, PDFs, and other public sources, making it difficult to turn into localized crop and market insights for farmers and agricultural stakeholders.",
    built: [
      "Built the RAG chatbot with separate trusted channels for forecast data and agricultural guidance. Forecast numbers are injected from server-side context, while manuals provide page-level citations, with deterministic guards preventing unsupported figures and citations from reaching users.",
      "Built the core forecast service and artifact registry to load and validate versioned model bundles at startup, serve typed province-level forecasts, and explicitly handle insufficient data. Also fixed a configuration issue that silently dropped demand models.",
      "Built a config-driven opportunity scorer that compares demand, supply, and price across provinces using normalized peer-relative scores, dynamically adjusting weights when data is missing and blocking scoring when the peer set is incomplete.",
      "Built an explainable market recommendation engine that ranks markets using farmer-relative distance, market size, coordinate confidence, and analytics support, with per-market score breakdowns instead of a black-box ranking.",
    ],
    outcome:
      "Placed Top 3 at Hack4AProgress 2026. The team's rice price model achieved PHP 1.83/kg MAE vs. PHP 6.00/kg for a seasonal-naive baseline (R² = 0.68). Built and shipped feature-complete within a 2-day hackathon.",
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
    meta: "Capstone project · 2025",
    caption: "AI-assisted review and continuous learning for Self-Paced Learning Modules.",
    description:
      "An AI-assisted evaluation system helping LSPU's curriculum office review Self-Paced Learning Modules (SLMs) for content accuracy, curriculum alignment, gender sensitivity, and IP compliance — with a feedback loop that learns from reviewer corrections.",
    role: "Team project · owned the fine-tuning feedback loop, model validation, and rubric-based scoring architecture",
    problem:
      "LSPU's curriculum office reviews Self-Paced Learning Modules (SLMs) against institutional criteria covering content accuracy, curriculum alignment, gender sensitivity, and intellectual property compliance. EquipED assists reviewers through domain-specific AI evaluators, but the AI outputs remain advisory — reviewers can accept, edit, or reject the results. The challenge was to turn these human corrections into a reliable learning loop without replacing human judgment or training on outputs that reviewers never corrected.",
    built: [
      "Engineered a feedback pipeline that converts reviewer corrections into DPO preference pairs for continuous learning, ensuring training data reflects actual reviewer decisions rather than synthetic or untouched evaluations.",
      "Implemented a Base-vs-Adapter validation workflow to determine whether fine-tuning actually improves evaluation quality. The system evaluates adapters on held-out reviewer corrections and classifies results as better, worse, or inconclusive.",
      "Architected Coordinator scoring around editable institutional rubrics and source-grounded evidence, allowing evaluation criteria to evolve without changing the underlying application logic.",
    ],
    outcome:
      "Delivered a feature-complete workflow for evaluating SLMs, learning from reviewer corrections, and validating model improvements without removing human oversight.",
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
    meta: "Client project · 2024",
    caption: "Member records, announcements, and reminders for a church community.",
    description:
      "A web-based management system for a church community, handling member records, targeted announcements and email, and birthday and anniversary reminders, built with Django and PostgreSQL.",
    role: "Team project · owned backend features for member archiving, announcements and email delivery, and reminders",
    problem:
      "The church needed a centralized system for managing member records and community communication. Staff needed to manage member lifecycles, identify upcoming birthdays and anniversaries, and send targeted announcements without relying on manual processes.",
    built: [
      "Designed a soft-archive workflow that preserves member history instead of permanently deleting records. Added archive, restore, and bulk-archive operations with transactional writes and staff-only status changes.",
      "Delivered the announcements and email workflow with scheduled publishing, expiration, ministry-based audience targeting, public feeds, and recipient previews. Separated email delivery from the API layer and covered the service with a 31-test pytest suite for recipient resolution, inactive-member filtering, delivery results, and failure handling.",
      "Implemented birthday and anniversary reminders that calculate upcoming occurrences within a configurable window, including year rollover and leap-day handling.",
    ],
    outcome:
      "Shipped backend features used by the client's staff for member management and community communication. The team's subsequent work extended these backend foundations into the public API and announcement UI.",
    tech: ["Django", "Python", "PostgreSQL", "REST APIs", "pytest"],
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
