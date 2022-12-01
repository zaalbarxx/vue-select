<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { VueSelectInjectionKey } from '@/symbols'
import type { InjectedVueSelectContext, VueSelectOption } from '@/types'

const context = inject<InjectedVueSelectContext>(VueSelectInjectionKey)

interface Props {
  as?: string
  index: number
  option: VueSelectOption
  opinionated?: boolean
}

withDefaults(defineProps<Props>(), { as: 'li', opinionated: true })

const selectableOption = ref<HTMLElement | null>(null)

onMounted(() => {
  if (selectableOption.value) {
    context?.value.registerSelectableEl(selectableOption.value)
  }
})

onBeforeUnmount(() => {
  if (selectableOption.value) {
    context?.value.unRegisterSelectableEl(selectableOption.value)
  }
})
</script>

<template>
  <Component
    ref="selectableOption"
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
