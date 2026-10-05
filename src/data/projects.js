// Main-page thumbnails live in public/assets/thumbnails/<slug>.png (3600x2025).
// Replace a file there to change a project's thumbnail; it is not shown on the detail page.
const thumbnail = (slug) => ({ src: `/assets/thumbnails/${slug}.png`, width: 3600, height: 2025 });

export const projects = [
  {
    slug: "agriwise",
    title: "AgriWise",
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
    thumbnail: thumbnail("agriwise"),
    gallery: [
      { src: "/assets/works/agriwise/mapping.png", width: 1897, height: 939 },
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
    thumbnail: thumbnail("equiped_thumb_"),
    gallery: [
      { src: "/assets/works/equipED/model-validation.png", width: 1908, height: 942 },
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
    thumbnail: thumbnail("sbcc_thumb"),
    gallery: [
      { src: "/assets/works/sbcc/sbcc.png", width: 1918, height: 866 },
      { src: "/assets/works/sbcc/sbcc_2.png", width: 1892, height: 944 },
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
  slug: "haul-thrift-marketplace",
  title: "Haul",
  caption: "A cross-platform thrift marketplace for buying and selling preloved items.",
  description:
    "A cross-platform marketplace application for buying and selling secondhand items, built with Flutter and Firebase, with separate buyer and seller workflows for discovery, listings, orders, and inventory management.",
  role:
    "Team project · built the Flutter application architecture, Firebase integration, marketplace workflows, and access controls",

  problem:
    "Secondhand marketplaces need to support two distinct workflows: buyers need a simple way to discover and purchase items, while sellers need tools to manage listings, inventory, and orders. The challenge was to bring both workflows into a single cross-platform application backed by a cloud data layer.",

  built: [
    "Built the cross-platform Flutter application with separate buyer and seller workflows, using Provider for state management and a structured architecture for models, screens, and reusable widgets.",

    "Integrated Firebase Authentication, Cloud Firestore, and Firebase Storage to manage user accounts, product data, orders, profiles, and product images, including user-specific order queries and persistent marketplace data.",

    "Implemented role-aware marketplace workflows and Firebase security rules covering product listings, seller inventory, and order management, restricting sensitive operations and order access to the users involved."
  ],

  outcome:
    "Delivered a cross-platform marketplace application for Android, iOS, and Web, with Firebase-backed authentication, persistent data, product management, and end-to-end buyer and seller workflows.",

  tech: [
    "Flutter",
    "Dart",
    "Firebase",
    "Cloud Firestore",
    "Firebase Storage",
    "Provider"
  ],

  thumbnail: thumbnail("haul-thrift-shop"),

  gallery: [
    { src: "/assets/thumbnails/haul-thrift-shop.png", width: 3600, height: 2025 },
  ],

  github: "https://github.com/fyodorrrrr/haul-app",
  demo: "#",
  featured: false,
},
];
