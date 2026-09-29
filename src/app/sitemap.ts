import type { MetadataRoute } from "next";

import { journalPosts } from "@/data/journal";
import { photographyJournalPosts } from "@/data/photographyJournal";
import { publishedProjects } from "@/data/projects";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const developerPages = [
    "/developer",
    "/developer/projects",
    "/developer/about",
    "/developer/skills",
    "/developer/contact",
    "/developer/journal",
    ...publishedProjects.map(
      (project) => `/developer/projects/${project.slug}`,
    ),
    ...journalPosts.map((post) => `/developer/journal/${post.slug}`),
  ];

  const photographyPages = [
    "/photography",
    "/portfolio",
    "/about",
    "/contact",
    "/journal",
    ...photographyJournalPosts.map((post) => `/journal/${post.slug}`),
  ];

  return [
    ...developerPages.map((path) => ({
      url: `${siteUrl}${path}`,
      priority: path === "/developer" ? 1 : 0.8,
    })),
    ...photographyPages.map((path) => ({
      url: `${siteUrl}${path}`,
      priority: 0.5,
    })),
  ];
}
