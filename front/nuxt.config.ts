import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['nitro-cloudflare-dev',
    '@nuxt/eslint'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: '',
      TITLE: 'Web Template Front',
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare-pages',
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'double',
      },
    },
  },
});
