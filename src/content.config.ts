import { z, defineCollection, reference } from "astro:content";
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.mdx", // Ignore any file whose name starts with _
    base: "src/content/blogs"
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(100, { message: "It's too fucking long bro" }),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    relatedBlogs: z.array(reference("blogs")) // Reference an array of related posts from the `blogs` collection by `slug`
  })
})

const newsletters = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx", "*.md"],
    base: "src/content/newsletters"
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(90, { message: "It's too fucking long bro" }),
    date: z.date(),
  })
})


export const collections = { blogs, newsletters };