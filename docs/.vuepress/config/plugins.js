import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin} from '@vuepress/plugin-nprogress'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import githubPlugins from '../github/index'
import { getDirname, path } from 'vuepress/utils'

const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default [
  pwaPlugin({
      serviceWorker: false,
      updatePopup: true,
    }),
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, '../components'),
  }),
  activeHeaderLinksPlugin(),
  searchPlugin(),
  nprogressPlugin(),
  sitemapPlugin({
    hostname: 'https://vue-select.org',
  }),
  githubPlugins.clientDynamicModules()
]
