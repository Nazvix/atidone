export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "nuxt-auth-utils",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@pinia/colada-nuxt",
  ],
  devtools: {
    enabled: true,
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-07-30",
  hub: {
    database: true,
  },
  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: "single",
        commaDangle: "never",
      },
    },
  },
  runtimeConfig: {
    oauth: {
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
        redirectURL: process.env.NUXT_OAUTH_GOOGLE_REDIRECT_URI,
      },
    },
  },
});
