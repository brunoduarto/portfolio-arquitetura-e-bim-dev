import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'revit-scripts',
      'ifc-tools',
      'dynamo-nodes',
      'python-aec',
      'computational-design',
      'bim-automation',
    ]),
    technologies: z.array(z.string()),
    language: z.enum(['python', 'csharp', 'javascript', 'typescript', 'dynamo', 'grasshopper']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
