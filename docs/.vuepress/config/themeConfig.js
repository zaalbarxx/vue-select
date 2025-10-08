export default {
  colorMode: 'light',
  colorModeSwitch: true,
  repo: 'sagalbot/vue-select',
  editLink: true,
  docsDir: 'docs',
  navbar: [{ text: 'Sandbox', link: '/sandbox' }],
  sidebar: [
      {
        text: 'Community',
        collapsible: false,
        children: [
          { text: 'Sponsors 🎉', link: '/sponsors' },
          { text: 'Contributors', link: '/contributors' },
        ],
      },
      {
        text: 'Getting Started',
        collapsible: false,
        children: [
          { text: 'Installation', link: '/guide/install' },
          { text: 'Dropdown Options', link: '/guide/options' },
          { text: 'Selecting Values', link: '/guide/values' },
          { text: 'Upgrading 2.x to 3.x', link: '/guide/upgrading' },
        ],
      },
      {
        text: 'Templating & Styling',
        collapsible: false,
        children: [
          { text: 'Child Components', link: '/guide/components' },
          { text: 'CSS & Selectors', link: '/guide/css' },
          { text: 'Slots', link: '/guide/slots' },
        ],
      },
      {
        text: 'Accessibility',
        collapsible: false,
        children: [
          { text: 'WAI-ARIA Spec', link: '/guide/accessibility' },
          { text: 'Localization', link: '/guide/localization' },
        ],
      },
      {
        text: 'Use Cases',
        collapsible: false,
        children: [
          { text: 'Validation', link: '/guide/validation' },
          { text: 'Limiting Selections', link: '/guide/selectable' },
          { text: 'Pagination', link: '/guide/pagination' },
          { text: 'Infinite Scroll', link: '/guide/infinite-scroll' },
          { text: 'Vuex', link: '/guide/vuex' },
          { text: 'AJAX', link: '/guide/ajax' },
          { text: 'Using in Loops', link: '/guide/loops' },
        ],
      },
      {
        text: 'Customizing',
        collapsible: false,
        children: [
          { text: 'Keydown Events', link: '/guide/keydown' },
          { text: 'Dropdown Position', link: '/guide/positioning' },
          { text: 'Dropdown Opening', link: '/guide/opening' },
          { text: 'Option Filtering', link: '/guide/filtering' },
        ],
      },
      {
        text: 'API',
        collapsible: false,
        children: [
          { text: 'Props', link: '/api/props' },
          { text: 'Slots', link: '/api/slots' },
          { text: 'Events', link: '/api/events' },
        ],
      },
  ],
}
