// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', 'nuxt-aos'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/style/_mixins-device.scss" as *;
          @use "@/assets/style/_mixins.scss" as *;
          @use "@/assets/style/_reset.scss" as *;
          @use "@/assets/style/_variables.scss" as *;`
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl'
      },
      title: 'Gabinet kosmetyczny Białystok TBS. Angelika Apanowicz-Kozicka',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content:
            'modelowanie ust, stylizacja rzęs, makijaż permanentny brwi, salon kosmetyczny, kosmetolog, kosmetolog białystok, usługi kosmetyczne, TBS'
        },
        {
          name: 'description',
          content:
            'Salon kosmetyczny Białystok. Profesjonalne usługi kosmetyczne Białystok. Modelowanie ust kwasem hialuronowym, makijaż permanentny brwi, mikrodermabrazja, peeling kawitacyjny, stylizacja i przedłużanie rzęs.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})