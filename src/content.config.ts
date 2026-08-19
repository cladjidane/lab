import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

/**
 * Journal : les articles du site.
 *
 * Un article = un fichier Markdown dans src/content/journal/.
 * Le nom du fichier donne l'URL : mon-article.md -> /journal/mon-article
 *
 * Champs obligatoires : title, description, date.
 * draft: true garde l'article invisible en ligne (il reste visible en local).
 */
const journal = defineCollection({
  loader: glob({
    base: "./src/content/journal",
    pattern: ["**/*.md", "!**/README.md"],
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Mots-clés affichés sous le titre. */
    tags: z.array(z.string()).default([]),
    /** Slug d'un projet du lab à mettre en lien sous l'article (ex: "pai"). */
    project: z.string().optional(),
    /** Image d'en-tête, chemin depuis public/ (ex: "/images/mon-article.webp"). */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
