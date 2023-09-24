// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  i18n: {
        baseUrl: 'http://localhost:3000',
        customRoutes: 'config',
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        },
        langDir: 'locales',
        lazy: true,
        locales: [
            {
                code: 'en',
                file: 'en.json',
                iso: 'en-US',
                name: 'English',
            },
        ],
  },
  modules: [
        '@nuxtjs/i18n', // https://v8.i18n.nuxtjs.org/options/vue-i18n
        '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/getting-started/setup
        '@pinia/nuxt' // https://pinia.vuejs.org/ssr/nuxt.html
    ],
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true
          }
        }
      }
    }
  }
})
