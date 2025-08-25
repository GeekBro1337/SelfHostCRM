// types/authjs-nuxt.d.ts
declare module "@hebilicious/authjs-nuxt" {
  interface ModuleOptions {
    baseURL?: string;
  }
}

declare module "nuxt/schema" {
  interface NuxtConfig {
    authJs?: {
      baseURL?: string;
    };
  }
  interface NuxtOptions {
    authJs?: {
      baseURL?: string;
    };
  }
}
