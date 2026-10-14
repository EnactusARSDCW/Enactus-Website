// Shared data types for the ENACTUS ARSD website.
//
// CONTENT POLICY
// --------------
// Only facts publicly reported by the chapter itself (its former Wix site,
// Instagram or LinkedIn profiles) are included. Fields that are unknown are
// null rather than invented. When the chapter supplies fresh content the
// data modules below are the single place to update.
//
// `image: null` means the ImagePlaceholder component renders a labelled slot;
// drop real files into /public/images/<name> and set the path to use them.

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Path under /public, or null if no photograph has been supplied yet. */
  image: string | null;
  imageAlt: string;
  summary: string;
  category: string;
  featured?: boolean;
  problem: string[];
  approach: string[];
  activities: { title: string; body: string }[];
  /** Chapter-reported outcomes only; never invented. */
  outcomes: { label: string; detail: string; source?: string }[];
  externalLinks?: { label: string; url: string }[];
  /** Stories slugs referenced from the project page. */
  relatedStories?: string[];
  /** Project slugs to surface on the detail page. */
  relatedProjects?: string[];
}

export interface Product {
  slug: string;
  name: string;
  projectSlug: string;
  tags: string[];
  image: string | null;
  imageAlt: string;
  /** null when the chapter has not published a price. */
  price: string | null;
  availability: string | null;
  description: string[];
  variants: string[] | null;
}

export interface Story {
  slug: string;
  title: string;
  category: string;
  /** ISO date (YYYY-MM-DD) or null when unknown. */
  date: string | null;
  author: string | null;
  image: string | null;
  imageAlt: string;
  excerpt: string;
  body: { type: 'p' | 'h' | 'list' | 'quote'; text?: string; items?: string[] }[];
  sourceUrl?: string;
  relatedProjects?: string[];
}

export interface GallerySection {
  title: string;
  description: string;
  images: { caption: string }[];
}

export interface Partition {
  slug: string;
  name: string;
  description: string;
  /**
   * Member entries management can append when verified team data arrives.
   * Kept empty on purpose — no roster has been published publicly.
   */
  members: { name: string; role: string; image: string | null }[];
}
