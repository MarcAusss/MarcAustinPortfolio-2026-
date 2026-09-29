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
    image:
      "/images/photography/portfolio/IMG_0054.JPG",
    size: "large",
  },

  {
    id: 2,
    title: "Between Moments",
    category: "Street",
    location: "Bulusan, Sorsogon",
    image: "/images/photography/portfolio/20250524_142646.jpg",
    year: "2026",
    size: "portrait",
  },

  {
    id: 3,
    title: "Majestic Mayon",
    category: "Landscape",
    location: "Cagsawa Ruins, Daraga, Albay",
    image: "/images/photography/portfolio/IMG_0649.jpg",
    year: "2026",
    size: "standard",
  },

  {
    id: 4,
    title: "Unscripted",
    category: "Events",
    location: "Tabaco City",
    image: "/images/photography/portfolio/IMG_0014_1.jpg",
    year: "2026",
    size: "wide",
  },

   {
    id: 5,
    title: "Movement",
    category: "Creative",
    year: "2026",
    image: "/images/photography/portfolio/IMG_0334.jpg",
    size: "wide",
  },

  {
    
    id: 6,
    title: "Passing Through",
    category: "Street",
    location: "Virac, Catanduanes",
    image: "/images/photography/portfolio/IMG_0040.JPG",
    year: "2026",
    size: "portrait",
  },

   {
    id: 7,
    title: "Stillness",
    category: "Portraits",
    location: "Malinao, Albay",
    year: "2017",
    image: "/images/photography/portfolio/IMG_9218.jpg",
    size: "standard",
  },

  {
    id: 8,
    title: "Open Horizon",
    category: "Landscape",
    location: "Bicol",
    image: "/images/photography/portfolio/IMG_0886.jpg",
    year: "2025",
    size: "large",
  },

  {
    id: 9,
    title: "Concert",
    category: "Events",
    image: "/images/photography/portfolio/IMG_4834.JPG",
    year: "2026",
    size: "wide",
  },

  {
    id: 10,
    title: "Fragments",
    category: "Portraits",
    image: "/images/photography/portfolio/IMG_0232.JPG",
    year: "2026",
    size: "portrait",
  },

  {
    id: 11,
    title: "In Between",
    category: "Portraits",
    image: "/images/photography/portfolio/IMG_1214.jpg",
    year: "2025",
    size: "standard",
  },

  {
    id: 12,
    title: "Last Light",
    category: "Creative",
    image: "/images/photography/portfolio/_MG_3484.JPG",
    year: "2018",
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
/*
 * Photo used where the developer pages link across to photography.
 */
export const photographyPreview = {
  src: "/images/photography/portfolio/IMG_0649.jpg",
  alt: "Mayon Volcano seen from the Cagsawa Ruins in Daraga, Albay",
};
