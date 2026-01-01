import type { CollectionEntry } from 'astro:content';

export const sortBlogsByDate = (
  blogs: CollectionEntry<'blogs'>[]
): CollectionEntry<'blogs'>[] =>
  blogs.sort((a, b) => {
    const dateA = a.data.publishedAt?.getTime() ?? 0;
    const dateB = b.data.publishedAt?.getTime() ?? 0;
    return dateB - dateA || a.data.slug.localeCompare(b.data.slug);
  });
