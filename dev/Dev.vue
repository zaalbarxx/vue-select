<template>
  <div id="app">
    <ListBox
      v-model="selected"
      :open="open"
      class="px-2 text-left border border-gray-500 rounded w-64 relative bg-blue-100 h-12"
    >
      {{ selected?.label }}

      <ListBoxMenu
        class="absolute inset-0 top-12 w-full h-64 overflow-y-scroll bg-red-100 space-y-1"
      >
        <ListBoxOption
          @click="selected = country"
          v-for="country in config.options"
          :key="country.id"
          class="px-2 py-1"
        >
          {{ country.label }}
        </ListBoxOption>
      </ListBoxMenu>
    </ListBox>
  </div>
</template>

<script>
import countries from '../docs/.vuepress/data/countryCodes.js'
import ListBox from '@/components/ListBox/ListBox.vue'
import ListBoxMenu from '@/components/ListBox/ListBoxMenu.vue'
import ListBoxOption from '@/components/ListBox/ListBoxOption.vue'

export default {
  components: { ListBoxOption, ListBoxMenu, ListBox },
  data: () => ({
    selected: null,

    config: {
      options: countries,
    },
  }),
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  font-family: -apple-system, sans-serif;
}

#app {
  height: 100%;
  max-width: 20rem;
  margin: 10rem auto 0;
}

hr {
  border: none;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 1em;
  padding-top: 1em;
  width: 90%;
}
</style>
