// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Gagnez des patisseries',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/styles/main.pcss'],
  runtimeConfig: {
    public: {
      apiUrl: `http://localhost:${process.env.API_PORT}` || 'http://localhost:8080',
    }
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'postcss-nested': {}
    }
  }
})
