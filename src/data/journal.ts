export type JournalSection = {
  number: string;
  title: string;
  paragraphs: string[];
};

export type JournalPost = {
  number: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  year: string;
  readTime: string;
  featured?: boolean;

  intro: string;
  quote?: string;
  sections: JournalSection[];

  next?: string;
};

export const journalPosts: JournalPost[] = [
  {
    number: "01",
    slug: "designing-real-workflows",

    title: "Designing systems around real workflows",

    excerpt:
      "Why understanding the people, processes and constraints behind a system should come before database tables, routes or components.",

    category: "System Design",

    date: "July 18, 2026",

    year: "2026",

    readTime: "8 min",

    featured: true,

    intro:
      "The best place to start designing a system usually isn't the database. It's the workflow. Before deciding which tables, controllers or components to create, I want to understand what actually happens before the software exists.",

    quote:
      "A technically correct system can still solve the wrong problem.",

    sections: [
      {
        number: "01",
        title: "Understand the existing process",
        paragraphs: [
          "Every system replaces, supports or improves an existing process. That process may currently happen through spreadsheets, paper records, chat messages or several disconnected applications.",

          "Before creating the architecture, I try to identify who performs each action, what information they need, what happens next and where delays or mistakes normally occur.",
        ],
      },

      {
        number: "02",
        title: "Users are part of the architecture",
        paragraphs: [
          "Roles are not just authorization rules. They often represent completely different responsibilities inside a workflow.",

          "An administrator, encoder, reviewer and accounting user may interact with the same record but need different actions, information and levels of control.",
        ],
      },

      {
        number: "03",
        title: "Translate workflows into software",
        paragraphs: [
          "Once the workflow is understood, application structures become easier to define. Data relationships, statuses, permissions and actions can be modeled around actual operational behavior.",

          "This usually produces a cleaner system than designing isolated screens first and attempting to connect them afterward.",
        ],
      },

      {
        number: "04",
        title: "Interfaces should reveal the workflow",
        paragraphs: [
          "A good interface helps users understand where they are, what has already happened and what they need to do next.",

          "Clear statuses, contextual actions and predictable navigation can remove a surprising amount of complexity from administrative software.",
        ],
      },

      {
        number: "05",
        title: "Final thought",
        paragraphs: [
          "Frameworks provide tools for building software, but they cannot define the workflow for you.",

          "Understanding the real process first gives the technical architecture something meaningful to represent.",
        ],
      },
    ],

    next: "admin-interface-design",
  },

  {
    number: "02",
    slug: "admin-interface-design",

    title: "Good admin interfaces need less UI, not more",

    excerpt:
      "A practical look at reducing interface noise, improving information hierarchy and making administrative systems easier to use.",

    category: "UI / UX",

    date: "June 26, 2026",

    year: "2026",

    readTime: "6 min",

    intro:
      "Administrative interfaces often contain a large amount of information, but that does not mean every piece of information deserves equal visual importance.",

    quote:
      "More information does not require more interface.",

    sections: [
      {
        number: "01",
        title: "Start with hierarchy",
        paragraphs: [
          "Users should immediately understand the primary information on a page. Secondary metadata should support that information rather than compete with it.",

          "Typography, spacing and grouping often solve this more effectively than adding more cards, colors or decorative elements.",
        ],
      },

      {
        number: "02",
        title: "Reduce repeated actions",
        paragraphs: [
          "When users perform the same workflow frequently, small amounts of friction accumulate quickly.",

          "Frequently used actions should remain visible and predictable while less common operations can be moved into contextual menus.",
        ],
      },

      {
        number: "03",
        title: "Tables need restraint",
        paragraphs: [
          "Enterprise systems often require dense tables, but every column does not need equal width or emphasis.",

          "Subtle metadata, compact secondary totals and deliberate column hierarchy can improve readability without hiding necessary information.",
        ],
      },

      {
        number: "04",
        title: "Final thought",
        paragraphs: [
          "Good admin design is less about making software look impressive and more about making repetitive work easier to understand.",

          "The interface should support the workflow rather than becoming another task users have to manage.",
        ],
      },
    ],

    next: "reusable-workflows",
  },

  {
    number: "03",
    slug: "reusable-workflows",

    title: "Build reusable workflows, not reusable screens",

    excerpt:
      "Reusable components matter, but reusable system behavior and predictable workflows can have an even larger impact on maintainability.",

    category: "Engineering",

    date: "May 14, 2026",

    year: "2026",

    readTime: "7 min",

    intro:
      "Reusable UI components are useful, but maintainability also depends on whether the application's behavior follows reusable patterns.",

    quote:
      "Consistency in behavior can be more valuable than consistency in appearance.",

    sections: [
      {
        number: "01",
        title: "Components solve only one layer",
        paragraphs: [
          "Reusable buttons, tables and inputs reduce duplication, but applications can still become difficult to maintain when every workflow implements its own business rules.",

          "The deeper opportunity is identifying behavior that repeats across features.",
        ],
      },

      {
        number: "02",
        title: "Look for behavioral patterns",
        paragraphs: [
          "Approval flows, status transitions, validation rules, notifications and audit behavior often repeat across multiple modules.",

          "Recognizing these patterns early can produce cleaner services, policies and shared application logic.",
        ],
      },

      {
        number: "03",
        title: "Predictability helps developers and users",
        paragraphs: [
          "When similar workflows behave consistently, users learn the system faster and developers spend less time reasoning about special cases.",

          "Consistency becomes part of the architecture rather than merely a design-system concern.",
        ],
      },

      {
        number: "04",
        title: "Final thought",
        paragraphs: [
          "Reusable components make interfaces easier to build. Reusable workflows make systems easier to evolve.",

          "Strong applications usually need both.",
        ],
      },
    ],

    next: "design-development-relationship",
  },

  {
    number: "04",
    slug: "design-development-relationship",

    title: "Why design and development should not feel separate",

    excerpt:
      "The strongest interfaces often happen when technical constraints and design decisions are considered together instead of sequentially.",

    category: "Design",

    date: "April 9, 2026",

    year: "2026",

    readTime: "5 min",

    intro:
      "Design and development are frequently treated as separate phases, but many important product decisions exist somewhere between them.",

    quote:
      "Implementation constraints can become useful design constraints.",

    sections: [
      {
        number: "01",
        title: "Design affects architecture",
        paragraphs: [
          "A seemingly simple interaction can influence data requirements, API behavior and application state.",

          "Thinking about implementation while designing helps expose these requirements earlier.",
        ],
      },

      {
        number: "02",
        title: "Development affects experience",
        paragraphs: [
          "Performance, loading behavior, validation and error handling are technical concerns that directly shape the user experience.",

          "They should be considered part of interface design rather than implementation details added afterward.",
        ],
      },

      {
        number: "03",
        title: "Shared thinking produces better tradeoffs",
        paragraphs: [
          "When technical and visual decisions happen together, it becomes easier to simplify interactions without sacrificing maintainability.",

          "The result is usually a product that feels more coherent.",
        ],
      },

      {
        number: "04",
        title: "Final thought",
        paragraphs: [
          "Design defines how a system communicates. Development defines how that communication becomes real.",

          "The strongest products treat both as parts of the same problem.",
        ],
      },
    ],

    next: "laravel-architecture-thinking",
  },

  {
    number: "05",
    slug: "laravel-architecture-thinking",

    title: "Thinking beyond controllers in Laravel",

    excerpt:
      "As Laravel applications grow, organizing business rules clearly becomes more important than simply keeping controllers short.",

    category: "Laravel",

    date: "March 22, 2026",

    year: "2026",

    readTime: "9 min",

    intro:
      "Laravel makes it easy to start building quickly, but larger applications eventually need clearer boundaries around business logic.",

    quote:
      "A short controller does not automatically mean a well-structured application.",

    sections: [
      {
        number: "01",
        title: "Controllers should coordinate",
        paragraphs: [
          "Controllers work best when they translate HTTP requests into application actions rather than containing the entire business process.",

          "Validation, domain rules and database operations become easier to reason about when responsibilities are separated intentionally.",
        ],
      },

      {
        number: "02",
        title: "Use abstractions when they solve a problem",
        paragraphs: [
          "Service classes, actions, policies and query objects can help, but creating abstractions simply because they look architectural can create unnecessary complexity.",

          "The abstraction should make repeated or complicated behavior clearer.",
        ],
      },

      {
        number: "03",
        title: "Keep business rules discoverable",
        paragraphs: [
          "Developers should be able to identify where important application behavior lives without searching through unrelated files.",

          "Consistency in placement and naming is often more valuable than following an elaborate pattern.",
        ],
      },

      {
        number: "04",
        title: "Final thought",
        paragraphs: [
          "Laravel gives developers a productive default structure. Architecture is the process of extending that structure when the application actually requires it.",

          "Complexity should be introduced because the domain demands it, not because the codebase looks more sophisticated.",
        ],
      },
    ],

    next: "designing-real-workflows",
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}