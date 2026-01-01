import { defineCollection, z } from 'astro:content';
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

const blogs = defineCollection({
  loader: createMicroCMSLoader('blogs'),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      description: z.string().optional(),
      content: z.string(),
      thumbnail: thumbnailSchema.optional(),
    })
    .merge(microCMSDateFieldsSchema),
});

export const collections = {
  blogs,
};
