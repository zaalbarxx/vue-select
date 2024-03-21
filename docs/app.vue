<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import ApplicationHeader from '~/components/ApplicationHeader.vue'
import SidebarNavigation from '~/components/SidebarNavigation.vue'
import PageContent from '~/components/PageContent.vue'
import '../src/css/vue-select.css'

useHead({
  title: 'Vue Select',
  bodyAttrs: { class: 'bg-white dark:bg-slate-900' },
})

const { page } = useContent()
</script>

<template>
  <div>
    <ApplicationHeader />
    <Hero v-if="page?.hero" />
    <div
      class="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <SidebarNavigation />
      <PageContent />
    </div>
  </div>
</template>
