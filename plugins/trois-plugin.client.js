import { TroisJSVuePlugin } from 'troisjs/build/trois'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(TroisJSVuePlugin)
})