import { defineMiddleware, sequence } from "astro:middleware";

// https://docs.astro.build/en/guides/middleware/

export const onRequest = defineMiddleware(async (context, next) => {
  // do what you want to do 
  let count = 0;

  if (context.cookies.has("counter")) {
    const cookie = context.cookies.get("counter")
    count = cookie?.number() || 0;
  }

  count = count + 1;
  console.log("request comes from", context.url.pathname, "\ncount", count);
  context.cookies.set("counter", count.toString())

  context.locals.user = {
    name: "Aditya Maurya",
    email: "idityage@gmail.com",
    age: 20,
    single: true
  }

  context.locals.welcomeTitle = () => {
    return "Hello, My name is Aditya"
  }

  const response = await next();

  // Cache HTML pages for 5 minutes (browser will reuse cached pages)
  if (response.headers.get("content-type")?.includes("text/html")) {
    response.headers.set("Cache-Control", "private, max-age=300");
  }

  return response;
})

// ==========================
// =  Chaining Middleware   =
// ==========================

// async function validation(_, next) {
//   console.log("validation request");
//   const response = await next();
//   console.log("validation response");
//   return response;
// }

// async function auth(_, next) {
//   console.log("auth request");
//   const response = await next();
//   console.log("auth response");
//   return response;
// }

// async function greeting(_, next) {
//   console.log("greeting request");
//   const response = await next();
//   console.log("greeting response");
//   return response;
// }

// export const onRequest = sequence(validation, auth, greeting);

// =======================
//         Output 
// =======================

// validation request
// auth request
// greeting request
// greeting response
// auth response
// validation response