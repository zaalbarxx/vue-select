import meta from './config/meta'
import head from './config/head'
import plugins from './config/plugins'
import themeConfig from './config/themeConfig'
import { resolve } from 'path'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import * as path from 'node:path'

export default defineUserConfig({
  title: 'Vue Select',
  description: meta.description,
  head,
  plugins,
  theme: defaultTheme(themeConfig),
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, '../../src')),
    },
  },
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../../src'),
        },
        dedupe: ['vue']
      }
    }
  }),
})
