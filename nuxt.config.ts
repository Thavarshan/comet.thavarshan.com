// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    githubApiKey: process.env.NUXT_GITHUB_API_KEY,
    public: {
      githubUsername: process.env.NUXT_GITHUB_USERNAME,
    }
  },
});
