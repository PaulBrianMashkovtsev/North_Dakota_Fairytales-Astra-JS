import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Old Snow Music song entries — filesystem isolation under src/content/blog only.
 * Paths: {lang}/old-snow-music/songs/{slug}.md
 */
const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "{en,es,fr,ar}/old-snow-music/songs/**/*.md",
    }),
    schema: z.object({
        title: z.string(),
        songSlug: z.string(),
        icon: z.string().optional(),
        image: z.string().optional(),
    }),
});

export const collections = { blog };
