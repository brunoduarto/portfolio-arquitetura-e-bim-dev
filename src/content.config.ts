import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    // Redesign fields — card kicker reads "type · scope · location"
    type: z.string().optional(),       // Residencial, Comercial, Cultural…
    scope: z.string().optional(),      // Interiores, Projeto executivo, Projeto acadêmico…
    location: z.string().optional(),   // Bairro, cidade
    // Project page sections: O contexto / A atuação / O resultado
    context: z.string().optional(),
    approach: z.string().optional(),
    result: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'scripting',
      '3d-modeling',
      'executive-projects',
      '3d-renders',
      'general-projects',
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

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
