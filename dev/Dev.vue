<template>
  <div class="flex items-center justify-center pt-40">
    <ListBox
      v-model="selected"
      v-model:open="open"
      class="px-2 text-left border border-gray-500 rounded w-64 relative h-12"
    >
      {{ selected?.label }}

      <ListBoxMenu
        class="absolute inset-0 top-12 w-full h-64 overflow-y-scroll space-y-1 border rounded"
      >
        <ListBoxOption
          @click="selected = country"
          v-for="country in config.options"
          :key="country.id"
          :class="['px-2 py-1']"
          :value="country"
          #default="{ isSelected }"
        >
          <span :class="{ 'text-indigo-600': isSelected }">
            {{ country.label }}
          </span>
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
    open: false,

    config: {
      options: countries,
    },
  }),
}
</script>
