import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Federated Platform",
  description: "Documentation related to BBMRI-ERIC Federated Platforms",
  base: '/FPonboarding/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/Contact' }
    ],

    sidebar: [
      {
        text: 'Tools',
        items: [
          { text: 'Directory', link: '/Directory' },
          { text: 'Negotiator', link: '/Negotiator' },
          { text: 'Locator', link: '/Locator' },
          { text: 'Provenance', link: '/Provenance' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
