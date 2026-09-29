export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  year: string;

  summary: string;
  description: string;

  technologies: string[];

  role: string;
  status: string;

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

  highlights: string[];

  next?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "clpmis",

    title: "CLPMIS",

    category: "Information System",

    year: "2026",

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

    status: "In Development",

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

    highlights: [
      "Centralized child labor profiling",
      "Role-based access control",
      "PSGC location integration",
      "Monitoring workflow",
      "Administrative record management",
      "Responsive interface",
    ],

    next: "tupad-ppe-inventory",
  },

  {
    number: "02",
    slug: "tupad-ppe-inventory",

    title: "TUPAD PPE Inventory",

    category: "Inventory Management System",

    year: "2026",

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

    status: "In Development",

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

    next: "lease-for-me",
  },

  {
    number: "03",
    slug: "lease-for-me",

    title: "Lease For Me",

    category: "Property Platform",

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

    next: "mentor-shift",
  },

  {
    number: "04",
    slug: "mentor-shift",

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

    next: "clpmis",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}