// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  plugins: ['~/plugins/trois-plugin.client.js'],
  build: {
    transpile: ['troisjs', 'gsap']
  }
})
