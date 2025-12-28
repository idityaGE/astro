import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // do what you want to do 
  let count = 0;

  if (context.cookies.has("counter")) {
    const cookie = context.cookies.get("counter")
    count = cookie?.number() || 0;
  }

  count = count + 1;
  context.cookies.set("counter", count.toString())

  return next()
}) 