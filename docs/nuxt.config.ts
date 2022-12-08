// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/styles/fonts.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],

  // https://color-mode.nuxtjs.org/
  colorMode: { classSuffix: '' },

  app: {
    head: {
      title: 'Vue Select',
      meta: [{ name: 'description', content: 'My amazing site.' }],
    },
  },

  // https://content.nuxtjs.org/api/configuration
  content: {
    documentDriven: true,

    // https://content.nuxtjs.org/api/configuration/#highlighttheme
    highlight: {
      theme: {
        default: 'one-dark-pro',
        dark: 'github-dark',
        // sepia: "monokai",
      },
    },

    markdown: {
      remarkPlugins: {},
      rehypePlugins: {
        'rehype-autolink-headings': false,
      },
    },
  },

  build: {
    // @see https://github.com/tailwindlabs/headlessui/discussions/1545#discussioncomment-2871517
    transpile: ['@headlessui/vue'],
  },
})
