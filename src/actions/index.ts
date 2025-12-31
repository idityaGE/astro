import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { user } from "./user";

// there is more about on the docs : https://docs.astro.build/en/guides/actions/

export const server = {
  sayHello: defineAction({
    input: z.object({
      name: z.string().min(1, "Name is required"),
    }),
    handler: async (input, ctx) => {
      return `Hello, ${input.name}!`;
    },
  }),
  user,
  // actions.user.getUser()
  // actions.user.createUser()
};
