// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
      APP_NAME: process.env.APP_NAME
    }
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
