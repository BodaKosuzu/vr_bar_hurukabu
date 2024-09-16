// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/vr_bar_hurukabu/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/vr_bar_hurukabu/favicon.ico",
        },
      ],
    },
  },
});
