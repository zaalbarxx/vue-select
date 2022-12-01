<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { DropdownMenuItemKey } from '@/symbols'
import type { InjectedDropdownMenuItemContext, VueSelectOption } from '@/types'

const context = inject<InjectedDropdownMenuItemContext>(DropdownMenuItemKey)

interface Props {
  as?: string
  index: number
  option: VueSelectOption
  opinionated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'li',
  opinionated: true,
})

const optionKey = computed(() => {
  return context?.value.getOptionKey(props.option)
})

const shouldDisplay = computed(() => {
  return context?.value.filteredOptionKeys.includes(optionKey.value)
})
</script>

<template>
  <Component
    v-if="shouldDisplay"
    :is="as"
    :id="`vs${context.uid}__option-${index}`"
    role="option"
    :class="
      opinionated
        ? [
            'vs__dropdown-option',
            {
              'vs__dropdown-option--deselect':
                context.isOptionDeselectable(option) &&
                index === context.typeAheadPointer,
              'vs__dropdown-option--selected': context.isOptionSelected(option),
              'vs__dropdown-option--highlight':
                index === context.typeAheadPointer,
              'vs__dropdown-option--disabled': !context.selectable(option),
            },
          ]
        : ''
    "
    :aria-selected="index === context.typeAheadPointer ? true : null"
    @mouseover="
      context.selectable(option) ? context.setTypeAheadPointer(index) : null
    "
    @click.prevent.stop="
      context.selectable(option) ? context.select(option) : null
    "
  >
    <slot></slot>
  </Component>
</template>
