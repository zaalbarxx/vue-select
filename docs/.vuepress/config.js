const { description } = require('./config/meta')
const head = require('./config/head')
const plugins = require('./config/plugins')
const themeConfig = require('./config/themeConfig')
const { resolve } = require('path')

module.exports = {
  title: 'Vue Select',
  description,
  head,
  plugins,
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
      },
    },
  },
}
