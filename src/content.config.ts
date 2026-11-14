import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resources = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
    }),
});

const videos = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        youtubeId: z.string().optional(),
        category: z.string(),
        channel: z.string().optional(),
        duration: z.string().optional(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
    }),
});

export const collections = { resources, videos };
