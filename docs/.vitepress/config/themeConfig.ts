import { defineConfig } from 'vitepress'

export const themeConfig = defineConfig({
    themeConfig: {
        siteTitle: 'Vue Select',
        // nav: [{link: '/', text: 'Home'}],

        editLink: {
            pattern:
                'https://github.com/sagalbot/vue-select/edit/master/docs/:path',
        },
        sidebar: [
            {
                text: 'Community',
                items: [
                    { text: 'Sponsors 🎉', link: 'sponsors' },
                    { text: 'Contributors', link: 'contributors' },
                ],
            },
            {
                text: 'Getting Started',
                items: [
                    { link: 'guide/install', text: 'Installation' },
                    { link: 'guide/options', text: 'Dropdown Options' },
                    { link: 'guide/values', text: 'Selecting Values' },
                    { link: 'guide/upgrading', text: 'Upgrading 2.x to 3.x' },
                ],
            },
            {
                text: 'Templating & Styling',
                items: [
                    { link: 'guide/components', text: 'Child Components' },
                    { link: 'guide/css', text: 'CSS & Selectors' },
                    { link: 'guide/slots', text: 'Slots' },
                ],
            },
            {
                text: 'Accessibility',
                items: [
                    { link: 'guide/accessibility', text: 'WAI-ARIA Spec' },
                    { link: 'guide/localization', text: 'Localization' },
                ],
            },
            {
                text: 'Use Cases',
                items: [
                    { link: 'guide/validation', text: 'Validation' },
                    { link: 'guide/selectable', text: 'Limiting Selections' },
                    { link: 'guide/pagination', text: 'Pagination' },
                    { link: 'guide/infinite-scroll', text: 'Infinite Scroll' },
                    { link: 'guide/vuex', text: 'Vuex' },
                    { link: 'guide/ajax', text: 'AJAX' },
                    { link: 'guide/loops', text: 'Using in Loops' },
                ],
            },
            {
                text: 'Customizing',
                items: [
                    { link: 'guide/keydown', text: 'Keydown Events' },
                    { link: 'guide/positioning', text: 'Dropdown Position' },
                    { link: 'guide/opening', text: 'Dropdown Opening' },
                    { link: 'guide/filtering', text: 'Option Filtering' },
                ],
            },
            {
                text: 'API',
                items: [
                    { link: 'api/props', text: 'Props' },
                    { link: 'api/slots', text: 'Slots' },
                    { link: 'api/events', text: 'Events' },
                ],
            },
        ],
    },
})
