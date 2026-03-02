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
      'scripting',           // BIM scripts, automation tools, coding projects
      '3d-modeling',         // IFC / BIM models (will use IFC viewer)
      'executive-projects',  // Technical drawings, PDFs (will use PDF reader)
      '3d-renders',          // Rendered images (image gallery)
      'general-projects',    // Mixed media — images + text
    ]),
    technologies: z.array(z.string()).optional(),
    language: z.enum(['python', 'csharp', 'javascript', 'typescript', 'dynamo', 'grasshopper']).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })).optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
