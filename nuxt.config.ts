// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {defineNuxtConfig} from "nuxt"
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
       
      ],
      unocss: {
        uno: true,
        preflight: true,
      },
      Colormode:{
        preference: 'system',
        classSuffix: '' ,
      },
      colorMode: {
        preference: "system",
        fallback: "light",
        classSuffix: "",
      },
})
