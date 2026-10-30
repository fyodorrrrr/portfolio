// Main-page thumbnails live in public/assets/thumbnails/<slug>.png (3600x2025).
// Replace a file there to change a project's thumbnail; it is not shown on the detail page.
const thumbnail = (slug) => ({ src: `/assets/thumbnails/${slug}.png`, width: 3600, height: 2025 });

export const projects = [

{
  slug: "agriwise",
  title: "AgriWise",
  caption:
    "GIS and AI-powered decision support for smarter agricultural planning. Top 3 at DOST Hack4AProgress 2026.",

  description:
    "AgriWise combines geospatial data, agricultural forecasts, and AI-powered guidance to help farmers and agricultural stakeholders explore crop opportunities, compare markets, and make more informed planning decisions.",

  role:
    "Team of 3 · Responsible for backend development, RAG chatbot, and mobile UX",

  problem:
    "Agricultural information across CALABARZON is scattered across spreadsheets, reports, and public datasets, making it difficult for farmers and stakeholders to access localized insights. The challenge was bringing these sources together into a platform that makes forecasts, market opportunities, and agricultural guidance easier to understand and act on.",

  built: [
    "Developed a RAG-powered agricultural assistant that combines trusted forecast data with cited agricultural references. Added safeguards against unsupported figures and citations to make AI-generated guidance more reliable.",

    "Built the forecasting backend to load and validate versioned machine learning models, deliver province-level predictions, and handle missing data explicitly. Also resolved a configuration issue that prevented demand models from loading correctly.",

    "Developed an opportunity scoring system that compares demand, supply, and prices across provinces, adjusting weights when data is missing and withholding scores when comparisons would be unreliable.",

    "Built an explainable market recommendation engine that considers distance, market size, and data confidence, giving farmers ranked market options with transparent scoring breakdowns.",
  ],

  outcome:
    "Placed among the Top 3 at DOST Hack4AProgress 2026, delivering a working GIS and AI-powered agricultural decision-support platform within a 2-day hackathon.",

  tech: [
    "Python",
    "GIS",
    "Machine Learning",
    "RAG",
    "React",
  ],

  thumbnail: {
    ...thumbnail("agriwise"),
    src: "/assets/thumbnails/agriwise.png?v=badge-free",
  },

  gallery: [
    {
      src: "/assets/works/agriwise/mapping.png?v=badge-free",
      alt: "AgriWise mapping view showing province-level rice demand across CALABARZON and nearby markets",
      width: 1897,
      height: 939,
    },
    {
      src: "/assets/works/agriwise/dashboard.png?v=badge-free",
      alt: "AgriWise dashboard summarizing agricultural forecasts and opportunities",
      width: 1897,
      height: 943,
    },
    {
      src: "/assets/works/agriwise/forecasting.png?v=badge-free",
      alt: "AgriWise forecasting view displaying province-level price predictions",
      width: 1900,
      height: 946,
    },
  ],

  github: "#",
  demo: "#",
  featured: true,
}
,

{
  slug: "equiped",
  title: "EquipED",
  caption: "AI-assisted evaluation of learning materials with human feedback.",
  description:
    "EquipED helps academic reviewers evaluate learning materials against institutional standards. It combines specialized AI agents with human feedback, allowing reviewers to refine evaluations and contribute to future model improvements.",

  role:
    "Team project · Responsible for the feedback pipeline, model validation, and rubric-based scoring architecture",

  problem:
    "Reviewing Self-Paced Learning Modules (SLMs) involves checking content accuracy, curriculum alignment, gender sensitivity, and intellectual property compliance. EquipED uses specialized AI agents to assist with these evaluations while keeping reviewers in control of final decisions. The challenge was turning reviewer corrections into meaningful training data without treating unreviewed AI outputs as reliable feedback.",

  built: [
    "Built a reviewer feedback pipeline that converts corrections into DPO preference pairs, using explicit human feedback for training instead of treating untouched AI evaluations as reviewer preferences.",

    "Developed a Base-vs-Adapter validation workflow using held-out reviewer corrections, enabling model comparisons that distinguish improvements, regressions, and inconclusive results.",

    "Designed configurable rubric-based scoring with source-grounded evidence, allowing institutional evaluation criteria to change without rewriting the underlying scoring logic.",
  ],

  outcome:
    "Built a workflow connecting AI-assisted evaluation, reviewer feedback, DPO training-data preparation, and model validation while keeping human reviewers responsible for final decisions.",

  tech: [
    "Python",
    "LLM Agents",
    "DPO",
    "Evaluation Pipelines",
    "Prompt Engineering",
  ],

  thumbnail: thumbnail("equiped_thumb_"),

  gallery: [
    {
      src: "/assets/works/equipED/overview.png",
      alt: "EquipED overview of module evaluations",
      width: 1910,
      height: 941,
    },
    {
      src: "/assets/works/equipED/sme-workspace.png",
      alt: "EquipED subject-matter-expert review workspace",
      width: 1910,
      height: 948,
    },
    {
      src: "/assets/works/equipED/model-validation.png",
      alt: "EquipED model validation screen comparing base model and adapter results",
      width: 1908,
      height: 942,
    },
    {
      src: "/assets/works/equipED/sign-in.png",
      alt: "EquipED sign-in screen",
      width: 1917,
      height: 944,
    },
  ],

  github: "#",
  demo: "#",
  featured: true,
}

,

{
  slug: "sbcc-management-system",
  title: "SBCC Management System",
  caption:
    "Member management and community communication in one platform.",

  description:
    "A centralized web-based management system that helps church staff manage member information, coordinate church activities, streamline administrative tasks, and improve communication across the congregation.",

  role:
    "Team project · Responsible for backend development of member archiving, announcements, email delivery, and reminders",

  problem:
    "Managing member records, important dates, and community announcements through separate manual processes made day-to-day administration more difficult. The challenge was creating a centralized system where staff could maintain member information, communicate with specific groups, and keep track of upcoming events.",


built: [
  "Developed a soft-archive system with staff-only access, bulk operations, and transactional safeguards, preserving member history while allowing staff to manage inactive records without permanent data loss.",

  "Built an announcement and email delivery workflow with scheduled publishing, ministry-based targeting, and recipient previews, helping staff communicate with the right members more efficiently. Separated email delivery from the API layer and validated the workflow through 31 automated tests.",

  "Implemented birthday and anniversary reminders with configurable date ranges, year-rollover handling, and leap-day support, helping staff identify upcoming occasions without manually checking member records.",
],


  outcome:
    "Delivered backend features used by church staff for member management and community communication, supported by 31 automated tests covering announcement delivery and failure handling.",

  tech: [
    "Django",
    "Python",
    "PostgreSQL",
    "REST APIs",
    "pytest",
  ],

  thumbnail: thumbnail("sbcc_thumb"),

  gallery: [
    {
      src: "/assets/works/sbcc/sbcc.png",
      alt: "SBCC portal dashboard showing member statistics, daily verse, and recent activities",
      width: 1918,
      height: 866,
    },
    {
      src: "/assets/works/sbcc/sbcc_2.png",
      alt: "SBCC public landing page",
      width: 1892,
      height: 944,
    },
  ],

  github: "#",
  demo: "#",
  featured: false,
}
,

{
  slug: "haul-thrift-marketplace",
  title: "Haul",
  caption: "A cross-platform marketplace for preloved items.",
  description:
    "A cross-platform thrift marketplace that connects buyers and sellers through a single application, making it easier to discover secondhand items, manage listings, and complete purchases.",

  role:
    "Team project · Responsible for Flutter application architecture, Firebase integration, marketplace workflows, and access controls",

  problem:
    "Buyers and sellers have different needs in a secondhand marketplace. Buyers need an easy way to discover and purchase items, while sellers need tools to manage listings, inventory, and orders. The challenge was building a unified application that supports both experiences with consistent, secure data management.",

  built: [
    "Developed the cross-platform Flutter application with separate buyer and seller experiences, using Provider for state management and a modular structure for screens, models, and reusable widgets to keep the application maintainable as features expanded.",

    "Integrated Firebase Authentication, Cloud Firestore, and Firebase Storage to support user accounts, product listings, orders, and images, keeping marketplace data persistent and accessible across sessions and devices.",

    "Implemented role-based marketplace workflows and Firebase security rules to protect product management and order operations, ensuring users can only access or modify data they are authorized to manage."
  ],

  outcome:
    "Delivered a Flutter marketplace with Firebase-backed authentication, persistent product and order data, and integrated buyer and seller workflows across Android, iOS, and Web.",

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
    {
      src: "/assets/thumbnails/haul-thrift-shop.png",
      alt: "Haul marketplace screens showing product discovery, home feed, and login",
      width: 3600,
      height: 2025
    }
  ],

  github: "https://github.com/fyodorrrrr/haul-app",
  demo: "#",
  featured: false
}
];
