export type PhotographyJournalCategory =
  | "Photo Story"
  | "Behind the Scenes"
  | "Field Notes"
  | "Travel"
  | "Portraits";

export type PhotographyJournalOrientation =
  | "landscape"
  | "portrait"
  | "wide";

export type PhotographyStorySection = {
  number: string;
  title: string;
  text: string[];
  image?: string;
  imageAlt?: string;
  orientation?: PhotographyJournalOrientation;
};

export type PhotographyJournalPost = {
  number: string;
  slug: string;

  title: string;
  excerpt: string;

  category: PhotographyJournalCategory;

  location?: string;

  date: string;
  year: string;

  image?: string;

  orientation: PhotographyJournalOrientation;

  featured?: boolean;

  intro: string;

  quote?: string;

  sections: PhotographyStorySection[];

  next?: string;
};

export const photographyJournalPosts: PhotographyJournalPost[] = [
  {
    number: "01",

    slug: "quiet-mornings-in-albay",

    title: "Quiet mornings in Albay",

    excerpt:
      "A collection of photographs made during slow mornings, soft light and ordinary scenes that became more interesting when given enough time.",

    category: "Photo Story",

    location: "Albay, Philippines",

    date: "July 21, 2026",

    year: "2026",

    orientation: "landscape",

    featured: true,

    intro:
      "There wasn't anything extraordinary happening. The streets were quiet, the light was soft and most of the scenes could easily have been ignored. That was exactly what made them worth photographing.",

    quote:
      "Some photographs only appear when you stop looking for something impressive.",

    sections: [
      {
        number: "01",

        title: "Morning",

        text: [
          "I started walking before the light became harsh. There was no shot list and no particular destination. The only intention was to pay attention.",

          "Without a specific photograph in mind, smaller things became more noticeable — people opening stores, light passing through narrow spaces and ordinary routines happening without an audience.",
        ],

        orientation: "landscape",
      },

      {
        number: "02",

        title: "Light",

        text: [
          "Morning light changes quickly. A scene that feels flat can become completely different a few minutes later when light reaches a wall, a face or a patch of pavement.",

          "Instead of constantly moving, I sometimes stayed in one place and allowed the light to change the composition.",
        ],

        orientation: "portrait",
      },

      {
        number: "03",

        title: "Details",

        text: [
          "Not every photograph needs a large subject. Small details can carry enough information to recreate the feeling of a place later.",

          "Textures, gestures and fragments often become the photographs I appreciate most after enough time has passed.",
        ],

        orientation: "wide",
      },

      {
        number: "04",

        title: "Leaving",

        text: [
          "By the time the light became stronger, the atmosphere had changed and the quietness of the morning was mostly gone.",

          "The photographs were not about documenting everything that happened. They were simply a record of what made me stop and look twice.",
        ],

        orientation: "landscape",
      },
    ],

    next: "photographing-between-moments",
  },

  {
    number: "02",

    slug: "photographing-between-moments",

    title: "Photographing between moments",

    excerpt:
      "Why some of my favorite photographs happen before or after the moment everyone expects to be photographed.",

    category: "Field Notes",

    date: "June 18, 2026",

    year: "2026",

    orientation: "portrait",

    intro:
      "The moment people expect to be photographed is not always the most interesting one. Sometimes the stronger image happens immediately before they prepare themselves or immediately after they think the photograph has already been taken.",

    quote:
      "The camera becomes more useful when people temporarily forget that it is there.",

    sections: [
      {
        number: "01",

        title: "Before",

        text: [
          "Before a planned portrait, people are often still settling into the environment. Their posture and expression have not yet changed for the camera.",

          "Those seconds can reveal something more natural than the photograph that follows.",
        ],

        orientation: "portrait",
      },

      {
        number: "02",

        title: "During",

        text: [
          "Direction can still be useful, but I prefer giving someone an action or an environment to interact with rather than controlling every detail of their pose.",

          "The goal is not to remove intention completely. It is to leave enough space for something unplanned to happen.",
        ],

        orientation: "landscape",
      },

      {
        number: "03",

        title: "After",

        text: [
          "After the expected photograph is taken, people often relax almost immediately.",

          "A small laugh, change in posture or glance away from the camera can become the frame that feels most truthful.",
        ],

        orientation: "wide",
      },
    ],

    next: "chasing-last-light",
  },

  {
    number: "03",

    slug: "chasing-last-light",

    title: "Chasing the last light",

    excerpt:
      "An evening spent working with changing natural light and learning when not to force another frame.",

    category: "Behind the Scenes",

    location: "Bicol",

    date: "May 27, 2026",

    year: "2026",

    orientation: "wide",

    intro:
      "The difficult part about working with natural light is also what makes it interesting: it refuses to stay where you want it.",

    quote:
      "Sometimes the photograph disappears before you finish deciding how to photograph it.",

    sections: [
      {
        number: "01",

        title: "Arrival",

        text: [
          "The location looked completely different from how I imagined it. Clouds had changed the direction and intensity of the light.",

          "Instead of trying to reproduce the original idea, I started looking for what the conditions were actually offering.",
        ],

        orientation: "wide",
      },

      {
        number: "02",

        title: "Change",

        text: [
          "As sunset approached, each minute changed the scene. Highlights became warmer and shadows started removing unnecessary details from the frame.",

          "There was very little time to overthink the technical decisions.",
        ],

        orientation: "landscape",
      },

      {
        number: "03",

        title: "Last frame",

        text: [
          "Eventually there was not enough useful light left. It is tempting to keep photographing simply because you are already there.",

          "Knowing when the photograph is finished can be as important as knowing when to press the shutter.",
        ],

        orientation: "portrait",
      },
    ],

    next: "portraits-without-performing",
  },

  {
    number: "04",

    slug: "portraits-without-performing",

    title: "Portraits without performing",

    excerpt:
      "Thoughts on creating portraits that feel natural by giving people room to stop thinking about the camera.",

    category: "Portraits",

    date: "April 16, 2026",

    year: "2026",

    orientation: "portrait",

    intro:
      "A portrait does not need to feel completely candid to feel honest. The challenge is creating enough structure for a strong photograph without making the person feel like they are performing for the camera.",

    quote:
      "A portrait becomes more interesting when the person has something to do besides pose.",

    sections: [
      {
        number: "01",

        title: "Environment",

        text: [
          "I prefer beginning with the environment rather than the pose. Where the person stands, what surrounds them and where the light comes from already solve much of the composition.",

          "Once that structure exists, very little direction may be necessary.",
        ],

        orientation: "portrait",
      },

      {
        number: "02",

        title: "Direction",

        text: [
          "Instead of describing exact positions for every part of the body, simple actions often produce more natural movement.",

          "Walking, looking toward something or interacting with the environment creates variation without making every frame feel staged.",
        ],

        orientation: "landscape",
      },

      {
        number: "03",

        title: "Expression",

        text: [
          "Not every portrait needs a smile or direct eye contact.",

          "A quieter expression can communicate more when it fits the person and the atmosphere surrounding them.",
        ],

        orientation: "portrait",
      },
    ],

    next: "walking-with-a-camera",
  },

  {
    number: "05",

    slug: "walking-with-a-camera",

    title: "Walking with a camera",

    excerpt:
      "A simple practice of carrying a camera without a specific photograph in mind and allowing the environment to decide what becomes important.",

    category: "Field Notes",

    location: "Legazpi City",

    date: "March 8, 2026",

    year: "2026",

    orientation: "landscape",

    intro:
      "Walking without a planned photograph changes the way I look at familiar places. The camera becomes less about completing an assignment and more about noticing relationships that normally disappear into the background.",

    quote:
      "Familiar places become unfamiliar when you start paying attention to their edges.",

    sections: [
      {
        number: "01",

        title: "No destination",

        text: [
          "Removing a destination makes the route less important. I can follow whatever seems visually interesting instead.",

          "Sometimes that means changing direction because of light, movement or a scene several streets away.",
        ],

        orientation: "landscape",
      },

      {
        number: "02",

        title: "Familiar places",

        text: [
          "Places seen every day are easy to stop seeing altogether.",

          "A camera can interrupt that familiarity and turn ordinary architecture, people and light into something worth examining again.",
        ],

        orientation: "portrait",
      },

      {
        number: "03",

        title: "Returning",

        text: [
          "A walk does not need to produce an exceptional photograph to be useful.",

          "The practice itself improves observation, and sometimes the photographs only become meaningful much later.",
        ],

        orientation: "wide",
      },
    ],

    next: "what-travel-photography-keeps",
  },

  {
    number: "06",

    slug: "what-travel-photography-keeps",

    title: "What travel photography keeps",

    excerpt:
      "The value of photographing details that may seem insignificant during a trip but become meaningful after returning home.",

    category: "Travel",

    date: "February 14, 2026",

    year: "2026",

    orientation: "wide",

    intro:
      "The photographs I value most from a trip are rarely only the obvious landmarks. Small details often become more effective at bringing back the experience of actually being there.",

    quote:
      "A photograph can remember details that your memory decides are unimportant.",

    sections: [
      {
        number: "01",

        title: "The obvious photograph",

        text: [
          "There is nothing wrong with photographing the place everyone came to see.",

          "Those images provide context, but they usually describe only one part of the experience.",
        ],

        orientation: "wide",
      },

      {
        number: "02",

        title: "The smaller photograph",

        text: [
          "Signs, transportation, food, hotel windows, weather and people passing through the frame may seem less important at the time.",

          "Later, those photographs often recover more specific memories than the postcard image.",
        ],

        orientation: "portrait",
      },

      {
        number: "03",

        title: "Coming home",

        text: [
          "Travel photography becomes different after the trip is over.",

          "The images stop being about what is directly in front of you and become a way to revisit how the place felt.",
        ],

        orientation: "landscape",
      },
    ],

    next: "quiet-mornings-in-albay",
  },
];

export function getPhotographyJournalPost(
  slug: string,
) {
  return photographyJournalPosts.find(
    (post) => post.slug === slug,
  );
}