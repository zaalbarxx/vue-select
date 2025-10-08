import { defineClientConfig } from 'vuepress/client'
import enhanceApp from './enhanceApp.js'

export default defineClientConfig({
  enhance: enhanceApp,
})
