import type { CollectionEntry } from 'astro:content';

export const sortBlogsByDate = (
  blogs: CollectionEntry<'blogs'>[]
): CollectionEntry<'blogs'>[] =>
  blogs.toSorted(
    (a, b) =>
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime() ||
      a.data.slug.localeCompare(b.data.slug)
  );
