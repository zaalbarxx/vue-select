<script setup lang="ts">
import { computed, defineProps, inject } from 'vue'
import type { InjectedListBoxProps } from '@/components/ListBox/ListBox.vue'
import { ListBoxInjectionKey } from '@/keys'

const props = withDefaults(
  defineProps<{
    as?: string
    value: unknown
  }>(),
  {
    as: 'div',
  }
)

const listBoxProps = inject<InjectedListBoxProps>(ListBoxInjectionKey)

const isSelected = computed(() => {
  return listBoxProps?.value.modelValue === props.value
})
</script>

<template>
  <Component :is="as">
    <slot v-bind="{ isSelected }"></slot>
  </Component>
</template>
