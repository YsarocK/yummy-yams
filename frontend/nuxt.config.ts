// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    ssr:false,
    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },
  modules:[
      "@pinia/nuxt"
  ]
})
