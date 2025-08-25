export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@hebilicious/authjs-nuxt'
  ],

  authJs: {
    baseURL: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  },

  runtimeConfig: {
    authJs: {
      secret: process.env.AUTH_SECRET
    }
  }
})
