// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@nuxtjs/seo', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-link-checker'],
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
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  site: {
    url: 'https://comet.thavarshan.com',
    name: 'Comet | Effortless Video Conversion',
    description: 'Comet is the no-nonsense video converter you’ve been waiting for. Built because nothing else was simple enough, it lets you convert your videos quickly and easily—no fluff, just results.',
    defaultLocale: 'en',
    trailingSlash: true
  },
  robots: {
    blockNonSeoBots: true
  },
  sitemap: {
    cacheMaxAgeSeconds: 3600,
    urls: [
      {
        loc: '/',
        images: [
          {
            loc: 'https://comet.thavarshan.com/images/screenshot_1.png',
            caption: 'Comet Video Converter',
            geoLocation: 'United Kingdom',
            title: 'Comet Video Converter',
            license: 'https://creativecommons.org/licenses/by/4.0/'
          }
        ]
      }
    ]
  }
});