import { z, defineCollection } from 'astro:content';

// 1. Testimonials
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    role: z.string(),
    quote: z.string(),
    rating: z.number().default(5),
    avatar: z.string().optional(),
  }),
});

// 2. Case Studies (Work)
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    client: z.string().optional(),
    service: z.string().optional(),
    outcome: z.string().optional(),
    heroImage: z.string().optional(),
    websiteUrl: z.string().optional(),
    // Allow any other fields without crashing
  }).passthrough(), 
});

// 3. Blog Posts (Insights)
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Using coerce.date() fixes the "String vs Date" error
    pubDate: z.coerce.date(), 
    heroImage: z.string().optional(),
    author: z.string().default('Arkeon Team'),
  }).passthrough(),
});

export const collections = {
  'case-studies': caseStudiesCollection,
  'posts': postsCollection,
  'testimonials': testimonials,
};