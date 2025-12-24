import { config, fields, collection } from '@keystatic/core';

import.meta.env.PROD || process.env.VERCEL === '1';

export default config({
  storage: import.meta.env.PROD
    ? {

        kind: 'github',
        repo: 'arkeonagency/arkeon-studio-site',
    }
    :{
    kind: 'local',
  },
  collections: {
    // 1. Blog Posts
    posts: collection({
      label: 'Insights (Blog)',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published Date' }),
        
        // ADDED AUTHOR HERE to fix the blog editing error
        author: fields.text({ label: 'Author', defaultValue: 'Arkeon Team' }), 
        
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),

    // 2. Case Studies (Work)
    work: collection({
      label: 'Case Studies',
      slugField: 'title',
      path: 'src/content/case-studies/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        
        // ADDED THESE MISSING FIELDS to fix the "Key not allowed" error
        client: fields.text({ label: 'Client Name' }),
        outcome: fields.text({ label: 'Key Outcome' }),
        websiteUrl: fields.url({ label: 'Live Website URL' }),
        
        description: fields.text({ label: 'Short Outcome (Meta Desc)', multiline: true }),
        service: fields.text({ label: 'Service Type' }),
        heroImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/work',
          publicPath: '/images/work/',
        }),
        content: fields.document({
          label: 'Case Study Details',
          formatting: true,
          images: {
            directory: 'public/images/work',
            publicPath: '/images/work/',
          },
        }),
      },
    }),

    // 3. Testimonials
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'author',
      path: 'src/content/testimonials/*',
      format: { contentField: 'content' },
      schema: {
        author: fields.slug({ name: { label: 'Client Name' } }),
        role: fields.text({ label: 'Role / Company' }),
        rating: fields.integer({ 
          label: 'Star Rating (1-5)', 
          defaultValue: 5,
          validation: { min: 1, max: 5 }
        }),
        avatar: fields.image({
          label: 'Client Photo',
          directory: 'public/images/testimonials',
          publicPath: '/images/testimonials/',
        }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        content: fields.document({
          label: 'Full Review (Optional)',
          formatting: true,
        }),
      },
    }),
  },
});