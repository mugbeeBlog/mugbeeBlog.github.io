import type { CollectionEntry } from 'astro:content';

type TaxonomyItem = {
  id: string;
  name: string;
  slug?: string;
};

export type TaxonomyCount = {
  name: string;
  slug: string;
  count: number;
};

export type TaxonomyWithPosts = {
  name: string;
  slug: string;
  posts: CollectionEntry<'blogs'>[];
};

function processTaxonomyItems<T>(
  items: TaxonomyItem[] | undefined,
  map: Map<string, T>,
  valueFactory: (item: TaxonomyItem, slug: string) => T,
  updateFn: (entry: T, item: TaxonomyItem) => void
): void {
  if (!items) return;

  items.forEach((item) => {
    const slug = item.slug ?? item.id;
    const entry = map.get(slug);

    if (entry) {
      updateFn(entry, item);
    } else {
      map.set(slug, valueFactory(item, slug));
    }
  });
}

export function countTaxonomies(
  posts: CollectionEntry<'blogs'>[],
  getTaxonomies: (post: CollectionEntry<'blogs'>) => TaxonomyItem[] | undefined
): TaxonomyCount[] {
  const map = new Map<string, TaxonomyCount>();

  posts.forEach((post) => {
    processTaxonomyItems(
      getTaxonomies(post),
      map,
      (item, slug) => ({ name: item.name, slug, count: 1 }),
      (entry) => entry.count++
    );
  });

  return Array.from(map.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
}

export function groupPostsByTaxonomy(
  posts: CollectionEntry<'blogs'>[],
  getTaxonomies: (post: CollectionEntry<'blogs'>) => TaxonomyItem[] | undefined
): Map<string, TaxonomyWithPosts> {
  const map = new Map<string, TaxonomyWithPosts>();

  posts.forEach((post) => {
    processTaxonomyItems(
      getTaxonomies(post),
      map,
      (item, slug) => ({ name: item.name, slug, posts: [post] }),
      (entry) => entry.posts.push(post)
    );
  });

  return map;
}
