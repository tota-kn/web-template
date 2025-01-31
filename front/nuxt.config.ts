import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: "",
      TITLE: "",
    },
  },
  compatibilityDate: "2024-11-01",
  nitro: {
    preset: "cloudflare-pages",
  },
  typescript: {
    typeCheck: true,
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
  i18n: {
    strategy: "prefix_and_default",
    locales: ["en", "ja"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
