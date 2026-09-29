import type { Metadata } from "next";

/*
|--------------------------------------------------------------------------
| Developer section metadata
|--------------------------------------------------------------------------
|
| This is what shows when the link is pasted into OnlineJobs, LinkedIn or
| an email. The Open Graph image comes from ./opengraph-image.tsx.
|
*/

export const developerTitle = "Marc Austin | Laravel & React Developer";

export const developerDescription =
  "Laravel & React developer in the Philippines, available on US hours. Built 5 internal systems for DOLE Regional Office V. Open to full-time remote roles.";

export function developerPageMetadata({
  title,
  description = developerDescription,
  path,
}: {
  title?: string;
  description?: string;
  // Omit only in the layout, so the canonical URL isn't inherited by child pages
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${developerTitle}` : developerTitle;

  return {
    title: title ?? { absolute: developerTitle },
    description,

    ...(path && {
      alternates: {
        canonical: path,
      },
    }),

    openGraph: {
      type: "website",
      siteName: "Marc Austin",
      locale: "en_US",
      ...(path && { url: path }),
      title: fullTitle,
      description,
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
