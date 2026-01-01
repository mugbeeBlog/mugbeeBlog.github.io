import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { createMicroCMSLoader } from './microcms';

const microCMSDateFieldsSchema = z.object({
  createdAt: z.string().transform((value) => new Date(value)),
  updatedAt: z.string().transform((value) => new Date(value)),
  publishedAt: z.string().transform((value) => new Date(value)),
  revisedAt: z
    .string()
    .nullable()
    .transform((value) => (value ? new Date(value) : null)),
});

const thumbnailSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

const taxonomySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional(),
});

const pickupSchema = z
  .array(
    z.object({
      id: z.string(),
    })
  )
  .optional();

const messages = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/messages',
  }),
  schema: z.object({
    date: z.string().transform((str) => new Date(str)),
    platform: z.enum(['info', 'youtube']),
    url: z.string().url().optional(),
  }),
});

const blogs = defineCollection({
  loader: createMicroCMSLoader('blogs'),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      description: z.string().optional(),
      content: z.string(),
      thumbnail: thumbnailSchema.optional(),
      category: z.array(taxonomySchema).optional(),
      tags: z.array(taxonomySchema).optional(),
      pickup: pickupSchema,
    })
    .merge(microCMSDateFieldsSchema),
});

export const collections = {
  messages,
  blogs,
};
