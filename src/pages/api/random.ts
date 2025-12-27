export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, redirect }) => {
  let number = Math.random();
  return new Response(
    JSON.stringify({
      number,
      message: `Here's a random number: ${number}`,
    }),
  );
} 