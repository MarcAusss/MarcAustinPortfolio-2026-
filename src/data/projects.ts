export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;

  // Unpublished projects are hidden everywhere until their content is filled in.
  published: boolean;

  title: string;
  category: string;
  year: string;

  // Where the work was done, e.g. an organization or program
  context?: string;

  summary: string;
  description: string;

  technologies: string[];

  role: string;
  status?: string;

  challenge: string;
  solution: string;

  responsibilities: string[];

  /*
   * Screenshots live in public/images/developer/projects/<slug>/.
   * Each image block on the project page only renders when its image is set.
   */
  images?: {
    // Hero on the project page and preview on the projects index
    cover?: ProjectImage;

    // Side-by-side pair after the challenge section (first two are used)
    details?: ProjectImage[];

    // Full-width image after the highlights
    wide?: ProjectImage;
  };

  // Up to 3 measurable outcomes
  impact?: ProjectMetric[];

  // Internal government system: source is private, screenshots use sample data
  internal?: boolean;

  links?: {
    demo?: string;
    source?: string;
  };

  highlights: string[];
};

export const DOLE_CONTEXT =
  "DOLE Regional Office V · Government Internship Program";

export const INTERNAL_PROJECT_NOTE =
  "Internal government system. Source code isn't public; screenshots use sample data.";

export const projects: Project[] = [
  {
    slug: "tupad-ppe-inventory",
    published: true,

    title: "TUPAD PPE Inventory",

    category: "Inventory Management System",

    year: "2026",

    context: DOLE_CONTEXT,

    summary:
      "A PPE inventory and provincial distribution management system.",

    description:
      "The system manages PPE inventory from supply allocation through provincial distribution while maintaining visibility into available quantities, movements and delivery documentation.",

    technologies: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "MySQL",
      "Alpine.js",
    ],

    role: "Full Stack Developer / System Designer",

    status: "In use across all provincial offices, Region V",

    challenge:
      "Managing PPE allocations across different provinces required several related workflows including call-offs, beginning inventory, distributions, delivery receipts and ending balances.",

    solution:
      "The application connects supply, TSSD and accounting workflows through shared inventory records. Quantities are tracked through structured transactions so users can follow how PPE moves throughout the system.",

    responsibilities: [
      "Workflow architecture",
      "Database development",
      "Inventory logic",
      "Laravel backend",
      "Frontend development",
      "UI/UX design",
      "Distribution workflow",
      "Reporting interfaces",
    ],

    highlights: [
      "Provincial PPE allocation",
      "Inventory movement tracking",
      "Distribution batches",
      "Delivery receipt management",
      "Beginning and ending inventory",
      "Role-based workflows",
    ],

    images: {
      cover: {
        src: "/images/developer/projects/tupad-ppe-inventory/dashboard.jpg",
        alt: "TUPAD PPE Inventory distribution monitoring dashboard with PPE totals per provincial office, call-off status and province receiving progress",
      },
      // TODO(marc): add more screenshots to public/images/developer/projects/tupad-ppe-inventory/ and set images.details / wide
    },

    // TODO(marc): up to 3 impact metrics, e.g. { value: "…", label: "provincial offices using it" }
    impact: [],

    // TODO(marc): confirm the dashboard screenshot shows sample data, since this note says so
    internal: true,
  },

  {
    slug: "clpmis",
    published: true,

    title: "CLPMIS",

    category: "Information System",

    year: "2026",

    context: DOLE_CONTEXT,

    summary:
      "A centralized platform for child labor profiling, monitoring, case management and reporting.",

    description:
      "CLPMIS was designed to organize child labor information into a structured digital workflow, allowing authorized personnel to manage profiles, locations, monitoring activities and administrative processes from one centralized system.",

    technologies: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "MySQL",
      "JavaScript",
    ],

    role: "Full Stack Developer / UI Designer",

    // TODO(marc): confirm CLPMIS status (was "In Development") and set `status`

    challenge:
      "Child labor records involve multiple pieces of information, administrative roles and location-based data. The system needed to reduce fragmented record handling while maintaining a clear workflow for profiling, review, monitoring and reporting.",

    solution:
      "I designed the application around structured user roles, centralized records and reusable location data. The interface focuses on reducing form complexity while giving administrators clear visibility into records and workflow status.",

    responsibilities: [
      "System architecture",
      "Database design",
      "Laravel backend development",
      "UI/UX design",
      "Responsive frontend development",
      "Role and permission workflows",
      "Data validation",
      "Location data integration",
    ],

    // TODO(marc): add CLPMIS screenshots to public/images/developer/projects/clpmis/ and set images.cover / details / wide
    images: {},

    // TODO(marc): up to 3 impact metrics
    impact: [],

    internal: true,

    highlights: [
      "Centralized child labor profiling",
      "Role-based access control",
      "PSGC location integration",
      "Monitoring workflow",
      "Administrative record management",
      "Responsive interface",
    ],
  },

  {
    slug: "tupad-reporting-system",
    published: false,

    title: "TUPAD Reporting System",
    category: "TODO(marc): category",
    year: "TODO(marc): year",
    context: DOLE_CONTEXT,
    summary: "TODO(marc): one-sentence summary",
    description: "TODO(marc): description",
    technologies: [], // TODO(marc): technologies
    role: "TODO(marc): role",
    status: "TODO(marc): status",
    challenge: "TODO(marc): challenge",
    solution: "TODO(marc): solution",
    responsibilities: [], // TODO(marc): responsibilities
    highlights: [], // TODO(marc): highlights
    images: {}, // TODO(marc): screenshots in public/images/developer/projects/tupad-reporting-system/
    impact: [], // TODO(marc): up to 3 impact metrics
    internal: true,
  },

  {
    slug: "dilp-beneficiary-mapping",
    published: false,

    title: "DILP Beneficiary & Undertaking Mapping",
    category: "TODO(marc): category",
    year: "TODO(marc): year",
    context: DOLE_CONTEXT,
    summary: "TODO(marc): one-sentence summary",
    description: "TODO(marc): description",
    technologies: [], // TODO(marc): technologies
    role: "TODO(marc): role",
    status: "TODO(marc): status",
    challenge: "TODO(marc): challenge",
    solution: "TODO(marc): solution",
    responsibilities: [], // TODO(marc): responsibilities
    highlights: [], // TODO(marc): highlights
    images: {}, // TODO(marc): screenshots in public/images/developer/projects/dilp-beneficiary-mapping/
    impact: [], // TODO(marc): up to 3 impact metrics
    internal: true,
  },

  {
    slug: "dilp-reporting-system",
    published: false,

    title: "DILP Reporting System",
    category: "TODO(marc): category",
    year: "TODO(marc): year",
    context: DOLE_CONTEXT,
    summary: "TODO(marc): one-sentence summary",
    description: "TODO(marc): description",
    technologies: [], // TODO(marc): technologies
    role: "TODO(marc): role",
    status: "TODO(marc): status",
    challenge: "TODO(marc): challenge",
    solution: "TODO(marc): solution",
    responsibilities: [], // TODO(marc): responsibilities
    highlights: [], // TODO(marc): highlights
    images: {}, // TODO(marc): screenshots in public/images/developer/projects/dilp-reporting-system/
    impact: [], // TODO(marc): up to 3 impact metrics
    internal: true,
  },

  {
    slug: "lease-for-me",
    published: true,

    title: "Lease For Me",

    category: "Property Platform",

    // TODO(marc): confirm year; your CV lists Lease For Me under 2022–2024
    year: "2026",

    summary:
      "A modern property leasing experience focused on simplifying the rental journey.",

    description:
      "Lease For Me is a responsive property website designed around property discovery and leasing services, with an emphasis on approachable content, clear calls to action and a streamlined browsing experience.",

    technologies: [
      "Laravel",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
    ],

    role: "Frontend Developer / UI Designer",

    status: "Completed",

    challenge:
      "Property leasing websites can quickly become visually dense. The challenge was organizing listings, services, trust information and calls to action while keeping the experience straightforward.",

    solution:
      "I created a clear content hierarchy built around property discovery and leasing services. Reusable UI sections provide consistency while responsive layouts keep the experience usable across screen sizes.",

    responsibilities: [
      "UI/UX design",
      "Responsive layouts",
      "Tailwind development",
      "Property interfaces",
      "Service pages",
      "Component development",
      "Frontend interaction",
    ],

    highlights: [
      "Property search",
      "Featured listings",
      "Service presentation",
      "Interactive property map",
      "Responsive UI",
      "Reusable components",
    ],

    // TODO(marc): add Lease For Me screenshots to public/images/developer/projects/lease-for-me/ and set images.cover / details / wide
    images: {},

    // TODO(marc): live demo and/or source code URLs, e.g. { demo: "https://…", source: "https://github.com/MarcAusss/…" }
    links: {},
  },

  {
    slug: "mentor-shift",
    published: true,

    title: "Mentor-Shift",

    category: "Learning Platform",

    year: "2025",

    summary:
      "A personalized tutoring and mentorship platform connecting students and mentors.",

    description:
      "Mentor-Shift provides students with a structured environment where they can select mentors, access learning resources, schedule sessions and track their learning progress.",

    technologies: [
      "Laravel",
      "PHP",
      "JavaScript",
      "MySQL",
    ],

    role: "Developer / UI Designer / Researcher",

    status: "Completed",

    challenge:
      "Students needed a more structured way to connect with mentors while keeping schedules, educational resources, activities and progress within a unified experience.",

    solution:
      "The platform combines mentorship discovery with scheduling and learning management features so students and mentors can manage their interactions from one application.",

    responsibilities: [
      "System design",
      "Database architecture",
      "Backend development",
      "Scheduling workflow",
      "Frontend development",
      "UI/UX design",
      "Research and evaluation",
    ],

    highlights: [
      "Mentor selection",
      "Appointment scheduling",
      "Learning materials",
      "Activities and assessments",
      "Student progress",
      "Mentor communication",
    ],

    // TODO(marc): add Mentor-Shift screenshots to public/images/developer/projects/mentor-shift/ and set images.cover / details / wide
    images: {},

    // TODO(marc): live demo and/or source code URLs
    links: {},
  },
];

/*
|--------------------------------------------------------------------------
| Published projects
|--------------------------------------------------------------------------
|
| Numbering and "next project" follow the published order, so hidden
| projects never leave gaps.
|
*/

export const publishedProjects = projects.filter(
  (project) => project.published,
);

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export function getProjectNumber(project: Project) {
  return String(publishedProjects.indexOf(project) + 1).padStart(2, "0");
}

export function getNextProject(project: Project) {
  const index = publishedProjects.indexOf(project);

  return publishedProjects[(index + 1) % publishedProjects.length];
}
