/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

type User = {
  name: string;
  email: string;
  age: number;
  single: boolean;
}

declare namespace App {
  interface Locals {
    user: User;
    welcomeTitle: () => string;
    orders: Map<string, object>;
  }
}