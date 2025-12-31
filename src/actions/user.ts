import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const user = {
  getUser: defineAction({
    input: z.object({
      id: z.string(),
    }),
    handler: async ({ id }) => {
      // Mock database call
      await new Promise((resolve) => setTimeout(resolve, 100));
      return { id, name: "John Doe", email: "john@example.com" };
    },
  }),
  createUser: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
    }),
    handler: async ({ name, email }) => {
      // Mock database call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return {
        success: true,
        user: { id: crypto.randomUUID(), name, email },
      };
    },
  }),
};
