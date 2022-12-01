<template>
  <div id="app">
    <!--    <v-select v-model="selected" v-bind="config" />-->

    <v-select v-model="selected" v-bind="config">
      <template #dropdown>
        <DropdownMenu>
          <DropdownMenuItem
            v-for="(option, index) in config.options"
            :key="option.value"
            :option="option"
            :index="index"
          >
            {{ option.label }}
          </DropdownMenuItem>
        </DropdownMenu>
      </template>
    </v-select>

    <v-select v-model="selected" v-bind="config">
      <template #dropdown>
        <DropdownMenu as="div">
          <div v-for="group in Object.keys(optionsGroupedByLabel)" :key="group">
            <div>{{ group }}</div>
            <ul>
              <DropdownMenuItem
                as="li"
                v-for="(option, index) in optionsGroupedByLabel[group]"
                :key="option.value"
                :option="option"
                :index="index"
              >
                {{ option.label }}
              </DropdownMenuItem>
            </ul>
          </div>
        </DropdownMenu>
      </template>
    </v-select>
  </div>
</template>

<script>
import vSelect from '@/components/Select.vue'
import countries from '../docs/.vuepress/data/countryCodes.js'
import DropdownMenu from '@/components/DropdownMenu.vue'
import DropdownMenuItem from '@/components/DropdownMenuItem.vue'

export default {
  components: { DropdownMenuItem, DropdownMenu, vSelect },
  data: () => ({
    selected: null,
    config: {
      options: countries,
      getOptionKey: ({ value }) => value,
    },
  }),
  computed: {
    optionsGroupedByLabel() {
      return this.config.options.reduce((acc, option) => {
        const label = option.label[0]
        if (!acc[label]) {
          acc[label] = []
        }
        acc[label].push(option)
        return acc
      }, {})
    },
  },
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
