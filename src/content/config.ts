import { z, defineCollection } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    service: z.string(),
    outcome: z.string(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // We treat date as a string to match "Oct 24, 2025" format
    pubDate: z.string(),
    heroImage: z.string().optional(),
    author: z.string().default('Arkeon Team'),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
  'posts': postsCollection,
};