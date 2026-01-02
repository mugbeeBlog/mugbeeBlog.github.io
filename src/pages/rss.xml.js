import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortBlogsByDate } from '../utils/sortBlogs';
import { site } from '../data/constants';

export async function GET() {
  const posts = sortBlogsByDate(await getCollection('blogs'));

  return rss({
    title: site.title,
    description: site.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/${post.data.slug}/`,
      pubDate: post.data.publishedAt,
      description:
        post.data.description ??
        post.data.content.replace(/<[^>]+>/g, '').slice(0, 120),
    })),
  });
}
