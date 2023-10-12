// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  builder: 'webpack',
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
    '@hebilicious/authjs-nuxt',
    '@nuxtjs/i18n', // https://v8.i18n.nuxtjs.org/options/vue-i18n
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/getting-started/setup
    '@pinia/nuxt' // https://pinia.vuejs.org/ssr/nuxt.html
  ],
  // Optional default config
  //  authJs: {
  //    verifyClientOnEveryRequest: true,
  //    guestRedirectTo: "/", // where to redirect if the user is not authenticated
  //    authenticatedRedirectTo: "/", // where to redirect if the user is authenticated
  //    baseUrl: "" // should be something like https://www.my-app.com
  //  },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  },
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
  },
  // TypeScript: https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    includeWorkspace: true,
    typeCheck: true,
    shim: false, // For TypeScript Vue Plugin (Volar).
  },
})
