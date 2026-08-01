export type PhotographyCategory =
  | "Portraits"
  | "Street"
  | "Landscape"
  | "Events"
  | "Creative";

export type PhotographyItem = {
  id: number;
  title: string;
  category: PhotographyCategory;
  location?: string;
  year: string;

  /*
   * Add an image path here later:
   *
   * "/images/photography/portrait-01.webp"
   *
   * Leave undefined for now and the gallery
   * will show an elegant placeholder.
   */
  image?: string;

  size:
    | "large"
    | "portrait"
    | "wide"
    | "standard";
};

export const photographyItems: PhotographyItem[] = [
  {
    id: 1,
    title: "Quiet Light",
    category: "Portraits",
    location: "Legazpi City",
    year: "2026",
    size: "large",
  },

  {
    id: 2,
    title: "Between Moments",
    category: "Street",
    location: "Albay",
    year: "2026",
    size: "portrait",
  },

  {
    id: 3,
    title: "After the Rain",
    category: "Landscape",
    location: "Bicol",
    year: "2026",
    size: "standard",
  },

  {
    id: 4,
    title: "Unscripted",
    category: "Events",
    location: "Legazpi City",
    year: "2026",
    size: "wide",
  },

  {
    id: 5,
    title: "Stillness",
    category: "Portraits",
    location: "Albay",
    year: "2026",
    size: "portrait",
  },

  {
    id: 6,
    title: "Passing Through",
    category: "Street",
    location: "Legazpi City",
    year: "2026",
    size: "standard",
  },

  {
    id: 7,
    title: "Open Horizon",
    category: "Landscape",
    location: "Bicol",
    year: "2026",
    size: "large",
  },

  {
    id: 8,
    title: "Movement",
    category: "Creative",
    year: "2026",
    size: "portrait",
  },

  {
    id: 9,
    title: "In Between",
    category: "Portraits",
    year: "2026",
    size: "standard",
  },

  {
    id: 10,
    title: "Gathered",
    category: "Events",
    year: "2026",
    size: "wide",
  },

  {
    id: 11,
    title: "Fragments",
    category: "Creative",
    year: "2026",
    size: "standard",
  },

  {
    id: 12,
    title: "Last Light",
    category: "Landscape",
    year: "2026",
    size: "portrait",
  },
];

export const photographyCategories = [
  "All",
  "Portraits",
  "Street",
  "Landscape",
  "Events",
  "Creative",
] as const;

export type PhotographyFilter =
  (typeof photographyCategories)[number];