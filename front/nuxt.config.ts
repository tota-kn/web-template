import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: "",
      TITLE: "Web Template Front",
    },
  },
  compatibilityDate: "2024-11-01",
  nitro: {
    preset: "cloudflare-pages",
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});